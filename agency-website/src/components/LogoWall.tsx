import { CLIENT_LOGOS } from "@/data";

export default function LogoWall() {
  return (
    <section className="py-16 border-b border-[#2a2a40] bg-[#050510]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-[#8888a0] mb-10">
          Trusted by teams building what&apos;s next
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {CLIENT_LOGOS.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center">
              <span className="text-2xl font-bold tracking-tight text-[#8888a0]/60 hover:text-white transition-colors duration-300 select-none">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
