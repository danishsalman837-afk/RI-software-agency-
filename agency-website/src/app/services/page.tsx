import { PageHeader, Section, FadeIn, Icon } from "@/components";
import { SERVICES } from "@/data";

export const metadata = {
  title: "Services — RI Software Studio",
  description: "Comprehensive digital services including Web Platforms, Mobile Apps, AI Automation, and Product Design.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader 
        title="Our Services" 
        subtitle="We keep our studio small and our scope focused, so every build gets the attention it needs."
      />

      {/* Detailed Services */}
      <Section className="bg-[#F6F5F0] pt-0 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {SERVICES.map((service, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 lg:gap-24 items-center border-b border-[#E5E3DC] pb-24 last:border-b-0 last:pb-0`}>
                <div className="w-full md:w-1/2">
                  <FadeIn direction={index % 2 === 1 ? 'left' : 'right'}>
                    <div className="relative aspect-square max-w-md mx-auto flex items-center justify-center border border-[#E5E3DC] bg-white rounded-2xl p-16">
                      <div className="absolute right-4 top-4 font-mono text-xs text-[#9C9890]">
                        {service.number}
                      </div>
                      <span className="text-[#C1432E]">
                        <Icon name={service.icon} className="w-24 h-24" />
                      </span>
                    </div>
                  </FadeIn>
                </div>
                
                <div className="w-full md:w-1/2">
                  <FadeIn direction={index % 2 === 1 ? 'right' : 'left'}>
                    <h2 className="font-[family-name:var(--font-instrument-serif)] text-4xl md:text-5xl text-[#1A1918] mb-6">
                      {service.title}
                    </h2>
                    <p className="text-[#6B6963] text-lg leading-relaxed mb-8">
                      {service.description} We leverage robust architectures and modern stacks to ensure every piece of software is performant, maintainable, and built to scale.
                    </p>
                    
                    <ul className="space-y-4 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-[#1A1918]">
                          <span className="text-[#C1432E] mt-1.5 flex-shrink-0">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                          <span className="text-sm font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Stack tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {service.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded border border-[#E5E3DC] bg-white font-mono text-xs text-[#6B6963]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <a href="#contact" className="inline-flex items-center justify-center px-5 py-2.5 bg-[#C1432E] text-white text-sm font-medium rounded-lg hover:bg-[#A93826] transition-colors">
                      Start a build
                    </a>
                  </FadeIn>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
