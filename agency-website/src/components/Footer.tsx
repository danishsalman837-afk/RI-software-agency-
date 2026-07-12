"use client";

import { SOCIAL_LINKS } from "@/data";
import { SocialIcon } from "./Icon";
import ContactForm from "./ContactForm";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-[#262626] bg-[#0A0A0A] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-16 border-b border-[#262626] items-start">
          {/* Left Column: CTA Headline & Info */}
          <div className="lg:col-span-7 flex flex-col justify-between min-h-[400px]">
            <div>
              <span className="font-mono text-xs font-semibold text-[#06B6D4] block mb-6">
                [07] // CLIENT PORTAL
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8 leading-[1.05] max-w-xl">
                Ready to initialize? Let&apos;s talk about building it.
              </h2>
            </div>
            
            <div className="space-y-6 mt-8 lg:mt-0 font-mono">
              <div>
                <span className="block text-[10px] uppercase tracking-[0.1em] text-[#8F8F8F] mb-2">
                  // TELEMETRY CONTACTS
                </span>
                <div className="flex flex-col gap-2">
                  <a href="mailto:danishsalman234@gmail.com" className="text-sm text-white hover:text-[#06B6D4] transition-colors">
                    danishsalman234@gmail.com
                  </a>
                  <a href="mailto:flyluckyfire@gmail.com" className="text-sm text-white hover:text-[#06B6D4] transition-colors">
                    flyluckyfire@gmail.com
                  </a>
                </div>
              </div>

              <div>
                <span className="block text-[10px] uppercase tracking-[0.1em] text-[#8F8F8F] mb-1">
                  // STUDIO AVAILABILITY
                </span>
                <span className="text-white text-xs flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-[#06B6D4]" />
                  CURRENTLY BOOKING FOR Q3
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form Intake portal inside a deep graphite card */}
          <div className="lg:col-span-5 bg-[#161616] border border-[#262626] p-8 md:p-10 relative">
            <ContactForm />
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs text-[#8F8F8F]">
          <div className="flex items-center gap-4">
            <span className="font-bold text-white uppercase tracking-wider">RI SOFTWARE</span>
            <span>//</span>
            <span>&copy; {currentYear} STUDIO. ALL RIGHTS RESERVED.</span>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <SocialIcon name={social.icon} className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
