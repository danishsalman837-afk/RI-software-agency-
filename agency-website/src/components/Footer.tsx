import Link from "next/link";
import { NAV_LINKS, SOCIAL_LINKS } from "@/data";
import { SocialIcon } from "./Icon";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="on-dark bg-noir text-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-10">
        {/* Closing invitation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end pb-16 border-b border-white/10">
          <div className="lg:col-span-8">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-paper/50 mb-6">
              Have a project in mind?
            </p>
            <h2 className="font-display font-medium tracking-[-0.02em] text-4xl md:text-6xl leading-[1.02] text-balance">
              Let&apos;s build something
              <br />
              worth keeping.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-paper text-ink px-6 py-4 rounded-sm font-semibold transition-colors hover:bg-accent hover:text-paper"
            >
              Start a conversation
              <svg className="transition-transform group-hover:translate-x-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-16">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-baseline gap-2 mb-4">
              <span className="font-display text-2xl font-semibold text-paper">RI</span>
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-paper/50">Software</span>
            </div>
            <p className="text-paper/60 text-sm leading-relaxed max-w-xs">
              A software studio building web platforms, mobile apps, and AI automation for teams who plan to be around a while.
            </p>
          </div>

          <nav aria-label="Footer">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-paper/50 mb-5">Studio</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-paper/80 hover:text-paper text-[0.95rem] link-underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-paper/50 mb-5">Contact</h3>
            <ul className="space-y-3 text-[0.95rem]">
              <li>
                <a href="mailto:hello@risoftware.agency" className="text-paper/80 hover:text-paper link-underline">
                  hello@risoftware.agency
                </a>
              </li>
              <li className="text-paper/60">Mon–Fri · Replies within a day</li>
              <li className="text-paper/60">Remote · Working globally</li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-paper/50 mb-5">Elsewhere</h3>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-sm border border-white/15 flex items-center justify-center text-paper/70 hover:text-paper hover:border-paper/40 transition-colors"
                  aria-label={social.label}
                >
                  <SocialIcon name={social.icon} className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-paper/50">
          <p>&copy; {currentYear} RI Software. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-paper transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-paper transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
