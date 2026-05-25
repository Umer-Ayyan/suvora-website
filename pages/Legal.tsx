import Layout from '../components/Layout';

const Legal = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-suvora-900 text-white">

        {/* Hero Section */}
        <section className="py-28 px-6 border-b border-slate-800">
          <div className="max-w-5xl mx-auto text-center">

            <p className="text-suvora-accent uppercase tracking-[0.3em] text-sm mb-4">
              Legal Information
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Terms &
              <span className="text-suvora-primary"> Policies</span>
            </h1>

            <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
              Transparency, trust, and professionalism are at the core of
              Suvora Tech. Please review our policies and legal terms carefully.
            </p>

          </div>
        </section>

        {/* Content */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto space-y-10">

            {/* Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10">

              <h2 className="text-3xl font-bold mb-6">
                Terms of Service
              </h2>

              <p className="text-slate-400 leading-relaxed text-lg">
                By using our services, you agree to comply with our project
                policies, delivery timelines, communication standards,
                and payment agreements. Suvora Tech reserves the right
                to update or modify services at any time.
              </p>

            </div>

            {/* Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10">

              <h2 className="text-3xl font-bold mb-6">
                Privacy Policy
              </h2>

              <p className="text-slate-400 leading-relaxed text-lg">
                We respect your privacy and ensure that all sensitive
                information, project files, and communications remain
                secure and confidential. We do not share client data
                with third parties.
              </p>

            </div>

            {/* Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10">

              <h2 className="text-3xl font-bold mb-6">
                Intellectual Property
              </h2>

              <p className="text-slate-400 leading-relaxed text-lg">
                All project assets, codebases, designs, and deliverables
                remain the intellectual property of their respective owners
                after full project completion and payment clearance.
              </p>

            </div>

            {/* Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10">

              <h2 className="text-3xl font-bold mb-6">
                Contact Information
              </h2>

              <p className="text-slate-400 leading-relaxed text-lg mb-4">
                For legal concerns, partnership inquiries, or policy-related
                questions, contact us directly:
              </p>

              <div className="space-y-2 text-lg">
                <p>
                  📧 teams@suvora.tech
                </p>

                <p>
                  📍 Karachi, Pakistan
                </p>
              </div>

            </div>

          </div>
        </section>

      </div>
    </Layout>
  );
};

export default Legal;