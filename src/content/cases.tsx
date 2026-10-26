import type { ReactNode } from "react";
import {
  IconBroadcast,
  IconCamera,
  IconChat,
  IconCompass,
  IconLink,
  IconMap,
  IconPin,
  IconPlay,
  IconTruck,
} from "@/components/icons";

export type CaseSlug = "leiloae" | "e-control";

export type CaseFeature = {
  icon: ReactNode;
  title: string;
  text: string;
};

export type CaseContent = {
  slug: CaseSlug;
  name: string;
  sector: string;
  eyebrow: string;
  headline: string;
  description: string;
  contextTitle: string;
  contextText: string;
  contextLead: string;
  features: CaseFeature[];
  whatsappMessage: string;
  seoDescription: string;
};

export const CASES: CaseContent[] = [
  {
    slug: "leiloae",
    name: "Leiloae",
    sector: "Transmissões & leilões",
    eyebrow: "TRANSMISSÕES & LEILÕES",
    headline: "Do catálogo à experiência ao vivo.",
    description:
      "Um ambiente digital que reúne transmissão, lotes e recursos interativos para aproximar o público da operação do leilão.",
    contextTitle: "Uma experiência pronta para acontecer ao vivo.",
    contextText:
      "Leilão é um evento que acontece em tempo real: o público acompanha de longe, decide rápido e precisa confiar no que está vendo. O ambiente digital do Leiloae foi desenhado para dar essa segurança — transmissão estável, lotes organizados e ferramentas que aproximam o espectador da dinâmica do pregão.",
    contextLead:
      "Software para transmissão e leilões digitais, do catálogo à sessão ao vivo.",
    features: [
      {
        icon: <IconPlay />,
        title: "Player próprio",
        text: "Transmissão em um ambiente controlado, com a identidade do leilão e sem depender de plataformas externas.",
      },
      {
        icon: <IconBroadcast />,
        title: "Picture in Picture",
        text: "O público acompanha o pregão enquanto navega pelos lotes — a transmissão nunca sai de vista.",
      },
      {
        icon: <IconMap />,
        title: "Catálogo digital",
        text: "Lotes organizados com fotos, descrições e ordem de pregão em um catálogo fácil de percorrer.",
      },
      {
        icon: <IconLink />,
        title: "PDF interativo",
        text: "Documentos e editais integrados à experiência, com acesso direto a partir do lote.",
      },
      {
        icon: <IconCompass />,
        title: "Simulador de lances",
        text: "O visitante entende a dinâmica de um lance antes da sessão real, sem compromisso.",
      },
    ],
    whatsappMessage: "Olá! Gostaria de conversar sobre transmissão e leilões digitais.",
    seoDescription:
      "Plataforma digital para leilões: transmissão ao vivo, catálogo de lotes, PDF interativo e simulador de lances em uma experiência própria.",
  },
  {
    slug: "e-control",
    name: "E-Control",
    sector: "Logística & entregas",
    eyebrow: "LOGÍSTICA & ENTREGAS",
    headline: "Cada entrega acompanhada do início ao fim.",
    description:
      "Sistema web, aplicativo para entregadores, localização e mensagens automáticas para manter a operação e o cliente atualizados.",
    contextTitle: "Visibilidade total da operação de entregas.",
    contextText:
      "Em uma operação de entregas, o que mais custa é o desconhecido: rota atrasada, comprovante perdido, cliente sem informação. O E-Control organiza esse fluxo — o entregador registra pela aplicação, a central acompanha em tempo real e o cliente recebe o status sem precisar perguntar.",
    contextLead:
      "Sistema web e aplicativo para gestão de entregas com rastreamento e comunicação automática.",
    features: [
      {
        icon: <IconTruck />,
        title: "Sistema web",
        text: "Central de gestão da operação: pedidos, rotas e status em um painel único.",
      },
      {
        icon: <IconCamera />,
        title: "Comprovante com foto",
        text: "Cada entrega é registrada com foto e horário — prova documentada no fim do ciclo.",
      },
      {
        icon: <IconPin />,
        title: "Localização e horário",
        text: "Acompanhamento da rota em tempo real, do ponto de partida à entrega final.",
      },
      {
        icon: <IconChat />,
        title: "Atualizações por WhatsApp",
        text: "Mensagens automáticas mantêm o cliente informado em cada mudança de status.",
      },
      {
        icon: <IconMap />,
        title: "App do entregador",
        text: "Aplicativo dedicado à rotina em campo: check-in, comprovante e histórico do dia.",
      },
    ],
    whatsappMessage: "Olá! Gostaria de conversar sobre um sistema de logística e entregas.",
    seoDescription:
      "Sistema de gestão de entregas: web, aplicativo do entregador, rastreamento em tempo real, comprovante com foto e avisos automáticos por WhatsApp.",
  },
];

export function getCase(slug: string) {
  return CASES.find((item) => item.slug === slug);
}
