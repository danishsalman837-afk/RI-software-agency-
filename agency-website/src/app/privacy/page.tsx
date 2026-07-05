import { PageHeader, Section, JsonLd } from "@/components";
import { pageMetadata, breadcrumbLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy",
  description: "How RI Software handles the information you share with us.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd("Privacy", "/privacy")} />
      <PageHeader
        eyebrow="Legal"
        title="Privacy."
        subtitle="A plain-language summary of what we collect and why. Last updated July 2025."
      />
      <Section className="pb-24 md:pb-36">
        <div className="max-w-2xl mx-auto px-6 lg:px-10 space-y-8 text-muted leading-relaxed text-[1.05rem]">
          <p className="rounded-md border border-line bg-sand px-5 py-4 text-sm text-ink">
            Placeholder policy for review by counsel before launch. Replace with your
            finalised terms.
          </p>
          <div>
            <h2 className="font-display text-2xl text-ink mb-3">What we collect</h2>
            <p>
              When you use our contact form we receive the name, email, company, and
              message you submit. We use this only to reply to your enquiry and, if we
              start working together, to run the project.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-ink mb-3">What we don&apos;t do</h2>
            <p>
              We don&apos;t sell your information, and we don&apos;t add you to a
              marketing list without you asking. Form submissions are delivered to us by
              email through EmailJS and are not published anywhere.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-ink mb-3">Your choices</h2>
            <p>
              You can ask us to delete any information you&apos;ve shared at any time by
              emailing{" "}
              <a href="mailto:hello@risoftware.agency" className="text-ink link-underline">
                hello@risoftware.agency
              </a>
              . We&apos;ll confirm once it&apos;s done.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
