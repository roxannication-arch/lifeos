const tabs = [
  { id: "home", label: "Home", icon: <span className="text-[20px] font-extrabold">R</span> },
  { id: "invest", label: "Invest", icon: "▥" },
  { id: "payments", label: "Payments", icon: "⇄", hasDot: true },
  { id: "lifestyle", label: "Lifestyle", icon: "▪▪" },
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
              <span className="relative text-lg leading-none">
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
