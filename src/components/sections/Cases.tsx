import { Reveal } from "@/components/ui";
import LeiloaeCase from "@/components/cases/LeiloaeCase";
import EControlCase from "@/components/cases/EControlCase";

/**
 * Cases da Ê-Sistemas: dois projetos completos. Usado na home (com
 * cabeçalho) e na página /produtos — cabeçalho e âncora #cases.
 */
export default function Cases({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section className="section-block cases-section" id="cases">
      <div className="site-container">
        {showHeading ? (
          <Reveal className="motion-reveal">
            <div className="section-heading section-heading-split section-heading-light">
              <div>
                <span className="section-kicker">Tecnologia em campo</span>
                <h2 className="section-title">Soluções pensadas para o <span>mundo real.</span></h2>
              </div>
              <p className="section-intro">Do acompanhamento de entregas às experiências ao vivo: tecnologia desenhada para operações específicas.</p>
            </div>
          </Reveal>
        ) : null}

        <LeiloaeCase />
        <EControlCase />
      </div>
    </section>
  );
}
