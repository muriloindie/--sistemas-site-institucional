import Image from "next/image";
import { Reveal } from "@/components/ui";
import { IconLink } from "@/components/icons";

type CloudChip = {
  id: string;
  label: string;
  img?: { src: string; width: number; height: number };
  mark?: React.ReactNode;
  /** posição no campo (desktop), atraso e duração da flutuação */
  x: string;
  y: string;
  d: string;
  t: string;
};

const WA_PATH =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.347-.346.52-.52.174-.174.232-.297.347-.495.116-.198.058-.371-.025-.52-.083-.148-.759-1.826-1.04-2.499-.281-.673-.569-.581-.767-.586-.198-.008-.425-.023-.651-.048-.226-.025-.584.086-.899.415-.315.329-1.224 1.193-1.224 2.908 0 1.715 1.254 3.372 1.429 3.606.174.235 2.442 3.731 5.917 5.23.827.357 1.48.57 1.986.73.834.264 1.593.227 2.193.137.668-.098 2.055-.84 2.345-1.65.289-.809.289-1.5.203-1.644-.087-.144-.32-.232-.617-.381Z";
const WA_BUBBLE =
  "M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .11 5.334.109 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a11.98 11.98 0 0 0 5.71 1.447h.005c6.585 0 11.94-5.335 11.94-11.896 0-3.18-1.24-6.165-3.47-8.45ZM12.05 21.785h-.004a9.87 9.87 0 0 1-5.022-1.373l-.361-.214-3.733.974.999-3.637-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.002-5.45 4.455-9.885 9.93-9.885 2.648 0 5.137 1.03 7.008 2.902a9.825 9.825 0 0 1 2.909 7.008c-.003 5.45-4.456 9.88-9.93 9.88Z";

const GH_PATH =
  "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12";

const X_PATH =
  "M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.46l8.6-9.83L0 1.15h7.59l5.24 6.93Zm-1.29 19.5h2.04L6.49 3.24H4.3Z";

/**
 * Nuvem de integrações da página /solucoes: logos reais (parceiros em webp)
 * e marcas desenhadas em SVG, flutuando em volta do "ecossistema".
 */
