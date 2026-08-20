import { BackHeader } from "../components/BackHeader.jsx";
import { MonthBars } from "../components/Charts.jsx";
import { BarChart3, CircleDollarSign, Coins, LineChart, Repeat2, RefreshCw } from "lucide-react";

const categories = [
  { name: "Deposits", amount: "+$42,472", meta: "33 transactions", percent: "86%" },
  { name: "General", amount: "+$5,969", meta: "12 transactions", percent: "12%" },
  { name: "Transfers", amount: "+$1,080", meta: "3 transactions", percent: "2%" },
];

function ChartSwitcher() {
  const views = [LineChart, BarChart3, RefreshCw];

  return (
    <div className="flex rounded-full bg-[#1C1C1E] p-1">
      {views.map((Icon, index) => (
        <button
          key={index}
          type="button"
          className={`flex h-9 w-9 items-center justify-center rounded-full text-lg font-bold ${
            index === 1 ? "bg-[#2C2C2E] text-white" : "text-[#8E8E93]"
          }`}
          aria-label={`Chart view ${index + 1}`}
        >
          <Icon size={18} strokeWidth={2.5} />
        </button>
      ))}
    </div>
  );
}

export function IncomeScreen({ goTo }) {
  return (
    <div className="h-full">
      <BackHeader onBack={() => goTo("analytics")} right={<ChartSwitcher />} />
      <div className="safe-scroll h-[calc(100%-56px)] overflow-y-auto px-4 pb-8">
        <section className="mt-7">
          <p className="text-[15px] font-bold text-[#8E8E93]">Income · Personal</p>
          <h1 className="mt-2 text-[40px] font-extrabold leading-none tracking-[-0.06em]">$49,521</h1>
          <p className="mt-3 text-[15px] font-bold text-[#22E0A0]">▲$16,720 · This year</p>
        </section>

        <section className="mt-8 rounded-[24px] bg-[#1C1C1E] p-5">
          <MonthBars />
        </section>

        <div className="mt-5 flex items-center gap-2 rounded-full bg-[#1C1C1E] p-1">
          {["1W", "1M", "6M", "1Y"].map((period) => (
            <button
              key={period}
              type="button"
              className={`h-10 flex-1 rounded-full text-sm font-extrabold ${
                period === "1Y" ? "bg-[#2C2C2E] text-white" : "text-[#8E8E93]"
              }`}
            >
              {period}
            </button>
          ))}
          <button type="button" className="h-10 w-12 rounded-full text-lg font-extrabold text-[#8E8E93]" aria-label="More periods">
            ···
          </button>
        </div>

        <section className="mt-8">
          <div className="mb-3 flex items-center justify-between">
            <button type="button" className="text-xl font-extrabold tracking-[-0.04em]">
              By category ▾
            </button>
            <button type="button" className="text-[15px] font-bold text-[#0A84FF]">
              Manage
            </button>
          </div>
          <div className="overflow-hidden rounded-[24px] bg-[#1C1C1E]">
            {categories.map((category, index) => (
              <div
                key={category.name}
                className={`flex items-center justify-between p-4 ${index > 0 ? "border-t border-[#2C2C2E]" : ""}`}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2C2C2E]">
                    {index === 0 ? <CircleDollarSign size={22} /> : index === 1 ? <Coins size={22} /> : <Repeat2 size={22} />}
                  </span>
                  <div>
                    <p className="text-[15px] font-bold">{category.name}</p>
                    <p className="mt-1 text-xs font-semibold text-[#8E8E93]">{category.meta}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[15px] font-extrabold text-[#22E0A0]">{category.amount}</p>
                  <p className="mt-1 text-xs font-bold text-[#8E8E93]">{category.percent}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
