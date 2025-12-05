import { SiteConfig, ServiceItem, CaseStudy, TeamMember, HeroSettings, TechItem } from './types';
import React from 'react';
import { 
  Code2, 
  Smartphone, 
  Palette, 
  Cloud, 
  Database, 
  ShieldCheck,
  Cpu,
  Globe,
  Zap
} from 'lucide-react';

export const SUVORA_CONFIG: SiteConfig = {
  brandName: 'Suvora',
  tagline: 'We build the future, in code.',
  contactEmail: 'teams@suvora.tech',
  navLinks: [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  colors: {
    primary: '#7c5cff',
    secondary: '#4bd3ff',
    background: '#050510',
  },
};

export const HERO_SETTINGS: HeroSettings = {
  bloomIntensity: 1.5,
  rotationSpeed: 0.2,
  coreColor: '#7c5cff',
  satelliteColor: '#4bd3ff',
};

// Map icon names to components for rendering
export const ICON_MAP: Record<string, React.ReactNode> = {
  'web': <Code2 className="w-8 h-8" />,
  'mobile': <Smartphone className="w-8 h-8" />,
  'design': <Palette className="w-8 h-8" />,
  'cloud': <Cloud className="w-8 h-8" />,
  'backend': <Database className="w-8 h-8" />,
  'security': <ShieldCheck className="w-8 h-8" />,
};

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'Web Development',
    description: 'High-performance Next.js applications optimized for SEO and conversion.',
    iconName: 'web',
  },
  {
    id: '2',
    title: 'Mobile App Dev',
    description: 'Native-feel cross-platform apps using React Native and Flutter.',
    iconName: 'mobile',
  },
  {
    id: '3',
    title: 'UI/UX Design',
    description: 'Futuristic, accessible interfaces that guide user behavior and delight eyes.',
    iconName: 'design',
  },
  {
    id: '4',
    title: 'Cloud & DevOps',
    description: 'Scalable AWS/GCP infrastructure with automated CI/CD pipelines.',
    iconName: 'cloud',
  },
];

export const PORTFOLIO: CaseStudy[] = [
  {
    id: 'cs-1',
    title: 'FinTech Dashboard Core',
    client: 'NovaFinance',
    description: 'Real-time financial analytics platform processing 1M+ transactions/sec.',
    impact: '+40% User Retention',
    tags: ['React', 'D3.js', 'WebSocket'],
    image: 'https://static.vecteezy.com/system/resources/previews/003/001/886/non_2x/fintech-financial-technology-online-banking-and-crowdfunding-vector.jpg',
  },
  {
    id: 'cs-2',
    title: 'E-Commerce Replatform',
    client: 'ShopifyPlus Brand',
    description: 'Headless commerce solution integrating 3D product previews.',
    impact: '2.5s Load Time',
    tags: ['Next.js', 'Shopify', 'WebGL'],
    image: 'https://minutemirror.com.pk//wp-content/uploads/2024/06/imresizer-1717525435269.jpeg',
  },
  {
    id: 'cs-3',
    title: 'AI Medical Imaging',
    client: 'MediScan',
    description: 'Browser-based DICOM viewer with client-side ML inference.',
    impact: '99.9% Uptime',
    tags: ['TensorFlow.js', 'WebAssembly', 'Rust'],
    image: 'https://i0.wp.com/epthinktank.eu/wp-content/uploads/2020/12/adobestock_380560388.jpeg.png?fit=1024%2C524&ssl=1',
  },
];

export const TEAM: TeamMember[] = [
  {
    id: 't1',
    name: 'Muhammad Umer',
    role: 'CTO & Founder',
    bio: 'E ntrepreneur and full-stack developer with a passion for scalable web architectures.',
    image: 'https://cdn.vectorstock.com/i/500p/52/38/businessman-avatar-icon-vector-11835238.jpg',
  },
  {
    id: 't2',
    name: 'S.M Saqlain',
    role: 'Co-Founder & Lead Designer',
    bio: 'Award-winning UI/UX specialist with a focus on dark mode aesthetics.',
    image: 'https://cdn.vectorstock.com/i/500p/52/38/businessman-avatar-icon-vector-11835238.jpg',
  },
  {
    id: 't3',
    name: 'Ali Noor',
    role: 'Operations Manager',
    bio: 'Seasoned project manager ensuring timely delivery and client satisfaction.',
    image: 'https://cdn.vectorstock.com/i/500p/52/38/businessman-avatar-icon-vector-11835238.jpg',
  },
];

export const TECH_STACK: TechItem[] = [
  { name: 'React', icon: 'react' },
  { name: 'Next.js', icon: 'next' },
  { name: 'TypeScript', icon: 'ts' },
  { name: 'Node.js', icon: 'node' },
  { name: 'Postgres', icon: 'pg' },
  { name: 'AWS', icon: 'aws' },
];