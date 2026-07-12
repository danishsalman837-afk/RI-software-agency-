"use client";

import Link from "react";
import { SOCIAL_LINKS } from "@/data";
import { SocialIcon } from "./Icon";
import ContactForm from "./ContactForm";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative border-t border-[#2A2825] bg-[#121110] text-[#F6F5F0] pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-16 border-b border-[#2A2825]">
          {/* Left Column: CTA Headline & Info */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-[#9C9890] mb-6">
                — GET IN TOUCH
              </p>
              <h2 className="font-[family-name:var(--font-instrument-serif)] text-4xl sm:text-5xl lg:text-6xl text-[#F6F5F0] mb-8 leading-[1.1] max-w-xl">
                Have a project in mind? Let&apos;s talk about building it.
              </h2>
            </div>
            
            <div className="space-y-6 mt-8 lg:mt-0">
              <div>
                <span className="block font-mono text-[10px] uppercase tracking-[0.1em] text-[#9C9890] mb-2">
                  DIRECT LINE
                </span>
                <div className="flex flex-col gap-2">
                  <a href="mailto:danishsalman234@gmail.com" className="text-lg hover:text-[#C1432E] transition-colors">
                    danishsalman234@gmail.com
                  </a>
                  <a href="mailto:flyluckyfire@gmail.com" className="text-lg hover:text-[#C1432E] transition-colors">
                    flyluckyfire@gmail.com
                  </a>
                </div>
              </div>

              <div>
                <span className="block font-mono text-[10px] uppercase tracking-[0.1em] text-[#9C9890] mb-1">
                  AVAILABILITY
                </span>
                <span className="text-[#9C9890] text-sm flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C1432E] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C1432E]"></span>
                  </span>
                  Currently booking for Q3
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-5">
            <ContactForm />
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-bold tracking-[0.05em] uppercase">
              RI Software
            </span>
            <span className="text-[#9C9890] text-xs">|</span>
            <span className="text-[#9C9890] text-xs">
              &copy; {currentYear} RI Software Studio. All rights reserved.
            </span>
          </div>

          {/* Socials & Policies */}
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9C9890] hover:text-[#F6F5F0] transition-colors"
                  aria-label={social.label}
                >
                  <SocialIcon name={social.icon} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
