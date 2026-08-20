import premiumCardImage from "../assets/premium-card.svg";

const menuGroups = [
  { label: "Invite friends", sub: "Earn $150 or more", icon: "✉" },
  { label: "Inbox", badge: "20", icon: "▰" },
  { label: "Personal info", icon: "♟" },
  { label: "Account details", icon: "⌂" },
  { label: "Security", icon: "▣" },
  { label: "Documents and statements", icon: "◰", screen: "documents" },
  { label: "Help", badge: "1", icon: "?" },
  { label: "Settings", icon: "⚙" },
];

function MenuRow({ item, goTo }) {
  return (
    <button
      type="button"
      onClick={() => item.screen && goTo(item.screen)}
      className="flex w-full items-center justify-between px-4 py-[15px] text-left transition active:bg-white/5"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center text-[22px] text-white">{item.icon}</span>
        <div>
          <p className="text-[17px] font-bold text-white">{item.label}</p>
          {item.sub ? <p className="mt-0.5 text-[14px] font-medium text-white/55">{item.sub}</p> : null}
        </div>
      </div>
      <div className="flex items-center gap-2">
        {item.badge ? (
          <span className="flex h-7 min-w-7 items-center justify-center rounded-full bg-white px-2 text-xs font-extrabold text-black">
            {item.badge}
          </span>
        ) : null}
      </div>
    </button>
  );
}

export function ProfileScreen({ goTo }) {
  return (
    <div
      className="safe-scroll relative h-[800px] overflow-y-auto px-4 pb-8"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 17%, rgba(34,224,160,0.18), transparent 14%), radial-gradient(circle at 72% 60%, rgba(10,132,255,0.15), transparent 21%), radial-gradient(circle at 72% 42%, rgba(170,120,75,0.18), transparent 18%), linear-gradient(#101313, #111111)",
      }}
    >
      <header className="sticky top-0 z-10 -mx-4 flex items-center justify-between px-4 py-2 backdrop-blur-md">
        <button
          type="button"
          onClick={() => goTo("home")}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#1C1C1E]/70 text-2xl font-semibold"
          aria-label="Close profile"
        >
          ✕
        </button>
        <button type="button" className="rounded-full border border-white/10 bg-white/18 px-4 py-3 text-[15px] font-extrabold backdrop-blur-xl">
          ◈ Upgrade
        </button>
      </header>

      <section className="mt-7 flex flex-col items-center text-center">
        <div className="flex h-[112px] w-[112px] items-center justify-center rounded-full border-[5px] border-white/35 bg-[#6F8A71] text-[34px] font-extrabold shadow-2xl shadow-white/10">
          RB
        </div>
        <h1 className="mt-6 text-[31px] font-extrabold leading-tight tracking-[-0.06em]">Roksana Bagdasarian</h1>
        <p className="mt-2 text-[15px] font-semibold text-white/55">@rbagdasarian ❖</p>
      </section>

      <article className="relative mt-8 h-[88px] overflow-hidden rounded-[24px] bg-gradient-to-br from-[#788F7E] via-[#4A5F52] to-[#1C1C1E] p-4 shadow-xl">
        <div className="relative z-[1]">
          <h2 className="text-[21px] font-extrabold leading-tight">Premium</h2>
          <p className="mt-1 text-[15px] font-semibold text-white/78">View plan benefits ›</p>
        </div>
        <img
          src={premiumCardImage}
          alt=""
          className="absolute -right-8 -top-7 h-[142px] w-[208px] object-contain drop-shadow-2xl"
          aria-hidden="true"
        />
      </article>

      <section className="mt-5 overflow-hidden rounded-[24px] border border-white/5 bg-[#2C2C2E]/78 shadow-xl shadow-black/25 backdrop-blur-xl">
        {menuGroups.map((item) => (
          <MenuRow key={item.label} item={item} goTo={goTo} />
        ))}
      </section>
    </div>
  );
}
