// Shared TypeScript types for the agency website

import type { IconKey, SocialKey } from "@/components/Icon";

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
  id: string;
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
  icon: SocialKey;
}
