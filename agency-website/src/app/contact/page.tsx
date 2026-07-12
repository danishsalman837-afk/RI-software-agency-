import { PageHeader, Section, FadeIn, ContactForm } from "@/components";
import { TEAM } from "@/data";

export const metadata = {
  title: "Initialize Project — RI Software Studio",
  description: "Connect directly with our engineering partners to discuss your system blueprints.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader 
        title="Initialize Engagement" 
        subtitle="Submit your requirements to open a developer-direct briefing channel."
      />

      <Section className="bg-[#0A0A0A] py-16 md:py-24 border-t border-[#262626]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Contact Info */}
            <div className="lg:col-span-6">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
                  Direct Line to the Engineers.
                </h2>
                <p className="text-[#8F8F8F] text-sm mb-12 leading-relaxed max-w-lg">
                  Every briefing goes directly to Dan and Ahmed. We review system specs, technology stacks, and performance constraints. No sales representatives, no automated routing.
                </p>

                <div className="space-y-8">
                  <span className="block font-mono text-xs font-semibold text-[#06B6D4] border-b border-[#262626] pb-3 mb-6">
                    // CORE PARTNERS
                  </span>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {TEAM.map((founder) => (
                      <div key={founder.name} className="border border-[#262626] bg-[#161616] p-6 flex flex-col justify-between group hover:border-[#06B6D4] transition-colors duration-150 min-h-[160px]">
                        <div>
                          <div className="w-10 h-10 border border-[#262626] bg-[#0A0A0A] flex items-center justify-center font-mono text-xs font-bold text-white mb-3">
                            {founder.initials}
                          </div>
                          <h4 className="text-sm font-bold text-white mb-1">{founder.name}</h4>
                          <span className="block font-mono text-[9px] uppercase tracking-wider text-[#06B6D4] mb-4">
                            {founder.role}
                          </span>
                        </div>
                        <a 
                          href={`mailto:${founder.name === 'Danish Salman' ? 'danishsalman234@gmail.com' : 'flyluckyfire@gmail.com'}`} 
                          className="text-[10px] text-[#8F8F8F] hover:text-white transition-colors font-mono"
                        >
                          {founder.name === 'Danish Salman' ? 'danishsalman' : 'flyluckyfire'}@studio
                        </a>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8">
                    <span className="block font-mono text-xs font-semibold text-[#06B6D4] border-b border-[#262626] pb-3 mb-6">
                      // DIRECT CHANNELS
                    </span>
                    
                    <div className="space-y-4 font-mono text-xs text-[#8F8F8F]">
                      <div>
                        <span className="block text-[9px] text-[#8F8F8F] uppercase tracking-wider mb-1">GENERAL INTAKE</span>
                        <a href="mailto:danishsalman234@gmail.com" className="text-white hover:text-[#06B6D4] transition-colors">danishsalman234@gmail.com</a>
                      </div>
                      <div>
                        <span className="block text-[9px] text-[#8F8F8F] uppercase tracking-wider mb-1">TELEPHONY LINK</span>
                        <a href="tel:03200430832" className="text-white hover:text-[#06B6D4] transition-colors">0320 0430832</a>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-6 lg:sticky lg:top-24">
              <FadeIn direction="left" delay={0.2}>
                <div className="border border-[#262626] bg-[#161616] p-8 md:p-10">
                  <div className="mb-8 border-b border-[#262626] pb-4">
                    <h3 className="text-xl font-bold tracking-tight text-white mb-2">Initiate System Briefing</h3>
                    <p className="text-[10px] text-[#8F8F8F] font-mono uppercase tracking-wider">// RESPONSE WINDOW: &lt; 24 HOURS</p>
                  </div>
                  <ContactForm />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
