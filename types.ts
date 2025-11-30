import { ReactNode } from 'react';

export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  description: string;
  impact: string; // KPI
  tags: string[];
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface TechItem {
  name: string;
  icon: string;
}

export interface SiteConfig {
  brandName: string;
  tagline: string;
  contactEmail: string;
  navLinks: NavLink[];
  colors: {
    primary: string;
    secondary: string;
    background: string;
  };
}

export interface HeroSettings {
  bloomIntensity: number;
  rotationSpeed: number;
  coreColor: string;
  satelliteColor: string;
}