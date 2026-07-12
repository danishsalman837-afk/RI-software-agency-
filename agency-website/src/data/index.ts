import type {
  NavLink, ServiceCard, PortfolioItem, Stat, WhyChooseUsItem, TeamMember,
  Testimonial, ProcessStep, SocialLink, IndustryLabel, CoreValue,
} from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export const STATS: Stat[] = [
  { value: "2", label: "Founders on every project" },
  { value: "Weekly", label: "Working demos, not status decks" },
  { value: "Fixed", label: "Scope and price, agreed upfront" },
  { value: "Yours", label: "Code and IP, kept at handover" },
];

export const INDUSTRIES: IndustryLabel[] = [
  { name: "Fintech" },
  { name: "Healthcare" },
  { name: "E-commerce" },
  { name: "SaaS" },
  { name: "Logistics" },
  { name: "Local Business" },
];

export const SERVICES: ServiceCard[] = [
  {
    icon: "globe",
    number: "01",
    title: "Web platforms",
    description:
      "Full-stack web applications that handle real workloads — from customer-facing portals to internal tools that replace spreadsheets.",
    features: ["Server-rendered & static builds", "Authentication & role management", "Third-party API integration"],
    stack: ["Next.js", "React", "Headless CMS", "PostgreSQL"],
  },
  {
    icon: "smartphone",
    number: "02",
    title: "Mobile apps",
    description:
      "Native-quality apps for iOS and Android, built from a single codebase and shipped through both stores.",
    features: ["Cross-platform from day one", "Offline-first architecture", "Push notifications & deep linking"],
    stack: ["React Native", "Flutter", "Firebase", "Expo"],
  },
  {
    icon: "bot",
    number: "03",
    title: "AI automation",
    description:
      "Intelligent workflows that remove manual steps — from document processing to predictive analytics and conversational interfaces.",
    features: ["LLM integration & fine-tuning", "Document and data extraction", "Automated reporting pipelines"],
    stack: ["Python", "OpenAI", "LangChain", "Vector DBs"],
  },
  {
    icon: "palette",
    number: "04",
    title: "Product & design",
    description:
      "Research-driven interfaces that convert. We handle the full arc from user interviews through tested, production-ready UI.",
    features: ["User research & testing", "Design systems & component libraries", "Interactive prototyping"],
    stack: ["Figma", "Framer", "Storybook", "Usability testing"],
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    title: "FinFlow",
    category: "Web Platform",
    year: "2024",
    description:
      "A comprehensive fintech dashboard for real-time analytics, portfolio tracking, and automated reporting for enterprise clients.",
    image: "/portfolio/finflow.jpg",
    tags: ["React", "TypeScript", "D3.js", "Node.js"],
  },
  {
    id: 2,
    title: "EcoTrack",
    category: "AI Automation",
    year: "2023",
    description:
      "A sustainability analytics platform using ML to optimize carbon footprint tracking and ESG reporting for corporations.",
    image: "/portfolio/ecotrack.jpg",
    tags: ["Next.js", "Python", "PyTorch", "AWS"],
  },
  {
    id: 3,
    title: "Pulse Mobile",
    category: "Mobile App",
    year: "2024",
    description:
      "An AI-powered healthcare companion app enabling telemedicine consultations, prescription management, and health insights.",
    image: "/portfolio/pulse.jpg",
    tags: ["React Native", "Python", "TensorFlow", "Firebase"],
  },
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    title: "You talk to the people building it",
    description: "No account managers relaying messages. You work directly with the engineers and designers writing the code.",
  },
  {
    title: "Weekly demos, working software",
    description: "Clickable progress every 7 days. You see what's built, not a slide deck about what might be.",
  },
  {
    title: "Fixed scope, no surprise invoices",
    description: "We agree on scope and price upfront. If something changes, we talk about it before a line of code moves.",
  },
  {
    title: "Built to hand over",
    description: "Clean, documented code you own outright. No vendor lock-in, no proprietary frameworks, no hostage-taking.",
  },
  {
    title: "We'll tell you no",
    description: "Honest engineering tradeoffs over empty promises. If an idea won't work, we'll say so — and suggest what will.",
  },
  {
    title: "We stay after launch",
    description: "Post-launch monitoring, performance optimization, and a direct line when something needs attention.",
  },
];

export const TEAM: TeamMember[] = [
  {
    name: "Danish Salman",
    role: "Engineering & Architecture",
    initials: "DS",
    focus: "Full-stack development, system design, and technical leadership across every engagement.",
  },
  {
    name: "Ahmed Saleem",
    role: "Product & Design",
    initials: "AS",
    focus: "Product strategy, user experience design, and ensuring every build solves the right problem.",
  },
];

// TODO: Replace placeholder testimonials with real client quotes before launch.
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
    quote: "The most communicative agency we've worked with. Clear timelines, no surprises, and a product that genuinely exceeded the spec. We've already signed for phase two.",
    name: "Marcus Hale",
    role: "Founder & CEO",
    company: "Cadence Health",
  },
  {
    id: "t3",
    quote: "They translated a vague idea into a polished mobile app in ten weeks. The design quality alone won us our seed round. Cannot recommend them enough.",
    name: "Priya Nair",
    role: "Co-Founder",
    company: "Tellora",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  { step: "01", title: "Discover", description: "We dig into your goals, users, and constraints until the scope is sharp.", icon: "search" },
  { step: "02", title: "Design", description: "We prototype the architecture and interface, testing edge cases early.", icon: "pen-tool" },
  { step: "03", title: "Build", description: "We ship in tight sprints with continuous testing and a working build every week.", icon: "code" },
  { step: "04", title: "Launch & Support", description: "We deploy, monitor real-world usage, and ensure smooth handover.", icon: "rocket" },
];

export const CORE_VALUES: CoreValue[] = [
  { icon: "target", title: "Excellence", description: "We don't settle for 'good enough'. We strive for technical perfection and pixel-perfect design in every project." },
  { icon: "handshake", title: "Partnership", description: "We view our clients as long-term partners. Your success is our success. We communicate transparently and build trust." },
  { icon: "rocket", title: "Innovation", description: "Technology evolves rapidly. We constantly learn and adapt, bringing the most advanced solutions to the table." },
];

// TODO: Replace placeholder social URLs with real profiles before launch.
export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Twitter", href: "https://twitter.com", icon: "twitter" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { label: "GitHub", href: "https://github.com", icon: "github" },
  { label: "Dribbble", href: "https://dribbble.com", icon: "dribbble" },
];
