import { PageHeader, Section, FadeIn, StaggerContainer, StaggerItem } from "@/components";

export const metadata = {
  title: "About Us | RI Software Agency",
  description: "Learn about our 5+ years of experience, our mission, our team, and how we build world-class digital products.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader 
        title="Who We Are" 
        subtitle="We are a team of passionate engineers, designers, and strategists with over 5 years of experience in building exceptional digital products."
      />

      {/* Mission Section */}
      <Section className="bg-[#0d0d1a] border-y border-[#2a2a40] py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <FadeIn direction="right" className="order-2 lg:order-1 relative h-[600px] rounded-[3rem] overflow-hidden gradient-border p-1 shadow-[0_0_50px_rgba(108,92,231,0.15)]">
              <div className="absolute inset-1 bg-[#1a1a2e] rounded-[2.8rem] overflow-hidden">
                <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80')] bg-cover bg-center mix-blend-luminosity hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-[#050510]/50 to-transparent" />
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="glass p-8 rounded-2xl backdrop-blur-xl border border-white/20 shadow-2xl">
                    <p className="text-2xl font-medium text-white mb-3 italic">"Innovation distinguishes between a leader and a follower."</p>
                    <p className="text-[#8888a0] font-bold">— Steve Jobs</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <div className="order-1 lg:order-2">
              <FadeIn>
                <h2 className="text-[#6c5ce7] font-bold tracking-widest uppercase text-sm mb-4">Our Mission</h2>
                <h3 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                  Empowering Businesses Through Technology
                </h3>
                <p className="text-[#8888a0] text-xl mb-8 leading-relaxed font-light">
                  For the past 5 years, RI Software Agency has operated with a simple belief: software should not just solve problems, it should create new possibilities. We bridge the gap between complex technical challenges and elegant, user-centric solutions.
                </p>
                <p className="text-[#8888a0] text-xl leading-relaxed font-light">
                  Led by Founding Partners Danish Salman and Ahmed Saleem, our team brings together diverse expertise from top tech environments to deliver enterprise-grade architecture, stunning interfaces, and scalable infrastructure for startups and global enterprises alike.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </Section>

      {/* Core Values */}
      <Section className="bg-[#050510] py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-24">
            <h2 className="text-[#00cec9] font-bold tracking-widest uppercase text-sm mb-4">Our DNA</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-white">Core Values</h3>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: "🎯",
                title: "Excellence",
                desc: "We don't settle for 'good enough'. We strive for technical perfection and pixel-perfect design in every project.",
                color: "from-[#6c5ce7] to-[#a29bfe]"
              },
              {
                icon: "🤝",
                title: "Partnership",
                desc: "We view our clients as long-term partners. Your success is our success. We communicate transparently and build trust.",
                color: "from-[#00cec9] to-[#55efc4]"
              },
              {
                icon: "🚀",
                title: "Innovation",
                desc: "Technology evolves rapidly. We constantly learn and adapt, bringing the most advanced solutions to the table.",
                color: "from-[#fd79a8] to-[#fab1a0]"
              }
            ].map((value, i) => (
              <StaggerItem key={i}>
                <div className="glass p-10 rounded-3xl h-full relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 shadow-xl">
                  <div className={`absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br ${value.color} opacity-20 blur-[40px] group-hover:scale-150 group-hover:opacity-30 transition-all duration-700`} />
                  <div className="text-5xl mb-8 relative z-10">{value.icon}</div>
                  <h4 className="text-3xl font-bold text-white mb-4 relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-all">{value.title}</h4>
                  <p className="text-[#8888a0] text-lg leading-relaxed relative z-10 font-light">{value.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Section>
    </>
  );
}
