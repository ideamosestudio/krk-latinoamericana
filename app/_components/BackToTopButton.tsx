"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";

export function BackToTopButton() {
  const { language } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 560);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  const label = language === "es" ? "Volver arriba" : "Go to top";

  return <button
    className={`back-to-top${visible ? " is-visible" : ""}`}
    type="button"
    aria-label={label}
    tabIndex={visible ? 0 : -1}
    onClick={() => window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    })}
  >
    <span>{label}</span>
    <i aria-hidden="true">↑</i>
  </button>;
}
