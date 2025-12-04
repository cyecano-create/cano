'use client';

import { useRouter } from 'next/navigation';
import { getToken, logoutUser } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [tokenChecked, setTokenChecked] = useState(false);
  const token = getToken();

  useEffect(() => {
    if (!token) {
      router.push('/login');
    } else {
      setTokenChecked(true);
    }
  }, [token, router]);

  function handleLogout() {
    logoutUser();
    router.push('/login');
  }

  // While checking token or redirecting
  if (!tokenChecked) {
    return null; // or a loading screen
  }

  return (
    <div className="p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Button variant="destructive" onClick={handleLogout}>Logout</Button>
      </header>

      {children}
    </div>
  );
}
