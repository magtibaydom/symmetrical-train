'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface EmailFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export default function EmailField({ value, onChange }: EmailFieldProps) {
  return (
    <div className="mb-4 mt-4">
      <Label htmlFor="email" className="block mb-2 text-sm font-semibold">Email</Label>
      <Input
        id="email"
        type="email"
        placeholder="you@example.com"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="focus:outline-2"
      />
    </div>
  );
}
