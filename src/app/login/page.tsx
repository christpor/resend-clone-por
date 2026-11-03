"use client";

import React from "react";
import Link from "next/link";
import { ResendLogo } from "@/components/brand-logos";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-between p-6 text-white selection:bg-zinc-800">
      <div className="flex justify-between items-center">
        <Link href="/" className="hover:opacity-80 transition">
          <ResendLogo className="h-6 w-auto text-white" />
        </Link>
        <Link href="/signup" className="text-xs text-zinc-400 hover:text-white transition">
          Sign up
        </Link>
      </div>

      <div className="max-w-sm w-full mx-auto my-auto p-8 rounded-2xl border border-zinc-800 bg-[#070707] shadow-2xl">
        <h1 className="text-2xl font-bold tracking-tight text-white mb-2">Log in to Resend</h1>
        <p className="text-xs text-zinc-400 mb-8">Enter your email to receive a magic sign-in link.</p>

        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Magic link sent."); }}>
          <div>
            <label className="block text-xs text-zinc-400 mb-1.5">Email address</label>
            <input
              type="email"
              required
              placeholder="you@domain.com"
              className="w-full rounded-xl border border-zinc-800 bg-black px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:border-zinc-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition"
          >
            Continue with Email
          </button>
        </form>

        <div className="relative my-6 text-center">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-zinc-800" /></div>
          <span className="relative bg-[#070707] px-3 text-[11px] text-zinc-500 uppercase">or</span>
        </div>

        <button className="w-full py-2.5 rounded-xl border border-zinc-800 bg-zinc-950 hover:bg-zinc-900 text-xs text-zinc-300 font-medium transition flex items-center justify-center gap-2">
          <span>Continue with GitHub</span>
        </button>
      </div>

      <div className="text-center text-xs text-zinc-600">
        By continuing, you agree to Resend&apos;s Terms of Service and Privacy Policy.
      </div>
    </div>
  );
}
