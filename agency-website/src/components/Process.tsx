import { Section, FadeIn, StaggerContainer, StaggerItem } from "./Animations";
import { PROCESS_STEPS } from "@/data";

export default function Process() {
  return (
    <Section id="process" className="py-24 md:py-32 border-b border-[#262626] bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="mb-16">
          <span className="font-mono text-xs font-semibold text-[#06B6D4] block mb-3">
            [04] // SYSTEM WORKFLOW
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            System Workflow Timeline
          </h2>
          <p className="text-sm text-[#8F8F8F] max-w-xl leading-relaxed">
            A containerized sprint execution pipeline showing the exact milestones of each client engagement.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#262626] border border-[#262626]">
          {PROCESS_STEPS.map((step) => (
            <StaggerItem key={step.step} className="h-full">
              <div className="bg-[#161616] p-8 h-full flex flex-col justify-between min-h-[220px] group hover:bg-[#1A1A1A] transition-colors duration-150">
                <div>
                  <span className="block font-mono text-xs font-semibold text-[#06B6D4] mb-4">
                    PHASE_{step.step}
                  </span>
                  <h4 className="text-base font-bold text-white mb-3">
                    [{step.title}]
                  </h4>
                  <p className="text-xs text-[#8F8F8F] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  );
}
