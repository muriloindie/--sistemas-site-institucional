import Link from "next/link";
import { LINKS } from "@/lib/links";
import { IconArrow, IconBolt, IconCheck, IconWhatsapp } from "@/components/icons";
import { WhatsappLink } from "@/components/ExitLink";
import HeroVisual from "@/components/HeroVisual";

export default function Hero() {
  return (
    <section className="hero-section" id="inicio">
      <span className="hero-bubble bubble-1" aria-hidden="true" />
      <span className="hero-bubble bubble-2" aria-hidden="true" />
      <span className="hero-bubble bubble-3" aria-hidden="true" />
      <span className="hero-bubble bubble-4" aria-hidden="true" />
      <div className="site-container hero-layout">
        <div className="hero-copy">
          <span className="eyebrow"><i /> Engenharia de software • Produtos digitais</span>
          <h1 className="hero-title">
            Tecnologia sob medida para <span className="text-highlight">operações reais.</span>
          </h1>
          <p className="hero-description">
            Desenvolvemos sistemas, integrações e automações — e criamos produtos próprios para
            conectar pessoas, dados e processos.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href={LINKS.solutions}>
              Conhecer as soluções <IconArrow />
            </Link>
            <WhatsappLink className="button button-secondary" href={LINKS.specialist}>
              <IconWhatsapp /> Conversar sobre um projeto
            </WhatsappLink>
          </div>
          <div className="hero-proof" aria-label="Atuação da Ê-Sistemas">
            <span><IconCheck /> Software sob medida</span>
            <span><IconCheck /> Produtos próprios</span>
            <span><IconCheck /> Integração ponta a ponta</span>
          </div>
        </div>
        <HeroVisual />
      </div>
      <div className="hero-bottom site-container">
        <span>Da ideia à operação</span><i /><span>Software</span><i /><span>Integração</span><i /><span>Evolução contínua</span>
        <span className="hero-bottom-note"><IconBolt /> Tecnologia aplicada ao dia a dia</span>
      </div>
    </section>
  );
}
