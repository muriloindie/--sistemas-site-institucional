import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "@/components/ui";
import {
  IconArrow,
  IconBolt,
  IconChat,
  IconCheck,
  IconCode,
  IconDatabase,
  IconLink,
  IconMobile,
  IconRefresh,
} from "@/components/icons";

type Solution = {
  key: "software" | "apps" | "integrations" | "automation";
  icon: ReactNode;
  number: string;
  title: string;
  text: string;
  items: string[];
  href: string;
};

const SOLUTIONS: Solution[] = [
  {
    key: "software",
    icon: <IconCode />,
    number: "01",
    title: "Sistemas sob medida",
    text: "Plataformas desenhadas em torno do processo, das regras e dos usuários do negócio — sem adaptar a operação a uma ferramenta genérica.",
    items: ["Portais e painéis administrativos", "Regras, perfis e fluxos de aprovação", "Dashboards e rotinas operacionais"],
    href: "/solucoes#sistemas",
  },
  {
    key: "apps",
    icon: <IconMobile />,
    number: "02",
    title: "Aplicativos e experiências",
    text: "Experiências web e mobile que aproximam a empresa das pessoas e simplificam o trabalho em campo, no atendimento ou na gestão.",
    items: ["Aplicativos operacionais", "Portais para clientes e parceiros", "Interfaces responsivas e acessíveis"],
    href: "/solucoes#aplicativos",
  },
  {
    key: "integrations",
    icon: <IconLink />,
    number: "03",
    title: "Integrações e APIs",
    text: "Conectamos ERP, CRM, WhatsApp, plataformas e sistemas legados para a informação circular sem retrabalho entre as ferramentas.",
    items: ["APIs REST e webhooks", "Sincronização de dados e eventos", "Integração com canais e sistemas atuais"],
    href: "/solucoes#integracoes",
  },
  {
    key: "automation",
    icon: <IconBolt />,
    number: "04",
    title: "Automação, dados e IA",
    text: "Automatizamos tarefas repetitivas e aplicamos IA com contexto, mantendo a equipe no controle das decisões que precisam de gente.",
    items: ["Assistentes e fluxos inteligentes", "Alertas, mensagens e atualizações", "Dados organizados para acompanhamento"],
    href: "/solucoes#automacao",
  },
];

function SolutionVisual({ type }: { type: Solution["key"] }) {
  if (type === "software") {
    return (
      <div className="home-software-visual" aria-hidden="true">
        <div className="home-mini-toolbar"><i /><i /><i /><span>workspace / operação</span></div>
        <div className="home-mini-workspace">
          <div className="home-mini-sidebar"><i /><i /><i /><i /></div>
          <div className="home-mini-board">
            <span><small>EM ANDAMENTO</small><b /><b /><b /></span>
            <span><small>VALIDAÇÃO</small><b /><b /></span>
            <span><small>CONCLUÍDO</small><b /><b /><b /></span>
          </div>
        </div>
      </div>
    );
  }

  if (type === "apps") {
    return (
      <div className="home-apps-visual" aria-hidden="true">
        <div className="home-app-device device-back"><span /><i /><i /><i /></div>
        <div className="home-app-device device-front"><span /><b>Operação em campo</b><i /><i /><i /><em><IconCheck /> Sincronizado</em></div>
        <div className="home-app-signal"><i /><i /><i /></div>
      </div>
    );
  }

  if (type === "integrations") {
    return (
      <div className="home-integrations-visual integration-flow-visual" aria-hidden="true">
        <svg className="integration-flow-lines" viewBox="0 0 400 196" preserveAspectRatio="none">
          <defs>
            <marker id="integration-flow-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto">
              <path d="M0 0 8 4 0 8Z" />
            </marker>
          </defs>
          <path d="M112 53 C136 53 147 78 166 88" markerEnd="url(#integration-flow-arrow)" />
          <path d="M112 143 C136 143 147 118 166 108" markerEnd="url(#integration-flow-arrow)" />
          <path d="M234 88 C253 78 264 53 288 53" markerEnd="url(#integration-flow-arrow)" />
          <path d="M234 108 C253 118 264 143 288 143" markerEnd="url(#integration-flow-arrow)" />
        </svg>
        <div className="integration-flow-group integration-flow-source">
          <span className="integration-node"><IconDatabase /><b>ERP / CRM</b></span>
          <span className="integration-node"><IconMobile /><b>Canais</b></span>
        </div>
        <span className="integration-core"><IconLink /><b>Ê</b><small>conecta</small></span>
        <div className="integration-flow-group integration-flow-target">
          <span className="integration-node"><IconLink /><b>APIs</b></span>
          <span className="integration-node"><IconRefresh /><b>Webhooks</b></span>
        </div>
      </div>
    );
  }

  return (
    <div className="home-automation-visual" aria-hidden="true">
      {[
        ["Evento recebido", "agora"],
        ["IA organiza o contexto", "processando"],
        ["Próxima ação executada", "concluído"],
      ].map(([label, status], index) => (
        <div className="automation-flow-row" key={label}>
          <span className={`automation-flow-dot dot-${index}`}><IconCheck /></span>
          <b>{label}</b><small>{status}</small>
        </div>
      ))}
    </div>
  );
}

/** Soluções em formato bento, com entregáveis e representações CSS animadas. */
export default function HomeSolutions() {
  return (
    <section className="section-block home-solutions">
      <div className="site-container">
        <Reveal className="motion-reveal">
          <div className="section-heading section-heading-split">
            <div>
              <span className="section-kicker">Soluções para a operação</span>
              <h2 className="section-title">Do processo travado ao fluxo que a equipe <span>consegue usar.</span></h2>
            </div>
            <p className="section-intro">Quatro frentes que trabalham juntas ou separadas, conforme o desafio. A solução nasce do contexto — não de um pacote fechado.</p>
          </div>
        </Reveal>

        <div className="home-solutions-grid">
          {SOLUTIONS.map((solution, index) => (
            <Reveal className="motion-reveal home-solution-reveal" delay={index * 70} key={solution.key}>
              <article className={`home-solution-card home-solution-${solution.key}`}>
                <div className="home-solution-copy">
                  <div className="home-solution-top"><span className="home-solution-icon">{solution.icon}</span><small>{solution.number}</small></div>
                  <h3>{solution.title}</h3>
                  <p>{solution.text}</p>
                  <ul>{solution.items.map((item) => <li key={item}><IconCheck />{item}</li>)}</ul>
                  <div className="home-solution-actions">
                    <Link className="home-card-link" href={solution.href}>Explorar esta solução <IconArrow /></Link>
                  </div>
                </div>
                <SolutionVisual type={solution.key} />
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="motion-reveal">
          <div className="home-solutions-note">
            <span className="home-note-tip"><i className="home-note-icon"><IconChat /></i> Ainda não sabe qual frente resolve o seu cenário?</span>
            <Link className="home-card-link home-note-cta" href="/contato">Conte o desafio para o nosso time <IconArrow /></Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
