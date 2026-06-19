import { PageHeader, Section, FadeIn, Icon } from "@/components";
import { SERVICES } from "@/data";

export const metadata = {
  title: "Services | RI Software Agency",
  description: "Comprehensive digital services including Web Development, Mobile Apps, AI Solutions, and UI/UX Design.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader 
        title="Our Services" 
        subtitle="End-to-end digital solutions designed to accelerate your business growth and dominate your market."
      />

      {/* Detailed Services */}
      <Section className="bg-[#050510] pt-0 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {SERVICES.map((service, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 lg:gap-24 items-center`}>
                <div className="w-full md:w-1/2">
                  <FadeIn direction={index % 2 === 1 ? 'left' : 'right'}>
                    <div className="relative aspect-square max-w-md mx-auto">
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-[40px] opacity-20 blur-3xl`} />
                      <div className="relative h-full w-full glass rounded-[40px] border border-white/10 flex items-center justify-center text-[#a29bfe]">
                        <Icon name={service.icon} className="w-28 h-28" />
                      </div>
                    </div>
                  </FadeIn>
                </div>
                
                <div className="w-full md:w-1/2">
                  <FadeIn direction={index % 2 === 1 ? 'right' : 'left'}>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                      {service.title}
                    </h2>
                    <p className="text-[#8888a0] text-lg leading-relaxed mb-8">
                      {service.description} We leverage industry best practices and cutting-edge technologies to ensure your project is built for scale, performance, and security.
                    </p>
                    
                    <ul className="space-y-4 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-[#e8e8f0]">
                          <span className="w-6 h-6 rounded-full bg-[#6c5ce7]/20 flex items-center justify-center text-[#6c5ce7] flex-shrink-0">
                            <Icon name="check" className="w-4 h-4" />
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <button className={`px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r ${service.gradient} hover:shadow-lg transition-all duration-300 hover:scale-105`}>
                      Learn More
                    </button>
                  </FadeIn>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
