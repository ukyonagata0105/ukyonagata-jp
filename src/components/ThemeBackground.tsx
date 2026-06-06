export function ThemeBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden -z-10"
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="greenGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8bc34a" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#1e6b45" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id="greenGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#c5e8b7" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#2d8f5e" stopOpacity="0.25" />
          </linearGradient>
          <linearGradient id="blueGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5dade2" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#2e86c1" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="hillGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#d4edda" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#1e6b45" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        {/* Top-right organic shapes */}
        <ellipse cx="1380" cy="60" rx="280" ry="200" fill="url(#greenGrad1)" />
        <ellipse cx="1280" cy="120" rx="200" ry="160" fill="url(#greenGrad2)" />
        <ellipse cx="1450" cy="180" rx="160" ry="120" fill="#8bc34a" fillOpacity="0.2" />

        {/* Top-left dot grid */}
        <g fill="#1e6b45" fillOpacity="0.25">
          {[0, 1, 2, 3, 4].map((row) =>
            [0, 1, 2, 3].map((col) => (
              <circle key={`dot-${row}-${col}`} cx={40 + col * 14} cy={40 + row * 14} r="3" />
            ))
          )}
        </g>
        <circle cx="120" cy="130" r="28" fill="#d4edda" fillOpacity="0.5" />
        <circle cx="200" cy="90" r="12" fill="#5dade2" fillOpacity="0.35" />
        <circle cx="320" cy="160" r="8" fill="#1e6b45" fillOpacity="0.2" />
        <circle cx="480" cy="80" r="6" fill="#5dade2" fillOpacity="0.3" />

        {/* Airplane with dashed trail */}
        <path
          d="M 380 200 Q 520 120 680 160 Q 820 190 900 140"
          fill="none"
          stroke="#5dade2"
          strokeWidth="2"
          strokeDasharray="8 6"
          strokeOpacity="0.45"
        />
        <g transform="translate(900, 130) rotate(25)">
          <path
            d="M0 0 L-18 6 L-14 0 L-18 -6 Z M-6 0 L-14 0"
            fill="#1e6b45"
            fillOpacity="0.5"
          />
        </g>

        {/* Scattered accent dots */}
        <circle cx="600" cy="250" r="5" fill="#5dade2" fillOpacity="0.25" />
        <circle cx="750" cy="180" r="7" fill="none" stroke="#1e6b45" strokeWidth="1.5" strokeOpacity="0.2" />
        <circle cx="1050" cy="220" r="4" fill="#8bc34a" fillOpacity="0.3" />

        {/* Bottom landscape - hills */}
        <path
          d="M0 820 Q360 760 720 800 Q1080 840 1440 780 L1440 900 L0 900 Z"
          fill="url(#hillGrad)"
        />
        <path
          d="M0 860 Q480 800 960 850 Q1200 870 1440 830 L1440 900 L0 900 Z"
          fill="#d4edda"
          fillOpacity="0.35"
        />
        <path
          d="M900 900 Q1100 820 1300 860 Q1380 880 1440 870 L1440 900 Z"
          fill="url(#blueGrad)"
        />

        {/* City skyline */}
        <g fill="#1e6b45" fillOpacity="0.12">
          <rect x="60" y="790" width="30" height="70" rx="2" />
          <rect x="100" y="770" width="24" height="90" rx="2" />
          <rect x="135" y="800" width="36" height="60" rx="2" />
          <rect x="180" y="755" width="28" height="105" rx="2" />
          <rect x="220" y="785" width="32" height="75" rx="2" />
          <rect x="260" y="770" width="22" height="90" rx="2" />
        </g>

        {/* Trees */}
        <g>
          <rect x="520" y="810" width="6" height="30" fill="#1e6b45" fillOpacity="0.3" />
          <ellipse cx="523" cy="800" rx="22" ry="28" fill="#2d8f5e" fillOpacity="0.35" />
          <rect x="570" y="800" width="6" height="40" fill="#1e6b45" fillOpacity="0.3" />
          <ellipse cx="573" cy="785" rx="28" ry="34" fill="#1e6b45" fillOpacity="0.3" />
          <rect x="630" y="815" width="5" height="25" fill="#1e6b45" fillOpacity="0.3" />
          <ellipse cx="632" cy="808" rx="18" ry="22" fill="#8bc34a" fillOpacity="0.35" />
        </g>

        {/* Water waves */}
        <path
          d="M1100 870 Q1150 850 1200 870 Q1250 890 1300 870 Q1350 850 1400 870"
          fill="none"
          stroke="#5dade2"
          strokeWidth="3"
          strokeOpacity="0.3"
        />
        <path
          d="M1120 885 Q1170 868 1220 885 Q1270 902 1320 885"
          fill="none"
          stroke="#2e86c1"
          strokeWidth="2"
          strokeOpacity="0.2"
        />

        {/* Bottom dot grids */}
        <g fill="#5dade2" fillOpacity="0.2">
          {[0, 1, 2].map((row) =>
            [0, 1, 2, 3].map((col) => (
              <circle key={`bdot-${row}-${col}`} cx={1050 + col * 12} cy={830 + row * 12} r="2.5" />
            ))
          )}
        </g>
        <g fill="#1e6b45" fillOpacity="0.15">
          {[0, 1, 2].map((row) =>
            [0, 1, 2].map((col) => (
              <circle key={`gdot-${row}-${col}`} cx={380 + col * 12} cy={850 + row * 12} r="2.5" />
            ))
          )}
        </g>
      </svg>

      {/* Dark mode overlay to soften decorations */}
      <div className="absolute inset-0 bg-white dark:bg-[#0f1f18] opacity-0 dark:opacity-30 transition-opacity duration-300" />
    </div>
  );
}
