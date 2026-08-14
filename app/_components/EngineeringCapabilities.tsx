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
    eyebrow: "CAPACIDADES DE INGENIERÍA",
    title: "Ingeniería y gestión para",
    accent: "ejecución integral.",
    description: "Desarrollamos ingeniería conceptual, básica y de detalle para sistemas de manejo de materiales a granel, integrando diseño mecánico y estructural, especificaciones técnicas, soporte a compras, gestión de fabricación, QA/QC y asistencia durante el montaje y la puesta en marcha. Nuestro enfoque combina capacidad técnica, experiencia en terreno y una visión integral del proyecto para reducir riesgos y optimizar la ejecución.",
  } : {
    eyebrow: "ENGINEERING CAPABILITIES",
    title: "Engineering and management for",
    accent: "end-to-end execution.",
    description: "We develop conceptual, basic and detailed engineering for bulk material handling systems, integrating mechanical and structural design, technical specifications, procurement support, manufacturing management, QA/QC and site assistance during installation and commissioning. Our approach combines engineering expertise, field experience and project integration to reduce risk and optimize execution.",
  };
  return <section className="engineering-capabilities" id="capacidades">
    <div className="engineering-tools-marquee" aria-hidden="true"><div className="engineering-tools-track">{[...engineeringTools,...engineeringTools].map((tool,index)=><span key={`${tool}-${index}`}><i />{tool}</span>)}</div></div>
    <div className="engineering-capability-stage">
      <div className="container engineering-capabilities-layout">
        <div className="engineering-capabilities-intro">
          <div className="eyebrow light"><span /> {text.eyebrow}</div>
          <h2>{text.title}<br/><em>{text.accent}</em></h2>
          <p>{text.description}</p>
        </div>
        <ol className="engineering-capability-list">{capabilities.map((capability,index)=>{const number=String(index+1).padStart(2,"0");return <li key={capability.kind}><span>{number}</span><div><h3>{capability.title[language]}</h3><p>{capability.copy[language]}</p></div><i aria-hidden="true">↗</i></li>})}</ol>
      </div>
    </div>
  </section>;
}