const CHIPS: CloudChip[] = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    x: "5%",
    y: "7%",
    d: "0s",
    t: "7.5s",
    mark: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d={WA_BUBBLE} fill="#243A2B" opacity=".16" />
        <path d={WA_PATH} fill="#25D366" />
      </svg>
    ),
  },
  { id: "x", label: "X", x: "21%", y: "2%", d: "-2.4s", t: "6.8s", mark: <svg viewBox="0 0 24 24" aria-hidden="true"><path d={X_PATH} fill="#0F1419" /></svg> },
  {
    id: "youtube",
    label: "YouTube",
    x: "38%",
    y: "5%",
    d: "-1.1s",
    t: "8s",
    mark: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="1.6" y="5.6" width="20.8" height="13" rx="4" fill="#FF0000" />
        <path d="M10.1 9.2 15.9 12l-5.8 2.8Z" fill="#fff" />
      </svg>
    ),
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    x: "57%",
    y: "2%",
    d: "-3s",
    t: "7.2s",
    mark: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="4.2" fill="#0A66C2" />
        <circle cx="7.1" cy="7.2" r="1.55" fill="#fff" />
        <rect x="5.7" y="9.6" width="2.8" height="8" fill="#fff" />
        <path d="M10.9 9.6h2.6v1.1c.6-.8 1.6-1.3 2.9-1.2 2.2.1 3 1.4 3 3.6v4.5h-2.7v-4c0-1.2-.4-1.9-1.5-1.9-1.2 0-2 .8-2 2.4v3.5h-2.3Z" fill="#fff" />
      </svg>
    ),
  },
  {
    id: "telegram",
    label: "Telegram",
    x: "17%",
    y: "7%",
    d: "-4.2s",
    t: "7.8s",
    mark: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="#2AABEE" />
        <path
          d="m16.9 6.4-11 4.3c-.7.3-.7 1.2 0 1.4l2.7.9 1 3.4c.2.6.9.7 1.3.3l1.5-1.6 2.8 2.1c.5.4 1.2.1 1.3-.5l2.2-9.2c.2-.7-.4-1.3-1.8-1.1Z"
          fill="#fff"
        />
        <path d="m9.6 12.9 6-4.3c.2-.1.4.1.3.3l-4.7 4.7-.3 2.6Z" fill="#B9E2F5" />
      </svg>
    ),
  },
  { id: "instagram", label: "Instagram", x: "7%", y: "16%", d: "-1.8s", t: "6.6s", img: { src: "/parceiros/instagram.webp", width: 444, height: 422 } },
  {
    id: "claude",
    label: "Claude",
    x: "4%",
    y: "45%",
    d: "-3.6s",
    t: "7.4s",
    img: { src: "/parceiros/claude.webp", width: 444, height: 422 },
  },
  {
    id: "ollama",
    label: "Ollama",
    x: "3%",
    y: "80%",
    d: "-2.9s",
    t: "8.2s",
    img: { src: "/parceiros/ollama.webp", width: 444, height: 422 },
  },
  { id: "n8n", label: "n8n", x: "15%", y: "84%", d: "-0.9s", t: "6.9s", img: { src: "/parceiros/n8n.webp", width: 444, height: 422 } },
  {
    id: "gemini",
    label: "Gemini",
    x: "31%",
    y: "74%",
    d: "-4.6s",
    t: "7.6s",
    mark: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <defs>
          <linearGradient id="cloud-gemini" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#4285F4" />
            <stop offset=".55" stopColor="#9B72F2" />
            <stop offset="1" stopColor="#D96570" />
          </linearGradient>
        </defs>
        <path
          d="M12 1.6c.9 4.8 3.4 7.3 8.2 8.2-.5 2.5-1.5 3.4-3.9 4.4-2 .8-3.4 2-4.3 4.4-.9-2.4-2.3-3.6-4.3-4.4-2.4-1-3.4-1.9-3.9-4.4 4.8-.9 7.3-3.4 8.2-8.2Z"
          fill="url(#cloud-gemini)"
        />
      </svg>
    ),
  },
  {
    id: "google",
    label: "Google",
    x: "48%",
    y: "88%",
    d: "-2s",
    t: "8.4s",
    mark: <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" /></svg>,
  },
  {
    id: "meta",
    label: "Meta",
    x: "67%",
    y: "78%",
    d: "-3.3s",
    t: "7s",
    mark: (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none">
        <defs>
          <linearGradient id="cloud-meta" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#0668E1" />
            <stop offset="1" stopColor="#00A0FF" />
          </linearGradient>
        </defs>
        <path
          d="M12 12.2C10.2 9 8.4 6.9 5.8 6.9a4.9 4.9 0 0 0 0 9.8c2.6 0 4.4-2.1 6.2-5.2 1.8 3.1 3.6 5.2 6.2 5.2a4.9 4.9 0 0 0 0-9.8c-2.6 0-4.4 2.1-6.2 5.3Z"
          stroke="url(#cloud-meta)"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "gmail",
    label: "Gmail",
    x: "11%",
    y: "62%",
    d: "-1.4s",
    t: "6.4s",
    mark: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="2.4" y="4.6" width="19.2" height="14.8" rx="3" fill="#fff" />
        <path d="M5.6 17.6V9.2l6.2 4.6 6.2-4.6v8.4" fill="none" stroke="#EA4335" strokeWidth="2.3" strokeLinejoin="round" strokeLinecap="round" />
        <path d="M5.6 9.2V6.1l6.2 3.9 6.2-3.9v3.1l-6.2 4.6Z" fill="#EA4335" />
      </svg>
    ),
  },
  {
    id: "drive",
    label: "Google Drive",
    x: "3.5%",
    y: "38%",
    d: "-4.9s",
    t: "7.7s",
    mark: (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none">
        <path d="M9.2 3.8h5.6L21 14.6h-5.6Z" fill="#FBBC04" />
        <path d="M9.2 3.8 3 14.6l2.8 4.8L12 8.6Z" fill="#4285F4" />
        <path d="M5.8 19.4h12.4L21 14.6H8.6Z" fill="#34A853" />
      </svg>
    ),
  },
  {
    id: "pix",
    label: "Pix",
    x: "72%",
    y: "55%",
    d: "-2.7s",
    t: "6.7s",
    mark: <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#77B6A8" d="M5.283 18.36a3.505 3.505 0 0 0 2.493-1.032l3.6-3.6a.684.684 0 0 1 .946 0l3.613 3.613a3.504 3.504 0 0 0 2.493 1.032h.71l-4.56 4.56a3.647 3.647 0 0 1-5.156 0L4.85 18.36ZM18.428 5.627a3.505 3.505 0 0 0-2.493 1.032l-3.613 3.614a.67.67 0 0 1-.946 0l-3.6-3.6A3.505 3.505 0 0 0 5.283 5.64h-.434l4.573-4.572a3.646 3.646 0 0 1 5.156 0l4.559 4.559ZM1.068 9.422 3.79 6.699h1.492a2.483 2.483 0 0 1 1.744.722l3.6 3.6a1.73 1.73 0 0 0 2.443 0l3.614-3.613a2.482 2.482 0 0 1 1.744-.723h1.767l2.737 2.737a3.646 3.646 0 0 1 0 5.156l-2.736 2.736h-1.768a2.482 2.482 0 0 1-1.744-.722l-3.613-3.613a1.77 1.77 0 0 0-2.444 0l-3.6 3.6a2.483 2.483 0 0 1-1.744.722H3.791l-2.723-2.723a3.646 3.646 0 0 1 0-5.156" /></svg>,
  },
  {
    id: "stripe",
    label: "Stripe",
    x: "55%",
    y: "66%",
    d: "-1s",
    t: "7.3s",
    mark: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M15.4 3.4c-4.6 0-7.9 2.4-7.9 6.1 0 5.5 7.5 3.5 7.5 6 0 1.2-1.2 1.9-3.2 1.9-2.3 0-4.5-.8-6.1-1.9v4.1c1.6.8 3.7 1.2 5.9 1.2 4.7 0 8-2.3 8-6 0-5.7-7.5-3.8-7.5-6 0-1 .9-1.7 2.7-1.7 1.9 0 4.1.7 5.8 1.7V4.6c-1.7-.8-3.6-1.2-5.2-1.2Z"
          fill="#635BFF"
        />
      </svg>
    ),
  },
  {
    id: "mp",
    label: "Mercado Pago",
    x: "26%",
    y: "52%",
    d: "-4.1s",
    t: "6.5s",
    mark: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="1.8" y="3.6" width="20.4" height="16.8" rx="5.4" fill="#009EE3" />
        <path d="M5.9 14.9V8.9l2.6 3.1 2.6-3.1v6" fill="none" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="15.4" cy="10.4" r="1.9" fill="none" stroke="#fff" strokeWidth="1.7" />
        <path d="M17.3 10.4v5.2" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "notion",
    label: "Notion",
    x: "22%",
    y: "26%",
    d: "-3.8s",
    t: "6.3s",
    mark: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4.6" y="4.6" width="14.8" height="14.8" rx="3" fill="#fff" stroke="#B7B7B7" strokeWidth="1.2" />
        <path d="M8.7 17.1V8l.8-.6 5.4 6.8V7.1h1.2v9.6l-.8.6-5.4-6.8v6.6Z" fill="#0A0A0A" />
      </svg>
    ),
  },
  {
    id: "slack",
    label: "Slack",
    x: "67%",
    y: "26%",
    d: "-2.2s",
    t: "7.9s",
    mark: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="10.3" y="2.4" width="3.4" height="7.4" rx="1.7" fill="#36C5F0" />
        <rect x="14.2" y="10.3" width="7.4" height="3.4" rx="1.7" fill="#2EB67D" />
        <rect x="10.3" y="14.2" width="3.4" height="7.4" rx="1.7" fill="#E01E5A" />
        <rect x="2.4" y="10.3" width="7.4" height="3.4" rx="1.7" fill="#ECB22E" />
        <rect x="6.9" y="6.9" width="3.4" height="3.4" rx="1.7" fill="#E01E5A" />
        <rect x="13.7" y="6.9" width="3.4" height="3.4" rx="1.7" fill="#36C5F0" />
        <rect x="13.7" y="13.7" width="3.4" height="3.4" rx="1.7" fill="#ECB22E" />
        <rect x="6.9" y="13.7" width="3.4" height="3.4" rx="1.7" fill="#2EB67D" />
      </svg>
    ),
  },
  {
    id: "github",
    label: "GitHub",
    x: "7%",
    y: "84%",
    d: "-1.6s",
    t: "8.1s",
    mark: <svg viewBox="0 0 24 24" aria-hidden="true"><path d={GH_PATH} fill="#1B1F23" /></svg>,
  },
];

