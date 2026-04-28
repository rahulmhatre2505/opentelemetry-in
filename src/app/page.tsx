import Link from 'next/link';

const stories = [
  {
    title: "The Great Telemetry Migration: Why Pipelines are Winning",
    author: "Editorial Board",
    excerpt: "Industry leaders are abandoning traditional agents in favor of sophisticated telemetry pipelines. We investigate the architectural shift that is redefining infrastructure monitoring across the subcontinent.",
    slug: "rise-of-telemetry-pipeline",
    category: "FRONT PAGE",
    date: "APRIL 28, 2026",
    image: "/telemetry-pipeline.png",
    featured: true
  },
  {
    title: "Market Watch: BindPlane Acquisition Shakes Ecosystem",
    author: "Market Correspondent",
    excerpt: "The consolidation of pipeline technology signals a new era of observability maturity, but raises questions about independent neutrality.",
    slug: "market-watch-bindplane",
    category: "MARKET",
    date: "APRIL 24, 2026",
    image: "/market-watch.png"
  },
  {
    title: "The Paradox of Choice in Vendor Management",
    author: "Opinion",
    excerpt: "How Neutral Fleet Management is becoming the only viable path to avoid the trap of vendor lock-in.",
    slug: "paradox-of-choice",
    category: "OPINION",
    date: "APRIL 26, 2026",
    image: "/paradox-of-choice.png"
  },
  {
    title: "CollectorCtrl Tackles 'Drift' in Large Fleets",
    author: "Tech Desk",
    excerpt: "A new approach to continuous state synchronization aims to solve the most persistent problem in distributed telemetry systems.",
    slug: "spotlight-collectorctrl-drift",
    category: "TECHNOLOGY",
    date: "APRIL 22, 2026",
    image: "/spotlight-drift.png"
  }
];

export default function Home() {
  const featured = stories.find(s => s.featured);
  const others = stories.filter(s => !s.featured);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Featured Story */}
      {featured && (
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b-2 border-foreground pb-12 mb-12">
          <div className="lg:col-span-8">
            <Link href={`/blog/${featured.slug}`} className="group">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-muted mb-4 block">
                {featured.category}
              </span>
              <h2 className="text-5xl md:text-7xl font-black mb-6 leading-none group-hover:underline">
                {featured.title}
              </h2>
              <div className="aspect-[21/9] w-full bg-slate-100 mb-8 grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden">
                <img src={featured.image} alt={featured.title} className="w-full h-full object-cover" />
              </div>
              <p className="text-2xl font-serif leading-relaxed mb-6 italic">
                "{featured.excerpt}"
              </p>
            </Link>
          </div>
          <div className="lg:col-span-4 border-l-0 lg:border-l border-foreground/10 lg:pl-12">
            <h3 className="text-xs font-black uppercase tracking-widest border-b border-foreground mb-6 pb-2">
              Inside This Edition
            </h3>
            <div className="space-y-8">
              {others.map((story, i) => (
                <Link key={i} href={`/blog/${story.slug}`} className="block group">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted">
                    {story.category}
                  </span>
                  <h4 className="text-xl font-bold group-hover:underline mt-1">
                    {story.title}
                  </h4>
                  <p className="text-sm text-muted line-clamp-2 mt-2 font-serif">
                    {story.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Multi-column News Feed */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 newspaper-column">
        <div className="space-y-12">
          <article className="border-b border-foreground/10 pb-8">
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted">Briefs</span>
            <h3 className="text-2xl font-black mt-2 mb-4 uppercase">New Release: OTel Collector v0.100.0</h3>
            <p className="font-serif leading-relaxed">
              The community celebrates a major milestone with the release of v0.100.0, bringing enhanced stability to the OTLP/HTTP receiver and improved memory management for high-throughput environments.
            </p>
          </article>
          <article>
            <h3 className="text-xl font-bold mb-4 italic">"Neutrality is not a luxury, it's a requirement for the modern enterprise."</h3>
            <p className="text-sm uppercase tracking-widest font-black">— Common Wisdom</p>
          </article>
        </div>

        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12 border-l-0 md:border-l border-foreground/10 md:pl-12">
          <div className="space-y-12">
            <article>
              <img src="/market-watch.png" alt="Market" className="w-full grayscale mb-4" />
              <h3 className="text-2xl font-black uppercase leading-tight">Bangalore to host OpenTelemetry Day 2026</h3>
              <p className="font-serif mt-2">
                The garden city prepares for the largest gathering of observability practitioners in Asia. Registration opens next week for the two-day summit at the Palace Grounds.
              </p>
            </article>
          </div>
          <div className="space-y-12">
             <article className="bg-slate-50 dark:bg-slate-900 p-6 border-t-4 border-foreground">
               <span className="text-[10px] font-bold uppercase tracking-widest text-muted mb-2 block">Advertisement</span>
               <h4 className="text-xl font-black mb-4">Eliminate Config Drift</h4>
               <p className="text-sm font-serif mb-4">
                 Stop manual SSH-ing into collectors. CollectorCtrl provides the neutral fleet management layer you deserve.
               </p>
               <Link href="https://collectorctrl.com" className="text-xs font-black uppercase tracking-widest underline">
                 Learn More
               </Link>
             </article>
             <article>
               <h3 className="text-lg font-bold uppercase">Community Spotlight</h3>
               <p className="font-serif text-sm mt-2">
                 How a team of developers in Pune reduced their data egress costs by 40% using the OTel transform processor.
               </p>
             </article>
          </div>
        </div>
      </section>
      
      {/* Footer-like Masthead repetition */}
      <div className="mt-24 pt-8 border-t-4 border-double border-foreground text-center">
        <h2 className="text-4xl font-black uppercase tracking-tighter italic">The Times of Telemetry</h2>
      </div>
    </div>
  );
}
