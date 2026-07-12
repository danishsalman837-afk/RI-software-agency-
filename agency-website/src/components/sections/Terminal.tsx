"use client";

import { motion, useReducedMotion } from "framer-motion";

/** A line of faux source, tokenised just enough to colourise. */
type Token = { t: string; c?: string };
const LINES: Token[][] = [
  [{ t: "import", c: "text-violet-400" }, { t: " { ship } ", c: "text-slate-200" }, { t: "from", c: "text-violet-400" }, { t: " ", c: "" }, { t: "'@ri/studio'", c: "text-emerald-400" }],
  [],
  [{ t: "async", c: "text-violet-400" }, { t: " ", c: "" }, { t: "function", c: "text-violet-400" }, { t: " ", c: "" }, { t: "build", c: "text-indigo-300" }, { t: "(idea) {", c: "text-slate-200" }],
  [{ t: "  const", c: "text-violet-400" }, { t: " product = ", c: "text-slate-200" }, { t: "await", c: "text-violet-400" }, { t: " ship(idea)", c: "text-slate-200" }],
  [{ t: "  return", c: "text-violet-400" }, { t: " product.", c: "text-slate-200" }, { t: "scalable", c: "text-indigo-300" }, { t: " // weekly demos", c: "text-slate-500" }],
  [{ t: "}", c: "text-slate-200" }],
];

export default function Terminal() {
  const reduce = useReducedMotion();

  return (
    <div className="relative">
      {/* soft glow underlay */}
      <div
        aria-hidden
        className="absolute -inset-4 rounded-[28px] bg-gradient-to-tr from-indigo-500/20 to-violet-500/20 blur-2xl"
      />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 shadow-premium ring-1 ring-black/5">
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400/90" />
          <span className="h-3 w-3 rounded-full bg-amber-400/90" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/90" />
          <span className="ml-3 font-mono text-xs text-slate-400">
            build.ts — ri-software
          </span>
        </div>

        {/* Code body */}
        <div className="px-5 py-6 font-mono text-[13px] leading-6 md:text-sm">
          {LINES.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: reduce ? 0 : -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: reduce ? 0 : 0.4 + i * 0.12,
                duration: 0.35,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="flex min-h-6 gap-4"
            >
              <span className="w-4 select-none text-right text-slate-600">
                {i + 1}
              </span>
              <span className="whitespace-pre">
                {line.map((tok, j) => (
                  <span key={j} className={tok.c}>
                    {tok.t}
                  </span>
                ))}
                {i === LINES.length - 1 && (
                  <motion.span
                    aria-hidden
                    className="ml-0.5 inline-block h-4 w-[7px] translate-y-0.5 bg-indigo-400"
                    animate={reduce ? {} : { opacity: [1, 0] }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 0.6,
                    }}
                  />
                )}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Status bar */}
        <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.03] px-5 py-2.5 font-mono text-[11px] text-slate-400">
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            build passing
          </span>
          <span>deployed · 240ms</span>
        </div>
      </div>
    </div>
  );
}
