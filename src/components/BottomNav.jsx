import { ArrowLeftRight, BarChart3, Grid2X2 } from "lucide-react";

function RevolutMark({ className = "" }) {
  return (
    <svg viewBox="0 0 512 512" className={className} aria-hidden="true">
      <path
        d="M97 94h232c101 0 171 67 171 158 0 90-69 156-168 156h-64v-72h62c55 0 92-34 92-84s-37-84-92-84H97z"
        fill="currentColor"
      />
      <path d="M97 200h76v260H97z" fill="currentColor" />
      <path d="M256 365h88l124 95H361z" fill="currentColor" />
    </svg>
  );
}

const tabs = [
  { id: "home", label: "Home", icon: <RevolutMark className="h-6 w-6" /> },
  { id: "invest", label: "Invest", icon: <BarChart3 size={20} strokeWidth={2.6} /> },
  { id: "payments", label: "Payments", icon: <ArrowLeftRight size={20} strokeWidth={2.6} />, hasDot: true },
  { id: "lifestyle", label: "Lifestyle", icon: <Grid2X2 size={19} strokeWidth={2.7} /> },
];

export function BottomNav({ active = "home" }) {
  return (
    <nav className="absolute bottom-4 left-5 right-5 z-20 rounded-[30px] border border-white/10 bg-[#121517]/88 p-1.5 shadow-2xl shadow-black/70 backdrop-blur-2xl">
      <div className="grid grid-cols-4 gap-1">
        {tabs.map((tab) => {
          const isActive = tab.id === active;

          return (
            <button
              key={tab.id}
              type="button"
              className={`relative flex h-[54px] flex-col items-center justify-center gap-0.5 rounded-[26px] text-[10px] font-bold transition ${
                isActive ? "bg-white/12 text-white shadow-inner shadow-white/5" : "text-white/58"
              }`}
            >
              <span className="relative flex h-6 items-center justify-center leading-none">
                {tab.icon}
                {tab.hasDot ? (
                  <span className="absolute -right-2 -top-1 h-2 w-2 rounded-full bg-[#FF453A]" />
                ) : null}
              </span>
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
