"use client";

import React from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { ResendLogo } from "@/components/brand-logos";
import Footer from "@/components/footer";

const TIERS = [
  {
    name: "Free",
    price: "$0",
    description: "For developers testing and building small projects.",
    features: [
      "3,000 emails / mo",
      "100 emails / day limit",
      "1 domain",
      "1 day log retention",
      "Community support",
    ],
    cta: "Get started",
    href: "/signup",
    popular: false,
  },
  {
    name: "Pro",
    price: "$20",
    period: "/mo",
    description: "For growing apps and businesses with active users.",
    features: [
      "50,000 emails / mo included",
      "Unlimited daily sending",
      "Unlimited custom domains",
      "30 days log retention",
      "Dedicated IP add-on available",
      "Priority email support",
    ],
    cta: "Start 14-day free trial",
    href: "/signup",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For high-volume senders needing tailored SLAs and dedicated IPs.",
    features: [
      "Millions of emails / mo",
      "Dedicated IP pools & warmup",
      "Custom SLA commitments (99.99%)",
      "SOC 2 Type II compliance",
      "90 days log retention",
      "Dedicated Customer Success Manager",
    ],
    cta: "Contact Enterprise",
    href: "/enterprise",
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-zinc-800">
      <header className="sticky top-0 z-50 border-b border-zinc-900/80 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2 text-white hover:opacity-90 transition">
            <ResendLogo className="h-6 w-auto text-white" />
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link href="/" className="text-zinc-400 hover:text-white transition">Home</Link>
            <Link href="/enterprise" className="text-zinc-400 hover:text-white transition">Enterprise</Link>
            <Link href="/login" className="text-zinc-400 hover:text-white transition">Log in</Link>
            <Link href="/signup" className="rounded-full bg-white px-4 py-1.5 font-medium text-black hover:bg-zinc-200 transition">
              Get started
            </Link>
          </nav>
        </div>
      </header>

      <main className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl sm:text-6xl font-normal tracking-tight text-white mb-6">
            Pricing
          </h1>
          <p className="text-zinc-400 text-lg">
            Start sending for free. Upgrade as your product scales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl border p-8 flex flex-col justify-between ${
                tier.popular
                  ? "border-zinc-600 bg-zinc-950/80 shadow-2xl relative"
                  : "border-zinc-800/80 bg-[#070707]"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white text-black font-semibold text-xs tracking-wide">
                  MOST POPULAR
                </div>
              )}
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{tier.name}</h3>
                <p className="text-xs text-zinc-400 mb-6 min-h-[36px]">{tier.description}</p>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  {tier.period && <span className="text-zinc-500 text-sm">{tier.period}</span>}
                </div>

                <ul className="space-y-3.5 text-xs text-zinc-300 mb-8">
                  {tier.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={tier.href}
                className={`w-full py-3 rounded-xl font-medium text-xs text-center transition ${
                  tier.popular
                    ? "bg-white text-black hover:bg-zinc-200"
                    : "bg-zinc-900 text-white border border-zinc-800 hover:bg-zinc-800"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
