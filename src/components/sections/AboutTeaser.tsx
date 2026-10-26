import Link from "next/link";
import { Reveal } from "@/components/ui";
import { IconArrow, IconCode, IconLayers } from "@/components/icons";
import { LINKS } from "@/lib/links";

/**
 * Resumo institucional da home: quem é a Ê-Sistemas e como ela olha para um
 * projeto — como tecnologia e como produto. Aponta para /sobre.
 */
export default function AboutTeaser() {
  return (
    <section className="section-block about-section" id="institucional">
      <div className="site-container about-layout">
        <Reveal className="motion-reveal">
          <div className="about-copy">
            <span className="section-kicker">Quem somos</span>
            <h2 className="section-title">O lado técnico e o lado da operação, <span>na mesma mesa.</span></h2>
            <p className="about-lead">
              Construímos produtos próprios enquanto desenvolvemos soluções para diferentes
              contextos. Isso nos permite enxergar um projeto de duas formas — e combinar
              engenharia, experiência do usuário e visão de negócio no resultado.
            </p>
            <Link className="link-arrow" href={LINKS.about}>
              Conhecer a Ê-Sistemas <IconArrow />
            </Link>
          </div>
        </Reveal>

        <Reveal className="motion-reveal" delay={120}>
          <div className="about-duo">
            <div className="about-duo-card about-duo-card-dark">
              <span className="about-duo-icon"><IconCode /></span>
              <b>como tecnologia</b>
              <p>Arquitetura, código, integrações e segurança construídos com engenharia de verdade.</p>
            </div>
            <div className="about-duo-card">
              <span className="about-duo-icon"><IconLayers /></span>
              <b>como produto</b>
              <p>Experiência, contexto de operação e evolução contínua junto com o negócio.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
