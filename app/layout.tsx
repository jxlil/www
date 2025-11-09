import type { Metadata, Viewport } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jalil SA | jxlil",
  description: "Personal web portfolio showcasing my work, projects, and experience.",
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

  }

};

export const viewport: Viewport = {
  themeColor: "#000000",
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
      <body
        className={`${geistMono.variable} min-h-dvh bg-black text-zinc-100 antialiased font-mono`}
      >
        {children}
      </body>
    </html>
  );
}
