'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ProcessOverview() {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>How the Resume Review Works</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 text-sm">
        <p>1️⃣ Submit your resume + details below.</p>
        <p>2️⃣ (Optional) We anonymize your resume to protect your privacy.</p>
        <p>3️⃣ We match you with a mentor in your field.</p>
        <p>4️⃣ You receive feedback via text, Loom video, or a short call.</p>
        <p className="font-semibold">💥 100% free. No strings attached.</p>
      </CardContent>
    </Card>
  );
}
