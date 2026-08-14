"use client";

import { useLanguage, type LocalizedText } from "./LanguageProvider";

type Kind = "concept" | "basic" | "detail" | "mechanical" | "structural" | "procurement" | "manufacturing" | "site";
type Capability = { title: LocalizedText; copy: LocalizedText; kind: Kind };

const capabilities: Capability[] = [
  { kind: "concept", title: { es: "Ingeniería Conceptual", en: "Conceptual Engineering" }, copy: { es: "Definición del proceso, estudios de factibilidad, layouts y selección de equipos.", en: "Process definition, feasibility studies, layouts and equipment selection." } },
  { kind: "basic", title: { es: "Ingeniería Básica", en: "Basic Engineering" }, copy: { es: "Criterios de diseño, planos generales y especificaciones técnicas.", en: "Design criteria, general arrangements and technical specifications." } },
  { kind: "detail", title: { es: "Ingeniería de Detalle", en: "Detailed Engineering" }, copy: { es: "Planos de fabricación, sistemas transportadores, estructuras metálicas y estaciones de transferencia.", en: "Manufacturing drawings, conveyor systems, steel structures and transfer stations." } },
  { kind: "mechanical", title: { es: "Diseño Mecánico", en: "Mechanical Design" }, copy: { es: "Cálculos de transportadores, dimensionamiento de equipos e integración del sistema.", en: "Conveyor calculations, equipment sizing and system integration." } },
  { kind: "structural", title: { es: "Ingeniería Estructural", en: "Structural Engineering" }, copy: { es: "Diseño y cálculo de estructuras para sistemas transportadores.", en: "Structural design and calculations for conveyor steelwork." } },
  { kind: "procurement", title: { es: "Soporte a Compras", en: "Procurement Support" }, copy: { es: "Evaluación técnica de ofertas y soporte a proveedores.", en: "Technical bid evaluation and vendor support." } },
  { kind: "manufacturing", title: { es: "Soporte a Fabricación", en: "Manufacturing Support" }, copy: { es: "QA/QC, inspecciones y seguimiento de fabricación.", en: "QA/QC, inspections and expediting." } },
  { kind: "site", title: { es: "Ingeniería en Campo", en: "Site Engineering" }, copy: { es: "Supervisión de montaje, puesta en marcha y asistencia técnica.", en: "Installation supervision, commissioning and technical assistance." } },
];
const engineeringTools = [
  "AutoCAD", "SolidWorks", "Autodesk Inventor", "Tekla Structures", "Belt Analyst",
  "BeltStat", "Rocky DEM", "Microsoft Project", "Power BI",
];

export function EngineeringCapabilities() {
  const { language } = useLanguage();
  const text = language === "es" ? {
    eyebrow: "CAPACIDADES DE INGENIERÍA", title: "Ingeniería para cada", accent: "etapa del proyecto.",
  } : {
    eyebrow: "ENGINEERING CAPABILITIES", title: "Engineering for every", accent: "project stage.",
  };
  return <section className="engineering-capabilities" id="capacidades">
    <div className="engineering-capability-stage">
      <div className="container">
        <div className="engineering-capabilities-heading"><div className="eyebrow light"><span /> {text.eyebrow}</div><h2>{text.title}<br/><em>{text.accent}</em></h2></div>
        <ol className="engineering-capability-list">{capabilities.map((capability,index)=>{const number=String(index+1).padStart(2,"0");return <li key={capability.kind}><span>{number}</span><div><h3>{capability.title[language]}</h3><p>{capability.copy[language]}</p></div><i aria-hidden="true">↗</i></li>})}</ol>
      </div>
    </div>
    <div className="engineering-tools-marquee" aria-hidden="true"><div className="engineering-tools-track">{[...engineeringTools,...engineeringTools].map((tool,index)=><span key={`${tool}-${index}`}><i />{tool}</span>)}</div></div>
  </section>;
}
