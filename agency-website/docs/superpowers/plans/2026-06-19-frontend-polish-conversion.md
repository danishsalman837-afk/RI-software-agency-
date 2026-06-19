# RI Software Frontend Polish & Conversion — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix the broken CSS, remove the "generic AI" feel, fix mobile issues, and add conversion sections + real lead capture to the RI Software agency site — keeping its dark-purple identity and layout.

**Architecture:** Next.js 16 App Router + Tailwind v4 (`@theme inline`) + framer-motion. Add a thin shared-primitive layer (`Eyebrow`, `SectionHeading`, `Icon`) so polish is applied uniformly. Content stays in `src/data/index.ts`; emoji icons become lucide icon keys mapped to components in `Icon.tsx`. New sections (LogoWall, Process, Testimonials) are self-contained components inserted into the home page.

**Tech Stack:** TypeScript, React 19, Next.js 16, Tailwind CSS v4, framer-motion, lucide-react (new), @emailjs/browser.

## Global Constraints

- Identity colors only: `#6c5ce7` / `#a29bfe` / `#00cec9` / `#fd79a8` on `#050510` / `#0d0d1a` / `#1a1a2e`, borders `#2a2a40`, muted text `#8888a0`. No new brand colors.
- Font: Inter (already configured). No font swap.
- Brand name everywhere is "RI Software Agency". The string "NovaLabs" must not appear anywhere.
- No emoji in rendered UI — all icons via lucide-react.
- No new test framework. Verification = `npm run build` + `npm run lint` clean, plus stated acceptance checks.
- No backend/CMS. All content in `src/data/index.ts`.
- Placeholder testimonial/logo/social content must be marked with a `TODO:` comment in data.
- Commit after every task.

---

## File Structure

- `src/components/Icon.tsx` *(new)* — `iconMap` (string key → lucide component) + `Icon` tile wrapper. Single source of truth for icons.
- `src/components/Eyebrow.tsx` *(new)* — colored uppercase section label.
- `src/components/SectionHeading.tsx` *(new)* — eyebrow + title + subtitle block.
- `src/components/LogoWall.tsx` *(new)* — "Trusted by" placeholder logo strip.
- `src/components/Process.tsx` *(new)* — 4-step how-we-work stepper.
- `src/components/Testimonials.tsx` *(new)* — placeholder testimonial cards.
- `src/components/Animations.tsx` — add `prefers-reduced-motion` support.
- `src/components/index.ts` — export new components.
- `src/types/index.ts` — new/extended types.
- `src/data/index.ts` — icon keys, service features, testimonials, logos, process, social links.
- `src/app/globals.css` — spacing/type/util tweaks.
- `src/components/{Navbar,Footer,InteractiveServices,ContactForm}.tsx` — bug fixes + icons.
- `src/app/{page,about/page,services/page,portfolio/page,contact/page}.tsx` — polish + new sections.
- `.env.local.example` *(new)*, `README.md` — EmailJS docs.

---

### Task 0: Pre-implementation setup (globals.css & next.config.ts)

**Files:**
- Modify: `src/app/globals.css`
- Modify: `next.config.ts`

- [ ] **Step 1: Modify globals.css**
Update spacing rhythm, universal reset adjustments, and type/motion utilities.

- [ ] **Step 2: Modify next.config.ts**
Configure Turbopack root configuration with __dirname and toggle devIndicators.

---

### Task 1: Add lucide-react + Icon system

**Files:**
- Modify: `package.json` (add dependency)
- Create: `src/components/Icon.tsx`
- Modify: `src/components/index.ts`

**Interfaces:**
- Produces: `iconMap` keys: `"globe" | "smartphone" | "bot" | "palette" | "zap" | "shield" | "wrench" | "handshake" | "lightbulb" | "bar-chart" | "target" | "rocket" | "search" | "pen-tool" | "code" | "send" | "user" | "mail" | "phone" | "twitter" | "linkedin" | "github" | "dribbble" | "check" | "arrow-right"`.
- Produces: `type IconKey = keyof typeof iconMap`.
- Produces: `<Icon name={IconKey} className?: string />` — raw lucide icon.
- Produces: `<IconTile name={IconKey} gradient?: string className?: string />` — icon inside a gradient-tinted rounded tile (`w-14 h-14 rounded-xl bg-[#1a1a2e] border border-[#2a2a40]`, icon `text-[#a29bfe]`).

- [ ] **Step 1: Install lucide-react**

Run: `npm install lucide-react @emailjs/browser`
Expected: adds `lucide-react` to `package.json` dependencies, no errors.

- [ ] **Step 2: Create `src/components/Icon.tsx`**

```tsx
import {
  Globe, Smartphone, Bot, Palette, Zap, Shield, Wrench, Handshake,
  Lightbulb, BarChart3, Target, Rocket, Search, PenTool, Code, Send,
  User, Mail, Phone, Twitter, Linkedin, Github, Dribbble, Check, ArrowRight,
  type LucideIcon,
} from "lucide-react";

export const iconMap = {
  globe: Globe, smartphone: Smartphone, bot: Bot, palette: Palette,
  zap: Zap, shield: Shield, wrench: Wrench, handshake: Handshake,
  lightbulb: Lightbulb, "bar-chart": BarChart3, target: Target, rocket: Rocket,
  search: Search, "pen-tool": PenTool, code: Code, send: Send,
  user: User, mail: Mail, phone: Phone, twitter: Twitter, linkedin: Linkedin,
  github: Github, dribbble: Dribbble, check: Check, "arrow-right": ArrowRight,
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
```

