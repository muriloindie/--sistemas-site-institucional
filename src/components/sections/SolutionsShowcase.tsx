"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { createPortal } from "react-dom";
import type { ReactNode } from "react";
import { Reveal } from "@/components/ui";
import { whatsappLink } from "@/lib/links";
import { WhatsappLink } from "@/components/ExitLink";
import {
  IconArrow,
  IconBolt,
  IconCamera,
  IconChart,
  IconChat,
  IconCheck,
  IconClose,
  IconCode,
  IconCompass,
  IconDatabase,
  IconLayers,
  IconLink,
  IconMap,
  IconMobile,
  IconPen,
  IconRefresh,
  IconUsers,
  IconWhatsapp,
} from "@/components/icons";

type SolutionGroup = "sistemas" | "apps" | "integracoes" | "automacao";

type ShowcaseItem = {
  id: string;
  group: SolutionGroup;
  icon: ReactNode;
  title: string;
  short: string;
  fit: string;
  how: { title: string; text: string }[];
  deliver: string[];
  stack: string[];
  whatsappMessage: string;
};

const GROUP_META: Record<SolutionGroup, { label: string; color: string; wash: string; icon: ReactNode }> = {
  sistemas: { label: "Sistema sob medida", color: "#698148", wash: "rgba(105, 129, 72, 0.12)", icon: <IconCode /> },
  apps: { label: "App / experiência", color: "#2b7ac2", wash: "rgba(43, 129, 194, 0.12)", icon: <IconMobile /> },
  integracoes: { label: "Integração", color: "#9b6509", wash: "rgba(239, 165, 31, 0.14)", icon: <IconLink /> },
  automacao: { label: "Automação & IA", color: "#d2731f", wash: "rgba(237, 139, 44, 0.13)", icon: <IconBolt /> },
};

