'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ModeToggle } from '@/components/ui/ThemeToggle';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // TODO: replace with real auth

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
        {/* Future tools: just uncomment when ready */}
        {/* <Link href="/calendar">
          <Button variant="ghost">Calendar</Button>
        </Link>
        <Link href="/doc-to-deck">
          <Button variant="ghost">Doc to Deck</Button>
        </Link> */}
      </div>

      {/* Right-side controls */}
      <div className="flex items-center space-x-4">
        <ModeToggle />
        {isAuthenticated ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">Account</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
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
