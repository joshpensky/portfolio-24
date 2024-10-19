import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "~/lib/cn";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Josh Pensky",
  description: "Josh Pensky is a product engineer and founder based in Boston.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.variable,
          "antialiased",
          "p-5 max-xs:my-3 xs:p-7 sm:p-14"
        )}
      >
        {children}
      </body>
    </html>
  );
}
