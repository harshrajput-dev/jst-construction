/**
 * Architectural elevation used in the About section until a real
 * photograph is added at /public/images/about/about-construction-site.jpg.
 */
export function ElevationDrawing({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 500" fill="none" className={className} aria-hidden="true" focusable="false">
      <defs>
        <pattern id="el-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" stroke="#33414F" strokeOpacity="0.07" />
        </pattern>
      </defs>
      <rect width="400" height="500" fill="url(#el-grid)" />

      {/* Ground */}
      <path d="M0 440H400" stroke="#33414F" strokeOpacity="0.6" />
      <path d="M0 452H400" stroke="#33414F" strokeOpacity="0.15" strokeDasharray="2 6" />

      {/* Main residential block */}
      <g stroke="#33414F" strokeWidth="1.25">
        <path d="M70 440V170L200 96L330 170V440" strokeOpacity="0.85" />
        <path d="M58 177L200 92L342 177" strokeOpacity="0.85" />
        {[230, 300, 370].map((y) => (
          <path key={y} d={`M70 ${y}H330`} strokeOpacity="0.35" />
        ))}
        {[0, 1, 2].map((r) =>
          [0, 1, 2].map((c) => (
            <rect
              key={`${r}-${c}`}
              x={96 + c * 78}
              y={180 + r * 70}
              width="52"
              height="40"
              strokeOpacity={r === 1 && c === 1 ? 0 : 0.6}
            />
          )),
        )}
        <rect x="172" y="250" width="56" height="40" stroke="#E3A92B" strokeWidth="1.5" />
        <path d="M172 270H228M200 250V290" stroke="#E3A92B" strokeOpacity="0.6" />
        {/* Entrance */}
        <path d="M170 440V384H230V440" strokeOpacity="0.85" />
        <path d="M160 384H240" strokeOpacity="0.85" />
        <circle cx="200" cy="140" r="12" strokeOpacity="0.6" />
      </g>

      {/* Dimension lines */}
      <g stroke="#33414F" strokeOpacity="0.4">
        <path d="M70 470H330M70 464V476M330 464V476" />
        <path d="M30 96V440M24 96H36M24 440H36" />
      </g>
      <text x="200" y="490" textAnchor="middle" fill="#33414F" fillOpacity="0.55" fontSize="9" letterSpacing="2" fontFamily="ui-monospace, monospace">
        FRONT ELEVATION
      </text>

      {/* Gold accent rule */}
      <path d="M340 60H384" stroke="#E3A92B" strokeWidth="3" />
    </svg>
  );
}
