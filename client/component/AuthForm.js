"use client";
import { useState } from "react";
import { Mail, Lock } from "lucide-react";

export default function AuthForm({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-24 p-10 bg-white rounded-2xl shadow-xl border border-gray-200"
    >
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 tracking-tight">
        Sign in to your account
      </h2>

      <div className="mb-5">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-600 mb-1"
        >
          Email address
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-black"
          />
        </div>
      </div>

      <div className="mb-6">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-600 mb-1"
        >
          Password
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-black"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      >
        Login
      </button>
    </form>
  );
}
