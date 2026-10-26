import type { Metadata } from "next";
import FinalCTA from "@/components/sections/FinalCTA";
import ContactNextStep from "@/components/ContactNextStep";
import { ContactFlow, ContactFAQ } from "@/components/sections/ContactContent";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a Ê-Sistemas por WhatsApp ou e-mail: entenda o fluxo do primeiro contato, o que acontece depois da conversa e as perguntas mais comuns.",
};

export default function ContatoPage() {
  return (
    <>
      <FinalCTA asPage />
      <ContactNextStep />
      <ContactFlow />
      <ContactFAQ />
    </>
  );
}
