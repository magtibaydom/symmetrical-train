'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const router = useRouter();
  const supabase = createClient();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('Loading...');
    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      setMessage(error.message);
    } else {
      await supabase.from('profiles').insert([{ id: data.user?.id, role: 'learner' }]);
      setMessage('Signup successful! Check your email to confirm.');
      router.push('/login');
    }
  };

  return (
    <form onSubmit={handleSignup} className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Sign Up</h1>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2 w-full" />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="border p-2 w-full" />
      <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded">Sign Up</button>
      <p>{message}</p>
    </form>
  );
}
