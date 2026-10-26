import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui";
import { PRODUCTS, type ProductSlug } from "@/content/products";
import {
  IconArrow,
  IconCheck,
  IconCompass,
  IconDatabase,
  IconLink,
  IconPin,
  IconShield,
  IconSpark,
} from "@/components/icons";

const PRODUCT_SUMMARIES: Record<ProductSlug, string> = {
  "ebot-panel-api": "Atendimento, CRM e automação em uma central conectada aos seus sistemas.",
  "ebot-clinical": "Agenda, confirmações e relacionamento com pacientes funcionando continuamente.",
  "ebot-explorer": "Informação turística oficial e roteiros inteligentes em qualquer ponto da cidade.",
};

function ProductVisual({ slug }: { slug: ProductSlug }) {
  if (slug === "ebot-panel-api") {
    return (
      <div className="home-panel-visual" aria-hidden="true">
        <div className="home-panel-chat">
          <span className="chat-row incoming"><i /><b>Novo atendimento</b><small>agora</small></span>
          <span className="chat-row outgoing"><i /><b>IA organizou o contexto</b><small>concluído</small></span>
          <span className="chat-row incoming"><i /><b>CRM atualizado via API</b><small>sincronizado</small></span>
        </div>
        <div className="home-panel-kpis"><span><b>24/7</b><small>IA ativa</small></span><span><b>API</b><small>webhooks</small></span></div>
      </div>
    );
  }

  if (slug === "ebot-clinical") {
    return (
      <div className="home-clinical-visual" aria-hidden="true">
        <div className="clinical-agenda-head"><span>AGENDA INTELIGENTE</span><i>HOJE</i></div>
        {[
          ["08:30", "Consulta confirmada", "Confirmado"],
          ["09:00", "Fila de espera", "Encaixe"],
          ["09:30", "Retorno", "Confirmado"],
        ].map(([time, label, status]) => (
          <div className="clinical-agenda-row" key={time}><time>{time}</time><span><b>{label}</b><small>Unidade central</small></span><em>{status}</em></div>
        ))}
      </div>
    );
  }

  return (
    <div className="home-explorer-visual" aria-hidden="true">
      <svg viewBox="0 0 420 210" preserveAspectRatio="none"><path d="M26 174 C100 190 112 116 183 128 S276 52 390 40" /></svg>
      <span className="explorer-map-pin pin-a"><IconPin /></span>
      <span className="explorer-map-pin pin-b"><IconCompass /></span>
      <span className="explorer-map-pin pin-c"><IconSpark /></span>
      <div className="explorer-route-card"><small>ROTA INTELIGENTE</small><b>Centro histórico</b><span>3 paradas · 2h30</span></div>
    </div>
  );
}

/** Vitrine resumida do ecossistema, com links para páginas completas. */
export default function HomeProducts() {
  return (
    <section className="section-block home-products">
      <div className="site-container">
        <Reveal className="motion-reveal">
          <div className="section-heading section-heading-split home-heading-dark">
            <div>
              <span className="section-kicker">Ecossistema Ê-Bot</span>
              <h2 className="section-title">Produtos próprios para rotinas que <span>não podem parar.</span></h2>
            </div>
            <div className="home-heading-side">
              <p className="section-intro">Tecnologia criada a partir de problemas reais e pronta para ser adaptada ao contexto de cada operação.</p>
              <Link className="home-dark-link" href="/produtos#comparativo">Comparar os produtos <IconArrow /></Link>
            </div>
          </div>
        </Reveal>

        <div className="home-products-grid">
          {PRODUCTS.map((product, index) => (
            <Reveal className="motion-reveal" delay={index * 90} key={product.slug}>
              <article className={`home-product-card home-product-${product.slug}`}>
                <div className="home-product-head">
                  <span className="home-product-icon"><span className="product-logo-fit"><Image src={product.icon} alt="" fill sizes="64px" style={{ objectFit: "contain", objectPosition: "center" }} /></span></span>
                  <span><small>{product.sector}</small><b>{product.name}</b></span>
                </div>
                <p>{PRODUCT_SUMMARIES[product.slug]}</p>
                <ProductVisual slug={product.slug} />
                <ul className="home-product-features">
                  {product.features.slice(0, 3).map((feature) => <li key={feature.title}><IconCheck />{feature.title}</li>)}
                </ul>
                <Link className="home-product-link" href={`/produtos/${product.slug}`}>
                  Explorar {product.shortName} <IconArrow />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="motion-reveal">
          <div className="home-ecosystem-strip">
            <span><IconSpark /><b>IA com contexto</b><small>Aplicada a tarefas concretas</small></span>
            <span><IconDatabase /><b>Dados conectados</b><small>Informação no lugar certo</small></span>
            <span><IconLink /><b>APIs e integrações</b><small>Conversa com seus sistemas</small></span>
            <span><IconShield /><b>Operação acompanhada</b><small>Evolução além da entrega</small></span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
