import { BackHeader } from "../components/BackHeader.jsx";

function Section({ title, children }) {
  return (
    <section className="mt-7">
      <h2 className="mb-3 px-1 text-sm font-extrabold uppercase tracking-[0.12em] text-[#8E8E93]">{title}</h2>
      <div className="overflow-hidden rounded-[24px] bg-[#1C1C1E]">{children}</div>
    </section>
  );
}

function Row({ label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center justify-between px-4 py-5 text-left text-[15px] font-bold transition active:bg-[#2C2C2E]"
    >
      <span>{label}</span>
      <span className="text-xl text-[#8E8E93]">›</span>
    </button>
  );
}

export function PersonalScreen({ goTo }) {
  return (
    <div className="h-[800px]">
      <BackHeader onBack={() => goTo("documents")} />
      <div className="safe-scroll h-[744px] overflow-y-auto px-4 pb-8">
        <h1 className="mt-6 text-[38px] font-extrabold leading-none tracking-[-0.06em]">Personal</h1>

        <Section title="Statements">
          <Row label="Account statement" onClick={() => goTo("statement")} />
        </Section>

        <Section title="Confirmations">
          <Row label="Account confirmation" />
        </Section>
      </div>
    </div>
  );
}
