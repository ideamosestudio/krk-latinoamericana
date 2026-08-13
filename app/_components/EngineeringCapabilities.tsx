"use client";

import { useLanguage, type LocalizedText } from "./LanguageProvider";
import { ProductCarousel, type ProductImage } from "./ProductCarousel";

type Kind = "concept" | "basic" | "detail" | "mechanical" | "structural" | "procurement" | "manufacturing" | "site";
type Capability = { title: LocalizedText; copy: LocalizedText; kind: Kind; images: ProductImage[] };

const capabilities: Capability[] = [
  { kind: "concept", title: { es: "Ingeniería Conceptual", en: "Conceptual Engineering" }, copy: { es: "Definición del proceso, estudios de factibilidad, layouts y selección de equipos.", en: "Process definition, feasibility studies, layouts and equipment selection." }, images: [
    { file: "PORTADA-003.jpg", caption: { es: "Planificación y definición del proceso", en: "Process planning and definition" } },
    { file: "IMG-009.jpg", caption: { es: "Evaluación integral del sistema", en: "Integrated system assessment" } },
  ] },
  { kind: "basic", title: { es: "Ingeniería Básica", en: "Basic Engineering" }, copy: { es: "Criterios de diseño, planos generales y especificaciones técnicas.", en: "Design criteria, general arrangements and technical specifications." }, images: [
    { file: "IMG-009.jpg", caption: { es: "Criterios y especificaciones de proyecto", en: "Project criteria and specifications" } },
    { file: "PORTADA-003.jpg", caption: { es: "Disposición general de instalaciones", en: "General arrangement of facilities" } },
  ] },
  { kind: "detail", title: { es: "Ingeniería de Detalle", en: "Detailed Engineering" }, copy: { es: "Planos de fabricación, sistemas transportadores, estructuras metálicas y estaciones de transferencia.", en: "Manufacturing drawings, conveyor systems, steel structures and transfer stations." }, images: [
    { file: "conveyor-components/conveyor-structures-01.webp", caption: "Minera EXAR — Salar de Cauchari" },
    { file: "conveyor-components/galleries-transfer-towers-01.webp", caption: "Pier Doce — Necochea" },
  ] },
  { kind: "mechanical", title: { es: "Diseño Mecánico", en: "Mechanical Design" }, copy: { es: "Cálculos de transportadores, dimensionamiento de equipos e integración del sistema.", en: "Conveyor calculations, equipment sizing and system integration." }, images: [
    { file: "conveyor-components/conveyor-pulleys-01.webp", caption: { es: "Cálculo e integración de equipos", en: "Equipment calculation and integration" } },
    { file: "conveyor-components/idlers-frames-02.webp", caption: { es: "Diseño de componentes mecánicos", en: "Mechanical component design" } },
  ] },
  { kind: "structural", title: { es: "Ingeniería Estructural", en: "Structural Engineering" }, copy: { es: "Diseño y cálculo de estructuras para sistemas transportadores.", en: "Structural design and calculations for conveyor steelwork." }, images: [
    { file: "conveyor-components/galleries-transfer-towers-01.webp", caption: "Pier Doce — Necochea" },
    { file: "conveyor-components/conveyor-structures-01.webp", caption: "Minera EXAR — Salar de Cauchari" },
  ] },
  { kind: "procurement", title: { es: "Soporte a Compras", en: "Procurement Support" }, copy: { es: "Evaluación técnica de ofertas y soporte a proveedores.", en: "Technical bid evaluation and vendor support." }, images: [
    { file: "bulk-equipment/belt-conveyors-01.webp", caption: "Molinos Agro — San Lorenzo" },
    { file: "PORTADA-006.jpg", caption: { es: "Evaluación técnica de soluciones", en: "Technical solution assessment" } },
  ] },
  { kind: "manufacturing", title: { es: "Soporte a Fabricación", en: "Manufacturing Support" }, copy: { es: "QA/QC, inspecciones y seguimiento de fabricación.", en: "QA/QC, inspections and expediting." }, images: [
    { file: "conveyor-components/idlers-frames-02.webp", caption: { es: "Control de calidad y seguimiento", en: "Quality control and expediting" } },
    { file: "conveyor-components/conveyor-pulleys-01.webp", caption: { es: "Inspección de componentes", en: "Component inspection" } },
  ] },
  { kind: "site", title: { es: "Ingeniería en Campo", en: "Site Engineering" }, copy: { es: "Supervisión de montaje, puesta en marcha y asistencia técnica.", en: "Installation supervision, commissioning and technical assistance." }, images: [
    { file: "PORTADA-006.jpg", caption: { es: "Supervisión y puesta en marcha", en: "Site supervision and commissioning" } },
    { file: "PORTADA-003.jpg", caption: { es: "Asistencia técnica en obra", en: "Technical site assistance" } },
  ] },
];
const engineeringTools = [
  "AutoCAD", "SolidWorks", "Autodesk Inventor", "Tekla Structures", "Belt Analyst",
  "BeltStat", "Rocky DEM", "Microsoft Project", "Power BI",
];

