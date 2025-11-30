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
  contactEmail: 'hello@suvora.tech',
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
    image: 'https://picsum.photos/600/400?random=1',
  },
  {
    id: 'cs-2',
    title: 'E-Commerce Replatform',
    client: 'ShopifyPlus Brand',
    description: 'Headless commerce solution integrating 3D product previews.',
    impact: '2.5s Load Time',
    tags: ['Next.js', 'Shopify', 'WebGL'],
    image: 'https://picsum.photos/600/400?random=2',
  },
  {
    id: 'cs-3',
    title: 'AI Medical Imaging',
    client: 'MediScan',
    description: 'Browser-based DICOM viewer with client-side ML inference.',
    impact: '99.9% Uptime',
    tags: ['TensorFlow.js', 'WebAssembly', 'Rust'],
    image: 'https://picsum.photos/600/400?random=3',
  },
];

export const TEAM: TeamMember[] = [
  {
    id: 't1',
    name: 'Alex Chen',
    role: 'CTO & Founder',
    bio: 'Ex-Google engineer obsessed with WebGL and performance.',
    image: 'https://picsum.photos/200/200?random=10',
  },
  {
    id: 't2',
    name: 'Sarah Jenkins',
    role: 'Lead Designer',
    bio: 'Award-winning UI/UX specialist with a focus on dark mode aesthetics.',
    image: 'https://picsum.photos/200/200?random=11',
  },
  {
    id: 't3',
    name: 'Marcus Ford',
    role: 'Principal Engineer',
    bio: 'Full-stack wizard specializing in serverless architectures.',
    image: 'https://picsum.photos/200/200?random=12',
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