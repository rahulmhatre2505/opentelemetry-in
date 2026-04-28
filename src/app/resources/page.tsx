import Link from 'next/link';

export default function ResourcesPage() {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Resources</h1>
        <p className="text-xl text-muted">Everything you need to master OpenTelemetry.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 border border-slate-200 dark:border-slate-800 rounded-3xl">
          <h3 className="text-xl font-bold mb-4">Documentation</h3>
          <p className="text-muted mb-6 text-sm">Curated guides for implementing OTel in the Indian cloud ecosystem.</p>
          <Link href="#" className="text-accent font-bold text-sm hover:underline">View Guides →</Link>
        </div>
        
        <div className="p-8 border border-slate-200 dark:border-slate-800 rounded-3xl">
          <h3 className="text-xl font-bold mb-4">Config Templates</h3>
          <p className="text-muted mb-6 text-sm">Battle-tested Collector configurations for common use cases.</p>
          <Link href="#" className="text-accent font-bold text-sm hover:underline">Download Templates →</Link>
        </div>
        
        <div className="p-8 border border-slate-200 dark:border-slate-800 rounded-3xl">
          <h3 className="text-xl font-bold mb-4">Video Hub</h3>
          <p className="text-muted mb-6 text-sm">Recordings from our community calls and workshops.</p>
          <Link href="#" className="text-accent font-bold text-sm hover:underline">Watch Videos →</Link>
        </div>
      </div>
    </div>
  );
}
