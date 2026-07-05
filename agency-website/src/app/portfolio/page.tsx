import Link from "next/link";
import { PageHeader, Section, StaggerContainer, StaggerItem, JsonLd } from "@/components";
import { PORTFOLIO_ITEMS } from "@/data";
import { pageMetadata, breadcrumbLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Work",
  description:
    "A selection of web platforms, mobile apps, and AI automation we've designed and built.",
  path: "/portfolio",
});

const CONTAINER = "max-w-7xl mx-auto px-6 lg:px-10";

export default function PortfolioPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd("Work", "/portfolio")} />
      <PageHeader
        eyebrow="Work"
        title="Selected work."
        subtitle="A cross-section of what we build. Named client case studies are shared on request once they're cleared for publication."
      />

      <Section className="pb-24 md:pb-36">
        <div className={CONTAINER}>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 md:gap-y-24">
            {PORTFOLIO_ITEMS.map((item, index) => (
              <StaggerItem key={item.id} className={index % 2 === 1 ? "md:mt-24" : ""}>
                <article className="group">
                  <div className="relative aspect-[16/10] rounded-md border border-line bg-sand overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.5] bg-[linear-gradient(var(--color-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-line)_1px,transparent_1px)] [background-size:32px_32px]" />
                    <div className="absolute top-6 left-6 right-6 flex items-center justify-between font-mono text-xs uppercase tracking-[0.14em] text-muted">
                      <span>{item.category}</span>
                      <span>{item.year}</span>
                    </div>
                    <span className="absolute bottom-4 right-7 font-display text-[9rem] leading-none text-ink/[0.07] tabular-nums select-none">
                      0{item.id}
                    </span>
                    <div className="absolute inset-0 flex items-end p-7">
                      <h2 className="font-display text-4xl md:text-5xl tracking-[-0.02em] text-ink transition-transform duration-500 group-hover:-translate-y-1">
                        {item.title}
                      </h2>
                    </div>
                  </div>

                  <div className="mt-6">
                    <p className="text-ink text-lg leading-relaxed mb-3 text-pretty">{item.description}</p>
                    <p className="flex items-baseline gap-3 text-muted mb-5">
                      <span aria-hidden className="font-mono text-xs text-accent shrink-0 pt-1">→</span>
                      <span className="text-[0.95rem]">{item.outcome}</span>
                    </p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs uppercase tracking-[0.1em] text-faint">
                      {item.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="mt-24 md:mt-32 pt-16 border-t border-line flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="font-display font-medium text-3xl md:text-5xl tracking-[-0.02em] leading-[1.02] max-w-xl text-balance">
              Something like this in mind?
            </h2>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-accent px-7 py-4 font-semibold text-paper rounded-sm transition-colors hover:bg-accent-deep self-start"
            >
              Start a build
              <svg className="transition-transform group-hover:translate-x-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
