"use client";

import { useLanguage } from "./LanguageProvider";

export function ExperienceVisual({ type }: { type: string }) {
  const { language } = useLanguage();

  if (type === "01") {
    return <div className="experience-visual experience-timeline" aria-hidden="true"><svg viewBox="0 0 440 210" role="img"><title>{language === "es" ? "Línea de tiempo de KRK desde 2001 hasta 2026" : "KRK timeline from 2001 to 2026"}</title>
      <text className="visual-kicker" x="24" y="30">KRK / HISTORY</text>
      <text className="timeline-years" x="416" y="58" textAnchor="end">25+</text>
      <text className="visual-caption" x="416" y="76" textAnchor="end">YEARS OF ENGINEERING</text>
      <line className="timeline-base" x1="30" y1="126" x2="410" y2="126" />
      <line className="timeline-progress" pathLength="1" x1="30" y1="126" x2="410" y2="126" />
      {[30, 125, 220, 315, 410].map((x, index) => <g className={`timeline-milestone milestone-${index + 1}`} key={x}><line x1={x} y1="116" x2={x} y2="136" /><circle cx={x} cy="126" r="4" /></g>)}
      <circle className="timeline-runner" cx="30" cy="126" r="7" />
      <text className="visual-label" x="30" y="158">2001</text><text className="visual-label" x="125" y="158" textAnchor="middle">2007</text><text className="visual-label" x="220" y="158" textAnchor="middle">2013</text><text className="visual-label" x="315" y="158" textAnchor="middle">2019</text><text className="visual-label visual-label-active" x="410" y="158" textAnchor="end">2026</text>
      <path className="timeline-rise" d="M30 102 C112 102 133 88 193 87 S287 74 410 42" />
    </svg></div>;
  }

  if (type === "02") {
    const projectLabel = language === "es" ? "PROY" : "PRJ";
    return <div className="experience-visual experience-disciplines" aria-hidden="true"><svg viewBox="0 0 440 210" role="img"><title>{language === "es" ? "Red de disciplinas de ingeniería conectadas" : "Connected multidisciplinary engineering network"}</title>
      <text className="visual-kicker" x="24" y="30">KRK / MULTIDISCIPLINARY</text>
      <g className="discipline-links"><line x1="220" y1="105" x2="90" y2="55" /><line x1="220" y1="105" x2="350" y2="55" /><line x1="220" y1="105" x2="74" y2="158" /><line x1="220" y1="105" x2="366" y2="158" /><line x1="220" y1="105" x2="220" y2="184" /></g>
      <g className="discipline-node node-1"><circle cx="90" cy="55" r="24" /><text x="90" y="59">MEC</text></g>
      <g className="discipline-node node-2"><circle cx="350" cy="55" r="24" /><text x="350" y="59">CIV</text></g>
      <g className="discipline-node node-3"><circle cx="74" cy="158" r="24" /><text x="74" y="162">ELE</text></g>
      <g className="discipline-node node-4"><circle cx="366" cy="158" r="24" /><text x="366" y="162">AUT</text></g>
      <g className="discipline-node node-5"><circle cx="220" cy="184" r="20" /><text x="220" y="188">{projectLabel}</text></g>
      <g className="discipline-core"><circle className="core-ring" cx="220" cy="105" r="45" /><circle className="core-disc" cx="220" cy="105" r="31" /><text x="220" y="110">KRK</text></g>
      <circle className="signal signal-1" cx="155" cy="80" r="4" /><circle className="signal signal-2" cx="285" cy="80" r="4" /><circle className="signal signal-3" cx="147" cy="132" r="4" /><circle className="signal signal-4" cx="293" cy="132" r="4" />
    </svg></div>;
  }

  if (type === "03") {
    const labels = language === "es" ? ["ESTUDIO", "INGENIERÍA", "FABRICACIÓN", "MONTAJE", "PUESTA EN MARCHA"] : ["STUDY", "ENGINEERING", "MANUFACTURING", "ASSEMBLY", "COMMISSIONING"];
    const positions = [38, 129, 220, 311, 402];
    return <div className="experience-visual experience-process" aria-hidden="true"><svg viewBox="0 0 440 210" role="img"><title>{language === "es" ? "Proceso integral desde el estudio hasta la puesta en marcha" : "End-to-end process from study to commissioning"}</title>
      <text className="visual-kicker" x="24" y="30">KRK / END-TO-END</text>
      <path className="process-base" d="M38 112 H402" /><path className="process-flow" pathLength="1" d="M38 112 H402" />
      {positions.map((x, index) => <g className={`process-stage stage-${index + 1}`} key={x}><circle className="stage-ring" cx={x} cy="112" r="18" /><circle className="stage-dot" cx={x} cy="112" r="6" /><text className="stage-number" x={x} y="116">0{index + 1}</text><text className="stage-label" x={x} y={index % 2 === 0 ? 78 : 157}>{labels[index]}</text><line className="stage-guide" x1={x} y1={index % 2 === 0 ? 86 : 130} x2={x} y2={index % 2 === 0 ? 94 : 138} /></g>)}
      <circle className="process-runner" cx="38" cy="112" r="8" />
    </svg></div>;
  }

  return <div className="experience-visual experience-map" aria-hidden="true"><svg viewBox="0 0 440 210" role="img"><title>{language === "es" ? "Presencia regional de KRK en Sudamérica" : "KRK regional presence in South America"}</title>
    <text className="visual-kicker" x="24" y="30">KRK / SOUTH AMERICA</text>
    <g className="map-coordinate-grid"><line x1="35" y1="60" x2="405" y2="60" /><line x1="35" y1="108" x2="405" y2="108" /><line x1="35" y1="156" x2="405" y2="156" /><line x1="110" y1="38" x2="110" y2="190" /><line x1="330" y1="38" x2="330" y2="190" /></g>
    <path className="south-america" d="M178 19 C196 14 221 19 239 28 C252 35 258 46 267 55 C277 66 275 78 267 89 C259 100 249 108 246 120 C242 135 230 146 222 159 C214 172 207 190 198 201 C191 196 190 181 187 170 C183 157 177 146 176 133 C175 120 168 111 160 102 C151 91 145 79 144 67 C143 55 151 45 159 37 C167 31 170 24 178 19 Z" />
    <path className="map-route" pathLength="1" d="M202 158 L180 139 L211 121 L235 91 M211 121 L222 153" />
    {[
      [202, 158, "point-1"], [180, 139, "point-2"], [211, 121, "point-3"], [235, 91, "point-4"], [222, 153, "point-5"], [218, 70, "point-6"], [188, 105, "point-7"],
    ].map(([x, y, className]) => <g className={`map-point ${className}`} key={className}><circle className="map-ring" cx={x} cy={y} r="12" /><circle className="map-dot" cx={x} cy={y} r="4" /></g>)}
    <text className="map-count map-count-latam" x="400" y="76" textAnchor="end">LATAM</text><text className="visual-caption" x="400" y="93" textAnchor="end">REGIONAL REACH</text>
  </svg></div>;
}
