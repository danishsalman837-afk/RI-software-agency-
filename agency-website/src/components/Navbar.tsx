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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F6F5F0]/95 backdrop-blur-sm border-b border-[#E5E3DC] shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo — Bold Monospace */}
          <Link href="/" className="flex items-center group">
            <span className="font-mono text-sm font-bold tracking-[0.05em] text-[#1A1918] uppercase">
              RI Software
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href.startsWith("/#") && pathname === "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors duration-150 ${
                    isActive
                      ? "text-[#1A1918]"
                      : "text-[#6B6963] hover:text-[#1A1918]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <Link
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 bg-[#C1432E] text-white text-sm font-medium rounded-lg hover:bg-[#A93826] transition-all duration-150"
          >
            Start a build
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          {/* Mobile Hamburger */}
          <button
            id="mobile-menu-button"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[#E5E3DC]/50 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span
                className={`block h-[1.5px] bg-[#1A1918] rounded-full transition-all duration-300 ${
                  isMobileOpen ? "rotate-45 translate-y-[7.5px]" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] bg-[#1A1918] rounded-full transition-all duration-300 ${
                  isMobileOpen ? "opacity-0 scale-0" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] bg-[#1A1918] rounded-full transition-all duration-300 ${
                  isMobileOpen ? "-rotate-45 -translate-y-[4.5px]" : ""
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
            animate={{ opacity: 1, height: "calc(100dvh - 4rem)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="md:hidden fixed top-16 left-0 right-0 bg-[#F6F5F0] z-40 overflow-y-auto border-t border-[#E5E3DC]"
          >
            <div className="flex flex-col items-center justify-center h-full gap-1 px-6 py-10">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                  className="w-full max-w-sm"
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="block px-6 py-4 text-center text-lg font-medium text-[#1A1918] rounded-lg hover:bg-[#E5E3DC]/50 transition-all duration-150"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="mt-6 w-full max-w-sm"
              >
                <Link
                  href="#contact"
                  onClick={() => setIsMobileOpen(false)}
                  className="block px-6 py-4 text-center bg-[#C1432E] text-white font-medium rounded-lg hover:bg-[#A93826] transition-all duration-150"
                >
                  Start a build →
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
