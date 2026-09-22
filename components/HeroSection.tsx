import React, { useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { SUVORA_CONFIG, IS_INDEPENDENCE_DAY } from '../constants';
import confetti from 'canvas-confetti';

const HeroSection: React.FC = () => {
  useEffect(() => {
    if (IS_INDEPENDENCE_DAY) {
      const duration = 4 * 1000;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 4,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#ffffff', '#10b981', '#059669']
        });
        confetti({
          particleCount: 4,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#ffffff', '#10b981', '#059669']
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };
      frame();
    }
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-suvora-900">
      {/* Background Depth Layer */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-950 via-suvora-900/90 to-suvora-900 pointer-events-none" />
      
      <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center">
        {IS_INDEPENDENCE_DAY && (
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
        )}
        <div className="max-w-3xl relative z-10">
          {IS_INDEPENDENCE_DAY && (
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-green-400/50 bg-green-500/10 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 mr-2 animate-ping" />
              <span className="text-green-300 text-sm font-bold tracking-widest uppercase">
                79 Years of Independence 🇵🇰
              </span>
            </div>
          )}
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-tight tracking-tight">
            We build the <br />
            <span className={`inline-block text-transparent bg-clip-text bg-gradient-to-r animate-future cursor-default transition-transform hover:scale-110 ${IS_INDEPENDENCE_DAY ? 'from-green-400 via-white to-green-500' : 'from-suvora-primary to-suvora-accent'}`}>future</span>, in code.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl font-normal leading-relaxed">
            {SUVORA_CONFIG.tagline} Custom software, ERP solutions, and modern web applications for growing businesses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pointer-events-auto">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-white text-suvora-900 font-bold rounded-lg transition-all hover:bg-slate-200 focus:ring-2 focus:ring-suvora-accent focus:outline-none text-center"
            >
              Get a Free Quote
            </a>
            
            <a 
              href="#products" 
              className="px-8 py-4 bg-transparent border border-slate-700 text-white font-medium rounded-lg transition-all hover:bg-white/10 hover:border-white focus:ring-2 focus:ring-white focus:outline-none text-center"
            >
              Explore Products
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce text-slate-500">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
};

export default HeroSection;