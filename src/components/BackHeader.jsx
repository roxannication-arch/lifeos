import { ArrowLeft } from "lucide-react";

export function BackHeader({ onBack, right }) {
  return (
    <div className="flex items-center justify-between px-4 pt-1">
      <button
        type="button"
        onClick={onBack}
        className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1C1C1E] text-2xl font-semibold text-white transition active:scale-95"
        aria-label="Go back"
      >
        <ArrowLeft size={22} strokeWidth={2.6} />
      </button>
      {right ? <div className="flex items-center">{right}</div> : <span className="h-11 w-11" />}
    </div>
  );
}
