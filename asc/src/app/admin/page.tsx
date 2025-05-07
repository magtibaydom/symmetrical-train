'use client';

import { useEffect, useState } from 'react';
import { useSession } from '@/components/SessionProvider';
import { createClient } from '@/lib/supabaseClient';
import LogoutButton from '@/components/LogOutButton';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
  const session = useSession();
  const supabase = createClient();
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAdmin = async () => {
      if (session) {
        const { data } = await supabase.from('profiles').select('role').eq('id', session.user.id).single();
        setIsAdmin(data?.role === 'admin');
      } else {
        setIsAdmin(false);
      }
    };
    checkAdmin();
  }, [session, supabase]);

  if (isAdmin === null) return <p className="p-4">Checking permissions...</p>;
  if (!session) return <p className="p-4">You must be logged in to view this page.</p>;
  if (!isAdmin) return <p className="p-4">🚫 Access denied. Admins only.</p>;

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Admin Dashboard</h1>
      <p>Welcome, {session.user.email}</p>
      <LogoutButton />
    </div>
  );
}
