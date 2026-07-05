"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = "", id }: SectionProps) {
  // Padding is intentionally NOT hardcoded here — each section sets its own
  // vertical rhythm via className. Hardcoding py-* caused conflicting padding
  // utilities (e.g. `py-20 md:py-32` fighting a caller's `py-24`).
  return (
    <section id={id} className={`relative ${className}`}>
      {children}
    </section>
  );
}

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
  fullWidth = false,
}: {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  fullWidth?: boolean;
}) {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 },
  };

  const reduce = useReducedMotion();
  const offset = reduce ? { x: 0, y: 0 } : directions[direction];

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: reduce ? 0.2 : 0.7,
        ease: [0.25, 0.1, 0.25, 1],
        delay: reduce ? 0 : delay,
      }}
      className={`${fullWidth ? "w-full" : ""} ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: reduce ? 0 : 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: reduce ? 0.2 : 0.6, ease: [0.25, 0.1, 0.25, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
}) {
  return (
    <Section className="pt-36 md:pt-52 pb-14 md:pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-8">
            {eyebrow && (
              <FadeIn>
                <p className="mb-6 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-muted">
                  <span aria-hidden className="h-px w-8 bg-accent" />
                  {eyebrow}
                </p>
              </FadeIn>
            )}
            <FadeIn delay={0.05}>
              <h1 className="font-display font-medium tracking-[-0.02em] text-balance text-5xl md:text-7xl lg:text-[5.25rem] leading-[0.98]">
                {title}
              </h1>
            </FadeIn>
          </div>
          <FadeIn delay={0.15} className="lg:col-span-4">
            <p className="text-lg md:text-xl leading-relaxed text-muted text-pretty">
              {subtitle}
            </p>
          </FadeIn>
        </div>
        <div className="mt-14 md:mt-20 h-px w-full bg-line" />
      </div>
    </Section>
  );
}
