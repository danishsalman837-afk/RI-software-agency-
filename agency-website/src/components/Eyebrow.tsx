export default function Eyebrow({
  children,
  color = "text-[#8F8F8F]",
  className = "",
}: {
  children: React.ReactNode;
  color?: string;
  className?: string;
}) {
  return (
    <span className={`font-mono text-xs font-semibold tracking-[0.1em] uppercase ${color} ${className}`}>
      {children}
    </span>
  );
}
