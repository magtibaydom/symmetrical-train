'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import ProgressBar from '@/components/ui/ProgressBar';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

export default function UploadForm() {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [discordId, setDiscordId] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [preferredFeedback, setPreferredFeedback] = useState('none');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      alert('Please upload your resume file.');
      return;
    }

    setLoading(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval);
          return prev;
        }
        return prev + 10;
      });
    }, 300);

    const formData = new FormData();
    formData.append('nickname', nickname);
    formData.append('email', email);
    formData.append('discordId', discordId);
    formData.append('preferredFeedback', preferredFeedback);
    formData.append('file', file);

    const res = await fetch('/api/upload-resume', {
      method: 'POST',
      body: formData,
    });

    clearInterval(interval);
    setProgress(100);

    if (res.ok) {
      setSuccess(true);
    } else {
      alert('Error uploading resume.');
      setProgress(0);
    }

    setLoading(false);
  };

  if (success) {
    return (
      <div className="flex flex-col items-center text-center space-y-4 p-6 bg-green-50 dark:bg-green-900 rounded-xl shadow-md">
        <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-300" />
        <h2 className="text-lg font-semibold">✅ Thanks for submitting!</h2>
        <p className="text-sm text-muted-foreground">
          Want to track your review and get extra feedback?
        </p>
        <Link href="/signup">
          <span className="mt-2 inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
            Create an account →
          </span>
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="nickname">Nickname</Label>
        <Input id="nickname" value={nickname} onChange={(e) => setNickname(e.target.value)} required />
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>

      <div>
        <Label htmlFor="discordId">Discord ID (optional)</Label>
        <Input id="discordId" value={discordId} onChange={(e) => setDiscordId(e.target.value)} />
      </div>

      <div>
        <Label htmlFor="preferredFeedback">Preferred Additional Feedback</Label>
        <Select onValueChange={(value) => setPreferredFeedback(value)} defaultValue="email">
          <SelectTrigger>
            <SelectValue placeholder="Select feedback method" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="email">Email only</SelectItem>
            <SelectItem value="discord">Email + Discord Call</SelectItem>
            <SelectItem value="gmeet">Email + Google Meet</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Discord and Google Meet options are subject to mentor&apos;s availability — but we&apos;ll try our best to make it happen!
        </p>
      </div>

      <div>
        <Label htmlFor="file">Upload Resume (.pdf, .doc, .docx)</Label>
        <Input type="file" id="file" accept=".pdf,.doc,.docx" onChange={(e) => setFile(e.target.files?.[0] || null)} required />
      </div>

      <div className="text-sm text-gray-600 dark:text-gray-400">
        We will handle your data in accordance with our <a href="/privacy" className="underline">privacy policy</a>.
      </div>

      {loading && <ProgressBar progress={progress} />}

      <Button type="submit" disabled={loading} className="flex items-center justify-center w-full">
        {loading ? 'Uploading...' : 'Submit Resume'}
      </Button>
    </form>
  );
}
