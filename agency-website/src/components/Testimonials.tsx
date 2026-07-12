"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "@/data";
import { Section, FadeIn } from "./Animations";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const active = TESTIMONIALS[currentIndex];

  return (
    <Section id="testimonials" className="py-24 md:py-32 border-b border-[#262626] bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="mb-16">
          <span className="font-mono text-xs font-semibold text-[#06B6D4] block mb-3">
            [06] // CLIENT LOGS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Production Feedback Loop
          </h2>
          <p className="text-sm text-[#8F8F8F] max-w-xl leading-relaxed">
            Raw, unembellished project impact validation and telemetry reports from technical leadership.
          </p>
        </FadeIn>

        <div className="border border-[#262626] bg-[#161616] p-8 md:p-12 relative overflow-hidden flex flex-col justify-between min-h-[380px]">
          {/* Background Grid Lines watermark */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start h-full"
            >
              {/* Left Column: Big Block Typography Quote */}
              <div className="lg:col-span-8">
                <blockquote className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug mb-8">
                  &ldquo;{active.quote}&rdquo;
                </blockquote>
                
                <div className="font-mono text-xs text-[#8F8F8F]">
                  <span className="text-white font-semibold">{active.name}</span>
                  <span className="mx-2">//</span>
                  <span>{active.role}, {active.company}</span>
                </div>
              </div>

              {/* Right Column: High-Visibility Block Metrics */}
              <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-[#262626] pt-6 lg:pt-0 lg:pl-8 flex flex-col justify-center">
                <div className="font-mono text-4xl sm:text-5xl font-extrabold text-[#06B6D4] tracking-tighter mb-2">
                  {active.metric}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-[#8F8F8F] mb-1">
                  IMPACT TELEMETRY
                </div>
                <p className="text-xs text-[#8F8F8F] leading-relaxed">
                  {active.impactStatement}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Controls */}
          <div className="relative z-10 flex items-center justify-between border-t border-[#262626] pt-6 mt-12">
            <div className="font-mono text-xs text-[#8F8F8F]">
              LOG_RECORD_{currentIndex + 1}_OF_{TESTIMONIALS.length}
            </div>
            
            <div className="flex gap-px bg-[#262626]">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 border border-[#262626] bg-[#0A0A0A] text-white flex items-center justify-center hover:border-[#06B6D4] hover:text-[#06B6D4]"
                aria-label="Previous log"
              >
                ←
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 border border-[#262626] bg-[#0A0A0A] text-white flex items-center justify-center hover:border-[#06B6D4] hover:text-[#06B6D4]"
                aria-label="Next log"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
