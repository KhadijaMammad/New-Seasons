"use client";

import { useState } from "react";
import { useLogin } from "@/lib/hooks/useAuth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = useLogin();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login.mutate({ email, password });
  };

  return (
    <div className="flex items-center justify-center h-[80vh]">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md flex flex-col gap-4"
      >
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Login</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <button
          type="submit"
          className="bg-purple-500 hover:bg-purple-600 text-white font-semibold p-3 rounded-lg transition"
        >
          Login
        </button>

        {/* {login.isLoading && <p className="text-center text-gray-500">Logging in...</p>} */}
        {login.error && <p className="text-center text-red-500">{(login.error as any).message}</p>}
        {login.data && <p className="text-center text-green-500">{login.data.message}</p>}

        <p className="text-center text-gray-500 mt-2">
          Don’t have an account?{" "}
          <a href="/register" className="text-purple-500 font-semibold hover:underline">
            Register
          </a>
        </p>
      </form>
    </div>
  );
}
