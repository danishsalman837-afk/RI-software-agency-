import Eyebrow from "./Eyebrow";

/**
 * Editorial section heading. Left-aligned by default (editorial layouts read
 * better ragged than centered), with a large Fraunces display title.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "light",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
  className?: string;
}) {
  const isDark = tone === "dark";
  return (
    <div className={`${align === "center" ? "text-center" : ""} ${className}`}>
      {eyebrow && (
        <Eyebrow tone={tone} className={`mb-6 ${align === "center" ? "justify-center" : ""}`}>
          {eyebrow}
        </Eyebrow>
      )}
      <h2
        className={`font-display font-medium tracking-[-0.02em] text-balance text-4xl md:text-5xl lg:text-[3.75rem] leading-[1.02] ${
          isDark ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-6 text-lg md:text-xl leading-relaxed text-pretty ${
            isDark ? "text-paper/70" : "text-muted"
          } ${align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
