function SignalIcon() {
  return (
    <span className="flex h-3 items-end gap-[2px]" aria-hidden="true">
      {[4, 6, 8, 10].map((height) => (
        <span key={height} className="w-[3px] rounded-full bg-white" style={{ height }} />
      ))}
    </span>
  );
}

function WifiIcon() {
  return (
    <span className="relative h-3 w-4" aria-hidden="true">
      <span className="absolute left-0 top-0 h-3 w-4 rounded-t-full border-2 border-b-0 border-white" />
      <span className="absolute bottom-0 left-[6px] h-1.5 w-1.5 rounded-full bg-white" />
    </span>
  );
}

function BatteryIcon() {
  return (
    <span className="flex items-center gap-1" aria-label="Battery 50 percent">
      <span className="relative h-[12px] w-[24px] rounded-[4px] border border-white">
        <span className="absolute left-[2px] top-[2px] h-[6px] w-[10px] rounded-[2px] bg-white" />
      </span>
      <span className="h-[6px] w-[2px] rounded-r bg-white" aria-hidden="true" />
      <span className="text-[11px] font-bold leading-none">50</span>
    </span>
  );
}

export function StatusBar() {
  return (
    <div className="flex h-11 shrink-0 items-center justify-between px-7 pt-2 text-[15px] font-bold leading-none text-white">
      <span>11:05</span>
      <div className="flex items-center gap-2">
        <SignalIcon />
        <WifiIcon />
        <BatteryIcon />
      </div>
    </div>
  );
}
