import { Reveal } from "@/components/ui";
import type { FaqItem } from "@/content/faq";
import type { ReactNode } from "react";

/** FAQ editorial e acessível, usando elementos nativos de expansão. */
export default function FAQ({
  items,
  kicker = "Dúvidas frequentes",
  title = "Antes de começar, vale saber.",
  intro = "Respostas diretas sobre projetos, produtos, integração e próximos passos.",
  id = "perguntas-frequentes",
}: {
  items: FaqItem[];
  kicker?: string;
  title?: ReactNode;
  intro?: ReactNode;
  id?: string;
}) {
  return (
    <section className="section-block faq-section" id={id}>
      <div className="site-container faq-layout">
        <Reveal className="motion-reveal">
          <div className="faq-heading">
            <span className="section-kicker">{kicker}</span>
            <h2 className="section-title">{title}</h2>
            <p className="faq-intro">{intro}</p>
          </div>
        </Reveal>

        <div className="faq-list">
          {items.map((item, index) => (
            <Reveal className="motion-reveal" delay={index * 45} key={item.question}>
              <details className="faq-item">
                <summary>
                  <span>{item.question}</span>
                  <i className="faq-plus" aria-hidden="true" />
                </summary>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
