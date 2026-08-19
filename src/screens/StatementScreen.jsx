import { useRef, useState } from "react";
import { BackHeader } from "../components/BackHeader.jsx";
import { STATEMENT_FILES } from "../constants.js";

const selectedMonthKey = "2026-03";
const monthWheel = ["January 2026", "February 2026", "March 2026", "April 2026", "May 2026"];

function Toggle() {
  return (
    <div className="grid grid-cols-2 rounded-full bg-[#1C1C1E] p-1">
      {["PDF", "CSV"].map((type) => (
        <button
          key={type}
          type="button"
          className={`h-11 rounded-full text-sm font-extrabold ${type === "PDF" ? "bg-white text-black" : "text-[#8E8E93]"}`}
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
      <p className="mb-3 px-2 text-sm font-bold text-[#8E8E93]">{label}</p>
      <div className="rounded-[24px] bg-[#1C1C1E] p-3">
        {monthWheel.map((month) => (
          <div
            key={`${label}-${month}`}
            className={`rounded-[18px] px-3 py-3 text-center text-sm font-extrabold ${
              month === "March 2026" ? "bg-[#2C2C2E] text-white" : "text-[#8E8E93]/45"
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
      <div className="safe-scroll h-[744px] overflow-y-auto px-4 pb-8">
        <h1 className="mt-6 text-[38px] font-extrabold leading-none tracking-[-0.06em]">Statement</h1>

        <button type="button" className="mt-6 rounded-full bg-[#1C1C1E] px-4 py-3 text-sm font-extrabold">
          ⇥ USD account
        </button>

        <div className="mt-5">
          <Toggle />
        </div>

        <section className="mt-7 rounded-[24px] bg-[#1C1C1E] p-5">
          <p className="text-sm font-bold text-[#8E8E93]">Period</p>
          <button type="button" className="mt-3 flex w-full items-center justify-between rounded-[20px] bg-[#2C2C2E] px-4 py-4 text-left font-extrabold">
            Month <span className="text-[#8E8E93]">▾</span>
          </button>
        </section>

        <section className="mt-6 flex gap-4">
          <MonthWheel label="From" />
          <MonthWheel label="To" />
        </section>

        <button
          type="button"
          onClick={handleGenerate}
          disabled={isGenerating}
          className="mt-8 h-14 w-full rounded-full bg-white text-[16px] font-extrabold text-black transition active:scale-[0.99] disabled:cursor-wait disabled:opacity-80"
        >
          Generate
        </button>

        <input ref={fileInputRef} type="file" accept="application/pdf" className="hidden" onChange={handleFileChange} />
      </div>

      {isGenerating ? (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/72 backdrop-blur-sm">
          <div className="rounded-[24px] bg-[#1C1C1E] px-7 py-6 text-center shadow-2xl">
            <div className="mx-auto mb-4 h-9 w-9 animate-spin rounded-full border-4 border-[#2C2C2E] border-t-white" />
            <p className="text-[16px] font-extrabold">Generating your document...</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
