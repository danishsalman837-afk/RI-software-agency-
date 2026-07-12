import { ReactNode, ElementType } from "react";

/**
 * The single source of truth for horizontal rhythm across the site.
 * max-w-7xl with the responsive gutter the brief specifies.
 */
export default function Container({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) {
  return (
    <Tag className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </Tag>
  );
}
