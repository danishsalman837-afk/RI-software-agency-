import { PageHeader, Section, FadeIn, ContactForm, JsonLd } from "@/components";
import { TEAM } from "@/data";
import { pageMetadata, breadcrumbLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Tell us what you're trying to build. You'll hear back from a founder within a business day.",
  path: "/contact",
});

const CONTAINER = "max-w-7xl mx-auto px-6 lg:px-10";

// Real founder contact details.
const CONTACTS: Record<string, { email: string; phone: string; tel: string }> = {
  "Danish Salman": { email: "danishsalman234@gmail.com", phone: "0320 0430832", tel: "03200430832" },
  "Ahmed Saleem": { email: "flyluckyfire@gmail.com", phone: "0325 4864702", tel: "03254864702" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd("Contact", "/contact")} />
      <PageHeader
        eyebrow="Contact"
        title="Let's talk."
        subtitle="A finished spec or a rough idea both work. Tell us the problem and we'll tell you honestly whether we're the right team for it."
      />

      <Section className="pb-24 md:pb-36">
        <div className={CONTAINER}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start">
            {/* Info */}
            <FadeIn className="lg:col-span-5">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted mb-6">
                Talk to a founder directly
              </p>
              <ul className="mb-14">
                {TEAM.map((member) => {
                  const c = CONTACTS[member.name];
                  return (
                    <li key={member.name} className="border-t border-line py-6 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 sm:gap-4">
                      <div>
                        <p className="font-display text-2xl text-ink">{member.name}</p>
                        <p className="text-muted text-sm mt-1">{member.focus}</p>
                      </div>
                      {c && (
                        <div className="flex flex-col sm:items-end gap-1 shrink-0 font-mono text-sm">
                          <a href={`mailto:${c.email}`} className="text-ink link-underline">{c.email}</a>
                          <a href={`tel:${c.tel}`} className="text-muted hover:text-ink transition-colors">{c.phone}</a>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>

              <div className="space-y-6 text-[0.95rem]">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-faint w-24 shrink-0">General</span>
                  <a href="mailto:hello@risoftware.agency" className="text-ink link-underline">hello@risoftware.agency</a>
                </div>
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-faint w-24 shrink-0">Hours</span>
                  <span className="text-muted">Mon–Fri · replies within a business day</span>
                </div>
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-faint w-24 shrink-0">Where</span>
                  <span className="text-muted">Remote · working with clients globally</span>
                </div>
              </div>
            </FadeIn>

            {/* Form */}
            <FadeIn delay={0.1} className="lg:col-span-7">
              <div className="rounded-md border border-line bg-card p-7 md:p-10">
                <h2 className="font-display text-2xl md:text-3xl text-ink mb-2">Send us a message</h2>
                <p className="text-muted mb-8">The more context you give, the sharper our first reply.</p>
                <ContactForm />
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>
    </>
  );
}
