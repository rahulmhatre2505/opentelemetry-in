import Link from 'next/link';

export default function Navbar() {
  const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <header className="bg-background border-b border-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar with date and weather-like info */}
        <div className="flex justify-between items-center py-2 text-[10px] uppercase tracking-[0.2em] font-bold border-b border-foreground/10">
          <span>{today}</span>
          <span>India Edition</span>
          <span>Vol. I — No. 01</span>
        </div>

        {/* Masthead */}
        <div className="py-8 text-center border-b-4 border-double border-foreground">
          <Link href="/" className="inline-block">
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic">
              The Times of Telemetry
            </h1>
          </Link>
          <p className="mt-2 text-sm italic font-serif">
            "The definitive record of cloud-native observability and community progress"
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex justify-center items-center py-3 space-x-8 text-xs font-black uppercase tracking-widest overflow-x-auto whitespace-nowrap">
          <Link href="/blog" className="hover:underline">Editorial</Link>
          <Link href="/community" className="hover:underline">Community</Link>
          <Link href="/resources" className="hover:underline">Resources</Link>
          <Link href="/market" className="hover:underline">Market Watch</Link>
          <Link href="/technology" className="hover:underline">Technology</Link>
          <Link href="https://collectorctrl.com" className="hover:underline text-muted">CollectorCtrl</Link>
        </nav>
      </div>
    </header>
  );
}
