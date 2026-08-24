"use client";

import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { selectText, useLanguage, type LocalizedText } from "./LanguageProvider";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const footerCopy = {
  es: { description: "Ingeniería, fabricación y ejecución de sistemas para transporte de materiales a granel.", top: "VOLVER ARRIBA ↑", offices: "OFICINAS COMERCIALES", officeAddress: <>Monroe 5088 (CP1431). Piso 3.<br />Ciudad Autónoma de Buenos Aires, Argentina.<br />Tel +54 11 6841-7800</>, plant: "PLANTA INDUSTRIAL", plantAddress: <>Av. Nicolás Bruzone 1136 (B1838BHD).<br />Provincia de Buenos Aires, Argentina.</>, navigation: "NAVEGACIÓN", about: "Quiénes somos", services: "Productos y servicios", industries: "Industrias", presence: "PRESENCIA", countriesLine1: "Argentina · Chile · Brasil", countriesLine2: "Paraguay · Uruguay" },
  en: { description: "Engineering, manufacturing and execution of bulk material handling systems.", top: "BACK TO TOP ↑", offices: "COMMERCIAL OFFICES", officeAddress: <>Monroe 5088 (CP1431), 3rd floor.<br />Autonomous City of Buenos Aires, Argentina.<br />Tel +54 11 6841-7800</>, plant: "INDUSTRIAL PLANT", plantAddress: <>Av. Nicolás Bruzone 1136 (B1838BHD).<br />Buenos Aires Province, Argentina.</>, navigation: "NAVIGATION", about: "About us", services: "Products and services", industries: "Industries", presence: "PRESENCE", countriesLine1: "Argentina · Chile · Brazil", countriesLine2: "Paraguay · Uruguay" },
};

export function SiteFooter() {
  const { language } = useLanguage();
  const text = footerCopy[language];
  return <footer><div className="container footer-top"><div className="footer-brand"><img src={`${base}/images/KRK-LOGO-BLANCO-3.png`} alt="KRK Latinoamericana" loading="lazy" decoding="async" /><p>{text.description}</p></div><a href="#top">{text.top}</a></div><div className="container footer-grid"><div><b>{text.offices}</b><p>{text.officeAddress}</p></div><div><b>{text.plant}</b><p>{text.plantAddress}</p></div><div><b>{text.navigation}</b><p><a href={`${base}/quienes-somos/`}>{text.about}</a><br /><a href={`${base}/servicios/`}>{text.services}</a><br /><a href={`${base}/#sectores`}>{text.industries}</a></p></div><div><b>{text.presence}</b><p>{text.countriesLine1}<br />{text.countriesLine2}</p></div></div><div className="container footer-bottom"><span>© 2026 KRK LATINOAMERICANA S.A.</span><span>MOVING WHAT MATTERS</span></div></footer>;
}

export function InnerHero({ eyebrow, title, accent, image, description }: { eyebrow: LocalizedText | string; title: LocalizedText | string; accent?: LocalizedText | string; image: string; description?: LocalizedText | string }) {
  const { language } = useLanguage();
  const actions = language === "es" ? { explore: "Explorar contenido", project: "Iniciar un proyecto" } : { explore: "Explore content", project: "Start a project" };
  return <section className="inner-hero" id="top"><img src={`${base}/images/${image}`} alt="" fetchPriority="high" decoding="async" /><div className="inner-hero-shade" /><div className="inner-hero-grid" /><div className="container inner-hero-content"><div className="hero-kicker"><span>{selectText(eyebrow, language)}</span></div><h1><span>{selectText(title, language)}</span>{accent && <em>{selectText(accent, language)}</em>}</h1>{description && <p>{selectText(description, language)}</p>}<div className="inner-hero-actions"><a href="#contenido">{actions.explore} <i>↗</i></a><a href={`${base}/#contacto`}><i>↓</i> {actions.project}</a></div></div><div className="hero-tech hero-tech-b"><span>KRK / {language === "es" ? "CAPACIDADES" : "CAPABILITIES"}</span><i /></div></section>;
}

export function InnerShell({ children }: { children: ReactNode }) {
  return <main><SiteHeader />{children}<SiteFooter /></main>;
}

export { base };
