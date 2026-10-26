import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui";
import { PRODUCTS } from "@/content/products";
import {
  IconArrow,
  IconChat,
  IconCompass,
  IconRefresh,
  IconUsers,
} from "@/components/icons";

type ComparisonRow = {
  label: string;
  values: Record<string, string>;
};

const COMPARISON_ROWS: ComparisonRow[] = [
  {
    label: "O que automatiza",
    values: {
      "ebot-panel-api": "Atendimento multicanal: WhatsApp, Instagram e site em uma central com IA, CRM e Kanban.",
      "ebot-clinical": "Agenda de saúde: confirmações, remarcações, encaixes e registro pós-consulta.",
      "ebot-explorer": "Informação turística: roteiros, catálogo do destino e atendimento ao visitante.",
    },
  },
  {
    label: "Ponto de entrada",
    values: {
      "ebot-panel-api": "WhatsApp, Instagram e site/app.",
      "ebot-clinical": "Conversa direta com o paciente pelo WhatsApp.",
      "ebot-explorer": "QR Code, totem, WhatsApp e aplicativo web.",
    },
  },
  {
    label: "Onde age na rotina",
    values: {
      "ebot-panel-api": "Fila de atendimento, fila de vendas e cadastro de clientes.",
      "ebot-clinical": "Recepção, agenda e ocupação dos profissionais.",
      "ebot-explorer": "Ponto turístico, experiência do visitante e divulgação do destino.",
    },
  },
  {
    label: "Integração com seus sistemas",
    values: {
      "ebot-panel-api": "ERP, CRM e sistemas internos via API e webhooks.",
      "ebot-clinical": "Agenda e prontuário da clínica, com base no fluxo atual.",
      "ebot-explorer": "Catálogo aprovado pelo destino, com atualização controlada.",
    },
  },
  {
    label: "Estado da operação depois",
    values: {
      "ebot-panel-api": "A equipe acompanha conversas com contexto pronto e dados registrando.",
      "ebot-clinical": "A agenda conserta sozinha e a recepção cuida de exceções.",
      "ebot-explorer": "O visitante se orienta sozinho com informação oficial e recorrente.",
    },
  },
];

const PICKS = [
  {
    icon: <IconChat />,
    question: "O atendimento chega por canais diferentes?",
    answer: "WhatsApp, Instagram e site sem histórico compartilhado é o sintoma típico. O Panel + API consolida tudo em uma central com IA e CRM.",
    href: "/produtos/ebot-panel-api",
    cta: "Ver o Panel + API",
  },
  {
    icon: <IconRefresh />,
    question: "Agenda e recepção consomem a equipe?",
    answer: "Confirmação manual, faltas e ligações repetidas ocupam quem deveria cuidar do paciente. O Clinical assume confirmações, encaixes e remarcações automaticamente.",
    href: "/produtos/ebot-clinical",
    cta: "Ver o Clinical",
  },
  {
    icon: <IconCompass />,
    question: "O visitante não encontra a informação do destino?",
    answer: "Roteiros improvisados, informação dispersa e plataformas de terceiros atrapalham a experiência. O Explorer entrega a informação oficial com curadoria aprovada pelo destino.",
    href: "/produtos/ebot-explorer",
    cta: "Ver o Explorer",
  },
];

/**
 * Comparativo lado a lado dos três produtos, no formato tabela editorial,
 * e guia por perguntas de diagnóstico.
 */
export function ProductComparison() {
  return (
    <section className="section-block product-comparison" id="comparativo">
      <div className="site-container">
        <Reveal className="motion-reveal">
          <div className="section-heading section-heading-split">
            <div>
              <span className="section-kicker">Comparativo</span>
              <h2 className="section-title">Três produtos, uma mesma <span>inteligência de fundo.</span></h2>
            </div>
            <p className="section-intro">Todos nasceram da mesma engenharia: IA aplicada a tarefas concretas, integração com sistemas existentes e operação acompanhada depois da entrega.</p>
          </div>
        </Reveal>

        <Reveal className="motion-reveal">
          <div className="comparison-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th scope="col"><span className="table-axis">Produto</span></th>
                  {PRODUCTS.map((product) => (
                    <th scope="col" key={product.slug}>
                      <span className="table-product">
                        <span><span className="product-logo-fit"><Image src={product.icon} alt="" fill sizes="62px" style={{ objectFit: "contain", objectPosition: "center" }} /></span></span>
                        <small>{product.sector}</small>
                        <b>{product.name}</b>
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    {PRODUCTS.map((product) => (
                      <td key={product.slug}>{row.values[product.slug]}</td>
                    ))}
                  </tr>
                ))}
                <tr className="table-cta-row">
                  <td aria-hidden="true" />
                  {PRODUCTS.map((product) => (
                    <td key={product.slug}>
                      <Link href={`/produtos/${product.slug}`}>
                        Explorar {product.shortName} <IconArrow />
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ProductGuide() {
  return (
    <section className="section-block product-guide">
      <div className="site-container">
        <Reveal className="motion-reveal">
          <div className="faq-heading">
            <span className="section-kicker">Guia rápido</span>
            <h2 className="section-title">Uma pergunta de diagnóstico <span>por produto.</span></h2>
            <p className="faq-intro">Responda mentalmente as perguntas abaixo. A que fizer sentido para a sua operação aponta o produto mais próximo.</p>
          </div>
        </Reveal>

        <div className="product-guide-grid">
          {PICKS.map((pick, index) => (
            <Reveal className="motion-reveal" delay={index * 80} key={pick.question}>
              <article className="product-guide-card">
                <span>{pick.icon}</span>
                <h3>{pick.question}</h3>
                <p>{pick.answer}</p>
                <Link className="link-arrow" href={pick.href}>{pick.cta} <IconArrow /></Link>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="motion-reveal">
          <div className="product-guide-note">
            <span><IconUsers /> Nenhuma pergunta encaixa no seu cenário?</span>
            <Link href="/solucoes">Talvez a resposta seja uma solução sob medida <IconArrow /></Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const PRODUCTS_FAQ = [
  {
    question: "Posso contratar um produto Ê-Bot com a minha identidade?",
    answer:
      "Sim. A personalização visual e de mensagens faz parte do produto: nome do atendimento, tom da conversa e identidade são configurados para ficar coerentes com a sua marca.",
  },
  {
    question: "É possível começar pequeno e ampliar depois?",
    answer:
      "Sim. A implantação pode ser por etapas: primeiro a frente mais crítica — filas de atendimento, agenda ou catálogo — e depois o restante, conforme a operação ganha familiaridade.",
  },
  {
    question: "Quanto tempo leva para começar a operar?",
    answer:
      "Depende da integração com os seus sistemas e da quantidade de conteúdo a configurar. O funcionamento essencial começa rápido; refinamentos de fluxo continuam nas semanas seguintes.",
  },
  {
    question: "Vocês adaptam o produto a uma operação fora do padrão?",
    answer:
      "Consulte. Quando o produto cobre a parte comum e a customização cobre a especificidade, a combinação costuma ser mais rápida e mais estável do que construir tudo do zero.",
  },
];

export const PRODUCT_FAQ_ITEMS = PRODUCTS_FAQ;
