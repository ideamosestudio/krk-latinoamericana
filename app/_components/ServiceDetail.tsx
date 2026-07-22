import { InnerHero, InnerShell, base } from "./InnerShell";

export type ProductItem = { title: string; en: string; es: string; image: string };

export function ServiceDetail({ title, en, es, image, items = [] }: { title: string; en: string; es: string; image: string; items?: ProductItem[] }) {
  return <InnerShell><InnerHero eyebrow="PRODUCTOS Y SERVICIOS" title={title} image={image} /><section className="detail-intro section"><div className="container detail-intro-grid"><div className="eyebrow"><span /> KRK / CAPABILITIES</div><div className="bilingual"><p className="english">{en}</p><p>{es}</p><a className="detail-cta" href={`${base}/#contacto`}>Conversar con ingeniería <i>↗</i></a></div></div></section>{items.length > 0 && <section className="product-catalog"><div className="container">{items.map((item, index) => <article className="product-row" key={item.title}><div className="product-number">{String(index + 1).padStart(2, "0")}</div><div className="product-image"><img src={`${base}/images/${item.image}`} alt={item.title} /></div><div className="product-text"><h2>{item.title}</h2><p className="english">{item.en}</p><p>{item.es}</p></div></article>)}</div></section>}</InnerShell>;
}
