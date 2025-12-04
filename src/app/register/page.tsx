'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { API_BASE } from '@/lib/config';

export default function RegisterPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [error, setError] = useState('');

  async function handleRegister(e: FormEvent) {
    e.preventDefault();
    setError('');

    const res = await fetch(`${API_BASE}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, gender }),
    });

    const data = await res.json();
    if (!res.ok) {
      setError(data.message || 'Register failed');
      return;
    }

    router.push('/login');
  }

  return (
    <div
      className="flex items-center justify-center h-screen px-4
      bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900"
    >
      {/* Glass Card */}
      <Card
        className="w-full max-w-sm p-6 shadow-2xl
        bg-white/10 backdrop-blur-2xl border border-purple-300/20 rounded-2xl"
      >
        <CardContent>
          <h1 className="text-3xl font-extrabold text-center mb-6 text-purple-200">
            Create Account
          </h1>

          <p className="text-center text-purple-300 mb-6">
            Join us to access your dashboard
          </p>

          <form onSubmit={handleRegister} className="space-y-4">

            <Input
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-white-200/20 text-white-100 placeholder-white-300 border-white-400/30"
            />

            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white-200/20 text-white-100 placeholder-white-300 border-white-400/30"
            />

            <select
              className="border-purple-400/30 text-purple-100 bg-purple-200/20 rounded p-2 w-full"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="" className="text-gray-800">Select gender</option>
              <option value="male" className="text-gray-800">Male</option>
              <option value="female" className="text-gray-800">Female</option>
              <option value="other" className="text-gray-800">Other</option>
            </select>

            {error && (
              <p className="text-red-300 text-sm text-center">{error}</p>
            )}

            <Button
              className="w-full text-lg py-2 bg-purple-700 hover:bg-purple-800 text-white"
              type="submit"
            >
              Register
            </Button>
          </form>

          <Button
            variant="link"
            className="mt-4 w-full text-purple-200"
            onClick={() => router.push('/login')}
          >
            Back to Login
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
