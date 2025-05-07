import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import { Readable } from 'stream';

export const runtime = 'nodejs';

const SCOPES = ['https://www.googleapis.com/auth/drive.file'];
const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;
const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, '\n');


const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: clientEmail,
    private_key: privateKey,
  },
  scopes: SCOPES,
});

const drive = google.drive({ version: 'v3', auth });

export async function POST(req: Request) {
  console.log('🚀 API hit!');

  // Log env vars
  console.log('🔑 folderId:', folderId);
  console.log('🔑 clientEmail:', clientEmail);
  console.log('🔑 privateKey length:', privateKey?.length);

  if (!folderId || !clientEmail || !privateKey) {
    console.error('❌ Missing Google API environment variables');
    return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 });
  }

  try {
    const formData = await req.formData();
    if (!formData) throw new Error('No formData received');

    console.log('📦 Incoming formData:');
    for (const [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    const nickname = formData.get('nickname') as string;
    const email = formData.get('email') as string;
    const discordId = formData.get('discordId') as string;
    const file = formData.get('file') as File;

    if (!nickname || !email || !file) {
      console.error('❌ Missing required fields: nickname, email, or file');
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error('❌ Invalid email format');
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    const dateStr = new Date().toISOString().split('T')[0].replace(/-/g, '');
    const ext = file.name.split('.').pop();
    const fileName = `${nickname}-${email}-${dateStr}.${ext}`;

    console.log(`✅ Prepared filename: ${fileName}`);

    let buffer;
    try {
      buffer = Buffer.from(await file.arrayBuffer());
      console.log(`✅ File buffer size: ${buffer.length} bytes`);
    } catch (err) {
      console.error('❌ Failed to convert file to buffer:', err);
      return NextResponse.json({ error: 'Failed to process file' }, { status: 500 });
    }

    // Optional file size check (max 5MB)
    const MAX_SIZE = 5 * 1024 * 1024;
    if (buffer.length > MAX_SIZE) {
      console.error('❌ File too large');
      return NextResponse.json({ error: 'File size exceeds 5MB limit' }, { status: 400 });
    }

    const stream = Readable.from(buffer);

    let fileData;
    try {
      const uploadRes = await drive.files.create({
        requestBody: {
          name: fileName,
          parents: [folderId!],
        },
        media: {
          mimeType: file.type,
          body: stream,
        },
        fields: 'id, webViewLink',
      });
      fileData = uploadRes.data;
    } catch (err: any) {
      console.error('❌ Google Drive upload error:', err.message, err.response?.data);
      return NextResponse.json({ error: 'Google Drive upload failed' }, { status: 500 });
    }

    if (!fileData.id) {
      console.error('❌ Google Drive upload failed, no file ID');
      return NextResponse.json({ error: 'Drive upload failed' }, { status: 500 });
    }

    try {
      await drive.permissions.create({
        fileId: fileData.id,
        requestBody: { role: 'reader', type: 'anyone' },
      });
    } catch (err: any) {
      console.error('❌ Failed to set file permissions:', err.message);
      return NextResponse.json({ error: 'Failed to set file permissions' }, { status: 500 });
    }

    const fileUrl = fileData.webViewLink;
    console.log(`✅ File uploaded: ${fileUrl}`);

    return NextResponse.json({ success: true, fileUrl });
  } catch (err: any) {
    console.error('❌ Upload error:', err.message);
    return NextResponse.json({ error: err.message || 'Upload failed' }, { status: 500 });
  }
}
