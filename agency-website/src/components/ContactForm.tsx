"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
const EMAILJS_CONFIGURED = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

const PROJECT_TYPES = [
  "WEB ARCHITECTURE",
  "NATIVE MOBILE",
  "ENTERPRISE AI",
  "WORKFLOW AUTOMATION",
  "NOT SPECIFIED"
];

const BUDGET_RANGES = [
  "UNDER $10K",
  "$10K – $25K",
  "$25K – $50K",
  "$50K – $100K",
  "$100K+"
];

const inputClasses =
  "w-full bg-transparent border-b border-[#262626] py-3 text-white placeholder-[#8F8F8F] focus:outline-none focus:border-[#06B6D4] transition-all font-mono text-sm";
const labelClasses =
  "block text-[10px] font-mono font-semibold uppercase tracking-[0.1em] text-[#8F8F8F] mb-1";

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
        "CONNECTION_ERROR: Failed to transmit. Please check parameters and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full relative">
      {isSuccess ? (
        <div className="flex flex-col items-center justify-center py-16 border border-[#262626] bg-[#161616] p-8">
          <div className="w-10 h-10 border border-[#06B6D4] text-[#06B6D4] flex items-center justify-center mb-4 font-mono text-xs">
            OK
          </div>
          <h3 className="font-mono text-sm font-semibold text-white tracking-wider uppercase mb-1">Briefing Initiated</h3>
          <p className="font-mono text-[10px] text-[#8F8F8F] uppercase">
            Data transmitted. Response sequence within 24 hours.
          </p>
        </div>
      ) : (
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="contact-name" className={labelClasses}>
              // CLIENT NAME
            </label>
            <input
              type="text"
              id="contact-name"
              name="name"
              required
              className={inputClasses}
              placeholder="ENTER FULL NAME"
            />
          </div>

          <div>
            <label htmlFor="contact-email" className={labelClasses}>
              // WORK EMAIL
            </label>
            <input
              type="email"
              id="contact-email"
              name="email"
              required
              className={inputClasses}
              placeholder="NAME@COMPANY.COM"
            />
          </div>

          <div>
            <label htmlFor="contact-project-type" className={labelClasses}>
              // CORE CAPABILITY REQUIRED
            </label>
            <select
              id="contact-project-type"
              name="project_type"
              required
              className={`${inputClasses} cursor-pointer`}
              defaultValue=""
            >
              <option value="" disabled className="bg-[#161616]">SELECT OPTION</option>
              {PROJECT_TYPES.map((t) => (
                <option key={t} value={t} className="bg-[#161616]">{t}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="contact-budget" className={labelClasses}>
              // BUDGET ESTIMATE
            </label>
            <select
              id="contact-budget"
              name="budget_range"
              required
              className={`${inputClasses} cursor-pointer`}
              defaultValue=""
            >
              <option value="" disabled className="bg-[#161616]">SELECT RANGE</option>
              {BUDGET_RANGES.map((b) => (
                <option key={b} value={b} className="bg-[#161616]">{b}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="contact-message" className={labelClasses}>
              // BRIEF DETAILS
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={3}
              className={`${inputClasses} resize-none`}
              placeholder="OUTLINE SCOPE & SYSTEM REQUIREMENTS..."
            />
          </div>

          {error && (
            <p className="font-mono text-xs text-[#06B6D4]" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 text-xs font-mono font-bold uppercase tracking-widest text-[#0A0A0A] bg-[#06B6D4] hover:bg-[#0891B2] transition-colors ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Transmitting Brief..." : "Initiate Briefing"}
          </button>
        </form>
      )}
    </div>
  );
}
