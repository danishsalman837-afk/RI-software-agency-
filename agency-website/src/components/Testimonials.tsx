"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui";
import SectionHeading from "./SectionHeading";
import { getInitials } from "@/lib/utils";
import { TESTIMONIALS } from "@/data";

function ArrowButton({
  dir,
  onClick,
}: {
  dir: "prev" | "next";
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={dir === "prev" ? "Previous testimonial" : "Next testimonial"}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-card text-ink transition-all duration-300 hover:border-accent hover:text-accent hover:shadow-premium active:translate-y-px"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d={dir === "prev" ? "M13 8H3M7 4L3 8l4 4" : "M3 8h10M9 4l4 4-4 4"}
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const active = TESTIMONIALS[index];
  const count = TESTIMONIALS.length;

  const go = (dir: number) => setIndex((i) => (i + dir + count) % count);

  return (
    <section className="border-y border-line bg-sand/60 py-16 md:py-28">
      <Container>
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="In their words"
            title="Teams who signed on for a second project."
          />
          <div className="flex items-center gap-3">
            <ArrowButton dir="prev" onClick={() => go(-1)} />
            <ArrowButton dir="next" onClick={() => go(1)} />
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-line bg-card p-8 shadow-premium md:p-14">
          <span
            aria-hidden
            className="gradient-text absolute right-8 top-4 select-none font-display text-[7rem] font-extrabold leading-none opacity-20"
          >
            &rdquo;
          </span>
          <AnimatePresence mode="wait">
            <motion.figure
              key={active.id}
              initial={{ opacity: 0, y: reduce ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduce ? 0 : -12 }}
              transition={{ duration: reduce ? 0.15 : 0.4, ease: [0.25, 1, 0.5, 1] }}
            >
              <blockquote className="relative max-w-3xl font-display text-2xl font-medium leading-[1.2] tracking-tight text-ink text-balance md:text-4xl">
                {active.quote}
              </blockquote>
              <figcaption className="mt-9 flex items-center gap-4">
                <span className="gradient-accent flex h-12 w-12 items-center justify-center rounded-full font-display text-sm font-bold text-white">
                  {getInitials(active.name)}
                </span>
                <span className="text-[0.95rem]">
                  <span className="block font-semibold text-ink">
                    {active.name}
                  </span>
                  <span className="text-muted">
                    {active.role}, {active.company}
                  </span>
                </span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          {/* Dots */}
          <div className="mt-10 flex items-center gap-2">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setIndex(i)}
                aria-label={`Show testimonial ${i + 1}`}
                aria-pressed={i === index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "gradient-accent w-8" : "w-2.5 bg-line-strong"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
