import Link from "next/link";
import { FadeIn, Section, StaggerContainer, StaggerItem, InteractiveServices, LogoWall, Process, Testimonials, IconTile, Icon } from "@/components";
import { SERVICES, PORTFOLIO_ITEMS, STATS, WHY_CHOOSE_US, TEAM } from "@/data";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 md:pt-40 pb-24 overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#6c5ce7] opacity-10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#00cec9] opacity-5 blur-[180px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="max-w-3xl">
              <FadeIn delay={0.1}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#6c5ce7]/30 bg-[#6c5ce7]/10 text-sm font-medium text-[#a29bfe] mb-10 shadow-[0_0_20px_rgba(108,92,231,0.2)]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a29bfe] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#a29bfe]"></span>
                  </span>
                  Premium Software Agency
                </div>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] mb-8">
                  We Build <span className="gradient-text">Scalable</span> <br className="hidden md:block" />
                  Digital Solutions
                </h1>
              </FadeIn>
              
              <FadeIn delay={0.3}>
                <p className="text-xl md:text-2xl text-[#8888a0] mb-12 max-w-xl leading-relaxed font-light">
                  Transform your business with cutting-edge software. We specialize in web, mobile, and AI solutions that drive real growth and user engagement.
                </p>
              </FadeIn>
              
              <FadeIn delay={0.4} className="flex flex-col sm:flex-row gap-6">
                <Link
                  href="/contact"
                  className="px-8 py-5 bg-gradient-to-r from-[#6c5ce7] to-[#00cec9] text-white text-lg font-semibold rounded-2xl hover:shadow-[0_0_40px_rgba(108,92,231,0.4)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  Start a Project
                  <svg className="group-hover:translate-x-1 transition-transform" width="24" height="24" viewBox="0 0 16 16" fill="none">
                    <path d="M1 8h14M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link
                  href="/portfolio"
                  className="px-8 py-5 bg-[#1a1a2e] border border-[#2a2a40] text-white text-lg font-semibold rounded-2xl hover:bg-[#2a2a40] hover:border-[#6c5ce7]/50 transition-all duration-300 flex items-center justify-center"
                >
                  View Our Work
                </Link>
              </FadeIn>
            </div>
            
            {/* Abstract Hero Graphic */}
            <FadeIn delay={0.5} direction="left" className="hidden lg:block relative h-[600px] w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6c5ce7]/15 to-[#00cec9]/10 rounded-[3rem] border border-white/10 overflow-hidden glass shadow-2xl">
                {/* Rotating conic glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] animate-[spin_30s_linear_infinite]">
                  <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(108,92,231,0.35)_0deg,transparent_90deg,transparent_270deg,rgba(0,206,201,0.30)_360deg)]" />
                </div>
                {/* Center orb + RI badge */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 rounded-full bg-gradient-to-br from-[#6c5ce7] to-[#00cec9] blur-3xl opacity-40" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-3xl bg-gradient-to-br from-[#6c5ce7] to-[#00cec9] flex items-center justify-center text-white text-4xl font-extrabold shadow-2xl border border-white/20">
                  RI
                </div>
                {/* Floating tech cards */}
                <div className="absolute top-[14%] left-[12%] w-20 h-20 rounded-2xl glass border border-white/15 flex items-center justify-center text-[#a29bfe] shadow-xl animate-[bounce_6s_ease-in-out_infinite]">
                  <Icon name="code" className="w-9 h-9" />
                </div>
                <div className="absolute bottom-[16%] right-[13%] w-20 h-20 rounded-2xl glass border border-white/15 flex items-center justify-center text-[#00cec9] shadow-xl animate-[bounce_7s_ease-in-out_infinite]">
                  <Icon name="zap" className="w-9 h-9" />
                </div>
                <div className="absolute top-[20%] right-[15%] w-16 h-16 rounded-2xl glass border border-white/15 flex items-center justify-center text-[#fd79a8] shadow-xl animate-[bounce_8s_ease-in-out_infinite]">
                  <Icon name="rocket" className="w-8 h-8" />
                </div>
                <div className="absolute bottom-[24%] left-[15%] w-16 h-16 rounded-2xl glass border border-white/15 flex items-center justify-center text-[#fdcb6e] shadow-xl animate-[bounce_9s_ease-in-out_infinite]">
                  <Icon name="palette" className="w-8 h-8" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Section className="py-20 md:py-24 border-y border-[#2a2a40] bg-[#0d0d1a]/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 divide-x-0 md:divide-x divide-[#2a2a40]">
            {STATS.map((stat, index) => (
              <StaggerItem key={index} className="text-center px-4">
                <div className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">{stat.value}</div>
                <div className="text-[#8888a0] text-lg font-medium tracking-wide uppercase">{stat.label}</div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Section>

      <LogoWall />

      {/* Interactive Services Section */}
      <Section id="services" className="bg-[#050510] py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-20">
            <h2 className="text-[#6c5ce7] font-bold tracking-[0.2em] uppercase text-sm mb-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-white mb-6">Services We Offer</h3>
            <p className="text-[#8888a0] max-w-3xl mx-auto text-xl font-light leading-relaxed">
              We provide end-to-end digital solutions tailored to your unique business needs, ensuring high performance and exceptional user experiences.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} fullWidth>
            <InteractiveServices services={SERVICES} />
          </FadeIn>
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section className="bg-[#0d0d1a] border-y border-[#2a2a40] py-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <FadeIn>
                <h2 className="text-[#00cec9] font-bold tracking-widest uppercase text-sm mb-6">The RI Software Advantage</h2>
                <h3 className="text-5xl md:text-6xl font-extrabold text-white mb-10 leading-[1.1]">
                  Over 5 Years of Successful Delivery
                </h3>
                <p className="text-[#8888a0] text-xl mb-14 font-light leading-relaxed">
                  We don&apos;t just write code; we build digital businesses. Our approach combines technical excellence with strategic business thinking.
                </p>
              </FadeIn>

              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {WHY_CHOOSE_US.slice(0, 4).map((item, index) => (
                  <StaggerItem key={index} className="flex gap-5 group">
                    <IconTile name={item.icon} className="group-hover:scale-110 group-hover:border-[#6c5ce7] shadow-lg" />
                    <div>
                      <h4 className="text-white text-lg font-bold mb-3 group-hover:text-[#6c5ce7] transition-colors">{item.title}</h4>
                      <p className="text-[#8888a0] leading-relaxed">{item.description}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
            
            <FadeIn direction="left" className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#6c5ce7] to-[#00cec9] blur-[100px] opacity-20 rounded-full pointer-events-none" />
              <div className="gradient-border rounded-3xl p-1 bg-[#050510] relative z-10 shadow-2xl hover:shadow-[0_0_50px_rgba(108,92,231,0.2)] transition-shadow duration-500">
                <div className="bg-[#050510] rounded-[22px] p-10 relative overflow-hidden">
                  {/* Mock Code Block */}
                  <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-6">
                    <div className="w-3.5 h-3.5 rounded-full bg-red-500/80" />
                    <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/80" />
                    <div className="w-3.5 h-3.5 rounded-full bg-green-500/80" />
                    <span className="ml-4 text-xs font-mono text-[#8888a0]">ri-strategy.ts</span>
                  </div>
                  <pre className="text-sm md:text-base font-mono text-[#a29bfe] overflow-x-auto leading-loose">
                    <code>
{`// The RI Software approach
const buildSuccess = async (client: Client) => {
  const { vision, goals } = client;
  
  const strategy = await analyze(vision);
  const architecture = design(strategy, {
    scalable: true,
    secure: true,
    performant: true
  });
  
  const product = await develop(architecture);
  
  return {
    growth: 'exponential',
    satisfaction: '100%',
    product
  };
};`}
                    </code>
                  </pre>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      <Process />

      {/* Team / Leadership Section */}
      <Section className="bg-[#050510] py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-24">
            <h2 className="text-[#fd79a8] font-bold tracking-widest uppercase text-sm mb-6">Leadership</h2>
            <h3 className="text-5xl md:text-6xl font-bold text-white mb-8">Meet The Founders</h3>
            <p className="text-[#8888a0] max-w-2xl mx-auto text-xl font-light">
              Driven by a passion for technology and design, our leadership ensures every project meets our rigorous standards of excellence.
            </p>
          </FadeIn>

          <div className="flex flex-col md:flex-row justify-center gap-20 md:gap-32">
            {TEAM.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.2} direction="up" className="w-full max-w-sm text-center">
                <div className="relative group mx-auto w-56 h-56 md:w-72 md:h-72 mb-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6c5ce7] to-[#00cec9] rounded-full blur-[40px] opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700" />
                  <div className="relative w-full h-full rounded-full border border-white/10 bg-gradient-to-br from-[#1a1a2e] to-[#0d0d1a] flex items-center justify-center overflow-hidden glass z-10 shadow-2xl">
                    <span className="text-6xl md:text-7xl font-extrabold bg-gradient-to-br from-[#a29bfe] to-[#00cec9] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">
                      {member.name.split(' ').map((n) => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <h4 className="text-3xl font-bold text-white mb-4">{member.name}</h4>
                <p className="text-[#6c5ce7] font-semibold tracking-widest uppercase text-sm">{member.role}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* Portfolio Preview Section */}
      <Section className="bg-[#0d0d1a] py-32 border-t border-[#2a2a40]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <FadeIn>
              <h2 className="text-[#00cec9] font-bold tracking-widest uppercase text-sm mb-4">Our Work</h2>
              <h3 className="text-4xl md:text-6xl font-bold text-white max-w-2xl">
                Featured Projects
              </h3>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-white/10 text-white hover:bg-white/5 hover:border-white/20 font-medium transition-all duration-300 group"
              >
                View full portfolio
                <svg className="group-hover:translate-x-1 transition-transform text-[#00cec9]" width="20" height="20" viewBox="0 0 16 16" fill="none">
                  <path d="M1 8h14M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PORTFOLIO_ITEMS.slice(0, 3).map((item, index) => (
              <StaggerItem key={item.id} className={index === 1 ? "md:translate-y-8" : ""}>
                <Link href="/portfolio" className="group block h-full">
                  <div className="relative rounded-[2rem] overflow-hidden mb-8 aspect-[4/5] bg-[#1a1a2e] shadow-2xl transition-transform duration-500 group-hover:-translate-y-4">
                    {/* Fallback pattern */}
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#6c5ce7_1px,transparent_1px)] [background-size:20px_20px]" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-700`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`absolute w-40 h-40 rounded-full bg-gradient-to-br ${item.gradient} blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-500`} />
                      <div className="group-hover:scale-110 transition-transform duration-700 relative z-10 w-full h-full flex items-center justify-center p-12">
                        {item.id === 1 ? (
                          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl opacity-90" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="5" y="10" width="90" height="80" rx="4" fill="#0d0d1a" stroke="white" strokeWidth="2" strokeOpacity="0.2"/>
                            <rect x="10" y="15" width="20" height="70" rx="2" fill="white" fillOpacity="0.05"/>
                            <rect x="35" y="15" width="55" height="15" rx="2" fill="white" fillOpacity="0.1"/>
                            <path d="M35 85 L35 40 L50 60 L65 30 L85 70 L90 70" stroke="#a29bfe" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            <circle cx="65" cy="30" r="3" fill="#6c5ce7"/>
                          </svg>
                        ) : item.id === 2 ? (
                          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl opacity-90" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="25" y="5" width="50" height="90" rx="8" fill="#0d0d1a" stroke="white" strokeWidth="2" strokeOpacity="0.2"/>
                            <rect x="35" y="10" width="30" height="4" rx="2" fill="white" fillOpacity="0.1"/>
                            <circle cx="50" cy="40" r="14" stroke="#00cec9" strokeWidth="3"/>
                            <path d="M50 33 V47 M43 40 H57" stroke="#00cec9" strokeWidth="3" strokeLinecap="round"/>
                            <rect x="35" y="65" width="30" height="6" rx="2" fill="white" fillOpacity="0.1"/>
                            <rect x="35" y="77" width="30" height="6" rx="2" fill="white" fillOpacity="0.1"/>
                          </svg>
                        ) : (
                          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl opacity-90" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="50" r="30" stroke="#fd79a8" strokeWidth="2" strokeDasharray="6 6" className="animate-[spin_10s_linear_infinite]"/>
                            <circle cx="50" cy="50" r="20" fill="white" fillOpacity="0.05" stroke="#fab1a0" strokeWidth="2"/>
                            <path d="M50 38 L62 55 L38 55 Z" fill="#fd79a8"/>
                          </svg>
                        )}
                      </div>
                    </div>
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#050510]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm flex items-center justify-center">
                      <span className="px-8 py-4 rounded-full border border-white/20 text-white font-medium tracking-wider uppercase text-sm shadow-xl">
                        Explore Case Study
                      </span>
                    </div>
                  </div>
                  <div className="px-2">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${item.gradient} text-white shadow-lg`}>
                        {item.category}
                      </span>
                    </div>
                    <h4 className="text-3xl font-bold text-white mb-3 group-hover:text-[#6c5ce7] transition-colors">{item.title}</h4>
                    <p className="text-[#8888a0] text-lg line-clamp-2 leading-relaxed">{item.description}</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#6c5ce7] to-[#00cec9] text-white font-semibold hover:shadow-[0_0_40px_rgba(108,92,231,0.4)] hover:-translate-y-1 transition-all duration-300"
            >
              Start your project
              <Icon name="arrow-right" className="w-5 h-5" />
            </Link>
          </FadeIn>
        </div>
      </Section>

      <Testimonials />

      {/* CTA Section */}
      <Section className="relative overflow-hidden py-40">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#6c5ce7] via-[#a29bfe] to-[#00cec9] opacity-90" />
        {/* Noise overlay */}
        <div className="absolute inset-0 noise-overlay opacity-30" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight drop-shadow-xl">Ready to Build Something Amazing?</h2>
            <p className="text-2xl md:text-3xl text-white/90 mb-12 font-light max-w-3xl mx-auto drop-shadow-md">
              Let&apos;s turn your vision into a reality. Our team of experts is ready to help you scale your business to new heights.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-6 bg-white text-[#050510] font-bold rounded-2xl text-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(255,255,255,0.3)] hover:scale-105 transition-all duration-300"
            >
              Get a Free Consultation
            </Link>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
