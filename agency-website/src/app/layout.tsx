import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RI Software Agency | Premium Digital Solutions",
  description: "RI Software Agency builds scalable digital solutions, from web and mobile apps to AI integrations. Partner with us for cutting-edge software development.",
  keywords: ["software agency", "web development", "mobile apps", "AI solutions", "UI/UX design", "React", "Next.js"],
  authors: [{ name: "RI Software Agency" }],
  openGraph: {
    title: "RI Software Agency | Premium Digital Solutions",
    description: "We build scalable digital solutions, from web and mobile apps to AI integrations.",
    type: "website",
    locale: "en_US",
    siteName: "RI Software Agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "RI Software Agency | Premium Digital Solutions",
    description: "We build scalable digital solutions, from web and mobile apps to AI integrations.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`} suppressHydrationWarning data-scroll-behavior="smooth">
      <body className="min-h-screen flex flex-col font-sans" suppressHydrationWarning>
        <div className="noise-overlay" />
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
