"use client";

import { useEffect, useState } from "react";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function ServiceGallery({ images }: { images: { file: string; alt: string }[] }) {
  const [active, setActive] = useState<number | null>(null);
  useEffect(() => {
    if (active === null) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setActive(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", close);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", close); };
  }, [active]);
  return <section className="service-gallery" aria-label="Galería de proyectos y capacidades"><div className="container service-gallery-head"><div className="eyebrow light"><span /> EXPERIENCIA EN CAMPO</div><h2>Ingeniería que se convierte<br /><em>en operación.</em></h2></div><div className="service-gallery-grid">{images.map((image, index) => <button type="button" onClick={() => setActive(index)} key={`${image.file}-${index}`} aria-label={`Ampliar: ${image.alt}`}><img src={`${base}/images/${image.file}`} alt={image.alt} /><span>{String(index + 1).padStart(2, "0")} <i>↗</i></span></button>)}</div>{active !== null && <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={images[active].alt} onClick={() => setActive(null)}><button type="button" onClick={() => setActive(null)} aria-label="Cerrar imagen">×</button><img src={`${base}/images/${images[active].file}`} alt={images[active].alt} onClick={(event) => event.stopPropagation()} /><p>{images[active].alt}</p></div>}</section>;
}
