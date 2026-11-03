import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Resend · Email for developers",
  description: "The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.",
  metadataBase: new URL("https://resend.com"),
  icons: {
    icon: "/static/favicons/favicon-marketing.ico",
    shortcut: "/static/favicons/favicon-marketing.ico",
    apple: "/static/favicons/favicon-marketing@180x180.png",
  },
  openGraph: {
    title: "Resend · Email for developers",
    description: "The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.",
    url: "https://resend.com",
    siteName: "Resend",
    images: [
      {
        url: "/static/cover.jpg",
        width: 1200,
        height: 630,
        alt: "Resend Cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resend · Email for developers",
    description: "The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.",
    images: ["/static/cover.jpg"],
    creator: "@resend",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/static/favicons/favicon-marketing.ico" />
        <link rel="apple-touch-icon" href="/static/favicons/favicon-marketing@180x180.png" />
      </head>
      <body className="min-h-screen bg-black text-white antialiased selection:bg-zinc-800">
        {children}
      </body>
    </html>
  );
}
