import React from 'react';

const HeroFallback: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 bg-suvora-900 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/1920/1080?blur=10')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-t from-suvora-900 via-transparent to-suvora-900" />
      
      {/* Abstract geometric animation for fallback */}
      <div className="relative w-64 h-64 border border-suvora-primary/30 rounded-full animate-pulse-slow flex items-center justify-center">
        <div className="w-48 h-48 border border-suvora-accent/30 rounded-full animate-float">
            <div className="w-full h-full bg-suvora-primary/10 rounded-full blur-xl" />
        </div>
      </div>
    </div>
  );
};

export default HeroFallback;