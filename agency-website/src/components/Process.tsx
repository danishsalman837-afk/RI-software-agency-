import { Section, FadeIn, StaggerContainer, StaggerItem } from "./Animations";
import { PROCESS_STEPS } from "@/data";

export default function Process() {
  return (
    <Section id="process" className="section-dark py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="mb-16">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-[#9C9890] mb-5">
            — How we work
          </p>
          <h2 className="font-[family-name:var(--font-instrument-serif)] text-4xl md:text-5xl lg:text-6xl text-[#F6F5F0] mb-6 leading-[1.1]">
            A process you can actually watch.
          </h2>
          <p className="text-lg md:text-xl text-[#9C9890] leading-relaxed max-w-2xl">
            Four phases, weekly demos, and no black boxes. You always know what we&apos;re doing and why.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#2A2825]">
          {PROCESS_STEPS.map((s) => (
            <StaggerItem key={s.step}>
              <div className="bg-[#121110] p-8 h-full group">
                <span className="block font-mono text-5xl font-bold text-[#2A2825] group-hover:text-[#C1432E]/30 transition-colors duration-300 mb-6">
                  {s.step}
                </span>
                <h4 className="text-xl font-semibold text-[#F6F5F0] mb-3">{s.title}</h4>
                <p className="text-[#9C9890] leading-relaxed text-sm">{s.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  );
}
