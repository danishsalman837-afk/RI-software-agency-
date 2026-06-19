# RI Software Agency — Frontend Polish & Conversion Pass

**Date:** 2026-06-19
**Status:** Approved design, pending spec review
**Owner:** Frontend

## 1. Goal

Make the existing RI Software agency website look professional and polished, fix the
broken/incorrect CSS, and restructure for higher visitor retention and lead conversion —
**without** changing the brand identity or overall layout the owner already likes.

Three problems to solve (owner-confirmed):
1. **Broken layout/spacing** — inconsistent vertical rhythm, doubled padding, clipping.
2. **Generic / "AI-made" feel** — emoji icons, dummy placeholder visuals, unfinished elements.
3. **Mobile/responsive issues** — overflow and clipping on small screens.

Plus: add conversion sections (logos, testimonials, process), strengthen CTAs, and wire
real lead capture.

## 2. Constraints & Non-Goals

**Keep:**
- Dark-purple identity: `#6c5ce7` / `#a29bfe` / `#00cec9` / `#fd79a8` on `#050510` / `#0d0d1a`.
- Inter font, Tailwind v4 (`@theme inline`), Next.js 16 App Router, framer-motion.
- Existing page set (Home, About, Services, Portfolio, Contact) and overall section order.
- All currently existing sections (nothing removed).

**Non-goals:**
- No component-library migration (no shadcn/Radix rebuild).
- No backend/CMS. Content stays in `src/data/index.ts`.
- No new brand colors or font swap.

**New dependency:** `lucide-react` (icons).

## 3. Decisions (owner-confirmed)

- Icons: **lucide-react**, replacing every emoji sitewide.
- Social proof: **realistic placeholders**, clearly marked `TODO` for owner to replace.
- Contact form: **wire EmailJS** via env vars; graceful fallback when keys absent.

## 4. Concrete Bugs to Fix

| # | File / location | Problem | Fix |
|---|---|---|---|
| B1 | `src/app/contact/page.tsx:37` | Renders `{member.image}` → prints literal text `"geometry-1"`/`"geometry-2"` inside founder avatars | Render initials or a lucide icon; stop printing the image-key string |
| B2 | `src/app/services/page.tsx:6` | Metadata title says "NovaLabs Agency" | "RI Software Agency" |
| B3 | `src/app/portfolio/page.tsx:6` | Metadata title says "NovaLabs Agency" | "RI Software Agency" |
| B4 | `src/app/page.tsx:93` | `letter-spacing-[0.2em]` is not a valid Tailwind class (no-op) | `tracking-[0.2em]` |
| B5 | `src/components/Footer.tsx:40` | Social icons are dummy grey squares (`<div class="w-4 h-4 bg-current">`) | Real lucide social icons linking to `SOCIAL_LINKS` data |
| B6 | `src/components/Navbar.tsx:132` | Mobile menu `top-20` + `animate height:100dvh` overflows viewport by header height | Use `top-20` with `height: calc(100dvh - 5rem)` (or `inset-0` overlay sized correctly) |
| B7 | `src/components/InteractiveServices.tsx:53` | Fixed `h-[400px] lg:h-[500px]` content panel can clip text on small screens | Use `min-h-*` instead of fixed `h-*`; allow growth |
| B8 | `src/components/ContactForm.tsx:16` | Submit is simulated `setTimeout`, never sends | Wire EmailJS (see §8) |
| B9 | Dead links | Footer social `href="#"`, portfolio cards → generic `/portfolio` | Social → `SOCIAL_LINKS`; portfolio cards remain internal links (no detail pages yet) but use real `aria-label`s |

## 5. Design-System Foundation

Add a thin, consistent layer so polish is applied uniformly rather than ad-hoc per page.

**5.1 Spacing rhythm**
- Standardize section vertical padding. Default section: `py-20 md:py-28`. Hero handled
  separately so it doesn't stack with the global `main pt-20`.
- Remove doubled hero padding: hero currently `pt-48 pb-32` on top of `main pt-20`. Reduce
  hero to a single intentional top offset.
- Replace the `py-32` / `py-40` / `py-20` mix with the standard scale.

**5.2 Typography scale (applied consistently)**
- Eyebrow: `text-sm font-bold uppercase tracking-[0.2em]` + section accent color.
- Section heading (h3): `text-4xl md:text-5xl lg:text-6xl font-bold`.
- Body lead: `text-lg md:text-xl text-[#8888a0] leading-relaxed`.
- Hero h1: `text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05]`.

**5.3 Shared primitives (in `src/components/`)**
- `Eyebrow` — colored uppercase label used by every section header.
- `SectionHeading` — eyebrow + title + optional subtitle, centered or left variants.
- `Icon` — wrapper that renders a lucide icon inside a gradient-tinted rounded tile
  (consistent size/treatment), used by services, why-choose, values, process.

**5.4 Motion**
- Respect `prefers-reduced-motion`: gate framer-motion transitions; provide a
  `useReducedMotion` check in `Animations.tsx` so all FadeIn/Stagger become instant when set.
- Keep existing easing; trim any excessive durations.

## 6. Per-Page Changes

**Home (`src/app/page.tsx`)**
- Calmer hero spacing (B-fix), keep hero graphic + code-block visual.
- Services, Why-Choose cards use `Icon` tiles (lucide) instead of emoji.
- Portfolio preview: replace `md:translate-y-12 / lg:translate-y-24` offset hack with
  controlled, balanced offsets that don't leave large trailing whitespace; equalize heights.
