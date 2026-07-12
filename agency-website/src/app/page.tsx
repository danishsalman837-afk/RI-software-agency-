import Link from "next/link";
import { FadeIn, Section, StaggerContainer, StaggerItem, InteractiveServices, LogoWall, Process, Testimonials } from "@/components";
import { SERVICES, PORTFOLIO_ITEMS, STATS, TEAM } from "@/data";

// Simulated Terminal for the Hero section
function TerminalSim() {
  return (
    <div className="border border-[#262626] bg-[#161616] font-mono text-[10px] sm:text-xs text-[#8F8F8F] p-4 sm:p-6 w-full h-[320px] flex flex-col justify-between select-none">
      <div className="flex items-center justify-between border-b border-[#262626] pb-3 mb-4">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 bg-[#262626]" />
          <span className="w-2.5 h-2.5 bg-[#262626]" />
          <span className="w-2.5 h-2.5 bg-[#262626]" />
          <span className="text-[10px] text-[#8F8F8F] ml-2">pipeline_status_daemon.sh</span>
        </div>
        <span className="text-[9px] text-[#06B6D4]">LIVE_SYNC</span>
      </div>

      <div className="flex-grow space-y-2 overflow-hidden">
        <div className="text-white">RI_SOFTWARE_SYSTEMS // INITIALIZE PIPELINE_RUN_4889</div>
        <div>[info] loading config schema from .env.production</div>
        <div className="flex items-center gap-2">
          <span className="text-[#06B6D4]">&gt;</span>
          <span className="text-white">next build --optimize-static-layers</span>
        </div>
        <div className="text-[#06B6D4]">[success] compiled static chunks in 3.42s [LCP optimized]</div>
        <div className="flex items-center gap-2">
          <span className="text-[#06B6D4]">&gt;</span>
          <span className="text-white">expo prebuild --platform ios --no-interactive</span>
        </div>
        <div>[info] generated swift workspace layers successfully</div>
        <div className="text-white">RI_HANDOVER // IP_VALIDATION: OK (100% ownership certified)</div>
      </div>

      <div className="border-t border-[#262626] pt-3 mt-4 flex items-center justify-between text-[9px]">
        <span>SYS_STATUS: COMPILATION_COMPLETE</span>
        <span className="text-white">SECURE_SSL</span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-between pt-28 pb-16 bg-[#0A0A0A] border-b border-[#262626]">
        <div className="max-w-7xl mx-auto px-6 w-full my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Panel */}
            <div className="lg:col-span-7 max-w-2xl">
              <FadeIn delay={0.1}>
                <span className="font-mono text-xs font-semibold text-[#06B6D4] block mb-6">
                  [01 // HERO] RI SOFTWARE STUDIO
                </span>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.05] mb-8">
                  We Engineer High-Performance Digital Products.
                </h1>
              </FadeIn>
              
              <FadeIn delay={0.3}>
                <p className="text-sm md:text-base text-[#8F8F8F] mb-8 max-w-xl leading-relaxed">
                  Web platforms, native client applications, and custom automation layers built for extreme latency targets and full owner IP handover.
                </p>
              </FadeIn>

              {/* Stack Checklist */}
              <FadeIn delay={0.35} className="mb-10">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-[10px] text-[#8F8F8F]">
                  <div className="flex items-center gap-2">
                    <span className="text-[#06B6D4]">•</span> REACT NATIVE / NATIVE CLIENTS
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#06B6D4]">•</span> NEXT.JS CORE / WEB ENGINES
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#06B6D4]">•</span> ENTERPRISE AI PIPELINES
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.4} className="flex items-center gap-6">
                <Link
                  href="#contact"
                  className="px-6 py-3.5 bg-[#06B6D4] text-[#0A0A0A] text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#0891B2] transition-colors"
                >
                  Initialize Project ↗
                </Link>
                <Link
                  href="#work"
                  className="text-xs font-mono font-semibold uppercase tracking-wider text-[#8F8F8F] hover:text-white transition-colors"
                >
                  See Production Archive
                </Link>
              </FadeIn>
            </div>

            {/* Right Panel */}
            <div className="lg:col-span-5 w-full">
              <FadeIn delay={0.5}>
                <TerminalSim />
              </FadeIn>
            </div>
          </div>
        </div>

        {/* Lower Metric Bar */}
        <div className="max-w-7xl mx-auto px-6 w-full mt-12">
          <div className="border-t border-[#262626] pt-8">
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4">
              {STATS.map((stat, index) => (
                <StaggerItem key={index} className="flex flex-col border-l border-[#262626] pl-6 first:border-l-0 first:pl-0">
                  <div className="font-mono text-2xl font-extrabold text-[#06B6D4] mb-1">
                    [{stat.value}]
                  </div>
                  <div className="font-mono text-[9px] text-[#8F8F8F] uppercase tracking-wider">
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
      <Section id="about" className="py-24 md:py-32 bg-[#0A0A0A] border-b border-[#262626]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4">
              <span className="font-mono text-xs font-semibold text-[#06B6D4] block">
                [02 // MANIFEST]
              </span>
            </div>
            <div className="lg:col-span-8">
              <p className="text-xl sm:text-2xl md:text-3xl text-white tracking-tight leading-relaxed max-w-4xl font-bold">
                Most software ships late, over budget, and built by outsourcing middle-men you never meet. We built RI to establish a direct line to the people writing the code, and compile something running to verify every single week.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 4. Core Capabilities (Interactive Grid Blueprint) */}
      <Section id="capabilities" className="py-24 md:py-32 bg-[#0A0A0A] border-b border-[#262626]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="font-mono text-xs font-semibold text-[#06B6D4] block mb-3">
              [03 // CAPABILITIES]
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              Four things, done properly.
            </h2>
            <p className="text-sm text-[#8F8F8F] max-w-xl">
              We keep the studio team focused and developer-direct. Zero middle-management overlays.
            </p>
          </div>

          <InteractiveServices services={SERVICES} />
        </div>
      </Section>

      {/* 5. Shipments / Production Archive (The Case Studies) */}
      <Section id="work" className="py-24 md:py-32 bg-[#0A0A0A] border-b border-[#262626]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="font-mono text-xs font-semibold text-[#06B6D4] block mb-3">
              [04 // ARCHIVE]
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Production Archive
            </h2>
          </div>

          <div className="space-y-16">
            {PORTFOLIO_ITEMS.map((item, index) => (
              <div
                key={item.id}
                className={`flex flex-col lg:flex-row gap-12 items-stretch border border-[#262626] bg-[#161616] p-8 md:p-12 hover:border-[#06B6D4] transition-all duration-150 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Browser Wrapper Mockup */}
                <div className="w-full lg:w-1/2 flex flex-col justify-between">
                  <div className="border border-[#262626] bg-[#0A0A0A] font-mono text-[10px] text-[#8F8F8F] p-4 flex flex-col justify-between h-[240px]">
                    <div className="flex items-center gap-1.5 border-b border-[#262626] pb-2 mb-4">
                      <span className="w-2 h-2 rounded-full bg-[#262626]" />
                      <span className="w-2 h-2 rounded-full bg-[#262626]" />
                      <span className="w-2 h-2 rounded-full bg-[#262626]" />
                      <span className="text-[9px] text-[#8F8F8F] ml-2">production://{item.codeName.toLowerCase()}.local</span>
                    </div>

                    <div className="flex-grow flex flex-col justify-center">
                      <span className="block font-mono text-[9px] text-[#06B6D4] mb-1">// TELEMETRY</span>
                      <span className="block text-white text-lg font-bold tracking-tight">{item.metric}</span>
                      <span className="block text-[#8F8F8F] text-xs mt-1">Operational constraints met successfully.</span>
                    </div>

                    <div className="flex items-center justify-between text-[8px] border-t border-[#262626] pt-2 mt-4">
                      <span>COMPILED: OK</span>
                      <span>SECURE_SHELL</span>
                    </div>
                  </div>
                </div>

                {/* Case Study Details */}
                <div className="w-full lg:w-1/2 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#8F8F8F] mb-6 border-b border-[#262626] pb-3">
                      <span>{item.category}</span>
                      <span>{item.year}</span>
                    </div>

                    <span className="block font-mono text-xs text-[#06B6D4] mb-2">
                      [{item.codeName}]
                    </span>
                    
                    <h3 className="text-2xl font-bold tracking-tight text-white mb-4">
                      {item.title}
                    </h3>
                    
                    <p className="text-sm text-[#8F8F8F] leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-auto pt-6 border-t border-[#262626]">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 border border-[#262626] font-mono text-[10px] text-[#8F8F8F] bg-[#0A0A0A]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 6. System Workflow timeline */}
      <Process />

      {/* 7. The Core Directors (Human Trust Interface) */}
      <Section className="py-24 md:py-32 bg-[#0A0A0A] border-b border-[#262626]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <span className="font-mono text-xs font-semibold text-[#06B6D4] block mb-3">
              [05 // ARCHITECTS]
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              Direct Access to the Engineers
            </h2>
            <p className="text-sm text-[#8F8F8F] max-w-xl mx-auto leading-relaxed">
              No relay hand-off. You engage directly with the partners writing the core layers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#262626] border border-[#262626] max-w-4xl mx-auto">
            {TEAM.map((founder) => (
              <div
                key={founder.name}
                className="bg-[#161616] p-8 text-left flex flex-col justify-between min-h-[260px] group hover:bg-[#1A1A1A] transition-colors"
              >
                <div>
                  {/* Monochrome Headshot Tile */}
                  <div className="w-14 h-14 border border-[#262626] bg-[#0A0A0A] flex items-center justify-center font-mono text-sm font-bold text-white mb-6 group-hover:border-[#06B6D4] transition-colors">
                    {founder.initials}
                  </div>

                  <h4 className="text-lg font-bold text-white mb-1">
                    {founder.name}
                  </h4>
                  
                  <span className="block font-mono text-[9px] uppercase tracking-wider text-[#06B6D4] mb-3">
                    // {founder.specialization.toUpperCase()}
                  </span>
                </div>

                <p className="text-xs text-[#8F8F8F] leading-relaxed">
                  {founder.focus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 8. Client Logs Testimonial Slider */}
      <Testimonials />
    </>
  );
}
