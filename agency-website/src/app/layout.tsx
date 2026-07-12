import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RI Software — Software Studio",
  description: "Web platforms, mobile apps, and the automation behind them — designed and shipped by a dedicated studio that stays until it works.",
  keywords: ["software studio", "web platforms", "mobile apps", "AI automation", "product design", "React", "Next.js"],
  authors: [{ name: "RI Software" }],
  openGraph: {
    title: "RI Software — Software Studio",
    description: "We build the software your business actually runs on.",
    type: "website",
    locale: "en_US",
    siteName: "RI Software",
  },
  twitter: {
    card: "summary_large_image",
    title: "RI Software — Software Studio",
    description: "We build the software your business actually runs on.",
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
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <head>
        {/* Instrument Serif — loaded via <link> because next/font/google
            doesn't reliably expose italic-only fonts in all Next.js versions. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <style>{`
          :root { --font-instrument-serif: "Instrument Serif", Georgia, serif; }
        `}</style>
      </head>
      <body className="min-h-screen flex flex-col font-sans" suppressHydrationWarning>
        <div className="noise-overlay" />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
