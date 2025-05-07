'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabaseClient';

export default function LoginPage() {
  const supabase = createClient();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('Loading...');
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage('Login successful! Redirecting...');
      window.location.replace('/dashboard'); // ✅ Hard reload
    }
  };

  return (
    <form onSubmit={handleLogin} className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Log In</h1>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2 w-full" />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="border p-2 w-full" />
      <button type="submit" className="bg-green-500 text-white p-2 w-full rounded">Log In</button>
      <p>{message}</p>
    </form>
  );
}
