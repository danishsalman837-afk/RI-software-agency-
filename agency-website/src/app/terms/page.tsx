import { PageHeader, Section, JsonLd } from "@/components";
import { pageMetadata, breadcrumbLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms",
  description: "The terms that govern use of the RI Software website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd("Terms", "/terms")} />
      <PageHeader
        eyebrow="Legal"
        title="Terms."
        subtitle="The basics that govern this website. Project work is covered by a separate signed agreement. Last updated July 2025."
      />
      <Section className="pb-24 md:pb-36">
        <div className="max-w-2xl mx-auto px-6 lg:px-10 space-y-8 text-muted leading-relaxed text-[1.05rem]">
          <p className="rounded-md border border-line bg-sand px-5 py-4 text-sm text-ink">
            Placeholder terms for review by counsel before launch. Replace with your
            finalised terms.
          </p>
          <div>
            <h2 className="font-display text-2xl text-ink mb-3">Using this site</h2>
            <p>
              This website is provided for information about RI Software and our
              services. The content is ours; please don&apos;t reproduce it wholesale
              without asking first.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-ink mb-3">No guarantee of engagement</h2>
            <p>
              Contacting us doesn&apos;t create a client relationship. That begins only
              once we&apos;ve both signed a written agreement setting out scope, price,
              and timeline.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-ink mb-3">Questions</h2>
            <p>
              Anything unclear? Email{" "}
              <a href="mailto:hello@risoftware.agency" className="text-ink link-underline">
                hello@risoftware.agency
              </a>{" "}
              and we&apos;ll walk you through it.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
