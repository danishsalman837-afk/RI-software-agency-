import Link from "next/link";
import { FadeIn, Section, StaggerContainer, StaggerItem, InteractiveServices, LogoWall, Process, Testimonials } from "@/components";
import { SERVICES, PORTFOLIO_ITEMS, STATS, WHY_CHOOSE_US, TEAM } from "@/data";

export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 bg-[#F6F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            <div className="lg:col-span-8 max-w-3xl">
              <FadeIn delay={0.1}>
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-[#6B6963] block mb-8">
                  — RI SOFTWARE — SOFTWARE STUDIO, EST. 2019
                </span>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <h1 className="font-[family-name:var(--font-instrument-serif)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#1A1918] tracking-tight leading-[1.05] mb-8">
                  We build the software your business <span className="italic text-[#C1432E]">actually</span> runs on.
                </h1>
              </FadeIn>
              
              <FadeIn delay={0.3}>
                <p className="text-lg md:text-xl text-[#6B6963] mb-10 max-w-2xl leading-relaxed">
                  Web platforms, mobile apps, and the automation behind them — designed and shipped by a dedicated studio that stays until it works.
                </p>
              </FadeIn>
              
              <FadeIn delay={0.4} className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <Link
                  href="#contact"
                  className="px-6 py-3.5 bg-[#C1432E] text-white text-sm font-medium rounded-lg hover:bg-[#A93826] transition-colors flex items-center gap-2 group"
                >
                  Start a build →
                </Link>
                <Link
                  href="#work"
                  className="text-sm font-medium text-[#1A1918] hover:text-[#C1432E] transition-colors flex items-center gap-1 group"
                >
                  See the work <span className="inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* Bottom Proof Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12">
          <div className="border-t border-[#E5E3DC] pt-8">
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
              {STATS.map((stat, index) => (
                <StaggerItem key={index} className="stat-divider pr-4">
                  <div className="font-[family-name:var(--font-instrument-serif)] text-3xl md:text-4xl text-[#1A1918] mb-1">
                    {stat.value}
                  </div>
                  <div className="font-mono text-[10px] text-[#6B6963] uppercase tracking-wider">
                    {stat.label}
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* 2. Industry Credibility Ticker */}
      <LogoWall />

      {/* 3. Manifest / Positioning Section */}
      <Section id="about" className="py-24 md:py-32 bg-[#F6F5F0] border-b border-[#E5E3DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-[#6B6963] block">
                — WHY WE EXIST
              </span>
            </div>
            <div className="lg:col-span-8">
              <p className="font-[family-name:var(--font-instrument-serif)] text-3xl sm:text-4xl md:text-5xl text-[#1A1918] leading-tight font-medium max-w-4xl">
                Most software ships late, over budget, and built by people you never meet. We started RI to prove it doesn&apos;t have to work that way — a small team, a direct line to the people writing the code, and something running to click through every single week.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 4. Interactive Services Engine */}
      <Section id="services" className="py-24 md:py-32 bg-[#F6F5F0] border-b border-[#E5E3DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-[family-name:var(--font-instrument-serif)] text-4xl md:text-5xl text-[#1A1918] mb-4">
              Four things, done properly.
            </h2>
            <p className="text-base text-[#6B6963] max-w-xl">
              We keep the studio small and the scope focused, so every engagement gets the attention it needs.
            </p>
          </div>

          <div className="border border-[#E5E3DC] bg-[#FFFFFF] rounded-xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
            <InteractiveServices services={SERVICES} />
          </div>
        </div>
      </Section>

      {/* 5. Selected Portfolio / Work Grid */}
      <Section id="work" className="py-24 md:py-32 bg-[#F6F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-[#6B6963] block mb-3">
                — SELECTED WORK
              </span>
              <h2 className="font-[family-name:var(--font-instrument-serif)] text-4xl md:text-5xl text-[#1A1918]">
                Recent Builds
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PORTFOLIO_ITEMS.map((item, index) => (
              <div
                key={item.id}
                className="group border border-[#E5E3DC] bg-white rounded-lg p-6 flex flex-col justify-between hover:border-[#C1432E] transition-colors duration-150 relative overflow-hidden min-h-[320px]"
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
                  
                  <p className="text-[#6B6963] text-sm leading-relaxed mb-6 max-w-xs">
                    {item.description}
                  </p>
                </div>

                <div className="relative z-10 flex flex-wrap gap-1.5 mt-auto">
                  {item.tags.slice(0, 3).map((tag) => (
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
          </div>
        </div>
      </Section>

      {/* 6. Dark Mode Process Section */}
      <Process />

      {/* 7. Values & Difference Grid */}
      <Section className="py-24 md:py-32 bg-[#F6F5F0] border-b border-[#E5E3DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-[#6B6963] block mb-3">
              — THE DIFFERENCE
            </span>
            <h2 className="font-[family-name:var(--font-instrument-serif)] text-4xl md:text-5xl text-[#1A1918]">
              Why teams stay with us.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E3DC] border border-[#E5E3DC] rounded-xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
            {WHY_CHOOSE_US.map((item, index) => (
              <div key={index} className="bg-white p-8 group">
                <span className="block font-mono text-xs text-[#9C9890] group-hover:text-[#C1432E] transition-colors duration-150 mb-4">
                  {`// 0${index + 1}`}
                </span>
                <h4 className="text-lg font-medium text-[#1A1918] mb-2">{item.title}</h4>
                <p className="text-[#6B6963] text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 8. Leadership & Direct Access */}
      <Section className="py-24 md:py-32 bg-[#F6F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="font-[family-name:var(--font-instrument-serif)] text-4xl md:text-5xl text-[#1A1918] mb-3">
              The two people who actually build it.
            </h2>
            <p className="text-base text-[#6B6963] max-w-xl mx-auto">
              No hand-off to a junior team after the pitch. You work directly with both founders, start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {TEAM.map((founder) => (
              <div
                key={founder.name}
                className="border border-[#E5E3DC] bg-white rounded-lg p-8 text-center flex flex-col items-center hover:border-[#C1432E] transition-colors duration-150"
              >
                <div className="w-20 h-20 rounded-full border border-[#E5E3DC] bg-[#F6F5F0] flex items-center justify-center mb-6">
                  <span className="font-mono text-lg font-semibold text-[#1A1918]">
                    {founder.initials}
                  </span>
                </div>
                <h4 className="text-xl font-medium text-[#1A1918] mb-1">{founder.name}</h4>
                <p className="font-mono text-[10px] uppercase tracking-wider text-[#C1432E] mb-4">
                  {founder.role}
                </p>
                <p className="text-sm text-[#6B6963] leading-relaxed max-w-xs">
                  {founder.focus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 9. High-Impact Editorial Testimonial */}
      <Testimonials />
    </>
  );
}
