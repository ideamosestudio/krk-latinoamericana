"use client";

import { InnerHero, InnerShell, base } from "../_components/InnerShell";
import { useLanguage } from "../_components/LanguageProvider";

const copy = {
  es: { eyebrow: "QUIÉNES SOMOS", title: "Una empresa enfocada en", accent: "ingeniería y movimiento.", since: "DESDE 2001", aside: "Desarrollando sistemas de manejo de materiales a granel.", heading: "Experiencia, capacidad técnica y", headingAccent: "ejecución integral.", p1: "KRK Latinoamericana S.A. es una empresa de capitales argentinos especializada en ingeniería, fabricación y ejecución de proyectos para el manejo de materiales a granel.", p2: "Desde 2001 participamos en proyectos de distinta escala y complejidad, integrando estudios de factibilidad, ingeniería conceptual, diseño de detalle, fabricación, suministro, montaje y puesta en marcha. Nuestra experiencia, capacidad técnica y red de fabricación nos permite acompañar a cada cliente con soluciones confiables, competitivas y adaptadas a las exigencias de su operación.", button: "Conocer servicios" },
  en: { eyebrow: "ABOUT US", title: "A company focused on", accent: "engineering and movement.", since: "SINCE 2001", aside: "Developing bulk material handling systems.", heading: "Experience, technical capability and", headingAccent: "end-to-end execution.", p1: "KRK Latinoamericana S.A. is an Argentine-owned company specializing in engineering, manufacturing and project execution for bulk material handling.", p2: "Since 2001, we have participated in projects of varying scale and complexity, integrating feasibility studies, conceptual engineering, detailed design, manufacturing, supply, assembly and commissioning. Our experience, technical capabilities and manufacturing network allow us to support every client with reliable, competitive solutions tailored to their operating requirements.", button: "Explore services" },
} as const;

export default function QuienesSomos() {
  const { language } = useLanguage();
  const text = copy[language];
  return <InnerShell><InnerHero eyebrow={text.eyebrow} title={text.title} accent={text.accent} image="quienes-somos-hero.webp" /><section className="about-page section" id="contenido"><div className="container about-page-grid"><aside><div className="eyebrow"><span /> {text.since}</div><p>{text.aside}</p></aside><div><h2>{text.heading} <em>{text.headingAccent}</em></h2><div className="about-columns"><p>{text.p1}</p><p>{text.p2}</p></div><a className="detail-cta dark" href={`${base}/servicios/`}>{text.button} <i>↗</i></a></div></div></section></InnerShell>;
}
