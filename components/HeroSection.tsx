import React, { Suspense, useState, useEffect } from 'react';
import HeroFallback from './HeroFallback';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero3D = React.lazy(() => import('./Hero3D'));

const HeroSection: React.FC = () => {
  const [show3D, setShow3D] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShow3D(true), 80);
    const t2 = setTimeout(() => setVisible(true), 260);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[640px] flex items-center justify-center overflow-hidden">

      {/* 3D background */}
      {show3D ? (
        <Suspense fallback={<HeroFallback />}>
          <Hero3D />
        </Suspense>
      ) : (
        <HeroFallback />
      )}

      {/* Overlay layers */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Directional dark gradient — left-heavy for content legibility */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(108deg, rgba(5,5,16,.92) 0%, rgba(5,5,16,.62) 48%, rgba(5,5,16,.18) 100%)'
        }} />
        {/* Bottom fade — blends into next section */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '140px',
          background: 'linear-gradient(to top, rgba(5,5,16,1) 0%, transparent 100%)'
        }} />
        {/* Subtle top vignette */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '80px',
          background: 'linear-gradient(to bottom, rgba(5,5,16,.5) 0%, transparent 100%)'
        }} />
      </div>

      {/* Hero content */}
      <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center">
        <div
          className="max-w-3xl"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(18px)',
            transition: 'opacity .9s cubic-bezier(.16,1,.3,1), transform .9s cubic-bezier(.16,1,.3,1)',
          }}
        >
          {/* Status badge */}
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-7"
            style={{
              background: 'rgba(75,211,255,.07)',
              border: '1px solid rgba(75,211,255,.20)',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-suvora-accent flex-shrink-0"
              style={{ boxShadow: '0 0 8px rgba(75,211,255,.85)', animation: 'pulse 2.5s ease-in-out infinite' }}
            />
            <span className="text-suvora-accent text-xs font-semibold tracking-[.11em] uppercase">
              System Online · v2.0
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-bold text-white leading-[1.04] tracking-tight mb-6"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 5.4rem)' }}
          >
            We build the<br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #b8a4ff 0%, #7c5cff 45%, #4bd3ff 100%)' }}
            >
              future
            </span>
            , in code.
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-[480px] leading-relaxed font-light">
            Bespoke software and enterprise systems for scaling businesses. Built with performance and precision.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 pointer-events-auto">
            <a
              href="#contact"
              className="btn-primary group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-base"
            >
              Get a custom demo
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#portfolio"
              className="btn-ghost inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-medium text-base"
            >
              See our work
            </a>
          </div>

          {/* Trust micro-line */}
          <p className="mt-8 text-xs text-slate-600">
            Trusted by Pakistani SMEs &nbsp;·&nbsp; 15+ Projects Delivered &nbsp;·&nbsp; Karachi, Pakistan
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 opacity-40">
        <div
          className="w-px bg-gradient-to-b from-transparent via-slate-500 to-transparent"
          style={{ height: '40px', animation: 'float 2.8s ease-in-out infinite' }}
        />
        <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
      </div>
    </section>
  );
};

export default HeroSection;
