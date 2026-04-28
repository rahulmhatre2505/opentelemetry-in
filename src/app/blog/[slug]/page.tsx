import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return [
    { slug: 'rise-of-telemetry-pipeline' },
    { slug: 'paradox-of-choice' },
    { slug: 'market-watch-bindplane' },
    { slug: 'spotlight-collectorctrl-drift' },
  ];
}

const articlesContent = {
  "rise-of-telemetry-pipeline": {
    title: "The Rise of the Telemetry Pipeline",
    category: "Architecture",
    date: "April 28, 2026",
    image: "/telemetry-pipeline.png",
    content: `
      <p class="text-xl leading-relaxed mb-8 font-medium">For years, observability was about "agents." You installed an agent, it sent data to a vendor, and you hoped for the best. But as infrastructure scales, this model is breaking. Enter the Telemetry Pipeline.</p>
      
      <h2 class="text-3xl font-bold mt-12 mb-6">Why Agents aren't enough</h2>
      <p class="mb-6">Standard agents are often rigid. They couple your data collection directly to your backend vendor. If you want to switch vendors or send data to multiple places, you have to reconfigure or redeploy your entire fleet. This is the definition of vendor lock-in.</p>
      
      <h2 class="text-3xl font-bold mt-12 mb-6">The Pipeline Philosophy</h2>
      <p class="mb-6">A telemetry pipeline (like the OpenTelemetry Collector) acts as a buffer and a processor between your sources and your destinations. It allows you to transform, filter, and route data in real-time without touching your application code.</p>
      
      <ul class="list-disc pl-6 mb-8 space-y-4">
        <li><strong>Scalability:</strong> Handle massive spikes in telemetry without crashing your backend.</li>
        <li><strong>Cost Control:</strong> Drop redundant or low-value data before it hits your expensive SaaS bill.</li>
        <li><strong>Security:</strong> Redact PII and sensitive information at the edge.</li>
      </ul>

      <div class="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 my-12">
        <h3 class="text-xl font-bold mb-4">The Verdict</h3>
        <p class="italic">"The future of observability isn't just about collecting data; it's about controlling it. Pipelines are the control plane of the modern telemetry stack."</p>
      </div>
    `
  },
  "paradox-of-choice": {
    title: "The Paradox of Choice",
    category: "Strategy",
    date: "April 26, 2026",
    image: "/paradox-of-choice.png",
    content: `
      <p class="text-xl leading-relaxed mb-8 font-medium">In the observability world, we are drowning in options. Every vendor promises the "single pane of glass," yet we end up with a dozen shards of broken mirrors. The paradox of choice has led us to a critical junction: Neutral Fleet Management.</p>
      
      <h2 class="text-3xl font-bold mt-12 mb-6">The Vendor Lock-in Trap</h2>
      <p class="mb-6">When your collection strategy is dictated by your backend provider, you lose leverage. Prices go up, features stagnate, and you're stuck because the cost of migrating your agents is too high.</p>
      
      <h2 class="text-3xl font-bold mt-12 mb-6">Neutrality as a Feature</h2>
      <p class="mb-6">By using OpenTelemetry and a neutral management layer, you decouple your data from your vendor. This isn't just a technical choice; it's a strategic one. It allows you to treat your observability vendors as interchangeable components.</p>
      
      <p class="mb-6">Neutral fleet management allows you to manage thousands of collectors across different clouds and regions from a single, vendor-agnostic interface.</p>
    `
  },
  "market-watch-bindplane": {
    title: "Market Watch: The BindPlane Acquisition",
    category: "Industry",
    date: "April 24, 2026",
    image: "/market-watch.png",
    content: `
      <p class="text-xl leading-relaxed mb-8 font-medium">The recent news of the BindPlane acquisition has sent ripples through the OpenTelemetry community. What does it mean for the future of "Open" telemetry?</p>
      
      <h2 class="text-3xl font-bold mt-12 mb-6">Consolidation in the Pipeline</h2>
      <p class="mb-6">As telemetry pipelines become essential, major vendors are racing to acquire the best tech in the space. This consolidation validates the pipeline model but also raises questions about long-term neutrality.</p>
      
      <h2 class="text-3xl font-bold mt-12 mb-6">The Impact on India</h2>
      <p class="mb-6">For the Indian tech ecosystem, which is rapidly adopting cloud-native architectures, this means more choices but also a greater need for independent, authoritative voices to navigate these changes.</p>
    `
  },
  "spotlight-collectorctrl-drift": {
    title: "Feature Spotlight: Solving 'Drift'",
    category: "Product",
    date: "April 22, 2026",
    image: "/spotlight-drift.png",
    content: `
      <p class="text-xl leading-relaxed mb-8 font-medium">Configuring one collector is easy. Configuring a thousand? That's where "Drift" happens. We look at how CollectorCtrl is tackling one of the most annoying problems in fleet management.</p>
      
      <h2 class="text-3xl font-bold mt-12 mb-6">What is Configuration Drift?</h2>
      <p class="mb-6">Drift occurs when the actual configuration of a collector in the field deviates from its intended state. This can happen due to manual overrides, partial updates, or network failures. In large fleets, drift is almost inevitable.</p>
      
      <h2 class="text-3xl font-bold mt-12 mb-6">The CollectorCtrl Approach</h2>
      <p class="mb-6">CollectorCtrl solves this by implementing continuous state synchronization. It doesn't just "push" configs; it monitors the state and automatically remediates any deviations.</p>
      
      <div class="bg-accent/5 border border-accent/20 rounded-2xl p-8 my-12">
        <h3 class="text-xl font-bold mb-4 text-accent">Key Innovation</h3>
        <p>By using a "Desired State" model, CollectorCtrl ensures that your entire telemetry pipeline remains consistent, regardless of scale.</p>
      </div>
    `
  }
};

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const article = articlesContent[slug as keyof typeof articlesContent];

  if (!article) {
    notFound();
  }

  return (
    <article className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="mb-12 text-center">
        <div className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
          {article.category} • {article.date}
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8">
          {article.title}
        </h1>
        <div className="aspect-video w-full rounded-3xl overflow-hidden mb-12 shadow-2xl">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div 
        className="prose prose-lg dark:prose-invert max-w-none editorial-content"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      <div className="mt-24 pt-12 border-t border-slate-200 dark:border-slate-800">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-8 bg-slate-50 dark:bg-slate-900 rounded-3xl p-10">
          <div className="max-w-md text-center sm:text-left">
            <h3 className="text-2xl font-bold mb-2">Build better pipelines.</h3>
            <p className="text-muted">Take control of your telemetry with CollectorCtrl. Neutral, powerful fleet management.</p>
          </div>
          <Link 
            href="https://collectorctrl.com" 
            className="bg-midnight dark:bg-white text-white dark:text-midnight px-8 py-4 rounded-full font-bold hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Learn More
          </Link>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <Link href="/" className="text-muted hover:text-foreground font-medium flex items-center justify-center gap-2">
          ← Back to the Editorial
        </Link>
      </div>
    </article>
  );
}
