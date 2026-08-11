import { ServiceDetail, type ProductItem } from "../../_components/ServiceDetail";

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const items: ProductItem[] = [
  {
    title: { es: "Sistemas de manejo de granos y harina", en: "Grain and Flour Handling Systems" },
    images: [
      { file: "port-mining-systems/grain-handling-01.webp", caption: "Renova — Timbúes" },
    ],
    es: lorem,
    en: lorem,
  },
  {
    title: { es: "Sistemas de manejo de litio y materiales mineros", en: "Lithium and Mining Material Handling Systems" },
    images: [
      { file: "port-mining-systems/lithium-mining-01.webp", caption: "Minera EXAR — Jujuy" },
    ],
    es: lorem,
    en: lorem,
  },
  {
    title: { es: "Sistema de manipuleo de carbón", en: "Coal Handling System" },
    images: [
      { file: "port-mining-systems/coal-handling-01.webp", caption: "Río Turbio" },
      { file: "port-mining-systems/coal-handling-02.webp", caption: "Río Turbio" },
    ],
    es: lorem,
    en: lorem,
  },
  {
    title: { es: "Sistema de Apile", en: "Stockpile System" },
    images: [
      { file: "port-mining-systems/stockpile-systems-01.webp", caption: "Manfield — Salta" },
      { file: "port-mining-systems/stockpile-systems-02.webp", caption: "Mansfield — Salta" },
      { file: "port-mining-systems/stockpile-systems-03.webp", caption: "YPF — Añelo" },
    ],
    es: lorem,
    en: lorem,
  },
  {
    title: { es: "Sistemas de recepción y transferencias", en: "Material Receiving and Transfer Facilities" },
    images: [
      { file: "port-mining-systems/receiving-transfer-01.webp", caption: "Pier Doce — Necochea" },
    ],
    es: lorem,
    en: lorem,
  },
];

export default function Page() {
  return <ServiceDetail
    title={{ es: "Sistemas portuarios y mineros", en: "Port and mining systems" }}
    image="BACK-002.jpg"
    introTitle={{ es: "Sistemas integrados para", en: "Integrated systems for" }}
    introAccent={{ es: "operaciones exigentes.", en: "demanding operations." }}
    en="Integrated bulk material handling systems engineered for mining, ports and industrial facilities, providing reliable and efficient solutions for material receiving, storage, transfer and processing operations."
    es="Sistemas integrados de manejo de materiales a granel diseñados para instalaciones mineras, portuarias e industriales, proporcionando soluciones confiables y eficientes para las operaciones de recepción, almacenamiento, transferencia y procesamiento de materiales."
    items={items}
  />;
}
