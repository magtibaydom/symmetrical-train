'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ProcessOverview() {
  return (
      <div className="space-y-6 p-6 rounded-xl">
  <h2 className="text-xl font-bold text-center">💥 How It Works</h2>
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
      <div className="font-semibold">1. Upload your resume</div>
      <div className="text-sm text-gray-700 dark:text-gray-300">
        Submit your file and you&apos;re in. No hoops, no drama — just drop it and let&apos;s go.
      </div>
    </div>
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
      <div className="font-semibold">2. Get feedback within a week</div>
      <div className="text-sm text-gray-700 dark:text-gray-300">
        We&apos;ll review it and hit you back in 7 days or less. Keep an eye on your inbox — your glow-up&apos;s coming.
      </div>
    </div>
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
      <div className="font-semibold">3. Want us to break it down on Discord?</div>
      <div className="text-sm text-gray-700 dark:text-gray-300">
        Join our Discord server so we can connect with you. We&apos;ll chat, vibe, and make sure you&apos;re set up for success.
      </div>
    </div>
  </div>
  <p className="text-center text-sm text-muted-foreground mt-4">
    We&apos;re here to help you level up — whether you&apos;re prepping for your first gig or aiming for that next big leap. 🚀
  </p>
</div>
  );
}
