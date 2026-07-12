"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = "", id }: SectionProps) {
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
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
    none: { x: 0, y: 0 },
  };

  const reduce = useReducedMotion();
  const offset = reduce ? { x: 0, y: 0 } : directions[direction];

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: reduce ? 0.2 : 0.6,
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
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
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
        hidden: { opacity: 0, y: reduce ? 0 : 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: reduce ? 0.2 : 0.5, ease: [0.25, 0.1, 0.25, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <Section className="pt-32 md:pt-48 pb-10 md:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <FadeIn>
          <h1 className="font-[family-name:var(--font-instrument-serif)] text-4xl md:text-6xl lg:text-7xl text-[#1A1918] mb-6 leading-[1.1]">
            {title}
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-[#6B6963] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </FadeIn>
      </div>
    </Section>
  );
}
