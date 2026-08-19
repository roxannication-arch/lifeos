import { BackHeader } from "../components/BackHeader.jsx";

const legalRows = ["Privacy policy", "California Collection Notice", "Terms & conditions"];

function Row({ label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center justify-between px-4 py-4 text-left text-[15px] font-bold transition active:bg-[#2C2C2E]"
    >
      <span>{label}</span>
      <span className="text-xl text-[#8E8E93]">›</span>
    </button>
  );
}

export function DocumentsScreen({ goTo }) {
  return (
    <div className="h-[800px]">
      <BackHeader onBack={() => goTo("profile")} />
      <div className="safe-scroll h-[744px] overflow-y-auto px-4 pb-8">
        <h1 className="mt-6 max-w-[300px] text-[36px] font-extrabold leading-[0.98] tracking-[-0.06em]">Documents and statements</h1>

        <article className="mt-7 rounded-[24px] bg-[#1C1C1E] p-5">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2C2C2E] text-xl">⇥</span>
            <div>
              <h2 className="text-lg font-extrabold">Custom statement</h2>
              <p className="mt-1 text-sm font-semibold leading-5 text-[#8E8E93]">
                Select certain accounts, spend categories, and more
              </p>
            </div>
          </div>
        </article>

        <section className="mt-6 overflow-hidden rounded-[24px] bg-[#1C1C1E]">
          <Row label="Personal" onClick={() => goTo("personal")} />
          <div className="border-t border-[#2C2C2E]" />
          <Row label="General" />
        </section>

        <section className="mt-6 overflow-hidden rounded-[24px] bg-[#1C1C1E]">
          {legalRows.map((label, index) => (
            <div key={label} className={index > 0 ? "border-t border-[#2C2C2E]" : ""}>
              <Row label={label} />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
