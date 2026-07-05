import { Section, FadeIn, StaggerContainer, StaggerItem } from "./Animations";
import SectionHeading from "./SectionHeading";
import { PROCESS_STEPS } from "@/data";

export default function Process() {
  return (
    <Section className="on-dark bg-noir text-paper py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeIn className="max-w-3xl mb-16 md:mb-24">
          <SectionHeading
            eyebrow="How we work"
            tone="dark"
            title="A process you can actually watch."
            subtitle="Four phases, weekly demos, and no black boxes. You always know what we're doing and why."
          />
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((s, i) => {
            // Mobile: top border on every item except the first
            const mobileBorder = i !== 0 ? "border-t" : "";
            // md 2-col: left border on odd items (col 2); top border on items
            // starting a new row (index 2) instead of removing it
            const mdBorder =
              i % 2 === 1
                ? "md:border-l md:border-t-0 md:pl-8"
                : i > 0
                  ? "md:border-t"
                  : "md:border-t-0";
            // lg 4-col: all items after the first get a left border, no top
            const lgBorder =
              i !== 0
                ? "lg:border-l lg:border-t-0 lg:pl-8"
                : "";

            return (
              <StaggerItem
                key={s.step}
                className={`group pt-8 pb-10 md:pr-8 border-white/12 ${mobileBorder} ${mdBorder} ${lgBorder}`}
              >
                <div className="border-t border-accent w-10 mb-8 transition-all duration-500 group-hover:w-20" />
                <span className="font-mono text-sm text-paper/40 tnum">{s.step}</span>
                <h3 className="font-display text-2xl md:text-3xl tracking-[-0.02em] text-paper mt-3 mb-4">
                  {s.title}
                </h3>
                <p className="text-paper/60 leading-relaxed text-[0.95rem]">
                  {s.description}
                </p>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </Section>
  );
}
