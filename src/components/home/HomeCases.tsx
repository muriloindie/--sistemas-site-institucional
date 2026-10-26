import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui";
import {
  IconArrow,
  IconBroadcast,
  IconCamera,
  IconCheckCircle,
  IconChat,
  IconPin,
  IconPlay,
  IconTruck,
} from "@/components/icons";

/** Cases em recortes editoriais, sem vídeos pesados na home. */
export default function HomeCases() {
  return (
    <section className="section-block home-cases">
      <div className="site-container">
        <Reveal className="motion-reveal">
          <div className="section-heading section-heading-split">
            <div>
              <span className="section-kicker">Projetos em funcionamento</span>
              <h2 className="section-title">Tecnologia deixa de ser promessa quando encontra <span>a operação.</span></h2>
            </div>
            <div className="home-heading-side">
              <p className="section-intro">Duas operações diferentes, duas soluções desenhadas para pessoas, contextos e desafios específicos.</p>
              <Link className="link-arrow" href="/produtos#cases">Conhecer todos os cases <IconArrow /></Link>
            </div>
          </div>
        </Reveal>

        <Reveal className="motion-reveal">
          <article className="home-case home-case-leiloae">
            <div className="home-case-visual home-leiloae-visual">
              <Image src="/leiloae/leilao.jpg" alt="Cenário de um leilão" fill sizes="(max-width: 820px) 92vw, 48vw" />
              <span className="home-case-image-shade" />
              <div className="home-leiloae-top"><span><i /> TRANSMISSÃO AO VIVO</span></div>
              <span className="home-case-brand home-case-brand-leiloae"><Image src="/leiloae/leiloae-logo.svg" alt="Leiloae" width={66} height={33} className="home-case-brand-img" /></span>
              <span className="home-leiloae-play"><IconPlay /></span>
              <div className="home-leiloae-lot"><small>LOTE EM DESTAQUE</small><b>Lote 028</b><span><i /> Recebendo lances</span></div>
              <div className="home-leiloae-bottom"><IconBroadcast /><span>Catálogo + transmissão + interação</span></div>
            </div>
            <div className="home-case-copy">
              <span className="home-case-sector"><IconBroadcast /> TRANSMISSÕES & LEILÕES</span>
              <h3>Leiloae</h3>
              <h4>Do catálogo à experiência ao vivo.</h4>
              <p>Um ambiente digital que aproxima o público da dinâmica do leilão, reunindo transmissão, lotes e recursos interativos em uma experiência própria.</p>
              <ul><li><IconCheckCircle /> Player próprio e Picture in Picture</li><li><IconCheckCircle /> Catálogo digital e PDF interativo</li><li><IconCheckCircle /> Simulador de lances</li></ul>
              <Link className="home-card-link" href="/cases/leiloae">Ver o case completo <IconArrow /></Link>
            </div>
          </article>
        </Reveal>

        <Reveal className="motion-reveal">
          <article className="home-case home-case-econtrol">
            <div className="home-case-copy">
              <span className="home-case-sector"><IconTruck /> LOGÍSTICA & ENTREGAS</span>
              <h3>E-Control</h3>
              <h4>Cada entrega acompanhada do início ao fim.</h4>
              <p>Sistema web e aplicativo para entregadores com localização, comprovantes e mensagens automáticas para manter equipe e cliente atualizados.</p>
              <ul><li><IconCamera /> Comprovante com foto e horário</li><li><IconPin /> Localização da rota em tempo real</li><li><IconChat /> Atualizações pelo WhatsApp</li></ul>
              <Link className="home-card-link" href="/cases/e-control">Ver o case completo <IconArrow /></Link>
            </div>
            <div className="home-case-visual home-econtrol-visual" role="img" aria-label="Representação de uma rota de entrega acompanhada pelo E-Control">
              <div className="home-econtrol-grid" />
              <svg viewBox="0 0 520 420" preserveAspectRatio="none" aria-hidden="true"><path className="route-casing" d="M44 354 C102 320 88 248 164 250 S240 174 298 180 S374 94 474 68" /><path className="route-path" d="M44 354 C102 320 88 248 164 250 S240 174 298 180 S374 94 474 68" /></svg>
              <span className="home-route-pin route-origin"><IconTruck /></span>
              <span className="home-route-pin route-destination"><IconPin /></span>
              <div className="home-delivery-card"><span><IconTruck /></span><div><small>ENTREGA #2481</small><b>Em rota</b><em>Atualizado agora</em></div><i /></div>
              <div className="home-delivery-proof"><IconCamera /><span>Comprovante registrado</span><IconCheckCircle /></div>
              <div className="home-econtrol-status"><i /> OPERAÇÃO AO VIVO</div>
              <span className="home-case-brand home-case-brand-econtrol"><Image src="/econtrol/logo_2.png" alt="E-Control" width={110} height={22} className="home-case-brand-img" /></span>
            </div>
          </article>
        </Reveal>

        <Reveal className="motion-reveal">
          <div className="home-cases-foot">
            <p>Cada projeto começa com um cenário diferente. O método de entender, desenhar e evoluir é o mesmo.</p>
            <Link className="button button-secondary" href="/solucoes#processo">Ver como trabalhamos <IconArrow /></Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
