import { PageHeader, Section, FadeIn, ContactForm, Icon } from "@/components";
import { TEAM } from "@/data";
import { getInitials } from "@/lib/utils";

export const metadata = {
  title: "Contact Us | RI Software Agency",
  description: "Get in touch with RI Software Agency to discuss your next digital project. Connect directly with our founders.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader 
        title="Let's Talk" 
        subtitle="Ready to start your next project? We'd love to hear from you. Reach out to our founders directly or fill out the form."
      />

      <Section className="bg-[#050510] py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            {/* Contact Info */}
            <div>
              <FadeIn>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                  Get in touch with our team
                </h2>
                <p className="text-[#8888a0] text-xl mb-16 leading-relaxed font-light">
                  Whether you have a complete project specification or just a rough idea on a napkin, we&apos;re here to help you bring it to life. We work with clients globally.
                </p>

                <div className="space-y-10">
                  {/* Founder Contacts */}
                  <h3 className="text-2xl font-bold text-white border-b border-[#2a2a40] pb-4 mb-6">Direct Contacts</h3>
                  
                  {TEAM.map((member) => (
                    <div key={member.name} className="flex items-center gap-6 p-6 rounded-2xl bg-[#0d0d1a] border border-[#2a2a40] hover:border-[#6c5ce7]/50 transition-colors group">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6c5ce7] to-[#00cec9] flex items-center justify-center text-white text-xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {getInitials(member.name)}
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-xl mb-1">{member.name}</h4>
                        <p className="text-[#8888a0] mb-2">{member.role}</p>
                        <a href={`mailto:${member.name.split(' ')[0].toLowerCase()}@risoftware.agency`} className="text-[#6c5ce7] hover:text-white transition-colors font-medium">
                          {member.name.split(' ')[0].toLowerCase()}@risoftware.agency
                        </a>
                      </div>
                    </div>
                  ))}

                  <div className="pt-8">
                    <h3 className="text-2xl font-bold text-white border-b border-[#2a2a40] pb-4 mb-8">General Inquiries</h3>
                    
                    <div className="flex items-start gap-6 mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-[#00cec9]/10 text-[#00cec9] flex items-center justify-center shrink-0">
                        <Icon name="mail" className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-xl mb-2">Email Us</h4>
                        <p className="text-[#8888a0] text-lg">
                          <a href="mailto:hello@risoftware.agency" className="hover:text-white transition-colors block mb-1">hello@risoftware.agency</a>
                          <a href="mailto:careers@risoftware.agency" className="hover:text-white transition-colors block">careers@risoftware.agency</a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-[#fd79a8]/10 text-[#fd79a8] flex items-center justify-center shrink-0">
                        <Icon name="phone" className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-xl mb-2">Call Us</h4>
                        <p className="text-[#8888a0] text-lg">
                          <a href="tel:+15551234567" className="hover:text-white transition-colors block mb-1">+1 (555) 123-4567</a>
                          <span className="text-sm">Mon-Fri from 9am to 6pm (Global)</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Contact Form */}
            <div className="lg:sticky lg:top-32">
              <FadeIn direction="left" delay={0.2}>
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-br from-[#6c5ce7] to-[#00cec9] rounded-[2.5rem] blur-xl opacity-20" />
                  <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-[#050510] border border-[#2a2a40]">
                    <div className="bg-[#1a1a2e] px-10 py-8 border-b border-[#2a2a40]">
                      <h3 className="text-2xl font-bold text-white">Send us a message</h3>
                      <p className="text-[#8888a0] mt-2">We typically reply within 24 hours.</p>
                    </div>
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
