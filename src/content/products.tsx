import type { ReactNode } from "react";
import {
  IconBolt,
  IconChart,
  IconChat,
  IconCheckCircle,
  IconCompass,
  IconLayers,
  IconMap,
  IconRefresh,
  IconSpark,
  IconTarget,
  IconUsers,
} from "@/components/icons";

export type ProductSlug = "ebot-panel-api" | "ebot-clinical" | "ebot-explorer";

export type ProductFeature = {
  icon: ReactNode;
  title: string;
  text: string;
};

export type ProductStep = {
  number: string;
  icon: ReactNode;
  title: string;
  text: string;
};

export type ProductContent = {
  slug: ProductSlug;
  name: string;
  nameHighlight?: string;
  shortName: string;
  sector: string;
  tagline: string;
  icon: string;
  description: string;
  whatsappMessage: string;
  /** Features detalhadas exibidas nas páginas de produto. */
  features: ProductFeature[];
  /** Fluxo operacional ilustrado nas páginas de produto. */
  flow: ProductStep[];
  seoDescription: string;
};

export const PRODUCTS: ProductContent[] = [
  {
    slug: "ebot-panel-api",
    name: "Ê-Bot Panel + API",
    nameHighlight: "Panel + API",
    shortName: "Panel + API",
    sector: "Atendimento multi-canal",
    tagline: "A central que recebe, classifica e resolve.",
    icon: "/ebot/icone.webp",
    description:
      "A central que recebe, classifica e resolve. Conversas do WhatsApp, Instagram e site entram em filas, a IA responde o que é repetitivo e só então passa para o humano — tudo sincronizado com o seu ERP, CRM ou sistemas internos via API e webhooks.",
    whatsappMessage: "Olá! Gostaria de conhecer o Ê-Bot Panel e a Ê-Bot API.",
    features: [
      {
        icon: <IconChat />,
        title: "Multiatendimento",
        text: "Conversas do WhatsApp, Instagram e site em uma única central, com histórico completo de cada cliente.",
      },
      {
        icon: <IconUsers />,
        title: "Filas e transferências",
        text: "Distribuição por setor e por pessoa, com transferência sem perder o contexto da conversa.",
      },
      {
        icon: <IconSpark />,
        title: "IA e automações",
        text: "A Ê-Bot responde o repetitivo, coleta contexto e prepara o atendimento humano com tudo anotado.",
      },
      {
        icon: <IconChart />,
        title: "CRM e Kanban",
        text: "Funil visual de oportunidades, tarefas e follow-up — cada lead visível até o fechamento.",
      },
      {
        icon: <IconBolt />,
        title: "Campanhas e disparos",
        text: "Mensagens segmentadas com controle de envio para reativação, avisos e nutrição de base.",
      },
      {
        icon: <IconLayers />,
        title: "API e webhooks",
        text: "Sincronização com ERP, CRM e sistemas internos — os dados do atendimento chegam onde a operação trabalha.",
      },
    ],
    flow: [
      {
        number: "01",
        icon: <IconChat />,
        title: "Recebe",
        text: "Conversas de todos os canais entram na mesma central, já identificadas por cliente.",
      },
      {
        number: "02",
        icon: <IconSpark />,
        title: "Classifica",
        text: "A IA identifica intenção, segmento e urgência antes de qualquer resposta.",
      },
      {
        number: "03",
        icon: <IconUsers />,
        title: "Resolve",
        text: "O que é repetitivo é respondido na hora; o resto segue para o time certo, com contexto.",
      },
      {
        number: "04",
        icon: <IconLayers />,
        title: "Registra",
        text: "Cada interação vira dado no CRM e no seu sistema, via API e webhooks.",
      },
    ],
    seoDescription:
      "Central de multiatendimento com IA, CRM, Kanban, campanhas e integração via API para conectar WhatsApp, Instagram, site e seus sistemas.",
  },
  {
    slug: "ebot-clinical",
    name: "Ê-Bot Clinical",
    shortName: "Clinical",
    sector: "Saúde pública e privada",
    tagline: "A secretária que não dorme.",
    icon: "/ebot-clinical/icone.webp",
    description:
      "A secretária que não dorme: confirma e remarca consultas, responde pacientes 24/7, ocupa a agenda com encaixes automáticos e transforma a conversa da consulta em resumo e plano pós-consulta.",
    whatsappMessage: "Olá! Gostaria de conhecer o Ê-Bot Clinical.",
    features: [
      {
        icon: <IconRefresh />,
        title: "Confirmação e remarcação",
        text: "Lembretes e confirmações automáticas por IA, com remarcação sem fila na recepção.",
      },
      {
        icon: <IconUsers />,
        title: "Fila de encaixe",
        text: "Horários vagos são oferecidos automaticamente para pacientes da fila de espera.",
      },
      {
        icon: <IconSpark />,
        title: "Transcrição da consulta",
        text: "A conversa da consulta vira resumo e plano pós-consulta, pronto para o prontuário.",
      },
      {
        icon: <IconChat />,
        title: "CRM da clínica",
        text: "Histórico do paciente, funil de retornos e automações de acompanhamento em um só lugar.",
      },
    ],
    flow: [
      {
        number: "01",
        icon: <IconUsers />,
        title: "Agenda",
        text: "O paciente escolhe o horário pela conversa — sem espera e sem ligação.",
      },
      {
        number: "02",
        icon: <IconRefresh />,
        title: "Confirma",
        text: "A IA confirma presença, remarca conflitos e mantém a agenda enxuta.",
      },
      {
        number: "03",
        icon: <IconTarget />,
        title: "Encaixa",
        text: "Cancelamentos abrem vagas que a fila de espera ocupa automaticamente.",
      },
      {
        number: "04",
        icon: <IconCheckCircle />,
        title: "Registra",
        text: "A consulta vira resumo e plano de cuidado, disponível para a equipe.",
      },
    ],
    seoDescription:
      "Automação de agenda e atendimento para clínicas e hospitais: confirmações, lembretes, encaixes inteligentes e CRM — 24/7 por IA.",
  },
  {
    slug: "ebot-explorer",
    name: "Ê-Bot Explorer",
    shortName: "Explorer",
    sector: "Turismo & cidades",
    tagline: "O visitante conversa com a cidade.",
    icon: "/ebot-explorer/icone.webp",
    description:
      "O visitante escaneia o QR Code ou usa o totem e conversa com a cidade: recebe roteiros por tempo e orçamento, eventos e mapas editáveis com base no catálogo aprovado do destino — em português, inglês e espanhol.",
    whatsappMessage: "Olá! Gostaria de conhecer o Ê-Bot Explorer.",
    features: [
      {
        icon: <IconMap />,
        title: "QR Code, totem e WhatsApp",
        text: "Três portas de entrada na mesma base — o visitante começa por onde estiver.",
      },
      {
        icon: <IconCompass />,
        title: "Rotas inteligentes",
        text: "Roteiros por tempo, orçamento e acessibilidade, editáveis direto no celular.",
      },
      {
        icon: <IconTarget />,
        title: "Catálogo com curadoria",
        text: "Só entra no guia o que o destino aprovar — informação oficial e atualizada.",
      },
      {
        icon: <IconBolt />,
        title: "Texto, voz e 3 idiomas",
        text: "Português, inglês e espanhol nativos, com acessibilidade para diferentes públicos.",
      },
    ],
    flow: [
      {
        number: "01",
        icon: <IconMap />,
        title: "Escaneia",
        text: "O visitante chega pelo QR Code do ponto turístico ou pelo totem da cidade.",
      },
      {
        number: "02",
        icon: <IconChat />,
        title: "Conversa",
        text: "Diz quanto tempo tem, quanto quer gastar e o que prefere conhecer.",
      },
      {
        number: "03",
        icon: <IconCompass />,
        title: "Recebe a rota",
        text: "Um roteiro completo, com mapa, horários e curiosidades do caminho.",
      },
      {
        number: "04",
        icon: <IconBolt />,
        title: "Atualiza o passeio",
        text: "A rota se ajusta em tempo real a eventos, imprevistos e novas paradas.",
      },
    ],
    seoDescription:
      "Atendimento turístico por IA para cidades e destinos: QR Code, totem e WhatsApp com rotas inteligentes, catálogo oficial e três idiomas.",
  },
];

export function getProduct(slug: string) {
  return PRODUCTS.find((product) => product.slug === slug);
}
