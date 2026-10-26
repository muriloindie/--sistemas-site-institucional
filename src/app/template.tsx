/**
 * `template.tsx` remonta a cada navegação entre rotas — a animação CSS roda
 * a cada troca de página, sem bibliotecas extras.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-view">{children}</div>;
}
