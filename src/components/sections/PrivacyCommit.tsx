import { Reveal } from "@/components/ui";
import { IconDatabase, IconEye, IconLink, IconLock, IconShield, IconUsers } from "@/components/icons";

const COMMITMENTS = [
  {
    icon: <IconShield />,
    title: "Dados com propósito definido",
    text: "Os documentos descrevem categorias de dados e finalidades relacionadas aos serviços contratados, sistemas e canais de atendimento.",
  },
  {
    icon: <IconUsers />,
    title: "Direitos do titular em primeiro lugar",
    text: "A Política de Privacidade do Cliente reúne os direitos previstos na LGPD e informa como encaminhar solicitações ao encarregado.",
  },
  {
    icon: <IconDatabase />,
    title: "Minimização e retenção medida",
    text: "A retenção considera a finalidade do tratamento e obrigações legais ou contratuais; a política citada no Programa detalha os critérios de descarte.",
  },
  {
    icon: <IconLock />,
    title: "Acesso controlado por camada",
    text: "O Programa cita controles como gestão de acessos, monitoramento, logs, backups e criptografia quando aplicável.",
  },
  {
    icon: <IconLink />,
    title: "Compartilhamento sempre por contrato",
    text: "A Política prevê compartilhamentos com parceiros e fornecedores vinculados, operadores sob instrução do controlador e autoridades quando exigido por lei.",
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
