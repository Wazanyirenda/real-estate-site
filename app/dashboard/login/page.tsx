'use client';

import { useRouter } from 'next/navigation';
import { useState, type FormEvent } from 'react';
import { supabase } from '@/lib/supabase';

export default function DashboardLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMessage(error.message ?? 'Login failed');
      setLoading(false);
      return;
    }

    router.replace('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md bg-white p-6 shadow-2xl sm:p-10">
        <div className="mb-6">
          <div className="mb-6 flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo.svg" alt="Calm Mountain Properties" className="h-12 w-auto object-contain" />
            <div>
              <p className="text-black font-bold text-base uppercase tracking-wide">Admin Portal</p>
              <p className="mb-0 text-[10px] font-bold uppercase tracking-[0.28em] text-gray-400">Secure Access Required</p>
            </div>
          </div>
          <h1 className="mb-2 text-2xl font-bold uppercase text-black">CMS Sign In</h1>
          <p className="text-sm text-gray-500">Sign in to manage careers, listings, and media.</p>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.22em] text-gray-500">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 bg-white px-4 py-3 text-sm text-black placeholder:text-gray-500 focus:outline-none focus:border-black focus:ring-2 focus:ring-black/10 transition-colors"
              required
              autoComplete="email"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.22em] text-gray-500">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 bg-white px-4 py-3 text-sm text-black placeholder:text-gray-500 focus:outline-none focus:border-black focus:ring-2 focus:ring-black/10 transition-colors"
              required
              autoComplete="current-password"
            />
          </div>

          {errorMessage && (
            <div className="border border-red-200 bg-red-50 p-3 text-sm text-red-600">
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black px-6 py-3 text-sm font-bold uppercase tracking-[0.22em] text-white transition-colors hover:bg-[#2e2e2e] cursor-pointer disabled:opacity-60"
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  );
}

