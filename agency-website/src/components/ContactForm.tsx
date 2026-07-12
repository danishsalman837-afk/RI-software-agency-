"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
const EMAILJS_CONFIGURED = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

const PROJECT_TYPES = [
  "Web platform",
  "Mobile app",
  "AI automation",
  "Product & design",
  "Not sure yet",
];

const BUDGET_RANGES = [
  "Under $10k",
  "$10k – $25k",
  "$25k – $50k",
  "$50k – $100k",
  "$100k+",
];

const inputClasses =
  "w-full bg-white border border-[#E5E3DC] rounded-lg px-4 py-3 text-[#1A1918] placeholder-[#9C9890] focus:outline-none focus:border-[#C1432E] focus:ring-1 focus:ring-[#C1432E] transition-all font-sans text-sm";
const labelClasses =
  "block text-xs font-mono font-medium uppercase tracking-[0.1em] text-[#6B6963] mb-2";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      if (EMAILJS_CONFIGURED) {
        await emailjs.sendForm(SERVICE_ID!, TEMPLATE_ID!, e.currentTarget, {
          publicKey: PUBLIC_KEY!,
        });
      } else {
        if (process.env.NODE_ENV !== "production") {
          console.warn(
            "EmailJS not configured — simulating success. Set NEXT_PUBLIC_EMAILJS_* env vars.",
          );
          await new Promise((r) => setTimeout(r, 1200));
        } else {
          throw new Error("Email service is not configured.");
        }
      }
      setIsSuccess(true);
      formRef.current?.reset();
      setTimeout(() => setIsSuccess(false), 6000);
    } catch (err) {
      console.error(err);
      setError(
        "Something went wrong sending your message. Please try again or email us directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white border border-[#E5E3DC] rounded-xl p-8 md:p-10 relative overflow-hidden">
      {isSuccess ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center py-12 text-center"
        >
          <div className="w-14 h-14 rounded-full border-2 border-[#C1432E] flex items-center justify-center mb-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C1432E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-[#1A1918] mb-2">Message sent.</h3>
          <p className="text-[#6B6963] text-sm">
            We&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>
      ) : (
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="contact-name" className={labelClasses}>
              Name
            </label>
            <input
              type="text"
              id="contact-name"
              name="name"
              required
              className={inputClasses}
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="contact-email" className={labelClasses}>
              Work Email
            </label>
            <input
              type="email"
              id="contact-email"
              name="email"
              required
              className={inputClasses}
              placeholder="you@company.com"
            />
          </div>

          <div>
            <label htmlFor="contact-project-type" className={labelClasses}>
              Project Type
            </label>
            <select
              id="contact-project-type"
              name="project_type"
              required
              className={inputClasses}
              defaultValue=""
            >
              <option value="" disabled>Select a type</option>
              {PROJECT_TYPES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="contact-budget" className={labelClasses}>
              Budget Range
            </label>
            <select
              id="contact-budget"
              name="budget_range"
              required
              className={inputClasses}
              defaultValue=""
            >
              <option value="" disabled>Select a range</option>
              {BUDGET_RANGES.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>

          {error && (
            <p className="text-[#C1432E] text-sm" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3.5 rounded-lg text-white font-medium text-sm flex items-center justify-center gap-2 transition-all ${
              isSubmitting
                ? "bg-[#C1432E]/50 cursor-not-allowed"
                : "bg-[#C1432E] hover:bg-[#A93826]"
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              <>
                Start a build →
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
