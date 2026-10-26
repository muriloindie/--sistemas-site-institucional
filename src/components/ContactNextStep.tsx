import { CONTACT, LINKS } from "@/lib/links";
import { Reveal } from "@/components/ui";
import { WhatsappLink } from "@/components/ExitLink";
import {
  IconArrow,
  IconChat,
  IconCheck,
  IconCode,
  IconDatabase,
  IconUsers,
  IconWhatsapp,
} from "@/components/icons";

const BRIEF_ITEMS = [
  { icon: <IconChat />, title: "O processo", text: "O que hoje toma tempo ou perde informação?" },
  { icon: <IconUsers />, title: "As pessoas", text: "Quem vai usar a solução todos os dias?" },
  { icon: <IconDatabase />, title: "Os sistemas", text: "Quais ferramentas já fazem parte da rotina?" },
  { icon: <IconCode />, title: "O objetivo", text: "O que precisa funcionar melhor no fim do projeto?" },
];

const ASSURANCES = [
  { icon: <IconCheck />, text: "Primeira conversa sem compromisso" },
  { icon: <IconCheck />, text: "Leitura inicial do cenário" },
  { icon: <IconCheck />, text: "Próximos passos objetivos" },
];

/**
 * CTA "Próximo passo" da página de contato: conversa consultiva +
 * briefing inicial organizado — versão estruturada do fechamento da home.
 */
export default function ContactNextStep() {
  return (
    <section className="contact-next">
      <span className="contact-next-glow" aria-hidden="true" />
      <div className="site-container contact-next-grid">
        <Reveal className="motion-reveal">
          <div className="contact-next-copy">
            <span className="contact-next-kicker"><i /> Próximo passo</span>
            <h2>Já pode acelerar a conversa: aprove melhor o <span>primeiro contato.</span></h2>
            <p>Você não precisa chegar com escopo, tecnologia ou solução definidos. Mas se quiser agilizar, organize estes pontos antes de chamar — a leitura do cenário fica mais rápida e a primeira conversa rende muito mais.</p>
            <div className="contact-next-actions">
              <WhatsappLink className="button button-contact" href={LINKS.specialist}>
                <IconWhatsapp /> Chamar no WhatsApp <IconArrow />
              </WhatsappLink>
              <a className="button contact-next-mail" href={`mailto:${CONTACT.email}`}>
                Enviar contexto por e-mail <IconArrow />
              </a>
            </div>
            <div className="contact-next-assurances">
              {ASSURANCES.map((item) => <span key={item.text}>{item.icon} {item.text}</span>)}
            </div>
          </div>
        </Reveal>

        <Reveal className="motion-reveal" delay={140}>
          <aside className="contact-brief-card" aria-label="Briefing inicial sugerido">
            <div className="home-brief-head"><span>BRIEFING INICIAL</span><small>4 pontos para agilizar</small></div>
            <div className="contact-brief-list">
              {BRIEF_ITEMS.map((item, index) => (
                <div className="home-brief-item" key={item.title}>
                  <span>{item.icon}</span>
                  <div><small>0{index + 1} · {item.title}</small><p>{item.text}</p></div>
                </div>
              ))}
            </div>
            <div className="home-brief-foot">
              <span>Prefere escrever?</span>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email} <IconArrow /></a>
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
