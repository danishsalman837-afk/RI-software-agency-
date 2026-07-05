import { PageHeader, Section, FadeIn, ContactForm } from "@/components";
import { TEAM } from "@/data";

export const metadata = {
  title: "Contact",
  description:
    "Tell us what you're trying to build. You'll hear back from a founder within a business day.",
};

const CONTAINER = "max-w-7xl mx-auto px-6 lg:px-10";

function founderEmail(name: string) {
  return `${name.split(" ")[0].toLowerCase()}@risoftware.agency`;
}

export default function ContactPage() {
  return (
    <>
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
                {TEAM.map((member) => (
                  <li key={member.name} className="border-t border-line py-6 flex items-baseline justify-between gap-4">
                    <div>
                      <p className="font-display text-2xl text-ink">{member.name}</p>
                      <p className="text-muted text-sm mt-1">{member.focus}</p>
                    </div>
                    <a
                      href={`mailto:${founderEmail(member.name)}`}
                      className="font-mono text-sm text-ink link-underline shrink-0"
                    >
                      {founderEmail(member.name)}
                    </a>
                  </li>
                ))}
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
