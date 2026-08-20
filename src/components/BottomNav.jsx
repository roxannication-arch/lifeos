import { ArrowLeftRight, BarChart3, Grid2X2 } from "lucide-react";

function RevolutMark({ className = "" }) {
  return (
    <svg viewBox="0 0 1024 1024" className={className} aria-hidden="true">
      <path
        d="M246 238h380c151 0 255 98 255 239 0 137-99 234-246 234h-98V588h96c72 0 122-45 122-111 0-67-50-112-122-112H246z"
        fill="currentColor"
      />
      <path d="M246 428h128v370H246z" fill="currentColor" />
      <path d="M502 604h145l181 194H674z" fill="currentColor" />
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
