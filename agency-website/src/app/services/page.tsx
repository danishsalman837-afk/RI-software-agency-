import Link from "next/link";
import { PageHeader, Section, FadeIn, Icon } from "@/components";
import { SERVICES, PROCESS_STEPS } from "@/data";

export const metadata = {
  title: "Services",
  description:
    "Web platforms, mobile apps, AI automation, and product design — built by a small studio that stays until it works.",
};

const CONTAINER = "max-w-7xl mx-auto px-6 lg:px-10";

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="What we do, in detail."
        subtitle="Four disciplines, one team. We take on a small number of projects at a time so each one gets real attention."
      />

      <Section className="pb-24 md:pb-36">
        <div className={CONTAINER}>
          <div className="space-y-24 md:space-y-32">
            {SERVICES.map((service, index) => {
              const flipped = index % 2 === 1;
              return (
                <div
                  key={service.title}
                  className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center"
                >
                  {/* Plate */}
                  <FadeIn
                    direction={flipped ? "left" : "right"}
                    className={flipped ? "md:order-2" : ""}
                  >
                    <div className="relative aspect-[4/3] rounded-md border border-line bg-sand overflow-hidden">
                      <div className="absolute inset-0 opacity-[0.5] bg-[linear-gradient(var(--color-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-line)_1px,transparent_1px)] [background-size:32px_32px]" />
                      <span className="absolute top-6 left-6 font-mono text-xs uppercase tracking-[0.16em] text-muted">
                        0{index + 1} / {service.title}
                      </span>
                      <span className="absolute bottom-6 right-7 font-display text-[8rem] leading-none text-ink/[0.07] tabular-nums select-none">
                        0{index + 1}
                      </span>
                      <div className="absolute inset-0 flex items-center justify-center text-accent">
                        <Icon name={service.icon} className="w-16 h-16" strokeWidth={1.25} />
                      </div>
                    </div>
                  </FadeIn>

                  {/* Content */}
                  <FadeIn
                    direction={flipped ? "right" : "left"}
                    className={flipped ? "md:order-1" : ""}
                  >
                    <h2 className="font-display font-medium text-3xl md:text-5xl tracking-[-0.02em] text-ink mb-5 leading-[1.02]">
                      {service.title}
                    </h2>
                    <p className="text-lg text-muted leading-relaxed mb-8 max-w-lg text-pretty">
                      {service.description}
                    </p>
                    <ul className="mb-10 max-w-md">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-baseline gap-4 py-3 border-t border-line text-ink"
                        >
                          <span aria-hidden className="font-mono text-xs text-accent">+</span>
                          <span className="text-[0.98rem]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className="group inline-flex items-center gap-2 font-medium text-ink">
                      <span className="link-underline">Start a {service.title.toLowerCase()} project</span>
                      <span className="text-accent transition-transform group-hover:translate-x-0.5">→</span>
                    </Link>
                  </FadeIn>
                </div>
              );
            })}
          </div>

          {/* How engagements run */}
          <div className="mt-28 md:mt-36 pt-16 border-t border-line">
            <FadeIn className="max-w-2xl mb-14">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted inline-flex items-center gap-3 mb-6">
                <span aria-hidden className="h-px w-8 bg-accent" />
                How engagements run
              </p>
              <h2 className="font-display font-medium text-3xl md:text-4xl tracking-[-0.02em] text-ink leading-[1.05]">
                Whatever we build, the rhythm is the same.
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10">
              {PROCESS_STEPS.map((s) => (
                <FadeIn key={s.step} className="border-t border-ink pt-5">
                  <span className="font-mono text-sm text-accent tnum">{s.step}</span>
                  <h3 className="font-display text-xl text-ink mt-2 mb-3">{s.title}</h3>
                  <p className="text-muted text-[0.95rem] leading-relaxed">{s.description}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
