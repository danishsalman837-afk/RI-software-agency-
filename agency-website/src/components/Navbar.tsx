"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 border border-[#262626] bg-[#0A0A0A]/70 backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo — Monospaced Typographic logo */}
          <Link href="/" className="flex items-center">
            <span className="font-mono text-sm font-bold tracking-[0.1em] text-white uppercase">
              RI SOFTWARE
            </span>
          </Link>

          {/* Center Links */}
          <div className="hidden md:flex items-center gap-8 font-sans">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href.startsWith("/#") && pathname === "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-medium uppercase tracking-[0.05em] transition-colors duration-150 ${
                    isActive
                      ? "text-white"
                      : "text-[#8F8F8F] hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right Button — Sharp, zero border-radius button */}
          <Link
            href="#contact"
            className="hidden md:inline-flex items-center justify-center px-4 py-2 border border-[#262626] text-white text-xs font-mono uppercase tracking-wider hover:border-[#06B6D4] hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-150 bg-transparent"
          >
            Initialize Project ↗
          </Link>

          {/* Mobile Hamburger */}
          <button
            id="mobile-menu-button"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden w-8 h-8 flex items-center justify-center border border-[#262626] hover:bg-[#161616]"
            aria-label="Toggle menu"
          >
            <div className="w-4 flex flex-col gap-1">
              <span
                className={`block h-[1px] bg-white transition-all duration-300 ${
                  isMobileOpen ? "rotate-45 translate-y-[5px]" : ""
                }`}
              />
              <span
                className={`block h-[1px] bg-white transition-all duration-300 ${
                  isMobileOpen ? "opacity-0 scale-0" : ""
                }`}
              />
              <span
                className={`block h-[1px] bg-white transition-all duration-300 ${
                  isMobileOpen ? "-rotate-45 -translate-y-[5px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100dvh - 5rem)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden fixed top-20 left-4 right-4 bg-[#0A0A0A] border border-[#262626] z-40 overflow-y-auto"
          >
            <div className="flex flex-col items-center justify-center h-full gap-2 px-6 py-10">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                  className="w-full max-w-sm"
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="block px-6 py-4 text-center text-sm font-mono uppercase tracking-wider text-[#8F8F8F] hover:text-white hover:bg-[#161616]"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.2 }}
                className="mt-6 w-full max-w-sm"
              >
                <Link
                  href="#contact"
                  onClick={() => setIsMobileOpen(false)}
                  className="block px-6 py-4 text-center border border-[#262626] text-white font-mono uppercase tracking-wider hover:border-[#06B6D4]"
                >
                  Initialize Project ↗
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
