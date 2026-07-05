import { SECTORS } from "@/data";

/**
 * Honest positioning strip. We don't have client logos we can show yet, so
 * rather than fake a logo wall we state the sectors we build for.
 */
export default function LogoWall() {
  return (
    <section className="border-y border-line bg-sand/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted shrink-0">
          Built for teams in
        </p>
        <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
          {SECTORS.map((sector) => (
            <li
              key={sector}
              className="font-display text-xl md:text-2xl text-ink/80"
            >
              {sector}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
