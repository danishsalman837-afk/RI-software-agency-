import Link from "next/link";
import { SocialIcon } from "./Icon";
import { SERVICES, SOCIAL_LINKS } from "@/data";

const COLUMNS: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Work", href: "/portfolio" },
      { label: "Services", href: "/services" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Services",
    links: SERVICES.map((s) => ({ label: s.title, href: "/services" })),
  },
  {
    heading: "Resources",
    links: [
      { label: "Selected work", href: "/portfolio" },
      { label: "Start a build", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-sand">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3">
            <div className="mb-4 flex items-baseline gap-2">
              <span className="font-display text-2xl font-extrabold tracking-tight text-ink">
                RI
              </span>
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-muted">
                Software
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              A software studio building web platforms, mobile apps, and AI
              automation for teams who plan to be around a while.
            </p>
            <a
              href="mailto:hello@risoftware.agency"
              className="mt-5 inline-block text-sm font-semibold text-ink link-underline"
            >
              hello@risoftware.agency
            </a>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-faint">
                {col.heading}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link, i) => (
                  <li key={`${link.label}-${i}`}>
                    <Link
                      href={link.href}
                      className="text-[0.95rem] text-muted transition-colors hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Social */}
          <div>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-faint">
              Social
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-card text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                  aria-label={social.label}
                >
                  <SocialIcon name={social.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-sm text-muted md:flex-row">
          <p>&copy; {currentYear} RI Software. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-ink">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-ink">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
