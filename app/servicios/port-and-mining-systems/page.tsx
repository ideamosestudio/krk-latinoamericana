import { ServiceDetail, type ProductItem } from "../../_components/ServiceDetail";

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const items: ProductItem[] = [
  {
    title: { es: "Sistemas de manejo de granos y harina", en: "Grain and Flour Handling Systems" },
    images: [
      { file: "port-mining-systems/grain-handling-01.webp", caption: "Renova — Timbúes" },
    ],
    es: "Sistemas integrales para el manejo de granos diseñados para maximizar la eficiencia operativa, preservar la calidad del producto y garantizar un flujo confiable del material. Nuestras soluciones abarcan la recepción, el transporte, el almacenamiento, la recuperación y la carga a buques o camiones, adaptándose a los requerimientos operativos de terminales y plantas de procesamiento.",
    en: "Integrated grain handling systems engineered to maximize operational efficiency, product integrity and reliable material flow. Our solutions cover receiving, conveying, storage, reclaim and ship or truck loading, tailored to the operational requirements of terminals and processing facilities.",
  },
  {
    title: { es: "Sistemas de manejo de litio y materiales mineros", en: "Lithium and Mining Material Handling Systems" },
    images: [
      { file: "port-mining-systems/lithium-mining-01.webp", caption: "Minera EXAR — Jujuy" },
    ],
    es: "Sistemas integrales de manejo de materiales para operaciones mineras, destinados al transporte y transferencia de litio, concentrados de cobre y otros minerales a granel. Nuestras soluciones combinan ingeniería especializada, equipos confiables y tecnologías probadas para responder a las exigencias operativas de las instalaciones mineras modernas.",
    en: "Integrated bulk material handling systems for mining operations, supporting the transportation and transfer of lithium, copper concentrates and other bulk minerals. Our solutions combine specialized engineering, reliable equipment and proven technologies to meet the operational demands of modern mining facilities.",
  },
  {
    title: { es: "Sistema de manipuleo de carbón", en: "Coal Handling System" },
    images: [
      { file: "port-mining-systems/coal-handling-01.webp", caption: "Río Turbio" },
      { file: "port-mining-systems/coal-handling-02.webp", caption: "Río Turbio" },
    ],
    es: "Sistemas integrales para el manejo de carbón diseñados para centrales eléctricas, operaciones mineras e instalaciones portuarias. Desarrollados para proporcionar un transporte seguro, confiable y eficiente, minimizando la generación de polvo, las pérdidas de material y los requerimientos de mantenimiento.",
    en: "Integrated coal handling systems engineered for power plants, mining operations and port facilities. Designed to provide reliable, safe and efficient material transportation while minimizing dust generation, material losses and maintenance requirements.",
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
