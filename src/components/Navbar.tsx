"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LINKS } from "@/lib/links";
import { IconClose, IconMenu, IconWhatsapp } from "@/components/icons";
import { WhatsappLink } from "@/components/ExitLink";

const NAV = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "A Ê-Sistemas" },
  { href: "/solucoes", label: "Soluções" },
  { href: "/produtos", label: "Produtos & Cases" },
  { href: "/contato", label: "Contato" },
  { href: LINKS.privacy, label: "Privacidade e LGPD" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // fecha o menu ao navegar entre páginas
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="site-container site-nav">
        <Link className="site-brand" href="/" aria-label="Ê-Sistemas — página inicial">
          <Image src="/logo-esistemas.webp" alt="Ê-Sistemas" width={250} height={50} priority style={{ width: "158px", height: "auto" }} />
        </Link>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {NAV.map((item) => (
            <Link
              className={`nav-link ${isActive(pathname, item.href) ? "is-active" : ""}`}
              key={item.href}
              href={item.href}
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <WhatsappLink className="button button-primary header-cta" href={LINKS.specialist}>
          <IconWhatsapp /> Falar com um especialista <span aria-hidden="true">↗</span>
        </WhatsappLink>
        <button
          className="menu-toggle"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>
      {open ? (
        <nav className="mobile-nav site-container" id="mobile-navigation" aria-label="Navegação móvel">
          {NAV.map((item) => (
            <Link
              className={`mobile-nav-link ${isActive(pathname, item.href) ? "is-active" : ""}`}
              key={item.href}
              href={item.href}
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <WhatsappLink
            className="button button-primary mobile-nav-cta"
            href={LINKS.specialist}
            onClick={() => setOpen(false)}
          >
            <IconWhatsapp /> Falar com um especialista <span aria-hidden="true">↗</span>
          </WhatsappLink>
        </nav>
      ) : null}
    </header>
  );
}
