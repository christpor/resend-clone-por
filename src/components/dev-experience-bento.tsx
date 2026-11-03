"use client";

import React, { useState } from "react";
import { AlertCircle, CheckCircle2, ChevronRight, Laptop, Send, Sparkles } from "lucide-react";

export default function DevExperienceBento() {
  const [logs, setLogs] = useState([
    { id: "4e7a8444-bd90-4fd0-89c0-ab7b8d485ca", status: 200 },
    { id: "766eb482-c7ca-4b8e-a8e2-dcfeae08a9", status: 200 },
    { id: "63b68b47-8cc9-46a7-99f1-6334c5163ae", status: 200 },
    { id: "01dccb60-2830-4fa1-8055-51b50361eec", status: 200 },
  ]);

  const [sending, setSending] = useState(false);

  const simulateSend = () => {
    setSending(true);
    setTimeout(() => {
      const newId = Math.random().toString(36).substring(2, 15) + "-" + Math.random().toString(36).substring(2, 15);
      setLogs((prev) => [{ id: newId, status: 200 }, ...prev.slice(0, 5)]);
      setSending(false);
    }, 400);
  };

  return (
    <section className="relative py-28 px-6 bg-black border-b border-zinc-900" id="features">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-white mb-6">
            First-class developer experience
          </h2>
          <p className="text-zinc-400 text-base md:text-lg">
            We are a team of engineers who love building tools for other engineers. Our goal is to create the email platform we've always wished we had — one that <span className="text-white italic">just works</span>.
          </p>
        </div>

        {/* 2-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {/* Card 1: Test Mode Simulator */}
          <div className="rounded-2xl border border-zinc-800/80 bg-[#070707] p-8 flex flex-col justify-between">
            <div>
              {/* Interactive Simulator Box */}
              <div className="rounded-xl border border-zinc-800 bg-black/60 p-4 mb-6">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 text-xs font-medium border border-emerald-800/40">
                      Delivered
                    </span>
                    <span className="text-xs text-zinc-300 font-mono">delivered@resend.dev</span>
                  </div>
                  <button
                    onClick={simulateSend}
                    disabled={sending}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-xs text-white border border-zinc-700 transition active:scale-95 disabled:opacity-50"
                  >
                    <Send className="w-3 h-3 text-zinc-400" />
                    <span>{sending ? "Sending..." : "Send"}</span>
                  </button>
                </div>
              </div>

              {/* Terminal Logs Output */}
              <div className="font-mono text-xs text-zinc-400 space-y-2 mb-8 bg-black/40 p-4 rounded-xl border border-zinc-900">
                {logs.map((log, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-emerald-400 font-bold">{log.status}:</span>
                    <span className="text-zinc-500">&#123; &quot;id&quot;: &quot;{log.id}&quot; &#125;</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Test mode</h3>
              <p className="text-sm text-zinc-400">
                Simulate events and experiment with our API without sending real emails to recipients.
              </p>
            </div>
          </div>

          {/* Card 2: Modular Webhooks Timeline */}
          <div className="rounded-2xl border border-zinc-800/80 bg-[#070707] p-8 flex flex-col justify-between">
            <div className="space-y-4 mb-8">
              {/* Event 1: Complained */}
              <div className="rounded-xl border border-amber-950/40 bg-zinc-950 p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-amber-950/60 text-amber-400 text-xs font-semibold border border-amber-800/50 flex items-center gap-1.5">
                    <AlertCircle className="w-3 h-3" />
                    Complained
                  </span>
                  <span className="text-xs text-zinc-500 font-mono">Nov 03 10:11:36</span>
                </div>
                <p className="text-xs text-zinc-300">
                  to <span className="text-white font-mono">mia@yahoo.com</span> with feedback <span className="text-amber-400">Spam</span>
                </p>
                <p className="text-[11px] text-zinc-500 mt-1">on agent Yahoo Mail running on macOS</p>
              </div>

              {/* Event 2: Delivered */}
              <div className="rounded-xl border border-zinc-900 bg-zinc-950 p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-emerald-950/60 text-emerald-400 text-xs font-semibold border border-emerald-800/50 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3" />
                    Delivered
                  </span>
                  <span className="text-xs text-zinc-500 font-mono">Nov 03 10:11:09</span>
                </div>
                <p className="text-xs text-zinc-300">
                  to <span className="text-white font-mono">jackson@figma.com</span> with subject <span className="text-white">Get Started</span>
                </p>
                <p className="text-[11px] text-zinc-500 mt-1">on agent Gmail running on Windows</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Modular webhooks</h3>
              <p className="text-sm text-zinc-400">
                Receive real-time notifications directly to your application for delivery, bounces, and clicks.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Write Using a Delightful Editor (Screenshot #4) */}
        <div className="mb-28 text-center">
          <div className="mx-auto mb-8 w-20 h-20 relative flex items-center justify-center">
            <div className="absolute inset-0 bg-purple-600/30 blur-2xl rounded-full" />
            <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-b from-zinc-800 to-black p-0.5 shadow-2xl border border-zinc-700/50 flex items-center justify-center overflow-hidden">
              <img
                src="/static/landing-page/3d-react-fallback.jpg"
                alt="Editor Icon"
                className="w-full h-full object-cover rounded-2xl opacity-90"
              />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-white mb-6">
            Write using a delightful editor
          </h2>
          <p className="mx-auto max-w-2xl text-zinc-400 text-base md:text-lg mb-12">
            A modern editor that makes it easy for anyone to write, format, and send emails. Visually build your email and change the design by adding custom styles.
          </p>

          {/* Editor Canvas Card */}
          <div className="relative mx-auto max-w-4xl rounded-2xl border border-zinc-800 bg-[#070707] shadow-2xl overflow-hidden text-left">
            {/* Editor Toolbar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800/80 bg-zinc-950/60">
              <div className="flex items-center gap-3">
                <button className="px-3 py-1 rounded-lg border border-zinc-800 bg-zinc-900 text-xs text-zinc-300">
                  Styles
                </button>
                <span className="text-sm font-medium text-white">Weekly Acme Newsletter</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-zinc-500">a day ago</span>
                <button className="px-3 py-1 rounded-lg border border-zinc-800 bg-zinc-900 text-xs text-zinc-300 hover:text-white">
                  Test
                </button>
                <button className="px-4 py-1.5 rounded-lg bg-white text-black text-xs font-medium hover:bg-zinc-200 transition">
                  Send
                </button>
              </div>
            </div>

            {/* Editor Meta Form */}
            <div className="p-6 border-b border-zinc-900 text-xs space-y-3 font-mono">
              <div className="flex items-center">
                <span className="w-20 text-zinc-500">From</span>
                <span className="text-zinc-300">your.name@acme.com</span>
              </div>
              <div className="flex items-center">
                <span className="w-20 text-zinc-500">To</span>
                <span className="px-2.5 py-0.5 rounded-full bg-zinc-900 text-zinc-300 border border-zinc-800 text-[11px]">
                  Newsletter Subscribers
                </span>
              </div>
              <div className="flex items-center">
                <span className="w-20 text-zinc-500">Subject</span>
                <span className="text-white font-sans font-medium">Weekly Newsletter</span>
              </div>
            </div>

            {/* Email Preview Graphic */}
            <div className="p-8 flex items-center justify-center bg-black/60 min-h-[160px]">
              <div className="text-center text-zinc-500 text-xs">
                Visual React Email block builder & preview canvas
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Founder Testimonials (Screenshot #5) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-28">
          <div className="rounded-2xl border border-zinc-800/80 bg-[#070707] p-8">
            <p className="text-zinc-300 text-base leading-relaxed mb-6">
              &quot;Resend is email with simpler APIs, better webhooks, and best-in-class debugging.&quot;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center font-bold text-xs text-white">
                DF
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Dan Farrelly</p>
                <p className="text-xs text-zinc-500">CTO and Co-Founder of Inngest</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800/80 bg-[#070707] p-8">
            <p className="text-zinc-300 text-base leading-relaxed mb-6">
              &quot;Our team loves Resend. It makes email sending effortless and reliable. After we switched, our deliverability improved tremendously.&quot;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-yellow-500/20 border border-yellow-500/40 flex items-center justify-center font-bold text-xs text-yellow-400">
                VM
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Vlad Matsiiako</p>
                <p className="text-xs text-zinc-500">Co-founder of Infisical</p>
              </div>
            </div>
          </div>
        </div>

        {/* Big Editorial CTA */}
        <div className="text-center py-16">
          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white tracking-tight mb-8">
            Email reimagined.<br />
            Available today.
          </h2>
          <div className="flex items-center justify-center gap-4">
            <a
              href="/signup"
              className="px-8 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition active:scale-95"
            >
              Get started
            </a>
            <a
              href="/docs"
              className="px-8 py-3.5 rounded-full border border-zinc-800 bg-zinc-950 text-zinc-300 font-semibold text-sm hover:text-white hover:border-zinc-700 transition"
            >
              Documentation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
