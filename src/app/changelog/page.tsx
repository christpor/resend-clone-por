"use client";

import React from "react";
import Link from "next/link";
import { ResendLogo } from "@/components/brand-logos";
import Footer from "@/components/footer";

const RELEASES = [
  {
    date: "October 2026",
    title: "Broadcasts & Audiences GA",
    description: "Send marketing and transactional broadcasts to segmented contact lists with full deliverability tracking.",
  },
  {
    date: "September 2026",
    title: "Multi-Region Outbound Relays",
    description: "Global delivery redundancy across US-East, EU-Central, and AP-East with sub-100ms API latency.",
  },
  {
    date: "August 2026",
    title: "Realtime Inbound Webhooks v2",
    description: "Receive and parse inbound emails with automatic attachment parsing and spam verification signatures.",
  },
];

export default function ChangelogPage() {
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
        <h1 className="text-5xl font-normal tracking-tight text-white mb-4">Changelog</h1>
        <p className="text-zinc-400 text-base mb-16">New updates, features, and improvements shipped to Resend.</p>

        <div className="space-y-12">
          {RELEASES.map((rel) => (
            <div key={rel.title} className="border-l border-zinc-800 pl-6 space-y-2">
              <span className="text-xs font-mono text-zinc-500">{rel.date}</span>
              <h3 className="text-xl font-semibold text-white">{rel.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{rel.description}</p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
