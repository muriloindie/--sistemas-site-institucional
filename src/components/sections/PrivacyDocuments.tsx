"use client";

import { useState } from "react";
import PdfModal, { type PdfDoc } from "@/components/PdfModal";
import { Reveal } from "@/components/ui";
import { IconArrow, IconExternal, IconEye } from "@/components/icons";

const SHARED_PDFS: PdfDoc[] = [
  {
    title: "Aviso de Privacidade — LGPD",
    src: "/pdf/ebot_LGPD.pdf",
    filename: "e-sistemas_LGPD.pdf",
  },
  {
    title: "Política de Privacidade",
    src: "/pdf/ebot_politica_privacidade.pdf",
    filename: "e-sistemas_politica-privacidade.pdf",
  },
];

/**
 * Documentos de privacidade da Ê-Sistemas: visualização em modal + download.
 * Usado na página /privacidade.
 */
export default function PrivacyDocuments() {
  const [openDoc, setOpenDoc] = useState<PdfDoc | null>(null);

  return (
    <section className="section-block privacy-docs">
      <div className="site-container">
        <Reveal className="motion-reveal">
          <div className="section-heading section-heading-center">
            <span className="section-kicker">Documentos oficiais</span>
            <h2 className="section-title">Transparência em <span>papel e na lei.</span></h2>
            <p className="section-intro">Veja os documentos que regulam o tratamento de dados no relacionamento com a Ê-Sistemas — completos e abertos para consulta a qualquer hora.</p>
          </div>
        </Reveal>

        <div className="privacy-docs-grid">
          {SHARED_PDFS.map((doc, index) => (
            <Reveal className="motion-reveal" delay={index * 90} key={doc.src}>
              <article className="privacy-doc-card">
                <span className="privacy-doc-cover" aria-hidden="true">
                  <i className="privacy-doc-fold" />
                  <b>PDF</b>
                  <small>{doc.filename}</small>
                </span>
                <div className="privacy-doc-info">
                  <h3>{doc.title}</h3>
                  <p>Válido para os produtos Ê-Bot e para os serviços prestados pela Ê-Sistemas. Atualizado e publicado conforme os requisitos da LGPD.</p>
                </div>
                <div className="privacy-doc-actions">
                  <button className="button button-primary" type="button" onClick={() => setOpenDoc(doc)}>
                    <IconEye /> Visualizar <IconArrow />
                  </button>
                  <a className="button button-secondary" href={doc.src} download={doc.filename}>
                    Baixar PDF
                  </a>
                </div>
                <span className="privacy-doc-hint"><IconExternal /> abre no modal completo, sem sair do site</span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <PdfModal doc={openDoc} onClose={() => setOpenDoc(null)} />
    </section>
  );
}