- New sections inserted (see §7): Logo wall (after Stats), Process (after Why-Choose),
  Testimonials (before final CTA), plus one mid-page contextual CTA.

**About (`src/app/about/page.tsx`)**
- Core-values emoji → `Icon` tiles.
- Replace the single external Unsplash image (`images.unsplash.com…`) with an on-brand
  CSS/SVG visual for consistency and to avoid an external network dependency.

**Services (`src/app/services/page.tsx`)**
- Replace `text-9xl` emoji blocks with icon-led visuals.
- Replace the three repeated "Custom strategy & implementation" bullets with real
  per-service `features[]` from data.
- Metadata fix (B2).

**Portfolio (`src/app/portfolio/page.tsx`)**
- Keep SVG/gradient mocks; normalize card heights and the `md:mt-24` offset for balance.
- Metadata fix (B3).

**Contact (`src/app/contact/page.tsx`)**
- Founder avatars fixed (B1): initials or lucide `User` icon.
- Wired form (B8).

## 7. New Sections & Data

All new content lives in `src/data/index.ts` with types in `src/types/index.ts`.

**7.1 Client logos** (`CLIENT_LOGOS`)
- "Trusted by" strip after Stats. 5–6 placeholder wordmark logos (styled text or simple
  SVG), each clearly `TODO`. Muted, grayscale-ish, subtle.

**7.2 Testimonials** (`TESTIMONIALS`)
- 3 placeholder quotes, each `{ quote, name, role, company }`, marked `TODO`.
- Card layout consistent with `glass` style; placed before the final CTA.

**7.3 Process** (`PROCESS_STEPS`)
- 4 steps: Discover → Design → Build → Launch. Each `{ step, title, description, icon }`.
- Horizontal stepper on desktop, stacked on mobile, with lucide icons + connecting line.

**7.4 Per-service features** (extend `ServiceCard`)
- Add `features: string[]` (3 each) so Services page bullets are real.

**7.5 Icons in data**
- Replace emoji `icon: string` fields with a stable icon **key** (e.g. `"globe"`,
  `"smartphone"`, `"bot"`, `"palette"`). A small `iconMap` in the `Icon` component maps keys →
  lucide components, keeping `data` free of JSX.

**7.6 Social links** (`SOCIAL_LINKS`)
- `{ label, href, icon }[]` for footer; placeholder URLs marked `TODO`.

**Type additions:** `Testimonial`, `ClientLogo`, `ProcessStep`, `SocialLink`; extend
`ServiceCard` with `features` and change `icon` semantics to an icon key.

## 8. Lead Capture (EmailJS)

`src/components/ContactForm.tsx`:
- Use `@emailjs/browser` `sendForm`/`send`.
- Read config from env: `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`,
  `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`.
- Behavior:
  - If all three env vars present → send for real; show real success/error states.
  - If any missing (dev / not yet configured) → fall back to the current simulated success
    so the form never hard-errors. Log a dev-only console notice.
- Add client-side validation (required, email format), disable button while sending,
  show error message on failure with retry.
- Document the env vars in `README.md` and add `.env.local.example`.

## 9. Responsive / Accessibility

- Verify no horizontal overflow at 360px, 768px, 1280px.
- Fluid heights on interactive panels (B7); mobile menu height fix (B6).
- All icon-only buttons/links keep `aria-label` / `sr-only` text.
- Color-contrast: keep `#8888a0` body on dark — acceptable; ensure CTA text passes.
- `prefers-reduced-motion` honored (§5.4).

## 10. Verification

- `npm run build` passes.
- `npm run lint` clean.
- Manual responsive spot-check at mobile/tablet/desktop for: hero, services tabs, portfolio
  grid, process stepper, testimonials, footer, mobile nav.
- Confirm no emoji remain in rendered UI; confirm founder avatars render correctly;
  confirm "NovaLabs" gone.

## 11. Out of Scope / Flagged

- Stats are inflated round numbers (`150+`, `50+`, `5+`, `25+`). Kept as-is; owner should set
  honest figures before launch.
- No portfolio case-study detail pages (cards link to `/portfolio`).
- Real testimonial/logo/social content to be supplied by owner (placeholders marked `TODO`).

## 12. File Touch List

- `package.json` — add `lucide-react`.
- `src/app/globals.css` — spacing/type tokens, reduced-motion, minor utilities.
- `src/types/index.ts` — new + extended types.
- `src/data/index.ts` — new datasets, icon keys, features, social links.
- `src/components/Animations.tsx` — reduced-motion; add `Eyebrow`, `SectionHeading`.
- `src/components/Icon.tsx` *(new)* — lucide icon tile + `iconMap`.
- `src/components/Navbar.tsx` — mobile menu fix.
- `src/components/Footer.tsx` — real social icons.
- `src/components/InteractiveServices.tsx` — fluid height, icons.
- `src/components/ContactForm.tsx` — EmailJS wiring + validation.
- `src/components/index.ts` — export new components.
- `src/components/Process.tsx`, `Testimonials.tsx`, `LogoWall.tsx` *(new)*.
- `src/app/page.tsx`, `about/page.tsx`, `services/page.tsx`, `portfolio/page.tsx`,
  `contact/page.tsx` — apply polish + insert new sections.
- `.env.local.example` *(new)*, `README.md` — EmailJS docs.
