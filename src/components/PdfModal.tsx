"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";

export type PdfDoc = {
  title: string;
  src: string;
  filename: string;
};

/**
 * Modal de visualização de PDF (iframe) com botão de download dedicado.
 * Fecha com Esc, clique no fundo ou no botão de fechar.
 */
export default function PdfModal({ doc, onClose }: { doc: PdfDoc | null; onClose: () => void }) {
  useEffect(() => {
    if (!doc) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [doc, onClose]);

  if (!doc || typeof document === "undefined") return null;

  return createPortal(
    <div className="pdf-modal-root">
      <div className="pdf-modal-overlay" onClick={onClose} aria-hidden="true" />
      <div className="pdf-modal" role="dialog" tabIndex={-1} aria-modal="true" aria-label={`Visualizar ${doc.title}`}>
        <header className="pdf-modal-head">
          <div>
            <small>Documento oficial · PDF</small>
            <h3>{doc.title}</h3>
          </div>
          <div className="pdf-modal-actions">
            <a className="pdf-modal-download" href={doc.src} download={doc.filename}>
              Baixar
            </a>
            <button className="pdf-modal-close" type="button" onClick={onClose} aria-label="Fechar documento">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </header>
        <div className="pdf-modal-frame">
          <iframe src={`${doc.src}#view=Fit`} title={doc.title} />
        </div>
      </div>
    </div>,
    document.body,
  );
}
