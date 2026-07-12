"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/data";
import { Button, ArrowIcon } from "@/components/ui";

function Wordmark() {
  return (
    <Link
      href="/"
      className="group flex items-baseline gap-2"
      aria-label="RI Software — home"
    >
      <span className="font-display text-2xl font-extrabold tracking-tight text-ink">
        RI
      </span>
      <span className="pb-[2px] font-mono text-[0.68rem] uppercase tracking-[0.22em] text-muted transition-colors group-hover:text-accent">
        Software
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 80, damping: 18 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        isScrolled || isMobileOpen
          ? "border-b border-line bg-paper/70 backdrop-blur-xl backdrop-saturate-150 shadow-[0_1px_0_0_rgba(255,255,255,0.6)_inset,0_8px_24px_-16px_rgba(15,23,42,0.25)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Wordmark />

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative py-1 text-sm font-medium transition-colors ${
                    isActive ? "text-ink" : "text-muted hover:text-ink"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="navUnderline"
                      className="gradient-accent absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              );
            })}
            <Button href="/contact" size="sm">
              Start a build
              <ArrowIcon className="h-3.5 w-3.5" />
            </Button>
          </div>

          {/* Mobile toggle — 44px tap target */}
          <button
            onClick={() => setIsMobileOpen((v) => !v)}
            className="relative -mr-2 flex h-11 w-11 items-center justify-center md:hidden"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
          >
            <div className="flex w-6 flex-col gap-[5px]">
              <span
                className={`block h-[1.5px] rounded-full bg-ink transition-all duration-300 ${
                  isMobileOpen ? "translate-y-[6.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] rounded-full bg-ink transition-all duration-300 ${
                  isMobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] rounded-full bg-ink transition-all duration-300 ${
                  isMobileOpen ? "-translate-y-[6.5px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 left-0 right-0 top-20 z-40 overflow-y-auto bg-paper/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col px-6 py-8">
              {NAV_LINKS.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.06, duration: 0.35 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="flex items-baseline justify-between border-b border-line py-5"
                    >
                      <span
                        className={`font-display text-3xl font-bold tracking-tight ${
                          isActive ? "gradient-text" : "text-ink"
                        }`}
                      >
                        {link.label}
                      </span>
                      <span className="font-mono text-xs text-faint">
                        0{i + 1}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.05 + NAV_LINKS.length * 0.06,
                  duration: 0.35,
                }}
                className="mt-8"
              >
                <Button
                  href="/contact"
                  size="lg"
                  className="w-full"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Start a build
                  <ArrowIcon />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
