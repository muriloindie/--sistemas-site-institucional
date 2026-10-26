import Image from "next/image";
import Link from "next/link";
import { CONTACT, LINKS } from "@/lib/links";
import SocialLinks from "@/components/SocialLinks";
import BackToTop from "@/components/BackToTop";
import { WhatsappLink } from "@/components/ExitLink";
import { IconWhatsapp } from "@/components/icons";

const COMPANY_LINKS = [
  { href: LINKS.about, label: "A Ê-Sistemas" },
  { href: LINKS.solutions, label: "Soluções" },
  { href: LINKS.process, label: "Como trabalhamos" },
  { href: LINKS.products, label: "Produtos & Cases" },
  { href: LINKS.contact, label: "Contato" },
  { href: LINKS.privacy, label: "Privacidade e LGPD" },
];

const PRODUCT_LINKS = [
  { href: LINKS.ebotPanel, label: "Ê-Bot Panel + API" },
  { href: LINKS.ebotClinical, label: "Ê-Bot Clinical" },
  { href: LINKS.ebotExplorer, label: "Ê-Bot Explorer" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-main">
          <div className="footer-brand-column">
            <Link className="footer-logo" href="/" aria-label="Ê-Sistemas — página inicial">
              <Image src="/logo-esistemas.webp" alt="Ê-Sistemas" width={250} height={50} style={{ width: "140px", height: "auto" }} />
            </Link>
            <p>Engenharia de software, produtos próprios e tecnologia aplicada a desafios reais.</p>
          </div>
          <div className="footer-link-column">
            <h2>Ê-Sistemas</h2>
            <nav aria-label="Links institucionais">
              {COMPANY_LINKS.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
            </nav>
          </div>
          <div className="footer-link-column">
            <h2>Produtos</h2>
            <nav aria-label="Produtos Ê-Bot">
              {PRODUCT_LINKS.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
            </nav>
          </div>
          <div className="footer-link-column footer-contact-column">
            <h2>Contato</h2>
            <WhatsappLink className="footer-whatsapp" href={LINKS.whatsapp}>
              <IconWhatsapp className="wa-glyph" />
              <span>{CONTACT.whatsapp}</span>
            </WhatsappLink>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <SocialLinks />
            {CONTACT.isDemo ? <small>Dados de exemplo — atualizar antes de publicar.</small> : null}
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Ê-Sistemas. Todos os direitos reservados.</span>
          <span>Feito para conectar o que move sua operação.</span>
          <BackToTop />
        </div>
      </div>
    </footer>
  );
}
