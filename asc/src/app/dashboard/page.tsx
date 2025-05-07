import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import LogoutButton from '@/components/LogOutButton';

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: cookieStore }
  );

  const {
    data: { session },
  } = await supabase.auth.getSession();

  // 💥 If middleware works, you don't need to block here
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <p>Welcome, {session?.user?.email ?? 'User'}</p>
      <LogoutButton />
    </div>
  );
}
