import { PageHeader, Section, FadeIn, ContactForm } from "@/components";
import { TEAM } from "@/data";

export const metadata = {
  title: "Contact Us — RI Software Studio",
  description: "Get in touch with RI Software to discuss your next digital project. Connect directly with the founders.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader 
        title="Let's Talk" 
        subtitle="Ready to start a build? Reach out to the founders directly or fill out our project intake form below."
      />

      <Section className="bg-[#F6F5F0] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Contact Info */}
            <div className="lg:col-span-6">
              <FadeIn>
                <h2 className="font-[family-name:var(--font-instrument-serif)] text-4xl md:text-5xl text-[#1A1918] mb-6">
                  Work directly with the partners.
                </h2>
                <p className="text-[#6B6963] text-lg mb-12 leading-relaxed font-light">
                  Whether you have a fully drafted project specification or a rough napkin sketch, we are ready to discuss the engineering and product trade-offs. We work with teams globally.
                </p>

                <div className="space-y-8">
                  {/* Founder Contacts */}
                  <span className="block font-mono text-xs font-semibold uppercase tracking-[0.15em] text-[#6B6963] border-b border-[#E5E3DC] pb-3 mb-6">
                    Partners
                  </span>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {TEAM.map((member) => (
                      <div key={member.name} className="border border-[#E5E3DC] bg-white rounded-lg p-6 flex flex-col justify-between group hover:border-[#C1432E] transition-colors duration-150">
                        <div>
                          <div className="w-12 h-12 rounded-full border border-[#E5E3DC] bg-[#F6F5F0] flex items-center justify-center font-mono text-sm text-[#1A1918] mb-4">
                            {member.initials}
                          </div>
                          <h4 className="text-base font-semibold text-[#1A1918] mb-1">{member.name}</h4>
                          <p className="text-xs font-mono text-[#C1432E] uppercase tracking-wider mb-4">{member.role}</p>
                        </div>
                        <a 
                          href={`mailto:${member.name === 'Danish Salman' ? 'danishsalman234@gmail.com' : 'flyluckyfire@gmail.com'}`} 
                          className="text-xs text-[#6B6963] hover:text-[#C1432E] transition-colors font-mono"
                        >
                          {member.name === 'Danish Salman' ? 'danishsalman234@gmail.com' : 'flyluckyfire@gmail.com'}
                        </a>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8">
                    <span className="block font-mono text-xs font-semibold uppercase tracking-[0.15em] text-[#6B6963] border-b border-[#E5E3DC] pb-3 mb-6">
                      Direct Inquiries
                    </span>
                    
                    <div className="space-y-4">
                      <div>
                        <span className="block font-mono text-[10px] text-[#9C9890] uppercase tracking-wider mb-1">General email</span>
                        <a href="mailto:danishsalman234@gmail.com" className="text-[#1A1918] hover:text-[#C1432E] transition-colors">danishsalman234@gmail.com</a>
                      </div>
                      <div>
                        <span className="block font-mono text-[10px] text-[#9C9890] uppercase tracking-wider mb-1">Call / message</span>
                        <a href="tel:03200430832" className="text-[#1A1918] hover:text-[#C1432E] transition-colors">0320 0430832</a>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-6 lg:sticky lg:top-24">
              <FadeIn direction="left" delay={0.2}>
                <div className="border border-[#E5E3DC] bg-white rounded-xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
                  <div className="bg-[#F6F5F0] px-8 py-6 border-b border-[#E5E3DC]">
                    <h3 className="font-[family-name:var(--font-instrument-serif)] text-2xl text-[#1A1918]">Send us a message</h3>
                    <p className="text-xs text-[#6B6963] mt-1 font-mono uppercase tracking-wider">Project intake / 24hr response</p>
                  </div>
                  <div className="p-8 bg-white">
                    <ContactForm />
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
