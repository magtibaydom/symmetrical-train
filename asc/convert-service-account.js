const fs = require('fs');

// Replace this with the path to your downloaded service account JSON
const jsonFilePath = './service-account.json';

const raw = fs.readFileSync(jsonFilePath, 'utf8');
const data = JSON.parse(raw);

const privateKeyEscaped = data.private_key.replace(/\n/g, '\\n');

console.log('\n✅ COPY THIS INTO YOUR .env.local:\n');
console.log(`GOOGLE_SERVICE_ACCOUNT_EMAIL=${data.client_email}`);
console.log(`GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY=${privateKeyEscaped}\n`);
