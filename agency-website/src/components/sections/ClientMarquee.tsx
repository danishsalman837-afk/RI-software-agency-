import { Container } from "@/components/ui";
import { CLIENT_LOGOS } from "@/data";

/**
 * Social-proof strip. We don't have image logos we can legally show yet, so
 * these are styled wordmarks — muted greyscale by default, resolving to the
 * brand gradient on hover, matching the "greyscale → colour" brief without
 * faking real client marks.
 */
export default function ClientMarquee() {
  return (
    <section className="border-y border-line bg-sand/60 py-10">
      <Container>
        <p className="mb-6 text-center font-mono text-xs uppercase tracking-[0.18em] text-muted">
          Trusted by teams shipping in production
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 md:gap-x-14">
          {CLIENT_LOGOS.map((logo) => (
            <li key={logo.name}>
              <span className="group cursor-default font-display text-xl font-bold tracking-tight text-faint transition-colors duration-300 md:text-2xl">
                <span className="transition-all duration-300 group-hover:[background-image:linear-gradient(120deg,var(--color-accent),var(--color-accent-warm))] group-hover:[-webkit-background-clip:text] group-hover:[background-clip:text] group-hover:text-transparent">
                  {logo.name}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
