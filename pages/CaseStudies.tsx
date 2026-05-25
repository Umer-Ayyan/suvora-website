import Layout from '../components/Layout';
import { Helmet } from 'react-helmet';
const CaseStudies = () => {
  return (
    <Layout>
        <Helmet>
  <title>Case Studies | Suvora Tech</title>

  <meta
    name="description"
    content="Explore successful projects, SaaS platforms, AI systems, and digital products built by Suvora Tech."
  />
</Helmet>
      <div className="min-h-screen bg-suvora-900 text-white">

        {/* Hero */}
        <section className="py-28 px-6 border-b border-slate-800">
          <div className="max-w-6xl mx-auto text-center">

            <p className="text-suvora-accent uppercase tracking-[0.3em] text-sm mb-4">
              Our Work
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Case
              <span className="text-suvora-primary"> Studies</span>
            </h1>

            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              We engineer scalable, high-performance digital experiences
              for startups, enterprises, and ambitious brands worldwide.
            </p>

          </div>
        </section>

        {/* Projects */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">

            {/* Project Card */}
            <div className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-suvora-primary transition-all group">

              <div className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200&auto=format&fit=crop"
                  alt="Project"
                  className="w-full h-72 object-cover group-hover:scale-105 transition-all duration-700"
                />
              </div>

              <div className="p-8">

                <div className="flex gap-3 mb-5 flex-wrap">
                  <span className="px-3 py-1 rounded-full bg-slate-800 text-sm">
                    Web App
                  </span>

                  <span className="px-3 py-1 rounded-full bg-slate-800 text-sm">
                    AI
                  </span>
                </div>

                <h2 className="text-3xl font-bold mb-4">
                  AI SaaS Platform
                </h2>

                <p className="text-slate-400 leading-relaxed mb-6">
                  Built a scalable AI-powered SaaS application with modern UI,
                  real-time dashboards, and enterprise-grade infrastructure.
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-bold text-suvora-primary">
                      +240%
                    </p>

                    <p className="text-sm text-slate-500">
                      User Growth
                    </p>
                  </div>

                  <button className="px-6 py-3 bg-white text-black rounded-xl font-semibold hover:bg-slate-200 transition-all">
                    View Project
                  </button>
                </div>

              </div>
            </div>

            {/* Project Card */}
            <div className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-suvora-primary transition-all group">

              <div className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
                  alt="Project"
                  className="w-full h-72 object-cover group-hover:scale-105 transition-all duration-700"
                />
              </div>

              <div className="p-8">

                <div className="flex gap-3 mb-5 flex-wrap">
                  <span className="px-3 py-1 rounded-full bg-slate-800 text-sm">
                    Fintech
                  </span>

                  <span className="px-3 py-1 rounded-full bg-slate-800 text-sm">
                    Dashboard
                  </span>
                </div>

                <h2 className="text-3xl font-bold mb-4">
                  Finance Analytics System
                </h2>

                <p className="text-slate-400 leading-relaxed mb-6">
                  Developed a modern financial dashboard with advanced analytics,
                  reporting tools, and responsive data visualization.
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-bold text-suvora-accent">
                      1M+
                    </p>

                    <p className="text-sm text-slate-500">
                      Transactions
                    </p>
                  </div>

                  <button className="px-6 py-3 bg-white text-black rounded-xl font-semibold hover:bg-slate-200 transition-all">
                    View Project
                  </button>
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