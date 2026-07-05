"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Section } from "./Animations";
import { TESTIMONIALS } from "@/data";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const active = TESTIMONIALS[index];

  return (
    <Section className="bg-sand border-y border-line py-24 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Rail */}
          <div className="lg:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted mb-8 inline-flex items-center gap-3">
              <span aria-hidden className="h-px w-8 bg-accent" />
              In their words
            </p>
            <div className="flex lg:flex-col gap-1">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => setIndex(i)}
                  aria-label={`Show testimonial from ${t.name}`}
                  aria-pressed={i === index}
                  className={`flex items-center gap-3 py-2 font-mono text-sm transition-colors ${
                    i === index ? "text-ink" : "text-faint hover:text-muted"
                  }`}
                >
                  <span
                    className={`h-px transition-all duration-300 ${
                      i === index ? "w-8 bg-accent" : "w-4 bg-line-strong"
                    }`}
                  />
                  0{i + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Quote */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.figure
                key={active.id}
                initial={{ opacity: 0, y: reduce ? 0 : 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: reduce ? 0 : -12 }}
                transition={{ duration: reduce ? 0.15 : 0.4, ease: [0.25, 1, 0.5, 1] }}
              >
                <blockquote className="font-display font-medium text-2xl md:text-4xl lg:text-[2.75rem] leading-[1.15] tracking-[-0.01em] text-ink text-balance">
                  <span aria-hidden className="text-accent">“</span>
                  {active.quote}
                  <span aria-hidden className="text-accent">”</span>
                </blockquote>
                <figcaption className="mt-10 flex items-baseline gap-3 text-[0.95rem]">
                  <span className="font-semibold text-ink">{active.name}</span>
                  <span className="text-muted">
                    {active.role}, {active.company}
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Section>
  );
}
