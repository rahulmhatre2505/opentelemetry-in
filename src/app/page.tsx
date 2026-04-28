import Link from 'next/link';

const articles = [
  {
    title: "The Rise of the Telemetry Pipeline",
    description: "Why the industry is shifting from 'agents' to 'pipelines' and what it means for your infrastructure.",
    slug: "rise-of-telemetry-pipeline",
    category: "Architecture",
    date: "April 28, 2026",
    readTime: "6 min read",
    image: "/telemetry-pipeline.png"
  },
  {
    title: "The Paradox of Choice",
    description: "Why Neutral Fleet Management is the only way to avoid vendor lock-in in the modern observability stack.",
    slug: "paradox-of-choice",
    category: "Strategy",
    date: "April 26, 2026",
    readTime: "8 min read",
    image: "/paradox-of-choice.png"
  },
  {
    title: "Market Watch: The BindPlane Acquisition",
    description: "Analyzing the BindPlane acquisition and what it means for the OpenTelemetry community in India.",
    slug: "market-watch-bindplane",
    category: "Industry",
    date: "April 24, 2026",
    readTime: "5 min read",
    image: "/market-watch.png"
  },
  {
    title: "Feature Spotlight: Solving 'Drift'",
    description: "How CollectorCtrl is solving the 'Drift' problem in fleet management for OpenTelemetry collectors.",
    slug: "spotlight-collectorctrl-drift",
    category: "Product",
    date: "April 22, 2026",
    readTime: "4 min read",
    image: "/spotlight-drift.png"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-midnight text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 animate-fade-in-up">
            The Authoritative Voice of <span className="text-accent">OpenTelemetry</span> in India
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 animate-fade-in-up [animation-delay:200ms]">
            High-intent editorial content and community-driven insights for the next generation of telemetry pipelines.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up [animation-delay:400ms]">
            <Link 
              href="/blog" 
              className="bg-white text-midnight px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-colors shadow-lg shadow-white/10"
            >
              Read the Editorial
            </Link>
            <Link 
              href="/community" 
              className="border border-slate-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-800 transition-colors"
            >
              Join the Community
            </Link>
          </div>
        </div>
        {/* Abstract background element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900 blur-[120px] rounded-full" />
        </div>
      </section>

      {/* Featured Articles Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Latest from the Pipeline</h2>
            <p className="text-muted mt-2">Deep dives into the world of cloud-native observability.</p>
          </div>
          <Link href="/blog" className="text-accent font-semibold hover:underline hidden sm:block">
            View all articles →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {articles.map((article, index) => (
            <Link 
              key={index} 
              href={`/blog/${article.slug}`}
              className="group flex flex-col space-y-4"
            >
              <div className="aspect-video w-full bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden relative transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-accent/10">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-accent">
                  <span>{article.category}</span>
                  <span className="text-slate-300 dark:text-slate-700">•</span>
                  <span className="text-muted">{article.date}</span>
                </div>
                <h3 className="text-2xl font-bold group-hover:text-accent transition-colors leading-tight">
                  {article.title}
                </h3>
                <p className="text-muted line-clamp-2 leading-relaxed">
                  {article.description}
                </p>
                <div className="pt-2 text-sm font-semibold flex items-center gap-2">
                  Read article 
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="bg-slate-50 dark:bg-slate-900 py-24 px-4 sm:px-6 lg:px-8 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Stay ahead of the drift.</h2>
          <p className="text-lg text-muted mb-8">
            Get the latest insights on OpenTelemetry and telemetry pipelines delivered to your inbox. No spam, just high-value tech analysis.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow px-6 py-4 rounded-full bg-white dark:bg-midnight border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
              required
            />
            <button 
              type="submit" 
              className="bg-midnight dark:bg-white text-white dark:text-midnight px-8 py-4 rounded-full font-bold hover:opacity-90 transition-opacity"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