const deliverables: LocalizedText[] = [
  { es: "Estudios conceptuales", en: "Conceptual Studies" },
  { es: "Ingeniería básica", en: "Basic Engineering" },
  { es: "Ingeniería de detalle", en: "Detailed Engineering" },
  { es: "Planos de disposición general", en: "General Arrangement Drawings" },
  { es: "Cálculos mecánicos", en: "Mechanical Calculations" },
  { es: "Cálculos estructurales", en: "Structural Calculations" },
  { es: "Cálculos de transportadores", en: "Conveyor Calculations" },
  { es: "Hojas de datos de equipos", en: "Equipment Datasheets" },
  { es: "Especificaciones técnicas", en: "Technical Specifications" },
  { es: "Requisiciones de materiales", en: "Material Requisitions" },
  { es: "Evaluaciones técnicas de ofertas", en: "Technical Bid Evaluations" },
];
export function EngineeringCapabilities() {
  const { language } = useLanguage();
  const text = language === "es" ? {
    eyebrow: "CAPACIDADES DE INGENIERÍA", title: "Ingeniería para cada", accent: "etapa del proyecto.", item: "CAPACIDAD",
    toolsEyebrow: "HERRAMIENTAS DE INGENIERÍA", toolsTitle: "Tecnología para diseñar", toolsAccent: "con precisión.",
    toolsCopy: "Nuestras capacidades de ingeniería se apoyan en plataformas de software reconocidas internacionalmente para el diseño de transportadores, análisis estructural, ingeniería mecánica, simulación DEM y gestión de proyectos, permitiendo una ejecución eficiente y confiable de cada proyecto.",
    deliverablesEyebrow: "ENTREGABLES TÍPICOS", deliverablesTitle: "Documentación que convierte", deliverablesAccent: "ingeniería en ejecución.",
    deliverablesCopy: "Nuestros entregables de ingeniería constituyen la base técnica de cada etapa del proyecto, desde los estudios conceptuales hasta la documentación conforme a obra (As-Built). Desarrollados bajo estándares internacionales de ingeniería, respaldan las compras, la fabricación, la construcción y la ejecución exitosa de cada proyecto.",
  } : {
    eyebrow: "ENGINEERING CAPABILITIES", title: "Engineering for every", accent: "project stage.", item: "CAPABILITY",
    toolsEyebrow: "ENGINEERING TOOLS", toolsTitle: "Technology engineered", toolsAccent: "for precision.",
    toolsCopy: "Our engineering capabilities are supported by internationally recognized software platforms for conveyor design, structural analysis, mechanical engineering, DEM simulation and project management, enabling efficient and reliable project execution.",
    deliverablesEyebrow: "TYPICAL ENGINEERING DELIVERABLES", deliverablesTitle: "Documentation that turns", deliverablesAccent: "engineering into execution.",
    deliverablesCopy: "Our engineering deliverables provide the technical foundation for every project stage, from conceptual studies to final as-built documentation. Developed to international engineering standards, they support procurement, manufacturing, construction and successful project execution.",
  };
  return <section className="engineering-capabilities" id="capacidades">
    <div className="container engineering-capabilities-heading"><div className="eyebrow light"><span /> {text.eyebrow}</div><h2>{text.title}<br/><em>{text.accent}</em></h2></div>
    <div className="container engineering-capability-rows">{capabilities.map((capability,index)=>{const number=String(index+1).padStart(2,"0");const title=capability.title[language];return <article className="product-row engineering-capability-row" key={capability.kind}><div className="product-number">KRK / {number}</div><ProductCarousel images={capability.images} title={title}/><div className="product-text"><small>{text.item} / {number}</small><h2>{title}</h2><div className="product-copy-selected"><b>{language.toUpperCase()}</b><p>{capability.copy[language]}</p></div></div></article>})}</div>
    <div className="container engineering-tools-section">
      <div className="engineering-subsection-heading"><div className="eyebrow light"><span /> {text.toolsEyebrow}</div><div><h2>{text.toolsTitle}<br/><em>{text.toolsAccent}</em></h2><p className="engineering-subsection-intro">{text.toolsCopy}</p></div></div>
      <div className="engineering-tools-grid">{engineeringTools.map((tool,index)=><div className="engineering-tool" key={tool}><span>{String(index+1).padStart(2,"0")}</span><strong>{tool}</strong><i aria-hidden="true" /></div>)}</div>
      <div className="engineering-tools-marquee" aria-hidden="true"><div className="engineering-tools-track">{[...engineeringTools,...engineeringTools].map((tool,index)=><span key={`${tool}-${index}`}><i />{tool}</span>)}</div></div>
    </div>
    <div className="container engineering-deliverables-section">
      <div className="engineering-subsection-heading"><div className="eyebrow light"><span /> {text.deliverablesEyebrow}</div><div><h2>{text.deliverablesTitle}<br/><em>{text.deliverablesAccent}</em></h2><p className="engineering-subsection-intro engineering-subsection-intro-dark">{text.deliverablesCopy}</p></div></div>
      <ol className="engineering-deliverables-list">{deliverables.map((deliverable,index)=><li key={deliverable.en}><span>{String(index+1).padStart(2,"0")}</span><strong>{deliverable[language]}</strong><i aria-hidden="true">↗</i></li>)}</ol>
    </div>
  </section>;
}
