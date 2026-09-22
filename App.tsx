import React from 'react';
import Layout from './components/Layout';
import HeroSection from './components/HeroSection';
import ContactForm from './components/ContactForm';
import { SERVICES, PORTFOLIO, TEAM, ICON_MAP, TECH_STACK } from './constants';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Helmet } from 'react-helmet';

const App: React.FC = () => {
  return (
    <Layout>
        <Helmet>
  <title>Suvora Tech | Software House Pakistan | Web, ERP &amp; AI Solutions</title>
  <meta name="description" content="Suvora Tech is Pakistan's modern software house. We build ERP systems, web apps, mobile apps and AI solutions for Pakistani businesses. Based in Karachi." />
</Helmet>

      <HeroSection />

      {/* Our Products: FlowERP */}
      <section id="products" className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono text-suvora-accent uppercase tracking-widest">Our Products</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4">Built in Pakistan, <span className="text-suvora-primary">for Pakistan</span></h2>
            <p className="text-slate-400 text-lg">We don't just build for clients, we ship our own products too.</p>
          </div>

          {/* FlowERP Card */}
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-900/20 to-slate-900/60 border border-blue-500/20 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center">
            {/* Logo side */}
            <div className="flex-shrink-0 flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-white text-4xl font-black" style={{background:'linear-gradient(135deg,#2563eb,#38bdf8)'}}>
                F
              </div>
              <span className="text-white font-bold text-xl">FlowERP</span>
              <a
                href="https://flowerp.suvora.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-sm font-semibold text-white transition-colors"
              >
                Explore FlowERP
              </a>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-4">
                {['Cloud ERP', 'Pakistan', 'PKR Pricing', '18 Industries', '14-Day Free Trial'].map(t => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-300">{t}</span>
                ))}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Cloud ERP Software for Pakistani Businesses</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                FlowERP is a full-stack multi-tenant ERP SaaS built specifically for Pakistani SMEs. Covers Sales, Inventory, Finance, HR, CRM, Manufacturing, Freight Forwarding, Restaurant POS, and Indenting, with 18 industry presets and PKR pricing.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  {n:'10+', l:'ERP Modules'},
                  {n:'18', l:'Industry Presets'},
                  {n:'PKR', l:'Local Pricing'},
                  {n:'30 min', l:'Setup Time'},
                ].map(s => (
                  <div key={s.l} className="text-center p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-xl font-bold text-suvora-primary">{s.n}</div>
                    <div className="text-xs text-slate-500 mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-suvora-900 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Services</h2>
                <p className="text-slate-400 text-lg">We provide end-to-end digital capabilities, from rapid prototyping to enterprise-scale deployment.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {SERVICES.map((service) => (
                    <div key={service.id} className="group p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-suvora-primary/50 transition-all hover:shadow-lg hover:shadow-suvora-primary/10 hover:-translate-y-1">
                        <div className="mb-6 text-suvora-accent group-hover:scale-110 transition-transform duration-300 inline-block">
                            {ICON_MAP[service.iconName]}
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-slate-950">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                <div>
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Case Studies</h2>
                    <p className="text-slate-400">Engineering solutions that solve real business problems.</p>
                </div>
                <a href="/case-studies" className="flex items-center gap-2 text-suvora-accent font-medium hover:text-white transition-colors">
                    View All Case Studies
                </a>
            </div>

            <div className="space-y-16">
                {PORTFOLIO.map((study, index) => (
                    <div key={study.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
                        {/* Image Side */}
                        <div className="w-full md:w-1/2 group relative rounded-xl overflow-hidden aspect-video border border-slate-800">
                            <div className="absolute inset-0 bg-suvora-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <img 
                                src={study.image} 
                                alt={study.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                loading="lazy"
                            />
                        </div>
                        
                        {/* Content Side */}
                        <div className="w-full md:w-1/2">
                            <div className="text-suvora-accent text-sm font-mono mb-2">{study.client}</div>
                            <h3 className="text-3xl font-display font-bold mb-4 text-white">{study.title}</h3>
                            <p className="text-slate-400 mb-6 text-lg">{study.description}</p>
                            
                            <div className="flex flex-wrap gap-2 mb-8">
                                {study.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-slate-900 border border-slate-700 rounded-full text-xs text-slate-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="grid grid-cols-2 gap-6 border-t border-slate-800 pt-6">
                                <div>
                                    <div className="text-2xl font-bold text-white mb-1">{study.impact}</div>
                                    <div className="text-xs text-slate-500 uppercase tracking-wider">Highlight</div>
                                </div>
                                <div className="flex items-center justify-end">
                                    <a href="/case-studies" className="flex items-center gap-2 text-white border-b border-white hover:text-suvora-primary hover:border-suvora-primary transition-colors pb-1">
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

      {/* Tech Stack Marquee (Simplified) */}
      <section className="py-16 border-y border-slate-900 bg-suvora-900/50">
         <div className="container mx-auto px-6">
            <p className="text-center text-sm font-mono text-slate-500 mb-8 uppercase tracking-widest">Powered by modern stacks</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                {TECH_STACK.map((tech) => (
                    <div key={tech.name} className="flex flex-col items-center gap-2">
                        {/* Placeholder for real logos, using text for now */}
                        <span className="text-xl font-bold text-slate-300">{tech.name}</span>
                    </div>
                ))}
            </div>
         </div>
      </section>

      {/* About / Team */}
      <section id="about" className="py-24 bg-suvora-900">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 mb-20">
                <div>
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Our Team</h2>
                    <p className="text-lg text-slate-400 leading-relaxed">
                        Suvora Tech is an engineering studio delivering modern web applications, ERP systems, and cloud software. We focus on maintainable code, responsive user experiences, and scalable architecture.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 bg-slate-900 rounded-xl border border-slate-800">
                        <div className="text-4xl font-bold text-suvora-primary mb-2">15+</div>
                        <div className="text-sm text-slate-400">Projects Delivered</div>
                    </div>
                    <div className="p-6 bg-slate-900 rounded-xl border border-slate-800">
                        <div className="text-4xl font-bold text-suvora-accent mb-2">2</div>
                        <div className="text-sm text-slate-400">Locations</div>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {TEAM.map(member => (
                    <div key={member.id} className="group">
                        <div className="mb-6 rounded-xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                            <img src={member.image} alt={member.name} className="w-full aspect-[4/5] object-cover" />
                        </div>
                        <h4 className="text-xl font-bold text-white">{member.name}</h4>
                        <div className="text-suvora-primary text-sm mb-2">{member.role}</div>
                        <p className="text-slate-400 text-sm">{member.bio}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Why Suvora: Pakistan Software House */}
      <section className="py-20 bg-suvora-900 border-t border-slate-900">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 text-center">
            Pakistan's Modern Software House
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-14 text-lg">
            Suvora Tech is based in Karachi and serves businesses across Pakistan (Lahore, Islamabad, Faisalabad) and globally.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { title: 'Web Development Pakistan', desc: 'We build high-performance websites and web applications for Pakistani startups, SMEs and enterprises using React, Next.js and modern stacks.' },
              { title: 'ERP Software Pakistan', desc: 'FlowERP, our dedicated cloud ERP platform, serves Pakistani businesses with 18 industry presets. Textile, pharma, freight, manufacturing and more.' },
              { title: 'Mobile App Development', desc: 'Cross-platform mobile apps for Pakistani businesses. React Native and Flutter apps that work on Android and iOS.' },
              { title: 'AI Solutions Pakistan', desc: 'Custom machine learning models, autonomous chatbots, and automated data pipelines tailored for Pakistani businesses.' },
              { title: 'SaaS Development Karachi', desc: 'End-to-end SaaS product development from architecture to deployment. We handle frontend, backend, database, cloud and DevOps.' },
              { title: 'Software House Karachi', desc: 'Based in Karachi, Pakistan. We understand local business needs including Urdu support, PKR pricing, Pakistani regulations and industry context.' },
            ].map(item => (
              <div key={item.title} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-suvora-primary/40 transition-all">
                <h3 className="font-bold text-white mb-2 text-base">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-suvora-primary hover:bg-blue-700 text-white font-semibold transition-colors">
              Get a Free Quote
            </a>
            <p className="text-slate-500 text-sm mt-3">We respond within 24 hours · teams@suvora.tech</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 z-0 pointer-events-none">
             <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-suvora-900 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
                        Ready to build <br /> your next <span className="text-suvora-accent">digital product?</span>
                    </h2>
                    <p className="text-xl text-slate-400 mb-8 max-w-md">
                        Let's discuss your technical requirements. Whether you need a high-performance web app or a complete software architecture.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-suvora-primary">
                                <ExternalLink className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white">Office</h4>
                                <p className="text-slate-400">Shaheen Heights, Suite 500<br/>Karachi, Pakistan</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-suvora-accent">
                                <ExternalLink className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white">Email</h4>
                                <p className="text-slate-400">teams@suvora.tech</p>
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