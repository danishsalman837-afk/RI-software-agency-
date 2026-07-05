import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope, Space_Mono } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components";

// Display serif — characterful, editorial. Variable weight + true italic.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
});

// Body / UI grotesk — clean, neutral, not Inter.
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

// Mono — labels, indices, tags, code. Signals "software" without cliché.
const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
  display: "swap",
});

const SITE_URL = "https://risoftware.agency";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "RI Software — Software studio for products that ship",
    template: "%s — RI Software",
  },
  description:
    "RI Software is a small software studio. We design and build web platforms, mobile apps, and AI automation — with two founders on every project and weekly demos so you always see where it stands.",
  keywords: [
    "software studio",
    "custom software development",
    "web application development",
    "mobile app development",
    "AI automation",
    "Next.js agency",
    "product engineering",
  ],
  authors: [{ name: "RI Software" }],
  creator: "RI Software",
  alternates: { canonical: "/" },
  openGraph: {
    title: "RI Software — Software studio for products that ship",
    description:
      "We design and build web platforms, mobile apps, and AI automation. Two founders on every project, weekly demos, fixed scope.",
    url: SITE_URL,
    type: "website",
    locale: "en_US",
    siteName: "RI Software",
  },
  twitter: {
    card: "summary_large_image",
    title: "RI Software — Software studio for products that ship",
    description:
      "We design and build web platforms, mobile apps, and AI automation. Two founders on every project.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f4f0e9",
  colorScheme: "light",
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "RI Software",
  url: SITE_URL,
  description:
    "A software studio building web platforms, mobile apps, and AI automation.",
  founders: [
    { "@type": "Person", name: "Danish Salman" },
    { "@type": "Person", name: "Ahmed Saleem" },
  ],
  email: "hello@risoftware.agency",
  sameAs: [
    "https://twitter.com",
    "https://www.linkedin.com",
    "https://github.com",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable} ${spaceMono.variable} antialiased`}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body className="grain min-h-screen flex flex-col font-sans" suppressHydrationWarning>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-grow">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </body>
    </html>
  );
}
