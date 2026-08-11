import { ServiceDetail, type ProductItem } from "../../_components/ServiceDetail";

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const items: ProductItem[] = [
  {
    title: { es: "Sistemas de limpieza de cintas", en: "Belt Cleaning Systems" },
    images: [
      { file: "conveyor-components/belt-cleaning-systems-01.webp", caption: { es: "Cepillo en V — Cintas móviles", en: "V-plow cleaner — Mobile conveyors" } },
    ],
    es: lorem,
    en: lorem,
  },
  {
    title: { es: "Chutes y tolvas", en: "Chutes and Hoppers" },
    images: [
      { file: "conveyor-components/chutes-hoppers-01.webp", caption: "YCRT — Río Turbio" },
      { file: "conveyor-components/chutes-hoppers-02.webp", caption: "YPF — Añelo" },
    ],
    es: lorem,
    en: lorem,
  },
  {
    title: { es: "Poleas para transportadores", en: "Conveyor Pulleys" },
    images: [
      { file: "conveyor-components/conveyor-pulleys-01.webp", caption: { es: "Poleas para transportadores", en: "Conveyor pulleys" } },
    ],
    es: lorem,
    en: lorem,
  },
  {
    title: { es: "Estructuras para transportadores", en: "Conveyor Structures" },
    images: [
      { file: "conveyor-components/conveyor-structures-01.webp", caption: "Minera Exar — Salar de Cauchari" },
      { file: "conveyor-components/conveyor-structures-02.webp", caption: "PVSA — Chile" },
    ],
    es: lorem,
    en: lorem,
  },
  {
    title: { es: "Galerías y torres de transferencia", en: "Galleries and Transfer Towers" },
    images: [
      { file: "conveyor-components/galleries-transfer-towers-01.webp", caption: "Pier Doce — Necochea" },
      { file: "conveyor-components/galleries-transfer-towers-02.webp", caption: "PLL — Chile" },
      { file: "conveyor-components/galleries-transfer-towers-03.webp", caption: "Terminal 6 — Puerto San Martín" },
    ],
    es: lorem,
    en: lorem,
  },
  {
    title: { es: "Rodillos y soporte de rodillos", en: "Idlers and Idler Frames" },
    images: [
      { file: "conveyor-components/idlers-frames-01.webp", caption: { es: "Rodillos y soporte de rodillos — Foto 02", en: "Idlers and frames — Photo 02" } },
      { file: "conveyor-components/idlers-frames-02.webp", caption: { es: "Rodillos y soporte de rodillos — Foto 09", en: "Idlers and frames — Photo 09" } },
      { file: "conveyor-components/idlers-frames-03.webp", caption: { es: "Rodillos y soporte de rodillos", en: "Idlers and frames" } },
    ],
    es: "Amplia gama de rodillos y estaciones para cintas transportadoras diseñados para aplicaciones mineras, portuarias, industriales y agroindustriales. Fabricados de acuerdo con los estándares CEMA, nuestra línea de productos incluye rodillos de carga, retorno, impacto, autocentrantes y especiales, junto con una completa gama de estaciones diseñadas para garantizar un funcionamiento confiable, una prolongada vida útil y bajos requerimientos de mantenimiento.",
    en: "Complete range of conveyor idlers and idler frames engineered for mining, port, industrial and agro-processing applications. Manufactured in accordance with CEMA standards, our product portfolio includes carrying, return, impact, training and special idlers, together with a full range of idler frames designed to ensure reliable operation, long service life and low maintenance.",
  },
  {
    title: { es: "Sistemas de contrapeso", en: "Take-Up Systems" },
    images: [
      { file: "conveyor-components/take-up-systems-01.webp", caption: "PLL — Chile" },
    ],
    es: lorem,
    en: lorem,
  },
];

export default function Page() {
  return <ServiceDetail
    title={{ es: "Componentes para transportadores", en: "Conveyor components" }}
    image="IMG-009.jpg"
    introTitle={{ es: "Componentes diseñados para", en: "Components engineered for" }}
    introAccent={{ es: "máxima confiabilidad.", en: "maximum reliability." }}
    en="Engineered conveyor components focused on maximizing conveyor reliability and performance. Our core product line includes idlers and idler frames, complemented by pulleys, take-up systems, chutes and other essential conveyor components."
    es="Componentes para cintas transportadoras diseñados para maximizar la confiabilidad y el desempeño de los sistemas de transporte. Nuestra principal línea de productos comprende rodillos y soporte de rodillos, complementada con poleas, sistemas de contrapeso, chutes y otros componentes esenciales para transportadores."
    items={items}
  />;
}
