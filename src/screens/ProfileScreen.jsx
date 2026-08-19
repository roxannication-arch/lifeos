const menuGroups = [
  [
    { label: "Invite friends", sub: "Earn $150 or more", icon: "★" },
    { label: "Inbox", badge: "20", icon: "✉" },
  ],
  [
    { label: "Personal info", icon: "👤" },
    { label: "Account details", icon: "▣" },
    { label: "Security", icon: "🔒" },
    { label: "Documents and statements", icon: "▤", screen: "documents" },
  ],
  [
    { label: "Help", badge: "1", icon: "?" },
    { label: "Settings", icon: "⚙" },
  ],
];

function MenuRow({ item, goTo }) {
  return (
    <button
      type="button"
      onClick={() => item.screen && goTo(item.screen)}
      className="flex w-full items-center justify-between px-4 py-4 text-left transition active:bg-[#2C2C2E]"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2C2C2E] text-lg">{item.icon}</span>
        <div>
          <p className="text-[15px] font-bold text-white">{item.label}</p>
          {item.sub ? <p className="mt-1 text-xs font-semibold text-[#8E8E93]">{item.sub}</p> : null}
        </div>
      </div>
      <div className="flex items-center gap-2">
        {item.badge ? (
          <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#FF453A] px-2 text-xs font-extrabold text-white">
            {item.badge}
          </span>
        ) : null}
        <span className="text-xl font-bold text-[#8E8E93]">›</span>
      </div>
    </button>
  );
}

export function ProfileScreen({ goTo }) {
  return (
    <div className="safe-scroll h-[800px] overflow-y-auto px-4 pb-8">
      <header className="flex items-center justify-between pt-1">
        <button
          type="button"
          onClick={() => goTo("home")}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1C1C1E] text-2xl font-semibold"
          aria-label="Close profile"
        >
          ✕
        </button>
        <button type="button" className="rounded-full bg-[#1C1C1E] px-4 py-3 text-sm font-extrabold">
          ◆ Upgrade
        </button>
      </header>

      <section className="mt-8 flex flex-col items-center text-center">
        <div className="flex h-[88px] w-[88px] items-center justify-center rounded-full bg-[#6F7D6A] text-2xl font-extrabold">RB</div>
        <h1 className="mt-5 text-[30px] font-extrabold leading-tight tracking-[-0.05em]">Roksana Bagdasarian</h1>
        <p className="mt-1 text-[15px] font-semibold text-[#8E8E93]">@rbagdasarian ▦</p>
      </section>

      <article className="mt-7 rounded-[24px] bg-gradient-to-br from-[#22E0A0] via-[#2AA875] to-[#1C1C1E] p-5">
        <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-black/70">Premium</p>
        <h2 className="mt-5 text-2xl font-extrabold tracking-[-0.04em] text-white">View plan benefits ›</h2>
      </article>

      <div className="mt-6 space-y-4">
        {menuGroups.map((group, groupIndex) => (
          <section key={groupIndex} className="overflow-hidden rounded-[24px] bg-[#1C1C1E]">
            {group.map((item, index) => (
              <div key={item.label} className={index > 0 ? "border-t border-[#2C2C2E]" : ""}>
                <MenuRow item={item} goTo={goTo} />
              </div>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}
