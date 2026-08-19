export function AreaChart({ compact = false }) {
  const height = compact ? 122 : 158;
  const width = 330;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="h-full w-full" role="img" aria-label="Spending area chart">
      <defs>
        <linearGradient id="spentGlow" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#22E0A0" stopOpacity="0.5" />
          <stop offset="70%" stopColor="#22E0A0" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#22E0A0" stopOpacity="0" />
        </linearGradient>
        <filter id="lineGlow" x="-10%" y="-40%" width="120%" height="180%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {[1, 2, 3].map((line) => (
        <line
          key={line}
          x1="8"
          x2="322"
          y1={(height / 4) * line}
          y2={(height / 4) * line}
          stroke="#2C2C2E"
          strokeWidth="1"
        />
      ))}
      <path
        d={`M8 ${height - 14} C38 ${height - 28}, 52 ${height - 76}, 76 ${height - 72} C102 ${height - 68}, 106 ${height - 18}, 130 ${height - 24} C155 ${height - 31}, 164 ${height - 92}, 196 ${height - 86} C226 ${height - 81}, 232 ${height - 44}, 255 ${height - 48} C280 ${height - 53}, 291 ${height - 98}, 322 ${height - 102} L322 ${height - 2} L8 ${height - 2} Z`}
        fill="url(#spentGlow)"
      />
      <path
        d={`M8 ${height - 14} C38 ${height - 28}, 52 ${height - 76}, 76 ${height - 72} C102 ${height - 68}, 106 ${height - 18}, 130 ${height - 24} C155 ${height - 31}, 164 ${height - 92}, 196 ${height - 86} C226 ${height - 81}, 232 ${height - 44}, 255 ${height - 48} C280 ${height - 53}, 291 ${height - 98}, 322 ${height - 102}`}
        fill="none"
        filter="url(#lineGlow)"
        stroke="#22E0A0"
        strokeLinecap="round"
        strokeWidth="4"
      />
      <path
        d={`M255 ${height - 48} C280 ${height - 36}, 301 ${height - 24}, 322 ${height - 18}`}
        fill="none"
        stroke="#8E8E93"
        strokeDasharray="5 6"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <text x="7" y={height - 2} fill="#8E8E93" fontSize="11" fontWeight="600">
        1
      </text>
      <text x="294" y={height - 2} fill="#8E8E93" fontSize="11" fontWeight="600">
        31
      </text>
      <text x="265" y="14" fill="#8E8E93" fontSize="12" fontWeight="700">
        $5.02k
      </text>
    </svg>
  );
}

export function IncomeSparkline() {
  const bars = [34, 45, 86, 42, 55, 38];

  return (
    <div className="flex h-20 items-end justify-between gap-2 px-1">
      {bars.map((height, index) => (
        <span
          key={`${height}-${index}`}
          className={`w-5 rounded-t-full ${index === 2 ? "bg-white shadow-[0_0_20px_rgba(255,255,255,0.72)]" : "bg-[#4C4C4E]"}`}
          style={{ height }}
        />
      ))}
    </div>
  );
}

export function CashFlowChart() {
  return (
    <svg viewBox="0 0 142 76" className="h-20 w-full" role="img" aria-label="Net cash flow line chart">
      <defs>
        <filter id="greenSoftGlow" x="-30%" y="-60%" width="160%" height="220%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="redSoftGlow" x="-30%" y="-60%" width="160%" height="220%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        d="M4 54 C22 31, 42 23, 62 35 C80 46, 94 16, 116 22 C126 25, 134 20, 138 18"
        fill="none"
        filter="url(#greenSoftGlow)"
        stroke="#22E0A0"
        strokeLinecap="round"
        strokeWidth="4"
      />
      <path
        d="M4 27 C21 34, 32 65, 55 57 C75 50, 87 63, 104 55 C122 46, 128 58, 138 52"
        fill="none"
        filter="url(#redSoftGlow)"
        stroke="#FF453A"
        strokeLinecap="round"
        strokeWidth="4"
      />
    </svg>
  );
}

export function MonthBars() {
  const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
  const heights = [52, 74, 92, 46, 64, 84, 58, 68, 54, 78, 50, 43];

  return (
    <div className="relative pt-7">
      <div className="absolute left-0 right-0 top-7 border-t border-dashed border-[#8E8E93]/50" />
      <span className="absolute right-0 top-0 text-xs font-semibold text-[#8E8E93]">9.1k</span>
      <div className="flex h-[210px] items-end justify-between gap-[9px]">
        {heights.map((height, index) => (
          <div key={`${months[index]}-${index}`} className="flex flex-1 flex-col items-center gap-3">
            <div
              className="w-full max-w-[18px] rounded-full bg-white shadow-[0_0_14px_rgba(255,255,255,0.22)]"
              style={{ height }}
            />
            <span className="text-xs font-bold text-[#8E8E93]">{months[index]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
