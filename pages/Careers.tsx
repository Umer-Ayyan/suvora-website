import Layout from '../components/Layout';
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import PageSkeleton from '../components/PageSkeleton';

interface Job {
  id?: string;
  title: string;
  applyUrl: string;
}

const Careers = () => {
    const [loading, setLoading] = useState(true);
    const [jobs, setJobs] = useState<Job[]>([]);
    const [jobsLoading, setJobsLoading] = useState(true);
    const [jobsError, setJobsError] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 1200);

      const CRM_URL = 'https://suvora-crm.vercel.app';
      fetch(`${CRM_URL}/api/careers/jobs`)
        .then(res => res.json())
        .then(data => {
          if (data.jobs) {
            setJobs(data.jobs);
          }
          setJobsLoading(false);
        })
        .catch(() => {
          setJobsError(true);
          setJobsLoading(false);
        });
    }, []);

  return (
    <Layout>
        <Helmet>
  <title>Careers | Suvora Tech</title>

  <meta
    name="description"
    content="Join Suvora Tech and work on modern software, AI, and digital innovation projects."
  />
</Helmet>
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
                Open Career Opportunities
              </h2>

              <p className="text-slate-400">
                Join our team at Suvora Tech.
              </p>
            </div>

            <div className="grid gap-6">
              {jobsLoading ? (
                <div className="text-center text-slate-400 py-12">Loading open positions...</div>
              ) : jobsError ? (
                <div className="text-center text-red-400 py-12">Unable to load positions.</div>
              ) : jobs.length === 0 ? (
                <div className="text-center text-slate-400 py-12">No open positions currently available. Check back soon for new opportunities.</div>
              ) : (
                jobs.map((job, index) => (
                  <div key={job.id || index} className="p-6 md:p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-suvora-primary transition-all shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">{job.title}</h3>
                      <span className="inline-block text-xs font-bold tracking-wider uppercase text-green-400 bg-green-400/10 px-3 py-1.5 rounded-full">
                        Active Hiring
                      </span>
                    </div>
                    <a
                      href={job.applyUrl.replace('https://suvora-crm.vercel.app', 'https://crm.suvora.tech')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-8 py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors rounded-xl text-center whitespace-nowrap"
                    >
                      Apply Now
                    </a>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default Careers;
