import { BackHeader } from "../components/BackHeader.jsx";
import { FileText } from "lucide-react";

function Section({ title, children }) {
  return (
    <section className="mt-7">
      <h2 className="mb-3 text-[20px] font-bold tracking-[-0.03em] text-white">{title}</h2>
      <div className="overflow-hidden rounded-[24px] bg-[#1C1C1E]">{children}</div>
    </section>
  );
}

function Row({ label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center justify-between px-5 py-[17px] text-left text-[17px] font-bold transition active:bg-[#2C2C2E]"
    >
      <span className="flex items-center gap-4">
        <FileText size={22} strokeWidth={2.5} />
        {label}
      </span>
    </button>
  );
}

export function PersonalScreen({ goTo }) {
  return (
    <div className="h-full">
      <BackHeader onBack={() => goTo("documents")} />
      <div className="safe-scroll h-[calc(100%-56px)] overflow-y-auto px-4 pb-8">
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
