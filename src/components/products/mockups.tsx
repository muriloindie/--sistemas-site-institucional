import Image from "next/image";
import type { ReactNode } from "react";

export type Kpi = {
  icon: ReactNode;
  label: string;
  value: string;
  delta: string;
  note: string;
  down?: boolean;
};

export function ProductIcon({ src }: { src: string }) {
  return (
    <span className="product-icon product-icon-image">
      <Image src={src} alt="" fill sizes="72px" style={{ objectFit: "contain", objectPosition: "center" }} />
    </span>
  );
}

/**
 * Shell comum dos dois dashboards (Ê-Bot Panel e Ê-Bot Clinical).
 * A estrutura espelha as telas de referência em `ebot/imagens/`: barra lateral,
 * topbar com busca e pills de status, saudação, fileira de KPIs e dois painéis.
 * Todo o conteúdo é ilustrativo e fica fora da árvore de acessibilidade.
 */
export function DashboardMock({
  tone,
  greeting,
  sub,
  kpis,
  children,
}: {
  tone: "panel" | "clinical";
  greeting: string;
  sub: string;
  kpis: Kpi[];
  children: ReactNode;
}) {
  return (
    <div className={`ui-frame ui-frame-${tone}`} aria-hidden="true">
      <aside className="ui-side">
        <span className="ui-side-brand">
          <i>EB</i>
          <b>
            Ê-Bot<small>Painel operacional</small>
          </b>
        </span>
        <span className="ui-side-fold">‹ Recolher menu</span>
        <small className="ui-side-group">ACESSO RÁPIDO</small>
        <ul className="ui-nav">
          <li className="is-active">Dashboard</li>
          <li>
            Atendimentos <em>9</em>
          </li>
          <li>CRM</li>
          <li>Agenda</li>
          <li>Kanban</li>
          <li>Tarefas</li>
        </ul>
        <small className="ui-side-group">AUTOMAÇÃO</small>
        <ul className="ui-nav">
          <li>Fluxos de IA</li>
          <li>
            Campanhas <em>8</em>
          </li>
        </ul>
        <span className="ui-side-card">
          <b>Mecânica São Lucas</b>
          <small>IA operando 24/7 nesta empresa</small>
        </span>
      </aside>

      <div className="ui-main">
        <div className="ui-topbar">
          <span className="ui-org">
            <i>EB</i>
            <span>
              <b>Central operacional</b>
              <small>Mecânica São Lucas</small>
            </span>
          </span>
          <span className="ui-search">Buscar cliente, atendimento ou protocolo</span>
          <span className="ui-chip">Hoje, 05 de out</span>
          <span className="ui-pill ui-pill-live">
            <i /> WhatsApp 1/3 online
          </span>
          <span className="ui-avatar">RV</span>
        </div>

        <div className="ui-greet">
          <b>{greeting}</b>
          <small>{sub}</small>
        </div>

        <div className="ui-kpis">
          {kpis.map((kpi) => (
            <span className="ui-kpi" key={kpi.label}>
              <span className="ui-kpi-top">
                <i>{kpi.icon}</i>
                <em className={kpi.down ? "is-down" : undefined}>{kpi.delta}</em>
              </span>
              <small>{kpi.label}</small>
              <b>{kpi.value}</b>
              <u>{kpi.note}</u>
            </span>
          ))}
        </div>

        <div className="ui-panels">{children}</div>
      </div>
    </div>
  );
}
