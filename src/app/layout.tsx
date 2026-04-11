import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhishek Chatterjee — Founder, Builder, AI Architect",
  description:
    "4x entrepreneur. 17+ years shipping software. Founder & CTO @ Einstein Labs. Building Praxiom AI — Cursor for Product Managers. Open source: agent-stream, PMEval.",
  openGraph: {
    title: "Abhishek Chatterjee — Founder, Builder, AI Architect",
    description:
      "4x entrepreneur. 17+ years. 36 agent tools shipped. Building AI-native infra and production LLM systems.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Chatterjee — Founder, Builder, AI Architect",
    description:
      "4x entrepreneur. 17+ years. Building AI-native infra and production LLM systems.",
    creator: "@abhichat85",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistMono.variable} h-full antialiased`}>
      <body className="h-full overflow-hidden">{children}</body>
    </html>
  );
}