- [ ] **Step 3: Export from `src/components/index.ts`**

Add to the existing exports:

```ts
export { Icon, IconTile, iconMap } from "./Icon";
export type { IconKey } from "./Icon";
```

- [ ] **Step 4: Verify build & lint**

Run: `npm run build`
Expected: build succeeds (Icon.tsx compiles, no type errors).
Run: `npm run lint`
Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add package.json package-lock.json src/components/Icon.tsx src/components/index.ts
git commit -m "feat: add lucide-react icon system (Icon/IconTile)"
```

---

### Task 2: Update types & data (icon keys, features, new datasets)

**Files:**
- Modify: `src/types/index.ts`
- Modify: `src/data/index.ts`

**Interfaces:**
- Consumes: `IconKey` from `./Icon` (Task 1).
- Produces (types): `ServiceCard` now has `icon: IconKey` and `features: string[]`; `WhyChooseUsItem.icon: IconKey`; new `Testimonial { quote, name, role, company }`, `ClientLogo { name }`, `ProcessStep { step, title, description, icon: IconKey }`, `SocialLink { label, href, icon: IconKey }`, `CoreValue { icon: IconKey, title, description }`.
- Produces (data): `SERVICES` (with `features`), `WHY_CHOOSE_US`, `TESTIMONIALS`, `CLIENT_LOGOS`, `PROCESS_STEPS`, `SOCIAL_LINKS`, `CORE_VALUES`.

- [ ] **Step 1: Update `src/types/index.ts`**

Replace `ServiceCard`, `WhyChooseUsItem` and add new types. Import the icon key type:

```ts
import type { IconKey } from "@/components/Icon";

export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceCard {
  icon: IconKey;
  title: string;
  description: string;
  features: string[];
  gradient: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  gradient: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface WhyChooseUsItem {
  icon: IconKey;
  title: string;
  description: string;
}

export interface CoreValue {
  icon: IconKey;
  title: string;
  description: string;
  gradient: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export interface ClientLogo {
  name: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: IconKey;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconKey;
}
```

- [ ] **Step 2: Update `SERVICES` and `WHY_CHOOSE_US` icon fields + add features in `src/data/index.ts`**

Change the top import line to include the new types, and replace the `SERVICES` and `WHY_CHOOSE_US` arrays. Replace each emoji `icon` with an icon key and add `features` to services:

```ts
import type {
  NavLink, ServiceCard, PortfolioItem, Stat, WhyChooseUsItem, TeamMember,
  Testimonial, ClientLogo, ProcessStep, SocialLink, CoreValue,
} from "@/types";

export const SERVICES: ServiceCard[] = [
  {
    icon: "globe",
    title: "Web Development",
    description:
      "Custom web applications built with cutting-edge technologies. From responsive landing pages to complex enterprise platforms.",
    features: ["Next.js & React architecture", "Headless CMS & APIs", "Performance & SEO optimized"],
    gradient: "from-[#6c5ce7] to-[#a29bfe]",
  },
  {
    icon: "smartphone",
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile solutions for iOS and Android. Seamless experiences that users love.",
    features: ["iOS & Android delivery", "React Native & Flutter", "App Store launch support"],
    gradient: "from-[#00cec9] to-[#55efc4]",
  },
  {
    icon: "bot",
    title: "AI Solutions",
    description:
      "Intelligent automation and machine learning integrations. Transform your data into actionable insights.",
    features: ["LLM & chatbot integration", "Predictive analytics", "Workflow automation"],
    gradient: "from-[#fd79a8] to-[#fab1a0]",
  },
  {
    icon: "palette",
    title: "UI/UX Design",
    description:
      "Human-centered design that captivates and converts. Research-driven interfaces that delight at every touchpoint.",
    features: ["User research & testing", "Design systems", "Interactive prototypes"],
    gradient: "from-[#fdcb6e] to-[#e17055]",
  },
];
```

And replace `WHY_CHOOSE_US` icon emojis with keys (keep titles/descriptions):

```ts
export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  { icon: "zap", title: "Lightning Fast Delivery", description: "Agile methodology ensures rapid iteration and on-time project delivery without compromising quality." },
  { icon: "shield", title: "Enterprise-Grade Security", description: "SOC 2 compliant processes with end-to-end encryption and rigorous security audits at every stage." },
  { icon: "wrench", title: "Scalable Architecture", description: "Future-proof solutions designed to scale effortlessly from startup MVP to millions of users." },
  { icon: "handshake", title: "Dedicated Support", description: "24/7 support with dedicated account managers ensuring seamless communication and rapid issue resolution." },
  { icon: "lightbulb", title: "Innovation First", description: "We stay ahead of technology curves, bringing the latest innovations to solve your business challenges." },
  { icon: "bar-chart", title: "Data-Driven Approach", description: "Every decision backed by analytics and user research, ensuring measurable results and continuous improvement." },
];
```

- [ ] **Step 3: Append new datasets to `src/data/index.ts`**

```ts
// TODO: Replace placeholder testimonials with real client quotes before launch.
export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "RI Software rebuilt our platform from the ground up. Page loads dropped by 60% and our conversion rate climbed within the first month. They felt like part of our team.",
    name: "Sarah Chen",
    role: "VP of Product",
    company: "Northwind Labs",
  },
  {
    quote: "The most communicative agency we've worked with. Clear timelines, no surprises, and a product that genuinely exceeded the spec. We've already signed for phase two.",
    name: "Marcus Hale",
    role: "Founder & CEO",
    company: "Cadence Health",
  },
  {
    quote: "They translated a vague idea into a polished mobile app in ten weeks. The design quality alone won us our seed round. Cannot recommend them enough.",
    name: "Priya Nair",
    role: "Co-Founder",
    company: "Tellora",
  },
];

