"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage, type Language } from "./LanguageProvider";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const serviceLinks = [
  { n: "01", slug: "bulk-material-handling-equipment", es: "Equipos para manejo de materiales a granel", en: "Bulk material handling equipment" },
  { n: "02", slug: "conveyor-components", es: "Componentes para transportadores", en: "Conveyor components" },
  { n: "03", slug: "port-and-mining-systems", es: "Sistemas portuarios y mineros", en: "Port and mining systems" },
  { n: "04", slug: "engineering-and-project-services", es: "Servicios de ingeniería y proyectos", en: "Engineering and project services" },
];

const copy = {
  es: {
    navigation: "Navegación principal",
    navigationLabel: "MENÚ / NAVEGACIÓN",
    home: "KRK — inicio",
    about: "Quiénes somos",
    services: "Productos y servicios",
    allServices: "Ver todos los servicios",
    contact: "Contacto",
    menuOpen: "Abrir menú",
    menuClose: "Cerrar menú",
    language: "Seleccionar idioma",
    status: "Idioma seleccionado: español",
  },
  en: {
    navigation: "Main navigation",
    navigationLabel: "MENU / NAVIGATION",
    home: "KRK — home",
    about: "About us",
    services: "Products and services",
    allServices: "View all services",
    contact: "Contact",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    language: "Select language",
    status: "Selected language: English",
  },
} satisfies Record<Language, Record<string, string>>;

export function SiteHeader() {
  const { language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const text = copy[language];

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", menuOpen);
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setServicesOpen(false);
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.documentElement.classList.remove("menu-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  const close = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  const chooseLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    close();
  };

  const toggleServices = () => {
    const nextOpen = !servicesOpen;
    setServicesOpen(nextOpen);

    if (nextOpen && window.innerWidth <= 900) {
      window.requestAnimationFrame(() => {
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        servicesRef.current?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
      });
    }
  };

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${menuOpen ? "menu-is-open" : ""}`}>
      <nav className="nav-shell" aria-label={text.navigation}>
        <a href={`${base}/`} className="brand" aria-label={text.home} onClick={close}>
          <img src={`${base}/images/KRK-LOGO-BLANCO-3.png`} alt="KRK Latinoamericana" />
        </a>
        <div className={`nav-links ${menuOpen ? "open" : ""}`} id="primary-navigation">
          <div className="nav-mobile-intro" aria-hidden="true"><span>{text.navigationLabel}</span><small>2001 — 2026</small></div>
          <a className="nav-primary-link" data-index="01" href={`${base}/quienes-somos/`} onClick={close}><span>{text.about}</span><b aria-hidden="true">↗</b></a>
          <div ref={servicesRef} className={`nav-services ${servicesOpen ? "is-open" : ""}`} data-index="02" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button type="button" data-index="02" onClick={toggleServices} aria-expanded={servicesOpen}><span>{text.services}</span><b aria-hidden="true">+</b></button>
            <div className="nav-dropdown">
              <a className="dropdown-overview" href={`${base}/servicios/`} onClick={close}><span>{text.allServices}</span><b aria-hidden="true">↗</b></a>
              {serviceLinks.map((service) => <a href={`${base}/servicios/${service.slug}/`} onClick={close} key={service.slug}><small>{service.n}</small><span>{service[language]}</span><b aria-hidden="true">↗</b></a>)}
            </div>
          </div>
          <a className="nav-mobile-contact" data-index="03" href={`${base}/#contacto`} onClick={close}><span>{text.contact}</span><b aria-hidden="true">↗</b></a>
          <div className="language-switch" role="group" aria-label={text.language}>
            <button type="button" className={language === "es" ? "is-active" : ""} aria-pressed={language === "es"} onClick={() => chooseLanguage("es")}>ES</button>
            <button type="button" className={language === "en" ? "is-active" : ""} aria-pressed={language === "en"} onClick={() => chooseLanguage("en")}>EN</button>
          </div>
          <span className="language-status" aria-live="polite">{text.status}</span>
          <div className="nav-mobile-footer" aria-hidden="true"><span>MOVING WHAT MATTERS</span><span>KRK LATINOAMERICANA</span></div>
        </div>
        <a className="nav-cta" href={`${base}/#contacto`} onClick={close}><span>{text.contact}</span><i aria-hidden="true">↗</i></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? text.menuClose : text.menuOpen} aria-expanded={menuOpen} aria-controls="primary-navigation"><i /><i /></button>
      </nav>
    </header>
  );
}