const SHOWCASE: ShowcaseItem[] = [
  {
    id: "portal-cliente",
    group: "sistemas",
    icon: <IconUsers />,
    title: "Portal do cliente",
    short: "Autoatendimento para pedidos, documentos e faturas — sem depender do time comercial.",
    fit: "Quando a central gasta horas respondendo o que o próprio cliente poderia resolver com um login: status do pedido, segunda via, histórico de compras.",
    how: [
      { title: "Acesso simples", text: "Entrada por conta, convite ou vínculo automático com o cadastro que já existe no seu sistema." },
      { title: "Áreas por necessidade", text: "Pedidos, notas, fichas e documentos organizados por perfil de acesso." },
      { title: "Autoatendimento real", text: "O cliente resolve o repetitivo; a equipe recebe na central só os casos que precisam de gente." },
    ],
    deliver: ["Fluxos desenhados com usuários reais", "Portal web responsivo integrado ao seu sistema", "Perfis, permissões e notificações", "Base pronta para novos serviços"],
    stack: ["Web", "API", "Perfis & permissões"],
    whatsappMessage: "Olá! Tenho interesse em um portal de autoatendimento para clientes.",
  },
  {
    id: "gestao-contratos",
    group: "sistemas",
    icon: <IconPen />,
    title: "Gestão de contratos",
    short: "Ciclo completo de contratos: vencimentos, alçadas e renovação sem planilha.",
    fit: "Quando a vida de cada contrato mora em pastas e e-mails, e o vencimento só aparece na hora do aperto.",
    how: [
      { title: "Linha do tempo do contrato", text: "Vigência, partes, valores e condições reunidas em um único registro." },
      { title: "Alertas de vencimento", text: "Avisos automáticos para equipe e gestor semanas antes de cada prazo." },
      { title: "Renovação em fluxo", text: "Checklist de renovação, aprovação por alçada e histórico de versões." },
    ],
    deliver: ["Cadastro e timeline de contratos", "Alertas e rotas de aprovação", "Relatório de vigências e valores", "Integração com documentos e assinatura"],
    stack: ["Web", "Dashboards", "Alertas"],
    whatsappMessage: "Olá! Quero organizar a gestão dos contratos da minha empresa.",
  },
  {
    id: "cobrancas",
    group: "automacao",
    icon: <IconChat />,
    title: "Rotina de cobranças",
    short: "Lembretes e follow-up automáticos por WhatsApp, com fila de negociação humana.",
    fit: "Quando a inadimplência é tratada por ligação manual e nenhuma agenda consegue acompanhar todos os casos com atenção.",
    how: [
      { title: "Calendário de contato", text: "Mensagens programadas por perfil de atraso e histórico do cliente." },
      { title: "Respostas inteligentes", text: "A IA identifica os casos que pedem negociação humana e organiza a fila." },
      { title: "Acordo registrado", text: "Fluxo de proposta, aprovação e acompanhamento do pagamento." },
    ],
    deliver: ["Automação de mensagens por perfil", "Fila de negociação com contexto", "Painel de status de cobrança", "Integração com o financeiro"],
    stack: ["WhatsApp", "IA", "Integração"],
    whatsappMessage: "Olá! Quero automatizar a rotina de cobranças da minha operação.",
  },
  {
    id: "agendamento",
    group: "apps",
    icon: <IconChart />,
    title: "Agendamento de serviços",
    short: "Agenda multi-unidade com janelas de atendimento, equipes e confirmação do cliente.",
    fit: "Quando o agendamento depende de cadernos separados por unidade e o cliente quase nunca recebe confirmação.",
    how: [
      { title: "Grade por unidade e equipe", text: "Janelas de atendimento, pausas e capacidade de cada profissional." },
      { title: "Marcação pelo cliente", text: "Booking web ou conversa no WhatsApp, seguindo a regra da própria agenda." },
      { title: "Confirmação e falta", text: "Lembretes automáticos, reagendamento sem fila e acompanhamento de no-show." },
    ],
    deliver: ["Agenda web com regras próprias", "Booking via link ou WhatsApp", "Confirmações e lembretes automáticos", "Relatório de ocupação"],
    stack: ["Web", "WhatsApp", "API"],
    whatsappMessage: "Olá! Preciso de um sistema de agendamento com várias unidades.",
  },
  {
    id: "catalogo-whatsapp",
    group: "apps",
    icon: <IconLayers />,
    title: "Catálogo digital + pedidos",
    short: "Catálogo navegável com carrinho que encerra no WhatsApp — vitrine própria, sem plataformas genéricas.",
    fit: "Quando a vitrine vive em PDFs desatualizados e o pedido chega à empresa sem nenhuma organização.",
    how: [
      { title: "Catálogo com curadoria", text: "Produtos, fotos e condições administráveis pela própria equipe." },
      { title: "Carrinho simples", text: "O cliente seleciona itens e finaliza no WhatsApp com o resumo pronto." },
      { title: "Pedido organizado", text: "Cada pedido entra no sistema com origem, cliente e lista de itens." },
    ],
    deliver: ["Catálogo web administrável", "Carrinho com envio ao WhatsApp", "Registro de pedidos no sistema", "Integração com estoque quando viável"],
    stack: ["Web", "WhatsApp", "API"],
    whatsappMessage: "Olá! Quero um catálogo digital com pedidos pelo WhatsApp.",
  },
  {
    id: "ordem-servico",
    group: "apps",
    icon: <IconCamera />,
    title: "Ordem de serviço em campo",
    short: "Técnicos com checklist, comprovante de execução e histórico por equipamento.",
    fit: "Quando o serviço externo sai sem controle: o que foi feito, quando e por quem vira mistério até a reclamação chegar.",
    how: [
      { title: "OS por chamada", text: "A central distribui chamados e acompanha o status em tempo real." },
      { title: "Checklist no aparelho", text: "O técnico registra passo a passo, fotos e horas de trabalho." },
      { title: "Comprovante e histórico", text: "O cliente recebe o registro e o equipamento ganha histórico de serviços." },
    ],
    deliver: ["App do técnico e painel da central", "Checklists configuráveis", "Comprovante com foto e horário", "Histórico por cliente e equipamento"],
    stack: ["Mobile", "Web", "Relatórios"],
    whatsappMessage: "Olá! Preciso controlar o serviço técnico em campo com ordens de serviço.",
  },
  {
    id: "triagem-ia",
    group: "automacao",
    icon: <IconCompass />,
    title: "Assistente de triagem",
    short: "IA classifica demandas por intenção e urgência antes do primeiro humano entrar na conversa.",
    fit: "Quando todo contato cai na mesma fila e o time não sabe o que é urgente até abrir cada conversa.",
    how: [
      { title: "Intenção identificada", text: "A conversa é lida por IA, que marca o tipo e a urgência da demanda." },
      { title: "Fila por prioridade", text: "Cada demanda entra ordenada — casos críticos passam na frente." },
      { title: "Passagem com contexto", text: "O atendente recebe um resumo do caso, não a conversa crua." },
    ],
    deliver: ["Motor de classificação configurável", "Filas por intenção e urgência", "Resumo pré-atendimento", "Métricas de tempo e volume"],
    stack: ["IA", "WhatsApp", "Dashboards"],
    whatsappMessage: "Olá! Quero organizar a triagem dos atendimentos do meu time com IA.",
  },
  {
    id: "precos-dinamicos",
    group: "sistemas",
    icon: <IconDatabase />,
    title: "Tabela de preços dinâmica",
    short: "Regras de preço por região, perfil e volume — com uma única fonte da verdade.",
    fit: "Quando o preço vive em planilhas por vendedor e cada canal termina com uma versão diferente da verdade.",
    how: [
      { title: "Regras centralizadas", text: "Preço-base com ajustes por segmento, região e condições declaradas." },
      { title: "Vigência e histórico", text: "Toda alteração tem data, autor e motivo — nenhuma versão se perde." },
      { title: "Propagação automática", text: "Sistemas, catálogos e propostas passam a consultar a mesma fonte." },
    ],
    deliver: ["Motor de regras de preço", "Versionamento com histórico", "Sincronização com canais internos", "Relatório de impacto por mudança"],
    stack: ["Web", "API", "Dashboards"],
    whatsappMessage: "Olá! Preciso centralizar as regras de preço da minha operação.",
  },
  {
    id: "painel-pedidos",
    group: "sistemas",
    icon: <IconMap />,
    title: "Painel de pedidos & rotas",
    short: "Pedidos, rotas e status da operação em uma visão única, com acompanhamento por equipe.",
    fit: "Quando pedido, frota e cliente vivem em três sistemas e ninguém tem a visão real do dia.",
    how: [
      { title: "Pedidos em tempo real", text: "Entradas organizadas por origem, região e prioridade." },
      { title: "Rotas no mesmo lugar", text: "Responsáveis e entregas ligados ao pedido, sem planilha paralela." },
      { title: "Status compartilhado", text: "O cliente acompanha a movimentação sem precisar perguntar." },
    ],
    deliver: ["Painel da operação diária", "Vínculo pedido × rota", "Status do cliente por WhatsApp", "Relatório do ciclo do pedido"],
    stack: ["Web", "Mobile", "Integração"],
    whatsappMessage: "Olá! Quero um painel único de pedidos e rotas para minha operação.",
  },
  {
    id: "onboarding-cliente",
    group: "automacao",
    icon: <IconRefresh />,
    title: "Onboarding de clientes",
    short: "Cadastro, documentos e primeiros passos guiados — sem papelada circulando no chat.",
    fit: "Quando cada cliente novo entra com uma versão diferente de pendência e a equipe gasta dias recolhendo fragmentos.",
    how: [
      { title: "Trilha guiada", text: "O cliente recebe o caminho: documentos, autorizações e configurações na ordem certa." },
      { title: "Validação automática", text: "O sistema confere o que falta e avisa os dois lados do processo." },
      { title: "Progresso transparente", text: "Cliente e equipe veem o mesmo andamento — sem silêncio indefinido." },
    ],
    deliver: ["Trilha de onboarding configurável", "Coleta e verificação de documentos", "Avisos automáticos por etapa", "Painel de progresso por cliente"],
    stack: ["Web", "API", "Alertas"],
    whatsappMessage: "Olá! Quero estruturar o onboarding de novos clientes da minha empresa.",
  },
  {
    id: "relatorios-negocio",
    group: "sistemas",
    icon: <IconChart />,
    title: "Relatórios do negócio",
    short: "Os números-chave da operação em painéis vivos, com corte por equipe e período.",
    fit: "Quando cada relatório é montado à mão — e nenhuma resposta sobrevive à pergunta seguinte da gestão.",
    how: [
      { title: "Fontes unificadas", text: "Sistemas e exportações alimentam os painéis por integração estável." },
      { title: "Cortes por contexto", text: "Filtros por equipe, região, período e categoria no mesmo painel." },
      { title: "Rotina de acompanhamento", text: "Resumo automático para a gestão, no canal que a equipe preferir." },
    ],
    deliver: ["Painéis por indicador", "Exportação e resumos automáticos", "Alertas quando o número sai da régua", "Integração com as bases existentes"],
    stack: ["Dashboards", "API", "Alertas"],
    whatsappMessage: "Olá! Quero painéis de indicadores para acompanhar meu negócio.",
  },
  {
    id: "erp-sync",
    group: "integracoes",
    icon: <IconLink />,
    title: "Integração com ERP/CRM",
    short: "Eventos, registros e documentos circulando entre os seus sistemas — sem digitação dupla.",
    fit: "Quando o time copia dados de um programa para o outro, e as divergências só aparecem no fim do mês.",
    how: [
      { title: "Mapa de dados", text: "Inventário do que existe, onde nasce e quem consome cada informação." },
      { title: "Eventos e rotinas", text: "Webhooks para tempo real, rotinas programadas para pacotes — conforme o caso." },
      { title: "Supervisão segura", text: "Falhas ficam em fila de investigação e reprocessam com visibilidade total." },
    ],
    deliver: ["Mapa de fluxo de dados", "APIs REST, webhooks e jobs", "Tratamento de falhas com fila", "Monitoramento e alertas"],
    stack: ["API", "Webhooks", "Jobs"],
    whatsappMessage: "Olá! Preciso integrar ERP e CRM para eliminar o retrabalho.",
  },
];

