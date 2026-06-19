import type {
  NavLink, ServiceCard, PortfolioItem, Stat, WhyChooseUsItem, TeamMember,
  Testimonial, ClientLogo, ProcessStep, SocialLink, CoreValue,
} from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

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

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    title: "FinFlow Dashboard",
    category: "Web Application",
    description:
      "A comprehensive fintech dashboard for real-time analytics, portfolio tracking, and automated reporting for enterprise clients.",
    image: "/portfolio/finflow.jpg",
    tags: ["React", "TypeScript", "D3.js", "Node.js"],
    gradient: "from-[#6c5ce7] to-[#a29bfe]",
  },
  {
    id: 2,
    title: "MediCare Pro",
    category: "Mobile App",
    description:
      "An AI-powered healthcare companion app enabling telemedicine consultations, prescription management, and health insights.",
    image: "/portfolio/medicare.jpg",
    tags: ["React Native", "Python", "TensorFlow", "Firebase"],
    gradient: "from-[#00cec9] to-[#55efc4]",
  },
  {
    id: 3,
    title: "EcoTrack Platform",
    category: "AI Solution",
    description:
      "A sustainability analytics platform using ML to optimize carbon footprint tracking and ESG reporting for corporations.",
    image: "/portfolio/ecotrack.jpg",
    tags: ["Next.js", "Python", "PyTorch", "AWS"],
    gradient: "from-[#fd79a8] to-[#fab1a0]",
  },
  {
    id: 4,
    title: "ShopVerse",
    category: "Web Application",
    description:
      "A next-generation e-commerce platform with AR product previews, AI recommendations, and seamless checkout experiences.",
    image: "/portfolio/shopverse.jpg",
    tags: ["Next.js", "Three.js", "Stripe", "PostgreSQL"],
    gradient: "from-[#fdcb6e] to-[#e17055]",
  },
  {
    id: 5,
    title: "TaskPilot",
    category: "Mobile App",
    description:
      "An intelligent project management app with AI task prioritization, team collaboration, and automated progress tracking.",
    image: "/portfolio/taskpilot.jpg",
    tags: ["Flutter", "Dart", "Firebase", "OpenAI"],
    gradient: "from-[#74b9ff] to-[#0984e3]",
  },
  {
    id: 6,
    title: "DataForge Analytics",
    category: "AI Solution",
    description:
      "Enterprise-grade business intelligence platform with predictive analytics, natural language queries, and automated insights.",
    image: "/portfolio/dataforge.jpg",
    tags: ["Python", "React", "TensorFlow", "GCP"],
    gradient: "from-[#55efc4] to-[#00b894]",
  },
];

export const STATS: Stat[] = [
  { value: "150+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "25+", label: "Team Members" },
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  { icon: "zap", title: "Lightning Fast Delivery", description: "Agile methodology ensures rapid iteration and on-time project delivery without compromising quality." },
  { icon: "shield", title: "Enterprise-Grade Security", description: "SOC 2 compliant processes with end-to-end encryption and rigorous security audits at every stage." },
  { icon: "wrench", title: "Scalable Architecture", description: "Future-proof solutions designed to scale effortlessly from startup MVP to millions of users." },
  { icon: "handshake", title: "Dedicated Support", description: "24/7 support with dedicated account managers ensuring seamless communication and rapid issue resolution." },
  { icon: "lightbulb", title: "Innovation First", description: "We stay ahead of technology curves, bringing the latest innovations to solve your business challenges." },
  { icon: "bar-chart", title: "Data-Driven Approach", description: "Every decision backed by analytics and user research, ensuring measurable results and continuous improvement." },
];

export const TEAM: TeamMember[] = [
  {
    name: "Danish Salman",
    role: "Founding Partner",
    image: "geometry-1"
  },
  {
    name: "Ahmed Saleem",
    role: "Founding Partner",
    image: "geometry-2"
  }
];

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
