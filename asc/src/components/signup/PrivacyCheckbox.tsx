'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface PrivacyCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function PrivacyCheckbox({
  checked,
  onChange,
}: PrivacyCheckboxProps) {
  return (
    <div className="mb-4 flex items-center">
      <Checkbox
        id="privacy-policy"
        checked={checked}
        onCheckedChange={(state) => onChange(!!state)}
      />
      <Label htmlFor="privacy-policy" className="ml-2">
        I agree to the privacy policy
      </Label>
    </div>
  );
}
