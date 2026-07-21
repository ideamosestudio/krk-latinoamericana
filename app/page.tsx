"use client";

import { useEffect, useState } from "react";

const clients = [
  { name: "Barrick", file: "barrick.png" },
  { name: "Glencore", file: "glencore.png" },
  { name: "Veladero", file: "veladero.png" },
  { name: "Mansfield Minera", file: "mansfield.png" },
  { name: "LDC", file: "ldc.png" },
  { name: "Bunge", file: "bunge.png" },
  { name: "Molinos Agro", file: "molinos.png" },
  { name: "ADM", file: "adm.png" },
  { name: "Puerto Las Losas", file: "pll.png" },
  { name: "Puerto Ventanas", file: "pvsa.png" },
  { name: "YPF", file: "ypf.png" },
];

const sectors = [
  { n: "01", title: "Minería", copy: "Sistemas de transporte y manejo de concentrados diseñados para operar en condiciones de máxima exigencia.", stat: "4.850 m", label: "Altura de operación" },
  { n: "02", title: "Agroindustria", copy: "Recepción, almacenaje, proceso y despacho de granos y derivados con alta capacidad y continuidad operativa.", stat: "24/7", label: "Continuidad operativa" },
  { n: "03", title: "Puertos y terminales", copy: "Infraestructura para carga, descarga y transferencia de materiales a granel en operaciones portuarias.", stat: "60+ km", label: "De transportadores" },
  { n: "04", title: "Energía e industria", copy: "Equipos y componentes a medida para procesos críticos industriales, energéticos y cementeros.", stat: "100+", label: "Proyectos integrales" },
];

const services = [
  { n: "01", title: "Bulk material handling equipment", copy: "Diseñamos y suministramos transportadores de banda, pipe conveyors, enclosed conveyors, shuttle conveyors, reversible conveyors y overland conveyors, además de belt feeders, bucket elevators, tripper cars y sistemas móviles o fijos de transferencia." },
  { n: "02", title: "Conveyor components", copy: "Proveemos estructuras, galerías, torres de transferencia, chutes, tolvas, poleas, estaciones de rodillos, sistemas de tensado, limpieza de banda, cubiertas, cerramientos y accesorios mecánicos para instalaciones nuevas o existentes." },
  { n: "03", title: "Port and mining systems", copy: "Desarrollamos sistemas de acopio, recepción y transferencia de materiales, manejo de concentrado de cobre, carbón, granos, litio y otros materiales mineros e industriales, adaptados a las condiciones técnicas de cada operación." },
  { n: "04", title: "Engineering and project services", copy: "Brindamos ingeniería conceptual, básica y de detalle, diseño mecánico, soporte de compras, fabricación, control de calidad, asistencia en instalación, puesta en marcha, mantenimiento y soporte técnico para proyectos industriales de distinta escala." },
];

