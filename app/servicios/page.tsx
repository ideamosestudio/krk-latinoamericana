import { InnerHero, InnerShell, base } from "../_components/InnerShell";

const services = [
  ["01", "Bulk material handling equipment", "bulk-material-handling-equipment", "Sistemas y equipos para transporte continuo de materiales a granel."],
  ["02", "Conveyor components", "conveyor-components", "Componentes diseñados para maximizar confiabilidad y desempeño."],
  ["03", "Port and mining systems", "port-and-mining-systems", "Sistemas integrados para minería, puertos e instalaciones industriales."],
  ["04", "Engineering and project services", "engineering-and-project-services", "Ingeniería y gestión integral para una ejecución exitosa."],
];

export default function Servicios() {
  return <InnerShell><InnerHero eyebrow="PRODUCTOS Y SERVICIOS" title="Soluciones integrales para" accent="materiales a granel." image="BACK-002.jpg" /><section className="services-page section" id="contenido"><div className="container"><div className="services-page-title"><div className="eyebrow"><span /> CAPACIDADES</div><h2>PRODUCTOS Y<br /><em>SERVICIOS.</em></h2></div><div className="services-page-head"><p>Equipos, componentes e ingeniería para operaciones industriales, mineras y portuarias.</p></div><div className="services-page-list">{services.map(([n,title,slug,copy]) => <a href={`${base}/servicios/${slug}/`} key={slug}><span>{n}</span><div><h2>{title}</h2><p>{copy}</p></div><i>↗</i></a>)}</div></div></section></InnerShell>;
}
