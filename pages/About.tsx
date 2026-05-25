import Layout from '../components/Layout';
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import PageSkeleton from '../components/PageSkeleton';
const About = () => {
    const [loading, setLoading] = useState(true);

useEffect(() => {
  setTimeout(() => {
    setLoading(false);
  }, 1200);
}, []);
  return (
    <Layout>
        <Helmet>
  <title>About Us | Suvora Tech</title>

  <meta
    name="description"
    content="Learn more about Suvora Tech and our mission to build premium digital experiences."
  />
</Helmet>
    <div className="min-h-screen bg-suvora-900 text-white">
      
      {/* Hero Section */}
      <section className="py-28 px-6 border-b border-slate-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          
          <div>
            <p className="text-suvora-accent uppercase tracking-[0.3em] text-sm mb-4">
              About Suvora
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Building Digital
              <span className="text-suvora-primary"> Experiences</span>
            </h1>

            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Suvora Tech is a modern software studio focused on
              high-performance web applications, scalable systems,
              AI-powered experiences, and premium digital products.
            </p>

            <a
  href="/case-studies"
  className="inline-block px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-slate-200 transition-all"
>
  Explore Our Work
</a>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-suvora-primary blur-3xl opacity-20 rounded-full"></div>

            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
              alt="Office"
              className="relative rounded-2xl border border-slate-800 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          <div className="p-10 rounded-2xl bg-slate-900 border border-slate-800">
            <h2 className="text-5xl font-bold text-suvora-primary mb-3">
              10+
            </h2>
            <p className="text-slate-400">
              Successful Projects Delivered
            </p>
          </div>

          <div className="p-10 rounded-2xl bg-slate-900 border border-slate-800">
            <h2 className="text-5xl font-bold text-suvora-accent mb-3">
              5+
            </h2>
            <p className="text-slate-400">
              International Clients
            </p>
          </div>

          <div className="p-10 rounded-2xl bg-slate-900 border border-slate-800">
            <h2 className="text-5xl font-bold text-green-400 mb-3">
              24/7
            </h2>
            <p className="text-slate-400">
              Support & Collaboration
            </p>
          </div>

        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-6 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">

          <p className="text-suvora-accent uppercase tracking-[0.3em] text-sm mb-6">
            Our Mission
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            We create products that combine
            <span className="text-suvora-primary"> technology</span>,
            aesthetics, and performance.
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed">
            From startup MVPs to enterprise platforms, our goal is
            to deliver software that feels premium, scalable,
            and future-ready.
          </p>

        </div>
      </section>
    </div>
    </Layout>
  );
};

export default About;