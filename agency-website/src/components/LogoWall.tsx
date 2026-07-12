import { INDUSTRIES } from "@/data";

export default function LogoWall() {
  return (
    <section className="py-8 border-b border-[#262626] bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-px bg-[#262626] border border-[#262626]">
          {INDUSTRIES.map((industry) => (
            <div
              key={industry.name}
              className="bg-[#0A0A0A] py-6 px-4 flex items-center justify-center group transition-colors duration-150"
            >
              <span className="font-mono text-xs font-semibold tracking-[0.1em] text-[#8F8F8F] group-hover:text-white transition-colors duration-150 select-none text-center">
                {industry.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
