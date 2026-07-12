"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ServiceCard } from "@/types";

interface InteractiveServicesProps {
  services: ServiceCard[];
}

export default function InteractiveServices({ services }: InteractiveServicesProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-start">
      {/* Service Tabs — Left sticky nav */}
      <div className="lg:col-span-4 lg:border-r lg:border-[#E5E3DC]">
        {services.map((service, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-full text-left px-6 py-5 transition-all duration-150 relative border-b border-[#E5E3DC] last:border-b-0 group ${
                isActive
                  ? "bg-[#F6F5F0]"
                  : "bg-transparent hover:bg-[#F6F5F0]/50"
              }`}
            >
              {/* Active indicator line */}
              {isActive && (
                <motion.div
                  layoutId="activeServiceLine"
                  className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#C1432E]"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}

              <div className="relative z-10 flex items-center gap-4">
                <span className={`font-mono text-sm transition-colors duration-150 ${
                  isActive ? "text-[#C1432E]" : "text-[#9C9890]"
                }`}>
                  {service.number}
                </span>
                <h4 className={`text-lg font-medium transition-colors duration-150 ${
                  isActive ? "text-[#1A1918]" : "text-[#6B6963] group-hover:text-[#1A1918]"
                }`}>
                  {service.title}
                </h4>
              </div>
            </button>
          );
        })}
      </div>

      {/* Service Content Details — Right card */}
      <div className="lg:col-span-8 min-h-[400px] lg:min-h-[420px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="h-full px-8 py-8 md:px-12 md:py-10 flex flex-col justify-center"
          >
            <p className="text-lg md:text-xl text-[#1A1918] leading-relaxed mb-8 max-w-xl">
              {services[activeIndex].description}
            </p>

            <ul className="space-y-3 mb-8">
              {services[activeIndex].features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-[#1A1918]">
                  <span className="text-[#C1432E] mt-1.5 flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="text-[#1A1918]">{f}</span>
                </li>
              ))}
            </ul>

            {/* Stack tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {services[activeIndex].stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md border border-[#E5E3DC] bg-[#F6F5F0] font-mono text-xs text-[#6B6963]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-[#C1432E] font-medium hover:gap-3 transition-all duration-150 group"
            >
              See how we approach it
              <svg className="transition-transform group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
