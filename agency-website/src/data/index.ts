import type {
  NavLink, ServiceCard, PortfolioItem, Stat, WhyChooseUsItem, TeamMember,
  Testimonial, ProcessStep, SocialLink, IndustryLabel,
} from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Work", href: "/#work" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Lab", href: "/#lab" },
  { label: "Contact", href: "/#contact" },
];

export const STATS: Stat[] = [
  { value: "5 YRS", label: "RECORD OF SHIPPED PLATFORMS" },
  { value: "100%", label: "PROPRIETARY IP HANDOVER" },
  { value: "0.0", label: "ZERO MANAGEMENT MIDDLE-MEN" },
];

export const INDUSTRIES: IndustryLabel[] = [
  { name: "FINTECH" },
  { name: "HEALTHCARE" },
  { name: "E-COMMERCE" },
  { name: "SAAS" },
  { name: "LOGISTICS" },
  { name: "ENTERPRISE CORE" },
];

export const SERVICES: ServiceCard[] = [
  {
    icon: "globe",
    number: "01",
    title: "Web Architectures",
    description: "High-performance React and Next.js platforms optimized for sub-100ms LCP, secure state management, and enterprise API integrations.",
    features: [
      "Next.js App Router & SSR optimization",
      "Real-time state sync & WebSocket endpoints",
      "Dynamic data grids & visualization layers",
      "Edge middleware integration & static caching"
    ],
    stack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"]
  },
  {
    icon: "smartphone",
    number: "02",
    title: "Native Mobile",
    description: "Cross-platform mobile client engines with near-native performance metrics, local storage syncing, and reliable push layers.",
    features: [
      "React Native & Expo custom engines",
      "Offline-first sync database integrations",
      "Device biometric authentication frameworks",
      "App Store & Google Play distribution automation"
    ],
    stack: ["React Native", "Expo", "SQLite", "Firebase", "Zustand", "Push APIs"]
  },
  {
    icon: "bot",
    number: "03",
    title: "Enterprise AI & Custom CRMs",
    description: "Custom business logic engines, LLM orchestration frameworks, and specialized customer relationship workflows.",
    features: [
      "Vector DB indexing & search algorithms",
      "Custom agentic logic & parsing runtimes",
      "Granular user role permission engines",
      "Interactive data dashboard layouts"
    ],
    stack: ["Python", "LangChain", "Vector DBs", "OpenAI API", "Node.js", "FastAPI"]
  },
  {
    icon: "zap",
    number: "04",
    title: "Industrial Workflow Automation",
    description: "Automated, script-driven pipeline layers that orchestrate multi-step data transformations and remove human bottlenecks.",
    features: [
      "Complex scheduled job workers",
      "High-throughput transactional message loops",
      "Legacy system data synchronization",
      "Comprehensive telemetry & failure monitoring"
    ],
    stack: ["Node.js", "Go", "Docker", "AWS Lambdas", "Redis", "Grafana"]
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    title: "FinFlow Transaction Engine",
    category: "WEB PLATFORM",
    codeName: "PROJECT_FINFLOW_V4",
    year: "2024",
    description: "Architected a high-throughput ledger engine handling low-latency account syncs and real-time transaction reporting.",
    metric: "Latency reduced by 40%",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis"]
  },
  {
    id: 2,
    title: "EcoTrack Climate Indexer",
    category: "ENTERPRISE AI",
    codeName: "PROJECT_ECOTRACK_ML",
    year: "2023",
    description: "Integrated custom pipelines parsing complex environmental sheets to calculate carbon outputs across multinational sites.",
    metric: "Scale capacity increased to 10M requests",
    tags: ["Next.js", "Python", "LangChain", "AWS Lambdas", "Docker"]
  },
  {
    id: 3,
    title: "Pulse Client Engine",
    category: "MOBILE APP",
    codeName: "PROJECT_PULSE_MOBILE",
    year: "2024",
    description: "Deployed offline-first cross-platform clients synchronizing health data securely with enterprise telemetry databases.",
    metric: "Crash rate reduced to 0.01%",
    tags: ["React Native", "Zustand", "SQLite", "Firebase", "Expo"]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  { step: "01", title: "Scope & Architecture Definition", description: "Technical blueprints, stack selections, API mappings, and exact performance budgets agreed upfront." },
  { step: "02", title: "UI/UX Wireframing & Component Design System", description: "Pixel-perfect modular bento containers and custom component system design inside dark parameters." },
  { step: "03", title: "Iterative Engineering Sprints & Weekly Functional Demos", description: "Direct developer execution sprints delivering a working, clickable build dashboard every single week." },
  { step: "04", title: "Rigorous QA Automations, Launch, & Optimization", description: "End-to-end integration tests, load telemetry checks, deployment, and direct hand-off support." }
];

export const TEAM: TeamMember[] = [
  {
    name: "Danish Salman",
    role: "Engineering & System Architecture",
    initials: "DS",
    specialization: "Distributed Systems & Cloud infrastructure",
    focus: "Architecting low-latency transactional architectures, Next.js setups, and scaling data engines."
  },
  {
    name: "Ahmed Saleem",
    role: "Product & UI/UX Strategy",
    initials: "AS",
    specialization: "High-Performance Product Engineering",
    focus: "Designing strict bento-grid layouts, layout hierarchy systems, and user-centric client interfaces."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote: "They rebuilt our transaction ledger from scratch. System speed increased and we obtained complete control of our repository. The team communicates exactly like senior engineers.",
    name: "Sarah Chen",
    role: "VP of Engineering",
    company: "Northwind Labs",
    metric: "-55% LATENCY",
    impactStatement: "Page loads fell by half; transactional reliability hit 99.999%."
  },
  {
    id: "t2",
    quote: "No middleware layer. Direct communication with Ahmed and Danish cut execution time in half. Sprints were predictable and each demo was clickable.",
    name: "Marcus Hale",
    role: "Chief Technology Officer",
    company: "Cadence Health",
    metric: "+120% SPEED",
    impactStatement: "Delivered native client and HIPAA-ready pipeline ahead of schedule."
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Twitter", href: "https://twitter.com", icon: "twitter" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { label: "GitHub", href: "https://github.com", icon: "github" }
];
