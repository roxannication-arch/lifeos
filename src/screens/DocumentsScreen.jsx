import { BackHeader } from "../components/BackHeader.jsx";
import { FileText, Info } from "lucide-react";

const legalRows = ["Privacy policy", "California Collection Notice", "Terms & conditions"];

function Row({ label, onClick, icon: Icon = FileText }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center justify-between px-5 py-[17px] text-left text-[17px] font-bold transition active:bg-[#2C2C2E]"
    >
      <span className="flex items-center gap-4">
        <span className="text-white">
          <Icon size={22} strokeWidth={2.5} />
        </span>
        {label}
      </span>
      <span className="text-2xl text-[#8E8E93]">›</span>
    </button>
  );
}

export function DocumentsScreen({ goTo }) {
  return (
    <div className="h-full">
      <BackHeader onBack={() => goTo("profile")} />
      <div className="safe-scroll h-[calc(100%-56px)] overflow-y-auto px-4 pb-8">
        <h1 className="mt-6 max-w-[330px] text-[36px] font-extrabold leading-[1.1] tracking-[-0.06em]">Documents and statements</h1>

        <article className="mt-6 rounded-[24px] bg-[#1C1C1E] px-5 py-[17px]">
          <div className="flex items-center justify-between">
            <div className="flex items-start gap-4">
              <span className="pt-1">
                <FileText size={22} strokeWidth={2.5} />
              </span>
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
              <Row label={label} icon={label === "Terms & conditions" ? Info : FileText} />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
