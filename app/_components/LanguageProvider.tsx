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
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const pageMetadata = {
  "/": {
    es: {
      title: "KRK Latinoamericana | Ingeniería en movimiento",
      description: "Ingeniería, fabricación y ejecución de sistemas para transporte de materiales a granel en minería, puertos, agroindustria, energía e industria.",
    },
    en: {
      title: "KRK Latinoamericana | Engineering in motion",
      description: "Engineering, manufacturing and execution of bulk material handling systems for mining, ports, agribusiness, energy and industrial operations.",
    },
  },
  "/quienes-somos/": {
    es: { title: "Quiénes somos | KRK Latinoamericana", description: "Trayectoria, capacidad técnica y experiencia de KRK Latinoamericana en sistemas para manejo de materiales a granel." },
    en: { title: "About us | KRK Latinoamericana", description: "KRK Latinoamericana's track record, technical capabilities and experience in bulk material handling systems." },
  },
  "/servicios/": {
    es: { title: "Productos y servicios | KRK Latinoamericana", description: "Equipos, componentes, sistemas portuarios y mineros, e ingeniería integral para el manejo de materiales a granel." },
    en: { title: "Products and services | KRK Latinoamericana", description: "Equipment, components, port and mining systems, and integrated engineering for bulk material handling." },
  },
  "/servicios/bulk-material-handling-equipment/": {
    es: { title: "Equipos para manejo de materiales a granel | KRK", description: "Cintas transportadoras, conveyors, elevadores, alimentadores y equipos para transporte continuo de materiales." },
    en: { title: "Bulk material handling equipment | KRK", description: "Belt, overland and pipe conveyors, elevators, feeders and equipment for continuous material handling." },
  },
  "/servicios/conveyor-components/": {
    es: { title: "Componentes para transportadores | KRK", description: "Rodillos, poleas, estructuras, limpieza de bandas, chutes y tolvas para sistemas transportadores." },
    en: { title: "Conveyor components | KRK", description: "Idlers, pulleys, structures, belt cleaning solutions, transfer chutes and hoppers." },
  },
  "/servicios/port-and-mining-systems/": {
    es: { title: "Sistemas portuarios y mineros | KRK", description: "Sistemas integrados para granos, litio, minerales, carbón, acopio, recepción y transferencia." },
    en: { title: "Port and mining systems | KRK", description: "Integrated systems for grain, lithium, minerals, coal, stockpiling, receiving and transfer." },
  },
  "/servicios/engineering-and-project-services/": {
    es: { title: "Servicios de ingeniería y proyectos | KRK", description: "Ingeniería conceptual, básica y de detalle, diseño, compras, fabricación, QA/QC y asistencia en obra." },
    en: { title: "Engineering and project services | KRK", description: "Conceptual, basic and detailed engineering, design, procurement, manufacturing, QA/QC and site support." },
  },
} satisfies Record<string, Record<Language, { title: string; description: string }>>;

export function selectText(value: LocalizedText | string, language: Language) {
  return typeof value === "string" ? value : value[language];
}

function currentMetadata(language: Language) {
  const withoutBase = window.location.pathname.startsWith(basePath)
    ? window.location.pathname.slice(basePath.length) || "/"
    : window.location.pathname;
  const normalized = withoutBase === "/" ? "/" : `${withoutBase.replace(/\/$/, "")}/`;
  return pageMetadata[normalized as keyof typeof pageMetadata]?.[language] ?? pageMetadata["/"][language];
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

    const metadata = currentMetadata(language);
    document.documentElement.lang = language;
    document.documentElement.dataset.language = language;
    window.localStorage.setItem(STORAGE_KEY, language);
    document.title = metadata.title;

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    description?.setAttribute("content", metadata.description);

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
