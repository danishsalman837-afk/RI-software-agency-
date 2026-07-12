import Link from "next/link";
import { Container } from "@/components/ui";
import { SectionHeading } from "@/components";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";
import { PORTFOLIO_ITEMS } from "@/data";

// Distinct gradient wash per card so the trio reads as a set, not a template.
const WASHES = [
  "from-indigo-500/15 via-violet-500/10 to-transparent",
  "from-violet-500/15 via-fuchsia-500/10 to-transparent",
  "from-blue-500/15 via-indigo-500/10 to-transparent",
];

export default function SelectedWork() {
  return (
    <section className="border-t border-line py-16 md:py-28">
      <Container>
        <div className="mb-14 flex flex-col justify-between gap-6 md:mb-20 md:flex-row md:items-end">
          <FadeIn>
            <SectionHeading
              eyebrow="Selected work"
              title="A few things we've built."
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2 font-semibold text-ink"
            >
              <span className="link-underline">All work</span>
              <span className="text-accent transition-transform group-hover:translate-x-0.5">
                ↗
              </span>
            </Link>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {PORTFOLIO_ITEMS.slice(0, 3).map((item, i) => (
            <StaggerItem key={item.id} className={i === 1 ? "md:mt-12" : ""}>
              <Link href="/portfolio" className="group block h-full">
                <article className="card-lift flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card hover:border-accent/30">
                  {/* Visual */}
                  <div
                    className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${WASHES[i]} bg-slate-50`}
                  >
                    <div className="absolute inset-0 opacity-[0.6] [background-image:linear-gradient(var(--color-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-line)_1px,transparent_1px)] [background-size:28px_28px]" />
                    <div className="absolute left-5 right-5 top-5 flex items-center justify-between font-mono text-xs uppercase tracking-[0.14em] text-muted">
                      <span>{item.category}</span>
                      <span>{item.year}</span>
                    </div>
                    <span className="absolute bottom-3 right-5 select-none font-display text-[6rem] font-bold leading-none text-ink/[0.06] tabular-nums">
                      0{item.id}
                    </span>
                    <div className="absolute bottom-5 left-5">
                      <span className="font-display text-3xl font-bold tracking-tight text-ink transition-transform duration-500 group-hover:-translate-y-0.5">
                        {item.title}
                      </span>
                    </div>
                  </div>
                  {/* Body */}
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-[0.95rem] leading-relaxed text-muted">
                      {item.outcome}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {item.tags.slice(0, 3).map((tag) => (
                        <li
                          key={tag}
                          className="rounded-lg border border-line bg-sand px-2.5 py-1 font-mono text-[0.7rem] text-muted"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <p className="mt-12 font-mono text-xs text-faint">
          Representative builds. Named client case studies available on request.
        </p>
      </Container>
    </section>
  );
}
