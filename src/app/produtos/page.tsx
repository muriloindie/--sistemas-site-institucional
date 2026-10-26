import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Products from "@/components/sections/Products";
import Cases from "@/components/sections/Cases";
import ContextualCTA from "@/components/ContextualCTA";
import { ProductComparison, ProductGuide } from "@/components/sections/ProductsContent";
import { CasePlaybook } from "@/components/sections/CasesContent";
import FAQ from "@/components/FAQ";
import { PRODUCT_FAQ_ITEMS } from "@/components/sections/ProductsContent";
import { CASES_FAQ_ITEMS } from "@/components/sections/CasesContent";

export const metadata: Metadata = {
  title: "Produtos & Cases",
  description:
    "Ecossistema Ê-Bot (Panel + API, Clinical e Explorer) e projetos reais — Leiloae e E-Control — em uma mesma página: comparativo, guia de escolha e resultados em campo.",
};

const COMBINED_FAQ = [...PRODUCT_FAQ_ITEMS, ...CASES_FAQ_ITEMS];

export default function ProdutosCasesPage() {
  return (
    <>
      <PageHero
        variant="warm"
        crumbs={[{ href: "/produtos", label: "Produtos & Cases" }]}
        kicker="Produtos & Cases"
        title={<>Prontos para usar, construídos para <span className="text-highlight">o seu contexto.</span></>}
        lead="Conheça o ecossistema Ê-Bot — IA, integração e automação para atendimento, saúde e turismo — e veja a mesma engenharia funcionando em projetos reais, do pregão ao vivo ao ciclo de entregas."
      />

      <Products showHeading={false} />
      <ProductComparison />
      <ProductGuide />

      <Cases />
      <CasePlaybook />

      <FAQ
        items={COMBINED_FAQ}
        title={<>Dúvidas sobre produtos, cases e <span className="text-highlight">próximos passos.</span></>}
        intro="Respostas diretas sobre implantação, personalização, integração e o que aprender com cada projeto antes de começar o seu."
      />

      <ContextualCTA
        tone="dark"
        title={<>Não sabe se precisa de um produto ou de <span className="text-highlight">algo próprio?</span></>}
        text="Conte a rotina em uma conversa. Indicamos o produto certo, um híbrido com customização — ou desenhamos o que falta para fechar o fluxo."
        whatsappMessage="Olá! Quero ajuda para decidir entre um produto Ê-Bot e uma solução sob medida."
        primaryLabel="Falar com um especialista"
        secondary={{ href: "/solucoes", label: "Ver soluções sob medida" }}
      />
    </>
  );
}
