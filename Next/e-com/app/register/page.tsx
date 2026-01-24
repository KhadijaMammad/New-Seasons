"use client";

import { useState } from "react";
import { useRegister } from "@/lib/hooks/useAuth";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const register = useRegister();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    register.mutate({ email, password });
  };

  return (
    <div className="flex items-center justify-center h-[80vh] ">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md flex flex-col gap-4"
      >
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Register</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold p-3 rounded-lg transition"
        >
          Register
        </button>

        {/* {register.isLoading && <p className="text-center text-gray-500">Registering...</p>} */}
        {register.error && <p className="text-center text-red-500">{(register.error as any).message}</p>}
        {register.data && <p className="text-center text-green-500">{register.data.message}</p>}

        <p className="text-center text-gray-500 mt-2">
          Already have an account?{" "}
          <a href="/login" className="text-green-500 font-semibold hover:underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}