// TODO: Replace placeholder client names/logos with real ones before launch.
export const CLIENT_LOGOS: ClientLogo[] = [
  { name: "Northwind" },
  { name: "Cadence" },
  { name: "Tellora" },
  { name: "Vertex" },
  { name: "Lumen" },
  { name: "Quanta" },
];

export const PROCESS_STEPS: ProcessStep[] = [
  { step: "01", title: "Discover", description: "We dig into your goals, users, and constraints to define a sharp, shared scope.", icon: "search" },
  { step: "02", title: "Design", description: "We craft the architecture and interface, validating direction with prototypes before a line of production code.", icon: "pen-tool" },
  { step: "03", title: "Build", description: "We ship in tight, transparent sprints with continuous testing and weekly demos.", icon: "code" },
  { step: "04", title: "Launch", description: "We deploy, monitor, and optimize — then support you as you scale.", icon: "rocket" },
];

export const CORE_VALUES: CoreValue[] = [
  { icon: "target", title: "Excellence", description: "We don't settle for 'good enough'. We strive for technical perfection and pixel-perfect design in every project.", gradient: "from-[#6c5ce7] to-[#a29bfe]" },
  { icon: "handshake", title: "Partnership", description: "We view our clients as long-term partners. Your success is our success. We communicate transparently and build trust.", gradient: "from-[#00cec9] to-[#55efc4]" },
  { icon: "rocket", title: "Innovation", description: "Technology evolves rapidly. We constantly learn and adapt, bringing the most advanced solutions to the table.", gradient: "from-[#fd79a8] to-[#fab1a0]" },
];

