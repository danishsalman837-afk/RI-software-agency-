import { PageHeader, Section, StaggerContainer, StaggerItem } from "@/components";
import { PORTFOLIO_ITEMS } from "@/data";

export const metadata = {
  title: "Portfolio — RI Software Studio",
  description: "Explore our latest projects and see how we've helped businesses build scalable digital products.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader 
        title="Our Work" 
        subtitle="A selection of platforms, applications, and automated workflows designed and shipped by the studio."
      />

      <Section className="bg-[#F6F5F0] pt-0 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO_ITEMS.map((item, index) => (
              <div
                key={item.id}
                className="group border border-[#E5E3DC] bg-white rounded-lg p-6 flex flex-col justify-between hover:border-[#C1432E] transition-colors duration-150 relative overflow-hidden min-h-[340px]"
              >
                {/* Number Watermark background */}
                <div className="absolute right-4 bottom-4 font-[family-name:var(--font-instrument-serif)] text-9xl text-[#E5E3DC]/20 select-none pointer-events-none group-hover:text-[#C1432E]/5 transition-colors duration-300">
                  {`0${index + 1}`}
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#6B6963] mb-6">
                    <span className="uppercase tracking-wider">{item.category}</span>
                    <span>{item.year}</span>
                  </div>

                  <h3 className="font-[family-name:var(--font-instrument-serif)] text-3xl text-[#1A1918] mb-3 group-hover:text-[#C1432E] transition-colors duration-150">
                    {item.title}
                  </h3>
                  
                  <p className="text-[#6B6963] text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="relative z-10 flex flex-wrap gap-1.5 mt-auto">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded border border-[#E5E3DC] font-mono text-[10px] text-[#6B6963] bg-[#F6F5F0]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </Section>
    </>
  );
}
