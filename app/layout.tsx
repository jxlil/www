import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "jxlil.mx — Jalil",
  description:
    "Jalil (jxlil) — developer focused on web scraping, back-end, and automation.",
  creator: "Jalil SA",
  authors: [{ name: "Jalil SA", url: "https://jxlil.mx" }],
  category: "technology",
  keywords: ["jxlil", "web scraping", "freelance", "portfolio"],
  icons: {
    icon: [
      { url: "./favicon.png", sizes: "32x32", type: "image/png" },
      { url: "./favicon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "./favicon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#1b1b1e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${geist.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
