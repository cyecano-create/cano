'use client';

import { useRouter } from "next/navigation";
import { useState, FormEvent } from 'react';
import { saveToken } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { Card, CardContent } from '@/components/ui/card';
import { API_BASE } from '@/lib/config';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      console.log("Login response:", data);

      if (!res.ok || !data.accesToken) {
        setError(data.error || 'Login failed');
        return;
      }

      saveToken(data.accesToken);
      router.push('/dashboard');
    } catch (error) {
      setError('An error occurred during login. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex items-center justify-center h-screen px-4
      bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600">

      {/* --- BACK BUTTON TO HOME PAGE --- */}
      <button
        onClick={() => router.push('/')}
        className="absolute top-6 left-6 bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg shadow"
      >
        Back
      </button>

      {/* Glass Login Card */}
      <Card className="w-full max-w-sm p-6 shadow-2xl
        bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl">

        <CardContent>
          <h1 className="text-3xl font-extrabold text-center mb-6 text-white">
            Welcome Back
          </h1>
          <p className="text-center text-white/70 mb-6">
            Login to continue to your dashboard
          </p>

          <form onSubmit={handleLogin} className="space-y-4">

            <Input
              placeholder="Username"
              className="bg-white/40 text-white placeholder-white/70 border-white/50"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={loading}
            />

            <Input
              type="password"
              placeholder="Password"
              className="bg-white/40 text-white placeholder-white/70 border-white/50"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />

            {error && (
              <p className="text-red-300 text-sm text-center">{error}</p>
            )}

            {/* --- VISIBLE BLUE LOGIN BUTTON --- */}
            <Button
              className="w-full text-lg py-2 bg-blue-600 hover:bg-blue-700 text-white"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </Button>
          </form>

          <Button
            variant="link"
            className="mt-4 w-full text-white"
            onClick={() => router.push('/register')}
            disabled={loading}
          >
            Create an account
          </Button>
        </CardContent>
      </Card>
    </div>
  );
} 
