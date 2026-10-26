import Link from "next/link";
import { Reveal } from "@/components/ui";
import { IconArrow, IconLayers, IconMap, IconRefresh, IconShield } from "@/components/icons";

const PLAYBOOK = [
  {
    icon: <IconMap />,
    step: "01",
    title: "A operação antes da interface",
    text: "Todo case aqui começa por uma rotina concreta: o pregão do leilão, o ciclo de uma entrega. A tecnologia é desenhada em volta dela.",
  },
  {
    icon: <IconLayers />,
    step: "02",
    title: "Solução dedicada ao contexto",
    text: "Cada projeto ganhou estrutura própria — sistema web, aplicativo, player — em vez de forçar a operação em uma ferramenta genérica.",
  },
  {
    icon: <IconRefresh />,
    step: "03",
    title: "Evolução acompanhada",
    text: "Depois do lançamento, a parceria continua: uso, ajustes e novos fluxos entram em ciclos planejados com quem opera.",
  },
];

/**
 * O método por trás de qualquer case — contexto, dedicação e continuidade.
 */
export function CasePlaybook() {
  return (
    <section className="section-block case-playbook">
      <div className="site-container">
        <Reveal className="motion-reveal">
          <div className="section-heading section-heading-split">
            <div>
              <span className="section-kicker">O que os cases têm em comum</span>
              <h2 className="section-title">Projetos diferentes, <span>postura idêntica.</span></h2>
            </div>
            <p className="section-intro">Duas frentes diferentes — transmissões e logística — percorreram o mesmo caminho: entender a rotina, desenhar para ela e evoluir junto.</p>
          </div>
        </Reveal>

        <div className="case-playbook-grid">
          {PLAYBOOK.map((item, index) => (
            <Reveal className="motion-reveal" delay={index * 80} key={item.step}>
              <article className="case-playbook-card">
                <div className="case-playbook-head">
                  <span>{item.icon}</span>
                  <small>{item.step}</small>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="motion-reveal">
          <div className="case-playbook-strip">
            <span><IconShield /> Sem métricas de fantasia: o que funciona é documentado como funciona.</span>
            <Link className="link-arrow" href="/sobre">Ver nossa trajetória <IconArrow /></Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const CASES_FAQ = [
  {
    question: "Esses projetos servem para operações de outros setores?",
    answer:
      "A arquitetura e a experiência dialogam com o problema original, mas a lógica se transfere: transmissão com interação ao vivo e ciclo de entrega com comprovante são padrões que reaproveitamos — adaptados — em contextos parecidos.",
  },
  {
    question: "Existe demonstração do Leiloae ou do E-Control?",
    answer:
      "Sim. Em uma conversa, mostramos a estrutura de cada solução e os fluxos principais, sempre relacionando com o contexto da sua operação.",
  },
  {
    question: "Vocês assumem projetos parecidos do zero?",
    answer:
      "Sim. Nesses cases, parte do aprendizado já está madura; no seu projeto, o desenho é feito para o seu cenário — com o tempo de engenharia que ele exigir.",
  },
  {
    question: "O projeto pode combinar produto Ê-Bot com um case assim?",
    answer:
      "Pode. Uma operação de entregas, por exemplo, pode usar o produto certo para os clientes e as conversas se concentrarem no atendimento via Ê-Bot Panel + API.",
  },
  {
    question: "Como começo um projeto nesse espírito?",
    answer:
      "Pelo WhatsApp ou por e-mail, descreva o cenário — o processo, quem usa e o que precisa mudar. A partir daí, organizamos as próximas etapas com você.",
  },
];

export const CASES_FAQ_ITEMS = CASES_FAQ;
