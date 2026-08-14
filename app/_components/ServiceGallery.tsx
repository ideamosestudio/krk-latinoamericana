"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { selectText, useLanguage, type LocalizedText } from "./LanguageProvider";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
type GalleryImage = { file: string; alt: LocalizedText | string; position?: string };

export function ServiceGallery({ images }: { images: GalleryImage[] }) {
  const { language } = useLanguage();
  const [active, setActive] = useState<number | null>(null);
  const text = language === "es"
    ? { aria: "Galería de proyectos y capacidades", eyebrow: "EXPERIENCIA EN CAMPO", title: "Ingeniería que se convierte", accent: "en operación.", expand: "Ampliar", close: "Cerrar imagen" }
    : { aria: "Project and capabilities gallery", eyebrow: "FIELD EXPERIENCE", title: "Engineering transformed", accent: "into operations.", expand: "Enlarge", close: "Close image" };

  useEffect(() => {
    if (active === null) return;
    const previousOverflow = document.body.style.overflow;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setActive(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", close);
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener("keydown", close); };
  }, [active]);

  const activeAlt = active === null ? "" : selectText(images[active].alt, language);

  return <section className="service-gallery" aria-label={text.aria}>
    <div className="container service-gallery-head"><div className="eyebrow light"><span /> {text.eyebrow}</div><h2>{text.title}<br /><em>{text.accent}</em></h2></div>
    <div className="service-gallery-grid">{images.map((image, index) => {
      const alt = selectText(image.alt, language);
      return <button type="button" onClick={() => setActive(index)} key={`${image.file}-${index}`} aria-label={`${text.expand}: ${alt}`}><img src={`${base}/images/${image.file}`} alt={alt} style={image.position ? { objectPosition: image.position } : undefined} /><span>{String(index + 1).padStart(2, "0")} <i>↗</i></span></button>;
    })}</div>
    {active !== null && createPortal(<div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={activeAlt} onClick={() => setActive(null)}><button type="button" onClick={() => setActive(null)} aria-label={text.close}>×</button><img src={`${base}/images/${images[active].file}`} alt={activeAlt} onClick={(event) => event.stopPropagation()} /><p>{activeAlt}</p></div>, document.body)}
  </section>;
}
