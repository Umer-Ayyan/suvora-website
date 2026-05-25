import Layout from '../components/Layout';
import { useEffect, useState } from 'react';
import PageSkeleton from '../components/PageSkeleton';

const Blog = () => {
    const [loading, setLoading] = useState(true);

useEffect(() => {
  setTimeout(() => {
    setLoading(false);
  }, 1200);
}, []);
  return (
    <Layout>
      <div className="min-h-screen bg-suvora-900 text-white">

        {/* Hero */}
        <section className="py-28 px-6 border-b border-slate-800">
          <div className="max-w-5xl mx-auto text-center">

            <p className="text-suvora-accent uppercase tracking-[0.3em] text-sm mb-4">
              Suvora Blog
            </p>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Insights &
              <span className="text-suvora-primary"> Articles</span>
            </h1>

            <p className="text-slate-400 text-lg">
              Explore software engineering, AI automation,
              SaaS development, and modern web technologies.
            </p>

          </div>
        </section>

        {/* Blog Cards */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Blog Card */}
            
            <a
  href="/blog/best-saas-stack-2026"
  className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-suvora-primary transition-all group"
>

  <img
    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop"
    alt="SaaS Stack"
    className="w-full h-56 object-cover group-hover:scale-105 transition-all duration-700"
  />

  <div className="p-8">
    <h2 className="text-2xl font-bold mb-4">
      Best SaaS Tech Stack in 2026
    </h2>

    <p className="text-slate-400">
      Explore the best technologies for building
      scalable SaaS products in 2026.
    </p>
  </div>

</a>

            <a
  href="/blog/react-vs-nextjs"
  className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-suvora-primary transition-all group"
>

  <img
    src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200&auto=format&fit=crop"
    alt="React vs Next.js"
    className="w-full h-56 object-cover group-hover:scale-105 transition-all duration-700"
  />

  <div className="p-8">
    <h2 className="text-2xl font-bold mb-4">
      React vs Next.js in 2026
    </h2>

    <p className="text-slate-400">
      Compare React and Next.js for scalability,
      SEO, performance, and modern SaaS development.
    </p>
  </div>

</a>

            <a
              href="/blog/ai-automation"
              className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-suvora-primary transition-all group"
            >

              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop"
                alt="AI Automation"
                className="w-full h-56 object-cover group-hover:scale-105 transition-all duration-700"
              />

              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4">
                  Why Businesses Need AI Automation
                </h2>

                <p className="text-slate-400">
                  Discover how AI automation is transforming
                  operations, productivity, and scalability.
                </p>
              </div>

            </a>

          </div>
        </section>

      </div>
    </Layout>
  );
};

export default Blog;