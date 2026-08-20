import { useEffect, useRef, useState } from "react";
import * as pdfjs from "pdfjs-dist";

function PdfPage({ pageNumber, pdf, width }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    let renderTask = null;

    async function renderPage() {
      const page = await pdf.getPage(pageNumber);

      if (cancelled || !canvasRef.current) {
        return;
      }

      const baseViewport = page.getViewport({ scale: 1 });
      const scale = width / baseViewport.width;
      const viewport = page.getViewport({ scale });
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      const outputScale = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(viewport.width * outputScale);
      canvas.height = Math.floor(viewport.height * outputScale);
      canvas.style.width = `${Math.floor(viewport.width)}px`;
      canvas.style.height = `${Math.floor(viewport.height)}px`;

      renderTask = page.render({
        canvasContext: context,
        viewport,
        transform: outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : undefined,
      });

      await renderTask.promise;
    }

    renderPage().catch(() => {});

    return () => {
      cancelled = true;
      renderTask?.cancel();
    };
  }, [pageNumber, pdf, width]);

  return <canvas ref={canvasRef} className="mx-auto mb-2 block bg-white shadow-lg shadow-black/45" />;
}

export function PdfDocumentViewer({ src }) {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [pdf, setPdf] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!containerRef.current) {
      return undefined;
    }

    const observer = new ResizeObserver(([entry]) => {
      setContainerWidth(Math.max(0, Math.floor(entry.contentRect.width)));
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!src) {
      return undefined;
    }

    let cancelled = false;
    let loadingTask = null;
    let loadedDocument = null;

    setError("");
    setPdf(null);
    setPageCount(0);

    async function loadPdf() {
      const response = await fetch(src, { cache: "no-store" });

      if (!response.ok) {
        throw new Error("PDF request failed");
      }

      const data = new Uint8Array(await response.arrayBuffer());
      loadingTask = pdfjs.getDocument({ data, disableWorker: true });
      const loadedPdf = await loadingTask.promise;
      loadedDocument = loadedPdf;

      if (cancelled) {
        loadedPdf.destroy();
        return;
      }

      setPdf(loadedPdf);
      setPageCount(loadedPdf.numPages);
    }

    loadPdf().catch(() => {
        if (cancelled) {
          return;
        }

        setError("Could not open this PDF.");
      });

    return () => {
      cancelled = true;
      loadingTask?.destroy();
      loadedDocument?.destroy();
    };
  }, [src]);

  const pageWidth = Math.max(260, containerWidth - 4);

  return (
    <div ref={containerRef} className="safe-scroll h-full overflow-y-auto bg-black py-1">
      {!pdf && !error ? (
        <div className="flex h-full items-center justify-center text-sm font-semibold text-white/55">Opening PDF...</div>
      ) : null}

      {error ? <div className="flex h-full items-center justify-center px-6 text-center text-sm font-semibold text-white">{error}</div> : null}

      {pdf && pageCount > 0
        ? Array.from({ length: pageCount }, (_, index) => (
            <PdfPage key={index + 1} pageNumber={index + 1} pdf={pdf} width={pageWidth} />
          ))
        : null}
    </div>
  );
}
