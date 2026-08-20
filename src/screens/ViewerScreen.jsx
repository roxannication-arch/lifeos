export function ViewerScreen({ goTo, src }) {
  const viewerSrc = src ? `${src}#toolbar=0&navpanes=0&scrollbar=1&view=FitH&zoom=page-width` : "";

  return (
    <div className="h-full bg-black">
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
      <div className="h-[calc(100%-60px)] bg-black">
        {src ? (
          <iframe title="Account statement PDF" src={viewerSrc} className="h-full w-full border-0 bg-black" />
        ) : (
          <div className="flex h-full items-center justify-center px-6 text-center text-sm font-semibold text-white">
            No statement file selected.
          </div>
        )}
      </div>
    </div>
  );
}
