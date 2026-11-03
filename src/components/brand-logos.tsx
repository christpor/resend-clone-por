import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const ResendLogo = ({ className = "h-6 w-auto" }: { className?: string }) => (
  <svg
    role="img"
    aria-label="Resend"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 377 81"
    fill="currentColor"
    className={className}
  >
    <path d="M103.743 40.718c0-10.87-8.127-18.997-18.998-18.997-10.87 0-18.997 8.127-18.997 18.997 0 10.87 8.127 18.998 18.997 18.998 10.871 0 18.998-8.128 18.998-18.998zm-9.336 0c0 6.136-4.148 10.87-9.662 10.87-5.513 0-9.66-4.734-9.66-10.87 0-6.137 4.147-10.871 9.66-10.871 5.514 0 9.662 4.734 9.662 10.871zM147.458 35.88c0-8.643-6.57-14.159-15.892-14.159-10.021 0-16.757 6.395-16.895 15.719h8.818c.207-4.664 3.731-7.817 8.077-7.817 4.423 0 7.395 2.56 7.395 6.396 0 2.973-1.727 4.63-6.082 5.943l-5.32 1.59c-7.947 2.383-11.68 6.08-11.68 12.44 0 8.017 6.496 13.713 16.033 13.713 9.47 0 16.034-5.696 16.034-14.331V35.88zm-8.818 19.349c0 4.63-3.456 7.609-7.812 7.609-4.285 0-7.396-2.63-7.396-6.637 0-3.385 1.935-5.251 6.22-6.564l4.906-1.521c2.42-.76 4.082-1.936 4.082-3.733v10.846zM194.277 40.718c0-10.87-8.127-18.997-18.998-18.997-10.87 0-18.997 8.127-18.997 18.997 0 10.87 8.127 18.998 18.997 18.998 10.871 0 18.998-8.128 18.998-18.998zm-9.336 0c0 6.136-4.148 10.87-9.662 10.87-5.513 0-9.66-4.734-9.66-10.87 0-6.137 4.147-10.871 9.66-10.871 5.514 0 9.662 4.734 9.662 10.871zM238.293 35.88c0-8.643-6.57-14.159-15.892-14.159-10.021 0-16.757 6.395-16.895 15.719h8.818c.207-4.664 3.731-7.817 8.077-7.817 4.423 0 7.395 2.56 7.395 6.396 0 2.973-1.727 4.63-6.082 5.943l-5.32 1.59c-7.947 2.383-11.68 6.08-11.68 12.44 0 8.017 6.496 13.713 16.033 13.713 9.47 0 16.034-5.696 16.034-14.331V35.88zm-8.818 19.349c0 4.63-3.456 7.609-7.812 7.609-4.285 0-7.396-2.63-7.396-6.637 0-3.385 1.935-5.251 6.22-6.564l4.906-1.521c2.42-.76 4.082-1.936 4.082-3.733v10.846zM286.045 22.378h-9.254v36.681h9.254V22.378zM281.418 16.502c3.041 0 5.32-2.28 5.32-5.32 0-3.04-2.279-5.32-5.32-5.32-3.04 0-5.32 2.28-5.32 5.32 0 3.04 2.28 5.32 5.32 5.32zM333.684 40.718c0-10.87-8.127-18.997-18.998-18.997-10.87 0-18.997 8.127-18.997 18.997 0 10.87 8.127 18.998 18.997 18.998 10.871 0 18.998-8.128 18.998-18.998zm-9.336 0c0 6.136-4.148 10.87-9.662 10.87-5.513 0-9.66-4.734-9.66-10.87 0-6.137 4.147-10.871 9.66-10.871 5.514 0 9.662 4.734 9.662 10.871zM376.877 36.432c0-8.918-6.357-14.71-15.34-14.71-9.951 0-16.722 6.565-16.722 17.618 0 11.053 6.771 17.618 16.722 17.618 8.983 0 15.34-5.792 15.34-14.71h-9.254c-.207 4.63-3.248 7.396-6.086 7.396-4.492 0-7.395-3.387-7.395-10.304 0-6.918 2.903-10.305 7.395-10.305 2.838 0 5.879 2.765 6.086 7.397h9.254zM45.69 22.378H23.513v36.681h9.324v-13.68h12.853c10.435 0 17.345-5.873 17.345-14.332 0-8.459-6.91-8.669-17.345-8.669zm0 15.824H32.837V29.566H45.69c5.184 0 8.016 1.796 8.016 4.318 0 2.523-2.832 4.318-8.016 4.318zM0 22.378h14.719v36.681H0V22.378z" />
  </svg>
);

export const BRAND_PARTNERS = [
  { name: "Warner Bros", file: "/static/svgs/warner-bros.svg", height: "h-9" },
  { name: "Max", file: "/static/svgs/max.svg", height: "h-6" },
  { name: "Raycast", file: "/static/svgs/raycast.svg", height: "h-8" },
  { name: "Mistral AI", file: "/static/svgs/mistral.svg", height: "h-9" },
  { name: "Replit", file: "/static/svgs/replit.svg", height: "h-7" },
  { name: "Anghami", file: "/static/svgs/anghami.svg", height: "h-8" },
  { name: "Gumroad", file: "/static/svgs/gumroad.svg", height: "h-6" },
  { name: "Decathlon", file: "/static/svgs/decathlon.svg", height: "h-7" },
  { name: "Supabase", file: "/static/svgs/supabase.svg", height: "h-7" },
  { name: "Leap", file: "/static/svgs/leap.svg", height: "h-6" },
  { name: "Payload", file: "/static/svgs/payload.svg", height: "h-8" },
  { name: "Paper", file: "/static/svgs/paper.svg", height: "h-8" },
];

export default function BrandLogosSection() {
  return (
    <section className="relative py-20 px-6 border-b border-zinc-900 bg-black">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-zinc-400 text-sm md:text-base font-medium mb-12">
          Companies of all sizes trust Resend to deliver their most important emails.
        </p>

        {/* Row 1: Warner Bros, Max, Raycast, Mistral AI, Replit, Anghami */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center mb-10 opacity-75 hover:opacity-100 transition-opacity duration-300">
          {BRAND_PARTNERS.slice(0, 6).map((brand) => (
            <div key={brand.name} className="flex items-center justify-center p-2 filter grayscale hover:grayscale-0 transition duration-200">
              <img
                src={brand.file}
                alt={`${brand.name} Logo`}
                className={`${brand.height} w-auto object-contain text-white invert brightness-200`}
              />
            </div>
          ))}
        </div>

        {/* Row 2: Gumroad, Decathlon, Supabase, Leap, Payload, Paper */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center opacity-75 hover:opacity-100 transition-opacity duration-300">
          {BRAND_PARTNERS.slice(6).map((brand) => (
            <div key={brand.name} className="flex items-center justify-center p-2 filter grayscale hover:grayscale-0 transition duration-200">
              <img
                src={brand.file}
                alt={`${brand.name} Logo`}
                className={`${brand.height} w-auto object-contain text-white invert brightness-200`}
              />
            </div>
          ))}
        </div>

        {/* Explore Enterprise Link */}
        <div className="mt-14">
          <Link
            href="/enterprise"
            className="inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition group"
          >
            <span>Explore Enterprise</span>
            <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