function DoubleActions({ primary, secondary, primaryHref = "#contacto", secondaryHref = "#soluciones", light = false }: { primary: string; secondary: string; primaryHref?: string; secondaryHref?: string; light?: boolean }) {
  return <div className={`double-actions ${light ? "double-actions-light" : ""}`}><a className="action-main" href={primaryHref}><span>{primary}</span><i>↗</i></a><a className="action-alt" href={secondaryHref}><i>↓</i><span>{secondary}</span></a></div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("in-view")), { threshold: 0.14 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <header className="nav-wrap">
        <nav className="nav-shell" aria-label="Navegación principal">
          <a href="#inicio" className="brand" aria-label="KRK — inicio"><img src="/images/KRK-LOGO-BLANCO-3.png" alt="KRK Latinoamericana" /></a>
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#empresa" onClick={() => setMenuOpen(false)}>Quiénes somos</a>
            <a href="#soluciones" onClick={() => setMenuOpen(false)}>Productos y servicios</a>
            <a href="#sectores" onClick={() => setMenuOpen(false)}>Industrias</a>
            <a href="#experiencia" onClick={() => setMenuOpen(false)}>Experiencia</a>
          </div>
          <a className="nav-cta" href="#contacto"><span>Iniciar un proyecto</span><i>↗</i></a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú" aria-expanded={menuOpen}><i /><i /></button>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <img className="hero-image" src="/images/PORTADA-006.jpg" alt="Sistema KRK para transporte de materiales a granel" />
        <div className="hero-shade" /><div className="hero-grid" />
        <div className="hero-content container">
          <div className="hero-kicker"><span>MOVING WHAT MATTERS</span></div>
          <h1><span className="hero-line">From concept to</span><span className="hero-line hero-accent">commissioning.</span></h1>
          <p className="hero-description">Ingeniería, fabricación y ejecución de sistemas para transporte de materiales a granel en minería, puertos, agroindustria, energía e industria.</p>
          <DoubleActions primary="Conocer soluciones" secondary="Descubrir KRK" primaryHref="#soluciones" secondaryHref="#empresa" light />
        </div>
        <div className="hero-tech hero-tech-a"><span>01</span><i /></div>
        <div className="hero-tech hero-tech-b"><span>2001 — 2026</span><i /></div>
        <div className="hero-scope"><i /><span>LATAM</span><small>INGENIERÍA EN MOVIMIENTO</small></div>
      </section>

      <section className="trust" id="experiencia">
        <div className="container trust-head"><span>EMPRESAS QUE CONFÍAN EN KRK</span><span>CLIENTES & PROYECTOS</span></div>
        <div className="logo-marquee" aria-label="Empresas que confían en KRK"><div className="logo-track">{[...clients, ...clients].map((client, i) => <div className="client-logo" key={`${client.name}-${i}`}><img src={`/logos/${client.file}`} alt={client.name} /></div>)}</div></div>
      </section>

      <section className="intro section" id="empresa" data-reveal>
        <div className="container intro-grid">
          <div><div className="eyebrow"><span /> QUIÉNES SOMOS</div><p className="side-note">Desde 2001 desarrollando sistemas de manejo de materiales a granel.</p></div>
          <div><h2>Una empresa enfocada en<br /><em>ingeniería y movimiento</em><br />de materiales.</h2><div className="intro-copy"><p>KRK Latinoamericana S.A. es una empresa de capitales argentinos especializada en ingeniería, fabricación y ejecución de proyectos para el manejo de materiales a granel.</p><p>Desde 2001 participamos en proyectos de distinta escala y complejidad, integrando estudios de factibilidad, ingeniería conceptual, diseño de detalle, fabricación, suministro, montaje y puesta en marcha. Nuestra experiencia, capacidad técnica y red de fabricación nos permite acompañar a cada cliente con soluciones confiables, competitivas y adaptadas a las exigencias de su operación.</p></div><DoubleActions primary="Conocer la empresa" secondary="Ver soluciones" primaryHref="#empresa" secondaryHref="#soluciones" /></div>
        </div>
        <div className="container stats"><div><strong>25<sup>+</sup></strong><span>Más de 25 años</span></div><div><strong>360°</strong><span>Ingeniería multidisciplinaria</span></div><div><strong>100<sup>+</sup></strong><span>Ejecución integral</span></div><div><strong>5<sup>países</sup></strong><span>Presencia regional</span></div></div>
      </section>

      <section className="sectors section" id="sectores" data-reveal>
        <div className="container"><div className="section-title-row"><div className="eyebrow light"><span /> ÁREAS DE EXPERIENCIA</div><div><p className="section-overline">ENGINEERING MOVEMENT</p><h2>Ingeniería integral para<br /><em>proyectos exigentes.</em></h2></div></div>
          <div className="sector-grid">{sectors.map((s) => <article className="sector-card" key={s.n}><div className="card-grid" /><div className="card-top"><span>KRK / {s.n}</span><b>↗</b></div><div className="technical-mark"><i /><i /><i /><i /></div><div className="sector-stat"><strong>{s.stat}</strong><small>{s.label}</small></div><div className="sector-copy"><h3>{s.title}</h3><p>{s.copy}</p></div></article>)}</div><DoubleActions primary="Explorar industrias" secondary="Hablar con ingeniería" primaryHref="#sectores" secondaryHref="#contacto" light />
        </div>
      </section>

      <section className="services section" id="soluciones" data-reveal><div className="container services-grid"><div className="services-intro"><div className="eyebrow"><span /> NUESTROS PRODUCTOS Y SERVICIOS</div><h2>Soluciones integrales para el manejo de <em>materiales a granel.</em></h2><p>Equipos, componentes e ingeniería para sistemas de transporte y manejo de materiales a granel en operaciones industriales, mineras y portuarias.</p><DoubleActions primary="Solicitar asesoramiento" secondary="Ver capacidades" primaryHref="#contacto" secondaryHref="#soluciones" /></div><div className="service-list">{services.map((s) => <article key={s.n}><span>{s.n}</span><div><h3>{s.title}</h3><p>{s.copy}</p></div><b>↗</b></article>)}</div></div></section>

      <section className="engineering-banner" data-reveal><img src="/images/BACK-002.jpg" alt="Ingeniería y fabricación de KRK" /><div className="banner-shade" /><div className="container banner-content"><div className="eyebrow light"><span /> ENGINEERING MOVEMENT</div><h2>De la idea<br /><em>a la operación.</em></h2><p>KRK integra todas las etapas del proyecto en una misma solución: análisis técnico, ingeniería, fabricación, suministro, montaje y puesta en marcha. Esta visión permite reducir interfaces, ordenar la ejecución y asegurar sistemas confiables para operaciones de largo plazo.</p><DoubleActions primary="Conversemos sobre su proyecto" secondary="Conocer el proceso" primaryHref="#contacto" secondaryHref="#soluciones" light /></div></section>

      <section className="project section" data-reveal><div className="container project-grid"><div className="project-image"><img src="/images/PORTADA-003.jpg" alt="Proyecto de transporte ejecutado por KRK" /><span>CAPACIDAD EN CAMPO / 01</span></div><div className="project-copy"><div className="eyebrow"><span /> FROM CONCEPT TO COMMISSIONING</div><h2>Una solución.<br /><em>Todas las etapas.</em></h2><p>Nuestra experiencia, capacidad técnica y red de fabricación nos permite acompañar a cada cliente con soluciones confiables, competitivas y adaptadas a las exigencias de su operación.</p><dl><div><dt>01</dt><dd>Estudios de factibilidad</dd></div><div><dt>02</dt><dd>Ingeniería conceptual, básica y de detalle</dd></div><div><dt>03</dt><dd>Fabricación, suministro y montaje</dd></div><div><dt>04</dt><dd>Puesta en marcha y soporte técnico</dd></div></dl><DoubleActions primary="Iniciar una conversación" secondary="Ver servicios" primaryHref="#contacto" secondaryHref="#soluciones" /></div></div></section>

      <section className="contact" id="contacto" data-reveal><div className="contact-gridlines" /><div className="contact-glow contact-glow-a" /><div className="contact-glow contact-glow-b" /><div className="contact-beam" /><div className="container contact-grid"><div className="contact-heading"><div className="eyebrow light"><span /> CONTACTANOS</div><h2>Movemos lo que<br /><em>importa.</em></h2><p>Contanos brevemente sobre tu operación o proyecto. Nuestro equipo técnico se pondrá en contacto con vos.</p></div><div className="contact-side"><div className="form-head"><span>INICIAR UNA CONVERSACIÓN</span><b>01 / 04</b></div><form className="contact-form" action="mailto:contactenos@krk.com" method="post" encType="text/plain"><label><span>Nombre y apellido</span><input type="text" name="nombre" autoComplete="name" required placeholder="Tu nombre" /></label><label><span>Empresa</span><input type="text" name="empresa" autoComplete="organization" placeholder="Nombre de la empresa" /></label><div className="form-row"><label><span>Email</span><input type="email" name="email" autoComplete="email" required placeholder="nombre@empresa.com" /></label><label><span>Teléfono</span><input type="tel" name="telefono" autoComplete="tel" placeholder="+54" /></label></div><label><span>¿Cómo podemos ayudarte?</span><textarea name="mensaje" required rows={3} placeholder="Proyecto, operación o necesidad técnica" /></label><div className="form-actions"><button type="submit"><span>Enviar consulta</span><i>↗</i></button><a href="#inicio"><i>↓</i><span>Volver al inicio</span></a></div></form></div></div></section>

      <footer><div className="container footer-top"><div className="footer-brand"><img src="/images/KRK-LOGO-BLANCO-3.png" alt="KRK Latinoamericana" /><p>Ingeniería, fabricación y ejecución de sistemas para transporte de materiales a granel.</p></div><a href="#inicio">VOLVER ARRIBA ↑</a></div><div className="container footer-grid"><div><b>OFICINAS COMERCIALES</b><p>Monroe 5088 (CP1431). Piso 3.<br />Ciudad Autónoma de Buenos Aires, Argentina.<br />Tel +54 11 6841-7800</p></div><div><b>PLANTA INDUSTRIAL</b><p>Av. Nicolás Bruzone 1136 (B1838BHD).<br />Provincia de Buenos Aires, Argentina.</p></div><div><b>NAVEGACIÓN</b><p><a href="#empresa">Quiénes somos</a><br /><a href="#soluciones">Productos y servicios</a><br /><a href="#sectores">Industrias</a></p></div><div><b>PRESENCIA</b><p>Argentina · Chile · Brasil<br />Paraguay · Uruguay</p></div></div><div className="container footer-bottom"><span>© 2026 KRK LATINOAMERICANA S.A.</span><span>MOVING WHAT MATTERS</span></div></footer>
    </main>
  );
}
