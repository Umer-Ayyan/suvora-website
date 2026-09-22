import Layout from '../components/Layout';
import { Helmet } from 'react-helmet';
import React from 'react';
import { Globe, Palette, Cpu, Smartphone, Cloud, Rocket } from 'lucide-react';

const Services = () => {
  return (
    <Layout>
      <Helmet>
        <title>Enterprise Software Development &amp; Cloud Capabilities | Suvora Tech</title>
        <meta name="description" content="Suvora Tech delivers enterprise software development, cloud infrastructure, AI solutions, and ERP engineering in Pakistan and globally." />
        <meta name="keywords" content="enterprise software Pakistan, cloud consulting Karachi, mobile app development Pakistan, AI solutions Pakistan, ERP software Pakistan, software house Karachi" />
        <link rel="canonical" href="https://suvora.tech/services" />
      </Helmet>

      <div className="min-h-screen bg-[#080e1a] text-white">
        {/* Hero Section */}
        <section className="py-24 px-6 border-b border-slate-800/80">
          <div className="max-w-6xl mx-auto text-center">
            <span className="text-xs font-mono text-sky-400 uppercase tracking-widest mb-3 inline-block">
              Strategic Capabilities
            </span>

            <h1 className="text-4xl sm:text-6xl font-display font-bold leading-tight mb-6">
              Enterprise Engineering <br />
              <span className="text-blue-500">Built to Scale</span>
            </h1>

            <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
              We partner with ambitious enterprises and scaling organizations to architect, build, and deploy resilient digital platforms, cloud infrastructure, and intelligent automation.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Service Card 1 */}
            <div className="bg-[#0f1a2e] border border-slate-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-950/20 group">
              <div className="w-14 h-14 rounded-xl bg-[#080e1a] border border-slate-800 flex items-center justify-center mb-6">
                <Globe className="w-7 h-7 text-sky-400" />
              </div>
              <h2 className="text-xl font-bold mb-3 font-display">Digital Engineering</h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                High-throughput web applications, enterprise portals, and headless architectures engineered with Next.js, React, and TypeScript.
              </p>
              <a href="/contact" className="text-sky-400 font-semibold hover:text-white transition-all text-xs uppercase tracking-wider">
                Discuss Web Architecture &rarr;
              </a>
            </div>

            {/* Service Card 2 */}
            <div className="bg-[#0f1a2e] border border-slate-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-950/20 group">
              <div className="w-14 h-14 rounded-xl bg-[#080e1a] border border-slate-800 flex items-center justify-center mb-6">
                <Cloud className="w-7 h-7 text-sky-400" />
              </div>
              <h2 className="text-xl font-bold mb-3 font-display">Enterprise Cloud &amp; DevOps</h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                High-availability cloud migrations, automated CI/CD deployment pipelines, container orchestration, and serverless infrastructure.
              </p>
              <a href="/contact" className="text-sky-400 font-semibold hover:text-white transition-all text-xs uppercase tracking-wider">
                Consult on Cloud Architecture &rarr;
              </a>
            </div>

            {/* Service Card 3 */}
            <div className="bg-[#0f1a2e] border border-slate-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-950/20 group">
              <div className="w-14 h-14 rounded-xl bg-[#080e1a] border border-slate-800 flex items-center justify-center mb-6">
                <Cpu className="w-7 h-7 text-sky-400" />
              </div>
              <h2 className="text-xl font-bold mb-3 font-display">Applied AI &amp; Automation</h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Enterprise AI integration, custom conversational assistants, document parsing pipelines, and intelligent operational workflows.
              </p>
              <a href="/contact" className="text-sky-400 font-semibold hover:text-white transition-all text-xs uppercase tracking-wider">
                Explore AI Integration &rarr;
              </a>
            </div>

            {/* Service Card 4 */}
            <div className="bg-[#0f1a2e] border border-slate-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-950/20 group">
              <div className="w-14 h-14 rounded-xl bg-[#080e1a] border border-slate-800 flex items-center justify-center mb-6">
                <Smartphone className="w-7 h-7 text-sky-400" />
              </div>
              <h2 className="text-xl font-bold mb-3 font-display">Cross-Platform Mobile</h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Production-grade mobile applications for iOS and Android built on React Native and Flutter with real-time enterprise sync.
              </p>
              <a href="/contact" className="text-sky-400 font-semibold hover:text-white transition-all text-xs uppercase tracking-wider">
                Plan Mobile Build &rarr;
              </a>
            </div>

            {/* Service Card 5 */}
            <div className="bg-[#0f1a2e] border border-slate-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-950/20 group">
              <div className="w-14 h-14 rounded-xl bg-[#080e1a] border border-slate-800 flex items-center justify-center mb-6">
                <Palette className="w-7 h-7 text-sky-400" />
              </div>
              <h2 className="text-xl font-bold mb-3 font-display">Enterprise UI/UX Design</h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                User-centered design systems, data dashboard interfaces, and interactive prototypes built for complex enterprise workflows.
              </p>
              <a href="/contact" className="text-sky-400 font-semibold hover:text-white transition-all text-xs uppercase tracking-wider">
                Request Design Review &rarr;
              </a>
            </div>

            {/* Service Card 6 */}
            <div className="bg-[#0f1a2e] border border-slate-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-950/20 group">
              <div className="w-14 h-14 rounded-xl bg-[#080e1a] border border-slate-800 flex items-center justify-center mb-6">
                <Rocket className="w-7 h-7 text-sky-400" />
              </div>
              <h2 className="text-xl font-bold mb-3 font-display">Custom ERP Implementation</h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Tailored rollout of FlowERP and custom ERP extensions covering multi-branch inventory, manufacturing, accounting, and supply chain.
              </p>
              <a href="/contact" className="text-sky-400 font-semibold hover:text-white transition-all text-xs uppercase tracking-wider">
                Consult on ERP Rollout &rarr;
              </a>
            </div>

          </div>
        </section>

        {/* Enterprise FAQ */}
        <section className="py-24 px-6 bg-[#050914] border-t border-slate-800/80">
          <div className="max-w-4xl mx-auto">
            <span className="text-xs font-mono text-sky-400 uppercase tracking-widest mb-3 inline-block">Support &amp; FAQ</span>
            <h2 className="text-3xl font-display font-bold text-white mb-10">Frequently Asked Inquiries</h2>

            <div className="space-y-8">
              <div className="p-6 rounded-xl bg-[#0f1a2e] border border-slate-800">
                <h3 className="text-lg font-semibold text-white mb-2 font-display">What core services does Suvora Tech provide?</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Suvora Tech delivers digital engineering, cloud ERP software (FlowERP), enterprise cloud &amp; DevOps, mobile applications, and applied AI systems for companies across Pakistan and international markets.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#0f1a2e] border border-slate-800">
                <h3 className="text-lg font-semibold text-white mb-2 font-display">Do you support international clients and distributed teams?</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Yes. We operate as a trusted remote engineering partner for startups and enterprises across the UAE, UK, US, and Saudi Arabia, providing dedicated engineering pods and managed software delivery.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#0f1a2e] border border-slate-800">
                <h3 className="text-lg font-semibold text-white mb-2 font-display">How does FlowERP integration work for local businesses?</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  FlowERP includes 18 pre-configured industry workflows (textile, pharma, freight, distribution, restaurant) with full support for Pakistani tax requirements, localized invoicing, and PKR subscription pricing.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Services;