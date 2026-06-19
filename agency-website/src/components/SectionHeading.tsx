import Eyebrow from "./Eyebrow";

export default function SectionHeading({
  eyebrow,
  eyebrowColor,
  title,
  subtitle,
  align = "center",
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
    <div className={`${align === "center" ? "text-center" : ""} ${className}`}>
      <Eyebrow color={eyebrowColor} className="mb-4">{eyebrow}</Eyebrow>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{title}</h2>
      {subtitle && (
        <p className={`text-lg md:text-xl text-[#8888a0] leading-relaxed font-light ${align === "center" ? "max-w-3xl mx-auto" : "max-w-3xl"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
