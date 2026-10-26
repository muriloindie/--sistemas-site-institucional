import Link from "next/link";
import { IconArrow, IconWhatsapp } from "@/components/icons";
import { WhatsappLink } from "@/components/ExitLink";
import { LINKS } from "@/lib/links";

export default function NotFound() {
  return (
    <section className="not-found-section">
      <div className="site-container not-found-inner">
        <span className="section-kicker">Erro 404</span>
        <h1 className="not-found-title">
          Esta página não <span className="text-highlight">existe — ainda.</span>
        </h1>
        <p className="not-found-text">
          O endereço pode ter mudado com a reestruturação do site. Volte ao início ou fale
          direto com o nosso time pelo WhatsApp.
        </p>
        <div className="not-found-actions">
          <Link className="button button-primary" href={LINKS.home}>
            Voltar ao início <IconArrow />
          </Link>
          <WhatsappLink className="button button-secondary" href={LINKS.whatsapp}>
            <IconWhatsapp /> Falar com a Ê-Sistemas
          </WhatsappLink>
        </div>
      </div>
    </section>
  );
}
