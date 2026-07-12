import { PageHeader, Section, FadeIn, StaggerContainer, StaggerItem, IconTile } from "@/components";
import { CORE_VALUES } from "@/data";

export const metadata = {
  title: "About Us — RI Software Studio",
  description: "Learn about our experience, our mission, and how we build world-class digital products.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader 
        title="Who We Are" 
        subtitle="We are a small, focused team of engineers and designers with a single objective: to build the software your business actually runs on."
      />

      {/* Mission Section */}
      <Section className="bg-[#F6F5F0] border-y border-[#E5E3DC] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 relative rounded-2xl overflow-hidden border border-[#E5E3DC] bg-white p-8">
              <div className="absolute inset-0 bg-[#F6F5F0]/30" />
              <div className="relative z-10">
                <p className="font-[family-name:var(--font-instrument-serif)] text-2xl md:text-3xl text-[#1A1918] mb-6 italic leading-relaxed">
                  &ldquo;Most software ships late, over budget, and built by people you never meet. We started RI to prove it doesn&apos;t have to work that way.&rdquo;
                </p>
                <p className="font-mono text-xs text-[#6B6963] uppercase tracking-wider">— RI Studio Manifest</p>
              </div>
            </div>
            
            <div className="lg:col-span-6 order-1 lg:order-2">
              <FadeIn>
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-[#6B6963] block mb-4">
                  — OUR MISSION
                </span>
                <h3 className="font-[family-name:var(--font-instrument-serif)] text-4xl sm:text-5xl text-[#1A1918] mb-8 leading-[1.1]">
                  Empowering businesses through software that works.
                </h3>
                <p className="text-[#6B6963] text-lg mb-6 leading-relaxed font-light">
                  For the past 5 years, RI Software has operated with a simple belief: software should not just solve problems, it should create new structural advantages. We bridge the gap between complex engineering challenges and elegant, human-centric design.
                </p>
                <p className="text-[#6B6963] text-lg leading-relaxed font-light">
                  Led by Founding Partners Danish Salman and Ahmed Saleem, we work directly on every engagement. There are no account managers relaying messages, only direct lines to the people writing the code.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </Section>

      {/* Core Values */}
      <Section className="bg-[#F6F5F0] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-16">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-[#6B6963] block mb-3">
              — OUR DNA
            </span>
            <h3 className="font-[family-name:var(--font-instrument-serif)] text-4xl md:text-5xl text-[#1A1918]">
              Core Values
            </h3>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CORE_VALUES.map((value) => (
              <StaggerItem key={value.title}>
                <div className="border border-[#E5E3DC] bg-white p-8 rounded-xl h-full flex flex-col justify-between hover:border-[#C1432E] transition-colors duration-150 relative overflow-hidden group">
                  <div>
                    <IconTile name={value.icon} className="mb-6 bg-[#F6F5F0] border-[#E5E3DC]" />
                    <h4 className="font-[family-name:var(--font-instrument-serif)] text-2xl text-[#1A1918] mb-3">{value.title}</h4>
                    <p className="text-[#6B6963] text-sm leading-relaxed font-light">{value.description}</p>
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
