import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteConfig, siteUrl } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Kyan Labs — Jasa Pembuatan Website & Aplikasi",
    template: "%s | Kyan Labs",
  },

  description: siteConfig.description,

  keywords: [
    "jasa pembuatan website",
    "jasa website",
    "web developer",
    "website UMKM",
    "company profile",
    "landing page",
    "web application",
    "UI UX",
    "Kyan Labs",
  ],

  authors: [
    {
      name: "Kyan Labs",
    },
  ],

  creator: "Kyan Labs",
  publisher: "Kyan Labs",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: "Kyan Labs",
    title: "Kyan Labs — Jasa Pembuatan Website & Aplikasi",
    description:
      "Website, aplikasi web, dan solusi digital modern untuk membantu bisnis tampil lebih profesional dan mudah dipercaya.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kyan Labs — Jasa Pembuatan Website & Aplikasi",
    description:
      "Website, aplikasi web, dan solusi digital modern untuk bisnis.",
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
