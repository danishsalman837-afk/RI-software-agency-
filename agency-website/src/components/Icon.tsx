import {
  Globe, Smartphone, Bot, Palette, Zap, Shield, Wrench, Handshake,
  Lightbulb, BarChart3, Target, Rocket, Search, PenTool, Code, Send,
  User, Mail, Phone, Check, ArrowRight,
  type LucideIcon,
} from "lucide-react";

export const iconMap = {
  globe: Globe, smartphone: Smartphone, bot: Bot, palette: Palette,
  zap: Zap, shield: Shield, wrench: Wrench, handshake: Handshake,
  lightbulb: Lightbulb, "bar-chart": BarChart3, target: Target, rocket: Rocket,
  search: Search, "pen-tool": PenTool, code: Code, send: Send,
  user: User, mail: Mail, phone: Phone, check: Check, "arrow-right": ArrowRight,
} satisfies Record<string, LucideIcon>;

export type IconKey = keyof typeof iconMap;

export function Icon({ name, className }: { name: IconKey; className?: string }) {
  const Cmp = iconMap[name];
  return <Cmp className={className} aria-hidden="true" />;
}

export function IconTile({
  name,
  className = "",
}: {
  name: IconKey;
  className?: string;
}) {
  return (
    <div
      className={`flex-shrink-0 w-14 h-14 rounded-xl bg-[#1a1a2e] border border-[#2a2a40] flex items-center justify-center text-[#a29bfe] transition-all duration-300 ${className}`}
    >
      <Icon name={name} className="w-6 h-6" />
    </div>
  );
}

// Brand/social marks are not shipped by lucide (trademark), so they are
// inline SVGs here. Paths use currentColor so they inherit text color.
export const socialIconMap = {
  twitter: (
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  ),
  linkedin: (
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  ),
  github: (
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z" />
  ),
  dribbble: (
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12c6.614 0 12-5.373 12-12S18.614 0 12 0zm9.568 5.302c1.4 1.5 2.252 3.5 2.273 5.668-.337-.068-3.78-.751-7.235-.327-.083-.18-.155-.359-.243-.547-.211-.502-.444-1.005-.682-1.5 3.83-1.563 5.572-3.808 5.887-4.294zM12 1.55c2.602 0 4.985.975 6.797 2.578-.265.378-1.837 2.481-5.54 3.876-1.706-3.137-3.598-5.71-3.892-6.106A10.34 10.34 0 0112 1.55zm-4.302.652c.28.38 2.13 2.965 3.86 6.03-4.85 1.29-9.13 1.27-9.59 1.27.673-3.213 2.847-5.879 5.73-7.3zM1.5 12.01v-.31c.45.01 5.48.08 10.66-1.47.3.58.58 1.17.84 1.76l-.41.12c-5.35 1.73-8.19 6.44-8.42 6.84A10.36 10.36 0 011.5 12.01zm10.5 10.45c-2.34 0-4.49-.79-6.21-2.11.18-.37 2.21-4.28 8.06-6.32l.07-.02c1.46 3.78 2.05 6.95 2.2 7.86a10.34 10.34 0 01-4.12.61zm5.62-1.43c-.1-.62-.64-3.65-2-7.38 3.26-.52 6.11.33 6.46.45a10.4 10.4 0 01-4.46 6.93z" />
  ),
} as const;

export type SocialKey = keyof typeof socialIconMap;

export function SocialIcon({ name, className }: { name: SocialKey; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      {socialIconMap[name]}
    </svg>
  );
}
