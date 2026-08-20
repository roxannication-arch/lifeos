import { useEffect, useRef, useState } from "react";
import { ChevronDown, ListFilter } from "lucide-react";
import { BackHeader } from "../components/BackHeader.jsx";
import { STATEMENT_FILES } from "../constants.js";

const MARCH_STATEMENT_KEY = "2026-03";
const ITEM_HEIGHT = 42;
const monthWheel = [
  { key: "2026-01", label: "January 2026" },
  { key: "2026-02", label: "February 2026" },
  { key: "2026-03", label: "March 2026" },
  { key: "2026-04", label: "April 2026" },
  { key: "2026-05", label: "May 2026" },
  { key: "2026-06", label: "June 2026" },
  { key: "2026-07", label: "July 2026" },
  { key: "2026-08", label: "August 2026" },
  { key: "2026-09", label: "September 2026" },
  { key: "2026-10", label: "October 2026" },
  { key: "2026-11", label: "November 2026" },
  { key: "2026-12", label: "December 2026" },
];

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

function MonthWheel({ label, selectedMonthKey, onSelectMonth }) {
  const scrollRef = useRef(null);
  const scrollTimerRef = useRef(null);

  useEffect(() => {
    const index = monthWheel.findIndex((month) => month.key === selectedMonthKey);

    if (scrollRef.current && index >= 0) {
      scrollRef.current.scrollTop = Math.max(0, (index - 1) * ITEM_HEIGHT);
    }
  }, [selectedMonthKey]);

  const handleScroll = () => {
    window.clearTimeout(scrollTimerRef.current);
    scrollTimerRef.current = window.setTimeout(() => {
      if (!scrollRef.current) {
        return;
      }

      const centeredIndex = Math.min(
        monthWheel.length - 1,
        Math.max(0, Math.round(scrollRef.current.scrollTop / ITEM_HEIGHT) + 1),
      );

      onSelectMonth(monthWheel[centeredIndex].key, true);
    }, 110);
  };

  return (
    <div className="flex-1">
      <p className="mb-3 text-center text-sm font-bold text-[#8E8E93]">{label}</p>
      <div ref={scrollRef} onScroll={handleScroll} className="safe-scroll h-[126px] snap-y snap-mandatory overflow-y-auto">
        {monthWheel.map((month) => (
          <button
            key={`${label}-${month.key}`}
            type="button"
            onClick={() => onSelectMonth(month.key, true)}
            className={`block h-[42px] w-full snap-center rounded-[18px] px-2 text-center text-[15px] font-semibold transition ${
              month.key === selectedMonthKey ? "bg-[#2C2C2E] text-white" : "text-[#8E8E93]/30"
            }`}
          >
            {month.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export function StatementScreen({ goTo, openViewer }) {
  const [selectedMonthKey, setSelectedMonthKey] = useState("2026-08");
  const [isGenerating, setIsGenerating] = useState(false);
  const fileInputRef = useRef(null);
  const autoOpenedMonthRef = useRef("");

  const openStatementForMonth = (monthKey, allowFileFallback) => {
    if (isGenerating) {
      return;
    }

    const statementPath = STATEMENT_FILES[monthKey];

    if (!statementPath) {
      if (allowFileFallback) {
        fileInputRef.current?.click();
      }

      return;
    }

    setIsGenerating(true);
    window.setTimeout(() => {
      setIsGenerating(false);
      openViewer(statementPath);
    }, 1100);
  };

  const handleGenerate = () => {
    openStatementForMonth(selectedMonthKey, true);
  };

  const handleSelectMonth = (monthKey, shouldAutoOpen = false) => {
    setSelectedMonthKey(monthKey);

    if (shouldAutoOpen && monthKey === MARCH_STATEMENT_KEY && autoOpenedMonthRef.current !== monthKey) {
      autoOpenedMonthRef.current = monthKey;
      openStatementForMonth(monthKey, false);
    }
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

        <button type="button" className="mt-6 flex items-center gap-2 rounded-full bg-[#2C2C2E] px-4 py-3 text-sm font-extrabold">
          <ListFilter size={16} strokeWidth={2.6} />
          USD account
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
            <ChevronDown size={20} strokeWidth={2.6} className="text-[#8E8E93]" />
          </button>
        </section>

        <section className="mt-5 flex gap-8 rounded-[24px] bg-[#1C1C1E] px-7 py-5">
          <MonthWheel label="From" selectedMonthKey={selectedMonthKey} onSelectMonth={handleSelectMonth} />
          <MonthWheel label="To" selectedMonthKey={selectedMonthKey} onSelectMonth={handleSelectMonth} />
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
