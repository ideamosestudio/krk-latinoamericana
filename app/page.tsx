"use client";

import { useState } from "react";

const clients = [
  "BARRICK", "GLENCORE", "VELADERO", "VALE", "YCRT", "MANSFIELD MINERA",
  "LDC", "CARGILL", "BUNGE", "TERMINAL 6", "RENOVA", "COFCO",
  "MOLINOS AGRO", "ADM", "TMP", "PUERTO LAS LOSAS", "PVSA", "YPF",
];

const sectors = [
  { n: "01", title: "Minería", copy: "Sistemas de transporte robustos para operaciones de alta exigencia y condiciones extremas.", image: "/images/ChatGPT-Image-Jun-28-2026-11_31_14-PM-1.png" },
  { n: "02", title: "Agroindustria", copy: "Soluciones eficientes para recepción, almacenaje, proceso y despacho de granos y derivados.", image: "/images/ChatGPT-Image-Jun-28-2026-11_31_14-PM-2.png" },
  { n: "03", title: "Puertos y terminales", copy: "Ingeniería para cargas y descargas continuas, seguras y de alto rendimiento.", image: "/images/ChatGPT-Image-Jun-28-2026-11_31_14-PM-3.png" },
  { n: "04", title: "Energía e industria", copy: "Equipos y sistemas a medida que sostienen procesos críticos de largo plazo.", image: "/images/ChatGPT-Image-Jun-28-2026-11_31_15-PM-4.png" },
];

