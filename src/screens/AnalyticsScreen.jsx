import { BackHeader } from "../components/BackHeader.jsx";
import { AreaChart, CashFlowChart, IncomeSparkline } from "../components/Charts.jsx";

function MetricCard({ children, onClick, title, value, delta, className = "" }) {
  const content = (
    <>
      <p className="text-sm font-semibold text-[#8E8E93]">{title}</p>
      <h3 className="mt-1 text-[26px] font-extrabold leading-none tracking-[-0.04em]">{value}</h3>
      <p className="mt-2 text-sm font-bold text-[#22E0A0]">{delta}</p>
      <div className="mt-4">{children}</div>
    </>
  );

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`min-h-[190px] rounded-[24px] bg-[#1C1C1E] p-4 text-left transition active:scale-[0.98] ${className}`}
      >
        {content}
      </button>
    );
  }

  return <article className={`min-h-[190px] rounded-[24px] bg-[#1C1C1E] p-4 ${className}`}>{content}</article>;
}

export function AnalyticsScreen({ goTo }) {
  return (
    <div className="h-[800px]">
      <BackHeader onBack={() => goTo("home")} />
      <div className="safe-scroll h-[744px] overflow-y-auto px-4 pb-7">
        <h1 className="mt-6 text-[38px] font-extrabold leading-none tracking-[-0.05em]">Analytics</h1>
        <button type="button" className="mt-3 rounded-full bg-[#1C1C1E] px-4 py-2 text-sm font-bold text-white">
          Personal ▾
        </button>

        <section className="mt-6 rounded-[24px] bg-[#1C1C1E] p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-semibold text-[#8E8E93]">Spent</p>
              <h2 className="mt-1 text-[36px] font-extrabold leading-none tracking-[-0.05em]">$3,273</h2>
            </div>
            <span className="mt-2 rounded-full bg-[#173B2F] px-3 py-1 text-sm font-bold text-[#22E0A0]">▼$1,606</span>
          </div>
          <div className="mt-4 h-[150px]">
            <AreaChart compact />
          </div>
        </section>

        <section className="mt-4 grid grid-cols-2 gap-4">
          <MetricCard title="Income" value="$3,036" delta="▼$401" onClick={() => goTo("income")}>
            <IncomeSparkline />
          </MetricCard>
          <MetricCard title="Net cash flow" value="-$237" delta="⊖ Negative">
            <CashFlowChart />
          </MetricCard>
        </section>

        <section className="mt-7">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-2xl font-extrabold tracking-[-0.04em]">Overview</h2>
            <span className="text-sm font-bold text-[#8E8E93]">Monthly</span>
          </div>
          <article className="rounded-[24px] bg-[#1C1C1E] p-5">
            <p className="text-sm font-semibold text-[#8E8E93]">Total assets</p>
            <h3 className="mt-1 text-[34px] font-extrabold leading-none tracking-[-0.05em]">$796</h3>
            <div className="mt-5">
              <div className="mb-2 flex items-center justify-between text-sm font-bold">
                <span>Cash</span>
                <span className="text-[#8E8E93]">$796</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-[#2C2C2E]">
                <div className="h-full w-full rounded-full bg-[#7C7CFF]" />
              </div>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}
