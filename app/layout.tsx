import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Souhardya Bose — Professor · Builder · Community Leader",
  description:
    "Assistant Professor & Head of Student Success at LPU. Founder of Techfluence — 6 editions, 9M+ reach, 30+ global leaders. Building AI-powered futures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script src="/sakuga-vfx/button.js" strategy="afterInteractive" />
        <Script src="/sakuga-vfx/tabs.js" strategy="afterInteractive" />
        <Script src="/sakuga-vfx/toast.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
