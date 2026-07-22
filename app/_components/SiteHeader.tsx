"use client";

import { useEffect, useState } from "react";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const serviceLinks = [
  ["01", "Bulk material handling equipment", "bulk-material-handling-equipment"],
  ["02", "Conveyor components", "conveyor-components"],
  ["03", "Port and mining systems", "port-and-mining-systems"],
  ["04", "Engineering and project services", "engineering-and-project-services"],
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const close = () => { setMenuOpen(false); setServicesOpen(false); };

  return <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${menuOpen ? "menu-is-open" : ""}`}>
    <nav className="nav-shell" aria-label="Navegación principal">
      <a href={`${base}/`} className="brand" aria-label="KRK — inicio" onClick={close}><img src={`${base}/images/KRK-LOGO-BLANCO-3.png`} alt="KRK Latinoamericana" /></a>
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href={`${base}/quienes-somos/`} onClick={close}>Quiénes somos</a>
        <div className={`nav-services ${servicesOpen ? "is-open" : ""}`} onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
          <button type="button" onClick={() => setServicesOpen(!servicesOpen)} aria-expanded={servicesOpen}>Productos y servicios</button>
          <div className="nav-dropdown">
            <a className="dropdown-overview" href={`${base}/servicios/`} onClick={close}><span>Ver todos los servicios</span><b>↗</b></a>
            {serviceLinks.map(([n, label, slug]) => <a href={`${base}/servicios/${slug}/`} onClick={close} key={slug}><small>{n}</small><span>{label}</span><b>↗</b></a>)}
          </div>
        </div>
        <a href={`${base}/#sectores`} onClick={close}>Industrias</a>
        <a href={`${base}/#experiencia`} onClick={close}>Experiencia</a>
      </div>
      <a className="nav-cta" href={`${base}/#contacto`} onClick={close}><span>Iniciar un proyecto</span><i>↗</i></a>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú" aria-expanded={menuOpen}><i /><i /></button>
    </nav>
  </header>;
}
