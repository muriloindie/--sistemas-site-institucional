import { Reveal } from "@/components/ui";
import FAQ from "@/components/FAQ";
import {
  IconCheck,
  IconCompass,
  IconLayers,
  IconRefresh,
  IconShield,
  IconUsers,
} from "@/components/icons";

const FLOW = [
  {
    icon: <IconUsers />,
    title: "Primeira conversa",
    text: "Você conta o cenário — processo, pessoas e sistemas. Nós ouvimos e organizamos as perguntas certas.",
  },
  {
    icon: <IconCompass />,
    title: "Leitura do contexto",
    text: "Analisamos o que existe e onde a rotina perde tempo. Sem extrair requisitos prontos antes de entender o todo.",
  },
  {
    icon: <IconLayers />,
    title: "Proposta com etapas",
    text: "Caminho sugerido com entregas, prioridades e um desenho realista de prazo e investimento.",
  },
  {
    icon: <IconRefresh />,
    title: "Construção e evolução",
    text: "Ciclos de desenvolvimento com validação constante até a operação rodar — e acompanhamento depois.",
  },
];

const ASSURANCES = [
  { icon: <IconCheck />, text: "A primeira conversa é sem compromisso e sem custo." },
  { icon: <IconShield />, text: "Informações do seu negócio são tratadas com confidencialidade." },
  { icon: <IconCompass />, text: "Se um produto pronto resolver, dizemos — antes de propor projeto." },
];

/**
 * Fluxo do primeiro contato e depois dele — página /contato.
 */
export function ContactFlow() {
  return (
    <section className="section-block contact-flow">
      <div className="site-container">
        <Reveal className="motion-reveal">
          <div className="faq-heading">
            <div>
              <span className="section-kicker">Do primeiro contato ao primeiro ciclo</span>
              <h2 className="section-title">O que acontece <span>depois do “oi”.</span></h2>
            </div>
            <p className="faq-intro contact-flow-intro">Sem formulário infinito e sem etapa misteriosa: este é o caminho típico entre a primeira mensagem e uma solução rodando.</p>
          </div>
        </Reveal>

        <div className="contact-flow-track">
          {FLOW.map((step, index) => (
            <Reveal className="motion-reveal contact-flow-reveal" delay={index * 80} key={step.title}>
              <article className="contact-flow-step">
                <div className="contact-flow-marker">
                  <span>{step.icon}</span>
                  <small>0{index + 1}</small>
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="motion-reveal">
          <div className="contact-flow-strip">
            {ASSURANCES.map((item) => (
              <span key={item.text}><i>{item.icon}</i>{item.text}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const CONTACT_FAQ = [
  {
    question: "É melhor falar por WhatsApp ou por e-mail?",
    answer:
      "Os dois funcionam. O WhatsApp tende a ser mais rápido para uma primeira conversa; o e-mail é ideal para enviar contexto maior — materiais, processos ou tamanho da operação.",
  },
  {
    question: "Atendem em quais regiões?",
    answer:
      "Trabalhamos de forma remota com clientes de diferentes regiões. Quando o projeto faz sentido, alinhamos os momentos presenciais que forem importantes.",
  },
  {
    question: "Preciso ter proposta de escopo antes de falar?",
    answer:
      "Não. O diagnóstico faz parte do desenho. Chegar com o processo e o problema é suficiente — o escopo é construído a partir disso.",
  },
  {
    question: "Vocês assumem projetos já em andamento?",
    answer:
      "Sim. Se a operação existe e a solução precisa ser resgatada, corrigida ou ampliada, o diagnóstico avalia o estado atual antes de qualquer decisão.",
  },
  {
    question: "Com quem falamos durante o projeto?",
    answer:
      "Com o time que desenha e constrói. A comunicação é direta — reuniões de alinhamento, acompanhamento de entrega e um canal aberto com você.",
  },
];

export function ContactFAQ() {
  return (
    <FAQ
      items={CONTACT_FAQ}
      kicker="Perguntas frequentes"
      title={<>Antes de chamar, <span className="text-highlight">vale ler isso.</span></>}
      intro="O detalhe operacional de uma primeira conversa com a Ê-Sistemas — de canais ao acompanhamento do projeto."
    />
  );
}
