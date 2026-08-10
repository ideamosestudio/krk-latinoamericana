"use client";

import { InnerHero, InnerShell, base } from "../_components/InnerShell";
import { ClientLogoStrip } from "../_components/ClientLogoStrip";
import { selectText, useLanguage, type LocalizedText } from "../_components/LanguageProvider";

const services: { n: string; title: LocalizedText; slug: string; copy: LocalizedText }[] = [
  { n: "01", title: { es: "Equipos para manejo de materiales a granel", en: "Bulk material handling equipment" }, slug: "bulk-material-handling-equipment", copy: { es: "Sistemas y equipos para transporte continuo de materiales a granel.", en: "Systems and equipment for continuous bulk material conveying." } },
  { n: "02", title: { es: "Componentes para transportadores", en: "Conveyor components" }, slug: "conveyor-components", copy: { es: "Componentes diseñados para maximizar confiabilidad y desempeño.", en: "Components engineered to maximize reliability and performance." } },
  { n: "03", title: { es: "Sistemas portuarios y mineros", en: "Port and mining systems" }, slug: "port-and-mining-systems", copy: { es: "Sistemas integrados para minería, puertos e instalaciones industriales.", en: "Integrated systems for mining, ports and industrial facilities." } },
  { n: "04", title: { es: "Servicios de ingeniería y proyectos", en: "Engineering and project services" }, slug: "engineering-and-project-services", copy: { es: "Ingeniería y gestión integral para una ejecución exitosa.", en: "Integrated engineering and management for successful execution." } },
];

const copy = {
  es: { eyebrow: "PRODUCTOS Y SERVICIOS", title: "Soluciones integrales para", accent: "materiales a granel.", capabilities: "CAPACIDADES", heading: "PRODUCTOS Y", headingAccent: "SERVICIOS.", intro: "Equipos, componentes e ingeniería para operaciones industriales, mineras y portuarias." },
  en: { eyebrow: "PRODUCTS AND SERVICES", title: "Integrated solutions for", accent: "bulk materials.", capabilities: "CAPABILITIES", heading: "PRODUCTS AND", headingAccent: "SERVICES.", intro: "Equipment, components and engineering for industrial, mining and port operations." },
} as const;

export default function Servicios() {
  const { language } = useLanguage();
  const text = copy[language];
  return <InnerShell><InnerHero eyebrow={text.eyebrow} title={text.title} accent={text.accent} image="BACK-002.jpg" /><section className="services-page section" id="contenido"><div className="container"><div className="services-page-title"><div className="eyebrow"><span /> {text.capabilities}</div><h2>{text.heading}<br /><em>{text.headingAccent}</em></h2></div><div className="services-page-head"><p>{text.intro}</p></div><div className="services-page-list">{services.map((service) => <a href={`${base}/servicios/${service.slug}/`} key={service.slug}><span>{service.n}</span><div><h2>{selectText(service.title, language)}</h2><p>{selectText(service.copy, language)}</p></div><i>↗</i></a>)}</div></div></section><ClientLogoStrip /></InnerShell>;
}
