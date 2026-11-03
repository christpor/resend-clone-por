"use client";

import React from "react";
import Link from "next/link";
import { ResendLogo } from "@/components/brand-logos";
import Footer from "@/components/footer";

export default function EnterprisePage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-zinc-800">
      <header className="sticky top-0 z-50 border-b border-zinc-900/80 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2 text-white hover:opacity-90 transition">
            <ResendLogo className="h-6 w-auto text-white" />
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link href="/" className="text-zinc-400 hover:text-white transition">Home</Link>
            <Link href="/pricing" className="text-zinc-400 hover:text-white transition">Pricing</Link>
            <Link href="/login" className="text-zinc-400 hover:text-white transition">Log in</Link>
          </nav>
        </div>
      </header>

      <main className="py-24 px-6 max-w-5xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white mb-6">
          Your next <span className="font-serif italic">billion</span> emails
        </h1>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-16">
          World-class infrastructure, dedicated IP pools, and 99.99% uptime SLAs built for fast-moving engineering teams at scale.
        </p>

        <div className="max-w-xl mx-auto rounded-2xl border border-zinc-800 bg-[#070707] p-8 text-left shadow-2xl">
          <h2 className="text-xl font-semibold text-white mb-6">Talk to our Enterprise team</h2>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Inquiry submitted."); }}>
            <div>
              <label className="block text-xs text-zinc-400 mb-1.5">Work Email</label>
              <input
                type="email"
                required
                placeholder="alex@company.com"
                className="w-full rounded-xl border border-zinc-800 bg-black px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:border-zinc-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs text-zinc-400 mb-1.5">Estimated Monthly Volume</label>
              <select className="w-full rounded-xl border border-zinc-800 bg-black px-4 py-2.5 text-sm text-white focus:border-zinc-500 focus:outline-none">
                <option>500k – 2M emails / mo</option>
                <option>2M – 10M emails / mo</option>
                <option>10M+ emails / mo</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-zinc-400 mb-1.5">Use Case & Architecture</label>
              <textarea
                rows={3}
                placeholder="Tell us about your sending requirements..."
                className="w-full rounded-xl border border-zinc-800 bg-black px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:border-zinc-500 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition"
            >
              Submit Enterprise Request
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
