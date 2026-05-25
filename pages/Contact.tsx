import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import PageSkeleton from '../components/PageSkeleton';

const Contact = () => {
    const [loading, setLoading] = useState(true);

useEffect(() => {
  setTimeout(() => {
    setLoading(false);
  }, 1200);
}, []);
  return (
    <Layout>
        <Helmet>
  <title>Contact Us | Suvora Tech</title>

  <meta
    name="description"
    content="Get in touch with Suvora Tech for web development, AI solutions, SaaS products, and digital services."
  />
</Helmet>
      <div className="min-h-screen bg-suvora-900 text-white">

        {/* Hero Section */}
        <section className="py-28 px-6 border-b border-slate-800">
          <div className="max-w-6xl mx-auto text-center">

            <p className="text-suvora-accent uppercase tracking-[0.3em] text-sm mb-4">
              Contact Us
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Let’s Build Something
              <span className="text-suvora-primary"> Amazing</span>
            </h1>

            <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
              Whether you need a modern website, scalable web application,
              AI solution, or complete digital transformation —
              our team is ready to help.
            </p>

          </div>
        </section>

        {/* Contact Content */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

            {/* Left Side */}
            <div>

              <h2 className="text-4xl font-bold mb-8">
                Get In Touch
              </h2>

              <p className="text-slate-400 text-lg leading-relaxed mb-10">
                We work with startups, businesses, and enterprises globally.
                Tell us about your project and let’s discuss how Suvora Tech
                can help bring your vision to life.
              </p>

              <div className="space-y-8">

                {/* Email */}
                <div className="flex items-start gap-5 p-6 rounded-2xl bg-slate-900 border border-slate-800">

                  <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center text-2xl">
                    📧
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Email
                    </h3>

                    <p className="text-slate-400">
                      teams@suvora.tech
                    </p>
                  </div>

                </div>

                {/* Location */}
                <div className="flex items-start gap-5 p-6 rounded-2xl bg-slate-900 border border-slate-800">

                  <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center text-2xl">
                    📍
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Location
                    </h3>

                    <p className="text-slate-400">
                      Karachi, Pakistan
                    </p>
                  </div>

                </div>

                {/* Availability */}
                <div className="flex items-start gap-5 p-6 rounded-2xl bg-slate-900 border border-slate-800">

                  <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center text-2xl">
                    🚀
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Availability
                    </h3>

                    <p className="text-slate-400">
                      Open for freelance, startup, and enterprise projects.
                    </p>
                  </div>

                </div>

              </div>
            </div>

            {/* Right Side Form */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
              
              <h2 className="text-3xl font-bold mb-6">
                Send a Message
              </h2>

              <ContactForm />

            </div>

          </div>
        </section>

      </div>
    </Layout>
  );
};

export default Contact;