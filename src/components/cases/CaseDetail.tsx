import { Reveal } from "@/components/ui";
import type { CaseContent } from "@/content/cases";

/**
 * Grade de destaques do case — o que a entrega inclui, em linguagem factual.
 */
export function CaseDetail({ item }: { item: CaseContent }) {
  return (
    <section className="section-block detail-band">
      <div className="site-container">
        <Reveal className="motion-reveal">
          <div className="section-heading section-heading-split">
            <div>
              <span className="section-kicker">O contexto</span>
              <h2 className="section-title">{item.contextTitle}</h2>
            </div>
            <p className="section-intro">{item.contextLead}</p>
          </div>
        </Reveal>

        <Reveal className="motion-reveal">
          <div className="detail-context-card">
            <p>{item.contextText}</p>
          </div>
        </Reveal>

        <Reveal className="motion-reveal">
          <div className="detail-heading-follow">
            <span className="section-kicker">O que a entrega inclui</span>
            <h2 className="section-title-sm">Tecnologia aplicada à <span>operação real.</span></h2>
          </div>
        </Reveal>

        <div className="detail-grid">
          {item.features.map((feature, index) => (
            <Reveal className="motion-reveal detail-reveal" delay={index * 70} key={feature.title}>
              <article className={`detail-card ${index === 0 ? "detail-card-lead" : ""}`}>
                <span className="detail-card-icon">{feature.icon}</span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
