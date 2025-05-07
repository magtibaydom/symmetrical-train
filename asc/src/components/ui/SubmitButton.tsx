'use client';

import { Button } from '@/components/ui/button';

interface SubmitButtonProps {
  onClick: () => void;
}

export default function SubmitButton({ onClick }: SubmitButtonProps) {
  return (
    <Button variant="default" onClick={onClick} className="w-full mt-4">
      Submit
    </Button>
  );
}
