import { AreaChart } from "../components/Charts.jsx";
import { BottomNav } from "../components/BottomNav.jsx";

const cardItems = [
  { name: "Yellow", number: "··4045", className: "from-[#F7D44A] to-[#F4A736] text-black" },
  { name: "Space Gray", number: "··2836", className: "from-[#424245] to-[#1C1C1E] text-white" },
  { name: "Online Shopping", number: "··1699", className: "from-[#3B2B6D] to-[#10193A] text-white" },
];

function PaymentCard({ card }) {
  return (
    <article className={`h-[142px] min-w-[238px] rounded-[24px] bg-gradient-to-br ${card.className} p-5 shadow-xl`}>
      <div className="flex items-start justify-between">
        <span className="text-2xl font-extrabold">R</span>
        <span className="text-sm font-extrabold tracking-[0.22em]">VISA</span>
      </div>
      <div className="mt-12">
        <p className="text-sm font-bold">{card.name}</p>
        <p className="mt-1 text-lg font-extrabold tracking-[0.18em]">{card.number}</p>
      </div>
    </article>
  );
}

function Transaction({ color, title, amount }) {
  return (
    <div className="flex items-center justify-between rounded-[20px] bg-[#1C1C1E] p-4">
      <div className="flex items-center gap-3">
        <span className={`flex h-11 w-11 items-center justify-center rounded-full ${color} text-lg font-extrabold text-white`}>
          {title.slice(0, 1)}
        </span>
        <div>
          <p className="text-[15px] font-bold text-white">{title}</p>
          <p className="text-xs font-medium text-[#8E8E93]">Today</p>
        </div>
      </div>
      <span className="text-[15px] font-bold text-white">{amount}</span>
    </div>
  );
}

export function HomeScreen({ goTo }) {
  return (
    <div className="relative h-[800px]">
      <div className="safe-scroll h-full overflow-y-auto px-4 pb-28">
        <header className="flex items-center gap-3 pt-1">
          <button
            type="button"
            onClick={() => goTo("profile")}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#6F7D6A] text-sm font-extrabold text-white"
            aria-label="Open profile"
          >
            RB
          </button>
          <button
            type="button"
            className="flex h-11 flex-1 items-center justify-start rounded-full bg-[#1C1C1E] px-5 text-sm font-semibold text-[#8E8E93]"
          >
            Search
          </button>
          <button
            type="button"
            onClick={() => goTo("analytics")}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1C1C1E] text-xl"
            aria-label="Open analytics"
          >
            📊
          </button>
          <button
            type="button"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1C1C1E] text-xl"
            aria-label="Cards"
          >
            💳
          </button>
        </header>

        <section className="mt-7">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-xl font-extrabold">Cards</h2>
            <span className="text-sm font-semibold text-[#8E8E93]">See all</span>
          </div>
          <div className="safe-scroll -mx-4 flex gap-3 overflow-x-auto px-4 pb-1">
            {cardItems.map((card) => (
              <PaymentCard key={card.number} card={card} />
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-[24px] bg-[#1C1C1E] p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-semibold text-[#8E8E93]">Spent this month</p>
              <h2 className="mt-1 text-[34px] font-extrabold leading-none tracking-[-0.04em]">$3,273</h2>
            </div>
            <span className="mt-2 rounded-full bg-[#173B2F] px-3 py-1 text-sm font-bold text-[#22E0A0]">▼$1,606</span>
          </div>
          <div className="mt-4 h-[158px]">
            <AreaChart />
          </div>
        </section>

        <section className="mt-6">
          <h2 className="mb-3 text-xl font-extrabold">Watchlist</h2>
          <div className="rounded-[24px] bg-[#1C1C1E] p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2C2C2E] text-lg font-extrabold">$</span>
                <div>
                  <p className="text-[15px] font-bold">US dollar</p>
                  <p className="text-xs font-medium text-[#8E8E93]">USD to EUR</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[15px] font-bold">€0.8568</p>
                <p className="text-xs font-bold text-[#FF453A]">▼0.77%</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6">
          <h2 className="mb-3 text-xl font-extrabold">Transactions</h2>
          <div className="space-y-3">
            <Transaction color="bg-[#D77C25]" title="Delicious Dining" amount="-$7.36" />
            <Transaction color="bg-[#347D55]" title="I E B M Shps" amount="-$2.71" />
          </div>
        </section>
      </div>
      <BottomNav active="home" />
    </div>
  );
}
