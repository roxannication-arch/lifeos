import { BackHeader } from "../components/BackHeader.jsx";

const legalRows = ["Privacy policy", "California Collection Notice", "Terms & conditions"];

function Row({ label, onClick, icon = "◰" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center justify-between px-5 py-[17px] text-left text-[17px] font-bold transition active:bg-[#2C2C2E]"
    >
      <span className="flex items-center gap-4">
        <span className="text-[21px] text-white">{icon}</span>
        {label}
      </span>
      <span className="text-2xl text-[#8E8E93]">›</span>
    </button>
  );
}

export function DocumentsScreen({ goTo }) {
  return (
    <div className="h-[800px]">
      <BackHeader onBack={() => goTo("profile")} />
      <div className="safe-scroll h-[744px] overflow-y-auto px-4 pb-8">
        <h1 className="mt-6 max-w-[330px] text-[36px] font-extrabold leading-[1.1] tracking-[-0.06em]">Documents and statements</h1>

        <article className="mt-6 rounded-[24px] bg-[#1C1C1E] px-5 py-[17px]">
          <div className="flex items-center justify-between">
            <div className="flex items-start gap-4">
              <span className="pt-1 text-[21px]">◰</span>
              <div>
                <h2 className="text-[17px] font-extrabold">Custom statement</h2>
                <p className="mt-0.5 max-w-[230px] text-[14px] font-medium leading-5 text-[#8E8E93]">
                  Select certain accounts, spend categories, and more
                </p>
              </div>
            </div>
            <span className="text-2xl text-[#8E8E93]">›</span>
          </div>
        </article>

        <section className="mt-5 overflow-hidden rounded-[24px] bg-[#1C1C1E]">
          <Row label="Personal" onClick={() => goTo("personal")} />
          <div className="border-t border-[#2C2C2E]" />
          <Row label="General" />
        </section>

        <section className="mt-5 overflow-hidden rounded-[24px] bg-[#1C1C1E]">
          {legalRows.map((label, index) => (
            <div key={label} className={index > 0 ? "border-t border-[#2C2C2E]" : ""}>
              <Row label={label} icon={label === "Terms & conditions" ? "●" : "◰"} />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
