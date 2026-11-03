import React from "react";
import Link from "next/link";

const FOOTER_COLUMNS = [
  {
    title: "Features",
    links: [
      { name: "Automations", href: "/features/automations" },
      { name: "Audiences", href: "/features/audiences" },
      { name: "Broadcasts", href: "/features/broadcasts" },
      { name: "Inbound", href: "/features/inbound" },
      { name: "Templates", href: "/features/templates" },
      { name: "Webhooks", href: "/features/webhooks" },
      { name: "Dedicated IPs", href: "/features/dedicated-ips" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Changelog", href: "/changelog" },
      { name: "Pricing", href: "/pricing" },
      { name: "Enterprise", href: "/enterprise" },
      { name: "Security", href: "/security" },
      { name: "SOC 2", href: "/security/soc-2" },
      { name: "GDPR", href: "/security/gdpr" },
      { name: "Brand", href: "/brand" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/careers" },
      { name: "Clubs", href: "/clubs" },
      { name: "Customers", href: "/customers" },
      { name: "Humans", href: "/humans" },
      { name: "Philosophy", href: "/philosophy" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "Support", href: "/support" },
      { name: "Status", href: "/status" },
      { name: "Migrate", href: "/migrate" },
      { name: "Knowledge base", href: "/docs" },
      { name: "Legal policies", href: "/legal" },
    ],
  },
  {
    title: "Community",
    links: [
      { name: "Events", href: "/events" },
      { name: "Insiders", href: "/insiders" },
      { name: "Open source", href: "/open-source" },
      { name: "Wallpapers", href: "/wallpapers" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-black text-zinc-400 overflow-hidden pt-28 pb-16 border-t border-zinc-900">
      {/* Giant Atmospheric Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.03] text-[20vw] font-bold tracking-tighter text-white z-0 whitespace-nowrap">
        Resend
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12 mb-20">
          {/* Left Column: Info & Operational status */}
          <div className="md:col-span-2 space-y-6">
            <p className="text-xs text-zinc-500 leading-relaxed">
              2261 Market Street #5039<br />
              San Francisco, CA 94114
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://twitter.com/resend"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg border border-zinc-800 bg-zinc-950 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition"
                aria-label="X (formerly Twitter)"
              >
                <span className="text-xs font-bold">𝕏</span>
              </a>
              <a
                href="https://github.com/resend"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg border border-zinc-800 bg-zinc-950 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition"
                aria-label="GitHub"
              >
                <span className="text-xs font-bold">GH</span>
              </a>
              <a
                href="https://linkedin.com/company/resend"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg border border-zinc-800 bg-zinc-950 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition"
                aria-label="LinkedIn"
              >
                <span className="text-xs font-bold">in</span>
              </a>
              <a
                href="https://youtube.com/@resend"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg border border-zinc-800 bg-zinc-950 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition"
                aria-label="YouTube"
              >
                <span className="text-xs font-bold">▶</span>
              </a>
            </div>

            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-950/80 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-zinc-300">All systems operational</span>
            </div>
          </div>

          {/* Right Columns: Directory Links */}
          <div className="md:col-span-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title} className="space-y-4">
                <h4 className="text-xs font-semibold text-zinc-200 tracking-wider">
                  {col.title}
                </h4>
                <ul className="space-y-2.5 text-xs">
                  {col.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-zinc-400 hover:text-white transition duration-150"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-600 gap-4">
          <p>© 2026 Resend Clone · Clean-room engineered for Christpor.</p>
          <p className="font-mono text-[11px] text-zinc-600">
            craft-fullstack-por · zero fake assets · high fidelity
          </p>
        </div>
      </div>
    </footer>
  );
}
