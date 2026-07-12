import Link from "next/link";
import { Container, Card } from "@/components/ui";
import { SectionHeading } from "@/components";
import { Icon, IconKey } from "@/components/Icon";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";
import { SERVICES } from "@/data";

export default function ServicesGrid() {
  return (
    <section
      id="services"
      className="border-t border-line py-16 md:py-28"
    >
      <Container>
        <FadeIn className="mb-14 max-w-2xl md:mb-20">
          <SectionHeading
            eyebrow="What we do"
            title="Four things, done properly."
            subtitle="We keep the studio small and the scope focused, so every engagement gets the attention it needs."
          />
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <StaggerItem key={service.title}>
              <Card
                lift
                className="flex h-full flex-col p-7 md:p-8"
              >
                {/* Gradient icon tile */}
                <span className="gradient-accent mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-[0_8px_20px_-6px_rgba(79,70,229,0.5)]">
                  <Icon
                    name={service.icon as IconKey}
                    className="h-6 w-6"
                    strokeWidth={1.75}
                  />
                </span>

                <h3 className="font-display text-2xl font-bold tracking-tight text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-2.5">
                  {service.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-sm text-ink/80"
                    >
                      <svg
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M3 8.5l3.5 3.5L13 4.5"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/services"
                  className="mt-auto pt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent-deep"
                >
                  <span className="link-underline">Learn more</span>
                  <span aria-hidden>→</span>
                </Link>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
