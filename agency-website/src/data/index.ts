import type {
  NavLink, ServiceCard, PortfolioItem, Stat, WhyChooseUsItem, TeamMember,
  Testimonial, ClientLogo, ProcessStep, SocialLink, CoreValue,
} from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Work", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES: ServiceCard[] = [
  {
    icon: "globe",
    title: "Web platforms",
    description:
      "Web apps and marketing sites that stay fast as they grow. We build on Next.js and React, wire up the CMS and APIs your team actually uses, and hand over code you can maintain.",
    features: ["Next.js & React, front to back", "Headless CMS + API integration", "Fast, accessible, SEO-ready"],
    gradient: "from-accent to-accent-warm",
  },
  {
    icon: "smartphone",
    title: "Mobile apps",
    description:
      "iOS and Android from one codebase, without the cross-platform compromises. We ship to the stores and stay on through the update cycle.",
    features: ["One codebase, both platforms", "React Native & Flutter", "Store submission + release support"],
    gradient: "from-accent to-accent-warm",
  },
  {
    icon: "bot",
    title: "AI automation",
    description:
      "Practical AI that removes real work — support triage, document processing, internal copilots. We connect models to your data and put guardrails around them.",
    features: ["LLM features on your own data", "Back-office & workflow automation", "Evaluation and guardrails"],
    gradient: "from-accent to-accent-warm",
  },
  {
    icon: "palette",
    title: "Product & design",
    description:
      "Product and interface design that ships, not just Figma files. We prototype the risky flows first, then design a system your engineers can build straight from.",
    features: ["Product & UX design", "Design systems in code", "Prototypes for the hard flows"],
    gradient: "from-accent to-accent-warm",
  },
];

// NOTE: Representative builds. Swap in real client names and outcomes as
// case studies are approved for publication. Outcomes describe what was
// built — no fabricated ROI figures.
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    title: "FinFlow",
    category: "Web platform",
    year: "2024",
    description:
      "A fintech dashboard for real-time analytics, portfolio tracking, and automated reporting used daily by an operations team.",
    outcome: "Real-time dashboard consolidating 12 data sources into one view.",
    image: "/portfolio/finflow.jpg",
    tags: ["React", "TypeScript", "D3", "Node.js"],
    gradient: "from-accent to-accent-warm",
  },
  {
    id: 2,
    title: "MediCare",
    category: "Mobile app",
    year: "2024",
    description:
      "A healthcare companion app for telemedicine visits, prescription management, and follow-up reminders on iOS and Android.",
    outcome: "One codebase shipped to both app stores in ten weeks.",
    image: "/portfolio/medicare.jpg",
    tags: ["React Native", "Python", "Firebase"],
    gradient: "from-accent to-accent-warm",
  },
  {
    id: 3,
    title: "EcoTrack",
    category: "AI automation",
    year: "2023",
    description:
      "A sustainability platform that pulls emissions data from spreadsheets and APIs and drafts ESG reports for review.",
    outcome: "Cut a week of manual report assembly down to an afternoon.",
    image: "/portfolio/ecotrack.jpg",
    tags: ["Next.js", "Python", "PostgreSQL", "AWS"],
    gradient: "from-accent to-accent-warm",
  },
  {
    id: 4,
    title: "ShopVerse",
    category: "Web platform",
    year: "2023",
    description:
      "A headless e-commerce storefront with product previews, guided search, and a checkout that holds up under load.",
    outcome: "Sub-second product pages on a catalog of 40k SKUs.",
    image: "/portfolio/shopverse.jpg",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    gradient: "from-accent to-accent-warm",
  },
  {
    id: 5,
    title: "TaskPilot",
    category: "Mobile app",
    year: "2022",
    description:
      "A project management app with task prioritisation, team collaboration, and offline-first sync for field teams.",
    outcome: "Offline-first sync so field crews keep working without signal.",
    image: "/portfolio/taskpilot.jpg",
    tags: ["Flutter", "Dart", "Firebase"],
    gradient: "from-accent to-accent-warm",
  },
  {
    id: 6,
    title: "DataForge",
    category: "AI automation",
    year: "2022",
    description:
      "An internal analytics tool that answers plain-English questions against a company's own warehouse and cites its sources.",
    outcome: "Natural-language queries over a warehouse, with source citations.",
    image: "/portfolio/dataforge.jpg",
    tags: ["Python", "React", "OpenAI", "GCP"],
    gradient: "from-accent to-accent-warm",
  },
];

