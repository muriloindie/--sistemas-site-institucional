import { Reveal } from "@/components/ui";
import EbotPanel from "@/components/products/EbotPanel";
import EbotClinical from "@/components/products/EbotClinical";
import EbotExplorer from "@/components/products/EbotExplorer";

/**
 * Ecossistema Ê-Bot: três grandes cards completos. Usado na home (com
 * cabeçalho) e na página /produtos (cabeçalho vem do PageHero).
 */
export default function Products({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section className="section-block products-section" id="ebot">
      <div className="site-container">
        {showHeading ? (
          <Reveal className="motion-reveal">
            <div className="section-heading section-heading-split">
              <div>
                <span className="section-kicker">Produtos Ê-Bot</span>
                <h2 className="section-title">Automação que assume o repetitivo e <span>libera a sua equipe.</span></h2>
              </div>
              <p className="section-intro">O ecossistema Ê-Bot combina IA, integração e fluxos automáticos para atender, agendar, lembrar, cobrar e vender sem depender de tarefas manuais. Cada produto automatiza uma frente da operação — e entrega à equipe humana só o que precisa de gente.</p>
            </div>
          </Reveal>
        ) : null}

        <div className="product-grid">
          <Reveal className="motion-reveal product-reveal-platform">
            <EbotPanel />
          </Reveal>

          <Reveal className="motion-reveal product-reveal-vertical" delay={100}>
            <EbotClinical />
          </Reveal>

          <Reveal className="motion-reveal product-reveal-vertical" delay={180}>
            <EbotExplorer />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
