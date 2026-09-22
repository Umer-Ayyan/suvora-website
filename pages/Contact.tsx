import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import { Helmet } from 'react-helmet';
import React from 'react';
import { Mail, MapPin, Building2, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <Layout>
      <Helmet>
        <title>Contact Suvora Tech | Enterprise Technology Consulting | Karachi Pakistan</title>
        <meta
          name="description"
          content="Contact Suvora Tech: enterprise software house in Karachi, Pakistan. Consult on web development, FlowERP rollout, mobile apps, or cloud architecture."
        />
      </Helmet>

      <div className="min-h-screen bg-[#080e1a] text-white">
        {/* Hero Section */}
        <section className="py-24 px-6 border-b border-slate-800/80">
          <div className="max-w-6xl mx-auto text-center">
            <span className="text-xs font-mono text-sky-400 uppercase tracking-widest mb-3 inline-block">
              Corporate Inquiries
            </span>

            <h1 className="text-4xl sm:text-6xl font-display font-bold leading-tight mb-6">
              Connect With Our <br />
              <span className="text-blue-500">Solutions Team</span>
            </h1>

            <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Whether you are planning a modern web application, an enterprise FlowERP deployment, or digital infrastructure modernizations, our consultants are available to assist.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Side: Office & Contact Info */}
            <div>
              <span className="text-xs font-mono text-sky-400 uppercase tracking-widest mb-2 block">Direct Channels</span>
              <h2 className="text-3xl font-display font-bold mb-4 text-white">
                Global Headquarters
              </h2>

              <p className="text-slate-300 text-base leading-relaxed mb-10">
                We work with businesses, SMEs, and enterprise conglomerates across Pakistan, the Middle East, the UK, and North America.
              </p>

              <div className="space-y-6">
                {/* Office */}
                <div className="flex items-start gap-5 p-6 rounded-2xl bg-[#0f1a2e] border border-slate-800">
                  <div className="w-12 h-12 rounded-xl bg-[#080e1a] border border-slate-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-sky-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1 font-display">Karachi Corporate Office</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Shaheen Heights, Suite 500<br />Karachi, Pakistan
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-5 p-6 rounded-2xl bg-[#0f1a2e] border border-slate-800">
                  <div className="w-12 h-12 rounded-xl bg-[#080e1a] border border-slate-800 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-sky-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1 font-display">Inquiries &amp; RFP</h3>
                    <p className="text-slate-400 text-sm">
                      teams@suvora.tech
                    </p>
                  </div>
                </div>

                {/* Operations */}
                <div className="flex items-start gap-5 p-6 rounded-2xl bg-[#0f1a2e] border border-slate-800">
                  <div className="w-12 h-12 rounded-xl bg-[#080e1a] border border-slate-800 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-sky-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1 font-display">Operational Hours</h3>
                    <p className="text-slate-400 text-sm">
                      Monday &ndash; Friday: 9:00 AM &ndash; 6:00 PM PKT<br />
                      Dedicated 24/7 SLA support for enterprise clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div>
              <ContactForm />
            </div>

          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;