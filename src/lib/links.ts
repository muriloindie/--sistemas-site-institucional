// Número provisório derivado dos materiais de referência. Confirmar antes de publicar.
const DEMO_WHATSAPP_NUMBER = "5546991130554";

export const CONTACT = {
  whatsapp: "+55 (46) 99113-0554",
  email: "comercial.ebot@esistemas.dev.br",
  isDemo: true,
};

export const SOCIAL = {
  instagram: "https://www.instagram.com/esistemas_/",
  facebook: "https://www.facebook.com/esistemas.dev/",
} as const;

export type SocialKey = keyof typeof SOCIAL;

export function whatsappLink(message: string) {
  return `https://wa.me/${DEMO_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Rotas internas do site institucional. Páginas de produto e case possuem
 * rotas próprias — as âncoras antigas continuam existindo na home como
 * compatibilidade de links, mas a navegação principal usa `next/link`.
 */
export const LINKS = {
  home: "/",
  about: "/sobre",
  solutions: "/solucoes",
  process: "/solucoes#processo",
  products: "/produtos",
  cases: "/produtos#cases",
  ebot: "/produtos",
  ebotApi: "/produtos/ebot-panel-api",
  ebotPanel: "/produtos/ebot-panel-api",
  ebotClinical: "/produtos/ebot-clinical",
  ebotExplorer: "/produtos/ebot-explorer",
  privacy: "/privacidade",
  contact: "/contato",
  whatsapp: whatsappLink("Olá! Gostaria de falar com um especialista da Ê-Sistemas."),
  specialist: whatsappLink("Olá! Gostaria de conversar sobre um projeto com a Ê-Sistemas."),
  instagram: SOCIAL.instagram,
  facebook: SOCIAL.facebook,
};
