import { Reveal } from "@/components/ui";
import FAQ from "@/components/FAQ";
import type { ProductSlug } from "@/content/products";
import { IconCheck, IconCompass } from "@/components/icons";

type ProductScenario = {
  title: string;
  text: string;
};

const SCENARIOS: Record<ProductSlug, ProductScenario[]> = {
  "ebot-panel-api": [
    {
      title: "Atendimento espalhado entre canais",
      text: "WhatsApp, Instagram e site respondidos por pessoas diferentes, sem histórico compartilhado e sem visão do cliente.",
    },
    {
      title: "Perguntas repetidas todos os dias",
      text: "Horário, prazo, valor, status de pedido: a IA responde o padrão e deixa o humano para o que exige análise.",
    },
    {
      title: "Atendimento e venda separados",
      text: "A conversa que poderia virar venda termina sem registro. CRM e Kanban conectam atendimento, oportunidade e follow-up.",
    },
    {
      title: "Dados que não chegam ao sistema",
      text: "O que foi conversado fica só no chat. API e webhooks levam cada interação para o ERP, CRM ou sistema interno.",
    },
  ],
  "ebot-clinical": [
    {
      title: "Agenda com ruído de confirmação",
      text: "Ligações e mensagens manuais para confirmar presença — e faltas que aparecem de última hora mesmo assim.",
    },
    {
      title: "Recepção afogada em rotina",
      text: "A equipe passa o dia remarcando e buscando horário livre em vez de cuidar de quem está na unidade.",
    },
    {
      title: "Horários vagos sem dono",
      text: "Cancelamentos abrem buracos na agenda. A fila de espera é oferecida automaticamente para cada vaga.",
    },
    {
      title: "Consulta termina e o registro demora",
      text: "Resumo e plano pós-consulta chegam prontos para revisão, direto da conversa do atendimento.",
    },
  ],
  "ebot-explorer": [
    {
      title: "Informação oficial espalhada",
      text: "Atrações, horários e eventos vivem em sites, cartazes e perfis — e o visitante não acha na hora que precisa.",
    },
    {
      title: "Roteiro montado no improviso",
      text: "O visitante tem pouco tempo e nenhum apoio para combinar pontos, distância e orçamento em um trajeto viável.",
    },
    {
      title: "Presença digital sem investimento pesado",
      text: "QR Code, totem e WhatsApp oferecem o acesso à informação oficial sem a colheita e a manutenção de um app tradicional.",
    },
    {
      title: "Conteúdo sem controle de qualidade",
      text: "Só entra no guia o que foi aprovado pelo destino: informação oficial, com curadoria e atualização contínua.",
    },
  ],
};

const LIMITS: Record<ProductSlug, string[]> = {
  "ebot-panel-api": [
    "Quando a operação é exclusivamente telefônica, sem canais digitais de conversa.",
    "Quando se busca autoatendimento total, sem acompanhamento humano nas exceções.",
  ],
  "ebot-clinical": [
    "Quando o fluxo de agenda está estruturado e roda sem atrito.",
    "Como substituto de decisão clínica: o produto organiza a rotina, não a conduta médica.",
  ],
  "ebot-explorer": [
    "Quando o destino ainda não tem um catálogo mínimo de atrações para oferecer.",
    "Como portal institucional completo: o Explorer é a camada de orientação ao visitante.",
  ],
};

/**
 * Cenários de aplicação e limites honestos de cada produto — voz institucional
 * em vez de ficha comercial.
 */
export function ProductScenarios({ product }: { product: { slug: ProductSlug; shortName: string } }) {
  return (
    <section className="section-block product-scenarios">
      <div className="site-container">
        <Reveal className="motion-reveal">
          <div className="section-heading section-heading-split">
            <div>
              <span className="section-kicker">Quando faz sentido</span>
              <h2 className="section-title">Cenários em que o {product.shortName} <span>costuma fazer diferença.</span></h2>
            </div>
            <p className="section-intro">Quatro situações em que o {product.shortName} entra de imediato — e o que fica de fora do escopo, com a mesma franqueza.</p>
          </div>
        </Reveal>

        <div className="product-scenarios-grid">
          <div className="product-scenario-list">
            {SCENARIOS[product.slug].map((scenario, index) => (
              <Reveal className="motion-reveal" delay={index * 70} key={scenario.title}>
                <article className="product-scenario-card">
                  <small>0{index + 1}</small>
                  <div>
                    <h3>{scenario.title}</h3>
                    <p>{scenario.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="motion-reveal" delay={140}>
            <aside className="product-limits-card">
              <span><IconCompass /> Quando {product.shortName} <b>não</b> é a resposta</span>
              <ul>
                {LIMITS[product.slug].map((limit) => (
                  <li key={limit}><IconCheck />{limit}</li>
                ))}
              </ul>
              <p>Fora desses casos, uma solução sob medida costuma ser o caminho — e conseguimos dizer isso na primeira conversa.</p>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const PRODUCT_FAQ: Record<ProductSlug, { question: string; answer: string }[]> = {
  "ebot-panel-api": [
    {
      question: "A IA atende sozinha, sem a equipe?",
      answer: "Ela cuida do repetitivo — faqs, triagem, coleta de contexto — e transfere o resto para o time com tudo anotado. O nível de autonomia é configurado com você.",
    },
    {
      question: "Dá para integrar com o nosso ERP ou CRM?",
      answer: "Sim. A integração é parte do desenho: API REST, webhooks e sincronização de dados com os sistemas que já sustentam a operação.",
    },
    {
      question: "Como funciona a migração dos atendimentos atuais?",
      answer: "O plano de implantação cobre importação de contatos, configuração de filas e período de operação em paralelo com o processo atual, para a troca acontecer sem sustos.",
    },
  ],
  "ebot-clinical": [
    {
      question: "O produto substitui a recepção?",
      answer: "Não. Ele assume as tarefas repetitivas de agenda e confirmação para liberar a equipe para o cuidado presencial — e as exceções seguem com gente.",
    },
    {
      question: "Funciona para clínicas pequenas e para hospitais?",
      answer: "Sim. A escala muda a configuração — número de unidades, filas e perfis — mas a lógica de agenda inteligente é a mesma.",
    },
    {
      question: "Como o resumo da consulta é tratado em termos de dados?",
      answer: "A transcrição e o resumo pertencem à clínica, com acesso controlado por perfil e uso definido junto no desenho da implantação.",
    },
  ],
  "ebot-explorer": [
    {
      question: "Quem decide qual conteúdo entra no guia?",
      answer: "O próprio destino. O catálogo tem fluxo de aprovação: nada aparece ao visitante sem passar pela curadoria oficial.",
    },
    {
      question: "Precisamos instalar totens físicos?",
      answer: "Não necessariamente. QR Code e WhatsApp já entregam a experiência completa; o totem é opcional para pontos com fluxo intenso de visitantes.",
    },
    {
      question: "Como o conteúdo se mantém atualizado?",
      answer: "A equipe do destino edita eventos, horários e atrações, e o assistente passa a usar a informação atualizada imediatamente.",
    },
  ],
};

export function ProductFAQ({ product }: { product: ProductSlug }) {
  return <FAQ items={PRODUCT_FAQ[product]} />;
}
