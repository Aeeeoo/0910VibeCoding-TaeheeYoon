import type { Metadata } from "next";
import profile from "@/data/profile.json";
import "./globals.css";

export const metadata: Metadata = {
  title: profile.name,
  description: profile.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body className="bg-term-chrome font-mono text-term-fg antialiased">
        {children}
      </body>
    </html>
  );
}
