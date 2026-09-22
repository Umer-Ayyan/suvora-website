import React from 'react';
import Layout from './components/Layout';
import HeroSection from './components/HeroSection';
import ContactForm from './components/ContactForm';
import { SERVICES, PORTFOLIO, TEAM, ICON_MAP, TECH_STACK } from './constants';
import { ArrowRight, ExternalLink, ArrowUpRight } from 'lucide-react';
import { Helmet } from 'react-helmet';

const App: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>Suvora Tech | Enterprise Software House Pakistan | Cloud ERP, Web &amp; AI</title>
        <meta name="description" content="Suvora Tech is an enterprise technology consulting and software development company based in Karachi, Pakistan. We engineer digital transformation, cloud ERP systems, and modern web architectures." />
      </Helmet>

      <HeroSection />

      {/* Flagship Enterprise Product: FlowERP */}
      <section id="products" className="py-24 bg-[#050914] border-b border-slate-800/80 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono text-sky-400 uppercase tracking-widest">Enterprise SaaS Product</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4 text-white">Built in Pakistan, <span className="text-blue-500">for Pakistan</span></h2>
            <p className="text-slate-400 text-lg">We engineer and scale our own proprietary cloud software alongside client solutions.</p>
          </div>

          {/* FlowERP Showcase Card */}
          <div className="max-w-4xl mx-auto bg-[#0f1a2e] border border-blue-900/40 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center shadow-xl shadow-black/30">
            {/* Logo side */}
            <div className="flex-shrink-0 flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-white text-4xl font-black shadow-md shadow-blue-900/40" style={{ background: 'linear-gradient(135deg, #1d4ed8, #0284c7)' }}>
                F
              </div>
              <span className="text-white font-bold text-xl font-display">FlowERP</span>
              <a
                href="https://flowerp.suvora.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs font-semibold uppercase tracking-wider text-white transition-colors flex items-center gap-1 shadow-sm"
              >
                <span>Explore Platform</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-4">
                {['Cloud ERP', 'Multi-Tenant', 'PKR Pricing', '18 Industry Presets', '14-Day Trial'].map(t => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-sky-300 font-medium">{t}</span>
                ))}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Cloud ERP Software for Pakistani Enterprises &amp; SMEs</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                FlowERP is a full-stack multi-tenant ERP platform architected specifically for Pakistani businesses. Covers Sales, Inventory, Financial Accounting, HR &amp; Payroll, CRM, Manufacturing, Freight Forwarding, Restaurant POS, and Indenting, with 18 industry presets and localized PKR billing.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { n: '10+', l: 'Core Modules' },
                  { n: '18', l: 'Industry Presets' },
                  { n: 'PKR', l: 'Local Billing' },
                  { n: '30 min', l: 'Deployment Time' },
                ].map(s => (
                  <div key={s.l} className="text-center p-3 rounded-xl bg-[#080e1a] border border-slate-800">
                    <div className="text-lg font-bold text-sky-400 font-display">{s.n}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Capabilities (Services Section) */}
      <section id="services" className="py-24 bg-[#080e1a] border-b border-slate-800/80 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono text-sky-400 uppercase tracking-widest">Core Capabilities</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-white mt-2">Enterprise Solutions</h2>
            <p className="text-slate-400 text-lg">We deliver end-to-end digital capabilities, from enterprise software architecture to scalable cloud deployment.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <div key={service.id} className="group p-8 rounded-2xl bg-[#0f1a2e] border border-slate-800 hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-950/20 hover:-translate-y-1">
                <div className="mb-6 text-sky-400 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {ICON_MAP[service.iconName]}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Case Studies */}
      <section id="portfolio" className="py-24 bg-[#050914] border-b border-slate-800/80">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-mono text-sky-400 uppercase tracking-widest">Proven Track Record</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-2 text-white mt-1">Featured Deliveries</h2>
              <p className="text-slate-400">Transforming industries through robust architecture and modern technology.</p>
            </div>
            <a href="/case-studies" className="flex items-center gap-1.5 text-sky-400 font-medium hover:text-white transition-colors text-sm">
              <span>View All Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="space-y-16">
            {PORTFOLIO.map((study, index) => (
              <div key={study.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
                {/* Image Side */}
                <div className="w-full md:w-1/2 group relative rounded-2xl overflow-hidden aspect-video border border-slate-800 bg-[#0f1a2e]">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                
                {/* Content Side */}
                <div className="w-full md:w-1/2">
                  <div className="text-sky-400 text-xs font-mono uppercase tracking-wider mb-2">{study.client}</div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 text-white">{study.title}</h3>
                  <p className="text-slate-300 mb-6 text-base leading-relaxed">{study.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {study.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-[#0f1a2e] border border-slate-700/80 rounded-full text-xs text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-6 border-t border-slate-800 pt-6">
                    <div>
                      <div className="text-xl font-bold text-white mb-0.5">{study.impact}</div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider">Highlight</div>
                    </div>
                    <div className="flex items-center justify-end">
                      <a href="/case-studies" className="text-sm font-medium text-white border-b border-white hover:text-sky-400 hover:border-sky-400 transition-colors pb-0.5">
                        Read Case Study
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Technology Stack */}
      <section className="py-16 border-b border-slate-800/80 bg-[#080e1a]">
        <div className="container mx-auto px-6">
          <p className="text-center text-xs font-mono text-slate-400 mb-8 uppercase tracking-widest">Enterprise Architecture &amp; Technology Stack</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-14">
            {TECH_STACK.map((tech) => (
              <div key={tech.name} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0f1a2e] border border-slate-800">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-sm font-semibold text-slate-200">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Team */}
      <section id="about" className="py-24 bg-[#080e1a] border-b border-slate-800/80">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 mb-20 items-center">
            <div>
              <span className="text-xs font-mono text-sky-400 uppercase tracking-widest">Leadership</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white mt-1">The Team Driving Innovation</h2>
              <p className="text-base text-slate-300 leading-relaxed">
                Suvora Tech is an engineering studio delivering modern web applications, ERP systems, and cloud software. We focus on maintainable code, responsive user experiences, and scalable architecture.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-[#0f1a2e] rounded-xl border border-slate-800">
                <div className="text-3xl font-bold text-blue-400 font-display mb-1">15+</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">Enterprise Deliveries</div>
              </div>
              <div className="p-6 bg-[#0f1a2e] rounded-xl border border-slate-800">
                <div className="text-3xl font-bold text-sky-400 font-display mb-1">2</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">Operating Hubs</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TEAM.map(member => (
              <div key={member.id} className="p-6 rounded-2xl bg-[#0f1a2e] border border-slate-800 group hover:border-slate-700 transition-colors">
                <div className="mb-6 rounded-xl overflow-hidden aspect-[4/5] bg-[#080e1a]">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <h4 className="text-lg font-bold text-white font-display">{member.name}</h4>
                <div className="text-sky-400 text-xs font-semibold uppercase tracking-wider mb-2">{member.role}</div>
                <p className="text-slate-400 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Focus: Pakistan Software House */}
      <section className="py-20 bg-[#050914] border-b border-slate-800/80">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-14">
            <span className="text-xs font-mono text-sky-400 uppercase tracking-widest">Regional Presence</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-1 mb-4">
              Pakistan's Premier Software &amp; ERP House
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base">
              Headquartered in Karachi, Suvora Tech empowers businesses across Pakistan (Lahore, Islamabad, Faisalabad) and globally with enterprise technology solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { title: 'Web Development Pakistan', desc: 'High-performance websites and web platforms for Pakistani startups, SMEs, and enterprises using React, Next.js, and modern cloud stacks.' },
              { title: 'ERP Software Pakistan', desc: 'FlowERP, our dedicated cloud ERP platform, serves Pakistani businesses with 18 industry presets across textile, pharma, freight, and manufacturing.' },
              { title: 'Mobile App Development', desc: 'Cross-platform mobile applications for Pakistani enterprises. React Native and Flutter apps that work on Android and iOS.' },
              { title: 'AI Solutions Pakistan', desc: 'AI-powered workflow automation, intelligent assistants, and machine learning models for Pakistani businesses modernizing their operations.' },
              { title: 'SaaS Architecture Karachi', desc: 'End-to-end SaaS product engineering from system architecture to deployment. We handle frontend, backend, database, and DevOps.' },
              { title: 'Software House Karachi', desc: 'Based in Karachi, Pakistan. We understand local business requirements including Urdu support, PKR pricing, and compliance frameworks.' },
            ].map(item => (
              <div key={item.title} className="p-6 rounded-xl bg-[#0f1a2e] border border-slate-800 hover:border-blue-500/40 transition-all">
                <h3 className="font-bold text-white mb-2 text-sm font-display">{item.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm shadow-blue-600/20">
              Schedule Enterprise Consultation
            </a>
            <p className="text-slate-500 text-xs mt-3">Inquiries answered within 24 hours · teams@suvora.tech</p>
          </div>
        </div>
      </section>

      {/* Corporate Consultation Section */}
      <section id="contact" className="py-24 bg-[#080e1a] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-xs font-mono text-sky-400 uppercase tracking-widest">Connect With Us</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white mt-1 leading-tight">
                Ready to engineer your <span className="text-sky-400">digital future?</span>
              </h2>
              <p className="text-base text-slate-300 mb-8 max-w-md leading-relaxed">
                Connect with our technical consultants to discuss your business requirements, ERP rollout, or digital modernization roadmap.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#0f1a2e] rounded-lg border border-slate-800 text-blue-400">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Corporate Office</h4>
                    <p className="text-slate-400 text-xs mt-0.5">Shaheen Heights, Suite 500<br/>Karachi, Pakistan</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#0f1a2e] rounded-lg border border-slate-800 text-sky-400">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Direct Contact</h4>
                    <p className="text-slate-400 text-xs mt-0.5">teams@suvora.tech</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default App;