import Image from "next/image";
import { Reveal } from "@/components/ui";
import type { ProductContent } from "@/content/products";

/**
 * Grade assimétrica de recursos de um produto — mesmos tokens dos cards de
 * capacidades, com primeiro card em destaque escuro.
 */
export function ProductFeatures({ product }: { product: ProductContent }) {
  return (
    <section className="section-block detail-band">
      <div className="site-container">
        <Reveal className="motion-reveal">
          <div className="section-heading section-heading-split">
            <div>
              <span className="section-kicker">O que o produto entrega</span>
              <h2 className="section-title">Feito para o dia a dia da <span>{product.sector.toLowerCase()}.</span></h2>
            </div>
            <p className="section-intro">Cada recurso existe para tirar uma tarefa da mão da equipe ou dar visibilidade a uma decisão. Sem promessa genérica — funcionalidade conectada à operação.</p>
          </div>
        </Reveal>

        <div className="detail-grid">
          {product.features.map((feature, index) => (
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

/**
 * Fluxo operacional do produto em quatro etapas, reutilizando a linguagem
 * visual do processo institucional (conector animado e ícones).
 */
export function ProductFlow({ product }: { product: ProductContent }) {
  return (
    <section className="section-block detail-band detail-band-alt">
      <div className="site-container">
        <Reveal className="motion-reveal">
          <div className="section-heading section-heading-split">
            <div>
              <span className="section-kicker">Como funciona</span>
              <h2 className="section-title">Da primeira conversa à <span>rotina rodando.</span></h2>
            </div>
            <p className="section-intro">O fluxo abaixo resume como o produto entra na operação — do primeiro contato à evolução contínua com a equipe.</p>
          </div>
        </Reveal>

        <div className="detail-flow-grid">
          <Reveal className="motion-reveal">
            <div className="process-steps">
              {product.flow.map((step) => (
                <article className="process-step" key={step.number}>
                  <span className="process-number">{step.number}</span>
                  <span className="process-icon">{step.icon}</span>
                  <div><h3>{step.title}</h3><p>{step.text}</p></div>
                  {step.number !== "04" ? <span className="process-connector" aria-hidden="true" /> : null}
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal className="motion-reveal" delay={120}>
            <div className="detail-flow-aside">
              <span className="detail-flow-mark"><Image src={product.icon} alt="" width={44} height={38} /></span>
              <strong>{product.name}</strong>
              <p>{product.tagline} Cada etapa abaixo acontece dentro do produto — sem planilha paralela e sem retrabalho.</p>
              <span className="detail-flow-note">Demonstração guiada disponível pelo WhatsApp.</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
