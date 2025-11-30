import React, { useState, useEffect } from 'react';
import { SUVORA_CONFIG } from '../constants';
import { Menu, X, Github, Twitter, Linkedin } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-100 bg-suvora-900 selection:bg-suvora-primary selection:text-white">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-suvora-900/90 backdrop-blur-md py-4 border-b border-slate-800' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="#" className="text-2xl font-display font-bold tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-suvora-primary to-suvora-accent" />
            {SUVORA_CONFIG.brandName}
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {SUVORA_CONFIG.navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white hover:text-suvora-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#contact" 
              className="px-5 py-2.5 text-sm font-bold bg-white text-suvora-900 rounded hover:bg-slate-200 transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-suvora-900 border-b border-slate-800 md:hidden p-6 flex flex-col gap-4 shadow-2xl">
            {SUVORA_CONFIG.navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className="text-lg font-medium text-slate-300 hover:text-suvora-accent"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-suvora-900 border-t border-slate-800 pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
               <a href="#" className="text-2xl font-display font-bold tracking-tighter flex items-center gap-2 mb-6">
                <div className="w-6 h-6 rounded bg-gradient-to-br from-suvora-primary to-suvora-accent" />
                {SUVORA_CONFIG.brandName}
              </a>
              <p className="text-slate-400 max-w-sm mb-6">
                We design and engineer digital products that define the future. 
                Built with performance, accessibility, and aesthetics in mind.
              </p>
              <div className="flex gap-4">
                <a href="#" aria-label="Github" className="text-slate-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
                <a href="#" aria-label="Twitter" className="text-slate-500 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" aria-label="LinkedIn" className="text-slate-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#about" className="hover:text-suvora-accent">About Us</a></li>
                <li><a href="#portfolio" className="hover:text-suvora-accent">Case Studies</a></li>
                <li><a href="#" className="hover:text-suvora-accent">Careers</a></li>
                <li><a href="#" className="hover:text-suvora-accent">Legal</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>{SUVORA_CONFIG.contactEmail}</li>
                <li>Karachi, Pakistan</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
            <p>&copy; {new Date().getFullYear()} Suvora Inc. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
                <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    Systems Normal
                </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;