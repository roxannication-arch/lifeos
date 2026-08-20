import { useRef, useState } from "react";
import { BackHeader } from "../components/BackHeader.jsx";
import { STATEMENT_FILES } from "../constants.js";

const selectedMonthKey = "2026-03";
const monthWheel = ["February 2026", "March 2026", "April 2026"];

function Toggle() {
  return (
    <div className="grid grid-cols-2 rounded-full bg-[#1C1C1E] p-1 shadow-inner shadow-white/5">
      {["PDF", "CSV"].map((type) => (
        <button
          key={type}
          type="button"
          className={`h-9 rounded-full text-sm font-extrabold ${type === "PDF" ? "bg-[#5A5A5C] text-white" : "text-[#8E8E93]"}`}
        >
          {type}
        </button>
      ))}
    </div>
  );
}

function MonthWheel({ label }) {
  return (
    <div className="flex-1">
      <p className="mb-3 text-center text-sm font-bold text-[#8E8E93]">{label}</p>
      <div>
        {monthWheel.map((month) => (
          <div
            key={`${label}-${month}`}
            className={`rounded-[18px] px-2 py-2.5 text-center text-[15px] font-semibold ${
              month === "March 2026" ? "bg-[#2C2C2E] text-white" : "text-[#8E8E93]/30"
            }`}
          >
            {month}
          </div>
        ))}
      </div>
    </div>
  );
}

export function StatementScreen({ goTo, openViewer }) {
  const [isGenerating, setIsGenerating] = useState(false);
  const fileInputRef = useRef(null);

  const handleGenerate = () => {
    const statementPath = STATEMENT_FILES[selectedMonthKey];

    if (!statementPath) {
      fileInputRef.current?.click();
      return;
    }

    setIsGenerating(true);
    window.setTimeout(() => {
      setIsGenerating(false);
      openViewer(statementPath);
    }, 1100);
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    const fileUrl = URL.createObjectURL(file);
    openViewer(fileUrl, true);
    event.target.value = "";
  };

  return (
    <div className="relative h-[800px]">
      <BackHeader onBack={() => goTo("personal")} />
      <div className="safe-scroll h-[744px] overflow-y-auto px-4 pb-28">
        <h1 className="mt-6 text-[38px] font-extrabold leading-none tracking-[-0.06em]">Statement</h1>

        <button type="button" className="mt-6 rounded-full bg-[#2C2C2E] px-4 py-3 text-sm font-extrabold">
          ⇥ USD account
        </button>

        <div className="mt-5">
          <Toggle />
        </div>

        <section className="mt-5 rounded-[20px] bg-[#1C1C1E] px-4 py-3">
          <button type="button" className="flex w-full items-center justify-between text-left">
            <span>
              <span className="block text-sm font-bold text-[#8E8E93]">Period</span>
              <span className="mt-1 block text-[17px] font-bold">Month</span>
            </span>
            <span className="text-xl text-[#8E8E93]">⌄</span>
          </button>
        </section>

        <section className="mt-5 flex gap-8 rounded-[24px] bg-[#1C1C1E] px-7 py-5">
          <MonthWheel label="From" />
          <MonthWheel label="To" />
        </section>

        <input ref={fileInputRef} type="file" accept="application/pdf" className="hidden" onChange={handleFileChange} />
      </div>

      <div className="absolute bottom-6 left-4 right-4">
        <button
          type="button"
          onClick={handleGenerate}
          disabled={isGenerating}
          className="h-14 w-full rounded-full bg-white text-[16px] font-extrabold text-black shadow-2xl shadow-black/60 transition active:scale-[0.99] disabled:cursor-wait disabled:opacity-80"
        >
          Generate
        </button>
      </div>

      {isGenerating ? (
        <div className="absolute inset-0 z-30 flex items-end justify-center bg-black/72 pb-7 backdrop-blur-sm">
          <div className="min-h-[166px] w-[calc(100%-16px)] rounded-[34px] border border-white/10 bg-[#1C1C1E] px-7 py-6 text-center shadow-2xl">
            <div className="mx-auto mb-9 h-1 w-12 rounded-full bg-white/18" />
            <p className="mt-10 text-[9px] font-semibold text-white/35">Generating your document...</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
