export function ViewerScreen({ goTo, src }) {
  return (
    <div className="h-[800px] bg-black">
      <header className="flex h-[60px] items-center justify-between px-4">
        <button
          type="button"
          onClick={() => goTo("statement")}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1C1C1E] text-2xl font-semibold text-white"
          aria-label="Back to statement"
        >
          ←
        </button>
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1C1C1E] text-xl text-white"
          aria-label="Share statement"
        >
          ⇧
        </button>
      </header>
      <div className="h-[740px] bg-white">
        {src ? (
          <iframe title="Account statement PDF" src={src} className="h-full w-full border-0 bg-white" />
        ) : (
          <div className="flex h-full items-center justify-center px-6 text-center text-sm font-semibold text-black">
            No statement file selected.
          </div>
        )}
      </div>
    </div>
  );
}
