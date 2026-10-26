import {
  IconChat,
  IconCheckCircle,
  IconPulse,
  IconRefresh,
  IconSpark,
  IconUsers,
  IconWhatsapp,
  IconArrow,
  IconExternal,
} from "@/components/icons";
import { ExternalSiteLink, WhatsappLink } from "@/components/ExitLink";
import { DashboardMock, ProductIcon, type Kpi } from "@/components/products/mockups";
import { whatsappLink } from "@/lib/links";

const CLINICAL_KPIS: Kpi[] = [
  { icon: <IconUsers />, label: "Atendimentos", value: "1.284", delta: "+18%", note: "no dia" },
  { icon: <IconSpark />, label: "Resolvidos pela IA", value: "73%", delta: "+12%", note: "sem humano" },
  { icon: <IconCheckCircle />, label: "Consultas", value: "312", delta: "+27%", note: "confirmadas" },
  { icon: <IconPulse />, label: "Espera média", value: "3 min", delta: "−21%", note: "recepção", down: true },
];

const AGENDA = [
  { time: "14:20", who: "Dra. Helena Costa", sub: "Cardiologia · retorno", status: "Confirmado", tone: "is-ok" },
  { time: "15:00", who: "Dr. Marcos Prado", sub: "Clínica geral · retorno", status: "Encaixe automático", tone: "is-auto" },
  { time: "16:40", who: "Lab. Exames", sub: "Hemograma · jejum", status: "Aguardando", tone: "is-wait" },
];

/** Card completo do Ê-Bot Clinical. */
export default function EbotClinical() {
  return (
    <article className="product-card product-card-clinical" id="clinical">
      <div className="product-body">
        <div className="product-card-top"><ProductIcon src="/ebot-clinical/icone.webp" /><span className="product-sector">SAÚDE PÚBLICA E PRIVADA</span></div>
        <span className="product-eyebrow product-eyebrow-light"><i /> AUTOMAÇÃO DE AGENDA E ATENDIMENTO</span>
        <h3>Ê-Bot Clinical</h3>
        <p>A secretária que não dorme: confirma e remarca consultas, responde pacientes 24/7, ocupa a agenda com encaixes automáticos e transforma a conversa da consulta em resumo e plano pós-consulta.</p>
        <ul className="product-feature-list">
          <li><IconRefresh /> Confirmação, lembrete e remarcação por IA</li>
          <li><IconUsers /> Fila inteligente de encaixe em horários vagos</li>
          <li><IconSpark /> Transcrição da consulta com resumo e insights</li>
          <li><IconChat /> CRM com funil, resumos e automações</li>
        </ul>
        <div className="product-stats">
          <span><b>42%</b><small>resolvidos pela IA*</small></span>
          <span><b>3 min</b><small>espera média*</small></span>
          <span><b>96</b><small>consultas confirmadas*</small></span>
          <em className="product-stats-note">*Indicadores ilustrativos</em>
        </div>
        <div className="product-actions">
          <ExternalSiteLink className="product-link product-website-link" href="https://eclinical.ia.br/" label="Ê-Bot Clinical" domain="eclinical.ia.br">
            <IconExternal /> Visitar site
          </ExternalSiteLink>
          <WhatsappLink className="product-link product-whatsapp-link" href={whatsappLink("Olá! Gostaria de conhecer o Ê-Bot Clinical.")}>
            <IconWhatsapp /> Falar no WhatsApp <IconArrow />
          </WhatsappLink>
        </div>
      </div>
      <div className="product-visual">
        <DashboardMock
          tone="clinical"
          greeting="Bom dia, Dra. Helena"
          sub="Agenda, confirmações e fila de espera das unidades hoje."
          kpis={CLINICAL_KPIS}
        >
          <div className="ui-panel">
            <span className="ui-panel-head"><b>Fluxo por hora</b><em>Hoje</em></span>
            <svg className="ui-line" viewBox="0 0 200 74" preserveAspectRatio="none" aria-hidden="true">
              <path className="ui-line-grid" d="M0 19 H200 M0 38 H200 M0 57 H200" />
              <path className="ui-line-area" d="M0 63 L18 55 L36 58 L54 42 L72 46 L90 29 L108 34 L126 21 L144 27 L162 15 L180 20 L200 10 L200 74 L0 74 Z" />
              <path className="ui-line-path" d="M0 63 L18 55 L36 58 L54 42 L72 46 L90 29 L108 34 L126 21 L144 27 L162 15 L180 20 L200 10" />
            </svg>
            <span className="ui-legend"><i className="is-a" /> Agendados <i className="is-b" /> Confirmações <i className="is-c" /> Encaixes</span>
          </div>
          <div className="ui-panel">
            <span className="ui-panel-head"><b>Agenda inteligente</b><i className="ui-link">Ver agenda →</i></span>
            <div className="ui-agenda">
              {AGENDA.map((row) => (
                <span className="ui-agenda-row" key={row.time}>
                  <i>{row.time}</i>
                  <span>
                    <b>{row.who}</b>
                    <small>{row.sub}</small>
                  </span>
                  <em className={row.tone}>{row.status}</em>
                </span>
              ))}
            </div>
          </div>
        </DashboardMock>
        <span className="preview-disclaimer">Telas e indicadores ilustrativos</span>
      </div>
    </article>
  );
}
