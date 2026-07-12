import { Container } from "@/components/ui";
import { SectionHeading } from "@/components";
import { FadeIn, StaggerContainer, StaggerItem, Process } from "@/components";
import Testimonials from "@/components/Testimonials";
import {
  Hero,
  ClientMarquee,
  ServicesGrid,
  SelectedWork,
  CtaSection,
} from "@/components/sections";
import { Icon } from "@/components/Icon";
import { getInitials } from "@/lib/utils";
import { WHY_CHOOSE_US, TEAM } from "@/data";

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <Hero />

      {/* ── Social proof ─────────────────────────────────────── */}
      <ClientMarquee />

      {/* ── Manifesto ────────────────────────────────────────── */}
      <section className="py-16 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
            <FadeIn className="lg:col-span-4">
              <p className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-muted">
                <span aria-hidden className="h-px w-8 bg-accent" />
                Why we exist
              </p>
            </FadeIn>
            <FadeIn delay={0.1} className="lg:col-span-8">
              <p className="font-display text-2xl font-medium leading-[1.2] tracking-tight text-ink text-pretty md:text-4xl">
                Most software ships late, over budget, and built by people you
                never meet.{" "}
                <span className="text-muted">
                  We started RI to prove it doesn&apos;t have to work that way — a
                  small team, a direct line to the people writing the code, and
                  something running to click through every single week.
                </span>
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ── Services ─────────────────────────────────────────── */}
      <ServicesGrid />

      {/* ── Selected work ────────────────────────────────────── */}
      <SelectedWork />

      {/* ── Process (dark band) ──────────────────────────────── */}
      <Process />

      {/* ── Why teams stay ───────────────────────────────────── */}
      <section className="border-t border-line py-16 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <FadeIn className="self-start lg:col-span-4 lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="The difference"
                title="Why teams stay with us."
                subtitle="The reasons clients give when they sign on for a second project."
              />
            </FadeIn>
            <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-8">
              {WHY_CHOOSE_US.map((item) => (
                <StaggerItem key={item.title}>
                  <div className="card-lift h-full rounded-2xl border border-line bg-card p-7 hover:border-accent/30">
                    <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-sand text-accent">
                      <Icon name={item.icon} className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <h3 className="mb-2.5 font-display text-xl font-bold tracking-tight text-ink">
                      {item.title}
                    </h3>
                    <p className="text-[0.95rem] leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </Container>
      </section>

      {/* ── Founders ─────────────────────────────────────────── */}
      <section className="border-t border-line bg-sand/60 py-16 md:py-28">
        <Container>
          <FadeIn className="mb-14 max-w-2xl md:mb-20">
            <SectionHeading
              eyebrow="Who you'll work with"
              title="The two people who'll actually build it."
              subtitle="No hand-off to a junior team after the pitch. You work directly with both founders, start to finish."
            />
          </FadeIn>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {TEAM.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.1}>
                <article className="card-lift flex h-full flex-col gap-6 rounded-2xl border border-line bg-card p-7 hover:border-accent/30 sm:flex-row md:p-8">
                  <div className="gradient-accent flex aspect-square w-full shrink-0 items-center justify-center rounded-2xl text-white sm:w-32">
                    <span className="font-display text-4xl font-extrabold">
                      {getInitials(member.name)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold tracking-tight text-ink">
                      {member.name}
                    </h3>
                    <p className="mb-3 mt-1.5 font-mono text-xs uppercase tracking-[0.14em] text-accent">
                      {member.focus}
                    </p>
                    <p className="text-[0.95rem] leading-relaxed text-muted text-pretty">
                      {member.bio}
                    </p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <Testimonials />

      {/* ── CTA (dark) ───────────────────────────────────────── */}
      <CtaSection />
    </>
  );
}
