import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "ghost" | "secondary" | "invert";
type Size = "sm" | "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 font-semibold rounded-xl " +
  "transition-transform duration-300 ease-out will-change-transform " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 " +
  "focus-visible:ring-offset-paper disabled:opacity-50 disabled:pointer-events-none " +
  "motion-safe:hover:-translate-y-0.5 active:translate-y-0";

const variants: Record<Variant, string> = {
  // Gradient fill — the primary CTA. Glow lifts on hover.
  primary:
    "gradient-accent text-white shadow-[0_8px_24px_-6px_rgba(79,70,229,0.45)] " +
    "motion-safe:hover:shadow-[0_12px_32px_-6px_rgba(79,70,229,0.6)] motion-safe:hover:scale-[1.02]",
  // Ghost — quiet, bordered, for secondary actions like "Watch demo".
  ghost:
    "bg-transparent text-ink border border-line-strong/70 hover:border-accent " +
    "hover:text-accent bg-card/40",
  // Secondary — solid dark on light.
  secondary: "bg-ink text-white hover:bg-neutral-800",
  // Invert — solid light on dark bands.
  invert: "bg-white text-ink hover:bg-slate-100",
};

const sizes: Record<Size, string> = {
  sm: "text-sm px-4 py-2.5 min-h-[40px]",
  md: "text-[0.95rem] px-6 py-3 min-h-[44px]", // 44px = accessible tap target
  lg: "text-base px-7 py-4 min-h-[52px]",
};

interface CommonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}

type ButtonProps = CommonProps & {
  href?: undefined;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type LinkProps = CommonProps & {
  href: string;
  external?: boolean;
  onClick?: () => void;
};

/**
 * Polymorphic button: renders a Next <Link> when `href` is passed, otherwise a
 * native <button>. Keeps CTA styling in exactly one place (DRY).
 */
export default function Button(props: ButtonProps | LinkProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    className = "",
  } = props;
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if ("href" in props && props.href !== undefined) {
    const { href, external, onClick } = props;
    const isMail = href.startsWith("mailto:");
    const isExternal = external ?? (/^https?:\/\//.test(href) || isMail);
    if (isExternal) {
      return (
        <a
          href={href}
          target={isMail ? undefined : "_blank"}
          rel={isMail ? undefined : "noopener noreferrer"}
          className={classes}
          onClick={onClick}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  const {
    variant: _variant,
    size: _size,
    className: _className,
    children: _children,
    ...rest
  } = props as ButtonProps;
  void _variant;
  void _size;
  void _className;
  void _children;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}

/** Small inline arrow used inside CTAs; nudges on group hover. */
export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`transition-transform duration-300 group-hover:translate-x-0.5 ${className}`}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
