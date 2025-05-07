'use client';

import Link from 'next/link';
import { ModeToggle } from '@/components/ui/ThemeToggle';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { useSession } from '@/components/SessionProvider'; // ✅ import session hook
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabaseClient';

export default function Navbar() {
  const session = useSession(); // ✅ get session from context
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-background">
      {/* Logo / Branding */}
      <Link href="/" className="text-xl font-bold">
        After School
      </Link>

      {/* Nav Links */}
      <div className="flex space-x-4">
        <Link href="/resume-review">
          <Button variant="ghost">Resume Review</Button>
        </Link>
      </div>

      {/* Right-side controls */}
      <div className="flex items-center space-x-4">
        <ModeToggle />
        {session?.user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">Account</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href="/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/settings">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link href="/login">
            <Button>Login</Button>
          </Link>
        )}
      </div>
    </nav>
  );
}
