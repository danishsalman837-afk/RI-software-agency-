import { Container, Button, ArrowIcon } from "@/components/ui";
import { FadeIn } from "@/components/Animations";

export default function CtaSection() {
  return (
    <section className="on-dark gradient-top-border relative overflow-hidden bg-noir py-16 text-white md:py-28">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="glow-blob gradient-accent left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 opacity-30"
      />

      <Container className="relative z-10">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.16em] text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-warm" />
              Currently booking new builds
            </p>
            <h2 className="font-display text-4xl font-bold leading-[1.03] tracking-tight md:text-6xl">
              Ready to build the future?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
              Tell us what you&apos;re trying to build. We&apos;ll tell you
              honestly whether we&apos;re the right studio for it — and you&apos;ll
              hear back from a founder within a day.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Button href="/contact" size="lg">
                Get a free consultation
                <ArrowIcon />
              </Button>
              <Button href="mailto:hello@risoftware.agency" variant="invert" size="lg">
                Email us
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
