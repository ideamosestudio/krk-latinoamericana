"use client";

import { useLanguage } from "./LanguageProvider";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const clients = [
  ["Barrick", "barrick.png"], ["Glencore", "glencore.png"], ["Veladero", "veladero.png"],
  ["Mansfield Minera", "mansfield.png"], ["LDC", "ldc.png"], ["Bunge", "bunge.png"],
  ["Molinos Agro", "molinos.png"], ["ADM", "adm.png"], ["Puerto Las Losas", "pll.png"],
  ["Puerto Ventanas", "pvsa.png"], ["YPF", "ypf.png"],
];

export function ClientLogoStrip() {
  const { language } = useLanguage();
  const text = language === "es"
    ? { trusted: "EMPRESAS QUE CONFÍAN EN KRK", projects: "CLIENTES & PROYECTOS", aria: "Empresas que confían en KRK" }
    : { trusted: "COMPANIES THAT TRUST KRK", projects: "CLIENTS & PROJECTS", aria: "Companies that trust KRK" };
  return <section className="trust trust-service" aria-label={text.aria}><div className="container trust-head"><span>{text.trusted}</span><span>{text.projects}</span></div><div className="logo-marquee"><div className="logo-track">{[...clients, ...clients].map(([name, file], index) => <div className="client-logo" key={`${name}-${index}`}><img src={`${base}/logos/${file}`} alt={name} /></div>)}</div></div></section>;
}
