import type { ReactNode } from "react";
import { Reveal } from "@/components/ui";
import FAQ from "@/components/FAQ";
import {
  IconBolt,
  IconCheck,
  IconCode,
  IconLink,
  IconLock,
  IconMobile,
  IconRefresh,
  IconShield,
  IconUsers,
} from "@/components/icons";

type SolutionDetail = {
  id: string;
  icon: ReactNode;
  label: string;
  title: string;
  text: string;
  bestFor: string[];
  deliverables: string[];
};

const DETAILS: SolutionDetail[] = [
  {
    id: "sistemas",
    icon: <IconCode />,
    label: "01 · SISTEMAS SOB MEDIDA",
    title: "Quando a operação tem regras que uma ferramenta pronta não entende.",
    text: "Desenhamos sistemas ao redor do fluxo real do negócio. Perfis, permissões, aprovações, exceções e indicadores entram na arquitetura desde o início — a equipe não precisa criar processos paralelos para compensar limitações do software.",
    bestFor: ["Processos com regras e etapas específicas", "Planilhas e controles paralelos que perderam escala", "Diferentes perfis usando a mesma operação"],
    deliverables: ["Fluxos e arquitetura da solução", "Sistema web e painel administrativo", "Perfis, permissões e regras de negócio", "Dashboards e rotinas operacionais"],
  },
  {
    id: "aplicativos",
    icon: <IconMobile />,
    label: "02 · APLICATIVOS E EXPERIÊNCIAS",
    title: "Quando a experiência precisa acompanhar a pessoa, e não o contrário.",
    text: "Criamos experiências web e mobile para clientes, parceiros e equipes em campo. O desenho considera contexto de uso, conectividade, tamanho de tela e ações recorrentes para que a tarefa principal seja simples de executar.",
    bestFor: ["Equipes que trabalham fora do escritório", "Portais de cliente, parceiro ou autoatendimento", "Jornadas mobile com dados sincronizados"],
    deliverables: ["Jornadas e protótipos de experiência", "Aplicativos e interfaces responsivas", "Integração com a operação central", "Validação com usuários e contexto real"],
  },
  {
    id: "integracoes",
    icon: <IconLink />,
    label: "03 · INTEGRAÇÕES E APIS",
    title: "Quando a informação existe, mas vive separada entre ferramentas.",
    text: "Conectamos os sistemas que a empresa já utiliza e criamos as peças necessárias para o fluxo funcionar de ponta a ponta. O objetivo é reduzir digitação repetida, divergência de dados e dependência de atualizações manuais.",
    bestFor: ["ERP, CRM e canais que não conversam", "Rotinas de copiar e colar entre plataformas", "Eventos que precisam atualizar vários sistemas"],
    deliverables: ["Mapa de dados e pontos de integração", "APIs REST, webhooks e eventos", "Sincronização com sistemas atuais", "Tratamento de falhas e acompanhamento"],
  },
  {
    id: "automacao",
    icon: <IconBolt />,
    label: "04 · AUTOMAÇÃO, DADOS E IA",
    title: "Quando tarefas repetitivas impedem a equipe de cuidar do que importa.",
    text: "Automatizamos fluxos com regras claras e aplicamos IA onde ela realmente ajuda: organizar contexto, classificar demandas, responder rotinas e preparar próximas ações. As exceções continuam visíveis para a equipe.",
    bestFor: ["Atendimentos e atualizações repetitivas", "Triagem e organização de demandas", "Dados que precisam virar acompanhamento"],
    deliverables: ["Gatilhos e fluxos automatizados", "Assistentes e automações com IA", "Mensagens, alertas e atualizações", "Painéis para acompanhar a operação"],
  },
];

const ASSURANCES = [
  { icon: <IconUsers />, title: "Experiência de uso", text: "Fluxos desenhados para a tarefa e para o contexto de quem opera." },
  { icon: <IconShield />, title: "Segurança por desenho", text: "Permissões, dados e integrações considerados desde a arquitetura." },
  { icon: <IconLock />, title: "Responsabilidade com dados", text: "Acesso e tratamento de informação alinhados à necessidade da solução." },
  { icon: <IconRefresh />, title: "Base para evoluir", text: "Estrutura preparada para receber novos fluxos sem recomeçar o projeto." },
];

