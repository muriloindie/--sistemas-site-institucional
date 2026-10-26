import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ExitLinkProvider } from "@/components/ExitLink";
import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsentPreview from "@/components/CookieConsentPreview";
import { SITE } from "@/content/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Ê-Sistemas — Software, integrações e produtos digitais",
    template: "%s — Ê-Sistemas",
  },
  description: SITE.description,
  openGraph: {
    title: SITE.name,
    description: SITE.description,
    type: "website",
    locale: "pt_BR",
    siteName: SITE.name,
  },
  icons: [{ url: "/logo-esistemas.webp", type: "image/webp" }],
};

export const viewport: Viewport = {
  themeColor: "#f6f8f5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>
        <ExitLinkProvider>
          <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
          <Navbar />
          <main id="conteudo">
            {children}
          </main>
          <Footer />
          <CookieConsentPreview />
        </ExitLinkProvider>
        <SplashScreen />
      </body>
    </html>
  );
}
