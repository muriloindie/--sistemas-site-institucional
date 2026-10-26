import Link from "next/link";
import { Reveal } from "@/components/ui";
import {
  IconArrow,
  IconCheck,
  IconCode,
  IconDatabase,
  IconLink,
  IconMobile,
  IconRefresh,
  IconUsers,
} from "@/components/icons";
import { LINKS } from "@/lib/links";

const CAPABILITIES = [
  { icon: <IconUsers />, title: "Contexto e desenho", text: "Processo, pessoas e objetivos antes da interface." },
  { icon: <IconCode />, title: "Engenharia web e mobile", text: "Sistemas construídos para a rotina de quem usa." },
  { icon: <IconLink />, title: "Integração e automação", text: "Canais, dados e ferramentas no mesmo fluxo." },
  { icon: <IconRefresh />, title: "Evolução contínua", text: "A solução acompanha a operação depois do lançamento." },
];

/** Abertura institucional da nova home: manifesto + mapa de operação conectada. */
export default function HomeIntro() {
  return (
    <section className="section-block home-intro">
      <div className="site-container">
        <Reveal className="motion-reveal">
          <div className="section-heading section-heading-split">
            <div>
              <span className="section-kicker">Tecnologia com contexto</span>
              <h2 className="section-title">Não começamos pela ferramenta. <span>Começamos pelo que precisa funcionar.</span></h2>
            </div>
            <p className="section-intro">A Ê-Sistemas combina visão de produto e engenharia para transformar processos reais em experiências digitais claras, conectadas e úteis.</p>
          </div>
        </Reveal>

        <div className="home-intro-grid">
          <Reveal className="motion-reveal">
            <article className="home-manifesto">
              <span className="home-card-label">NOSSO PAPEL</span>
              <h3>Entre um processo difícil de gerenciar e uma operação que flui, existe um bom desenho.</h3>
              <p>Entendemos onde a rotina perde tempo, onde a informação se fragmenta e o que a equipe realmente precisa fazer. Só então escolhemos a combinação certa de software, produto e integração.</p>
              <ul className="home-check-list">
                <li><IconCheck /> Diagnóstico antes de qualquer decisão técnica</li>
                <li><IconCheck /> Experiência pensada para quem opera todos os dias</li>
                <li><IconCheck /> Uma parceria do desenho inicial à evolução</li>
              </ul>
              <Link className="link-arrow" href={LINKS.about}>Conhecer a Ê-Sistemas <IconArrow /></Link>
            </article>
          </Reveal>

          <Reveal className="motion-reveal" delay={120}>
            <div className="home-system-card" role="img" aria-label="Representação de pessoas, processos, canais e dados conectados em uma solução">
              <div className="home-system-head">
                <span><i /> OPERAÇÃO CONECTADA</span>
                <small>DESENHO Ê-SISTEMAS</small>
              </div>
              <div className="home-system-map">
                <svg viewBox="0 0 560 300" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M280 150 L92 62 M280 150 L468 62 M280 150 L92 238 M280 150 L468 238" />
                  <circle cx="280" cy="150" r="5" />
                  <circle cx="92" cy="62" r="3" />
                  <circle cx="468" cy="62" r="3" />
                  <circle cx="92" cy="238" r="3" />
                  <circle cx="468" cy="238" r="3" />
                </svg>
                <span className="home-system-node node-people"><i><IconUsers /></i><span className="home-system-node-copy"><b>Pessoas</b><small>experiência</small></span></span>
                <span className="home-system-node node-process"><i><IconRefresh /></i><span className="home-system-node-copy"><b>Processos</b><small>fluidez</small></span></span>
                <span className="home-system-node node-channels"><i><IconMobile /></i><span className="home-system-node-copy"><b>Canais</b><small>presença</small></span></span>
                <span className="home-system-node node-data"><i><IconDatabase /></i><span className="home-system-node-copy"><b>Dados</b><small>visibilidade</small></span></span>
                <span className="home-system-core"><i><IconLink /></i><span className="home-system-core-copy"><b>Solução certa</b><small>para a sua operação</small></span></span>
              </div>
              <div className="home-system-foot"><span>Web</span><span>Mobile</span><span>APIs</span><span>IA aplicada</span></div>
            </div>
          </Reveal>
        </div>

        <div className="home-capability-strip">
          {CAPABILITIES.map((item, index) => (
            <Reveal className="motion-reveal" delay={index * 70} key={item.title}>
              <article className="home-capability-item">
                <span>{item.icon}</span>
                <div><strong>{item.title}</strong><p>{item.text}</p></div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
