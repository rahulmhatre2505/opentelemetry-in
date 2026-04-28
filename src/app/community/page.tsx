import Link from 'next/link';

export default function CommunityPage() {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center">
      <h1 className="text-4xl font-extrabold tracking-tight mb-6">Community</h1>
      <p className="text-xl text-muted mb-12">
        We are building a space for OpenTelemetry enthusiasts in India to connect, share, and grow.
      </p>
      
      <div className="grid grid-cols-1 gap-6 text-left">
        <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
          <h3 className="text-xl font-bold mb-2">Join our Slack</h3>
          <p className="text-muted mb-4">Connect with hundreds of engineers and observability experts.</p>
          <button className="bg-midnight dark:bg-white text-white dark:text-midnight px-6 py-2 rounded-full font-bold text-sm">
            Request Invite
          </button>
        </div>
        
        <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 opacity-60">
          <h3 className="text-xl font-bold mb-2">Local Meetups</h3>
          <p className="text-muted mb-4">Coming soon to Bangalore, Mumbai, and Delhi.</p>
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Coming Soon</span>
        </div>
      </div>
    </div>
  );
}
