import Layout from '../components/Layout';

const Careers = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-suvora-900 text-white">

        {/* Hero Section */}
        <section className="py-28 px-6 border-b border-slate-800">
          <div className="max-w-6xl mx-auto text-center">

            <p className="text-suvora-accent uppercase tracking-[0.3em] text-sm mb-4">
              Careers at Suvora
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Build the
              <span className="text-suvora-primary"> Future</span> With Us
            </h1>

            <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
              We are building premium digital experiences for global clients.
              Join our remote-first team of developers, designers, and innovators.
            </p>

          </div>
        </section>

        {/* Open Roles */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">

            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Open Positions
              </h2>

              <p className="text-slate-400">
                Explore opportunities to grow with Suvora Tech.
              </p>
            </div>

            <div className="grid gap-8">

              {/* Job Card */}
              <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-suvora-primary transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      Frontend Developer
                    </h3>

                    <p className="text-slate-400 mb-4">
                      React / Next.js / Tailwind CSS
                    </p>

                    <div className="flex gap-3 flex-wrap">
                      <span className="px-3 py-1 rounded-full bg-slate-800 text-sm">
                        Remote
                      </span>

                      <span className="px-3 py-1 rounded-full bg-slate-800 text-sm">
                        Full Time
                      </span>

                      <span className="px-3 py-1 rounded-full bg-slate-800 text-sm">
                        Pakistan
                      </span>
                    </div>
                  </div>

                  <a
  href="mailto:teams@suvora.tech?subject=Job Application"
  className="inline-block px-8 py-4 bg-white text-black rounded-xl font-semibold hover:bg-slate-200 transition-all"
>
  Apply Now
</a>

                </div>
              </div>

              {/* Job Card */}
              <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-suvora-primary transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      UI/UX Designer
                    </h3>

                    <p className="text-slate-400 mb-4">
                      Figma / Product Design / Branding
                    </p>

                    <div className="flex gap-3 flex-wrap">
                      <span className="px-3 py-1 rounded-full bg-slate-800 text-sm">
                        Remote
                      </span>

                      <span className="px-3 py-1 rounded-full bg-slate-800 text-sm">
                        Contract
                      </span>

                      <span className="px-3 py-1 rounded-full bg-slate-800 text-sm">
                        Global
                      </span>
                    </div>
                  </div>

                 <a
  href="mailto:teams@suvora.tech?subject=Job Application"
  className="inline-block px-8 py-4 bg-white text-black rounded-xl font-semibold hover:bg-slate-200 transition-all"
>
  Apply Now
</a>

                </div>
              </div>
<div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-suvora-primary transition-all">
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

    <div>
      <h3 className="text-2xl font-bold mb-2">
        Business Executive
      </h3>

      <p className="text-slate-400 mb-4">
        Client Communication / Sales / Lead Generation
      </p>

      <div className="flex gap-3 flex-wrap">
        <span className="px-3 py-1 rounded-full bg-slate-800 text-sm">
          Remote
        </span>

        <span className="px-3 py-1 rounded-full bg-slate-800 text-sm">
          Full Time
        </span>

        <span className="px-3 py-1 rounded-full bg-slate-800 text-sm">
          Karachi
        </span>
      </div>
    </div>

    <a
      href="mailto:teams@suvora.tech?subject=Business Executive Application"
      className="inline-block px-8 py-4 bg-white text-black rounded-xl font-semibold hover:bg-slate-200 transition-all"
    >
      Apply Now
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

export default Careers;