import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CompanyContent from "@/components/sections/CompanyContent";
import History from "@/components/sections/History";
import Partners from "@/components/sections/Partners";
import ContextualCTA from "@/components/ContextualCTA";

export const metadata: Metadata = {
  title: "A Ê-Sistemas",
  description:
    "Conheça a Ê-Sistemas: propósito, valores, trajetória e a combinação de engenharia de software e visão de produto.",
};

export default function SobrePage() {
  return (
    <>
      <PageHero
        crumbs={[{ href: "/sobre", label: "A Ê-Sistemas" }]}
        kicker="A Ê-Sistemas"
        title={<>Crescemos resolvendo desafios <span className="text-highlight">de verdade.</span></>}
        lead="Somos uma empresa de tecnologia que une engenharia de software e visão de produto para transformar desafios reais em soluções digitais úteis."
        media={{
          src: "/nossa_historia/nossa_historia_11.jpeg",
          alt: "Imagem do espaço da Ê-Sistemas",
        }}
      />
      <CompanyContent />
      <History showHeading={false} />
      <Partners showHeading={false} />
      <ContextualCTA
        title={<>Quer construir a próxima etapa <span className="text-highlight">com a gente?</span></>}
        text="Conte o contexto da sua operação. A primeira conversa é para entender — sem compromisso e sem robôs no caminho."
        whatsappMessage="Olá! Gostaria de conhecer melhor a Ê-Sistemas e conversar sobre um projeto."
        secondary={{ href: "/solucoes", label: "Conhecer as soluções" }}
      />
    </>
  );
}
