import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PrivacyCommit from "@/components/sections/PrivacyCommit";
import PrivacyDocuments from "@/components/sections/PrivacyDocuments";
import FAQ from "@/components/FAQ";
import ContextualCTA from "@/components/ContextualCTA";

export const metadata: Metadata = {
  title: "Privacidade e LGPD",
  description:
    "Consulte o Programa de Governança em Privacidade e a Política de Privacidade do Cliente da Ê-Sistemas, com informações sobre tratamento, direitos dos titulares, cookies e canal do DPO.",
};

const PRIVACY_FAQ = [
  {
    question: "Como os dados são tratados nos serviços digitais?",
    answer:
      "A Política de Privacidade do Cliente descreve categorias de dados e finalidades relacionadas aos serviços tecnológicos, sistemas e chatbots. Conforme o contexto contratual, a Ê-Sistemas pode atuar como controladora ou operadora; como operadora, segue as instruções documentadas do cliente controlador.",
  },
  {
    question: "Quais direitos posso exercer como titular de dados?",
    answer:
      "A Política de Privacidade do Cliente informa direitos como confirmação e acesso, correção, anonimização, bloqueio ou eliminação, portabilidade quando aplicável, informação sobre compartilhamentos e revogação do consentimento. Envie dúvidas ou solicitações ao DPO pelo e-mail thiagomarcosmontagner@hotmail.com. Se a Ê-Sistemas atuar como operadora, encaminhará a solicitação ao controlador responsável.",
  },
  {
    question: "Os dados coletados podem ir para terceiros?",
    answer:
      "A Política prevê compartilhamento com parceiros e fornecedores contratualmente vinculados, operadores conforme as instruções do controlador e autoridades públicas quando houver obrigação legal. Transferências internacionais por provedores de tecnologia devem observar os requisitos aplicáveis da LGPD.",
  },
  {
    question: "Por quanto tempo os dados ficam armazenados?",
    answer:
      "Pelo tempo necessário às finalidades, às obrigações legais ou contratuais e ao exercício regular de direitos. A Política de Retenção citada no Programa de Governança e o registro interno das operações detalham critérios e prazos por contexto; ao final, os dados são eliminados ou anonimizados quando aplicável.",
  },
  {
    question: "Qual é o papel da Ê-Sistemas no tratamento?",
    answer:
      "O papel depende da operação: a Ê-Sistemas pode ser controladora em tratamentos próprios e operadora quando trata dados segundo instruções documentadas do cliente. As responsabilidades, finalidades e medidas aplicáveis devem considerar o contexto e os documentos contratuais.",
  },
  {
    question: "Como são usados cookies?",
    answer:
      "A Política de Privacidade descreve cookies e tecnologias similares para funcionamento, preferências, análise de uso e, quando aplicável, marketing. Cookies não essenciais dependem de consentimento prévio. O aviso de cookies atualmente exibido no site é apenas uma prévia visual: as opções não são armazenadas nem aplicadas a ferramentas de rastreamento.",
  },
  {
    question: "Onde consulto os documentos completos?",
    answer:
      "Na seção de documentos acima. O Programa de Governança em Privacidade e a Política de Privacidade do Cliente podem ser visualizados no navegador ou baixados para leitura off-line.",
  },
];

export default function PrivacidadePage() {
  return (
    <>
      <PageHero
        crumbs={[{ href: "/privacidade", label: "Privacidade e LGPD" }]}
        kicker="Privacidade e LGPD"
        title={<>Dados pessoais tratados com <span className="text-highlight">transparência e propósito.</span></>}
        lead="Consulte como a Ê-Sistemas organiza a governança e a proteção de dados no relacionamento com clientes, parceiros e usuários, além dos canais para dúvidas e solicitações."
      />
      <PrivacyCommit />
      <PrivacyDocuments />
      <FAQ
        items={PRIVACY_FAQ}
        title={<>Perguntas sobre privacidade e <span className="text-highlight">tratamento de dados.</span></>}
        intro="Respostas alinhadas ao Programa de Governança em Privacidade e à Política de Privacidade do Cliente."
      />
      <ContextualCTA
        title={<>Ficou com alguma dúvida sobre <span className="text-highlight">dados e privacidade?</span></>}
        text="Fale direto com o nosso time: esclarecemos o tratamento de dados nos nossos produtos e no seu projeto."
        whatsappMessage="Olá! Tenho uma dúvida sobre privacidade de dados e a LGPD."
        secondary={{ href: "/contato", label: "Ver canais de contato" }}
      />
    </>
  );
}
