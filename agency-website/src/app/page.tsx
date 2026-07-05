import Link from "next/link";
import {
  FadeIn, Section, StaggerContainer, StaggerItem,
  InteractiveServices, LogoWall, Process, Testimonials, SectionHeading,
} from "@/components";
import { SERVICES, PORTFOLIO_ITEMS, STATS, WHY_CHOOSE_US, TEAM } from "@/data";
import { getInitials } from "@/lib/utils";

const CONTAINER = "max-w-7xl mx-auto px-6 lg:px-10";

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="pt-36 md:pt-44 pb-16 md:pb-20">
        <div className={CONTAINER}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            <div className="lg:col-span-8">
              <FadeIn>
                <p className="mb-8 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-muted">
                  <span aria-hidden className="h-px w-8 bg-accent" />
                  RI Software — software studio, est. 2019
                </p>
              </FadeIn>
              <FadeIn delay={0.05}>
                <h1 className="font-display font-medium tracking-[-0.025em] text-balance text-[3.25rem] leading-[0.98] sm:text-6xl md:text-7xl lg:text-[6rem]">
                  We build the software your business{" "}
                  <em className="italic font-normal text-accent">actually</em> runs on.
                </h1>
              </FadeIn>
              <FadeIn delay={0.12}>
                <p className="mt-8 max-w-xl text-lg md:text-xl leading-relaxed text-muted text-pretty">
                  Web platforms, mobile apps, and the automation behind them —
                  designed and shipped by a two-person studio that stays until it works.
                </p>
              </FadeIn>
              <FadeIn delay={0.18}>
                <div className="mt-10 flex flex-wrap items-center gap-6">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 bg-accent px-7 py-4 text-base font-semibold text-paper rounded-sm transition-colors hover:bg-accent-deep"
                  >
                    Start a build
                    <svg className="transition-transform group-hover:translate-x-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                  <Link href="/portfolio" className="group inline-flex items-center gap-2 font-medium text-ink">
                    <span className="link-underline">See the work</span>
                    <span className="text-accent transition-transform group-hover:translate-x-0.5">↗</span>
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* Editorial meta rail */}
            <FadeIn delay={0.24} direction="left" className="lg:col-span-4 lg:pl-8 lg:border-l border-line flex flex-col justify-end">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-faint mb-5">What we do</p>
              <ul>
                {["Web platforms", "Mobile apps", "AI automation", "Product & design"].map((item) => (
                  <li key={item} className="flex items-center justify-between border-t border-line py-3 text-ink">
                    <span className="font-display text-lg">{item}</span>
                    <span className="text-accent" aria-hidden>—</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted">
                Currently booking new builds. Two-week lead time for kickoff.
              </p>
            </FadeIn>
          </div>

          {/* Operating facts — honest, not vanity metrics */}
          <div className="mt-16 md:mt-24 pt-10 border-t border-line grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <FadeIn key={stat.label}>
                <div className="font-display text-4xl md:text-5xl tracking-[-0.02em] text-ink tnum">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-muted leading-snug max-w-[16ch]">{stat.label}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sectors ──────────────────────────────────────────── */}
      <LogoWall />

      {/* ── Manifesto ────────────────────────────────────────── */}
      <Section className="py-24 md:py-36">
        <div className={CONTAINER}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            <FadeIn className="lg:col-span-4">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted inline-flex items-center gap-3">
                <span aria-hidden className="h-px w-8 bg-accent" />
                Why we exist
              </p>
            </FadeIn>
            <FadeIn delay={0.1} className="lg:col-span-8">
              <p className="font-display font-medium text-2xl md:text-4xl leading-[1.2] tracking-[-0.01em] text-ink text-pretty">
                Most software ships late, over budget, and built by people you never
                meet.{" "}
                <span className="text-muted">
                  We started RI to prove it doesn&apos;t have to work that way — a small
                  team, a direct line to the people writing the code, and something
                  running to click through every single week.
                </span>
              </p>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* ── Services ─────────────────────────────────────────── */}
      <Section id="services" className="py-24 md:py-36 border-t border-line">
        <div className={CONTAINER}>
          <FadeIn className="mb-16 md:mb-20 max-w-2xl">
            <SectionHeading
              eyebrow="What we do"
              title="Four things, done properly."
              subtitle="We keep the studio small and the scope focused, so every engagement gets the attention it needs."
            />
          </FadeIn>
          <FadeIn delay={0.1} fullWidth>
            <InteractiveServices services={SERVICES} />
          </FadeIn>
        </div>
      </Section>

      {/* ── Selected work ────────────────────────────────────── */}
      <Section className="py-24 md:py-36 bg-paper border-t border-line">
        <div className={CONTAINER}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
            <FadeIn>
              <SectionHeading eyebrow="Selected work" title="A few things we've built." />
            </FadeIn>
            <FadeIn delay={0.1}>
              <Link href="/portfolio" className="group inline-flex items-center gap-2 font-medium text-ink">
                <span className="link-underline">All work</span>
                <span className="text-accent transition-transform group-hover:translate-x-0.5">↗</span>
              </Link>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-14">
            {PORTFOLIO_ITEMS.slice(0, 3).map((item, i) => (
              <StaggerItem key={item.id} className={i === 1 ? "md:mt-16" : ""}>
                <Link href="/portfolio" className="group block">
                  <div className="relative aspect-[4/5] rounded-md border border-line bg-sand overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.5] bg-[linear-gradient(var(--color-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-line)_1px,transparent_1px)] [background-size:28px_28px]" />
                    <div className="absolute top-5 left-5 right-5 flex items-center justify-between font-mono text-xs uppercase tracking-[0.14em] text-muted">
                      <span>{item.category}</span>
                      <span>{item.year}</span>
                    </div>
                    <span className="absolute bottom-4 right-5 font-display text-[7rem] leading-none text-ink/[0.07] tabular-nums select-none">
                      0{item.id}
                    </span>
                    <div className="absolute inset-0 flex items-end p-6">
                      <span className="font-display text-3xl text-ink transition-transform duration-500 group-hover:-translate-y-1">
                        {item.title}
                      </span>
                    </div>
                  </div>
                  <p className="mt-5 text-muted leading-relaxed text-pretty">{item.outcome}</p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <p className="mt-14 font-mono text-xs text-faint">
            Representative builds. Named client case studies available on request.
          </p>
        </div>
      </Section>

      {/* ── Process (dark band) ──────────────────────────────── */}
      <Process />

      {/* ── Why teams stay ───────────────────────────────────── */}
      <Section className="py-24 md:py-36 border-t border-line">
        <div className={CONTAINER}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <FadeIn className="lg:col-span-4 lg:sticky lg:top-28 self-start">
              <SectionHeading
                eyebrow="The difference"
                title="Why teams stay with us."
                subtitle="The reasons clients give when they sign on for a second project."
              />
            </FadeIn>
            <StaggerContainer className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-0">
              {WHY_CHOOSE_US.map((item, i) => (
                <StaggerItem key={item.title} className="border-t border-line py-8 flex gap-5">
                  <span className="font-mono text-sm text-accent pt-1">0{i + 1}</span>
                  <div>
                    <h3 className="font-display text-xl md:text-2xl tracking-[-0.01em] text-ink mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted leading-relaxed text-[0.95rem]">{item.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </Section>

      {/* ── Founders ─────────────────────────────────────────── */}
      <Section className="py-24 md:py-36 bg-sand border-y border-line">
        <div className={CONTAINER}>
          <FadeIn className="max-w-2xl mb-16 md:mb-20">
            <SectionHeading
              eyebrow="Who you'll work with"
              title="The two people who'll actually build it."
              subtitle="No hand-off to a junior team after the pitch. You work directly with both founders, start to finish."
            />
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            {TEAM.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.1}>
                <article className="flex flex-col sm:flex-row gap-6">
                  <div className="relative w-full sm:w-40 shrink-0 aspect-square sm:aspect-[3/4] rounded-md border border-line bg-card overflow-hidden flex items-center justify-center">
                    <span className="font-display text-6xl text-ink/15 select-none">
                      {getInitials(member.name)}
                    </span>
                    <span className="absolute bottom-3 left-3 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-faint">
                      0{i + 1}
                    </span>
                  </div>
                  <div className="pt-1">
                    <h3 className="font-display text-2xl md:text-3xl tracking-[-0.01em] text-ink">{member.name}</h3>
                    <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent mt-2 mb-4">
                      {member.focus}
                    </p>
                    <p className="text-muted leading-relaxed text-pretty">{member.bio}</p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <Testimonials />

      {/* ── Direct line CTA ──────────────────────────────────── */}
      <Section className="py-24 md:py-36">
        <div className={CONTAINER}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <FadeIn className="lg:col-span-7">
              <h2 className="font-display font-medium text-4xl md:text-6xl tracking-[-0.02em] leading-[1.02] text-balance">
                Tell us what you&apos;re trying to build.
              </h2>
              <p className="mt-6 text-lg text-muted leading-relaxed max-w-xl text-pretty">
                We&apos;ll tell you honestly whether we&apos;re the right studio for it,
                and what it would take. No sales sequence — you&apos;ll hear back from a
                founder within a day.
              </p>
            </FadeIn>
            <FadeIn delay={0.1} className="lg:col-span-5 lg:justify-self-end">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-accent px-8 py-5 text-lg font-semibold text-paper rounded-sm transition-colors hover:bg-accent-deep"
              >
                Start a build
                <svg className="transition-transform group-hover:translate-x-0.5" width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <p className="mt-5 font-mono text-xs text-muted">
                or email{" "}
                <a href="mailto:hello@risoftware.agency" className="text-ink link-underline">
                  hello@risoftware.agency
                </a>
              </p>
            </FadeIn>
          </div>
        </div>
      </Section>
    </>
  );
}
