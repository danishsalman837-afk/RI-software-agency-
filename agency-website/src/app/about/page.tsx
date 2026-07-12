import { PageHeader, Section, FadeIn, StaggerContainer, StaggerItem, IconTile } from "@/components";

export const metadata = {
  title: "About — RI Software Studio",
  description: "Direct engineering partnerships, zero middleware overlays, and full owner IP handover.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader 
        title="Engineering-First DNA" 
        subtitle="We formed RI to replace agency bureaucracy with senior developers writing high-performance digital layers."
      />

      {/* Mission Section */}
      <Section className="py-24 md:py-32 border-y border-[#262626] bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
            {/* Left Block */}
            <div className="lg:col-span-6 border border-[#262626] bg-[#161616] p-8 flex flex-col justify-between">
              <span className="block font-mono text-xs font-semibold text-[#06B6D4] mb-4">// MANIFESTO</span>
              <p className="text-xl font-bold tracking-tight text-white leading-relaxed mb-6">
                &ldquo;Outsourcing agencies rely on bloated management layers. We maintain a zero-overhead engineering studio where you collaborate directly with system builders.&rdquo;
              </p>
              <span className="font-mono text-[10px] text-[#8F8F8F] uppercase tracking-wider">// RI SOFTWARE PRINCIPLE_01</span>
            </div>

            {/* Right Block */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <FadeIn>
                <span className="font-mono text-xs font-semibold text-[#06B6D4] block mb-4">
                  // THE INTENT
                </span>
                <h3 className="text-3xl font-bold tracking-tight text-white mb-6 leading-tight">
                  High-Performance Software Architecture
                </h3>
                <p className="text-sm text-[#8F8F8F] mb-6 leading-relaxed">
                  Every product shipped by the studio is subjected to rigorous performance budgets, clean component designs, and complete unit coverage. We do not use bloated themes or lock you into proprietary runtimes.
                </p>
                <p className="text-sm text-[#8F8F8F] leading-relaxed">
                  Upon milestone completion, 100% of the repository ownership and intellectual property is transferred directly to your team, ensuring a clean, long-term technical foundation.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
