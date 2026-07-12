export default function Eyebrow({
  children,
  color = "text-[#6B6963]",
  className = "",
}: {
  children: React.ReactNode;
  color?: string;
  className?: string;
}) {
  return (
    <p className={`font-mono text-xs font-medium uppercase tracking-[0.15em] ${color} ${className}`}>
      — {children}
    </p>
  );
}
