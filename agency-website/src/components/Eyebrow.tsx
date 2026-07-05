/**
 * Editorial section label: a short oxblood rule followed by mono, tracked text.
 * Replaces the old all-caps colored eyebrow with something quieter and more
 * intentional. `tone` switches it for use on dark bands.
 */
export default function Eyebrow({
  children,
  className = "",
  tone = "light",
  as: Tag = "p",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "dark";
  as?: "p" | "span" | "h2";
}) {
  return (
    <Tag
      className={`inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] ${
        tone === "dark" ? "text-paper/60" : "text-muted"
      } ${className}`}
    >
      <span
        aria-hidden="true"
        className="h-px w-8 bg-accent"
      />
      {children}
    </Tag>
  );
}
