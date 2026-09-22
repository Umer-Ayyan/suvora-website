import React, { useState, useEffect } from 'react';
import { SUVORA_CONFIG, IS_INDEPENDENCE_DAY } from '../constants';
import { Menu, X, Linkedin, Instagram, MessageCircle, MapPin, Mail, ArrowUpRight } from 'lucide-react';
import CookieBanner from './CookieBanner';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-100 bg-[#080e1a] selection:bg-blue-600 selection:text-white">
      {/* Top Utility Bar (Systems Limited Style) */}
      <div className="hidden lg:block bg-[#050914] border-b border-slate-800/80 text-xs text-slate-400 py-2 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-blue-400" /> Shaheen Heights, Suite 500, Karachi, Pakistan
            </span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <Mail className="w-3.5 h-3.5 text-blue-400" /> teams@suvora.tech
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Enterprise Software &amp; Cloud ERP Platform</span>
            <span className="text-slate-600">|</span>
            <a href="https://flowerp.suvora.tech" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-white flex items-center gap-1 transition-colors">
              FlowERP Login <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Independence Day Banner (Conditional) */}
      {IS_INDEPENDENCE_DAY && (
        <div className="bg-gradient-to-r from-emerald-800/90 via-green-700/90 to-emerald-800/90 border-b border-green-500/30 text-white text-center py-2.5 text-xs font-semibold tracking-wider relative z-[60] flex items-center justify-center gap-2">
          <span>Happy Independence Day · Celebrating Pakistan</span>
        </div>
      )}

      {/* Main Corporate Header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-200 ${
          isScrolled 
            ? 'bg-[#080e1a]/95 backdrop-blur-md border-b border-slate-800/90 shadow-lg shadow-black/20 py-3.5' 
            : 'bg-[#080e1a]/80 backdrop-blur-sm border-b border-slate-800/50 py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo with Stylized Vertical Color Bars (Systems Limited Inspired Palette) */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="flex items-center gap-1 py-1">
              <span className="w-1.5 h-7 rounded-full bg-[#0d3b66] transition-all duration-300 group-hover:h-8" />
              <span className="w-1.5 h-8 rounded-full bg-[#1868b2] transition-all duration-300 group-hover:h-7" />
              <span className="w-1.5 h-9 rounded-full bg-[#2563eb] transition-all duration-300 group-hover:h-8" />
              <span className="w-1.5 h-8 rounded-full bg-[#0284c7] transition-all duration-300 group-hover:h-9" />
              <span className="w-1.5 h-7 rounded-full bg-[#38bdf8] transition-all duration-300 group-hover:h-8" />
              <span className="w-1.5 h-6 rounded-full bg-[#bae6fd] transition-all duration-300 group-hover:h-7" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white font-display">
                SUVORA<span className="text-blue-500">.</span>
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-slate-400 font-mono -mt-1">
                Technologies
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {SUVORA_CONFIG.navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white hover:text-sky-400 transition-colors py-1 relative"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a 
              href="/contact" 
              className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all shadow-sm shadow-blue-600/20"
            >
              Consult an Expert
            </a>

            <button 
              className="md:hidden text-slate-300 hover:text-white p-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#080e1a] border-b border-slate-800 md:hidden p-6 flex flex-col gap-4 shadow-2xl">
            {SUVORA_CONFIG.navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className="text-base font-medium text-slate-300 hover:text-sky-400 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="/contact" 
              className="w-full text-center px-5 py-3 text-sm font-semibold bg-blue-600 text-white rounded-lg mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Consult an Expert
            </a>
          </div>
        )}
      </header>

      {/* Main Content View */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Corporate Enterprise Footer */}
      <footer className="bg-[#050914] border-t border-slate-800/80 pt-16 pb-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
            
            {/* Col 1: About Suvora */}
            <div className="lg:col-span-2 space-y-5">
              <a href="/" className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-6 rounded-full bg-[#0d3b66]" />
                  <span className="w-1.5 h-7 rounded-full bg-[#1868b2]" />
                  <span className="w-1.5 h-8 rounded-full bg-[#2563eb]" />
                  <span className="w-1.5 h-7 rounded-full bg-[#0284c7]" />
                  <span className="w-1.5 h-6 rounded-full bg-[#38bdf8]" />
                  <span className="w-1.5 h-5 rounded-full bg-[#bae6fd]" />
                </div>
                <span className="text-xl font-bold tracking-tight text-white font-display">
                  SUVORA TECH
                </span>
              </a>
              <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                Suvora Tech is a technology consulting and software engineering firm. We engineer digital transformation, mission-critical business platforms, and enterprise cloud solutions for growing and established organizations.
              </p>
              <div className="flex gap-4 pt-2">
                <a 
                  href="https://linkedin.com/company/suvora-tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href="https://wa.me/923140258385"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a 
                  href="https://instagram.com/suvora.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Col 2: Capabilities */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-sky-400 mb-5">Capabilities</h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li><a href="/services" className="hover:text-white transition-colors">Digital Engineering</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">Enterprise Cloud &amp; DevOps</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">Enterprise ERP Systems</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">Applied AI &amp; Automation</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">Cross-Platform Mobile</a></li>
              </ul>
            </div>

            {/* Col 3: Products & Industries */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-sky-400 mb-5">Enterprise Products</h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li>
                  <a href="https://flowerp.suvora.tech" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1 transition-colors">
                    FlowERP (Cloud ERP) <ArrowUpRight className="w-3 h-3 text-slate-500" />
                  </a>
                </li>
                <li><a href="/#products" className="hover:text-white transition-colors">Industry ERP Presets</a></li>
                <li><a href="/case-studies" className="hover:text-white transition-colors">Banking &amp; FinTech</a></li>
                <li><a href="/case-studies" className="hover:text-white transition-colors">Supply Chain &amp; Freight</a></li>
                <li><a href="/case-studies" className="hover:text-white transition-colors">Digital Commerce</a></li>
              </ul>
            </div>

            {/* Col 4: Corporate Office */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-sky-400 mb-5">Global Hub</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                  <span>Shaheen Heights, Suite 500<br />Karachi, Pakistan</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>teams@suvora.tech</span>
                </li>
                <li className="pt-2">
                  <a href="https://rehbar.pk/" target="_blank" rel="noopener noreferrer" className="inline-block">
                    <img decoding="async" style={{ width: '130px', height: 'auto' }} src="https://rehbar.pk/wp-content/uploads/2026/07/Rehbar-Badge-2.png" alt="Rehbar Accreditation Badge" className="opacity-80 hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Sub-footer Bar */}
          <div className="border-t border-slate-800/80 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
            <p>&copy; {new Date().getFullYear()} Suvora Tech. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/legal" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
              <a href="/legal" className="hover:text-slate-300 transition-colors">Terms of Service</a>
              <a href="/legal" className="hover:text-slate-300 transition-colors">Information Security</a>
            </div>
          </div>
        </div>
      </footer>

      <CookieBanner />
    </div>
  );
};

export default Layout;