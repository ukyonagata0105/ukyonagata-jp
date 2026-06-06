import { PLANE_NOSE_OFFSET, PLANE_SHAPE } from '@/lib/planeShape';

/** 上部：有機シェイプ＋ドット（丸・リング装飾なし） */
function TopLayer() {
  return (
    <svg
      className="theme-bg-layer theme-bg-top absolute top-0 left-0 w-full"
      viewBox="0 0 1440 280"
      preserveAspectRatio="xMidYMin slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="bgGreen1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" className="theme-bg-grad-green-a" />
          <stop offset="100%" className="theme-bg-grad-green-b" />
        </linearGradient>
        <linearGradient id="bgGreen2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" className="theme-bg-grad-mint-a" />
          <stop offset="100%" className="theme-bg-grad-mint-b" />
        </linearGradient>
      </defs>
      <ellipse cx="1320" cy="40" rx="260" ry="180" fill="url(#bgGreen1)" />
      <ellipse cx="1220" cy="90" rx="180" ry="140" fill="url(#bgGreen2)" />
      <ellipse cx="1180" cy="120" rx="120" ry="90" className="theme-bg-blob-soft" />
      <g className="theme-bg-dots">
        {[0, 1, 2, 3, 4].map((row) =>
          [0, 1, 2, 3].map((col) => (
            <circle key={`t-${row}-${col}`} cx={36 + col * 14} cy={36 + row * 14} r="3" />
          ))
        )}
      </g>
    </svg>
  );
}

/** 飛行機＋ループ航跡（専用レイヤー） */
function PlaneLayer() {
  const trailPath =
    'M 100 220 C 200 80, 280 280, 380 150 C 460 50, 540 220, 620 120 C 700 60, 780 100, 880 70 L 1080 40';

  return (
    <div className="theme-bg-plane-layer" aria-hidden="true">
      <svg
        className="theme-bg-plane-svg w-full h-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="xMidYMin meet"
      >
        <path
          d={trailPath}
          fill="none"
          className="theme-bg-trail-path"
          strokeWidth="2.5"
          strokeDasharray="8 7"
          pathLength={100}
        />
        <g className="theme-bg-plane-body">
          <g transform="translate(1060, 28) rotate(28)" className="theme-bg-plane-inner">
            <g transform={PLANE_NOSE_OFFSET}>
              <path className="theme-bg-plane" d={PLANE_SHAPE} />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

/** 下部：丘・都市・木・波 */
function BottomLayer() {
  return (
    <svg
      className="theme-bg-layer theme-bg-bottom absolute bottom-0 left-0 w-full"
      viewBox="0 0 1440 260"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="bgHill" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" className="theme-bg-grad-hill-a" />
          <stop offset="100%" className="theme-bg-grad-hill-b" />
        </linearGradient>
        <linearGradient id="bgWater" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" className="theme-bg-grad-water-a" />
          <stop offset="100%" className="theme-bg-grad-water-b" />
        </linearGradient>
      </defs>
      <path
        d="M0 180 Q360 130 720 165 Q1080 200 1440 150 L1440 260 L0 260 Z"
        fill="url(#bgHill)"
      />
      <path
        d="M0 210 Q480 165 960 195 Q1200 210 1440 175 L1440 260 L0 260 Z"
        className="theme-bg-hill-secondary"
      />
      <path
        d="M880 260 Q1080 190 1280 220 Q1360 235 1440 225 L1440 260 Z"
        fill="url(#bgWater)"
      />
      <g className="theme-bg-city">
        <rect x="50" y="155" width="28" height="65" rx="2" />
        <rect x="88" y="138" width="22" height="82" rx="2" />
        <rect x="122" y="162" width="34" height="58" rx="2" />
        <rect x="168" y="128" width="26" height="92" rx="2" />
        <rect x="206" y="158" width="30" height="62" rx="2" />
      </g>
      <g className="theme-bg-trees">
        <rect x="500" y="178" width="5" height="28" />
        <ellipse cx="502" cy="168" rx="20" ry="26" />
        <rect x="548" y="170" width="5" height="36" />
        <ellipse cx="550" cy="156" rx="26" ry="32" />
        <rect x="604" y="182" width="4" height="24" />
        <ellipse cx="606" cy="174" rx="16" ry="20" />
      </g>
      <path
        d="M1060 220 Q1110 205 1160 220 Q1210 235 1260 220"
        fill="none"
        className="theme-bg-wave"
        strokeWidth="2.5"
      />
      <g className="theme-bg-dots-bottom">
        {[0, 1, 2].map((row) =>
          [0, 1, 2, 3].map((col) => (
            <circle key={`b-${row}-${col}`} cx={1020 + col * 12} cy={188 + row * 12} r="2.5" />
          ))
        )}
      </g>
    </svg>
  );
}

export function ThemeBackground() {
  return (
    <div className="theme-bg-root fixed inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
      <div className="theme-bg-sky absolute inset-0" />
      <BottomLayer />
      <TopLayer />
      <PlaneLayer />
    </div>
  );
}
