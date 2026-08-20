import {
  Banknote,
  BarChart3,
  Camera,
  CreditCard,
  Landmark,
  Link,
  MapPin,
  MoreHorizontal,
  Plus,
  Search,
  Shuffle,
  Users,
} from "lucide-react";
import { AreaChart } from "../components/Charts.jsx";
import { BottomNav } from "../components/BottomNav.jsx";
import georgiaImage from "../assets/georgia-card.svg";
import inviteCardImage from "../assets/invite-card.svg";
import mapPreviewImage from "../assets/map-preview.svg";

const GEORGIA_PHOTO_URL =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/20110421_Tbilisi_Georgia_Panoramic.jpg/960px-20110421_Tbilisi_Georgia_Panoramic.jpg";

const cardItems = [
  { name: "Yellow", number: "··4045", className: "from-[#F7D44A] to-[#F4A736] text-black" },
  { name: "Space Gray", number: "··2836", className: "from-[#424245] to-[#1C1C1E] text-white" },
  { name: "Online Shopping", number: "··1699", className: "from-[#3B2B6D] to-[#10193A] text-white" },
];

function PaymentCard({ card }) {
  return (
    <article className={`h-[54px] w-[84px] rounded-[8px] bg-gradient-to-br ${card.className} p-2 shadow-xl`}>
      <div className="flex items-start justify-between">
        <span className="text-sm font-extrabold">R</span>
        <span className="self-end text-[9px] font-extrabold tracking-tight">VISA</span>
      </div>
    </article>
  );
}

function Transaction({ color, title, amount }) {
  return (
    <div className="flex items-center justify-between px-4 py-3">
      <div className="flex items-center gap-3">
        <span className={`flex h-11 w-11 items-center justify-center rounded-full ${color} text-lg font-extrabold text-white`}>
          {title.slice(0, 1)}
        </span>
        <div>
          <p className="text-[15px] font-bold text-white">{title}</p>
          <p className="text-xs font-medium text-white/55">Today, 3:41PM</p>
        </div>
      </div>
      <div className="text-right">
        <span className="text-[15px] font-bold text-white">{amount}</span>
        <p className="text-xs font-semibold text-white/40">-GEL 19</p>
      </div>
    </div>
  );
}

function GlassCard({ children, className = "" }) {
  return (
    <section className={`rounded-[24px] border border-white/10 bg-white/14 shadow-xl shadow-black/18 backdrop-blur-2xl ${className}`}>
      {children}
    </section>
  );
}

