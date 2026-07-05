"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Icon } from "./Icon";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
const EMAILJS_CONFIGURED = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

const fieldClass =
  "w-full bg-card border border-line rounded-sm px-4 py-3 text-ink placeholder-faint focus:outline-none focus:border-accent transition-colors";
const labelClass =
  "block font-mono text-xs uppercase tracking-[0.14em] text-muted mb-2";

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
        "We couldn't send that just now. Please try again, or email hello@risoftware.agency directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-start py-6"
      >
        <div className="w-11 h-11 rounded-sm bg-accent/10 text-accent flex items-center justify-center mb-5">
          <Icon name="check" className="w-5 h-5" />
        </div>
        <h3 className="font-display text-2xl text-ink mb-2">Message sent.</h3>
        <p className="text-muted leading-relaxed max-w-sm">
          Thanks for reaching out. One of the founders will reply within a day —
          usually sooner.
        </p>
      </motion.div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>Your name</label>
          <input type="text" id="name" name="name" required autoComplete="name" className={fieldClass} placeholder="Amara Okafor" />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>Company <span className="text-faint normal-case tracking-normal">(optional)</span></label>
          <input type="text" id="company" name="company" autoComplete="organization" className={fieldClass} placeholder="Northwind Labs" />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>Email</label>
        <input type="email" id="email" name="email" required autoComplete="email" className={fieldClass} placeholder="amara@northwind.co" />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>What are you building?</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${fieldClass} resize-none`}
          placeholder="A rough idea is fine. Tell us the problem, who it's for, and any deadline you're working toward."
          aria-describedby={error ? "form-error" : undefined}
        />
      </div>

      {error && (
        <p id="form-error" className="text-accent text-sm" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`group w-full py-4 rounded-sm font-semibold flex items-center justify-center gap-2 transition-colors ${
          isSubmitting
            ? "bg-ink/50 text-paper cursor-not-allowed"
            : "bg-ink text-paper hover:bg-accent"
        }`}
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
              <path className="opacity-90" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending…
          </>
        ) : (
          <>
            Send message
            <svg className="transition-transform group-hover:translate-x-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </>
        )}
      </button>
      <p className="text-faint text-xs">We reply within one business day. No sales sequence.</p>
    </form>
  );
}
