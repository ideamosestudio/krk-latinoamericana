import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function SiteFooter() {
  return <footer><div className="container footer-top"><div className="footer-brand"><img src={`${base}/images/KRK-LOGO-BLANCO-3.png`} alt="KRK Latinoamericana" /><p>Ingeniería, fabricación y ejecución de sistemas para transporte de materiales a granel.</p></div><a href="#top">VOLVER ARRIBA ↑</a></div><div className="container footer-grid"><div><b>OFICINAS COMERCIALES</b><p>Monroe 5088 (CP1431). Piso 3.<br />Ciudad Autónoma de Buenos Aires, Argentina.<br />Tel +54 11 6841-7800</p></div><div><b>PLANTA INDUSTRIAL</b><p>Av. Nicolás Bruzone 1136 (B1838BHD).<br />Provincia de Buenos Aires, Argentina.</p></div><div><b>NAVEGACIÓN</b><p><a href={`${base}/quienes-somos/`}>Quiénes somos</a><br /><a href={`${base}/servicios/`}>Productos y servicios</a><br /><a href={`${base}/#sectores`}>Industrias</a></p></div><div><b>PRESENCIA</b><p>Argentina · Chile · Brasil<br />Paraguay · Uruguay</p></div></div><div className="container footer-bottom"><span>© 2026 KRK LATINOAMERICANA S.A.</span><span>MOVING WHAT MATTERS</span></div></footer>;
}

export function InnerHero({ eyebrow, title, accent, image, description }: { eyebrow: string; title: string; accent?: string; image: string; description?: string }) {
  return <section className="inner-hero" id="top"><img src={`${base}/images/${image}`} alt="" /><div className="inner-hero-shade" /><div className="inner-hero-grid" /><div className="container inner-hero-content"><div className="hero-kicker"><span>{eyebrow}</span></div><h1><span>{title}</span>{accent && <em>{accent}</em>}</h1>{description && <p>{description}</p>}<div className="inner-hero-actions"><a href="#contenido">Explorar contenido <i>↗</i></a><a href={`${base}/#contacto`}><i>↓</i> Iniciar un proyecto</a></div></div><div className="hero-tech hero-tech-b"><span>KRK / CAPABILITIES</span><i /></div></section>;
}

export function InnerShell({ children }: { children: ReactNode }) {
  return <main><SiteHeader />{children}<SiteFooter /></main>;
}

export { base };
