import { Section, FadeIn, StaggerContainer, StaggerItem, SectionHeading } from "@/components";
import { TESTIMONIALS } from "@/data";

export default function Testimonials() {
  return (
    <Section className="bg-[#0d0d1a] border-y border-[#2a2a40] py-24 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="mb-20">
          <SectionHeading
            eyebrow="Testimonials"
            eyebrowColor="text-[#fd79a8]"
            title="What Our Clients Say"
            subtitle="We measure our success by the growth of the businesses we partner with."
          />
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <StaggerItem key={t.name}>
              <figure className="h-full glass rounded-3xl p-8 flex flex-col">
                <div className="text-6xl leading-none text-[#6c5ce7]/40 font-serif mb-2" aria-hidden="true">
                  &ldquo;
                </div>
                <blockquote className="text-[#e8e8f0] text-lg leading-relaxed mb-8 flex-grow">
                  {t.quote}
                </blockquote>
                <figcaption className="flex items-center gap-4 border-t border-[#2a2a40] pt-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6c5ce7] to-[#00cec9] flex items-center justify-center text-white font-bold">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-white font-bold">{t.name}</div>
                    <div className="text-[#8888a0] text-sm">
                      {t.role}, {t.company}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  );
}
