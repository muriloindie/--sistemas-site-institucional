"use client";

import { useEffect, useState } from "react";
import { Reveal } from "@/components/ui";

type LineTone = "cmd" | "ok" | "info" | "accent" | "dim";

type Line = { text: string; tone: LineTone };

const SCRIPT: Line[] = [
  { text: "esistemas connect --central \"Ê-Bot Panel\"", tone: "cmd" },
  { text: "Handshake seguro (TLS) · credenciais válidas", tone: "dim" },
  { text: "✓ WhatsApp Business autorizado", tone: "ok" },
  { text: "✓ Catálogo sincronizado com o ERP", tone: "ok" },
  { text: "→ Webhook /pedidos/novo registrado na fila", tone: "info" },
  { text: "✓ CRM atualizado via API REST", tone: "ok" },
  { text: "→ Assistente lendo a base de conhecimento…", tone: "info" },
  { text: "✓ Automação de confirmações agendada", tone: "ok" },
  { text: "Operação conectada — integrações ativas", tone: "accent" },
];

const TYPE_MS = 26;
const LINE_PAUSE_MS = 380;
const BOOT_PAUSE_MS = 900;
const FINAL_HOLD_MS = 4200;

/**
 * Console de integração (estilo terminal) para /solucoes: escreve as linhas
 * em loop com efeito de digitação; com reduced-motion, mostra tudo estático.
 */
export default function TerminalShowcase() {
  const [reduced, setReduced] = useState(false);
  const [lines, setLines] = useState<Line[]>([]);
  const [partial, setPartial] = useState("");

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduced) {
      setLines(SCRIPT);
      setPartial("");
      return;
    }

    let cancelled = false;
    const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

    const run = async () => {
      await wait(200);
      while (!cancelled) {
        setLines([]);
        setPartial("");
        await wait(BOOT_PAUSE_MS);
        if (cancelled) return;

        for (const line of SCRIPT) {
          if (line.tone === "cmd") {
            for (let i = 0; i <= line.text.length; i++) {
              if (cancelled) return;
              setPartial(line.text.slice(0, i));
              const jitter = i % 7 === 0 ? 90 : 0;
              await wait(TYPE_MS + jitter);
            }
            await wait(LINE_PAUSE_MS);
          } else {
            await wait(LINE_PAUSE_MS + 140);
          }
          if (cancelled) return;
          setLines((prev) => [...prev, line]);
          setPartial("");
        }

        await wait(FINAL_HOLD_MS);
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [reduced]);

  return (
    <section className="section-block terminal-section">
      <div className="site-container">
        <Reveal className="motion-reveal">
          <div className="section-heading section-heading-split">
            <div>
              <span className="section-kicker">Como se vê na prática</span>
              <h2 className="section-title">Uma operação conectada, <span>linha por linha.</span></h2>
            </div>
            <p className="section-intro">É assim que a conexão entre canais, sistemas e automações aparece para a sua equipe: cada passo confirmado no console, com a operação seguindo o fluxo.</p>
          </div>
        </Reveal>

        <Reveal className="motion-reveal">
          <div className="terminal-stage">
            <span className="terminal-glow" aria-hidden="true" />
            <div className="terminal-window" role="img" aria-label="Console ilustrativo de integração: WhatsApp Business autorizado, catálogo sincronizado com o ERP, webhook de pedidos e automações ativas.">
              <div className="terminal-bar">
                <i className="tl-dot tl-dot-red" aria-hidden="true" />
                <i className="tl-dot tl-dot-yellow" aria-hidden="true" />
                <i className="tl-dot tl-dot-green" aria-hidden="true" />
                <span className="terminal-title">console · integrações Ê-Sistemas</span>
              </div>
              <div className="terminal-body" aria-hidden="true">
                <div className="terminal-lines" data-static={reduced ? "true" : "false"}>
                  {lines.map((line, index) => (
                    <p className={`terminal-line terminal-line-${line.tone}`} key={`${index}-${line.text}`}>
                      {line.tone === "cmd" ? <b className="terminal-prompt">$</b> : line.tone !== "dim" ? <i className="terminal-glyph">{line.text.slice(0, 1)}</i> : <i className="terminal-glyph terminal-glyph-blank" />}
                      <span>{line.tone === "dim" || line.tone === "cmd" ? line.text : line.text.slice(1)}</span>
                    </p>
                  ))}
                  {partial ? (
                    <p className="terminal-line terminal-line-cmd">
                      <b className="terminal-prompt">$</b>
                      <span>{partial}</span>
                      <i className="terminal-caret" />
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
            <p className="terminal-note">Console ilustrativo — na implantação real, esse cuidado com o fluxo acontece nos bastidores: você vê o resultado, a gente acompanha o script.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
