import Link from "next/link";
import { Reveal } from "@/components/ui";
import {
  IconArrow,
  IconCheck,
  IconCode,
  IconCompass,
  IconLayers,
  IconRefresh,
  IconShield,
  IconUsers,
} from "@/components/icons";

const VALUES = [
  { icon: <IconCompass />, title: "Contexto antes da solução", text: "Entender a operação vale mais do que sair defendendo uma tecnologia." },
  { icon: <IconUsers />, title: "Pessoas no centro", text: "A experiência precisa fazer sentido para quem usa e para quem é atendido." },
  { icon: <IconShield />, title: "Responsabilidade técnica", text: "Decisões de arquitetura, dados e segurança fazem parte da entrega." },
  { icon: <IconRefresh />, title: "Evolução com propósito", text: "Cada incremento precisa responder a uma necessidade real, não a uma tendência." },
];

const COMMITMENTS = [
  { icon: <IconUsers />, title: "Entendimento compartilhado", text: "Cliente e time técnico olhando para o mesmo problema." },
  { icon: <IconCode />, title: "Decisões transparentes", text: "Escopo, prioridades e trade-offs discutidos com clareza." },
  { icon: <IconLayers />, title: "Construção com continuidade", text: "Uma solução preparada para aprender com o uso e evoluir." },
];

/** Propósito, valores e compromissos institucionais da página A Ê-Sistemas. */
export default function CompanyContent() {
  return (
    <>
      <section className="section-block company-purpose">
        <div className="site-container">
          <Reveal className="motion-reveal">
            <div className="section-heading section-heading-split">
              <div>
                <span className="section-kicker">Nosso jeito de fazer tecnologia</span>
                <h2 className="section-title">Tecnologia só faz sentido quando melhora <span>o trabalho de alguém.</span></h2>
              </div>
              <p className="section-intro">Nosso papel não é simplesmente entregar telas. É organizar processos, conectar informação e criar ferramentas que as pessoas conseguem incorporar à rotina.</p>
            </div>
          </Reveal>

          <div className="company-purpose-grid">
            <Reveal className="motion-reveal">
              <article className="company-purpose-lead">
                <span><IconCode /></span>
                <small>ENGENHARIA + PRODUTO</small>
                <h3>Olhamos para o mesmo projeto por duas lentes.</h3>
                <p>Como tecnologia, cuidamos de arquitetura, integrações, código e confiabilidade. Como produto, cuidamos da experiência, do contexto e da evolução com o negócio.</p>
                <p>Essa combinação permite tanto construir uma solução sob medida quanto transformar aprendizados de projetos em produtos que servem a outras operações.</p>
                <Link className="home-dark-link" href="/solucoes">Ver como aplicamos isso <IconArrow /></Link>
              </article>
            </Reveal>

            <div className="company-values-grid">
              {VALUES.map((value, index) => (
                <Reveal className="motion-reveal" delay={index * 70} key={value.title}>
                  <article className="company-value-card">
                    <span>{value.icon}</span>
                    <h3>{value.title}</h3>
                    <p>{value.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="company-commitments">
        <div className="site-container">
          <Reveal className="motion-reveal">
            <div className="company-commitments-inner">
              <div className="company-commitments-title"><small>O QUE ESPERAR DA PARCERIA</small><h2>Relação próxima, processo visível.</h2></div>
              <div className="company-commitments-list">
                {COMMITMENTS.map((item) => (
                  <article key={item.title}><span>{item.icon}</span><div><h3>{item.title}</h3><p>{item.text}</p></div><IconCheck /></article>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
