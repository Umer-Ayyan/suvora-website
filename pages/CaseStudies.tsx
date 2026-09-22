import Layout from '../components/Layout';
import { Helmet } from 'react-helmet';
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CaseStudies = () => {
  return (
    <Layout>
      <Helmet>
        <title>Client Case Studies &amp; Enterprise Deliveries | Suvora Tech</title>
        <meta
          name="description"
          content="Explore enterprise case studies, cloud ERP implementations, and digital platforms engineered by Suvora Tech."
        />
      </Helmet>

      <div className="min-h-screen bg-[#080e1a] text-white">
        {/* Hero */}
        <section className="py-24 px-6 border-b border-slate-800/80">
          <div className="max-w-6xl mx-auto text-center">
            <span className="text-xs font-mono text-sky-400 uppercase tracking-widest mb-3 inline-block">
              Client Success
            </span>

            <h1 className="text-4xl sm:text-6xl font-display font-bold leading-tight mb-6">
              Case <span className="text-blue-500">Studies</span>
            </h1>

            <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Explore how Suvora Tech designs, builds, and deploys high-performance software systems, ERP integrations, and cloud architectures for industry leaders.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">

            {/* Project 1 */}
            <div className="bg-[#0f1a2e] rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all group">
              <div className="overflow-hidden aspect-video bg-[#080e1a]">
                <img
                  src="https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200&auto=format&fit=crop"
                  alt="Enterprise AI SaaS Platform"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  loading="lazy"
                />
              </div>

              <div className="p-8">
                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-sky-300 text-xs font-medium">
                    Enterprise SaaS
                  </span>
                  <span className="px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-sky-300 text-xs font-medium">
                    Cloud Architecture
                  </span>
                </div>

                <h2 className="text-2xl font-bold mb-3 font-display">
                  Enterprise Cloud ERP &amp; Analytics Platform
                </h2>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Engineered an enterprise-grade multi-tenant platform with automated financial workflows, real-time inventory tracking across distributed warehouses, and scalable role-based security.
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-slate-800">
                  <div>
                    <p className="text-xl font-bold text-sky-400 font-display">
                      Multi-Tenant
                    </p>
                    <p className="text-xs text-slate-400 uppercase tracking-wider">
                      Architecture
                    </p>
                  </div>

                  <a href="/contact" className="inline-flex items-center gap-1.5 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold text-xs uppercase tracking-wider transition-all">
                    <span>Discuss Solution</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-[#0f1a2e] rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all group">
              <div className="overflow-hidden aspect-video bg-[#080e1a]">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
                  alt="FinTech Analytics System"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  loading="lazy"
                />
              </div>

              <div className="p-8">
                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-sky-300 text-xs font-medium">
                    FinTech
                  </span>
                  <span className="px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-sky-300 text-xs font-medium">
                    Streaming Data
                  </span>
                </div>

                <h2 className="text-2xl font-bold mb-3 font-display">
                  High-Throughput Financial Analytics Engine
                </h2>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Implemented a low-latency financial dashboard engine utilizing WebSockets, interactive charting pipelines, and secure transaction event sourcing.
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-slate-800">
                  <div>
                    <p className="text-xl font-bold text-sky-400 font-display">
                      Sub-second
                    </p>
                    <p className="text-xs text-slate-400 uppercase tracking-wider">
                      Event Pipeline
                    </p>
                  </div>

                  <a href="/contact" className="inline-flex items-center gap-1.5 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold text-xs uppercase tracking-wider transition-all">
                    <span>Discuss Solution</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CaseStudies;