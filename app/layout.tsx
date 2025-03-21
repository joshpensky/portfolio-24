import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "~/lib/cn";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Josh Pensky",
  description: "Josh Pensky is a product engineer and founder based in Boston.",
  openGraph: {
    url: "https://joshpensky.com",
  },
  twitter: {
    creator: "@joshpensky",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <body className={cn(inter.variable, "antialiased")}>{children}</body>
    </html>
  );
}
