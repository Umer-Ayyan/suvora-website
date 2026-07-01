import React, { useState, useEffect } from 'react';
import { SUVORA_CONFIG } from '../constants';
import { Menu, X, Linkedin, Instagram, MessageCircle, Mail, MapPin } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ── Scroll-reveal Intersection Observer ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -56px 0px' }
    );

    const observe = () =>
      document.querySelectorAll('.reveal,.reveal-scale').forEach(el => observer.observe(el));

    observe();
    const t = setTimeout(observe, 400);
    return () => { observer.disconnect(); clearTimeout(t); };
  }, []);

  const navLinks = SUVORA_CONFIG.navLinks.filter(l =>
    ['Home','Products','Services','Case Studies','About','Careers','Contact'].includes(l.label)
  );

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-100 bg-suvora-900">

      {/* ════════════════════════════════════════
          PREMIUM BACKGROUND SYSTEM (fixed layer)
      ════════════════════════════════════════ */}
      <div
        className="fixed inset-0 overflow-hidden pointer-events-none"
        style={{ zIndex: 0 }}
        aria-hidden="true"
      >
        {/* Layer 1 — Soft mesh gradient base */}
        <div className="absolute inset-0" style={{
          background: `
            radial-gradient(ellipse 90% 55% at 18% 18%, rgba(124,92,255,.050) 0%, transparent 55%),
            radial-gradient(ellipse 70% 45% at 82% 78%, rgba(75,211,255,.038) 0%, transparent 52%),
            radial-gradient(ellipse 55% 40% at 55% 100%, rgba(99,102,241,.030) 0%, transparent 60%)
          `
        }} />

        {/* Layer 2 — Aurora orbs */}
        {/* Orb 1 — top-left violet */}
        <div className="aurora-orb" style={{
          width: 950, height: 680,
          background: 'radial-gradient(ellipse, rgba(124,92,255,.92) 0%, transparent 65%)',
          filter: 'blur(96px)',
          top: -260, left: -260,
          animation: 'aurora-1 38s ease-in-out infinite',
          opacity: .08,
        }} />
        {/* Orb 2 — top-right cyan */}
        <div className="aurora-orb" style={{
          width: 780, height: 780,
          background: 'radial-gradient(ellipse, rgba(75,211,255,.85) 0%, transparent 65%)',
          filter: 'blur(105px)',
          top: -160, right: -220,
          animation: 'aurora-2 31s ease-in-out infinite',
          opacity: .06,
        }} />
        {/* Orb 3 — center-left violet */}
        <div className="aurora-orb" style={{
          width: 660, height: 620,
          background: 'radial-gradient(ellipse, rgba(139,92,246,.80) 0%, transparent 65%)',
          filter: 'blur(88px)',
          top: '40%', left: '18%',
          animation: 'aurora-3 44s ease-in-out infinite',
          opacity: .05,
        }} />
        {/* Orb 4 — bottom-right indigo */}
        <div className="aurora-orb" style={{
          width: 560, height: 560,
          background: 'radial-gradient(ellipse, rgba(99,102,241,.80) 0%, transparent 65%)',
          filter: 'blur(82px)',
          bottom: -110, right: '4%',
          animation: 'aurora-4 35s ease-in-out infinite',
          opacity: .05,
        }} />
      </div>

      {/* ════════════════════════════════════════
          NAVIGATION
      ════════════════════════════════════════ */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={isScrolled ? {
          background: 'rgba(5,5,16,.84)',
          backdropFilter: 'blur(22px)',
          WebkitBackdropFilter: 'blur(22px)',
          borderBottom: '1px solid rgba(255,255,255,.06)',
          paddingTop: '14px', paddingBottom: '14px',
          boxShadow: '0 1px 0 rgba(124,92,255,.06)',
        } : { paddingTop: '24px', paddingBottom: '24px' }}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="relative flex-shrink-0">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-suvora-primary to-suvora-accent" />
              <div
                className="absolute inset-0 rounded-lg bg-gradient-to-br from-suvora-primary to-suvora-accent opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                style={{ filter: 'blur(8px)' }}
              />
            </div>
            <span className="text-xl font-display font-bold tracking-tight text-white">
              {SUVORA_CONFIG.brandName}
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-150"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <a
              href="/contact"
              className="btn-primary px-5 py-2.5 text-sm font-semibold text-white rounded-xl"
            >
              Get Started
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div
            className="absolute top-full left-0 right-0 md:hidden p-4 shadow-2xl"
            style={{
              background: 'rgba(5,5,16,.96)',
              backdropFilter: 'blur(24px)',
              borderBottom: '1px solid rgba(255,255,255,.06)',
            }}
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,.06)' }}>
                <a href="/contact" className="btn-primary block text-center px-4 py-3 rounded-xl text-white font-semibold">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* ════════════════════════════════════════
          MAIN CONTENT
      ════════════════════════════════════════ */}
      <main className="flex-grow relative" style={{ zIndex: 10 }}>
        {children}
      </main>

      {/* ════════════════════════════════════════
          FOOTER
      ════════════════════════════════════════ */}
      <footer
        className="relative pt-16 pb-8"
        style={{
          zIndex: 10,
          borderTop: '1px solid rgba(255,255,255,.06)',
          background: 'rgba(5,5,16,.92)',
        }}
      >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">

            {/* Brand */}
            <div className="md:col-span-2">
              <a href="/" className="flex items-center gap-2.5 mb-5">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-suvora-primary to-suvora-accent flex-shrink-0" />
                <span className="text-lg font-display font-bold tracking-tight text-white">{SUVORA_CONFIG.brandName}</span>
              </a>
              <p className="text-slate-500 max-w-sm mb-6 leading-relaxed text-sm">
                Pakistan's modern software house. We build ERP systems, web apps, mobile apps and AI solutions for businesses across Pakistan and beyond.
              </p>
              <div className="flex gap-2.5">
                {[
                  { href: 'https://wa.me/923140258385', label: 'WhatsApp', icon: <MessageCircle className="w-4 h-4" /> },
                  { href: 'https://instagram.com/suvora.tech/', label: 'Instagram', icon: <Instagram className="w-4 h-4" /> },
                  { href: 'https://linkedin.com/company/suvora-tech/', label: 'LinkedIn', icon: <Linkedin className="w-4 h-4" /> },
                ].map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div>
              <p className="text-xs font-semibold text-slate-600 uppercase tracking-widest mb-5">Company</p>
              <ul className="space-y-3">
                {[
                  { label: 'About Us', href: '/about' },
                  { label: 'Case Studies', href: '/case-studies' },
                  { label: 'Careers', href: '/careers' },
                  { label: 'Blog', href: '/blog' },
                  { label: 'Legal', href: '/legal' },
                ].map(item => (
                  <li key={item.label}>
                    <a href={item.href} className="text-sm text-slate-500 hover:text-white transition-colors duration-150">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="text-xs font-semibold text-slate-600 uppercase tracking-widest mb-5">Contact</p>
              <ul className="space-y-3.5 mb-6">
                <li className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-slate-600 mt-0.5 flex-shrink-0" />
                  <a href="mailto:teams@suvora.tech" className="text-sm text-slate-500 hover:text-white transition-colors">
                    {SUVORA_CONFIG.contactEmail}
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-slate-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-500 leading-relaxed">
                    Shaheen Heights, Suite 500<br />Karachi, Pakistan
                  </span>
                </li>
              </ul>

              {/* Status */}
              <div
                className="p-3 rounded-xl"
                style={{ background: 'rgba(255,255,255,.025)', border: '1px solid rgba(255,255,255,.06)' }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"
                    style={{ boxShadow: '0 0 6px rgba(52,211,153,.8)' }}
                  />
                  <span className="text-xs font-medium text-emerald-400">All Systems Operational</span>
                </div>
                <p className="text-xs text-slate-600">Response within 24 hours</p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-700 gap-4 pt-6"
            style={{ borderTop: '1px solid rgba(255,255,255,.05)' }}
          >
            <p>&copy; {new Date().getFullYear()} Suvora Inc. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/legal" className="hover:text-slate-500 transition-colors">Privacy Policy</a>
              <a href="/legal" className="hover:text-slate-500 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
