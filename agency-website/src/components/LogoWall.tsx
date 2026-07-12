import { INDUSTRIES } from "@/data";

export default function LogoWall() {
  return (
    <section className="py-5 border-y border-[#E5E3DC] bg-[#F6F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2">
          <span className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-[#6B6963]">
            Built for teams in
          </span>
          {INDUSTRIES.map((industry, i) => (
            <span key={industry.name} className="flex items-center gap-2">
              <span className="font-mono text-xs font-medium uppercase tracking-[0.1em] text-[#1A1918]">
                {industry.name}
              </span>
              {i < INDUSTRIES.length - 1 && (
                <span className="text-[#C1432E] text-xs" aria-hidden="true">•</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
