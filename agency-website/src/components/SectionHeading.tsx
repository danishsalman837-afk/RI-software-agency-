import Eyebrow from "./Eyebrow";

export default function SectionHeading({
  eyebrow,
  eyebrowColor,
  title,
  subtitle,
  align = "left",
  className = "",
}: {
  eyebrow: string;
  eyebrowColor?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div className={`${align === "center" ? "text-center" : "text-left"} ${className}`}>
      <Eyebrow color={eyebrowColor} className="block mb-4">
        {eyebrow}
      </Eyebrow>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm md:text-base text-[#8F8F8F] leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
