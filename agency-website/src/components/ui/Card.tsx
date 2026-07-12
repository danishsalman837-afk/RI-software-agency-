import { ReactNode, ElementType } from "react";

/**
 * Surface primitive. White card, hairline border, generous radius.
 * `lift` opts into the GPU-friendly hover (translateY + tinted shadow).
 */
export default function Card({
  children,
  className = "",
  lift = false,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  lift?: boolean;
  as?: ElementType;
}) {
  return (
    <Tag
      className={`relative rounded-2xl border border-line bg-card ${
        lift ? "card-lift hover:border-accent/30" : ""
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
