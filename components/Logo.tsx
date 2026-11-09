export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 64 64" className="h-8 w-8" aria-hidden>
        <defs>
          <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#c6ff3d" />
            <stop offset="1" stopColor="#2ee6a6" />
          </linearGradient>
        </defs>
        <path d="M32 6l20 7.5v15C52 41 43.5 51 32 56 20.5 51 12 41 12 28.5v-15z" fill="url(#lg)" />
        <path d="M24 31l6 6 11-12" stroke="#06070a" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="font-display text-xl font-bold tracking-tight text-white">
        Pay<span className="text-lime">Secure</span>
      </span>
    </span>
  );
}
