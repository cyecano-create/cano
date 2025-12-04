'use client';

import { getToken } from "@/lib/auth";
import { saveToken } from "@/lib/auth";   // <-- needed for logout
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation"; // <-- added for redirect

interface JwtPayload {
  sub: number;
  username: string;
  role: string;
  exp: number;
  iat: number;
}

export default function DashboardHome() {
  const [username, setUsername] = useState("Guest");
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const t = getToken();
    setToken(t);

    if (t) {
      try {
        const decoded = jwtDecode<JwtPayload>(t);
        if (decoded.username) {
          setUsername(decoded.username);
        }
      } catch (e) {
        console.error("Token decoding failed:", e);
      }
    }
  }, []);

  // --- ADDED LOGOUT FUNCTION ---
  function handleLogout() {
    saveToken("");   // delete token
    router.push('/login');
  }

  return (
    <div
      className="
        relative
        h-screen 
        flex items-center justify-center 
        bg-gradient-to-br from-blue-100 to-purple-200
        bg-cover bg-center
      "
    >

      <div className="bg-white/70 backdrop-blur-md p-10 rounded-xl shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome, <span className="text-blue-600">{username}</span>
        </h1>

        {token && (
          <div className="mt-6">
            <p className="text-sm text-gray-600">Your Bearer Token:</p>
            <pre className="p-3 bg-slate-100 text-xs mt-2 rounded-md break-all shadow">
              {token}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
