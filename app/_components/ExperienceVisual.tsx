"use client";

import { useLanguage } from "./LanguageProvider";

export function ExperienceVisual({ type }: { type: string }) {
  const { language } = useLanguage();

  if (type === "01") {
    const yearsLabel = language === "es" ? "AÑOS DE EXPERIENCIA" : "YEARS OF EXPERIENCE";
    return <div className="experience-visual experience-timeline" aria-hidden="true"><svg viewBox="0 0 440 210" role="img"><title>{language === "es" ? "Línea de tiempo de KRK desde 2001 hasta 2026" : "KRK timeline from 2001 to 2026"}</title>
      <text className="visual-kicker" x="24" y="30">KRK / HISTORY</text>
      <text className="timeline-years" x="416" y="58" textAnchor="end">25+</text>
      <text className="visual-caption" x="416" y="76" textAnchor="end">{yearsLabel}</text>
      <line className="timeline-base" x1="30" y1="126" x2="410" y2="126" />
      <line className="timeline-progress" pathLength="1" x1="30" y1="126" x2="410" y2="126" />
      {[30, 125, 220, 315, 410].map((x, index) => <g className={`timeline-milestone milestone-${index + 1}`} key={x}><line x1={x} y1="116" x2={x} y2="136" /><circle cx={x} cy="126" r="4" /></g>)}
      <circle className="timeline-runner" cx="30" cy="126" r="7" />
      <text className="visual-label" x="30" y="158">2001</text><text className="visual-label" x="125" y="158" textAnchor="middle">2007</text><text className="visual-label" x="220" y="158" textAnchor="middle">2013</text><text className="visual-label" x="315" y="158" textAnchor="middle">2019</text><text className="visual-label visual-label-active" x="410" y="158" textAnchor="end">2026</text>
      <path className="timeline-rise" d="M30 102 C112 102 133 88 193 87 S287 74 410 42" />
    </svg></div>;
  }

  if (type === "02") {
    const mechanicalKicker = language === "es" ? "KRK / INGENIERÍA MECÁNICA" : "KRK / MECHANICAL ENGINEERING";
    const mechanicalAreas = [
      { label: "Engineering", x: 38, y: 44, width: 110, centerX: 93, centerY: 58 },
      { label: "Projects", x: 337, y: 44, width: 72, centerX: 373, centerY: 58 },
      { label: "Manufacturing", x: 25, y: 142, width: 120, centerX: 85, centerY: 156 },
      { label: "QA/QC", x: 349, y: 142, width: 64, centerX: 381, centerY: 156 },
      { label: "Field Support", x: 170, y: 170, width: 100, centerX: 220, centerY: 184 },
    ];
    return <div className="experience-visual experience-disciplines" aria-hidden="true"><svg viewBox="0 0 440 210" role="img"><title>{language === "es" ? "Ingeniería mecánica especializada integrada con fabricación y ejecución" : "Mechanical engineering excellence integrated with manufacturing and project execution"}</title>
      <text className="visual-kicker" x="24" y="30">{mechanicalKicker}</text>
      <g className="discipline-links">{mechanicalAreas.map((area) => <line key={area.label} x1="220" y1="105" x2={area.centerX} y2={area.centerY} />)}</g>
      {mechanicalAreas.map((area, index) => <g className={`discipline-node node-${index + 1}`} key={area.label}><rect x={area.x} y={area.y} width={area.width} height="28" rx="14" /><text x={area.centerX} y={area.centerY + 3}>{area.label}</text></g>)}
      <g className="discipline-core"><circle className="core-ring" cx="220" cy="105" r="45" /><circle className="core-disc" cx="220" cy="105" r="31" /><text x="220" y="110">KRK</text></g>
      <circle className="signal signal-1" cx="155" cy="80" r="4" /><circle className="signal signal-2" cx="285" cy="80" r="4" /><circle className="signal signal-3" cx="147" cy="132" r="4" /><circle className="signal signal-4" cx="293" cy="132" r="4" />
    </svg></div>;
  }

  if (type === "03") {
    const labels = language === "es" ? ["Concepto", "Ingeniería", "Fabricación", "QA/QC", "Soporte en Obra", "Puesta en Marcha"] : ["Concept", "Engineering", "Manufacturing", "QA/QC", "Site Support", "Commissioning"];
    const positions = [34, 108, 182, 256, 330, 406];
    return <div className="experience-visual experience-process" aria-hidden="true"><svg viewBox="0 0 440 210" role="img"><title>{language === "es" ? "Proceso integral desde el estudio hasta la puesta en marcha" : "End-to-end process from study to commissioning"}</title>
      <text className="visual-kicker" x="24" y="30">KRK / END-TO-END</text>
      <path className="process-base" d="M34 112 H406" /><path className="process-flow" pathLength="1" d="M34 112 H406" />
      {positions.map((x, index) => <g className={`process-stage stage-${index + 1}`} key={x}><circle className="stage-ring" cx={x} cy="112" r="18" /><circle className="stage-dot" cx={x} cy="112" r="6" /><text className="stage-number" x={x} y="116">0{index + 1}</text><text className="stage-label" x={x} y={index % 2 === 0 ? 76 : 160} textAnchor={index === 0 ? "start" : index === positions.length - 1 ? "end" : "middle"}>{labels[index]}</text><line className="stage-guide" x1={x} y1={index % 2 === 0 ? 84 : 132} x2={x} y2={index % 2 === 0 ? 94 : 142} /></g>)}
      <circle className="process-runner" cx="34" cy="112" r="8" />
    </svg></div>;
  }

  const projectsLabel = language === "es" ? "PROYECTOS EJECUTADOS" : "PROJECTS DELIVERED";
  return <div className="experience-visual experience-projects" aria-hidden="true"><svg viewBox="0 0 440 210" role="img"><title>{language === "es" ? "Más de 700 proyectos ejecutados" : "More than 700 projects delivered"}</title>
    <text className="visual-kicker" x="24" y="30">KRK / PROJECT DELIVERY</text>
    <text className="project-count" x="416" y="68" textAnchor="end">+700</text><text className="visual-caption" x="416" y="86" textAnchor="end">{projectsLabel}</text>
    <g className="project-grid-lines"><line x1="35" y1="105" x2="405" y2="105" /><line x1="35" y1="155" x2="405" y2="155" /><line x1="90" y1="82" x2="90" y2="184" /><line x1="220" y1="82" x2="220" y2="184" /><line x1="350" y1="82" x2="350" y2="184" /></g>
    <path className="project-route" pathLength="1" d="M42 155 L105 116 L170 158 L235 101 L302 150 L398 112" />
    {[[42,155],[105,116],[170,158],[235,101],[302,150],[398,112]].map(([x,y], index) => <g className={`project-node project-node-${index + 1}`} key={`${x}-${y}`}><circle className="project-ring" cx={x} cy={y} r="12" /><circle className="project-dot" cx={x} cy={y} r="4" /><text x={x} y={y + 26} textAnchor="middle">P{String(index + 1).padStart(2, "0")}</text></g>)}
    <circle className="project-runner" cx="42" cy="155" r="6" />
  </svg></div>;
}