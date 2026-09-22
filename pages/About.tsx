import Layout from '../components/Layout';
import { Helmet } from 'react-helmet';
import React from 'react';

const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>About Suvora Tech | Enterprise Technology Consulting Karachi Pakistan</title>
        <meta
          name="description"
          content="Suvora Tech is an enterprise technology consulting and software engineering firm based in Karachi, Pakistan. We engineer digital transformation and cloud ERP systems."
        />
      </Helmet>

      <div className="min-h-screen bg-[#080e1a] text-white">
        {/* Hero Section */}
        <section className="py-24 px-6 border-b border-slate-800/80">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-mono text-sky-400 uppercase tracking-widest mb-3 inline-block">
                Company Profile
              </span>

              <h1 className="text-4xl sm:text-6xl font-display font-bold leading-tight mb-6">
                Engineering Digital <br />
                <span className="text-blue-500">Transformation</span>
              </h1>

              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Suvora Tech is an enterprise technology firm based in Karachi, Pakistan. We partner with business leaders, enterprises, and public institutions to build dependable software architectures, mission-critical business applications, and scalable cloud systems.
              </p>

              <a
                href="/case-studies"
                className="inline-block px-8 py-3.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-500 transition-all text-sm uppercase tracking-wider shadow-sm"
              >
                Explore Case Studies
              </a>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
                alt="Corporate Office"
                className="relative rounded-2xl border border-slate-800 shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Enterprise Metrics */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#0f1a2e] border border-slate-800">
              <h2 className="text-4xl font-bold text-blue-400 font-display mb-2">15+</h2>
              <p className="text-slate-300 text-sm font-semibold">Enterprise Systems Delivered</p>
              <p className="text-slate-400 text-xs mt-1">Successfully shipped web architectures, portals, and cloud solutions.</p>
            </div>

            <div className="p-8 rounded-2xl bg-[#0f1a2e] border border-slate-800">
              <h2 className="text-4xl font-bold text-sky-400 font-display mb-2">2</h2>
              <p className="text-slate-300 text-sm font-semibold">Operating Locations</p>
              <p className="text-slate-400 text-xs mt-1">Headquartered in Karachi with engineering hubs servicing global clients.</p>
            </div>

            <div className="p-8 rounded-2xl bg-[#0f1a2e] border border-slate-800">
              <h2 className="text-4xl font-bold text-blue-400 font-display mb-2">18+</h2>
              <p className="text-slate-300 text-sm font-semibold">ERP Industry Presets</p>
              <p className="text-slate-400 text-xs mt-1">Pre-configured business workflows tailored to Pakistani SME operations.</p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-6 border-t border-slate-800/80 bg-[#050914]">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs font-mono text-sky-400 uppercase tracking-widest mb-3 inline-block">Our Foundation</span>
            <h2 className="text-3xl font-display font-bold text-white mb-6">Built on Integrity, Engineering Rigor &amp; Proven Delivery</h2>
            <p className="text-slate-300 text-base leading-relaxed max-w-2xl mx-auto">
              Our engineering culture centers on software sustainability, high-concurrency performance, and transparent delivery milestones. We build systems designed to operate without failure under enterprise demand.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;