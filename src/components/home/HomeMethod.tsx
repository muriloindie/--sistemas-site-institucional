import Link from "next/link";
import { Reveal } from "@/components/ui";
import {
  IconArrow,
  IconCheck,
  IconCode,
  IconLink,
  IconLock,
  IconRefresh,
  IconShield,
  IconUsers,
} from "@/components/icons";

const STEPS = [
  { number: "01", icon: <IconUsers />, title: "Entender", text: "Mapeamos pessoas, rotinas, sistemas e o ponto que realmente precisa mudar." },
  { number: "02", icon: <IconCode />, title: "Desenhar", text: "Transformamos o diagnóstico em fluxos, experiência, arquitetura e prioridades." },
  { number: "03", icon: <IconLink />, title: "Construir e integrar", text: "Desenvolvemos em ciclos, conectamos as ferramentas e validamos com quem usa." },
  { number: "04", icon: <IconRefresh />, title: "Evoluir", text: "Acompanhamos o uso e planejamos os próximos incrementos com a operação." },
];

const MODELS = [
  {
    label: "PROJETO SOB MEDIDA",
    title: "Quando o processo pede uma solução própria.",
    text: "Para regras específicas, fluxos exclusivos ou uma experiência que as ferramentas prontas não atendem.",
    items: ["Escopo construído por prioridade", "Arquitetura e interface dedicadas", "Integrações desde o desenho"],
  },
  {
    label: "PRODUTO + ADAPTAÇÃO",
    title: "Quando parte do caminho já está pronta.",
    text: "Para ganhar velocidade com um produto Ê-Bot e adaptar canais, identidade, integrações e funcionamento.",
    items: ["Configuração para a operação", "Integrações com sistemas atuais", "Customizações quando necessárias"],
  },
  {
    label: "EVOLUÇÃO CONTÍNUA",
    title: "Quando o produto precisa crescer com o negócio.",
    text: "Para evoluir uma solução existente com ciclos de melhoria, novos fluxos e acompanhamento próximo.",
    items: ["Roadmap de melhorias", "Novas integrações e recursos", "Acompanhamento da experiência"],
  },
];

/** Método, formatos de trabalho e compromissos de engenharia. */
export default function HomeMethod() {
  return (
    <section className="section-block home-method" id="processo-home">
      <div className="site-container">
        <Reveal className="motion-reveal">
          <div className="section-heading section-heading-split">
            <div>
              <span className="section-kicker">Como trabalhamos</span>
              <h2 className="section-title">Processo claro para construir <span>sem caixa-preta.</span></h2>
            </div>
            <div className="home-heading-side">
              <p className="section-intro">Você acompanha o que está sendo desenhado, por quê e qual é o próximo passo — da primeira conversa à evolução.</p>
              <Link className="link-arrow" href="/solucoes#processo">Detalhar a metodologia <IconArrow /></Link>
            </div>
          </div>
        </Reveal>

        <div className="home-process-track">
          {STEPS.map((step, index) => (
            <Reveal className="motion-reveal home-process-reveal" delay={index * 80} key={step.number}>
              <article className="home-process-step">
                <div className="home-process-marker"><span>{step.icon}</span><small>{step.number}</small></div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="motion-reveal">
          <div className="home-models-heading">
            <span className="section-kicker">Formatos de trabalho</span>
            <h2 className="section-title-sm">O ponto de partida muda. <span>O cuidado com a entrega, não.</span></h2>
          </div>
        </Reveal>

        <div className="home-models-grid">
          {MODELS.map((model, index) => (
            <Reveal className="motion-reveal" delay={index * 80} key={model.label}>
              <article className="home-model-card">
                <span>{model.label}</span>
                <h3>{model.title}</h3>
                <p>{model.text}</p>
                <ul>{model.items.map((item) => <li key={item}><IconCheck />{item}</li>)}</ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="motion-reveal">
          <div className="home-quality-strip">
            <span><IconShield /><b>Segurança desde a arquitetura</b></span>
            <span><IconUsers /><b>Experiência centrada em pessoas</b></span>
            <span><IconLock /><b>Dados tratados com responsabilidade</b></span>
            <span><IconRefresh /><b>Evolução planejada com a operação</b></span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
