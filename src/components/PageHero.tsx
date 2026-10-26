import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { LINKS } from "@/lib/links";
import { Reveal } from "@/components/ui";

export type Crumb = { href?: string; label: string };

export type PageHeroMedia = {
  src: string;
  alt: string;
  caption?: string;
};

/**
 * Cabeçalho das páginas internas: trilha de navegação, kicker, título (h1) e
 * introdução. Mantém a linguagem visual do hero da home em escala menor.
 * A variante `media` exibe uma foto à direita sobre fundo animado de manchas
 * azuis (paleta da imagem).
 */
export default function PageHero({
  crumbs,
  kicker,
  title,
  lead,
  media,
  variant = "default",
}: {
  crumbs?: Crumb[];
  kicker?: string;
  title: ReactNode;
  lead?: ReactNode;
  media?: PageHeroMedia;
  variant?: "default" | "warm";
}) {
  const rootClass = ["page-hero", media ? "page-hero-media" : "", variant === "warm" ? "page-hero-warm" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={rootClass}>
      <span className="page-hero-bubble page-hero-bubble-a" aria-hidden="true" />
      <span className="page-hero-bubble page-hero-bubble-b" aria-hidden="true" />
      {media ? (
        <>
          <span className="ph-blob ph-blob-1" aria-hidden="true" />
          <span className="ph-blob ph-blob-2" aria-hidden="true" />
          <span className="ph-blob ph-blob-3" aria-hidden="true" />
        </>
      ) : null}
      <div className="site-container">
        <Reveal className="motion-reveal">
          <div className={media ? "page-hero-inner page-hero-media-inner" : "page-hero-inner"}>
            <div className="page-hero-copy">
              {crumbs && crumbs.length > 0 ? (
                <nav className="breadcrumb" aria-label="Trilha de navegação">
                  <ol>
                    <li>
                      <Link href={LINKS.home}>Início</Link>
                    </li>
                    {crumbs.map((crumb, index) => {
                      const isLast = index === crumbs.length - 1;
                      return (
                        <li key={`${crumb.label}-${index}`}>
                          <i aria-hidden="true">/</i>
                          {isLast || !crumb.href ? (
                            <span aria-current={isLast ? "page" : undefined}>{crumb.label}</span>
                          ) : (
                            <Link href={crumb.href}>{crumb.label}</Link>
                          )}
                        </li>
                      );
                    })}
                  </ol>
                </nav>
              ) : null}

              {kicker ? <span className="section-kicker">{kicker}</span> : null}
              <h1 className="page-hero-title">{title}</h1>
              {lead ? <p className="page-hero-lead">{lead}</p> : null}
            </div>

            {media ? (
              <figure className="page-hero-photo">
                <Image src={media.src} alt={media.alt} width={800} height={600} sizes="(max-width: 880px) 100vw, 46vw" className="page-hero-photo-img" />
                {media.caption ? <figcaption>{media.caption}</figcaption> : null}
              </figure>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
