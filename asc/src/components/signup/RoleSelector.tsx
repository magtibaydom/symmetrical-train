'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

type Role = 'mentor' | 'learner';

interface RoleSelectorProps {
  onRoleChange: (role: Role) => void;
}

export default function RoleSelector({ onRoleChange }: RoleSelectorProps) {
  const [selected, setSelected] = useState<Role>('mentor');

  const handleClick = (role: Role) => {
    setSelected(role);
    onRoleChange(role);
  };

  return (
    <div className="flex gap-4 mb-4 justify-center">
      <Button className="big-btn"
        variant={selected === 'mentor' ? 'default' : 'outline'}
        onClick={() => handleClick('mentor')}
      >
        For Mentors
      </Button>
      <Button className="big-btn"
        variant={selected === 'learner' ? 'default' : 'outline'}
        onClick={() => handleClick('learner')}
      >
        For Learners
      </Button>
    </div>
  );
}
