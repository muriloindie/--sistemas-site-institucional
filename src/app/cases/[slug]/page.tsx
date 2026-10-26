import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import ContextualCTA from "@/components/ContextualCTA";
import LeiloaeCase from "@/components/cases/LeiloaeCase";
import EControlCase from "@/components/cases/EControlCase";
import { CaseDetail } from "@/components/cases/CaseDetail";
import { CaseTimeline, CaseTransfer } from "@/components/cases/CaseExtras";
import { getCase, CASES } from "@/content/cases";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return CASES.map((item) => ({ slug: item.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getCase(slug);
  if (!item) return {};
  return { title: item.name, description: item.seoDescription };
}

const CASE_VIEWS: Record<string, () => React.JSX.Element> = {
  leiloae: LeiloaeCase,
  "e-control": EControlCase,
};

export default async function CasePage({ params }: Props) {
  const { slug } = await params;
  const item = getCase(slug);
  if (!item) notFound();

  const CaseView = CASE_VIEWS[item.slug];

  return (
    <>
      <PageHero
        crumbs={[
          { href: "/produtos", label: "Produtos & Cases" },
          { label: item.name },
        ]}
        kicker={item.sector}
        title={<>{item.name} — <span className="text-highlight">{item.headline}</span></>}
        lead={item.description}
      />
      <section className="section-block cases-section case-detail-stage">
        <div className="site-container">
          <CaseView />
        </div>
      </section>
      <CaseDetail item={item} />
      <CaseTimeline item={item} />
      <CaseTransfer caseName={item.name} />
      <ContextualCTA
        tone="dark"
        title={<>Quer uma experiência assim na <span className="text-highlight">sua operação?</span></>}
        text="Conte o contexto do seu projeto. Mostramos como a Ê-Sistemas estruturaria a solução — e por onde começar."
        whatsappMessage={item.whatsappMessage}
        primaryLabel="Conversar sobre um projeto"
        secondary={{ href: "/produtos#cases", label: "Ver outros cases" }}
      />
    </>
  );
}
