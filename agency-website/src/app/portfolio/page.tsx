import { PageHeader, Section, StaggerContainer, StaggerItem, Icon } from "@/components";
import type { IconKey } from "@/components";
import { PORTFOLIO_ITEMS } from "@/data";

const CATEGORY_ICON: Record<string, IconKey> = {
  "Web Application": "globe",
  "Mobile App": "smartphone",
  "AI Solution": "bot",
};

export const metadata = {
  title: "Portfolio | RI Software Agency",
  description: "Explore our latest projects and see how we've helped businesses transform their digital presence.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader 
        title="Our Work" 
        subtitle="A showcase of our best work. From innovative startups to global enterprises, we deliver excellence."
      />

      <Section className="bg-[#050510] pt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {PORTFOLIO_ITEMS.map((item, index) => (
              <StaggerItem key={item.id} className={index % 2 === 1 ? "md:mt-24" : ""}>
                <div className="group cursor-pointer">
                  {/* Image Container */}
                  <div className="relative rounded-[2rem] overflow-hidden mb-8 aspect-[4/3] bg-[#1a1a2e]">
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
                    
                    {/* Placeholder Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${item.gradient} blur-2xl opacity-50 group-hover:scale-150 transition-transform duration-700`} />
                      <span className="relative z-10 text-white/90 group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl">
                        <Icon name={CATEGORY_ICON[item.category] ?? "code"} className="w-20 h-20" />
                      </span>
                    </div>

                    {/* Overlay Hover Info */}
                    <div className="absolute inset-0 bg-[#050510]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm flex items-center justify-center">
                      <span className="px-8 py-4 rounded-full border border-white/20 text-white font-medium tracking-wide">
                        View Project
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                      <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${item.gradient} text-white`}>
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-[#6c5ce7] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[#8888a0] text-lg mb-6 leading-relaxed">
                      {item.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-md bg-[#1a1a2e] border border-[#2a2a40] text-sm text-[#8888a0]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Section>
    </>
  );
}
