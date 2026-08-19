"use client";

import type { ReactNode } from "react";
import { InnerHero, InnerShell, base } from "./InnerShell";
import { ServiceGallery } from "./ServiceGallery";
import { ClientLogoStrip } from "./ClientLogoStrip";
import { ProductCarousel, type ProductImage } from "./ProductCarousel";
import { selectText, useLanguage, type LocalizedText } from "./LanguageProvider";

export type ProductItem = { title: LocalizedText | string; en: string; es: string; images: ProductImage[] };
export type GalleryItem = { file: string; alt: LocalizedText | string; position?: string; fit?: "cover" | "contain" };

const galleryImages: GalleryItem[] = [
  { file: "engineering-project-02.webp", alt: { es: "Simulación DEM de velocidad de transferencia de material", en: "DEM simulation of material transfer velocity" }, position: "58% center" },
  { file: "engineering-project-01.webp", alt: { es: "Modelo 3D de sistema transportador y domo de almacenamiento", en: "3D model of a conveyor system and storage dome" }, position: "56% center" },
  { file: "engineering-project-03.webp", alt: { es: "Simulación DEM de flujo de material en chute", en: "DEM simulation of material flow through a chute" }, position: "57% center" },
  { file: "engineering-project-04.webp", alt: { es: "Modelo de ingeniería de chute y sistema de alimentación", en: "Engineering model of a chute and feeding system" }, position: "50% center" },
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
  catalogEyebrow?: LocalizedText | string;
  catalogTitle?: LocalizedText | string;
  catalogAccent?: LocalizedText | string;
  catalogItemLabel?: LocalizedText | string;
  children?: ReactNode;
  galleryBeforeContent?: boolean;
  galleryAfterContent?: boolean;
  hideIntro?: boolean;
};

export function ServiceDetail({ title, en, es, image, introTitle = { es: "Ingeniería para", en: "Engineering for" }, introAccent = { es: "operaciones exigentes.", en: "demanding operations." }, items = [], gallery = galleryImages, catalogEyebrow, catalogTitle, catalogAccent, catalogItemLabel, children, galleryBeforeContent = false, galleryAfterContent = false, hideIntro = false }: ServiceDetailProps) {
  const { language } = useLanguage();
  const text = language === "es" ? {
    eyebrow: "PRODUCTOS Y SERVICIOS", description: "Ingeniería, fabricación y ejecución integradas para el movimiento confiable de materiales.", capabilities: "KRK / CAPACIDADES", condition: "Soluciones desarrolladas para cada condición de operación.", overview: "ES / DESCRIPCIÓN", consult: "Consultar este servicio", all: "Ver todos los servicios", equipment: "EQUIPOS Y SISTEMAS", products: "Productos para un flujo", continuous: "continuo y confiable.", itemLabel: "EQUIPO",
  } : {
    eyebrow: "PRODUCTS AND SERVICES", description: "Integrated engineering, manufacturing and execution for reliable material movement.", capabilities: "KRK / CAPABILITIES", condition: "Solutions developed for every operating condition.", overview: "EN / OVERVIEW", consult: "Enquire about this service", all: "View all services", equipment: "EQUIPMENT AND SYSTEMS", products: "Products for continuous", continuous: "and reliable flow.", itemLabel: "EQUIPMENT",
  };
  const overview = language === "es" ? es : en;
  const catalog = {
    eyebrow: catalogEyebrow ? selectText(catalogEyebrow, language) : text.equipment,
    title: catalogTitle ? selectText(catalogTitle, language) : text.products,
    accent: catalogAccent ? selectText(catalogAccent, language) : text.continuous,
    itemLabel: catalogItemLabel ? selectText(catalogItemLabel, language) : text.itemLabel,
  };

  return <InnerShell>
    <InnerHero eyebrow={text.eyebrow} title={title} image={image} description={text.description} />
    {!hideIntro ? <section className="detail-intro section" id="contenido"><div className="container detail-editorial"><aside><div className="eyebrow"><span /> {text.capabilities}</div><p>{text.condition}</p></aside><div><h2>{selectText(introTitle, language)}<br /><em>{selectText(introAccent, language)}</em></h2><div className="detail-language-single"><small>{text.overview}</small><p>{overview}</p></div><div className="detail-actions"><a className="detail-cta dark" href={`${base}/#contacto`}>{text.consult} <i>↗</i></a><a className="detail-secondary" href={`${base}/servicios/`}><i>←</i> {text.all}</a></div></div></div></section> : null}
    {children && galleryBeforeContent ? <ServiceGallery images={gallery} /> : null}
    {children ?? (items.length > 0 ? <section className="product-catalog" id="equipos"><div className="container catalog-heading"><div className="eyebrow light"><span /> {catalog.eyebrow}</div><h2>{catalog.title}<br /><em>{catalog.accent}</em></h2></div><div className="container">{items.map((item, index) => {
      const itemTitle = selectText(item.title, language);
      return <article className="product-row" key={selectText(item.title, "en")}><div className="product-number">KRK / {String(index + 1).padStart(2, "0")}</div><ProductCarousel images={item.images} title={itemTitle} /><div className="product-text"><small>{catalog.itemLabel} / {String(index + 1).padStart(2, "0")}</small><h2>{itemTitle}</h2><div className="product-copy-selected"><b>{language.toUpperCase()}</b><p>{item[language]}</p></div></div></article>;
    })}</div></section> : <ServiceGallery images={gallery} />)}
    {children && galleryAfterContent ? <ServiceGallery images={gallery} /> : null}
    <ClientLogoStrip />
  </InnerShell>;
}
