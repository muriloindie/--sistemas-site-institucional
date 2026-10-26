import {
  IconArrow,
  IconChart,
  IconChat,
  IconPulse,
  IconTarget,
  IconWhatsapp,
} from "@/components/icons";
import { WhatsappLink } from "@/components/ExitLink";
import { DashboardMock, ProductIcon, type Kpi } from "@/components/products/mockups";
import { whatsappLink } from "@/lib/links";

const PIPELINE_KPIS: Kpi[] = [
  { icon: <IconChart />, label: "Pipeline aberto", value: "R$ 63.400", delta: "+12%", note: "em negociação" },
  { icon: <IconTarget />, label: "Leads pela IA", value: "186", delta: "+32%", note: "qualificados hoje" },
  { icon: <IconChat />, label: "Conversão", value: "24%", delta: "+6%", note: "lead até ganho" },
  { icon: <IconPulse />, label: "1ª resposta", value: "18s", delta: "−34%", note: "tempo médio", down: true },
];

const FUNNEL = [
  { label: "Novo lead", count: "4.982", width: "100%" },
  { label: "Qualificado (IA)", count: "2.140", width: "76%" },
  { label: "Em negociação", count: "1.268", width: "54%" },
  { label: "Follow-up", count: "744", width: "34%" },
  { label: "Ganho", count: "318", width: "18%" },
];

/** Card completo do Ê-Bot Panel + API. */
export default function EbotPanel() {
  return (
    <article className="product-card product-card-platform">
      <div className="product-copy">
        <ProductIcon src="/ebot/icone.webp" />
        <span className="product-eyebrow"><i /> PLATAFORMA DE ATENDIMENTO E AUTOMAÇÃO</span>
        <h3>Ê-Bot <span>Panel + API</span></h3>
        <p>A central que recebe, classifica e resolve. Conversas do WhatsApp, Instagram e site entram em filas, a IA responde o que é repetitivo e só então passa para o humano — tudo sincronizado com o seu ERP, CRM ou sistemas internos via API e webhooks.</p>
        <div className="product-tags"><span>Multiatendimento</span><span>Filas e transferências</span><span>IA e automações</span><span>CRM e Kanban</span><span>Campanhas e disparos</span><span>API e webhooks</span></div>
        <div className="product-stats">
          <span><b>24/7</b><small>IA respondendo</small></span>
          <span><b>1</b><small>central multi-canal</small></span>
          <span><b>API</b><small>webhooks nativos</small></span>
        </div>
        <WhatsappLink className="product-link" href={whatsappLink("Olá! Gostaria de conhecer o Ê-Bot Panel e a Ê-Bot API.")}>
          <IconWhatsapp /> Conhecer o Ê-Bot <IconArrow />
        </WhatsappLink>
      </div>
      <div className="product-visual">
        <DashboardMock
          tone="panel"
          greeting="Bom dia, Ruan Viana"
          sub="Veja como está a operação da empresa hoje: atendimentos, agenda, IA e equipes."
          kpis={PIPELINE_KPIS}
        >
          <div className="ui-panel">
            <span className="ui-panel-head"><b>Ganos e pipeline por mês</b><em>12 meses</em></span>
            <div className="ui-bars">
              {[38, 52, 44, 66, 58, 78, 70, 92, 84, 96, 88, 100].map((height, index) => (
                <i key={index} style={{ height: `${height}%` }} />
              ))}
            </div>
            <div className="ui-axis"><span>Jan</span><span>Mar</span><span>Mai</span><span>Jul</span><span>Set</span><span>Nov</span></div>
          </div>
          <div className="ui-panel">
            <span className="ui-panel-head"><b>Leads qualificados pela IA</b><i className="ui-link">Ver CRM →</i></span>
            <div className="ui-funnel">
              {FUNNEL.map((row) => (
                <div className="ui-funnel-row" key={row.label}>
                  <span className="ui-funnel-label"><b>{row.label}</b><em>{row.count}</em></span>
                  <span className="ui-funnel-track"><i style={{ width: row.width }} /></span>
                </div>
              ))}
            </div>
          </div>
        </DashboardMock>
        <span className="preview-disclaimer">Interface ilustrativa</span>
      </div>
    </article>
  );
}
