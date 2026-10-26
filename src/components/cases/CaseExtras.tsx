import { Reveal } from "@/components/ui";
import type { CaseSlug } from "@/content/cases";
import { IconArrow, IconCheck, IconLayers, IconLink, IconRefresh } from "@/components/icons";
import Link from "next/link";

type CaseBeat = {
  moment: string;
  title: string;
  text: string;
};

const TIMELINES: Record<CaseSlug, CaseBeat[]> = {
  leiloae: [
    {
      moment: "ANTES DA SESSÃO",
      title: "Catálogo publicado",
      text: "Lotes com fotos, descrições, documentos e ordem de pregão ficam disponíveis para estudo com antecedência.",
    },
    {
      moment: "ABERTURA",
      title: "Transmissão ao vivo",
      text: "O player próprio abre a sessão dentro de um ambiente controlado, com a identidade do leilão e sem depender de plataformas externas.",
    },
    {
      moment: "DURANTE O PREGÃO",
      title: "Lote em foco",
      text: "Picture in Picture mantém a transmissão visível enquanto o público navega por lotes, editais e simulador.",
    },
    {
      moment: "APÓS O PREGÃO",
      title: "Registro do resultado",
      text: "O histórico da sessão fica no ambiente, o que consolida a experiência para participante e organização.",
    },
  ],
  "e-control": [
    {
      moment: "INÍCIO DO CICLO",
      title: "Pedido entra na central",
      text: "O painel web organiza pedidos, rotas e status — a operação visualiza o dia antes de começar.",
    },
    {
      moment: "SAÍDA PARA ROTA",
      title: "Entregador em campo",
      text: "Pelo aplicativo, o entregador faz o contato com o ciclo de entregas e recebe as informações da rota.",
    },
    {
      moment: "NO TRAJETO",
      title: "Operação acompanhada",
      text: "Central e cliente acompanham andamento em tempo real, e o cliente é avisado automaticamente a cada status.",
    },
    {
      moment: "ENTREGA FINALIZADA",
      title: "Comprovante registrado",
      text: "Foto e horário documentam a entrega, fechando o ciclo com prova para ambas as partes.",
    },
  ],
};

const TRANSFERS = [
  {
    icon: <IconRefresh />,
    title: "Adaptar o desenho ao seu processo",
    text: "A referência técnica existe; os fluxos, regras e a identidade são desenhados para a sua operação.",
  },
  {
    icon: <IconLink />,
    title: "Conectar aos seus sistemas",
    text: "Integrações com ferramentas atuais fazem parte do plano — dos canais de comunicação aos seus registros internos.",
  },
  {
    icon: <IconLayers />,
    title: "Acompanhar depois do lançamento",
    text: "A mesma disciplina dos cases: acompanhar o uso, mensurar resultados e planejar os próximos incrementos.",
  },
];

/**
 * Linha do tempo "um dia com a solução" e seção de transferibilidade
 * para páginas de case.
 */
export function CaseTimeline({ item }: { item: { slug: CaseSlug; name: string } }) {
  return (
    <section className="section-block case-timeline">
      <div className="site-container">
        <Reveal className="motion-reveal">
          <div className="section-heading section-heading-split">
            <div>
              <span className="section-kicker">Um dia com a solução</span>
              <h2 className="section-title">{item.name} em <span>movimento.</span></h2>
            </div>
            <p className="section-intro">Como a solução se comporta nos momentos-chave da operação — sem etapa solta e sem informação fora do lugar.</p>
          </div>
        </Reveal>

        <div className="case-timeline-track">
          {TIMELINES[item.slug].map((beat, index) => (
            <Reveal className="motion-reveal case-beat-reveal" delay={index * 80} key={beat.moment}>
              <article className="case-beat">
                <small>{beat.moment}</small>
                <h3>{beat.title}</h3>
                <p>{beat.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CaseTransfer({ caseName }: { caseName: string }) {
  return (
    <section className="section-block case-transfer">
      <div className="site-container">
        <Reveal className="motion-reveal">
          <div className="case-transfer-inner">
            <div className="case-transfer-copy">
              <span className="section-kicker">Levar para a sua operação</span>
              <h2 className="section-title">O case {caseName} não é um modelo pronto. <span>É uma base comprovada.</span></h2>
              <p>O que existe aqui é engenharia testada em campo. No seu projeto, o desenho é novo — mas parte de aprendizados que já passaram pela realidade da operação.</p>
            </div>
            <div className="case-transfer-list">
              {TRANSFERS.map((transfer, index) => (
                <Reveal className="motion-reveal" delay={index * 70} key={transfer.title}>
                  <article>
                    <span>{transfer.icon}</span>
                    <div>
                      <h3>{transfer.title}</h3>
                      <p>{transfer.text}</p>
                    </div>
                    <IconCheck />
                  </article>
                </Reveal>
              ))}
              <Reveal className="motion-reveal">
                <Link className="home-dark-link" href="/solucoes#processo">Ver o processo de desenho <IconArrow /></Link>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
