import Image from "next/image";
import {
  IconArrow,
  IconBroadcast,
  IconPlay,
  IconWhatsapp,
} from "@/components/icons";
import { WhatsappLink } from "@/components/ExitLink";
import PhoneVideo from "@/components/PhoneVideo";
import { whatsappLink } from "@/lib/links";

/** Case completo do Leiloae — transmissão e leilões digitais. */
export default function LeiloaeCase() {
  return (
    <article className="leiloae-case" aria-labelledby="leiloae-case-title">
      <div className="leiloae-heading">
        <span className="leiloae-eyebrow"><IconBroadcast /> TRANSMISSÕES & LEILÕES</span>
        <span className="leiloae-heading-note">Uma experiência digital pronta para acontecer ao vivo.</span>
      </div>

      <div className="leiloae-grid">
        <div className="leiloae-phone-column">
          <span className="phone-column-label leiloae-phone-label">LEILOAE <i>·</i> APP MOBILE</span>
          <PhoneVideo src="/leiloae/video_leiloae.mp4" label="Demonstração em vídeo da experiência mobile Leiloae" className="case-phone-leiloae" />
          <span className="phone-column-note">Vídeo vertical 9:16 · toque no play para ampliar</span>
        </div>

        <div className="leiloae-broadcast-row">
          <div className="leiloae-broadcast-window" role="img" aria-label="Representação animada e demonstrativa de uma transmissão de leilão">
            <div className="leiloae-window-bar"><span className="leiloae-window-brand">LEILOAE <i>/</i> PLAYER</span><span><i /> TRANSMISSÃO DEMONSTRATIVA</span><b>···</b></div>
            <div className="leiloae-broadcast-body">
              <div className="leiloae-live-stage">
                <div className="auction-scenery">
                  <Image src="/leiloae/leilao.jpg" alt="" fill sizes="(max-width: 820px) 92vw, 34vw" className="auction-scenery-photo" />
                  <span className="auction-scenery-shade" aria-hidden="true" />
                  <i className="auction-scanline" />
                </div>
                <span className="auction-live-badge"><i /> AO VIVO</span>
                <span className="auction-lot-badge">LOTE 028 <i /> EM EXIBIÇÃO</span>
                <span className="auction-play-mark"><IconPlay /></span>
                <div className="auction-bottom-overlay"><span><small>LEILÃO DEMONSTRATIVO</small><strong>Conexão em tempo real</strong></span><span className="auction-audio-bars" aria-hidden="true">{Array.from({ length: 18 }, (_, index) => <i key={index} />)}</span></div>
              </div>
              <aside className="leiloae-auction-aside">
                <div className="auction-aside-top"><span>ACOMPANHAMENTO</span><i><b /></i></div>
                <small>LOTE EM DESTAQUE</small>
                <strong className="auction-lot-title">Lote 028 <span>Demo</span></strong>
                <div className="auction-meta-row"><span>Categoria</span><b>Leilão ao vivo</b></div>
                <div className="auction-meta-row"><span>Status</span><b className="auction-status"><i /> Recebendo lances</b></div>
                <div className="auction-activity"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
                <span className="auction-aside-note">Interface ilustrativa</span>
              </aside>
            </div>
            <div className="leiloae-player-footer"><span><i /> 00:42</span><div className="player-progress"><i /></div><span>PiP</span><span>HD</span></div>
          </div>
        </div>

        <div className="leiloae-copy-column">
          <div className="leiloae-logo-wrap"><Image src="/leiloae/leiloae-logo.svg" alt="Leiloae" width={191} height={97} /></div>
          <div className="leiloae-copy">
            <span className="leiloae-copy-kicker">SOFTWARE PARA TRANSMISSÃO E LEILÕES</span>
            <h3 id="leiloae-case-title">Do catálogo à experiência ao vivo.</h3>
            <p>Um ambiente digital que reúne transmissão, lotes e recursos interativos para aproximar o público da operação do leilão.</p>
            <div className="leiloae-features"><span>Player próprio</span><span>Picture in Picture</span><span>Catálogo digital</span><span>PDF interativo</span><span>Simulador de lances</span></div>
          </div>
          <WhatsappLink className="leiloae-cta" href={whatsappLink("Olá! Gostaria de conversar sobre transmissão e leilões digitais.")}>
            <IconWhatsapp /> Conversar sobre um projeto <IconArrow />
          </WhatsappLink>
        </div>
      </div>
    </article>
  );
}
