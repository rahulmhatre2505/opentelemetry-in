import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-midnight dark:bg-white rounded flex items-center justify-center">
                <span className="text-white dark:text-midnight font-bold text-sm">O</span>
              </div>
              <span className="text-lg font-bold tracking-tight">opentelemetry.in</span>
            </Link>
            <p className="text-muted text-sm max-w-xs">
              The authoritative voice for the OpenTelemetry community in India. High-intent education for the next generation of observability.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link href="/blog" className="hover:text-foreground">Editorial</Link></li>
              <li><Link href="/events" className="hover:text-foreground">Events</Link></li>
              <li><Link href="/slack" className="hover:text-foreground">Slack Group</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Partner</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link href="https://collectorctrl.com" className="hover:text-foreground">CollectorCtrl</Link></li>
              <li><Link href="/partner" className="hover:text-foreground">Become a Partner</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center text-xs text-muted">
          <p>© {new Date().getFullYear()} opentelemetry.in. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-foreground">Privacy</Link>
            <Link href="/terms" className="hover:text-foreground">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
