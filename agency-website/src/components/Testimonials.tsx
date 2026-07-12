import { Section, FadeIn } from "./Animations";
import { TESTIMONIALS } from "@/data";

export default function Testimonials() {
  // Use the first (featured) testimonial for the big editorial quote
  const featured = TESTIMONIALS[0];

  return (
    <Section className="py-24 md:py-32 border-y border-[#E5E3DC] bg-[#F6F5F0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <figure>
            {/* Large terracotta quotation mark */}
            <span className="block font-[family-name:var(--font-instrument-serif)] text-8xl md:text-9xl text-[#C1432E] leading-none mb-4 select-none" aria-hidden="true">
              &ldquo;
            </span>

            <blockquote className="font-[family-name:var(--font-instrument-serif)] text-2xl md:text-3xl lg:text-4xl text-[#1A1918] leading-snug mb-10 max-w-4xl mx-auto">
              {featured.quote}
            </blockquote>

            <figcaption>
              <div className="w-12 h-px bg-[#C1432E] mx-auto mb-6" />
              <div className="text-[#1A1918] font-semibold text-lg">{featured.name}</div>
              <div className="text-[#6B6963] text-sm mt-1">
                {featured.role}, {featured.company}
              </div>
            </figcaption>
          </figure>
        </FadeIn>
      </div>
    </Section>
  );
}
