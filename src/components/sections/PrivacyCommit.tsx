import { Reveal } from "@/components/ui";
import { IconDatabase, IconEye, IconLink, IconLock, IconShield, IconUsers } from "@/components/icons";

const COMMITMENTS = [
  {
    icon: <IconShield />,
    title: "Dados com propósito definido",
    text: "Coletamos apenas o que a operação combinada exige: atendimento, agenda, integração com sistemas e melhoria dos serviços contratados. Sem coleta escondida.",
  },
  {
    icon: <IconUsers />,
    title: "Direitos do titular em primeiro lugar",
    text: "Acesso, correção, exclusão, portabilidade e informação sobre compartilhamento: direitos garantidos pela lei e acionáveis pelo canal direto do encarregado.",
  },
  {
    icon: <IconDatabase />,
    title: "Minimização e retenção medida",
    text: "Guardamos o mínimo pelo tempo necessário ao fim declarado. O que perde a finalidade deixa de ser armazenado ou é anonimizado.",
  },
  {
    icon: <IconLock />,
    title: "Acesso controlado por camada",
    text: "Informações sensíveis ficam atrás de autenticação, perfis e trilha de auditoria — cada pessoa vê o que o papel dela precisa ver.",
  },
  {
    icon: <IconLink />,
    title: "Compartilhamento sempre por contrato",
    text: "Integrações com terceiros seguem contrato de tratamento, finalidade restrita e canais criptográficos. Dados pessoais não são vendidos.",
  },
  {
    icon: <IconEye />,
    title: "Transparência que se publica",
    text: "Os documentos desta página valem para o relacionamento inteiro: quando algo muda de forma relevante, a atualização é publicada aqui.",
  },
];

/** Cards de compromisso com privacidade — /privacidade. */
export default function PrivacyCommit() {
  return (
    <section className="section-block privacy-commit">
      <div className="site-container">
        <Reveal className="motion-reveal">
          <div className="section-heading section-heading-center">
            <span className="section-kicker">Nosso compromisso</span>
            <h2 className="section-title">Privacidade dentro do <span>projeto inteiro.</span></h2>
            <p className="section-intro">A LGPD não é um anexo no final do escopo: ela entra no desenho da solução, no relacionamento com fornecedores e no suporte depois da entrega.</p>
          </div>
        </Reveal>

        <div className="privacy-commit-grid">
          {COMMITMENTS.map((item, index) => (
            <Reveal className="motion-reveal" delay={index * 60} key={item.title}>
              <article className="privacy-commit-card">
                <span className="privacy-commit-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
