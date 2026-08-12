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
function Diagram({ kind }: { kind: Kind }) {
  if (kind === "concept") return <svg viewBox="0 0 520 240" aria-hidden="true"><g className="ec-grid"><path d="M40 54H480M40 104H480M40 154H480M40 204H480M100 30V220M200 30V220M300 30V220M400 30V220" /></g><path className="ec-flow" d="M58 190C124 190 128 72 202 72S278 174 344 174 402 58 462 58"/><g className="ec-nodes"><circle cx="58" cy="190" r="8"/><circle cx="202" cy="72" r="8"/><circle cx="344" cy="174" r="8"/><circle cx="462" cy="58" r="8"/></g><circle className="ec-runner concept-runner" cx="58" cy="190" r="6"/><g className="ec-label"><text x="58" y="218">INPUT</text><text x="202" y="50" textAnchor="middle">FEASIBILITY</text><text x="344" y="202" textAnchor="middle">LAYOUT</text><text x="462" y="36" textAnchor="end">SOLUTION</text></g></svg>;
  if (kind === "basic") return <svg viewBox="0 0 520 240" aria-hidden="true"><g className="ec-blueprint"><rect x="92" y="38" width="336" height="166" rx="3"/><path d="M118 64H402M118 92H228V178H118ZM256 92H402V138H256ZM256 154H324V178H256ZM340 154H402V178H340ZM92 24H428M78 38V204"/></g><path className="ec-scan" d="M106 52V190"/><g className="ec-label"><text x="260" y="18" textAnchor="middle">GENERAL ARRANGEMENT</text><text x="62" y="122" textAnchor="middle" transform="rotate(-90 62 122)">DESIGN CRITERIA</text></g></svg>;
  if (kind === "detail") return <svg viewBox="0 0 520 240" aria-hidden="true"><g className="ec-model"><path d="M112 174L260 88 408 174 260 218ZM112 174V112L260 28 408 112V174M260 28V218M112 112L260 158 408 112M260 88L112 174M260 88L408 174"/></g><g className="ec-joints"><circle cx="112" cy="112" r="5"/><circle cx="260" cy="28" r="5"/><circle cx="408" cy="112" r="5"/><circle cx="112" cy="174" r="5"/><circle cx="260" cy="218" r="5"/><circle cx="408" cy="174" r="5"/><circle cx="260" cy="158" r="5"/></g><ellipse className="ec-orbit" cx="260" cy="126" rx="212" ry="108"/></svg>;
  if (kind === "mechanical") return <svg viewBox="0 0 520 240" aria-hidden="true"><g className="ec-mechanical"><circle cx="260" cy="120" r="72"/><circle cx="260" cy="120" r="33"/><path d="M260 28V50M260 190V212M168 120H190M330 120H352M194 54L211 72M309 168L326 186M194 186L211 168M309 72L326 54"/><path className="ec-rotation" d="M234 101A33 33 0 0 1 282 96L274 88M282 96L281 83"/></g><g className="ec-load"><path d="M60 176H178M342 176H460M76 176L94 158M112 176L130 158M148 176L166 158M344 176L362 158M380 176L398 158M416 176L434 158"/></g></svg>;
  if (kind === "structural") return <svg viewBox="0 0 520 240" aria-hidden="true"><g className="ec-structure"><path d="M66 196H454M96 196V72M424 196V72M96 72H424M96 72L178 196 260 72 342 196 424 72M96 196L178 72 260 196 342 72 424 196"/></g><g className="ec-forces"><path d="M178 28V62M260 28V62M342 28V62M172 52L178 62 184 52M254 52L260 62 266 52M336 52L342 62 348 52"/></g><path className="ec-deflection" d="M96 72Q260 105 424 72"/></svg>;
  if (kind === "procurement") return <svg viewBox="0 0 520 240" aria-hidden="true"><g className="ec-docs"><rect x="64" y="58" width="120" height="140" rx="5"/><rect x="200" y="34" width="120" height="164" rx="5"/><rect x="336" y="70" width="120" height="128" rx="5"/><path d="M84 86H164M84 110H152M84 134H164M220 66H300M220 90H286M220 114H300M356 98H436M356 122H422M356 146H436"/></g><g className="ec-checks"><path d="M88 166L100 178 124 150M224 160L239 175 270 140M360 170L373 183 400 150"/></g><path className="ec-track" d="M48 220H472"/><circle className="ec-runner procurement-runner" cx="48" cy="220" r="6"/></svg>;
  if (kind === "manufacturing") return <svg viewBox="0 0 520 240" aria-hidden="true"><g className="ec-factory"><path d="M68 200V106L154 146V106L240 146V62H444V200ZM280 94H324V134H280ZM346 94H400V134H346Z"/></g><g className="ec-quality"><circle cx="368" cy="174" r="28"/><path d="M352 174L364 186 386 160"/></g><path className="ec-track" d="M86 182H300"/><g className="ec-parts"><rect x="108" y="166" width="26" height="16"/><rect x="170" y="166" width="26" height="16"/><rect x="232" y="166" width="26" height="16"/></g><circle className="ec-runner manufacturing-runner" cx="94" cy="182" r="5"/></svg>;
  return <svg viewBox="0 0 520 240" aria-hidden="true"><g className="ec-site"><path d="M66 198H454M108 198V108H218V198M292 198V80H414V198M108 108L163 62 218 108M292 80L353 34 414 80M132 198V146H194V198M318 198V122H388V198"/></g><path className="ec-flow" d="M78 176C146 176 170 124 232 124S306 168 442 108"/><g className="ec-nodes"><circle cx="78" cy="176" r="8"/><circle cx="232" cy="124" r="8"/><circle cx="442" cy="108" r="8"/></g><circle className="ec-runner site-runner" cx="78" cy="176" r="6"/><g className="ec-label"><text x="78" y="226">INSTALLATION</text><text x="260" y="226" textAnchor="middle">COMMISSIONING</text><text x="442" y="226" textAnchor="end">SUPPORT</text></g></svg>;
}

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
    <div className="container engineering-capability-grid">{capabilities.map((capability,index)=>{const number=String(index+1).padStart(2,"0");return <article className={`engineering-capability-card capability-${capability.kind}`} key={capability.kind}><div className="engineering-capability-meta"><span>KRK / {number}</span><span>{text.item} / {number}</span></div><div className="engineering-capability-diagram"><Diagram kind={capability.kind}/></div><div className="engineering-capability-copy"><h3>{capability.title[language]}</h3><p>{capability.copy[language]}</p></div></article>})}</div>
    <div className="container engineering-tools-section">
      <div className="engineering-subsection-heading"><div className="eyebrow light"><span /> {text.toolsEyebrow}</div><div><h2>{text.toolsTitle}<br/><em>{text.toolsAccent}</em></h2><p className="engineering-subsection-intro">{text.toolsCopy}</p></div></div>
      <div className="engineering-tools-grid">{engineeringTools.map((tool,index)=><div className="engineering-tool" key={tool}><span>{String(index+1).padStart(2,"0")}</span><strong>{tool}</strong><i aria-hidden="true" /></div>)}</div>
    </div>
    <div className="container engineering-deliverables-section">
      <div className="engineering-subsection-heading"><div className="eyebrow light"><span /> {text.deliverablesEyebrow}</div><div><h2>{text.deliverablesTitle}<br/><em>{text.deliverablesAccent}</em></h2><p className="engineering-subsection-intro engineering-subsection-intro-dark">{text.deliverablesCopy}</p></div></div>
      <ol className="engineering-deliverables-list">{deliverables.map((deliverable,index)=><li key={deliverable.en}><span>{String(index+1).padStart(2,"0")}</span><strong>{deliverable[language]}</strong><i aria-hidden="true">↗</i></li>)}</ol>
    </div>
  </section>;
}
