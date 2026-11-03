import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Resend · Email for developers (Clone)",
  description: "The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
