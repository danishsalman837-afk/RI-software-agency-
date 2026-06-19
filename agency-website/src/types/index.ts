// Shared TypeScript types for the agency website

export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceCard {
  icon: string;
  title: string;
  description: string;
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
  icon: string;
  title: string;
  description: string;
}