export function SolutionDetails() {
  return (
    <section className="section-block solution-details" aria-label="Detalhamento das soluções">
      <div className="site-container">
        <Reveal className="motion-reveal">
          <div className="section-heading section-heading-split">
            <div>
              <span className="section-kicker">Escopo por necessidade</span>
              <h2 className="section-title">O que cada frente pode <span>resolver na prática.</span></h2>
            </div>
            <p className="section-intro">Exemplos de cenários e entregas possíveis. O escopo final é sempre construído a partir do diagnóstico da operação.</p>
          </div>
        </Reveal>

        <div className="solution-details-list">
          {DETAILS.map((detail) => (
            <Reveal className="motion-reveal" key={detail.id}>
              <article className="solution-detail" id={detail.id}>
                <div className="solution-detail-copy">
                  <span className="solution-detail-icon">{detail.icon}</span>
                  <small>{detail.label}</small>
                  <h2>{detail.title}</h2>
                  <p>{detail.text}</p>
                </div>
                <aside className="solution-scope-panel">
                  <div>
                    <h3>Quando faz sentido</h3>
                    <ul>{detail.bestFor.map((item) => <li key={item}><IconCheck />{item}</li>)}</ul>
                  </div>
                  <div>
                    <h3>Entregas possíveis</h3>
                    <div className="solution-scope-tags">{detail.deliverables.map((item) => <span key={item}>{item}</span>)}</div>
                  </div>
                </aside>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SolutionAssurances() {
  return (
    <section className="section-block solution-assurances">
      <div className="site-container">
        <Reveal className="motion-reveal">
          <div className="section-heading section-heading-split">
            <div>
              <span className="section-kicker">Presente em toda entrega</span>
              <h2 className="section-title">A solução muda. <span>A responsabilidade, não.</span></h2>
            </div>
            <p className="section-intro">Quatro cuidados que atravessam sistemas, aplicativos, integrações e automações.</p>
          </div>
        </Reveal>
        <div className="solution-assurances-grid">
          {ASSURANCES.map((item, index) => (
            <Reveal className="motion-reveal" delay={index * 70} key={item.title}>
              <article><span>{item.icon}</span><h3>{item.title}</h3><p>{item.text}</p></article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const SOLUTION_FAQ = [
  {
    question: "Preciso ter um escopo pronto antes de falar com vocês?",
    answer: "Não. O escopo pode ser construído durante o diagnóstico. É útil chegar com o processo, os usuários e o problema que precisa ser resolvido; a partir disso, organizamos prioridades, possibilidades e próximos passos.",
  },
  {
    question: "Dá para começar com uma parte pequena do projeto?",
    answer: "Sim. Quando faz sentido, dividimos a solução em entregas incrementais para validar o fluxo principal antes de ampliar o escopo. A prioridade é resolver uma parte útil sem comprometer a arquitetura futura.",
  },
  {
    question: "Vocês trabalham com sistemas que já existem na empresa?",
    answer: "Sim. O desenho pode incluir integração com ferramentas atuais, evolução de uma solução existente ou substituição gradual de rotinas que hoje dependem de controles paralelos.",
  },
  {
    question: "É possível combinar um produto Ê-Bot com desenvolvimento sob medida?",
    answer: "Sim. Um produto pode cobrir a parte comum da operação enquanto integrações e módulos específicos são desenvolvidos para o seu contexto. Essa combinação evita reconstruir o que já está pronto.",
  },
  {
    question: "Como são definidos prazo e investimento?",
    answer: "Depois de entender escopo, usuários, integrações e prioridades. A proposta apresenta entregas e etapas para que prazo e investimento tenham relação clara com o que será construído.",
  },
];

export function SolutionsFAQ() {
  return <FAQ items={SOLUTION_FAQ} title={<>Dúvidas sobre escopo, integração <span className="text-highlight">e execução.</span></>} />;
}
