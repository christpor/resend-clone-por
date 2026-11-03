"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import BrandLogosSection, { ResendLogo } from "@/components/brand-logos";
import CodeShowcaseSection from "@/components/code-showcase";
import DevExperienceBento from "@/components/dev-experience-bento";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-zinc-800 selection:text-white">
      {/* 🧭 NAVIGATION (Matching Screenshot #0) */}
      <header className="sticky top-0 z-50 border-b border-zinc-900/80 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 text-white hover:opacity-90 transition">
              <ResendLogo className="h-6 w-auto text-white" />
            </Link>

            <nav className="hidden lg:flex items-center gap-6 text-sm text-zinc-400">
              <div className="flex items-center gap-1 cursor-pointer hover:text-white transition group">
                <Link href="/features/automations">Features</Link>
                <ChevronDown className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition" />
              </div>
              <div className="flex items-center gap-1 cursor-pointer hover:text-white transition group">
                <Link href="/about">Company</Link>
                <ChevronDown className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition" />
              </div>
              <Link href="/enterprise" className="transition hover:text-white">Enterprise</Link>
              <div className="flex items-center gap-1 cursor-pointer hover:text-white transition group">
                <Link href="/support">Help</Link>
                <ChevronDown className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition" />
              </div>
              <Link href="/docs" className="transition hover:text-white">Docs</Link>
              <Link href="/features/automations" className="transition hover:text-white">AI</Link>
              <Link href="/pricing" className="transition hover:text-white">Pricing</Link>
            </nav>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <Link href="/login" className="text-zinc-400 hover:text-white transition">
              Log in
            </Link>
            <Link
              href="/signup"
              className="rounded-full bg-white px-4 py-1.5 font-medium text-black transition hover:bg-zinc-200 active:scale-95"
            >
              Get started
            </Link>
          </div>
        </div>
      </header>

      {/* ⚡ HERO SECTION (Matching Screenshot #0) */}
      <section className="relative overflow-hidden pt-20 pb-20 md:pt-32 md:pb-36 bg-black">
        {/* Subtle Atmospheric Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(147,51,234,0.12),rgba(0,0,0,0))]" />

        <div className="relative mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 text-left">
            {/* Announcement Pill with subtle violet border */}
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-900/60 bg-gradient-to-r from-purple-950/40 to-black px-4 py-1.5 text-xs text-purple-200 backdrop-blur-md mb-8 hover:border-purple-700 transition">
              <span>What you missed at Resend Forward</span>
              <ChevronRight className="w-3.5 h-3.5 text-purple-400" />
            </div>

            {/* Editorial Display Heading */}
            <h1 className="text-5xl sm:text-7xl md:text-8xl tracking-tight text-white leading-[1.05] font-normal mb-8">
              Email for<br />
              <span className="font-serif italic font-normal text-zinc-200">developers</span>
            </h1>

            <p className="max-w-xl text-base sm:text-lg text-zinc-400 leading-relaxed mb-10">
              The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/signup"
                className="rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-medium px-6 py-3 border border-zinc-700/80 shadow-lg transition active:scale-95 text-sm"
              >
                Get started
              </Link>
              <Link
                href="/docs"
                className="px-6 py-3 text-sm font-medium text-zinc-400 hover:text-white transition"
              >
                Documentation
              </Link>
            </div>
          </div>

          {/* Right Column: 3D Glossy Cube (Screenshot #0) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-[420px] aspect-square rounded-3xl overflow-hidden border border-zinc-800/40 shadow-2xl bg-black/40 backdrop-blur-sm group">
              <img
                src="/static/cube-fallback.jpg"
                alt="3D Textured Resend Cube"
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition duration-700 opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </div>
      </section>

      {/* 🏢 BRAND PARTNERS (Screenshot #1) */}
      <BrandLogosSection />

      {/* 💻 INTEGRATE TONIGHT / CODE SHOWCASE (Screenshot #2) */}
      <CodeShowcaseSection />

      {/* 🚀 FIRST-CLASS DEVELOPER EXPERIENCE / EDITOR (Screenshots #3, #4, #5) */}
      <DevExperienceBento />

      {/* 🌐 ATMOSPHERIC FOOTER (Screenshot #6) */}
      <Footer />
    </div>
  );
}
