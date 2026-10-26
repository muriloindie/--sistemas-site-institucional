import Link from "next/link";
import type { ReactNode } from "react";
import { LINKS, whatsappLink } from "@/lib/links";
import { WhatsappLink } from "@/components/ExitLink";
import { Reveal } from "@/components/ui";
import { IconArrow, IconWhatsapp } from "@/components/icons";

/**
 * Faixa de CTA contextual para o fechamento das páginas internas.
 * Mais compacta e institucional que o FinalCTA da home.
 */
export default function ContextualCTA({
  kicker = "Vamos conversar",
  title,
  text,
  whatsappMessage,
  primaryLabel = "Falar com um especialista",
  secondary,
  tone = "light",
}: {
  kicker?: string;
  title: ReactNode;
  text?: string;
  whatsappMessage?: string;
  primaryLabel?: string;
  secondary?: { href: string; label: string };
  tone?: "light" | "dark";
}) {
  const href = whatsappMessage ? whatsappLink(whatsappMessage) : LINKS.whatsapp;

  return (
    <section className={`cta-band cta-band-${tone}`}>
      {tone === "dark" ? <span className="cta-band-glow" aria-hidden="true" /> : null}
      <div className="site-container cta-band-inner">
        <Reveal className="motion-reveal">
          <div className="cta-band-copy">
            <span className="cta-band-kicker">{kicker}</span>
            <h2>{title}</h2>
            {text ? <p>{text}</p> : null}
          </div>
        </Reveal>
        <Reveal className="motion-reveal" delay={120}>
          <div className="cta-band-actions">
            <WhatsappLink className="button button-primary" href={href}>
              <IconWhatsapp /> {primaryLabel} <IconArrow />
            </WhatsappLink>
            {secondary ? (
              <Link className="button button-secondary" href={secondary.href}>
                {secondary.label}
              </Link>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
