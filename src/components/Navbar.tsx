import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-midnight/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-midnight dark:bg-white rounded-lg flex items-center justify-center">
                <span className="text-white dark:text-midnight font-bold text-xl">O</span>
              </div>
              <span className="text-xl font-bold tracking-tight">opentelemetry.in</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/blog" className="text-sm font-medium hover:text-accent transition-colors">Editorial</Link>
            <Link href="/community" className="text-sm font-medium hover:text-accent transition-colors">Community</Link>
            <Link href="/resources" className="text-sm font-medium hover:text-accent transition-colors">Resources</Link>
            <Link 
              href="https://collectorctrl.com" 
              className="bg-midnight dark:bg-white text-white dark:text-midnight px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              CollectorCtrl
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
