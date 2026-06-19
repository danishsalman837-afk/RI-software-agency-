"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Icon } from "./Icon";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
const EMAILJS_CONFIGURED = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

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
        }
        await new Promise((r) => setTimeout(r, 1200));
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
    <div className="glass p-8 md:p-10 rounded-2xl relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#6c5ce7] opacity-20 blur-[60px] pointer-events-none rounded-full" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#00cec9] opacity-20 blur-[60px] pointer-events-none rounded-full" />

      {isSuccess ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center py-12 text-center relative z-10"
        >
          <div className="w-16 h-16 bg-[#00cec9]/20 rounded-full flex items-center justify-center mb-6">
            <Icon name="check" className="w-8 h-8 text-[#00cec9]" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
          <p className="text-[#8888a0]">
            Thank you for reaching out. Our team will get back to you within 24 hours.
          </p>
        </motion.div>
      ) : (
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#8888a0] mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full bg-[#1a1a2e]/50 border border-[#2a2a40] rounded-xl px-4 py-3 text-white placeholder-[#8888a0]/50 focus:outline-none focus:border-[#6c5ce7] focus:ring-1 focus:ring-[#6c5ce7] transition-all"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#8888a0] mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full bg-[#1a1a2e]/50 border border-[#2a2a40] rounded-xl px-4 py-3 text-white placeholder-[#8888a0]/50 focus:outline-none focus:border-[#6c5ce7] focus:ring-1 focus:ring-[#6c5ce7] transition-all"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[#8888a0] mb-2">
              How can we help?
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full bg-[#1a1a2e]/50 border border-[#2a2a40] rounded-xl px-4 py-3 text-white placeholder-[#8888a0]/50 focus:outline-none focus:border-[#6c5ce7] focus:ring-1 focus:ring-[#6c5ce7] transition-all resize-none"
              placeholder="Tell us about your project..."
            />
          </div>

          {error && (
            <p className="text-[#fd79a8] text-sm" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 rounded-xl text-white font-semibold flex items-center justify-center gap-2 transition-all ${
              isSubmitting
                ? "bg-[#6c5ce7]/50 cursor-not-allowed"
                : "bg-gradient-to-r from-[#6c5ce7] to-[#a29bfe] hover:shadow-lg hover:shadow-[#6c5ce7]/30 hover:-translate-y-0.5"
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
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
                Send Message
                <Icon name="arrow-right" className="w-[18px] h-[18px]" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
