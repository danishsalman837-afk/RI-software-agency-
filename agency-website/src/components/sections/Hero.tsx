"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container, Button, ArrowIcon } from "@/components/ui";
import { STATS } from "@/data";
import Terminal from "./Terminal";

const spring = { type: "spring", stiffness: 90, damping: 18, mass: 0.9 } as const;

export default function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 24 },
    animate: { opacity: 1, y: 0 },
    transition: { ...spring, delay: reduce ? 0 : delay },
  });

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Ambient indigo/violet glow — pure decoration, sits behind content */}
      <div
        aria-hidden
        className="glow-blob gradient-accent -top-24 -left-24 h-[32rem] w-[32rem]"
      />
      <div
        aria-hidden
        className="glow-blob top-40 right-0 h-[26rem] w-[26rem] bg-violet-400/40"
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left: copy */}
          <div className="lg:col-span-6">
            <motion.p
              {...rise(0)}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-card/70 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.16em] text-muted shadow-sm backdrop-blur"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              RI Software — studio, est. 2019
            </motion.p>

            <motion.h1
              {...rise(0.08)}
              className="font-display text-5xl font-bold leading-[1.02] tracking-tight text-ink md:text-7xl"
            >
              Where ideas become{" "}
              <span className="gradient-text">scalable software.</span>
            </motion.h1>

            <motion.p
              {...rise(0.16)}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg"
            >
              Web platforms, mobile apps, and the automation behind them —
              designed and shipped by a two-person studio that stays until it
              works.
            </motion.p>

            <motion.div
              {...rise(0.24)}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
            >
              <Button href="/contact" size="lg">
                Start a build
                <ArrowIcon />
              </Button>
              <Button href="/portfolio" variant="ghost" size="lg">
                See the work
                <ArrowIcon className="text-accent" />
              </Button>
            </motion.div>

            {/* Operating facts */}
            <motion.dl
              {...rise(0.32)}
              className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-line pt-8 sm:grid-cols-4"
            >
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-display text-2xl font-bold tracking-tight text-ink tnum md:text-3xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 max-w-[16ch] text-sm leading-snug text-muted">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* Right: interactive terminal UI */}
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 32, scale: reduce ? 1 : 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ ...spring, delay: reduce ? 0 : 0.2 }}
            className="lg:col-span-6 lg:pl-6"
          >
            <Terminal />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
