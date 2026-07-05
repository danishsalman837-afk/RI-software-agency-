"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ServiceCard } from "@/types";
import { Icon } from "./Icon";

interface InteractiveServicesProps {
  services: ServiceCard[];
}

export default function InteractiveServices({ services }: InteractiveServicesProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduce = useReducedMotion();
  const active = services[activeIndex];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
      {/* Index */}
      <div className="lg:col-span-5">
        <ul>
          {services.map((service, index) => {
            const isActive = index === activeIndex;
            return (
              <li key={service.title} className="border-t border-line last:border-b">
                <button
                  onClick={() => setActiveIndex(index)}
                  className="group w-full text-left flex items-baseline gap-5 py-6 transition-colors"
                  aria-pressed={isActive}
                >
                  <span
                    className={`font-mono text-sm pt-1 transition-colors ${
                      isActive ? "text-accent" : "text-faint group-hover:text-muted"
                    }`}
                  >
                    0{index + 1}
                  </span>
                  <span
                    className={`font-display text-3xl md:text-4xl tracking-[-0.02em] transition-colors ${
                      isActive ? "text-ink" : "text-ink/35 group-hover:text-ink/70"
                    }`}
                  >
                    {service.title}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Detail */}
      <div className="lg:col-span-7 lg:sticky lg:top-28">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: reduce ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduce ? 0 : -12 }}
            transition={{ duration: reduce ? 0.15 : 0.4, ease: [0.25, 1, 0.5, 1] }}
            className="rounded-md border border-line bg-card p-8 md:p-12"
          >
            <div className="flex items-center justify-between mb-8">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                Service / 0{activeIndex + 1}
              </span>
              <span className="text-accent">
                <Icon name={active.icon} className="w-6 h-6" />
              </span>
            </div>

            <h3 className="font-display font-medium text-4xl md:text-5xl tracking-[-0.02em] text-ink mb-6 leading-[1.02]">
              {active.title}
            </h3>
            <p className="text-lg text-muted leading-relaxed mb-10 max-w-xl text-pretty">
              {active.description}
            </p>

            <ul className="space-y-0 mb-10">
              {active.features.map((f) => (
                <li
                  key={f}
                  className="flex items-baseline gap-4 py-3 border-t border-line text-ink"
                >
                  <span aria-hidden className="font-mono text-xs text-accent">
                    +
                  </span>
                  <span className="text-[0.98rem]">{f}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/services"
              className="group inline-flex items-center gap-2 font-medium text-ink"
            >
              <span className="link-underline">See how we approach it</span>
              <svg className="text-accent transition-transform group-hover:translate-x-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