function TopControls({ goTo }) {
  return (
    <header className="sticky top-0 z-10 -mx-4 flex items-center gap-3 px-4 py-2 backdrop-blur-md">
      <button
        type="button"
        onClick={() => goTo("profile")}
        className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/25 bg-[#6F8A71]/95 text-white shadow-lg shadow-black/20"
        aria-label="Open profile"
      >
        <Camera size={18} strokeWidth={2.8} />
        <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-[#FF453A]" />
      </button>
      <button
        type="button"
        className="flex h-12 flex-1 items-center justify-start gap-3 rounded-full border border-white/20 bg-white/12 px-4 text-[15px] font-semibold text-white/90 shadow-inner shadow-white/10"
      >
        <Search size={21} strokeWidth={2.4} />
        Search
      </button>
      <button
        type="button"
        onClick={() => goTo("analytics")}
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/18 bg-white/10 text-xl shadow-inner shadow-white/5"
        aria-label="Open analytics"
      >
        <BarChart3 size={22} strokeWidth={2.6} />
      </button>
      <button
        type="button"
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/18 bg-white/10 text-xl shadow-inner shadow-white/5"
        aria-label="Cards"
      >
        <CreditCard size={22} strokeWidth={2.5} />
      </button>
    </header>
  );
}

function QuickAction({ icon: Icon, label }) {
  return (
    <button type="button" className="flex flex-col items-center gap-2 text-[13px] font-bold text-white">
      <span className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-white/18 text-2xl shadow-lg shadow-black/16 backdrop-blur-xl">
        <Icon size={24} strokeWidth={2.7} />
      </span>
      {label}
    </button>
  );
}

export function HomeScreen({ goTo }) {
  return (
    <div
      className="relative h-full bg-[#7F949F]"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at 8% 6%, rgba(255,255,255,0.92), rgba(233,244,249,0.62) 18%, transparent 38%), radial-gradient(ellipse at 86% 30%, rgba(191,211,220,0.44), transparent 38%), linear-gradient(118deg, rgba(241,249,252,0.88) 0%, rgba(210,227,235,0.72) 23%, rgba(70,84,92,0.68) 24%, rgba(37,47,54,0.4) 35%, transparent 48%), linear-gradient(165deg, #A6BAC4 0%, #879CA7 38%, #5D707A 72%, #36434A 100%)",
      }}
    >
      <div className="safe-scroll h-full overflow-y-auto px-4 pb-28">
        <TopControls goTo={goTo} />

        <section className="flex min-h-[360px] flex-col justify-between pb-8 pt-20 text-center">
          <div>
            <p className="text-[15px] font-semibold text-white/75">Personal · USD</p>
            <h1 className="mt-2 text-[46px] font-extrabold leading-none tracking-[-0.07em]">
              $679<span className="text-[24px]">.12</span>
            </h1>
            <button type="button" className="mt-5 rounded-full bg-white/18 px-5 py-3 text-sm font-extrabold text-white backdrop-blur-xl">
              Accounts
            </button>
          </div>
          <div>
            <div className="mb-8 text-lg tracking-[0.35em] text-white/55">···</div>
            <div className="grid grid-cols-4 gap-4">
              <QuickAction icon={Plus} label="Add money" />
              <QuickAction icon={Shuffle} label="Move" />
              <QuickAction icon={Landmark} label="Details" />
              <QuickAction icon={MoreHorizontal} label="More" />
            </div>
          </div>
        </section>

        <GlassCard className="relative overflow-hidden p-4">
          <button type="button" className="absolute right-4 top-3 z-[1] text-xl text-white/80" aria-label="Close invite banner">
            ×
          </button>
          <div className="relative z-[1] max-w-[210px]">
            <h2 className="text-[17px] font-extrabold leading-tight">Invite friends, get paid</h2>
            <p className="mt-1 text-[13px] font-medium leading-5 text-white/70">Earn $150 for each friend you refer by August 25. T&Cs apply</p>
          </div>
          <img
            src={inviteCardImage}
            alt=""
            className="absolute -bottom-3 right-0 h-[118px] w-[170px] object-contain drop-shadow-2xl"
            aria-hidden="true"
          />
        </GlassCard>

        <GlassCard className="mt-5 overflow-hidden">
          <div className="relative h-[260px] overflow-hidden p-5">
            <img src={georgiaImage} alt="" className="absolute inset-0 h-full w-full object-cover" aria-hidden="true" />
            <img
              src={GEORGIA_PHOTO_URL}
              alt="Panoramic view of Tbilisi, Georgia"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/48" />
            <button type="button" className="absolute right-4 top-3 z-[1] text-xl text-white" aria-label="Close Georgia card">
              ×
            </button>
            <div className="relative">
              <p className="text-sm font-medium text-white/85">Welcome to</p>
              <h2 className="text-[28px] font-extrabold leading-none">Georgia</h2>
            </div>
            <div className="absolute bottom-0 left-0 right-0 grid grid-cols-3 gap-7 bg-gradient-to-t from-black/45 to-transparent px-12 pb-5 pt-16">
              <QuickAction icon={Users} label="Group bills" />
              <QuickAction icon={MapPin} label="ATM" />
              <QuickAction icon={MoreHorizontal} label="More" />
            </div>
          </div>
        </GlassCard>

        <GlassCard className="mt-5 p-4">
          <h2 className="text-[15px] font-bold text-white/50">Cards ›</h2>
          <div className="mt-5 grid grid-cols-3 gap-4 text-center">
            {cardItems.map((card) => (
              <div key={card.number} className="min-w-0">
                <div className="mx-auto flex justify-center">
                  <PaymentCard card={card} />
                </div>
                <p className="mt-2 truncate text-sm font-extrabold">{card.name}</p>
                <p className="text-xs font-semibold text-white/35">{card.number.replace("··", "··")}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 text-center text-lg tracking-[0.22em] text-white/35">··</div>
        </GlassCard>

        <GlassCard className="mt-5 p-5">
          <h2 className="text-[15px] font-bold text-white/50">Total wealth ›</h2>
          <div className="mt-2 flex items-start justify-between">
            <div>
              <p className="text-[34px] font-extrabold leading-none tracking-[-0.05em]">$796</p>
              <p className="mt-2 text-sm font-bold text-[#FF453A]">▼ $749 <span className="text-white/45">· Past month</span></p>
            </div>
          </div>
          <div className="mt-6 space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7C7CFF]">
                  <Banknote size={23} strokeWidth={2.5} />
                </span>
                <span className="text-lg font-extrabold">Cash</span>
              </div>
              <div className="text-right text-sm font-bold">
                <p>$796</p>
                <p className="text-[#FF453A]">▼ $749</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1AB7FF]">
                  <BarChart3 size={23} strokeWidth={2.5} />
                </span>
                <div>
                  <p className="text-lg font-extrabold">Invest</p>
                  <p className="text-sm font-medium text-white/55">Invest for as little as $1</p>
                </div>
              </div>
              <span className="text-3xl text-white/35">›</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#10D8DE]">
                  <Link size={23} strokeWidth={2.5} />
                </span>
                <div>
                  <p className="text-lg font-extrabold">Linked</p>
                  <p className="text-sm font-medium text-white/55">Link external accounts</p>
                </div>
              </div>
              <span className="text-3xl text-white/35">›</span>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="mt-5 p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-semibold text-white/45">Spent this month</p>
              <h2 className="mt-1 text-[34px] font-extrabold leading-none tracking-[-0.04em]">$3,273</h2>
            </div>
            <span className="mt-2 text-sm font-bold text-[#22E0A0]">▼ $1,606</span>
          </div>
          <div className="mt-4 h-[158px]">
            <AreaChart />
          </div>
        </GlassCard>

        <GlassCard className="mt-5 p-4">
          <h2 className="text-[15px] font-bold text-white/50">Watchlist ›</h2>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl">🇺🇸</span>
              <div>
                <p className="text-[17px] font-extrabold">US dollar</p>
                <p className="text-sm font-medium text-white/55">USD to EUR</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[17px] font-bold">€0.8568</p>
              <p className="text-sm font-bold text-[#FF453A]">▼ 0.77%</p>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="mt-5 overflow-hidden">
          <h2 className="px-4 pt-4 text-[15px] font-bold text-white/50">ATMs nearby ›</h2>
          <img src={mapPreviewImage} alt="Map with nearby ATMs" className="m-4 h-[132px] w-[calc(100%-32px)] rounded-[20px] object-cover" />
        </GlassCard>

        <GlassCard className="mt-5 overflow-hidden">
          <h2 className="px-4 pt-4 text-[15px] font-bold text-white/50">Transactions</h2>
          <div className="py-2">
            <Transaction color="bg-[#D77C25]" title="Delicious Dining" amount="-$7.36" />
            <Transaction color="bg-[#347D55]" title="I E B M Shps" amount="-$2.71" />
          </div>
        </GlassCard>
      </div>
      <BottomNav active="home" />
    </div>
  );
}
