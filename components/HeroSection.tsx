import React from 'react';
import { ChevronDown, ShieldCheck, ArrowRight } from 'lucide-react';
import { SUVORA_CONFIG } from '../constants';

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center overflow-hidden bg-[#080e1a] border-b border-slate-800/80 pt-16 pb-20">
      {/* Background Architectural Grid & Subtle Radial Depth */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[120px]" />
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }} 
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="max-w-4xl">
          
          {/* Institutional Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs font-medium uppercase tracking-wider mb-8">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            <span>Enterprise Software &amp; Cloud ERP Solutions</span>
          </div>

          {/* Headline (Systems Limited Authority) */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-white tracking-tight leading-[1.1] mb-6">
            Engineering <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-sky-300">
              Digital Transformation
            </span> <br />
            for Modern Enterprises.
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed font-normal">
            Suvora Tech designs, builds, and scales mission-critical business platforms, scalable cloud ERP systems, and modern digital architectures for market leaders.
          </p>

          {/* Dual Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg text-sm transition-all shadow-lg shadow-blue-600/20"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a 
              href="/services" 
              className="inline-flex items-center justify-center px-8 py-4 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-200 font-medium rounded-lg text-sm transition-all hover:border-slate-500"
            >
              Explore Capabilities
            </a>
          </div>

          {/* Enterprise Metrics Strip */}
          <div className="pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white font-display">18+</div>
              <div className="text-xs text-slate-400 mt-0.5">Industry Presets (FlowERP)</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-sky-400 font-display">10+</div>
              <div className="text-xs text-slate-400 mt-0.5">Core ERP Modules</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white font-display">15+</div>
              <div className="text-xs text-slate-400 mt-0.5">Enterprise Deliveries</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-blue-400 font-display">PKR</div>
              <div className="text-xs text-slate-400 mt-0.5">Local Business Pricing</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;