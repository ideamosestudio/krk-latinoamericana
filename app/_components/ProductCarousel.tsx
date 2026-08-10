"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { base } from "./InnerShell";
import { selectText, useLanguage, type LocalizedText } from "./LanguageProvider";

export type ProductImage = { file: string; caption: LocalizedText | string };

type ProductCarouselProps = { images: ProductImage[]; title: string };

export function ProductCarousel({ images, title }: ProductCarouselProps) {
  const { language } = useLanguage();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const pointerStart = useRef<number | null>(null);
  const labels = language === "es"
    ? { previous: "Foto anterior", next: "Foto siguiente", image: "Imagen" }
    : { previous: "Previous photo", next: "Next photo", image: "Image" };

  const move = useCallback((direction: number) => {
    setActive((current) => (current + direction + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(media.matches);
    updateMotion();
    media.addEventListener("change", updateMotion);
    return () => media.removeEventListener("change", updateMotion);
  }, []);

  useEffect(() => {
    if (!rootRef.current) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.35 });
    observer.observe(rootRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (paused || !visible || reducedMotion || images.length < 2) return;
    const timer = window.setInterval(() => move(1), 5600);
    return () => window.clearInterval(timer);
  }, [images.length, move, paused, reducedMotion, visible]);

  return <div
    className="product-carousel"
    ref={rootRef}
    tabIndex={0}
    aria-roledescription="carousel"
    aria-label={title}
    onMouseEnter={() => setPaused(true)}
    onMouseLeave={() => setPaused(false)}
    onFocus={() => setPaused(true)}
    onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false); }}
    onKeyDown={(event) => {
      if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
      if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
    }}
    onPointerDown={(event) => { pointerStart.current = event.clientX; }}
    onPointerUp={(event) => {
      if (pointerStart.current === null) return;
      const delta = event.clientX - pointerStart.current;
      if (Math.abs(delta) > 45) move(delta > 0 ? -1 : 1);
      pointerStart.current = null;
    }}
  >
    <div className="product-carousel-viewport">
      <div className="product-carousel-track" style={{ transform: `translate3d(-${active * 100}%,0,0)` }}>
        {images.map((image, index) => {
          const caption = selectText(image.caption, language);
          return <figure className="product-slide" aria-hidden={index !== active} key={image.file}>
            <img src={`${base}/images/${image.file}`} alt={`${title} — ${caption}`} loading="lazy" decoding="async" />
            <figcaption><span>{caption}</span><b>{labels.image} {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</b></figcaption>
          </figure>;
        })}
      </div>
    </div>
    {images.length > 1 && <div className="product-carousel-controls">
      <button type="button" onClick={() => move(-1)} aria-label={labels.previous}>←</button>
      <div className="product-carousel-dots" aria-hidden="true">{images.map((image, index) => <i className={index === active ? "is-active" : ""} key={image.file} />)}</div>
      <button type="button" onClick={() => move(1)} aria-label={labels.next}>→</button>
    </div>}
  </div>;
}
