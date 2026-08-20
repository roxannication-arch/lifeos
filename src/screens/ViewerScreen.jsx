import { PdfDocumentViewer } from "../components/PdfDocumentViewer.jsx";
import { STATEMENT_PAGE_IMAGES } from "../constants.js";

function ImageDocumentViewer({ pages }) {
  return (
    <div className="safe-scroll h-full overflow-y-auto bg-black py-1">
      {pages.map((pageSrc, index) => (
        <img
          key={pageSrc}
          src={pageSrc}
          alt={`Statement page ${index + 1}`}
          className="mx-auto mb-2 block w-full bg-white shadow-lg shadow-black/45"
          loading={index < 2 ? "eager" : "lazy"}
        />
      ))}
    </div>
  );
}

export function ViewerScreen({ goTo, src }) {
  const imagePages = STATEMENT_PAGE_IMAGES[src];

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
          imagePages ? <ImageDocumentViewer pages={imagePages} /> : <PdfDocumentViewer src={src} />
        ) : (
          <div className="flex h-full items-center justify-center px-6 text-center text-sm font-semibold text-white">
            No statement file selected.
          </div>
        )}
      </div>
    </div>
  );
}
