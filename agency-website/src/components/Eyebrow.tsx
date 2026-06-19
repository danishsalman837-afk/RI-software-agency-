export default function Eyebrow({
  children,
  color = "text-[#6c5ce7]",
  className = "",
}: {
  children: React.ReactNode;
  color?: string;
  className?: string;
}) {
  return (
    <p className={`text-sm font-bold uppercase tracking-[0.2em] ${color} ${className}`}>
      {children}
    </p>
  );
}
