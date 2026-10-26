# Ê-Sistemas — Site institucional

Site institucional da **Ê-Sistemas**, construído com Next.js (App Router) e TypeScript.

## Stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript 5**
- **Leaflet** (mapa da unidade E-Control)
- **ESLint** com `eslint-config-next`

## Como rodar

```bash
npm install      # instala as dependências
npm run dev      # servidor de desenvolvimento (http://localhost:3000)
npm run build    # build de produção
npm run start    # servidor de produção
npm run lint     # lint
```

## Páginas

| Rota | Conteúdo |
| --- | --- |
| `/` | Apresentação institucional, pilares, soluções, produtos, cases, processo e contato |
| `/sobre` | História, linha do tempo, galeria, reconhecimentos e parceiros |
| `/solucoes` | Sistemas sob medida, aplicativos, integrações, automação/IA e metodologia |
| `/produtos` | Visão geral do ecossistema Ê-Bot |
| `/produtos/ebot-panel-api` | Ê-Bot Panel + API |
| `/produtos/ebot-clinical` | Ê-Bot Clinical |
| `/produtos/ebot-explorer` | Ê-Bot Explorer |
| `/cases` | Apresentação dos projetos |
| `/cases/leiloae` | Case Leiloae |
| `/cases/e-control` | Case E-Control |
| `/contato` | Canais oficiais e primeira conversa |

Suporte: `not-found.tsx`, `sitemap.ts` e `robots.ts`; metadados específicos por página.

## Estrutura

```
src/
  app/            # layout, rotas, template de transição, estilos globais, SEO
  components/     # componentes de UI (Hero, Navbar, Footer, PageHero, CTA...)
  components/sections/      # seções compartilhadas entre páginas
  components/products/      # cards e detalhes dos produtos Ê-Bot
  components/cases/         # cases Leiloae e E-Control
  content/        # dados centralizados (site, produtos, cases)
  hooks/          # hooks (useReducedMotion)
  lib/            # utilitários, rotas internas e links
public/           # imagens e vídeos estáticos
```

## Observações

- A pasta `.referencias` é material de apoio local e está no `.gitignore` — não vai para o repositório.
- `.next/`, `node_modules/` e `*.tsbuildinfo` também são ignorados.
- Contatos, reconhecimentos e logos seguem sinalizados como demonstrativos até validação final.
- `SITE.url` (em `src/content/site.ts`) precisa ser confirmado antes da publicação.
