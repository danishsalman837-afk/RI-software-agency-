import { Section, FadeIn, StaggerContainer, StaggerItem, SectionHeading } from "@/components";
import { Icon } from "./Icon";
import { PROCESS_STEPS } from "@/data";

export default function Process() {
  return (
    <Section className="bg-[#050510] py-24 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="mb-20">
          <SectionHeading
            eyebrow="How We Work"
            eyebrowColor="text-[#00cec9]"
            title="A Process Built for Results"
            subtitle="A clear, transparent path from first conversation to launch — so you always know what's happening and why."
          />
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS_STEPS.map((s) => (
            <StaggerItem key={s.step}>
              <div className="relative h-full glass rounded-3xl p-8 group hover:-translate-y-2 transition-transform duration-500">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#1a1a2e] border border-[#2a2a40] flex items-center justify-center text-[#a29bfe] group-hover:border-[#6c5ce7] transition-colors duration-300">
                    <Icon name={s.icon} className="w-6 h-6" />
                  </div>
                  <span className="text-5xl font-extrabold text-white/5 group-hover:text-[#6c5ce7]/20 transition-colors duration-300">
                    {s.step}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{s.title}</h4>
                <p className="text-[#8888a0] leading-relaxed">{s.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  );
}
