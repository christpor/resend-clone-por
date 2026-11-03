"use client";

import React from "react";
import Link from "next/link";
import { ResendLogo } from "@/components/brand-logos";
import Footer from "@/components/footer";

export default function AboutPage() {
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
          </nav>
        </div>
      </header>

      <main className="py-24 px-6 max-w-3xl mx-auto">
        <h1 className="text-5xl font-normal tracking-tight text-white mb-6">
          Building the modern email sending platform
        </h1>
        <p className="text-zinc-300 text-lg leading-relaxed mb-8">
          Email is the most resilient, universal communication protocol on the internet. But the developer experience around sending, receiving, and managing transactional emails has remained stuck in the 2000s.
        </p>
        <p className="text-zinc-400 text-base leading-relaxed mb-8">
          We started Resend to build the email platform we always wished we had: beautiful APIs, modern SDKs, clean visual editors, and rock-solid deliverability.
        </p>
      </main>

      <Footer />
    </div>
  );
}