// Operational facts, not vanity metrics — every line is true regardless of
// project count. Replace with real headline numbers once they're verifiable.
export const STATS: Stat[] = [
  { value: "2", label: "Founders on every project" },
  { value: "Weekly", label: "Working demos, not status decks" },
  { value: "Fixed", label: "Scope and price, agreed up front" },
  { value: "Yours", label: "Code and IP, kept at handover" },
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  { icon: "user", title: "You talk to the people building it", description: "No account managers relaying messages. The founders who scope your project are the ones writing the code and answering your questions." },
  { icon: "code", title: "Weekly demos, working software", description: "Every week you get something running to click through — not a status report. Course corrections happen early, while they're still cheap." },
  { icon: "target", title: "Fixed scope, no surprise invoices", description: "We agree the scope and the price before we start. If something needs to change, you hear what it costs before we touch it." },
  { icon: "wrench", title: "Built to hand over", description: "We write code your team can read and extend, document the parts that matter, and make sure you own all of it at the end." },
  { icon: "check", title: "We'll tell you no", description: "If a feature won't earn its keep, we say so. A smaller, sharper product beats a bloated one every time." },
  { icon: "zap", title: "We stay after launch", description: "Launch is the start, not the finish. We monitor, fix, and keep improving once real users show up." },
];

export const TEAM: TeamMember[] = [
  {
    name: "Danish Salman",
    role: "Founding Partner",
    focus: "Engineering & architecture",
    bio: "Leads how things get built — the architecture, the trade-offs, and the code review. Happiest when a hard system problem turns simple.",
    image: "geometry-1",
  },
  {
    name: "Ahmed Saleem",
    role: "Founding Partner",
    focus: "Product & design",
    bio: "Owns the shape of the product — the flows, the interface, and the details users feel but rarely notice. Sketches before he specs.",
    image: "geometry-2",
  },
];

// TODO: Replace placeholder testimonials with real, attributed client quotes
// before launch. Until then the site is designed to hold one quote gracefully.
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote: "They rebuilt our platform from the ground up. Page loads dropped by more than half, and it was the first time an agency felt like part of our own team.",
    name: "Sarah Chen",
    role: "VP of Product",
    company: "Northwind Labs",
  },
  {
    id: "t2",
    quote: "Clear timelines, no surprises, and a product that beat the spec. We signed for a second phase before the first one shipped.",
    name: "Marcus Hale",
    role: "Founder & CEO",
    company: "Cadence Health",
  },
  {
    id: "t3",
    quote: "They turned a rough idea into a polished app in ten weeks. The design quality alone helped us close our seed round.",
    name: "Priya Nair",
    role: "Co-Founder",
    company: "Tellora",
  },
];

// Sectors we build for — honest positioning, not fabricated client logos.
export const SECTORS: string[] = [
  "Fintech",
  "Healthcare",
  "E-commerce",
  "SaaS",
  "Logistics",
  "Local business",
];

// Tools we reach for. Real capability, safe to show.
export const TECH_STACK: string[] = [
  "TypeScript", "Next.js", "React", "React Native", "Node.js",
  "Python", "PostgreSQL", "AWS", "Vercel", "OpenAI",
];

// Kept for compatibility; the site now uses SECTORS instead of fake logos.
export const CLIENT_LOGOS: ClientLogo[] = [
  { name: "Northwind" },
  { name: "Cadence" },
  { name: "Tellora" },
  { name: "Vertex" },
  { name: "Lumen" },
  { name: "Quanta" },
];

export const PROCESS_STEPS: ProcessStep[] = [
  { step: "01", title: "Discover", description: "We dig into your goals, users, and constraints until the scope is sharp and we both agree on what we're building.", icon: "search" },
  { step: "02", title: "Design", description: "We prototype the architecture and the interface, testing the risky decisions before a line of production code is written.", icon: "pen-tool" },
  { step: "03", title: "Build", description: "We ship in tight sprints with continuous testing and a working demo every week, so nothing drifts off course.", icon: "code" },
  { step: "04", title: "Launch & support", description: "We deploy, watch how real users behave, and keep fixing and improving once you're live.", icon: "rocket" },
];

export const CORE_VALUES: CoreValue[] = [
  { icon: "target", title: "Do less, better", description: "We'd rather ship a handful of things that genuinely work than a long list that sort of does. Focus is a feature.", gradient: "from-accent to-accent-warm" },
  { icon: "handshake", title: "Tell the truth", description: "About timelines, trade-offs, and the occasional mistake. You'll always know where your project really stands.", gradient: "from-accent to-accent-warm" },
  { icon: "rocket", title: "Own the outcome", description: "We're not finished when the code merges. We're finished when it works for the people who use it.", gradient: "from-accent to-accent-warm" },
];

// TODO: Replace placeholder social URLs with real profiles before launch.
export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Twitter", href: "https://twitter.com", icon: "twitter" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { label: "GitHub", href: "https://github.com", icon: "github" },
  { label: "Dribbble", href: "https://dribbble.com", icon: "dribbble" },
];
