import type { NavLink, ServiceCard, PortfolioItem, Stat, WhyChooseUsItem, TeamMember } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES: ServiceCard[] = [
  {
    icon: "🌐",
    title: "Web Development",
    description:
      "Custom web applications built with cutting-edge technologies. From responsive landing pages to complex enterprise platforms.",
    gradient: "from-[#6c5ce7] to-[#a29bfe]",
  },
  {
    icon: "📱",
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile solutions for iOS and Android. Seamless experiences that users love.",
    gradient: "from-[#00cec9] to-[#55efc4]",
  },
  {
    icon: "🤖",
    title: "AI Solutions",
    description:
      "Intelligent automation and machine learning integrations. Transform your data into actionable insights.",
    gradient: "from-[#fd79a8] to-[#fab1a0]",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description:
      "Human-centered design that captivates and converts. Research-driven interfaces that delight at every touchpoint.",
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
  {
    icon: "⚡",
    title: "Lightning Fast Delivery",
    description:
      "Agile methodology ensures rapid iteration and on-time project delivery without compromising quality.",
  },
  {
    icon: "🛡️",
    title: "Enterprise-Grade Security",
    description:
      "SOC 2 compliant processes with end-to-end encryption and rigorous security audits at every stage.",
  },
  {
    icon: "🔧",
    title: "Scalable Architecture",
    description:
      "Future-proof solutions designed to scale effortlessly from startup MVP to millions of users.",
  },
  {
    icon: "🤝",
    title: "Dedicated Support",
    description:
      "24/7 support with dedicated account managers ensuring seamless communication and rapid issue resolution.",
  },
  {
    icon: "💡",
    title: "Innovation First",
    description:
      "We stay ahead of technology curves, bringing the latest innovations to solve your business challenges.",
  },
  {
    icon: "📊",
    title: "Data-Driven Approach",
    description:
      "Every decision backed by analytics and user research, ensuring measurable results and continuous improvement.",
  },
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
