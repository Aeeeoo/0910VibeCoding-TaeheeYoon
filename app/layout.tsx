import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import profile from "@/data/profile.json";
import "./globals.css";

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
  display: "swap",
});

export const metadata: Metadata = {
  title: profile.name,
  description: profile.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={pressStart.variable}>
      <body className="bg-black font-pixel text-arcade-fg">{children}</body>
    </html>
  );
}
