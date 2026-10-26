"use client";

import { useState } from "react";
import Link from "next/link";
import { IconCheck, IconClose } from "@/components/icons";

/** Banner visual de consentimento: escolhas são apenas de demonstração e reiniciam no refresh. */
export default function CookieConsentPreview() {
  const [visible, setVisible] = useState(true);
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [personalization, setPersonalization] = useState(false);

  if (!visible) return null;

  return (
    <aside className={`cookie-consent${preferencesOpen ? " is-expanded" : ""}`} aria-label="Preferências de cookies">
      <div className="cookie-consent-main">
        <span className="cookie-consent-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.8 12.2A8.8 8.8 0 1 1 11.8 3a3.5 3.5 0 0 0 4.6 4.6 3.5 3.5 0 0 0 4.4 4.6Z" />
            <circle cx="8.2" cy="10" r=".8" />
            <circle cx="11" cy="16" r=".8" />
            <circle cx="15" cy="12" r=".8" />
          </svg>
        </span>
        <div className="cookie-consent-copy">
          <div className="cookie-consent-heading">
            <span className="cookie-consent-kicker">Sua privacidade</span>
            <h2>Você escolhe como usamos cookies.</h2>
          </div>
          <p>Usamos cookies necessários para o funcionamento do site. Com sua autorização, também podemos usar cookies opcionais para entender a navegação e melhorar sua experiência.</p>
          <Link href="/privacidade" className="cookie-consent-policy">Leia nossa política de privacidade <span aria-hidden="true">↗</span></Link>
        </div>
      </div>

      <button className="cookie-consent-close" type="button" aria-label="Fechar aviso de cookies" onClick={() => setVisible(false)}>
        <IconClose />
      </button>

      {preferencesOpen ? (
        <div className="cookie-preferences" aria-label="Categorias de cookies">
          <div className="cookie-preference-row">
            <span><b>Necessários</b><small>Essenciais para recursos básicos do site.</small></span>
            <span className="cookie-required"><IconCheck /> Sempre ativos</span>
          </div>
          <label className="cookie-preference-row">
            <span><b>Estatísticas</b><small>Ajudam a entender como o site é utilizado.</small></span>
            <input type="checkbox" checked={analytics} onChange={(event) => setAnalytics(event.target.checked)} />
          </label>
          <label className="cookie-preference-row">
            <span><b>Personalização</b><small>Lembram escolhas para adaptar a experiência.</small></span>
            <input type="checkbox" checked={personalization} onChange={(event) => setPersonalization(event.target.checked)} />
          </label>
        </div>
      ) : null}

      <div className="cookie-consent-actions">
        {preferencesOpen ? (
          <button className="cookie-button cookie-button-quiet" type="button" onClick={() => setPreferencesOpen(false)}>Voltar</button>
        ) : (
          <button className="cookie-button cookie-button-quiet" type="button" onClick={() => setPreferencesOpen(true)}>Personalizar</button>
        )}
        <button className="cookie-button cookie-button-outline" type="button" onClick={() => setVisible(false)}>Recusar opcionais</button>
        <button className="cookie-button cookie-button-primary" type="button" onClick={() => setVisible(false)}>
          {preferencesOpen ? "Salvar escolhas" : "Aceitar todos"}
        </button>
      </div>
    </aside>
  );
}
