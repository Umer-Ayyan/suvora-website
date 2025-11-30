import React from 'react';
import Layout from './components/Layout';
import HeroSection from './components/HeroSection';
import ContactForm from './components/ContactForm';
import { SERVICES, PORTFOLIO, TEAM, ICON_MAP, TECH_STACK } from './constants';
import { ArrowRight, ExternalLink } from 'lucide-react';

const App: React.FC = () => {
  return (
    <Layout>
      <HeroSection />

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
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Selected Works</h2>
                    <p className="text-slate-400">Transforming industries through code.</p>
                </div>
                <a href="#" className="flex items-center gap-2 text-suvora-accent font-medium hover:text-white transition-colors">
                    View all projects <ArrowRight className="w-4 h-4" />
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
                                    <div className="text-xs text-slate-500 uppercase tracking-wider">Key Result</div>
                                </div>
                                <div className="flex items-center justify-end">
                                    <button className="flex items-center gap-2 text-white border-b border-white hover:text-suvora-primary hover:border-suvora-primary transition-colors pb-1">
                                        Read Case Study <ArrowRight className="w-4 h-4" />
                                    </button>
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
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">The Collective</h2>
                    <p className="text-lg text-slate-400 leading-relaxed">
                        Suvora isn't just a software shop. We are a collective of engineers, artists, and strategists obsessed with the bleeding edge of web technology. We believe code is the clay of the 21st century.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 bg-slate-900 rounded-xl border border-slate-800">
                        <div className="text-4xl font-bold text-suvora-primary mb-2">50+</div>
                        <div className="text-sm text-slate-500">Projects Delivered</div>
                    </div>
                    <div className="p-6 bg-slate-900 rounded-xl border border-slate-800">
                        <div className="text-4xl font-bold text-suvora-accent mb-2">3</div>
                        <div className="text-sm text-slate-500">Global Hubs</div>
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

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
        {/* Abstract Background for Contact */}
        <div className="absolute inset-0 z-0">
             <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-suvora-900 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
                        Ready to build <br /> the <span className="text-suvora-accent">impossible?</span>
                    </h2>
                    <p className="text-xl text-slate-400 mb-8 max-w-md">
                        Let's discuss your technical challenges. Whether you need a high-performance web app or a complete digital transformation.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-suvora-primary">
                                <ExternalLink className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white">Office</h4>
                                <p className="text-slate-400">101 Mission St, Suite 500<br/>San Francisco, CA 94105</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-suvora-accent">
                                <ExternalLink className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white">Email</h4>
                                <p className="text-slate-400">hello@suvora.tech</p>
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