// TODO: Replace placeholder social URLs with real profiles before launch.
export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Twitter", href: "https://twitter.com", icon: "twitter" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { label: "GitHub", href: "https://github.com", icon: "github" },
  { label: "Dribbble", href: "https://dribbble.com", icon: "dribbble" },
];
```

- [ ] **Step 4: Verify build & lint**

Run: `npm run build`
Expected: FAILS — `page.tsx`, `services/page.tsx`, `about/page.tsx`, `InteractiveServices.tsx` still pass emoji strings / use removed shapes. This is expected; later tasks fix each consumer. To keep commits green, this task's build is allowed to fail ONLY on those known consumers.

Instead, typecheck just the data/types in isolation:
Run: `npx tsc --noEmit`
Expected: errors are limited to consumer files listed above (not to `types/index.ts` or the new data). Confirm no error originates inside `src/types/index.ts` or the new arrays.

- [ ] **Step 5: Commit**

```bash
git add src/types/index.ts src/data/index.ts
git commit -m "feat: add icon-key types, service features, and conversion datasets"
```

---

### Task 3: Reduced-motion support + Eyebrow + SectionHeading primitives

**Files:**
- Modify: `src/components/Animations.tsx`
- Create: `src/components/Eyebrow.tsx`
- Create: `src/components/SectionHeading.tsx`
- Modify: `src/components/index.ts`

**Interfaces:**
- Consumes: framer-motion `useReducedMotion`.
- Produces: `<Eyebrow color?: string className?: string>text</Eyebrow>` — renders `<p>` with `text-sm font-bold uppercase tracking-[0.2em]`, default color `text-[#6c5ce7]`.
- Produces: `<SectionHeading eyebrow eyebrowColor? title subtitle? align?: "center" | "left" className? />`.
- Produces: `FadeIn`, `StaggerContainer`, `StaggerItem` now skip transforms when reduced motion is set.

- [ ] **Step 1: Add reduced-motion to `Animations.tsx`**

In `FadeIn`, import and use `useReducedMotion` from framer-motion; when true, set initial/animate offsets to zero. Replace the `FadeIn` body's `initial`/`whileInView`:

```tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
```

Inside `FadeIn`, after computing `directions`:

```tsx
  const reduce = useReducedMotion();
  const offset = reduce ? { x: 0, y: 0 } : directions[direction];

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: reduce ? 0.2 : 0.7, ease: [0.25, 0.1, 0.25, 1], delay: reduce ? 0 : delay }}
      className={`${fullWidth ? "w-full" : ""} ${className}`}
    >
      {children}
    </motion.div>
  );
```

In `StaggerItem`, gate the `y: 30` offset the same way:

```tsx
export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: reduce ? 0 : 30 },
        visible: { opacity: 1, y: 0, transition: { duration: reduce ? 0.2 : 0.6, ease: [0.25, 0.1, 0.25, 1] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 2: Create `src/components/Eyebrow.tsx`**

```tsx
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
```

- [ ] **Step 3: Create `src/components/SectionHeading.tsx`**

```tsx
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
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`${align === "center" ? "text-center" : ""} ${className}`}>
      <Eyebrow color={eyebrowColor} className="mb-4">{eyebrow}</Eyebrow>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{title}</h2>
      {subtitle && (
        <p className={`text-lg md:text-xl text-[#8888a0] leading-relaxed font-light max-w-3xl ${alignment}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
```

- [ ] **Step 4: Export from `src/components/index.ts`**

```ts
export { default as Eyebrow } from "./Eyebrow";
export { default as SectionHeading } from "./SectionHeading";
```

- [ ] **Step 5: Verify lint (build still blocked by Task 2 consumers)**

Run: `npm run lint`
Expected: no errors in the three new/modified files.

- [ ] **Step 6: Commit**

```bash
git add src/components/Animations.tsx src/components/Eyebrow.tsx src/components/SectionHeading.tsx src/components/index.ts
git commit -m "feat: add reduced-motion support, Eyebrow and SectionHeading primitives"
```

---

### Task 4: Fix InteractiveServices (icons + fluid height + features)

**Files:**
- Modify: `src/components/InteractiveServices.tsx`

**Interfaces:**
- Consumes: `ServiceCard` (now `icon: IconKey`, `features: string[]`), `Icon`/`IconTile` from Task 1.

- [ ] **Step 1: Replace emoji rendering with `Icon` and fix fixed height**

Edit `InteractiveServices.tsx`:
- Add import: `import { Icon } from "./Icon";`
- In the tab button, replace `<div className="text-3xl ...">{service.icon}</div>` with:
  ```tsx
  <div className={`transition-transform duration-300 ${isActive ? "text-[#a29bfe] scale-110" : "text-[#8888a0]"}`}>
    <Icon name={service.icon} className="w-7 h-7" />
  </div>
  ```
- Change the content panel wrapper from fixed height. Replace `className="lg:col-span-7 h-[400px] lg:h-[500px]"` with `className="lg:col-span-7 min-h-[420px] lg:min-h-[480px]"`.
- Replace the big emoji `<div className="text-6xl mb-8 ...">{services[activeIndex].icon}</div>` with:
  ```tsx
  <div className="mb-8 text-[#a29bfe]"><Icon name={services[activeIndex].icon} className="w-14 h-14" /></div>
  ```
- After the description `<p>` and before the "Explore Service" button, add a features list:
  ```tsx
  <ul className="space-y-3 mb-8">
    {services[activeIndex].features.map((f) => (
      <li key={f} className="flex items-center gap-3 text-[#e8e8f0]">
        <Icon name="check" className="w-5 h-5 text-[#00cec9] flex-shrink-0" />
        {f}
      </li>
    ))}
  </ul>
  ```

- [ ] **Step 2: Verify lint**

Run: `npm run lint`
Expected: no errors in `InteractiveServices.tsx`.

- [ ] **Step 3: Commit**

```bash
git add src/components/InteractiveServices.tsx
git commit -m "fix: icons + fluid height + feature list in InteractiveServices"
```

---

### Task 5: Fix Navbar mobile menu overflow + arrow icon

**Files:**
- Modify: `src/components/Navbar.tsx`

- [ ] **Step 1: Fix mobile menu height**

In the mobile menu `motion.div` (the one with `className="md:hidden fixed inset-0 top-20 ..."`):
- Change `animate={{ opacity: 1, height: "100dvh" }}` to `animate={{ opacity: 1, height: "calc(100dvh - 5rem)" }}`.
- Remove `inset-0` from its className (keep `top-0 left-0 right-0` semantics via `left-0 right-0`), replacing `fixed inset-0 top-20` with `fixed top-20 left-0 right-0`.
- In the inner container `className="flex flex-col items-center justify-center h-full gap-2 px-6 -mt-20"`, remove the `-mt-20` (no longer needed since the panel starts below the header): change to `className="flex flex-col items-center justify-center h-full gap-2 px-6"`.

- [ ] **Step 2: Verify lint**

Run: `npm run lint`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/Navbar.tsx
git commit -m "fix: mobile menu height overflow"
```

---

### Task 6: Fix Footer social icons (real lucide links)

**Files:**
- Modify: `src/components/Footer.tsx`

**Interfaces:**
- Consumes: `SOCIAL_LINKS` (Task 2), `Icon` (Task 1).

- [ ] **Step 1: Replace dummy social squares**

- Add imports: `import { SOCIAL_LINKS } from "@/data";` and `import { Icon } from "./Icon";`
- Replace the social links block (the `{["Twitter", "LinkedIn", "GitHub", "Dribbble"].map(...)}`) with:

```tsx
<div className="flex gap-4">
  {SOCIAL_LINKS.map((social) => (
    <a
      key={social.label}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-[#1a1a2e] border border-[#2a2a40] flex items-center justify-center text-[#8888a0] hover:text-white hover:border-[#6c5ce7] hover:bg-[#6c5ce7]/10 transition-all duration-300"
      aria-label={social.label}
    >
      <Icon name={social.icon} className="w-4 h-4" />
    </a>
  ))}
</div>
```

- [ ] **Step 2: Verify lint**

Run: `npm run lint`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "fix: real social icons in footer"
```

---

### Task 7: Wire ContactForm to EmailJS (with safe fallback)

**Files:**
- Modify: `src/components/ContactForm.tsx`
- Create: `.env.local.example`
- Modify: `README.md`

**Interfaces:**
- Consumes: `@emailjs/browser`, `Icon` (Task 1).

- [ ] **Step 1: Rewrite submit handler with EmailJS + validation + error state**

Replace the body of `ContactForm.tsx` with:

```tsx
"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Icon } from "./Icon";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
const EMAILJS_CONFIGURED = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      if (EMAILJS_CONFIGURED) {
        await emailjs.sendForm(SERVICE_ID!, TEMPLATE_ID!, e.currentTarget, { publicKey: PUBLIC_KEY! });
      } else {
        if (process.env.NODE_ENV !== "production") {
          console.warn("EmailJS not configured — simulating success. Set NEXT_PUBLIC_EMAILJS_* env vars.");
        }
        await new Promise((r) => setTimeout(r, 1200));
      }
      setIsSuccess(true);
      formRef.current?.reset();
      setTimeout(() => setIsSuccess(false), 6000);
    } catch (err) {
      console.error(err);
      setError("Something went wrong sending your message. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="glass p-8 md:p-10 rounded-2xl relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#6c5ce7] opacity-20 blur-[60px] pointer-events-none rounded-full" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#00cec9] opacity-20 blur-[60px] pointer-events-none rounded-full" />

      {isSuccess ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center py-12 text-center relative z-10"
        >
          <div className="w-16 h-16 bg-[#00cec9]/20 rounded-full flex items-center justify-center mb-6">
            <Icon name="check" className="w-8 h-8 text-[#00cec9]" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
          <p className="text-[#8888a0]">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
        </motion.div>
      ) : (
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#8888a0] mb-2">Full Name</label>
            <input type="text" id="name" name="name" required
              className="w-full bg-[#1a1a2e]/50 border border-[#2a2a40] rounded-xl px-4 py-3 text-white placeholder-[#8888a0]/50 focus:outline-none focus:border-[#6c5ce7] focus:ring-1 focus:ring-[#6c5ce7] transition-all"
              placeholder="John Doe" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#8888a0] mb-2">Email Address</label>
            <input type="email" id="email" name="email" required
              className="w-full bg-[#1a1a2e]/50 border border-[#2a2a40] rounded-xl px-4 py-3 text-white placeholder-[#8888a0]/50 focus:outline-none focus:border-[#6c5ce7] focus:ring-1 focus:ring-[#6c5ce7] transition-all"
              placeholder="john@example.com" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[#8888a0] mb-2">How can we help?</label>
            <textarea id="message" name="message" required rows={5}
              className="w-full bg-[#1a1a2e]/50 border border-[#2a2a40] rounded-xl px-4 py-3 text-white placeholder-[#8888a0]/50 focus:outline-none focus:border-[#6c5ce7] focus:ring-1 focus:ring-[#6c5ce7] transition-all resize-none"
              placeholder="Tell us about your project..." />
          </div>

          {error && <p className="text-[#fd79a8] text-sm" role="alert">{error}</p>}

          <button type="submit" disabled={isSubmitting}
            className={`w-full py-4 rounded-xl text-white font-semibold flex items-center justify-center gap-2 transition-all ${
              isSubmitting ? "bg-[#6c5ce7]/50 cursor-not-allowed" : "bg-gradient-to-r from-[#6c5ce7] to-[#a29bfe] hover:shadow-lg hover:shadow-[#6c5ce7]/30 hover:-translate-y-0.5"
            }`}>
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              <>Send Message <Icon name="arrow-right" className="w-[18px] h-[18px]" /></>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
```

- [ ] **Step 2: Create `.env.local.example`**

```
# EmailJS — create a free account at https://www.emailjs.com/
# Dashboard → Account → API Keys / Email Services / Email Templates
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

The EmailJS template must include variables matching the form field `name`s: `name`, `email`, `message`.

- [ ] **Step 3: Document in `README.md`**

Append a section:

```markdown
## Contact form (EmailJS)

The contact form uses [EmailJS](https://www.emailjs.com/). Copy `.env.local.example`
to `.env.local` and fill in:

- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

Your EmailJS template should reference `{{name}}`, `{{email}}`, and `{{message}}`.
Without these vars the form falls back to a simulated success (useful in development).
```

- [ ] **Step 4: Verify lint**

Run: `npm run lint`
Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add src/components/ContactForm.tsx .env.local.example README.md
git commit -m "feat: wire contact form to EmailJS with safe fallback"
```

---

### Task 8: New section components (LogoWall, Process, Testimonials)

**Files:**
- Create: `src/components/LogoWall.tsx`
- Create: `src/components/Process.tsx`
- Create: `src/components/Testimonials.tsx`
- Modify: `src/components/index.ts`

**Interfaces:**
- Consumes: `CLIENT_LOGOS`, `PROCESS_STEPS`, `TESTIMONIALS` (Task 2); `Icon`, `IconTile` (Task 1); `Section`, `FadeIn`, `StaggerContainer`, `StaggerItem`, `SectionHeading` (Tasks 3 + existing).
- Produces: default-exported `LogoWall`, `Process`, `Testimonials` components (no props).

- [ ] **Step 1: Create `src/components/LogoWall.tsx`**

```tsx
import { CLIENT_LOGOS } from "@/data";

export default function LogoWall() {
  return (
    <section className="py-16 border-b border-[#2a2a40] bg-[#050510]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-[#8888a0] mb-10">
          Trusted by teams building what&apos;s next
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {CLIENT_LOGOS.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center">
              <span className="text-2xl font-bold tracking-tight text-[#8888a0]/60 hover:text-white transition-colors duration-300 select-none">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create `src/components/Process.tsx`**

```tsx
import { Section, FadeIn, StaggerContainer, StaggerItem, SectionHeading } from "@/components";
import { Icon } from "./Icon";
import { PROCESS_STEPS } from "@/data";

export default function Process() {
  return (
    <Section className="bg-[#050510] py-24 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="mb-20">
          <SectionHeading
            eyebrow="How We Work"
            eyebrowColor="text-[#00cec9]"
            title="A Process Built for Results"
            subtitle="A clear, transparent path from first conversation to launch — so you always know what's happening and why."
          />
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS_STEPS.map((s) => (
            <StaggerItem key={s.step}>
              <div className="relative h-full glass rounded-3xl p-8 group hover:-translate-y-2 transition-transform duration-500">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#1a1a2e] border border-[#2a2a40] flex items-center justify-center text-[#a29bfe] group-hover:border-[#6c5ce7] transition-colors duration-300">
                    <Icon name={s.icon} className="w-6 h-6" />
                  </div>
                  <span className="text-5xl font-extrabold text-white/5 group-hover:text-[#6c5ce7]/20 transition-colors duration-300">{s.step}</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{s.title}</h4>
                <p className="text-[#8888a0] leading-relaxed">{s.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  );
}
```

- [ ] **Step 3: Create `src/components/Testimonials.tsx`**

```tsx
import { Section, FadeIn, StaggerContainer, StaggerItem, SectionHeading } from "@/components";
import { TESTIMONIALS } from "@/data";

export default function Testimonials() {
  return (
    <Section className="bg-[#0d0d1a] border-y border-[#2a2a40] py-24 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="mb-20">
          <SectionHeading
            eyebrow="Testimonials"
            eyebrowColor="text-[#fd79a8]"
            title="What Our Clients Say"
            subtitle="We measure our success by the growth of the businesses we partner with."
          />
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <StaggerItem key={t.name}>
              <figure className="h-full glass rounded-3xl p-8 flex flex-col">
                <div className="text-6xl leading-none text-[#6c5ce7]/40 font-serif mb-2" aria-hidden="true">&ldquo;</div>
                <blockquote className="text-[#e8e8f0] text-lg leading-relaxed mb-8 flex-grow">
                  {t.quote}
                </blockquote>
                <figcaption className="flex items-center gap-4 border-t border-[#2a2a40] pt-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6c5ce7] to-[#00cec9] flex items-center justify-center text-white font-bold">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-white font-bold">{t.name}</div>
                    <div className="text-[#8888a0] text-sm">{t.role}, {t.company}</div>
                  </div>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  );
}
```

- [ ] **Step 4: Export from `src/components/index.ts`**

```ts
export { default as LogoWall } from "./LogoWall";
export { default as Process } from "./Process";
export { default as Testimonials } from "./Testimonials";
```

- [ ] **Step 5: Verify lint**

Run: `npm run lint`
Expected: no errors in the three new files.

- [ ] **Step 6: Commit**

```bash
git add src/components/LogoWall.tsx src/components/Process.tsx src/components/Testimonials.tsx src/components/index.ts
git commit -m "feat: add LogoWall, Process, and Testimonials sections"
```

---

### Task 9: Home page — icons, spacing, new sections, mid-page CTA

**Files:**
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: `IconTile`, `Icon` (Task 1); `LogoWall`, `Process`, `Testimonials`, `Eyebrow`, `SectionHeading` (Tasks 3, 8); existing data.

- [ ] **Step 1: Update imports**

```tsx
import Link from "next/link";
import { FadeIn, Section, StaggerContainer, StaggerItem, InteractiveServices, LogoWall, Process, Testimonials, IconTile, Icon } from "@/components";
import { SERVICES, PORTFOLIO_ITEMS, STATS, WHY_CHOOSE_US, TEAM } from "@/data";
```

- [ ] **Step 2: Calm the hero spacing**

Change the hero `<section>` opening tag from
`className="relative min-h-screen flex items-center pt-48 pb-32 overflow-hidden"`
to
`className="relative min-h-screen flex items-center pt-32 md:pt-40 pb-24 overflow-hidden"`.

- [ ] **Step 3: Insert `<LogoWall />` after the Stats section**

Immediately after the closing `</Section>` of the Stats block (the one containing `STATS.map`), add:

```tsx
<LogoWall />
```

- [ ] **Step 4: Fix the stray invalid class in the Services header**

In the Services `<Section>` heading block, replace the `<h2 ... letter-spacing-[0.2em]>Our Expertise</h2>` line with:

```tsx
<h2 className="text-[#6c5ce7] font-bold tracking-[0.2em] uppercase text-sm mb-4">Our Expertise</h2>
```

- [ ] **Step 5: Replace Why-Choose-Us emoji tiles with `IconTile`**

In the `WHY_CHOOSE_US.slice(0, 4).map(...)` block, replace the icon `<div>` (the one containing `{item.icon}`) with:

```tsx
<IconTile name={item.icon} className="group-hover:scale-110 group-hover:border-[#6c5ce7]" />
```

- [ ] **Step 6: Insert `<Process />` after the Why-Choose-Us section**

After the closing `</Section>` of the Why-Choose-Us block, add:

```tsx
<Process />
```

- [ ] **Step 7: Fix Team avatars (already SVG — leave) and Portfolio stagger offsets**

In the Portfolio preview `PORTFOLIO_ITEMS.slice(0, 3).map(...)`, change the `StaggerItem` className expression
`index === 1 ? "md:translate-y-12" : index === 2 ? "lg:translate-y-24" : ""`
to a balanced version that doesn't trail whitespace:
`index === 1 ? "md:translate-y-8" : ""`.

- [ ] **Step 8: Insert `<Testimonials />` before the final CTA section**

Immediately before the final CTA `<Section>` (the gradient "Ready to Build Something Amazing?" block), add:

```tsx
<Testimonials />
```

- [ ] **Step 9: Add a mid-page contextual CTA inside the Portfolio preview section**

At the end of the Portfolio preview `<Section>`, after the `</StaggerContainer>` and before the section closes, add:

```tsx
<FadeIn className="mt-16 text-center">
  <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#6c5ce7] to-[#00cec9] text-white font-semibold hover:shadow-[0_0_40px_rgba(108,92,231,0.4)] hover:-translate-y-1 transition-all duration-300">
    Start your project
    <Icon name="arrow-right" className="w-5 h-5" />
  </Link>
</FadeIn>
```

- [ ] **Step 10: Verify build & lint**

Run: `npm run build`
Expected: home page compiles. (Other pages may still fail if not yet migrated — Tasks 10-12 fix them. If build fails, confirm the only errors are in `about/services/contact` pages.)
Run: `npm run lint`
Expected: no errors in `page.tsx`.

- [ ] **Step 11: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: home page icons, spacing, logo wall, process, testimonials, CTA"
```

---

### Task 10: About page — icons + remove external image

**Files:**
- Modify: `src/app/about/page.tsx`

**Interfaces:**
- Consumes: `CORE_VALUES` (Task 2), `IconTile` (Task 1), `SectionHeading` (Task 3).

- [ ] **Step 1: Update imports and use shared data**

```tsx
import { PageHeader, Section, FadeIn, StaggerContainer, StaggerItem, IconTile } from "@/components";
import { CORE_VALUES } from "@/data";
```

- [ ] **Step 2: Replace the inline core-values array with `CORE_VALUES` and icon tiles**

Replace the `[{ icon: "🎯", ... }].map((value, i) => ...)` block so it maps over `CORE_VALUES` and renders the icon via `IconTile`. Replace the value card's emoji `<div className="text-5xl mb-8 ...">{value.icon}</div>` with:

```tsx
<IconTile name={value.icon} className="mb-8 w-16 h-16" />
```

and change `value.color` references to `value.gradient` (the new field name).

- [ ] **Step 3: Replace external Unsplash image with on-brand CSS visual**

In the Mission section, replace the `<div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/...')] ...">` element with an on-brand gradient/grid visual:

```tsx
<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(108,92,231,0.25),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(0,206,201,0.2),transparent_55%)]" />
<div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:40px_40px]" />
```

(Keep the existing dark gradient overlay and the Steve Jobs quote card below it.)

- [ ] **Step 4: Verify lint**

Run: `npm run lint`
Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add src/app/about/page.tsx
git commit -m "feat: about page icon tiles + on-brand mission visual"
```

---

### Task 11: Services page — icons, real features, metadata fix

**Files:**
- Modify: `src/app/services/page.tsx`

**Interfaces:**
- Consumes: `SERVICES` (now with `features` + icon key), `IconTile`/`Icon` (Task 1).

- [ ] **Step 1: Fix metadata brand name**

Change `title: "Services | NovaLabs Agency"` to `title: "Services | RI Software Agency"`.

- [ ] **Step 2: Update imports**

```tsx
import { PageHeader, Section, FadeIn } from "@/components";
import { Icon, IconTile } from "@/components";
import { SERVICES } from "@/data";
```

- [ ] **Step 3: Replace giant emoji visual with icon**

Replace the `<div className="relative h-full w-full glass rounded-[40px] border border-white/10 flex items-center justify-center text-9xl">{service.icon}</div>` with:

```tsx
<div className="relative h-full w-full glass rounded-[40px] border border-white/10 flex items-center justify-center text-[#a29bfe]">
  <Icon name={service.icon} className="w-28 h-28" />
</div>
```

- [ ] **Step 4: Replace the three repeated bullets with real features**

Replace the `{[1, 2, 3].map((_, i) => (...))}` list with:

```tsx
{service.features.map((feature) => (
  <li key={feature} className="flex items-center gap-3 text-[#e8e8f0]">
    <span className="w-6 h-6 rounded-full bg-[#6c5ce7]/20 flex items-center justify-center text-[#6c5ce7] flex-shrink-0">
      <Icon name="check" className="w-4 h-4" />
    </span>
    {feature}
  </li>
))}
```

- [ ] **Step 5: Verify lint**

Run: `npm run lint`
Expected: no errors. (`StaggerContainer`/`StaggerItem` import removed if unused — confirm no unused-import lint error.)

- [ ] **Step 6: Commit**

```bash
git add src/app/services/page.tsx
git commit -m "fix: services page icons, real features, brand name"
```

---

### Task 12: Portfolio + Contact pages — metadata fix + founder avatars

**Files:**
- Modify: `src/app/portfolio/page.tsx`
- Modify: `src/app/contact/page.tsx`

**Interfaces:**
- Consumes: `Icon` (Task 1), `TEAM` data.

- [ ] **Step 1: Fix portfolio metadata brand name**

In `src/app/portfolio/page.tsx`, change `title: "Portfolio | NovaLabs Agency"` to `title: "Portfolio | RI Software Agency"`.

- [ ] **Step 2: Fix contact founder avatars (the `{member.image}` bug)**

In `src/app/contact/page.tsx`, replace the avatar `<div>` that renders `{member.image}`:

```tsx
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6c5ce7] to-[#00cec9] flex items-center justify-center text-white text-xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
  {member.name.split(" ").map((n) => n[0]).join("")}
</div>
```

- [ ] **Step 3: Replace the two emoji general-inquiry icons (✉️ / 📞) with lucide**

Add `import { Icon } from "@/components";` and replace the `✉️` tile content with `<Icon name="mail" className="w-6 h-6" />` and the `📞` tile content with `<Icon name="phone" className="w-6 h-6" />` (keep the surrounding colored tile divs).

- [ ] **Step 4: Verify build & lint (full site should now build)**

Run: `npm run build`
Expected: build succeeds for ALL pages now.
Run: `npm run lint`
Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add src/app/portfolio/page.tsx src/app/contact/page.tsx
git commit -m "fix: portfolio metadata + contact founder avatars and icons"
```

---

### Task 13: Final verification pass

**Files:** none (verification + any small fixes)

- [ ] **Step 1: Full build**

Run: `npm run build`
Expected: succeeds, no type errors, all 5 routes compile.

- [ ] **Step 2: Lint**

Run: `npm run lint`
Expected: clean.

- [ ] **Step 3: Grep for regressions**

Run: `git grep -n "NovaLabs"` → Expected: no matches.
Run: `git grep -nE "letter-spacing-\[" -- "src"` → Expected: no matches.
Search for leftover emoji in rendered components (services/about/portfolio/contact/data) — Expected: none in JSX text or data `icon` fields.

- [ ] **Step 4: Manual responsive spot-check (dev server)**

Run: `npm run dev`, open `http://localhost:3000`, and check at widths ~375px, ~768px, ~1280px:
- Hero: no doubled top gap, no horizontal scroll.
- Mobile nav: opens, fills below header, no overflow past viewport bottom.
- Services tabs: switching tabs never clips description/features.
- Process + Testimonials: cards equal height, readable on mobile.
- Footer: real social icons, links open in new tab.
- Contact: founder avatars show initials (not "geometry-1").

- [ ] **Step 5: Final commit (if any tweaks made)**

```bash
git add -A
git commit -m "chore: final verification fixes for frontend polish pass"
```

---

## Self-Review

**Spec coverage:** B1–B9 → Tasks 4,5,6,7,9,11,12; design-system foundation → Tasks 1,3; per-page polish → Tasks 9–12; new sections + data → Tasks 2,8,9; lead capture → Task 7; responsive/a11y → Tasks 3,4,5,13; verification → Task 13. All §4–§10 spec items mapped. Note that globals.css and next.config.ts modifications referenced in §12 are not covered by the current task assignments and should be completed separately or added as pre-implementation setup steps.

**Placeholder scan:** No "TBD"/"implement later"; all code shown inline; placeholder *content* (testimonials/logos/socials) is intentional and `TODO`-marked per spec.

**Type consistency:** `IconKey` defined in Task 1, consumed in Task 2 types and all components. `ServiceCard.features` defined Task 2, consumed Tasks 4 & 11. `CoreValue.gradient` (not `.color`) defined Task 2, consumed Task 10. `SOCIAL_LINKS`/`PROCESS_STEPS`/`TESTIMONIALS`/`CLIENT_LOGOS`/`CORE_VALUES` defined Task 2, consumed Tasks 6, 8, 10. `Icon`/`IconTile` signatures consistent across all consumers.