const services = [
  { n: "01", title: "Bulk material handling equipment", copy: "Transportadores de banda, pipe conveyors, enclosed y overland conveyors; belt feeders, elevadores, tripper cars y sistemas de transferencia." },
  { n: "02", title: "Conveyor components", copy: "Estructuras, galerías, torres, chutes, tolvas, poleas, rodillos, tensado, limpieza, cubiertas y accesorios para instalaciones nuevas o existentes." },
  { n: "03", title: "Port & mining systems", copy: "Sistemas de acopio, recepción y transferencia para cobre, carbón, granos, litio y otros materiales mineros e industriales." },
  { n: "04", title: "Engineering & project services", copy: "Ingeniería conceptual, básica y de detalle, fabricación, control de calidad, asistencia de instalación, puesta en marcha y soporte técnico." },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <header className="nav-wrap">
        <nav className="nav-shell" aria-label="Navegación principal">
          <a href="#inicio" className="brand" aria-label="KRK — inicio">
            <img src="/images/KRK-LOGO-BLANCO-3.png" alt="KRK Latinoamericana" />
          </a>
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#empresa" onClick={() => setMenuOpen(false)}>Empresa</a>
            <a href="#soluciones" onClick={() => setMenuOpen(false)}>Soluciones</a>
            <a href="#sectores" onClick={() => setMenuOpen(false)}>Sectores</a>
            <a href="#experiencia" onClick={() => setMenuOpen(false)}>Experiencia</a>
          </div>
          <a className="nav-cta" href="#contacto">Hablemos <span>↗</span></a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú" aria-expanded={menuOpen}>
            <i /><i />
          </button>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <img className="hero-image" src="/images/PORTADA-006.jpg" alt="Sistema industrial de transporte de materiales a granel" />
        <div className="hero-shade" />
        <div className="hero-content container">
          <div className="eyebrow light"><span /> INGENIERÍA EN MOVIMIENTO</div>
          <h1>Moving what<br /><em>matters.</em></h1>
          <div className="hero-bottom">
            <p>Ingeniería, fabricación y ejecución de sistemas para transporte de materiales a granel.</p>
            <a className="circle-link" href="#empresa" aria-label="Conocer KRK">↓</a>
          </div>
        </div>
        <div className="hero-index">KRK / 2001—2026</div>
      </section>

      <section className="intro section" id="empresa">
        <div className="container intro-grid">
          <div>
            <div className="eyebrow"><span /> QUIÉNES SOMOS</div>
            <p className="side-note">Desde Argentina hacia operaciones de toda la región.</p>
          </div>
          <div>
            <h2>Ingeniería que convierte<br />complejidad en <em>movimiento.</em></h2>
            <div className="intro-copy">
              <p>KRK Latinoamericana S.A. es una empresa de capitales argentinos especializada en ingeniería, fabricación y ejecución de proyectos para el manejo de materiales a granel.</p>
              <p>Desde 2001 integramos estudios de factibilidad, ingeniería conceptual y de detalle, fabricación, suministro, montaje y puesta en marcha.</p>
            </div>
            <a className="text-link" href="#soluciones">Conocer nuestra capacidad <span>↗</span></a>
          </div>
        </div>
        <div className="container stats">
          <div><strong>25<sup>+</sup></strong><span>Años de trayectoria</span></div>
          <div><strong>100<sup>+</sup></strong><span>Proyectos ejecutados</span></div>
          <div><strong>60<sup>km</sup></strong><span>De transportadores</span></div>
          <div><strong>5<sup>países</sup></strong><span>Presencia regional</span></div>
        </div>
      </section>

      <section className="trust" id="experiencia">
        <div className="container trust-head">
          <span>Confían en nuestra ingeniería</span><span>Clientes & proyectos</span>
        </div>
        <div className="logo-marquee" aria-label="Empresas que confían en KRK">
          <div className="logo-track">
            {[...clients, ...clients].map((client, i) => <div className="client-logo" key={`${client}-${i}`}>{client}</div>)}
          </div>
        </div>
      </section>

      <section className="sectors section" id="sectores">
        <div className="container">
          <div className="section-title-row">
            <div className="eyebrow"><span /> DÓNDE TRABAJAMOS</div>
            <h2>Experiencia que cruza<br /><em>industrias y fronteras.</em></h2>
          </div>
          <div className="sector-grid">
            {sectors.map((s) => (
              <article className="sector-card" key={s.n}>
                <img src={s.image} alt={s.title} />
                <div className="sector-overlay" />
                <span className="sector-num">{s.n}</span>
                <div className="sector-copy"><h3>{s.title}</h3><p>{s.copy}</p><b>Explorar ↗</b></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="engineering-banner">
        <img src="/images/BACK-002.jpg" alt="Ingeniería y fabricación de KRK" />
        <div className="banner-shade" />
        <div className="container banner-content">
          <div className="eyebrow light"><span /> ENGINEERING MOVEMENT</div>
          <h2>Una solución.<br /><em>Todas las etapas.</em></h2>
          <p>Reducimos interfaces, ordenamos la ejecución y aseguramos sistemas confiables para operaciones de largo plazo.</p>
        </div>
      </section>

      <section className="services section" id="soluciones">
        <div className="container services-grid">
          <div className="services-intro">
            <div className="eyebrow"><span /> PRODUCTOS & SERVICIOS</div>
            <h2>Capacidad integral,<br /><em>respuesta precisa.</em></h2>
            <p>Equipos, componentes e ingeniería para sistemas de transporte y manejo de materiales en operaciones de misión crítica.</p>
          </div>
          <div className="service-list">
            {services.map((s) => <article key={s.n}><span>{s.n}</span><div><h3>{s.title}</h3><p>{s.copy}</p></div><b>↗</b></article>)}
          </div>
        </div>
      </section>

      <section className="project section">
        <div className="container project-grid">
          <div className="project-image"><img src="/images/PORTADA-003.jpg" alt="Proyecto industrial ejecutado por KRK" /><span>PROYECTO DESTACADO / 01</span></div>
          <div className="project-copy">
            <div className="eyebrow"><span /> EXPERIENCIA EN CAMPO</div>
            <h2>De la ingeniería<br />a la <em>operación.</em></h2>
            <p>Participamos en proyectos de distinta escala y complejidad, acompañando al cliente desde la primera decisión técnica hasta la puesta en marcha.</p>
            <dl><div><dt>Modalidad</dt><dd>Llave en mano</dd></div><div><dt>Alcance</dt><dd>Ingeniería + fabricación</dd></div><div><dt>Región</dt><dd>Latinoamérica</dd></div></dl>
            <a className="text-link" href="#contacto">Ver proyectos <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="contact" id="contacto">
        <div className="container contact-grid">
          <div>
            <div className="eyebrow light"><span /> CONVERSEMOS</div>
            <h2>¿Tiene un proyecto<br />en <em>movimiento?</em></h2>
          </div>
          <div className="contact-side">
            <p>Nuestro equipo puede acompañarlo desde la factibilidad hasta la puesta en marcha.</p>
            <a href="mailto:contactenos@krk.com">contactenos@krk.com <span>↗</span></a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-top">
          <img src="/images/KRK-LOGO-BLANCO-3.png" alt="KRK Latinoamericana" />
          <p>Ingeniería, fabricación y ejecución de sistemas para transporte de materiales a granel.</p>
          <a href="#inicio">Volver arriba ↑</a>
        </div>
        <div className="container footer-grid">
          <div><b>OFICINAS COMERCIALES</b><p>Monroe 5088, Piso 3<br />CABA, Argentina<br />+54 11 6841-7800</p></div>
          <div><b>PLANTA INDUSTRIAL</b><p>Av. Nicolás Bruzone 1136<br />Luis Guillón, Buenos Aires</p></div>
          <div><b>NAVEGACIÓN</b><p><a href="#empresa">Empresa</a><br /><a href="#soluciones">Soluciones</a><br /><a href="#sectores">Sectores</a></p></div>
          <div><b>PRESENCIA</b><p>Argentina · Chile · Brasil<br />Paraguay · Uruguay</p></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 KRK Latinoamericana S.A.</span><span>Moving What Matters</span></div>
      </footer>
    </main>
  );
}