const chipStyle = (group: SolutionGroup) =>
  ({ "--chip": GROUP_META[group].color, "--chip-wash": GROUP_META[group].wash } as CSSProperties);

function SolutionCard({ item, index, onOpen }: { item: ShowcaseItem; index: number; onOpen: (trigger: HTMLButtonElement) => void }) {
  const group = GROUP_META[item.group];
  return (
    <article className="showcase-card" style={chipStyle(item.group)}>
      <footer className="showcase-card-top">
        <span className="showcase-chip">{group.icon} {group.label}</span>
        <small>{String(index + 1).padStart(2, "0")}</small>
      </footer>
      <span className="showcase-icon">{item.icon}</span>
      <h3>{item.title}</h3>
      <p>{item.short}</p>
      <button className="showcase-open" onClick={(event) => onOpen(event.currentTarget)} type="button" aria-haspopup="dialog">
        Abrir como funciona <IconArrow />
      </button>
    </article>
  );
}

/**
 * Carrossel de exemplos de soluções com modal detalhado — /solucoes.
 */
export default function SolutionsShowcase() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [portalReady, setPortalReady] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const active = SHOWCASE.find((item) => item.id === activeId) ?? null;

  useEffect(() => setPortalReady(true), []);

  useEffect(() => {
    if (!activeId) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveId(null);
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    const returnFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    document.body.style.overflow = "hidden";
    modalRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      returnFocus?.focus();
    };
  }, [activeId]);

  const scrollBy = (direction: 1 | -1) => {
    const track = document.getElementById("showcase-track");
    track?.scrollBy({ left: direction * 300, behavior: "smooth" });
  };

  return (
    <section className="section-block showcase-section">
      <div className="site-container">
        <Reveal className="motion-reveal">
          <div className="section-heading section-heading-split">
            <div>
              <span className="section-kicker">Exemplos de aplicações</span>
              <h2 className="section-title">Soluções que já nasceram de <span>rotinas como a sua.</span></h2>
            </div>
            <div className="home-heading-side">
              <p className="section-intro">Cada card é um arranjo possível entre sistema, app, integração e IA. Toque em qualquer um para ver como funciona de perto.</p>
              <div className="showcase-nav">
                <button type="button" className="showcase-nav-btn showcase-nav-left" aria-label="Exemplos anteriores" onClick={() => scrollBy(-1)}><IconArrow /></button>
                <button type="button" className="showcase-nav-btn" aria-label="Próximos exemplos" onClick={() => scrollBy(1)}><IconArrow /></button>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="motion-reveal">
          <div className="showcase-track" id="showcase-track" role="list">
            {SHOWCASE.map((item, index) => (
              <div role="listitem" className="showcase-item" key={item.id}>
                <SolutionCard item={item} index={index} onOpen={(trigger) => { trigger.focus(); setActiveId(item.id); }} />
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal className="motion-reveal">
          <p className="showcase-hint">Deslize para o lado — e clique em um card para abrir o detalhamento.</p>
        </Reveal>
      </div>

      {active && portalReady ? createPortal(
        <div className="showcase-modal-root">
          <div className="showcase-modal-overlay" onClick={() => setActiveId(null)} aria-hidden="true" />
          <div ref={modalRef} className="showcase-modal" role="dialog" tabIndex={-1} aria-modal="true" aria-labelledby={`showcase-${active.id}`}>
            <header className="showcase-modal-head">
              <span className="showcase-chip" style={chipStyle(active.group)}>
                {GROUP_META[active.group].icon} {GROUP_META[active.group].label}
              </span>
              <button className="showcase-close" type="button" onClick={() => setActiveId(null)} aria-label="Fechar detalhamento">
                <IconClose />
              </button>
            </header>

            <div className="showcase-modal-title" id={`showcase-${active.id}`}>
              <span className="showcase-icon showcase-icon-lg" style={chipStyle(active.group)}>{active.icon}</span>
              <div>
                <h3>{active.title}</h3>
                <p>{active.short}</p>
              </div>
            </div>

            <div className="showcase-modal-body">
              <section>
                <small>Onde encaixa</small>
                <p>{active.fit}</p>
              </section>
              <section>
                <small>Como funciona na operação</small>
                <ol className="showcase-modal-steps">
                  {active.how.map((step) => (
                    <li key={step.title}><b>{step.title}</b><p>{step.text}</p></li>
                  ))}
                </ol>
              </section>
              <section>
                <small>O que a entrega inclui</small>
                <ul className="showcase-modal-deliv">
                  {active.deliver.map((delivery) => <li key={delivery}><IconCheck />{delivery}</li>)}
                </ul>
                <div className="showcase-modal-stack">
                  {active.stack.map((tech) => <span key={tech}>{tech}</span>)}
                </div>
              </section>
            </div>

            <footer className="showcase-modal-foot">
              <WhatsappLink className="button button-primary" href={whatsappLink(active.whatsappMessage)}>
                <IconWhatsapp /> Conversar sobre este exemplo <IconArrow />
              </WhatsappLink>
              <p>Este é um exemplo. O escopo final é moldado ao contexto da sua rotina.</p>
            </footer>
          </div>
        </div>,
        document.body,
      ) : null}
    </section>
  );
}
