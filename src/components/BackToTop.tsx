"use client";

import { useEffect, useState } from "react";
import { IconArrow } from "@/components/icons";

/** Botão discreto de voltar ao topo, visível depois da primeira dobra. */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      className={`back-to-top ${visible ? "is-visible" : ""}`}
      onClick={scrollTop}
      aria-label="Voltar ao topo da página"
    >
      <IconArrow />
    </button>
  );
}
