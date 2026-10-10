/**
 * Original blueprint-style line drawing used in the hero until a real
 * project photograph is added at /public/images/hero/construction-hero.jpg.
 * Motifs echo the JST logo: arch bridge, rising building, tower crane, road.
 */
export function BlueprintDrawing({ className }: { className?: string }) {
  const floors = [0, 1, 2, 3, 4, 5, 6, 7];
  const bays = [0, 1, 2, 3];
  return (
    <svg
      viewBox="0 0 640 560"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <pattern id="bp-grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M32 0H0V32" stroke="currentColor" strokeOpacity="0.07" strokeWidth="1" />
        </pattern>
      </defs>

      <rect width="640" height="560" fill="url(#bp-grid)" />

      {/* Ground line + dimension */}
      <path d="M8 470H632" stroke="currentColor" strokeOpacity="0.5" />
      <path d="M8 490H632" stroke="currentColor" strokeOpacity="0.12" strokeDasharray="2 6" />

      {/* Arch bridge (left) */}
      <g stroke="#E3A92B" strokeWidth="1.5">
        {/* Parabolic arch from (24,420) to (300,420), crown at y=300 */}
        <path d="M24 420Q162 180 300 420" strokeOpacity="0.9" />
        <path d="M8 420H300" strokeOpacity="0.6" />
        <path d="M24 420V470M300 420V470" strokeOpacity="0.5" />
        {[59, 93, 128, 162, 196, 231, 265].map((x) => {
          const u = (x - 162) / 138;
          const y = 420 - 120 * (1 - u * u);
          return <path key={x} d={`M${x} ${y.toFixed(1)}V420`} strokeOpacity="0.55" />;
        })}
      </g>

      {/* Building under construction (centre) */}
      <g stroke="currentColor" strokeWidth="1.25">
        <rect x="300" y="150" width="196" height="320" strokeOpacity="0.85" />
        {floors.map((f) => (
          <path key={f} d={`M300 ${190 + f * 40}H496`} strokeOpacity="0.45" />
        ))}
        {bays.map((b) => (
          <path key={b} d={`M${349 + b * 49} 150V470`} strokeOpacity={b === 3 ? 0 : 0.3} />
        ))}
        {/* window infill on lower floors */}
        {[4, 5, 6].flatMap((f) =>
          [0, 1, 2, 3].map((b) => (
            <rect
              key={`${f}-${b}`}
              x={312 + b * 49}
              y={200 + f * 40}
              width="25"
              height="20"
              stroke="#E3A92B"
              strokeOpacity={(f + b) % 3 === 0 ? 0.9 : 0.35}
            />
          )),
        )}
        {/* scaffolding on top floors */}
        <path d="M290 150V310M506 150V310" strokeOpacity="0.35" strokeDasharray="3 5" />
        <path d="M290 190L300 170M506 190L496 170M290 230L300 210M506 230L496 210" strokeOpacity="0.3" />
      </g>

      {/* Tower crane */}
      <g stroke="#E3A92B" strokeWidth="1.5">
        <path d="M548 470V70M566 470V70" />
        {Array.from({ length: 13 }).map((_, i) => (
          <path key={i} d={`M548 ${470 - i * 30}L566 ${440 - i * 30}`} strokeOpacity="0.55" />
        ))}
        <path d="M340 70H630M340 84H600" />
        {Array.from({ length: 10 }).map((_, i) => (
          <path key={i} d={`M${352 + i * 26} 70L${365 + i * 26} 84`} strokeOpacity="0.5" />
        ))}
        <path d="M557 70V30M557 30L380 70M557 30L630 70" strokeOpacity="0.8" />
        <rect x="600" y="84" width="24" height="18" strokeOpacity="0.8" />
        <path d="M420 84V200" strokeOpacity="0.8" strokeDasharray="4 4" />
        <path d="M410 200h20v10h-20z" strokeOpacity="0.9" />
      </g>

      {/* Road in perspective (foreground) */}
      <g stroke="currentColor" strokeWidth="1.25">
        <path d="M250 560L360 470M520 560L430 470" strokeOpacity="0.6" />
        <path d="M385 560V545M392 525V512M396 498V490" stroke="#E3A92B" strokeWidth="2" strokeOpacity="0.85" />
      </g>

      {/* Dimension annotation */}
      <g stroke="currentColor" strokeOpacity="0.35">
        <path d="M300 125H496M300 119V131M496 119V131" />
        <path d="M520 150V470M514 150H526M514 470H526" />
      </g>
      <text
        x="398"
        y="116"
        textAnchor="middle"
        fill="currentColor"
        fillOpacity="0.45"
        fontSize="10"
        letterSpacing="2"
        fontFamily="ui-monospace, monospace"
      >
        ELEVATION A
      </text>
    </svg>
  );
}
