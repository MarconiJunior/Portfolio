export default function SignalTrace({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 200"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="signal-gradient" x1="0" y1="0" x2="600" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="var(--color-signal-amber)" />
          <stop offset="36%" stopColor="var(--color-signal-amber)" />
          <stop offset="56%" stopColor="var(--color-signal-cyan)" />
          <stop offset="100%" stopColor="var(--color-signal-cyan)" />
        </linearGradient>
      </defs>

      {/* baseline grid, reads as an oscilloscope / monitoring readout */}
      <line x1="0" y1="170" x2="600" y2="170" stroke="var(--color-surface)" strokeWidth="1" />
      <line x1="236" y1="10" x2="236" y2="190" stroke="var(--color-surface)" strokeWidth="1" strokeDasharray="4 6" />

      {/*
        Left: a dense, irregular pulse train — sharp right angles, no two
        pulses alike — reads as raw digital/legacy signal. It hands off at
        x=236 into one calm, continuous sine that settles as it travels
        right, reading as the signal resolving into modern software.
      */}
      <path
        className="draw-path"
        style={{ ["--path-length" as string]: 2600 }}
        d="M0,150 L20,150 L20,60 L38,60 L38,150
           L58,150 L58,140 L76,140 L76,150
           L84,150 L84,50 L108,50 L108,150
           L122,150 L122,120 L142,120 L142,150
           L148,150 L148,145 L166,145 L166,150
           L182,150 L182,65 L204,65 L204,150
           L212,150 L212,100 L230,100 L230,150
           L236,150
           C262,150 250,86 302,92
           C344,97 332,152 384,146
           C426,141 414,86 466,92
           C502,96 494,142 540,124
           C566,114 580,108 600,110"
        stroke="url(#signal-gradient)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="miter"
      />

      <text x="6" y="24" fill="var(--color-signal-amber)" fontFamily="var(--font-mono)" fontSize="12" letterSpacing="0.05em">
        ENTERPRISE
      </text>
      <text x="594" y="24" fill="var(--color-signal-cyan)" fontFamily="var(--font-mono)" fontSize="12" textAnchor="end" letterSpacing="0.05em">
        MODERN SOFTWARE
      </text>
    </svg>
  );
}
