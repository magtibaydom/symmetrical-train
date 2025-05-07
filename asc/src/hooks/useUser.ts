'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabaseClient';
import type { User } from '@supabase/supabase-js';

export function useUser() {
  const supabase = createClient();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
    };
    getUser();
  }, [supabase]);

  return user;
}
