import Image from "next/image";
import { IconCamera, IconChat, IconCheckCircle, IconPin, IconTruck } from "@/components/icons";
import EControlMap from "@/components/EControlMap";
import PhoneVideo from "@/components/PhoneVideo";

/** Case completo do E-Control — logística e entregas com mapa real. */
export default function EControlCase() {
  return (
    <article className="econtrol-case" aria-labelledby="econtrol-case-title">
      <div className="econtrol-copy">
        <Image className="econtrol-logo" src="/econtrol/logo_2.png" alt="E-Control" width={240} height={37} />
        <span className="econtrol-eyebrow"><IconTruck /> LOGÍSTICA & ENTREGAS</span>
        <h3 id="econtrol-case-title">E-Control acompanha cada entrega do início ao fim.</h3>
        <p>Sistema web, aplicativo para entregadores, localização e mensagens automáticas para manter a operação e o cliente atualizados.</p>
        <ul className="econtrol-features">
          <li><IconCamera /> Comprovante com foto</li>
          <li><IconPin /> Localização e horário</li>
          <li><IconChat /> Atualizações pelo WhatsApp</li>
        </ul>
        <span className="case-data-note">Conteúdo visual demonstrativo</span>
      </div>

      <div className="econtrol-route-view" role="img" aria-label="Demonstração do acompanhamento de rota do E-Control sobre um mapa real">
        <div className="econtrol-view-head"><span>E-CONTROL <i>/</i> ACOMPANHAMENTO</span><b><i /> ROTA ATIVA</b></div>
        <EControlMap />
        <div className="econtrol-order-card">
          <span className="econtrol-order-icon"><IconTruck /></span>
          <span><small>ENTREGA DEMONSTRATIVA</small><strong>Pedido #2481</strong><span className="econtrol-status-cycle"><em className="order-status-route"><i /> Em rota · atualizado agora</em><em className="order-status-done"><i /> Entrega concluída</em></span></span>
          <b aria-hidden="true">↗</b>
        </div>
        <div className="econtrol-event event-proof"><IconCamera /><span>Comprovante registrado</span><time>14:32</time></div>
        <div className="econtrol-event event-complete"><IconCheckCircle /><span>Entrega concluída</span><time>14:34</time></div>
        <div className="econtrol-route-progress"><i /></div>
      </div>

      <div className="case-phone-column">
        <span className="phone-column-label">E-CONTROL <i>·</i> APP MOBILE</span>
        <PhoneVideo src="/econtrol/video_econtrol.mp4" label="Demonstração em vídeo do aplicativo E-Control" className="case-phone-econtrol" />
        <span className="phone-column-note">Toque no play para ver o vídeo completo</span>
      </div>
    </article>
  );
}
