"use client";

import Link from "next/link";
import { NAV_LINKS, SOCIAL_LINKS } from "@/data";
import { SocialIcon } from "./Icon";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[#2a2a40] bg-[#050510] pt-16 pb-8 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#6c5ce7] opacity-5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group inline-flex">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6c5ce7] to-[#00cec9] flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                RI
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                RI <span className="text-[#6c5ce7]">Software</span>
              </span>
            </Link>
            <p className="text-[#8888a0] text-sm leading-relaxed mb-6 max-w-xs">
              We build scalable digital solutions that transform businesses and elevate human experiences through cutting-edge technology and design.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1a1a2e] border border-[#2a2a40] flex items-center justify-center text-[#8888a0] hover:text-white hover:border-[#6c5ce7] hover:bg-[#6c5ce7]/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <SocialIcon name={social.icon} className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="pl-0 lg:pl-10">
            <h3 className="text-white font-semibold mb-6 text-lg tracking-wide uppercase">Quick Links</h3>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#8888a0] hover:text-[#00cec9] text-base font-medium transition-colors duration-300 flex items-center gap-3 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00cec9] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg tracking-wide uppercase">Services</h3>
            <ul className="space-y-4">
              {["Web Development", "Mobile Apps", "AI Solutions", "UI/UX Design", "Cloud Architecture"].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-[#8888a0] hover:text-[#fd79a8] text-base font-medium transition-colors duration-300 flex items-center gap-3 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#fd79a8] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg tracking-wide uppercase">Contact</h3>
            <ul className="space-y-6 text-[#8888a0]">
              <li className="flex items-start gap-4">
                <svg className="w-6 h-6 text-[#6c5ce7] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <div className="flex flex-col">
                  <span className="text-white font-medium text-lg">Danish Salman</span>
                  <span className="text-sm tracking-wide uppercase mt-1">Founding Partner</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <svg className="w-6 h-6 text-[#6c5ce7] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <div className="flex flex-col">
                  <span className="text-white font-medium text-lg">Ahmed Saleem</span>
                  <span className="text-sm tracking-wide uppercase mt-1">Founding Partner</span>
                </div>
              </li>
              <li className="flex items-start gap-4 pt-2">
                <svg className="w-6 h-6 text-[#00cec9] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="flex flex-col gap-2">
                  <a href="mailto:danishsalman234@gmail.com" className="hover:text-white transition-colors text-base font-medium">
                    danishsalman234@gmail.com
                  </a>
                  <a href="mailto:flyluckyfire@gmail.com" className="hover:text-white transition-colors text-base font-medium">
                    flyluckyfire@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <svg className="w-6 h-6 text-[#00cec9] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="flex flex-col gap-2">
                  <a href="tel:03200430832" className="hover:text-white transition-colors text-base font-medium">
                    0320 0430832
                  </a>
                  <a href="tel:03254864702" className="hover:text-white transition-colors text-base font-medium">
                    0325 4864702
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#2a2a40] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#8888a0] text-sm text-center md:text-left">
            &copy; {currentYear} RI Software Agency. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-[#8888a0] hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-[#8888a0] hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
