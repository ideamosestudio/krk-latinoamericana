"use client";

import { InnerHero, InnerShell, base } from "./InnerShell";
import { ServiceGallery } from "./ServiceGallery";
import { ClientLogoStrip } from "./ClientLogoStrip";
import { ProductCarousel, type ProductImage } from "./ProductCarousel";
import { selectText, useLanguage, type LocalizedText } from "./LanguageProvider";

export type ProductItem = { title: LocalizedText | string; en: string; es: string; images: ProductImage[] };
export type GalleryItem = { file: string; alt: LocalizedText | string };

const galleryImages: GalleryItem[] = [
  { file: "PORTADA-006.jpg", alt: { es: "Sistema de transporte de materiales a granel sobre terminal marítima", en: "Bulk material conveying system at a maritime terminal" } },
  { file: "IMG-009.jpg", alt: { es: "Transportador industrial de KRK en operación", en: "KRK industrial conveyor in operation" } },
  { file: "BACK-002.jpg", alt: { es: "Infraestructura portuaria para manejo de materiales", en: "Port infrastructure for material handling" } },
  { file: "PORTADA-003.jpg", alt: { es: "Instalación industrial y sistema de transferencia", en: "Industrial facility and transfer system" } },
];

type ServiceDetailProps = {
  title: LocalizedText | string;
  en: string;
  es: string;
  image: string;
  introTitle?: LocalizedText | string;
  introAccent?: LocalizedText | string;
  items?: ProductItem[];
  gallery?: GalleryItem[];
};

export function ServiceDetail({ title, en, es, image, introTitle = { es: "Ingeniería para", en: "Engineering for" }, introAccent = { es: "operaciones exigentes.", en: "demanding operations." }, items = [], gallery = galleryImages }: ServiceDetailProps) {
  const { language } = useLanguage();
  const text = language === "es" ? {
    eyebrow: "PRODUCTOS Y SERVICIOS", description: "Ingeniería, fabricación y ejecución integradas para el movimiento confiable de materiales.", capabilities: "KRK / CAPACIDADES", condition: "Soluciones desarrolladas para cada condición de operación.", overview: "ES / DESCRIPCIÓN", consult: "Consultar este servicio", all: "Ver todos los servicios", equipment: "EQUIPOS Y SISTEMAS", products: "Productos para un flujo", continuous: "continuo y confiable.", itemLabel: "EQUIPO",
  } : {
    eyebrow: "PRODUCTS AND SERVICES", description: "Integrated engineering, manufacturing and execution for reliable material movement.", capabilities: "KRK / CAPABILITIES", condition: "Solutions developed for every operating condition.", overview: "EN / OVERVIEW", consult: "Enquire about this service", all: "View all services", equipment: "EQUIPMENT AND SYSTEMS", products: "Products for continuous", continuous: "and reliable flow.", itemLabel: "EQUIPMENT",
  };
  const overview = language === "es" ? es : en;

  return <InnerShell>
    <InnerHero eyebrow={text.eyebrow} title={title} image={image} description={text.description} />
    <section className="detail-intro section" id="contenido"><div className="container detail-editorial"><aside><div className="eyebrow"><span /> {text.capabilities}</div><p>{text.condition}</p></aside><div><h2>{selectText(introTitle, language)}<br /><em>{selectText(introAccent, language)}</em></h2><div className="detail-language-single"><small>{text.overview}</small><p>{overview}</p></div><div className="detail-actions"><a className="detail-cta dark" href={`${base}/#contacto`}>{text.consult} <i>↗</i></a><a className="detail-secondary" href={`${base}/servicios/`}><i>←</i> {text.all}</a></div></div></div></section>
    {items.length > 0 ? <section className="product-catalog" id="equipos"><div className="container catalog-heading"><div className="eyebrow light"><span /> {text.equipment}</div><h2>{text.products}<br /><em>{text.continuous}</em></h2></div><div className="container">{items.map((item, index) => {
      const itemTitle = selectText(item.title, language);
      return <article className="product-row" key={selectText(item.title, "en")}><div className="product-number">KRK / {String(index + 1).padStart(2, "0")}</div><ProductCarousel images={item.images} title={itemTitle} /><div className="product-text"><small>{text.itemLabel} / {String(index + 1).padStart(2, "0")}</small><h2>{itemTitle}</h2><div className="product-copy-selected"><b>{language.toUpperCase()}</b><p>{item[language]}</p></div></div></article>;
    })}</div></section> : <ServiceGallery images={gallery} />}
    <ClientLogoStrip />
  </InnerShell>;
}
