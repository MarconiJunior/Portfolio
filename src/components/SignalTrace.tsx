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
          <stop offset="48%" stopColor="var(--color-signal-amber)" />
          <stop offset="68%" stopColor="var(--color-signal-cyan)" />
          <stop offset="100%" stopColor="var(--color-signal-cyan)" />
        </linearGradient>
      </defs>

      {/* baseline grid, reads as an oscilloscope / monitoring readout */}
      <line x1="0" y1="170" x2="600" y2="170" stroke="var(--color-surface)" strokeWidth="1" />
      <line x1="300" y1="10" x2="300" y2="190" stroke="var(--color-surface)" strokeWidth="1" strokeDasharray="4 6" />

      <path
        className="draw-path"
        style={{ ["--path-length" as string]: 2200 }}
        d="M0,150 L30,150 L30,70 L60,70 L60,160 L90,160 L90,50 L120,50 L120,130 L150,130 L150,90 L180,90 L180,120 L210,120 L210,100
           C260,100 250,55 300,68
           C350,80 338,132 390,108
           C432,90 420,58 470,70
           C512,80 498,112 540,94
           C562,86 574,80 600,86"
        stroke="url(#signal-gradient)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <text x="6" y="24" fill="var(--color-signal-amber)" fontFamily="var(--font-mono)" fontSize="12" letterSpacing="0.05em">
        LEGACY / ERP
      </text>
      <text x="594" y="24" fill="var(--color-signal-cyan)" fontFamily="var(--font-mono)" fontSize="12" textAnchor="end" letterSpacing="0.05em">
        WEB / MOBILE
      </text>
    </svg>
  );
}
