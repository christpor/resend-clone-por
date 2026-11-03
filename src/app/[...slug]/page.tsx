import React from "react";
import Link from "next/link";
import { ChevronRight, ArrowLeft, Terminal, ShieldCheck } from "lucide-react";
import { ResendLogo } from "@/components/brand-logos";
import Footer from "@/components/footer";

interface PageProps {
  params: {
    slug: string[];
  };
}

export default function CatchAllPage({ params }: PageProps) {
  const slugPath = params.slug.join("/");
  const title = params.slug[params.slug.length - 1]
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const section = params.slug.length > 1 ? params.slug[0].toUpperCase() : "PAGE";

  return (
    <div className="min-h-screen bg-black text-white selection:bg-zinc-800">
      {/* Header */}
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

      {/* Main Content */}
      <main className="py-20 px-6 max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-zinc-500 mb-8 font-mono">
          <Link href="/" className="hover:text-zinc-300">resend.com</Link>
          {params.slug.map((s, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className={idx === params.slug.length - 1 ? "text-zinc-200" : "hover:text-zinc-300"}>
                {s}
              </span>
            </React.Fragment>
          ))}
        </div>

        {/* Category Tag */}
        <span className="inline-block px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400 mb-6 tracking-wider">
          {section}
        </span>

        {/* Display Title in Domaine Display serif */}
        <h1 className="text-4xl sm:text-6xl font-normal tracking-tight text-white mb-6">
          {title}
        </h1>

        <p className="text-zinc-400 text-lg leading-relaxed mb-12">
          Explore documentation, architecture specifications, and API integration guides for <span className="text-white font-medium">{title}</span> on Resend.
        </p>

        {/* Interactive Spec Card */}
        <div className="rounded-2xl border border-zinc-800 bg-[#070707] p-8 mb-16 shadow-2xl">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-900">
            <Terminal className="w-4 h-4 text-zinc-400" />
            <span className="text-xs font-mono text-zinc-300">Endpoint / SDK Specification</span>
          </div>

          <div className="bg-black/60 p-4 rounded-xl border border-zinc-900 font-mono text-xs text-zinc-300 mb-6">
            <p className="text-zinc-500">// Initialize {title} SDK client</p>
            <p className="text-emerald-400">const resend = new Resend(process.env.RESEND_API_KEY);</p>
            <p className="text-zinc-400 mt-2">const resource = await resend.{params.slug[params.slug.length - 1].replace(/-/g, "")}.get();</p>
          </div>

          <div className="flex items-center justify-between text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>TLS 1.3 · HMAC Authenticated · 99.99% Availability</span>
            </div>
            <Link
              href="/signup"
              className="px-4 py-2 rounded-xl bg-white text-black font-semibold hover:bg-zinc-200 transition"
            >
              Get Started
            </Link>
          </div>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs text-zinc-400 hover:text-white transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Homepage</span>
        </Link>
      </main>

      <Footer />
    </div>
  );
}
