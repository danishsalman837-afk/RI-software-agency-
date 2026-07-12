"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ServiceCard } from "@/types";
import { Icon } from "./Icon";

interface InteractiveServicesProps {
  services: ServiceCard[];
}

export default function InteractiveServices({ services }: InteractiveServicesProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#262626] border border-[#262626]">
      {services.map((service, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="bg-[#161616] p-8 flex flex-col justify-between group transition-colors duration-150 relative min-h-[300px]"
          >
            {/* Top-Right Micro-Icon with Cyan Glow on Hover */}
            <div className="absolute top-6 right-6 text-[#8F8F8F] group-hover:text-[#06B6D4] transition-colors duration-150">
              <Icon name={service.icon} className="w-5 h-5" />
            </div>

            <div>
              {/* Monospace Indicator */}
              <span className="block font-mono text-xs font-semibold text-[#06B6D4] mb-3">
                [{service.number}] // CAPABILITY
              </span>

              {/* Title */}
              <h3 className="text-xl font-bold tracking-tight text-white mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#8F8F8F] leading-relaxed mb-6 max-w-md">
                {service.description}
              </p>
            </div>

            {/* Accordion dropdown detailing deep tech-stack specific features */}
            <div className="border-t border-[#262626] pt-4 mt-auto">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between text-xs font-mono uppercase tracking-wider text-[#8F8F8F] hover:text-white transition-colors duration-150"
              >
                <span>Technical Specifications</span>
                <Icon name={isOpen ? "minus" : "plus"} className="w-3.5 h-3.5" />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="py-4 space-y-4">
                      {/* Features Checklist */}
                      <ul className="space-y-2">
                        {service.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-2 text-xs text-[#8F8F8F]">
                            <span className="text-[#06B6D4] mt-0.5">•</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {service.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 border border-[#262626] bg-[#0A0A0A] font-mono text-[10px] text-[#8F8F8F]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        );
      })}
    </div>
  );
}
