import Link from 'next/link';

const articles = [
  {
    title: "The Rise of the Telemetry Pipeline",
    description: "Why the industry is shifting from 'agents' to 'pipelines' and what it means for your infrastructure.",
    slug: "rise-of-telemetry-pipeline",
    category: "Architecture",
    date: "April 28, 2026",
    image: "/telemetry-pipeline.png"
  },
  {
    title: "The Paradox of Choice",
    description: "Why Neutral Fleet Management is the only way to avoid vendor lock-in in the modern observability stack.",
    slug: "paradox-of-choice",
    category: "Strategy",
    date: "April 26, 2026",
    image: "/paradox-of-choice.png"
  },
  {
    title: "Market Watch: The BindPlane Acquisition",
    description: "Analyzing the BindPlane acquisition and what it means for the OpenTelemetry community in India.",
    slug: "market-watch-bindplane",
    category: "Industry",
    date: "April 24, 2026",
    image: "/market-watch.png"
  },
  {
    title: "Feature Spotlight: Solving 'Drift'",
    description: "How CollectorCtrl is solving the 'Drift' problem in fleet management for OpenTelemetry collectors.",
    slug: "spotlight-collectorctrl-drift",
    category: "Product",
    date: "April 22, 2026",
    image: "/spotlight-drift.png"
  }
];

export default function BlogPage() {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Editorial</h1>
        <p className="text-xl text-muted">Deep dives, industry analysis, and technical spotlights.</p>
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
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-accent">
                <span>{article.category}</span>
                <span className="text-slate-300 dark:text-slate-700">•</span>
                <span className="text-muted">{article.date}</span>
              </div>
              <h2 className="text-2xl font-bold group-hover:text-accent transition-colors">
                {article.title}
              </h2>
              <p className="text-muted line-clamp-2">
                {article.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
