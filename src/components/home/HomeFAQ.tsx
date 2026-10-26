import FAQ from "@/components/FAQ";

const HOME_FAQ = [
  {
    question: "A Ê-Sistemas desenvolve projetos sob medida ou oferece produtos prontos?",
    answer: "As duas coisas. Podemos desenhar uma solução do zero, partir de um produto Ê-Bot ou combinar produto e customização. A escolha depende do processo, dos sistemas existentes e do resultado esperado.",
  },
  {
    question: "É possível integrar um projeto aos sistemas que já usamos?",
    answer: "Sim. Integrações com ERP, CRM, canais de atendimento, APIs e sistemas legados fazem parte do desenho da solução. Primeiro avaliamos a estrutura atual e, então, definimos a forma mais segura e sustentável de conectar os dados.",
  },
  {
    question: "Como funciona a primeira conversa?",
    answer: "Você apresenta o cenário, os usuários e o que precisa melhorar. Nós organizamos as perguntas, identificamos possibilidades e indicamos o próximo passo — sem exigir que o escopo já esteja pronto.",
  },
  {
    question: "Vocês conseguem estimar prazo antes de conhecer o projeto?",
    answer: "Prazo e investimento dependem de escopo, integrações e prioridades. Depois do diagnóstico inicial, apresentamos uma proposta com etapas e entregas claras, evitando estimativas genéricas que não se sustentam na execução.",
  },
  {
    question: "A IA substitui o atendimento humano?",
    answer: "Não necessariamente. A proposta é usar IA para tarefas repetitivas, organização de contexto e automação, enquanto a equipe cuida das decisões, exceções e conversas que precisam de pessoas.",
  },
  {
    question: "O que acontece depois que a solução entra no ar?",
    answer: "A entrega pode incluir acompanhamento e evolução contínua. Novos fluxos, integrações e melhorias entram em um roadmap construído com a operação, em vez de deixar o produto parado no lançamento.",
  },
];

export default function HomeFAQ() {
  return (
    <FAQ
      items={HOME_FAQ}
      title={<>Perguntas que ajudam a <span className="text-highlight">começar melhor.</span></>}
      intro="Sem jargão e sem respostas genéricas: o essencial para entender como um projeto pode funcionar com a Ê-Sistemas."
    />
  );
}
