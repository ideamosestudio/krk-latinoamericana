"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Language = "es" | "en";
export type LocalizedText = { es: string; en: string };

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const STORAGE_KEY = "krk-language";

const metadata = {
  es: {
    title: "KRK Latinoamericana | Ingeniería en movimiento",
    description: "Ingeniería, fabricación y ejecución de sistemas para transporte de materiales a granel en minería, puertos, agroindustria, energía e industria.",
  },
  en: {
    title: "KRK Latinoamericana | Engineering in motion",
    description: "Engineering, manufacturing and execution of bulk material handling systems for mining, ports, agribusiness, energy and industrial operations.",
  },
} satisfies Record<Language, { title: string; description: string }>;

export function selectText(value: LocalizedText | string, language: Language) {
  return typeof value === "string" ? value : value[language];
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const queryLanguage = new URLSearchParams(window.location.search).get("lang");
    const storedLanguage = window.localStorage.getItem(STORAGE_KEY);
    const browserLanguage: Language = window.navigator.language.toLowerCase().startsWith("en") ? "en" : "es";
    const initialLanguage: Language = queryLanguage === "en" || queryLanguage === "es"
      ? queryLanguage
      : storedLanguage === "en" || storedLanguage === "es"
        ? storedLanguage
        : browserLanguage;

    const frame = window.requestAnimationFrame(() => {
      setLanguage(initialLanguage);
      setHydrated(true);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    document.documentElement.lang = language;
    document.documentElement.dataset.language = language;
    window.localStorage.setItem(STORAGE_KEY, language);
    document.title = metadata[language].title;

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    description?.setAttribute("content", metadata[language].description);

    const url = new URL(window.location.href);
    if (language === "en") url.searchParams.set("lang", "en");
    else url.searchParams.delete("lang");
    window.history.replaceState(window.history.state, "", `${url.pathname}${url.search}${url.hash}`);
  }, [hydrated, language]);

  const value = useMemo(() => ({ language, setLanguage }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
