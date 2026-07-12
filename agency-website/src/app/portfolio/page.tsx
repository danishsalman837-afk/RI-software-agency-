import { PageHeader, Section, StaggerContainer, StaggerItem } from "@/components";
import { PORTFOLIO_ITEMS } from "@/data";

export const metadata = {
  title: "Production Archive — RI Software Studio",
  description: "Explore transaction metrics and engineering achievements across our shipped systems.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader 
        title="Production Archive" 
        subtitle="Telemetry reports, project code names, and exact performance achievements for client platforms."
      />

      <Section className="bg-[#0A0A0A] pt-0 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO_ITEMS.map((item, index) => (
              <div
                key={item.id}
                className="group border border-[#262626] bg-[#161616] p-6 flex flex-col justify-between hover:border-[#06B6D4] transition-colors duration-150 relative overflow-hidden min-h-[340px]"
              >
                {/* Index Watermark */}
                <div className="absolute right-4 bottom-4 font-mono text-7xl font-extrabold text-[#262626]/20 select-none pointer-events-none group-hover:text-[#06B6D4]/5 transition-colors duration-300">
                  {`0${index + 1}`}
                </div>

                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#8F8F8F] mb-6 border-b border-[#262626] pb-3">
                    <span>{item.category}</span>
                    <span>{item.year}</span>
                  </div>

                  <span className="block font-mono text-xs text-[#06B6D4] mb-2">
                    [{item.codeName}]
                  </span>

                  <h3 className="text-xl font-bold tracking-tight text-white mb-3 group-hover:text-[#06B6D4] transition-colors duration-150">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs text-[#8F8F8F] leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="font-mono text-sm font-semibold text-[#06B6D4] mb-6">
                    // {item.metric}
                  </div>
                </div>

                <div className="relative z-10 flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-[#262626]">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 border border-[#262626] font-mono text-[9px] text-[#8F8F8F] bg-[#0A0A0A]"
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
