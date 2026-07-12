import { PageHeader, Section, FadeIn, Icon } from "@/components";
import { SERVICES } from "@/data";

export const metadata = {
  title: "Capabilities — RI Software Studio",
  description: "Web Architectures, Native Client Engines, Enterprise AI, and Workflow Automation.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader 
        title="Our Capabilities" 
        subtitle="A look at the specific technical verticals we support across our product engagements."
      />

      <Section className="bg-[#0A0A0A] pt-0 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-16">
            {SERVICES.map((service) => (
              <div key={service.number} className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-[#262626] border border-[#262626]">
                {/* Left side: Icon Tile */}
                <div className="lg:col-span-4 bg-[#161616] p-8 flex items-center justify-center relative min-h-[200px]">
                  <span className="absolute top-4 left-4 font-mono text-[10px] text-[#8F8F8F]">
                    // STATUS_OK
                  </span>
                  <div className="text-[#06B6D4]">
                    <Icon name={service.icon} className="w-16 h-16" />
                  </div>
                </div>

                {/* Right side: Specifications */}
                <div className="lg:col-span-8 bg-[#161616] p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <span className="block font-mono text-xs font-semibold text-[#06B6D4] mb-3">
                      [{service.number}] // {service.title.toUpperCase()}
                    </span>
                    <p className="text-sm text-[#8F8F8F] leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-xs text-[#8F8F8F]">
                          <span className="text-[#06B6D4]">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#262626]">
                    {service.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 border border-[#262626] bg-[#0A0A0A] font-mono text-[10px] text-[#8F8F8F]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
