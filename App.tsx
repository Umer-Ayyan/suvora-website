import React from 'react';
import Layout from './components/Layout';
import HeroSection from './components/HeroSection';
import ContactForm from './components/ContactForm';
import { SERVICES, PORTFOLIO, TEAM, ICON_MAP, TECH_STACK } from './constants';
import { ArrowRight, Mail, MapPin, Check } from 'lucide-react';
import { Helmet } from 'react-helmet';

/* ─── tiny helpers ─── */
const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="section-label mb-5">{children}</div>
);

const SectionHeader: React.FC<{ label: string; title: React.ReactNode; subtitle?: string }> = ({
  label, title, subtitle
}) => (
  <div className="text-center max-w-2xl mx-auto mb-16">
    <div className="reveal flex justify-center mb-2">
      <SectionLabel>{label}</SectionLabel>
    </div>
    <h2 className="reveal rd1 text-3xl md:text-5xl font-display font-bold mt-3 mb-4 leading-tight tracking-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="reveal rd2 text-slate-400 text-lg leading-relaxed">{subtitle}</p>
    )}
  </div>
);

/* ─── section background helper ─── */
const sectionBase = (alpha = 0.88): React.CSSProperties => ({
  background: `rgba(5,5,16,${alpha})`,
});

const App: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>Suvora Tech | Software House Pakistan | Web, ERP &amp; AI Solutions</title>
        <meta name="description" content="Suvora Tech is Pakistan's modern software house. We build ERP systems, web apps, mobile apps and AI solutions for Pakistani businesses. Based in Karachi." />
      </Helmet>

      <HeroSection />

      {/* ════════════════════════════════════════════
          OUR PRODUCTS — FlowERP
      ════════════════════════════════════════════ */}
      <section id="products" className="py-28 relative overflow-hidden" style={sectionBase(.90)}>
        {/* Section ambient light */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 65% 45% at 50% 0%, rgba(124,92,255,.065) 0%, transparent 70%)'
        }} />

        <div className="container mx-auto px-6 relative z-10">
          <SectionHeader
            label="Our Products"
            title={<>Built in Pakistan,{' '}<span className="text-suvora-primary">for Pakistan</span></>}
            subtitle="We don't just build for clients — we ship our own products too."
          />

          {/* FlowERP Card */}
          <div
            className="reveal rd2 max-w-4xl mx-auto rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center"
            style={{
              background: 'linear-gradient(140deg, rgba(124,92,255,.10) 0%, rgba(5,5,16,.60) 60%)',
              border: '1px solid rgba(124,92,255,.22)',
              boxShadow: `
                inset 0 1px 0 rgba(255,255,255,.07),
                0 0 80px rgba(124,92,255,.08),
                0 32px 64px rgba(0,0,0,.35)
              `,
            }}
          >
            {/* Logo side */}
            <div className="flex-shrink-0 flex flex-col items-center gap-5">
              {/* Logo mark with glow ring */}
              <div className="relative">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-white text-4xl font-black"
                  style={{ background: 'linear-gradient(135deg,#7c5cff,#f97316)' }}
                >
                  F
                </div>
                <div
                  className="absolute -inset-1 rounded-2xl opacity-40"
                  style={{
                    background: 'linear-gradient(135deg,#7c5cff,#f97316)',
                    filter: 'blur(12px)',
                    zIndex: -1,
                  }}
                />
              </div>
              <span className="text-white font-bold text-xl tracking-tight">FlowERP</span>
              <a
                href="https://flowerp.suvora.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-5 py-2.5 rounded-xl text-sm font-semibold text-white flex items-center gap-1.5"
              >
                Try Free <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Content */}
            <div className="flex-1">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {['Cloud ERP', 'Pakistan', 'PKR Pricing', '18 Industries', '14-Day Free Trial'].map(t => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full font-medium"
                    style={{
                      background: 'rgba(124,92,255,.10)',
                      border: '1px solid rgba(124,92,255,.24)',
                      color: 'rgba(167,148,255,.90)',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-snug">
                Pakistan's #1 Cloud ERP Software
              </h3>
              <p className="text-slate-400 leading-relaxed mb-8 text-sm md:text-base">
                FlowERP is a full-stack multi-tenant ERP SaaS built specifically for Pakistani SMEs. Covers
                Sales, Inventory, Finance, HR, CRM, Manufacturing, Freight Forwarding, Restaurant POS, and
                Indenting — with 18 industry presets and PKR pricing.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { n: '10+', l: 'ERP Modules' },
                  { n: '18',  l: 'Industry Presets' },
                  { n: 'PKR', l: 'Local Pricing' },
                  { n: '30m', l: 'Setup Time' },
                ].map(s => (
                  <div
                    key={s.l}
                    className="text-center py-4 px-3 rounded-2xl"
                    style={{
                      background: 'rgba(255,255,255,.035)',
                      border: '1px solid rgba(255,255,255,.07)',
                    }}
                  >
                    <div className="text-2xl font-bold text-suvora-primary mb-1 stat-number">{s.n}</div>
                    <div className="text-xs text-slate-500">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SERVICES
      ════════════════════════════════════════════ */}
      <section id="services" className="py-28 relative overflow-hidden" style={sectionBase(.88)}>
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 50% 40% at 100% 50%, rgba(75,211,255,.040) 0%, transparent 60%)'
        }} />

        <div className="container mx-auto px-6 relative z-10">
          <SectionHeader
            label="What We Build"
            title="Services"
            subtitle="End-to-end digital capabilities, from rapid prototyping to enterprise-scale deployment."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((service, idx) => (
              <div
                key={service.id}
                className={`reveal rd${idx + 1} glass-card group p-7 rounded-2xl cursor-default`}
              >
                <div className="icon-surface mb-6 group-hover:scale-105 transition-transform duration-300">
                  <span className="text-suvora-accent">{ICON_MAP[service.iconName]}</span>
                </div>
                <h3 className="text-lg font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          PORTFOLIO / CASE STUDIES
      ════════════════════════════════════════════ */}
      <section id="portfolio" className="py-28 relative overflow-hidden" style={sectionBase(.92)}>
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 55% 50% at 0% 60%, rgba(124,92,255,.045) 0%, transparent 60%)'
        }} />

        <div className="container mx-auto px-6 relative z-10">
          {/* Header row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <div className="reveal">
                <SectionLabel>Work</SectionLabel>
              </div>
              <h2 className="reveal rd1 text-3xl md:text-5xl font-display font-bold mt-3 mb-3 leading-tight">
                Case Studies
              </h2>
              <p className="reveal rd2 text-slate-400 text-lg">Transforming industries through code.</p>
            </div>
            <a
              href="/case-studies"
              className="reveal rd2 inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors group"
            >
              View all case studies
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="space-y-20">
            {PORTFOLIO.map((study, index) => (
              <div
                key={study.id}
                className={`reveal flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
              >
                {/* Image */}
                <div
                  className="w-full md:w-1/2 group relative rounded-2xl overflow-hidden"
                  style={{
                    aspectRatio: '16/9',
                    border: '1px solid rgba(255,255,255,.07)',
                    boxShadow: '0 24px 48px rgba(0,0,0,.40)',
                  }}
                >
                  <div className="absolute inset-0 bg-suvora-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div
                    className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: 'linear-gradient(135deg, rgba(124,92,255,.15) 0%, transparent 100%)' }}
                  />
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2">
                  <div className="section-label mb-4">{study.client}</div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 text-white leading-snug">
                    {study.title}
                  </h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">{study.description}</p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {study.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium text-slate-400"
                        style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.09)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div
                    className="flex items-center justify-between pt-6"
                    style={{ borderTop: '1px solid rgba(255,255,255,.07)' }}
                  >
                    <div>
                      <div className="text-2xl font-bold text-white mb-0.5 stat-number">{study.impact}</div>
                      <div className="text-xs text-slate-600 uppercase tracking-wider font-semibold">Key Result</div>
                    </div>
                    <button className="inline-flex items-center gap-2 text-sm font-semibold text-suvora-accent hover:text-white transition-colors group">
                      Read Case Study
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          TECH STACK MARQUEE
      ════════════════════════════════════════════ */}
      <section className="py-16 relative overflow-hidden" style={{
        background: 'rgba(5,5,16,.88)',
        borderTop: '1px solid rgba(255,255,255,.05)',
        borderBottom: '1px solid rgba(255,255,255,.05)',
      }}>
        <div className="container mx-auto px-6">
          <p className="reveal text-center text-xs font-semibold text-slate-600 mb-10 uppercase tracking-[.16em]">
            Powered by modern stacks
          </p>
          <div className="reveal rd1 flex flex-wrap justify-center gap-3 md:gap-4">
            {TECH_STACK.map((tech) => (
              <div
                key={tech.name}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-400 transition-all duration-200 hover:text-white cursor-default"
                style={{
                  background: 'rgba(255,255,255,.035)',
                  border: '1px solid rgba(255,255,255,.07)',
                  transition: 'all .2s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(124,92,255,.09)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(124,92,255,.22)';
                  (e.currentTarget as HTMLElement).style.color = 'rgba(167,148,255,.92)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,.035)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,.07)';
                  (e.currentTarget as HTMLElement).style.color = '';
                }}
              >
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          ABOUT / TEAM
      ════════════════════════════════════════════ */}
      <section id="about" className="py-28 relative overflow-hidden" style={sectionBase(.90)}>
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 50% 50% at 80% 30%, rgba(124,92,255,.05) 0%, transparent 60%)'
        }} />

        <div className="container mx-auto px-6 relative z-10">
          {/* Top row — text + stats */}
          <div className="grid md:grid-cols-2 gap-16 mb-24">
            <div>
              <div className="reveal">
                <SectionLabel>Who We Are</SectionLabel>
              </div>
              <h2 className="reveal rd1 text-3xl md:text-5xl font-display font-bold mt-3 mb-6 leading-tight">
                The Collective
              </h2>
              <p className="reveal rd2 text-slate-400 leading-relaxed text-lg">
                Suvora isn't just a software shop. We are a collective of engineers, artists, and strategists
                obsessed with the bleeding edge of web technology. We believe code is the clay of the 21st century.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 content-start">
              {[
                { n: '15+', l: 'Projects Delivered', color: '#7c5cff' },
                { n: '2',   l: 'Global Hubs',       color: '#4bd3ff' },
                { n: '18',  l: 'Industry Presets',  color: '#7c5cff' },
                { n: '24h', l: 'Response Time',     color: '#4bd3ff' },
              ].map((stat, idx) => (
                <div
                  key={stat.l}
                  className={`reveal rd${idx + 1} p-6 rounded-2xl`}
                  style={{
                    background: 'rgba(255,255,255,.025)',
                    border: '1px solid rgba(255,255,255,.07)',
                  }}
                >
                  <div
                    className="text-4xl font-bold mb-2 stat-number"
                    style={{ color: stat.color }}
                  >
                    {stat.n}
                  </div>
                  <div className="text-sm text-slate-500">{stat.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="grid md:grid-cols-3 gap-8">
            {TEAM.map((member, idx) => (
              <div
                key={member.id}
                className={`reveal rd${idx + 1} group`}
              >
                <div
                  className="mb-5 rounded-2xl overflow-hidden"
                  style={{
                    border: '1px solid rgba(255,255,255,.07)',
                    boxShadow: '0 16px 32px rgba(0,0,0,.30)',
                  }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h4 className="text-lg font-bold text-white mb-1">{member.name}</h4>
                <div className="text-suvora-primary text-sm font-medium mb-2">{member.role}</div>
                <p className="text-slate-500 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          WHY SUVORA (SEO section)
      ════════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden" style={{
        ...sectionBase(.88),
        borderTop: '1px solid rgba(255,255,255,.05)',
      }}>
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="text-center mb-14">
            <div className="reveal flex justify-center mb-4">
              <SectionLabel>Pakistan's Software House</SectionLabel>
            </div>
            <h2 className="reveal rd1 text-3xl md:text-4xl font-display font-bold text-white mb-4 leading-tight">
              Pakistan's Modern Software House
            </h2>
            <p className="reveal rd2 text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Suvora Tech is based in Karachi and serves businesses across Pakistan — Lahore, Islamabad,
              Faisalabad, and globally.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-14">
            {[
              { title: 'Web Development Pakistan',    desc: 'We build high-performance websites and web applications for Pakistani startups, SMEs and enterprises using React, Next.js and modern stacks.' },
              { title: 'ERP Software Pakistan',       desc: 'FlowERP — our own cloud ERP — serves Pakistani businesses with 18 industry presets. Textile, pharma, freight, manufacturing and more.' },
              { title: 'Mobile App Development',      desc: 'Cross-platform mobile apps for Pakistani businesses. React Native and Flutter apps that work on Android and iOS.' },
              { title: 'AI Solutions Pakistan',       desc: 'AI-powered automation, chatbots, intelligent workflows and machine learning solutions for Pakistani companies looking to modernize.' },
              { title: 'SaaS Development Karachi',    desc: 'End-to-end SaaS product development — from idea to launch. We handle frontend, backend, database, cloud and DevOps.' },
              { title: 'Software House Karachi',      desc: 'Based in Karachi, Pakistan. We understand local business needs — Urdu support, PKR pricing, Pakistani regulations and industry context.' },
            ].map((item, idx) => (
              <div
                key={item.title}
                className={`reveal rd${(idx % 3) + 1} glass-card group p-6 rounded-2xl`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'rgba(124,92,255,.15)', border: '1px solid rgba(124,92,255,.25)' }}
                  >
                    <Check className="w-3 h-3 text-suvora-primary" />
                  </span>
                  <h3 className="font-bold text-white text-sm leading-snug">{item.title}</h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed pl-8">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="reveal text-center">
            <a
              href="/contact"
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-base"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-slate-600 text-sm mt-4">
              We respond within 24 hours &nbsp;·&nbsp; teams@suvora.tech
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          CONTACT
      ════════════════════════════════════════════ */}
      <section id="contact" className="py-28 relative overflow-hidden" style={sectionBase(.92)}>
        {/* Accent lighting */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: `
            radial-gradient(ellipse 60% 50% at 0% 50%, rgba(124,92,255,.060) 0%, transparent 60%),
            radial-gradient(ellipse 40% 40% at 100% 20%, rgba(75,211,255,.040) 0%, transparent 55%)
          `
        }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left — copy */}
            <div>
              <div className="reveal mb-5">
                <SectionLabel>Contact</SectionLabel>
              </div>
              <h2 className="reveal rd1 text-4xl md:text-6xl font-display font-bold mb-6 leading-[1.04] tracking-tight">
                Ready to build<br />
                the{' '}
                <span className="text-transparent bg-clip-text"
                  style={{ backgroundImage: 'linear-gradient(135deg,#b8a4ff 0%,#4bd3ff 100%)' }}
                >
                  impossible?
                </span>
              </h2>
              <p className="reveal rd2 text-xl text-slate-400 mb-10 max-w-md leading-relaxed">
                Let's discuss your technical challenges. Whether you need a high-performance web app or
                a complete digital transformation.
              </p>

              <div className="reveal rd3 space-y-5">
                {/* Office */}
                <div className="flex items-start gap-4">
                  <div className="icon-surface flex-shrink-0">
                    <MapPin className="w-5 h-5 text-suvora-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Office</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Shaheen Heights, Suite 500<br />Karachi, Pakistan
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="icon-surface flex-shrink-0" style={{
                    background: 'rgba(75,211,255,.09)',
                    borderColor: 'rgba(75,211,255,.20)',
                  }}>
                    <Mail className="w-5 h-5 text-suvora-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <a
                      href="mailto:teams@suvora.tech"
                      className="text-slate-400 text-sm hover:text-white transition-colors"
                    >
                      teams@suvora.tech
                    </a>
                  </div>
                </div>
              </div>

              {/* Trust signals */}
              <div
                className="reveal rd4 mt-10 p-5 rounded-2xl flex flex-wrap gap-4"
                style={{
                  background: 'rgba(255,255,255,.025)',
                  border: '1px solid rgba(255,255,255,.07)',
                }}
              >
                {[
                  '✓ No commitments until you are ready',
                  '✓ Response within 24 hours',
                  '✓ Free project consultation',
                ].map(t => (
                  <span key={t} className="text-xs text-slate-400 font-medium">{t}</span>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div className="reveal rd2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default App;
