import Image from "next/image";
import {
  IconArrow,
  IconBolt,
  IconCamera,
  IconCompass,
  IconEye,
  IconLayers,
  IconMap,
  IconPin,
  IconSpark,
  IconStar,
  IconTarget,
  IconWhatsapp,
} from "@/components/icons";
import { WhatsappLink } from "@/components/ExitLink";
import { ProductIcon } from "@/components/products/mockups";
import { whatsappLink } from "@/lib/links";

const EXPLORER_TILES = [
  { src: "/ebot-explorer/cards/gastronomia.webp", title: "Gastronomia", sub: "32 lugares", icon: <IconStar /> },
  { src: "/ebot-explorer/cards/cultura.webp", title: "Cultura", sub: "14 pontos", icon: <IconCamera /> },
  { src: "/ebot-explorer/cards/eventos.webp", title: "Eventos", sub: "8 hoje", icon: <IconBolt /> },
  { src: "/ebot-explorer/cards/paisagem.webp", title: "Natureza", sub: "6 trilhas", icon: <IconCompass /> },
  { src: "/ebot-explorer/cards/hospedagem.webp", title: "Hospedagem", sub: "21 opções", icon: <IconEye /> },
  { src: "/ebot-explorer/cards/instituicoes.webp", title: "Museus", sub: "9 visitas", icon: <IconMap /> },
];

const EXPLORER_POIS = [
  { src: "/ebot-explorer/cards/cafe.webp", name: "Café Central", meta: "Centro · 4.8 ★", pos: "one" },
  { src: "/ebot-explorer/cards/cultura.webp", name: "Teatro Guaíra", meta: "Centro · 4.6 ★", pos: "two" },
  { src: "/ebot-explorer/cards/gastronomia.webp", name: "Mercado 3", meta: "Batel · 4.9 ★", pos: "three" },
];

/** Card completo do Ê-Bot Explorer, com o totem de turismo. */
export default function EbotExplorer() {
  return (
    <article className="product-card product-card-explorer" id="explorer">
      <div className="product-body">
        <div className="product-card-top"><ProductIcon src="/ebot-explorer/icone.webp" /><span className="product-sector">TURISMO & CIDADES</span></div>
        <span className="product-eyebrow product-eyebrow-light"><i /> ATENDIMENTO TURÍSTICO POR IA</span>
        <h3>Ê-Bot Explorer</h3>
        <p>O visitante escaneia o QR Code ou usa o totem e conversa com a cidade: recebe roteiros por tempo e orçamento, eventos e mapas editáveis com base no catálogo aprovado do destino — em português, inglês e espanhol.</p>
        <ul className="product-feature-list">
          <li><IconMap /> QR Code, totem e WhatsApp na mesma base</li>
          <li><IconCompass /> Rotas inteligentes editáveis do passeio</li>
          <li><IconTarget /> Catálogo turístico com curadoria do destino</li>
          <li><IconBolt /> Texto, voz, 3 idiomas e acessibilidade</li>
        </ul>
        <div className="product-stats">
          <span><b>3</b><small>idiomas nativos</small></span>
          <span><b>QR</b><small>totem e WhatsApp</small></span>
          <span><b>editável</b><small>rota no celular</small></span>
        </div>
        <WhatsappLink className="product-link" href={whatsappLink("Olá! Gostaria de conhecer o Ê-Bot Explorer.")}>
          <IconWhatsapp /> Conhecer o Explorer <IconArrow />
        </WhatsappLink>
      </div>
      <div className="product-visual">
        <div className="exp-frame" aria-hidden="true">
          <div className="exp-topbar">
            <span className="exp-brand"><i>EB</i><span><b>Ê-Bot Explorer</b><small>TOURISM TOTEM</small></span></span>
            <span className="exp-chip"><IconPin /> Centro histórico</span>
            <span className="exp-chip exp-chip-lang"><i>PT</i><em>EN</em><em>ES</em></span>
            <span className="exp-pill">Início</span>
            <span className="exp-pill">Voltar</span>
            <span className="exp-pill exp-pill-dark">Gerar rota</span>
            <span className="exp-pill exp-pill-accent">Abrir Ebot</span>
          </div>

          <div className="exp-body">
            <div className="exp-map">
              <span className="exp-bot"><IconSpark /></span>
              {EXPLORER_POIS.map((poi) => (
                <span className={`exp-poi exp-poi-${poi.pos}`} key={poi.name}>
                  <i className="exp-poi-thumb"><Image src={poi.src} alt="" fill sizes="84px" /></i>
                  <b><span>{poi.name}</span><small>{poi.meta}</small></b>
                </span>
              ))}
              <span className="exp-map-btn"><IconLayers /></span>
              <div className="exp-chat">
                <i><IconSpark /></i>
                <span>Eu posso montar uma rota inteligente para as próximas horas do seu passeio.</span>
              </div>
            </div>

            <div className="exp-side">
              <div className="exp-hero">
                <span className="exp-eyebrow">VOCÊ ESTÁ EM CURITIBA</span>
                <p>Gerar rota inteligente para explorar <b>Curitiba.</b></p>
                <small>Escolha tempo, orçamento e acessibilidade e monte um roteiro com o catálogo oficial da cidade.</small>
                <div className="exp-actions"><i className="is-primary">Gerar rota</i><i>Ver mapa</i><i>Eventos hoje</i></div>
              </div>
              <div className="exp-grid">
                {EXPLORER_TILES.map((tile) => (
                  <span className="exp-tile" key={tile.title}>
                    <Image src={tile.src} alt="" fill sizes="120px" />
                    <i className="exp-tile-icon">{tile.icon}</i>
                    <b><span>{tile.title}</span><small>{tile.sub}</small></b>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <span className="preview-disclaimer">Interface ilustrativa</span>
      </div>
    </article>
  );
}
