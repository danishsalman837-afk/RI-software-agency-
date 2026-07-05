import Link from "next/link";
import { NAV_LINKS } from "@/data";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted inline-flex items-center gap-3 mb-8">
          <span aria-hidden className="h-px w-8 bg-accent" />
          Error 404
        </p>
        <h1 className="font-display font-medium text-6xl md:text-8xl tracking-[-0.02em] leading-[0.95] text-balance">
          This page went
          <br />
          <em className="italic font-normal text-accent">missing.</em>
        </h1>
        <p className="mt-8 max-w-md text-lg text-muted leading-relaxed">
          The link may be old, or we may have moved something. Here&apos;s the way back.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 bg-accent px-7 py-4 font-semibold text-paper rounded-sm transition-colors hover:bg-accent-deep"
          >
            Back home
            <svg className="transition-transform group-hover:translate-x-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <ul className="mt-16 pt-8 border-t border-line flex flex-wrap gap-x-8 gap-y-2">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="font-display text-lg text-ink/70 hover:text-ink transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
