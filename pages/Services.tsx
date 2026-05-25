import Layout from '../components/Layout';
import { Helmet } from 'react-helmet';
const Services = () => {
  return (
    <Layout>
        <Helmet>
  <title>Services | Suvora Tech</title>

  <meta
    name="description"
    content="Explore web development, AI solutions, SaaS products, UI/UX design, and cloud services by Suvora Tech."
  />
</Helmet>

      <div className="min-h-screen bg-suvora-900 text-white">

        {/* Hero Section */}
        <section className="py-28 px-6 border-b border-slate-800">
          <div className="max-w-6xl mx-auto text-center">

            <p className="text-suvora-accent uppercase tracking-[0.3em] text-sm mb-4">
              Our Services
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Digital Solutions
              <span className="text-suvora-primary"> That Scale</span>
            </h1>

            <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
              We help startups and businesses build modern digital products
              with powerful technology, premium design, and scalable systems.
            </p>

          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Service Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-suvora-primary transition-all group">
              
              <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center mb-6 text-3xl">
                🌐
              </div>

              <h2 className="text-2xl font-bold mb-4">
                Web Development
              </h2>

              <p className="text-slate-400 leading-relaxed mb-6">
                High-performance websites and scalable web applications
                built with modern technologies like React, Next.js,
                and TypeScript.
              </p>

             <a
  href="/contact"
  className="text-suvora-accent font-semibold hover:text-white transition-all"
>
  Learn More →
</a>

            </div>

            {/* Service Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-suvora-primary transition-all group">
              
              <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center mb-6 text-3xl">
                🎨
              </div>

              <h2 className="text-2xl font-bold mb-4">
                UI/UX Design
              </h2>

              <p className="text-slate-400 leading-relaxed mb-6">
                Elegant and user-focused interfaces designed to improve
                engagement, usability, and overall digital experience.
              </p>

             <a
  href="/contact"
  className="text-suvora-accent font-semibold hover:text-white transition-all"
>
  Learn More →
</a>
            </div>

            {/* Service Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-suvora-primary transition-all group">
              
              <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center mb-6 text-3xl">
                🤖
              </div>

              <h2 className="text-2xl font-bold mb-4">
                AI Solutions
              </h2>

              <p className="text-slate-400 leading-relaxed mb-6">
                AI-powered systems, automation tools, chatbots,
                and intelligent workflows designed for modern businesses.
              </p>

             <a
  href="/contact"
  className="text-suvora-accent font-semibold hover:text-white transition-all"
>
  Learn More →
</a>

            </div>

            {/* Service Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-suvora-primary transition-all group">
              
              <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center mb-6 text-3xl">
                📱
              </div>

              <h2 className="text-2xl font-bold mb-4">
                Mobile Apps
              </h2>

              <p className="text-slate-400 leading-relaxed mb-6">
                Cross-platform mobile applications with premium UI,
                smooth performance, and scalable backend systems.
              </p>

             <a
  href="/contact"
  className="text-suvora-accent font-semibold hover:text-white transition-all"
>
  Learn More →
</a>

            </div>

            {/* Service Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-suvora-primary transition-all group">
              
              <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center mb-6 text-3xl">
                ☁️
              </div>

              <h2 className="text-2xl font-bold mb-4">
                Cloud Infrastructure
              </h2>

              <p className="text-slate-400 leading-relaxed mb-6">
                Secure cloud deployment, server management,
                CI/CD pipelines, and enterprise-grade scalability solutions.
              </p>

              <a
  href="/contact"
  className="text-suvora-accent font-semibold hover:text-white transition-all"
>
  Learn More →
</a>

            </div>

            {/* Service Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-suvora-primary transition-all group">
              
              <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center mb-6 text-3xl">
                🚀
              </div>

              <h2 className="text-2xl font-bold mb-4">
                Startup MVPs
              </h2>

              <p className="text-slate-400 leading-relaxed mb-6">
                Rapid MVP development for startups looking to launch,
                validate ideas, and scale products faster.
              </p>

              <a
  href="/contact"
  className="text-suvora-accent font-semibold hover:text-white transition-all"
>
  Learn More →
</a>

            </div>

          </div>
        </section>

      </div>
    <section className="py-24 px-6">
  <div className="max-w-5xl mx-auto">

    <h2 className="text-4xl font-bold mb-12">
      Frequently Asked Questions
    </h2>

    <div className="space-y-8">

      <div>
        <h3 className="text-2xl font-semibold mb-3">
          What services does Suvora Tech provide?
        </h3>

        <p className="text-slate-400">
          Suvora Tech provides web development,
          AI solutions, SaaS development,
          UI/UX design, mobile apps,
          and cloud infrastructure services.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-3">
          Do you work with international clients?
        </h3>

        <p className="text-slate-400">
          Yes, we work remotely with startups,
          enterprises, and businesses globally.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-3">
          Which technologies do you use?
        </h3>

        <p className="text-slate-400">
          We use React, Next.js, TypeScript,
          Node.js, Tailwind CSS, AI APIs,
          and modern cloud platforms.
        </p>
      </div>

    </div>
  </div>
</section>

    </Layout>
  );
};

export default Services;