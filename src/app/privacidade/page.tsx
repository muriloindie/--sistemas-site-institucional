import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PrivacyCommit from "@/components/sections/PrivacyCommit";
import PrivacyDocuments from "@/components/sections/PrivacyDocuments";
import FAQ from "@/components/FAQ";
import ContextualCTA from "@/components/ContextualCTA";

export const metadata: Metadata = {
  title: "Privacidade e LGPD",
  description:
    "Como a Ê-Sistemas coleta, usa e protege dados pessoais: compromisso de privacidade, direitos do titular, papel da IA no atendimento e documentos oficiais (LGPD e Política de Privacidade) para visualizar e baixar.",
};

const PRIVACY_FAQ = [
  {
    question: "Como a LGPD aparece em um atendimento com IA?",
    answer:
      "Automação e IA tratam os dados pela finalidade: minimização do que circula, segmento de acesso, registro das conversas para qualidade e aplicação do contexto combinado com você. A supervisão humana permanece no controle das decisões de maior impacto.",
  },
  {
    question: "Quais direitos posso exercer como titular de dados?",
    answer:
      "Aos previstos pela LGPD: confirmação de tratamento, acesso aos dados, correção, anonimização ou exclusão, portabilidade, informação sobre compartilhamento e revogação do consentimento. O canal do encarregado divulgado na documentação responde esses pedidos.",
  },
  {
    question: "Os dados coletados podem ir para terceiros?",
    answer:
      "Apenas quando necessário e sempre com contrato de tratamento: provedores de infraestrutura, canais de mensagem e serviços contratados. Não há venda de dados, e o compartilhamento está descrito nos documentos oficiais desta página.",
  },
  {
    question: "Por quanto tempo os dados ficam armazenados?",
    answer:
      "Pelo tempo necessário à finalidade declarada e às obrigações aplicáveis. Cumprido esse ciclo, o dado é eliminado de forma irreversível ou tornado anônimo, conforme o contexto da operação.",
  },
  {
    question: "O que acontece com os dados quando o atendimento é automatizado?",
    answer:
      "Os fluxos são configurados com escopo, retenção e autorização definidos junto ao cliente — inclusive quando envolve WhatsApp, agenda ou integrações com sistemas internos. Logs e trilhas de acesso deixam o uso auditável.",
  },
  {
    question: "Onde fico por dentro do texto completo?",
    answer:
      "Na seção de documentos acima. O Aviso de Privacidade (LGPD) e a Política de Privacidade podem ser visualizados aqui mesmo, no navegador, ou baixados para leitura off-line.",
  },
];

export default function PrivacidadePage() {
  return (
    <>
      <PageHero
        crumbs={[{ href: "/privacidade", label: "Privacidade e LGPD" }]}
        kicker="Privacidade e LGPD"
        title={<>Dados pessoais tratados com <span className="text-highlight">transparência e propósito.</span></>}
        lead="Como coletamos, usamos e protegemos informações no relacionamento com clientes, parceiros e usuários — e onde você encontra os documentos que formalizam esse compromisso."
      />
      <PrivacyCommit />
      <PrivacyDocuments />
      <FAQ
        items={PRIVACY_FAQ}
        title={<>Perguntas sobre privacidade e <span className="text-highlight">tratamento de dados.</span></>}
        intro="Respostas sobre LGPD, uso de IA, compartilhamento, retenção e a leitura dos documentos oficiais."
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
