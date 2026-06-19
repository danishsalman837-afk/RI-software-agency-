import { Section, FadeIn, StaggerContainer, StaggerItem } from "./Animations";
import SectionHeading from "./SectionHeading";
import { TESTIMONIALS } from "@/data";
import { getInitials } from "@/lib/utils";

export default function Testimonials() {
  return (
    <Section className="bg-[#0d0d1a] border-y border-[#2a2a40] py-24 md:py-32 overflow-hidden">
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
            <StaggerItem key={t.id}>
              <figure className="h-full glass rounded-3xl p-8 flex flex-col">
                <div className="flex gap-1 mb-5" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#fdcb6e]" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.78L10 14.77l-5.2 2.73.99-5.78-4.21-4.1 5.82-.85z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-[#e8e8f0] text-lg leading-relaxed mb-8 flex-grow">
                  {t.quote}
                </blockquote>
                <figcaption className="flex items-center gap-4 border-t border-[#2a2a40] pt-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6c5ce7] to-[#00cec9] flex items-center justify-center text-white font-bold">
                    {getInitials(t.name)}
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
