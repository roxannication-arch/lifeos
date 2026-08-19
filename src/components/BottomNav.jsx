const tabs = [
  { id: "home", label: "Home", icon: <span className="text-[20px] font-extrabold">R</span> },
  { id: "invest", label: "Invest", icon: "↗" },
  { id: "payments", label: "Payments", icon: "⇄", hasDot: true },
  { id: "lifestyle", label: "Lifestyle", icon: "✦" },
];

export function BottomNav({ active = "home" }) {
  return (
    <nav className="absolute bottom-4 left-4 right-4 z-20 rounded-[28px] bg-[#1C1C1E]/95 p-2 shadow-2xl shadow-black/50 backdrop-blur">
      <div className="grid grid-cols-4 gap-1">
        {tabs.map((tab) => {
          const isActive = tab.id === active;

          return (
            <button
              key={tab.id}
              type="button"
              className={`relative flex h-[56px] flex-col items-center justify-center gap-1 rounded-[22px] text-[11px] font-semibold transition ${
                isActive ? "bg-[#2C2C2E] text-white" : "text-[#8E8E93]"
              }`}
            >
              <span className="relative leading-none">
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
