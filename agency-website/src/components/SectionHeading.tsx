import Eyebrow from "./Eyebrow";

export default function SectionHeading({
  eyebrow,
  eyebrowColor,
  title,
  subtitle,
  align = "center",
  dark = false,
  className = "",
}: {
  eyebrow: string;
  eyebrowColor?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  dark?: boolean;
  className?: string;
}) {
  const headingColor = dark ? "text-[#F6F5F0]" : "text-[#1A1918]";
  const subtitleColor = dark ? "text-[#9C9890]" : "text-[#6B6963]";

  return (
    <div className={`${align === "center" ? "text-center" : ""} ${className}`}>
      <Eyebrow color={eyebrowColor} className="mb-5">{eyebrow}</Eyebrow>
      <h2 className={`font-[family-name:var(--font-instrument-serif)] text-4xl md:text-5xl lg:text-6xl ${headingColor} mb-6 leading-[1.1]`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg md:text-xl ${subtitleColor} leading-relaxed font-light ${align === "center" ? "max-w-3xl mx-auto" : "max-w-3xl"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
