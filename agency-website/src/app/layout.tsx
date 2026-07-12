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
  title: "RI Software — Performance Software Studio",
  description: "We engineer high-performance digital products. Web architectures, native mobile, and enterprise automation.",
  keywords: ["software agency", "web architectures", "native mobile", "enterprise AI", "workflow automation", "Next.js", "React Native"],
  authors: [{ name: "RI Software" }],
  openGraph: {
    title: "RI Software — Performance Software Studio",
    description: "We engineer high-performance digital products.",
    type: "website",
    locale: "en_US",
    siteName: "RI Software",
  },
  twitter: {
    card: "summary_large_image",
    title: "RI Software — Performance Software Studio",
    description: "We engineer high-performance digital products.",
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
      <body className="min-h-screen flex flex-col font-sans bg-[#0A0A0A] text-white" suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
