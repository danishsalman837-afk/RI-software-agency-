"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission since no backend is required
    // In a real app, this would use EmailJS or Formspree
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
      (e.target as HTMLFormElement).reset();
    }, 5000);
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
          className="flex flex-col items-center justify-center py-12 text-center"
        >
          <div className="w-16 h-16 bg-[#00cec9]/20 rounded-full flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-[#00cec9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
          <p className="text-[#8888a0]">
            Thank you for reaching out. Our team will get back to you within 24 hours.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
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
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              <>
                Send Message
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                  <path d="M1 8h14M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
