"use client";

import React, { useState } from "react";
import { ArrowRight, Check, Code2, Copy, Globe, Lock, Mail, ShieldCheck, Sparkles, Terminal, Zap } from "lucide-react";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const codeSnippet = `import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'delivered@resend.dev',
  subject: 'Hello World',
  html: '<p>Congrats on sending your first email!</p>'
});`;

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-zinc-800 selection:text-white">
      {/* 🧭 NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-zinc-900/80 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-2 font-bold text-lg tracking-tight text-white">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-black font-extrabold text-sm">
                R
              </span>
              Resend
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-400">
              <a href="#features" className="transition hover:text-white">Features</a>
              <a href="#code" className="transition hover:text-white">SDK</a>
              <a href="#enterprise" className="transition hover:text-white">Enterprise</a>
              <a href="#pricing" className="transition hover:text-white">Pricing</a>
              <a href="#docs" className="transition hover:text-white">Documentation</a>
            </nav>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <a href="#signin" className="hidden sm:inline-block text-zinc-400 hover:text-white transition">Sign in</a>
            <a
              href="#get-started"
              className="rounded-full bg-white px-4 py-1.5 font-medium text-black transition hover:bg-zinc-200 active:scale-95"
            >
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* ⚡ HERO SECTION */}
      <section className="relative overflow-hidden pt-24 pb-20 md:pt-36 md:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />
        
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/80 px-3.5 py-1 text-xs text-zinc-300 backdrop-blur-md mb-8">
            <Sparkles className="h-3.5 w-3.5 text-zinc-400" />
            <span>Broadcasts & Audiences now in General Availability</span>
            <ArrowRight className="h-3 w-3 text-zinc-500" />
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Email for <br className="hidden sm:inline" />
            <span className="bg-gradient-to-b from-white via-zinc-200 to-zinc-600 bg-clip-text text-transparent">
              developers
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-zinc-400 sm:text-lg md:text-xl">
            The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#get-started"
              className="flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-zinc-200 active:scale-95"
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#code"
              className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-6 py-3 font-semibold text-zinc-300 transition hover:border-zinc-700 hover:text-white active:scale-95"
            >
              <Terminal className="h-4 w-4" /> Documentation
            </a>
          </div>
        </div>
      </section>

      {/* 💻 CODE EXPERIENCE */}
      <section id="code" className="py-20 border-t border-zinc-900 bg-zinc-950/40">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <Code2 className="h-4 w-4 text-zinc-500" />
              <span>send-email.ts</span>
            </div>
            <button
              onClick={copyCode}
              className="flex items-center gap-1.5 rounded border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs text-zinc-300 hover:border-zinc-700 transition"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>

          <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-6 font-mono text-xs sm:text-sm shadow-2xl">
            <pre className="text-zinc-300 leading-relaxed overflow-x-auto">
              <code>{codeSnippet}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* 🛡️ FEATURES MATRIX */}
      <section id="features" className="py-24 border-t border-zinc-900">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Engineered for Reliability</h2>
            <p className="mt-4 text-zinc-400 text-sm sm:text-base">
              Built from first principles for mission-critical deliverability, sub-second API latency, and zero friction.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-zinc-900 bg-zinc-950/50 p-8 hover:border-zinc-800 transition">
              <Zap className="h-6 w-6 text-white mb-4" />
              <h3 className="font-semibold text-lg text-white">Sub-100ms Latency</h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Send API requests dispatched across multi-region edge nodes worldwide with zero queue lag.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-900 bg-zinc-950/50 p-8 hover:border-zinc-800 transition">
              <ShieldCheck className="h-6 w-6 text-white mb-4" />
              <h3 className="font-semibold text-lg text-white">99.99% Deliverability</h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Automated DKIM, SPF, and DMARC enforcement protecting brand sender reputation at scale.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-900 bg-zinc-950/50 p-8 hover:border-zinc-800 transition">
              <Globe className="h-6 w-6 text-white mb-4" />
              <h3 className="font-semibold text-lg text-white">Global Edge Webhooks</h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Stream real-time delivery, bounce, open, and click events straight into your database.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 📬 INTERACTIVE LEAD CAPTURE FORM */}
      <section id="get-started" className="py-20 border-t border-zinc-900 bg-zinc-950/80">
        <div className="mx-auto max-w-md px-6 text-center">
          <Mail className="mx-auto h-8 w-8 text-zinc-400 mb-4" />
          <h2 className="text-2xl font-bold text-white">Start Building Today</h2>
          <p className="mt-2 text-xs text-zinc-400">
            Join thousands of developers shipping emails with modern SDKs.
          </p>

          <form onSubmit={handleLeadSubmit} className="mt-6 flex flex-col gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your developer email..."
              required
              className="rounded-xl border border-zinc-800 bg-black px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-zinc-500 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-xl bg-white py-3 text-sm font-semibold text-black transition hover:bg-zinc-200 active:scale-95"
            >
              Request API Access
            </button>
          </form>

          {submitted && (
            <p className="mt-3 text-xs text-emerald-400">
              ✓ Access key dispatched! Check your terminal and inbox.
            </p>
          )}
        </div>
      </section>

      {/* 📄 FOOTER */}
      <footer className="border-t border-zinc-900 py-12 text-xs text-zinc-500">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Resend Clone · Clean-room engineered by craft-fullstack-por.</p>
          <div className="flex gap-6">
            <a href="https://github.com/resend/resend-node" className="hover:text-zinc-300 transition">GitHub</a>
            <a href="https://twitter.com/resend" className="hover:text-zinc-300 transition">Twitter</a>
            <a href="#privacy" className="hover:text-zinc-300 transition">Privacy</a>
            <a href="#terms" className="hover:text-zinc-300 transition">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
