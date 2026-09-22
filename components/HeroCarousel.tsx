import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Layers, 
  Cpu, 
  Globe, 
  Smartphone, 
  Cloud, 
  Palette, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface CarouselItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  highlights: string[];
  icon: React.ReactNode;
  link: string;
  linkText: string;
  isExternal?: boolean;
}

const CAROUSEL_ITEMS: CarouselItem[] = [
  {
    id: 'flowerp',
    badge: 'FLAGSHIP PRODUCT',
    title: 'Cloud ERP & SaaS (FlowERP)',
    description: 'Full-stack multi-tenant ERP SaaS built for growing businesses. Complete financial accounting, inventory, supply chain, HR, and manufacturing.',
    highlights: ['18 Industry Presets', 'PKR Localized', '14-Day Free Trial'],
    icon: <Layers className="w-6 h-6 text-sky-400" />,
    link: 'https://flowerp.suvora.tech',
    linkText: 'Explore FlowERP',
    isExternal: true,
  },
  {
    id: 'ai',
    badge: 'APPLIED AI & AUTOMATION',
    title: 'Intelligent AI Agents & Pipelines',
    description: 'Custom LLM agents, automated data parsing, and machine learning models engineered to streamline business operations and decision-making.',
    highlights: ['LLM Orchestration', 'Smart Workflows', 'Predictive Analytics'],
    icon: <Cpu className="w-6 h-6 text-cyan-400" />,
    link: '/services',
    linkText: 'Explore AI Capabilities',
  },
  {
    id: 'web',
    badge: 'ENTERPRISE WEB',
    title: 'Modern Web & SaaS Architectures',
    description: 'High-speed, conversion-focused Next.js and React web applications built with clean modular code, responsive design, and SEO best practices.',
    highlights: ['Next.js 14 & React', 'Sub-second Speeds', 'Scalable APIs'],
    icon: <Globe className="w-6 h-6 text-blue-400" />,
    link: '/services',
    linkText: 'View Web Services',
  },
  {
    id: 'mobile',
    badge: 'MOBILE ENGINEERING',
    title: 'Cross-Platform Mobile Apps',
    description: 'Native-feel iOS and Android applications developed with Flutter and React Native, delivering rich animations and offline-first data sync.',
    highlights: ['iOS & Android', 'Offline Capabilities', 'High Performance'],
    icon: <Smartphone className="w-6 h-6 text-sky-400" />,
    link: '/services',
    linkText: 'Discover Mobile Apps',
  },
  {
    id: 'cloud',
    badge: 'CLOUD & DEVOPS',
    title: 'Cloud Infrastructure & DevOps',
    description: 'Battle-tested AWS and GCP cloud solutions featuring automated CI/CD pipelines, containerized microservices, and 99.9% uptime architectures.',
    highlights: ['AWS / GCP Cloud', 'Docker & Kubernetes', 'Automated CI/CD'],
    icon: <Cloud className="w-6 h-6 text-cyan-300" />,
    link: '/services',
    linkText: 'Cloud Solutions',
  },
  {
    id: 'design',
    badge: 'PRODUCT DESIGN',
    title: 'UI/UX & Enterprise Design Systems',
    description: 'Design systems and intuitive digital interfaces that combine clean aesthetics, seamless user journeys, and robust accessibility standards.',
    highlights: ['Design Systems', 'Interactive Prototyping', 'WCAG Accessible'],
    icon: <Palette className="w-6 h-6 text-indigo-400" />,
    link: '/services',
    linkText: 'Explore Design',
  },
];

const HeroCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Responsive items count per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, CAROUSEL_ITEMS.length - itemsPerPage);

  // Keep index within bounds on resize
  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto-play timer
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(timer);
  }, [isHovered, handleNext]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section 
      className="relative w-full py-16 bg-slate-950/80 border-y border-slate-900/80 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Enterprise Solutions Carousel"
    >
      {/* Subtle background ambient light */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-sky-500/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono tracking-widest uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Capabilities &amp; Solutions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
              Engineering Excellence Across Domains
            </h2>
            <p className="text-slate-400 text-sm md:text-base mt-2 max-w-xl">
              From enterprise ERP to custom AI architectures, explore our end-to-end digital capabilities.
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={handlePrev}
              aria-label="Previous capability"
              className="p-3 rounded-xl border border-slate-800 bg-slate-900/80 text-slate-300 hover:text-white hover:border-sky-500/40 hover:bg-slate-800/80 transition-all focus:outline-none focus:ring-2 focus:ring-sky-500/50"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next capability"
              className="p-3 rounded-xl border border-slate-800 bg-slate-900/80 text-slate-300 hover:text-white hover:border-sky-500/40 hover:bg-slate-800/80 transition-all focus:outline-none focus:ring-2 focus:ring-sky-500/50"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Slider Window */}
        <div 
          className="overflow-hidden relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="flex transition-transform duration-500 ease-out -mx-3"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
            }}
          >
            {CAROUSEL_ITEMS.map((item) => (
              <div
                key={item.id}
                className="px-3 flex-shrink-0"
                style={{ width: `${100 / itemsPerPage}%` }}
              >
                <div className="h-full flex flex-col justify-between p-7 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800 hover:border-sky-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/5 group">
                  <div>
                    {/* Top: Icon & Badge */}
                    <div className="flex items-center justify-between gap-4 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center group-hover:border-sky-500/30 transition-colors">
                        {item.icon}
                      </div>
                      <span className="text-[10px] font-mono font-bold tracking-wider px-2.5 py-1 rounded-md bg-sky-500/10 text-sky-400 border border-sky-500/20">
                        {item.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-sky-300 transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  <div>
                    {/* Highlights Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {item.highlights.map((tag) => (
                        <span 
                          key={tag} 
                          className="text-[11px] font-medium text-slate-300 bg-slate-800/70 border border-slate-700/60 px-2.5 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA Link */}
                    <a
                      href={item.link}
                      {...(item.isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors group/link"
                    >
                      <span>{item.linkText}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide group ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx 
                  ? 'w-8 bg-sky-400' 
                  : 'w-2 bg-slate-700 hover:bg-slate-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
