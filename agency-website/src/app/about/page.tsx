import { PageHeader, Section, FadeIn, StaggerContainer, StaggerItem, JsonLd } from "@/components";
import { CORE_VALUES, TEAM } from "@/data";
import { getInitials } from "@/lib/utils";
import { pageMetadata, breadcrumbLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description:
    "RI Software is a small, senior software studio. Two founders, a focused workload, and a bias toward shipping.",
  path: "/about",
});

const CONTAINER = "max-w-7xl mx-auto px-6 lg:px-10";

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd("About", "/about")} />
      <PageHeader
        eyebrow="About"
        title="A small studio, on purpose."
        subtitle="We stayed small so we could stay senior. Two founders, a handful of projects at a time, and no layers between you and the work."
      />

      {/* Mission */}
      <Section className="py-20 md:py-32 bg-sand border-y border-line">
        <div className={CONTAINER}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <FadeIn className="lg:col-span-4">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted inline-flex items-center gap-3">
                <span aria-hidden className="h-px w-8 bg-accent" />
                Why RI exists
              </p>
            </FadeIn>
            <div className="lg:col-span-8 space-y-8">
              <FadeIn>
                <p className="font-display font-medium text-2xl md:text-4xl leading-[1.2] tracking-[-0.01em] text-ink text-pretty">
                  We&apos;d both worked at places where good software got lost between
                  account managers, hand-offs, and status decks.
                </p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-lg text-muted leading-relaxed max-w-2xl text-pretty">
                  So we started RI with a narrow idea of how it should work: keep the
                  team small enough that the people who scope a project are the ones who
                  build it, agree on scope and price before starting, and put working
                  software in front of the client every week. Five years on, that&apos;s
                  still the whole model.
                </p>
              </FadeIn>
              <FadeIn delay={0.15}>
                <p className="text-lg text-muted leading-relaxed max-w-2xl text-pretty">
                  We work with founders, product teams, and established businesses who
                  want a partner rather than a vendor — and who&apos;d rather have one
                  senior team see the whole thing through than a rotating cast.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="py-24 md:py-36">
        <div className={CONTAINER}>
          <FadeIn className="max-w-2xl mb-16 md:mb-20">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted inline-flex items-center gap-3 mb-6">
              <span aria-hidden className="h-px w-8 bg-accent" />
              How we operate
            </p>
            <h2 className="font-display font-medium text-4xl md:text-5xl tracking-[-0.02em] text-ink leading-[1.02]">
              Three rules we don&apos;t break.
            </h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
            {CORE_VALUES.map((value, i) => (
              <StaggerItem key={value.title} className="border-t-2 border-ink pt-6">
                <span className="font-mono text-sm text-accent tnum">0{i + 1}</span>
                <h3 className="font-display text-2xl md:text-3xl tracking-[-0.01em] text-ink mt-3 mb-4">
                  {value.title}
                </h3>
                <p className="text-muted leading-relaxed text-pretty">{value.description}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Section>

      {/* Founders */}
      <Section className="py-24 md:py-36 bg-sand border-y border-line">
        <div className={CONTAINER}>
          <FadeIn className="max-w-2xl mb-16 md:mb-20">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted inline-flex items-center gap-3 mb-6">
              <span aria-hidden className="h-px w-8 bg-accent" />
              The founders
            </p>
            <h2 className="font-display font-medium text-4xl md:text-5xl tracking-[-0.02em] text-ink leading-[1.02]">
              Two people. Both on your project.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            {TEAM.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.1}>
                <article className="flex flex-col sm:flex-row gap-6">
                  <div className="relative w-full sm:w-40 shrink-0 aspect-square sm:aspect-[3/4] rounded-md border border-line bg-card overflow-hidden flex items-center justify-center">
                    <span className="font-display text-6xl text-ink/15 select-none">
                      {getInitials(member.name)}
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
    </>
  );
}