const RIGHT_ANCHOR = new Set(["telegram", "instagram", "drive", "gmail", "github"]);
const OFFICIAL_BRAND_LOGOS: Record<string, { src: string; width: number; height: number }> = {
  google: { src: "/brands/google.svg", width: 24, height: 24 },
  pix: { src: "/brands/pix.svg", width: 24, height: 24 },
  mp: { src: "/brands/mercadopago.svg", width: 24, height: 24 },
};

export default function IntegrationCloud() {
  return (
    <section className="section-block cloud-section">
      <div className="site-container">
        <Reveal className="motion-reveal">
          <div className="section-heading section-heading-split">
            <div>
              <span className="section-kicker">Ecossistema personalizado</span>
              <h2 className="section-title">Conectamos as ferramentas que <span>sua rotina já usa.</span></h2>
            </div>
            <p className="section-intro">Não substituímos ferramentas à toa: onde existe API ou webhook aberto, trazemos a mesma ferramenta para dentro do fluxo — IA, canais, dados e meios de pagamento convivendo na mesma operação.</p>
          </div>
        </Reveal>

        <Reveal className="motion-reveal">
          <div className="cloud-field" role="img" aria-label="Ferramentas que podem ser integradas: WhatsApp, X, YouTube, LinkedIn, Telegram, Instagram, Google, Gmail, Google Drive, Pix, Stripe, Mercado Pago, Notion, Slack, GitHub, Meta, Claude, Gemini, Ollama e n8n.">
            <span className="cloud-ring cloud-ring-lg" aria-hidden="true" />
            <span className="cloud-ring cloud-ring-sm" aria-hidden="true" />
            <span className="cloud-wash cloud-wash-1" aria-hidden="true" />
            <span className="cloud-wash cloud-wash-2" aria-hidden="true" />

            <div className="cloud-chip cloud-hub" aria-hidden="true">
              <span className="cloud-hub-mark"><IconLink /></span>
              <b>Seu ecossistema</b>
              <small>Um centro conectado à sua rotina</small>
            </div>

            {CHIPS.map((chip) => {
              const logo = chip.img ?? OFFICIAL_BRAND_LOGOS[chip.id];
              return (
                <span
                  className={`cloud-chip${RIGHT_ANCHOR.has(chip.id) ? " cloud-anchor-r" : ""}`}
                  key={chip.id}
                  data-id={chip.id}
                  style={{ "--cx": chip.x, "--cy": chip.y, "--cd": chip.d, "--ct": chip.t } as React.CSSProperties}
                >
                  {logo ? (
                    <Image src={logo.src} alt="" width={logo.width} height={logo.height} sizes="20px" className="cloud-chip-img" />
                  ) : (
                    chip.mark
                  )}
                  <small>{chip.label}</small>
                </span>
              );
            })}
          </div>
        </Reveal>

        <Reveal className="motion-reveal">
          <p className="cloud-note">Não encontrou a sua no desenho? Se a ferramenta tem API, webhook ou exportação, existe caminho de integração — conte como ela entra na rotina em uma conversa com o nosso time.</p>
        </Reveal>
      </div>
    </section>
  );
}
