import Link from 'next/link';

export const metadata = {
  title: '404 - Command Not Found | Jayant OS',
  description: 'The requested route or command does not exist in Jayant OS.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6 font-mono">
      <div className="w-full max-w-md bg-bg-secondary/90 border border-red-500/40 rounded-lg p-6 shadow-2xl space-y-4">
        <div className="text-red-400 text-fluid-2xl font-bold tracking-wider">
          404: COMMAND NOT FOUND
        </div>
        <p className="text-text-secondary text-sm leading-relaxed">
          The requested system address or file does not exist in the Jayant OS root filesystem.
        </p>
        <div className="p-3 bg-black/50 border border-white/10 rounded font-mono text-xs text-left text-text-secondary space-y-1">
          <div><span className="text-emerald-400">jayant@os:~$</span> cd /unknown</div>
          <div className="text-red-400">zsh: no such file or directory: /unknown</div>
        </div>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 border border-emerald-500/40 rounded text-xs font-bold transition-all cursor-pointer"
          >
            <span>&larr; Return to Terminal Root (/)</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
