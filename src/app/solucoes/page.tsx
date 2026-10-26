import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Services from "@/components/sections/Services";
import Approach from "@/components/sections/Approach";
import ContextualCTA from "@/components/ContextualCTA";
import SolutionsShowcase from "@/components/sections/SolutionsShowcase";
import IntegrationCloud from "@/components/sections/IntegrationCloud";
import TerminalShowcase from "@/components/sections/TerminalShowcase";
import { SolutionAssurances, SolutionDetails, SolutionsFAQ } from "@/components/sections/SolutionsContent";

export const metadata: Metadata = {
  title: "Soluções",
  description:
    "Sistemas sob medida, aplicativos, integrações e automação com IA — escopo, entregas possíveis, exemplos de soluções, ferramentas integráveis e metodologia da Ê-Sistemas.",
};

export default function SolucoesPage() {
  return (
    <>
      <PageHero
        variant="warm"
        crumbs={[{ href: "/solucoes", label: "Soluções" }]}
        kicker="O que fazemos"
        title={<>A tecnologia certa começa por <span className="text-highlight">entender o desafio.</span></>}
        lead="Nem todo processo cabe em uma ferramenta pronta. Mapeamos o contexto e combinamos engenharia, integração e experiência para criar algo que funcione no dia a dia."
      />
      <Services />
      <SolutionDetails />
      <TerminalShowcase />
      <SolutionsShowcase />
      <IntegrationCloud />
      <Approach />
      <SolutionAssurances />
      <SolutionsFAQ />
      <ContextualCTA
        title={<>Seu processo cabe em uma solução <span className="text-highlight">sob medida.</span></>}
        text="Em uma primeira conversa, entendemos o cenário e mostramos por onde começar — do desenho da arquitetura à evolução contínua."
        whatsappMessage="Olá! Gostaria de conversar sobre uma solução sob medida para a minha operação."
        secondary={{ href: "/produtos", label: "Ver os produtos Ê-Bot" }}
      />
    </>
  );
}
