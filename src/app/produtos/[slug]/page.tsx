import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import ContextualCTA from "@/components/ContextualCTA";
import EbotPanel from "@/components/products/EbotPanel";
import EbotClinical from "@/components/products/EbotClinical";
import EbotExplorer from "@/components/products/EbotExplorer";
import { ProductFeatures, ProductFlow } from "@/components/products/ProductDetail";
import { ProductFAQ, ProductScenarios } from "@/components/products/ProductExtras";
import { getProduct, PRODUCTS } from "@/content/products";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return { title: product.name, description: product.seoDescription };
}

const PRODUCT_VIEWS: Record<string, () => React.JSX.Element> = {
  "ebot-panel-api": EbotPanel,
  "ebot-clinical": EbotClinical,
  "ebot-explorer": EbotExplorer,
};

export default async function ProdutoPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const ProductView = PRODUCT_VIEWS[product.slug];

  return (
    <>
      <PageHero
        crumbs={[
          { href: "/produtos", label: "Produtos" },
          { label: product.name },
        ]}
        kicker={product.sector}
        title={<>Ê-Bot <span className="text-highlight">{product.nameHighlight ?? product.shortName}</span></>}
        lead={product.tagline}
      />
      <section className="section-block products-section product-detail-stage">
        <div className="site-container">
          <div className="product-grid product-grid-single">
            <ProductView />
          </div>
        </div>
      </section>
      <ProductFeatures product={product} />
      <ProductFlow product={product} />
      <ProductScenarios product={product} />
      <ProductFAQ product={product.slug} />
      <ContextualCTA
        tone="dark"
        title={<>Quer ver o {product.shortName} <span className="text-highlight">funcionando?</span></>}
        text="Agende uma demonstração guiada: mostramos o produto com o contexto da sua operação."
        whatsappMessage={product.whatsappMessage}
        primaryLabel="Agendar demonstração"
        secondary={{ href: "/produtos", label: "Voltar aos produtos" }}
      />
    </>
  );
}
