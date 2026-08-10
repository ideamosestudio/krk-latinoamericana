import { ServiceDetail, type ProductItem } from "../../_components/ServiceDetail";

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const items: ProductItem[] = [
  {
    title: { es: "Transportador por aire", en: "Air Supported Belt Conveyor" },
    images: [
      { file: "bulk-equipment/air-supported-01.webp", caption: "T6 — Puerto San Martín" },
      { file: "bulk-equipment/air-supported-02.webp", caption: "T6 — Puerto San Martín" },
    ],
    es: lorem,
    en: lorem,
  },
  {
    title: { es: "Cintas transportadoras", en: "Belt Conveyors" },
    images: [
      { file: "bulk-equipment/belt-conveyors-01.webp", caption: "Molinos Agro — San Lorenzo" },
      { file: "bulk-equipment/belt-conveyors-02.webp", caption: "YPF — Vaca Muerta" },
    ],
    en: "Engineered conveyor systems for reliable and efficient bulk material transportation, tailored to meet the operational and environmental requirements of each project.",
    es: "Sistemas de cintas transportadoras diseñados para brindar un transporte de materiales a granel confiable y eficiente, adaptados a los requerimientos operativos y ambientales de cada proyecto.",
  },
  {
    title: { es: "Alimentadores por banda", en: "Belt Feeders" },
    images: [
      { file: "bulk-equipment/belt-feeders-01.webp", caption: "Minera Exar — Salar de Cauchari" },
      { file: "bulk-equipment/belt-feeders-02.webp", caption: "Minera Exar — Salar de Cauchari" },
    ],
    en: "Engineered belt feeders designed to provide accurate and reliable bulk material extraction, ensuring precise flow control and consistent feeding to downstream equipment.",
    es: "Alimentadores de banda diseñados para proporcionar una extracción precisa y confiable de materiales a granel, garantizando un control exacto del flujo y una alimentación uniforme hacia los equipos posteriores del proceso.",
  },
  {
    title: { es: "Elevador a cangilones", en: "Bucket Elevators" },
    images: [
      { file: "bulk-equipment/bucket-elevators-01.webp", caption: "Terminal 6 — Puerto San Martín" },
      { file: "bulk-equipment/bucket-elevators-02.webp", caption: "Viterra — Bahía Blanca" },
      { file: "bulk-equipment/bucket-elevators-03.webp", caption: "Viterra — Bahía Blanca" },
    ],
    en: "Bucket elevators engineered for reliable and continuous vertical transportation of bulk materials, combining high operational efficiency, low maintenance requirements and long service life.",
    es: "Elevadores de cangilones diseñados para el transporte vertical continuo y confiable de materiales a granel, combinando alta eficiencia operativa, bajos requerimientos de mantenimiento y una prolongada vida útil.",
  },
  {
    title: { es: "Cintas enclausuradas", en: "Enclosed Conveyors" },
    images: [
      { file: "bulk-equipment/enclosed-conveyors-01.webp", caption: "Renova — Timbúes" },
      { file: "bulk-equipment/enclosed-conveyors-02.webp", caption: "Renova — Timbúes" },
      { file: "bulk-equipment/enclosed-conveyors-03.webp", caption: "Viterra — Bahía Blanca" },
    ],
    en: "Fully enclosed conveyor systems designed to minimize dust emissions and environmental impact. External bearings and rotating components improve reliability, reduce maintenance and enhance operational safety, particularly in grain and soybean handling.",
    es: "Sistemas de transporte completamente cerrados diseñados para minimizar las emisiones de polvo y el impacto ambiental. Los rodamientos y componentes rotativos externos mejoran la confiabilidad, reducen el mantenimiento y aumentan la seguridad operativa, especialmente en el manejo de granos y soja.",
  },
  {
    title: { es: "Grasshopper", en: "Grasshopper" },
    images: [
      { file: "bulk-equipment/grasshopper-01.webp", caption: { es: "Cadena de correas móviles", en: "Mobile conveyor line" } },
      { file: "bulk-equipment/grasshopper-02.webp", caption: "Puerto Las Losas — Huasco, Chile" },
    ],
    en: "Modular and portable conveyor systems designed to provide flexible bulk material transfer, allowing quick relocation and efficient adaptation to changing operational requirements.",
    es: "Sistemas transportadores modulares y portátiles diseñados para brindar una transferencia flexible de materiales a granel, permitiendo una rápida reubicación y una eficiente adaptación a los cambios operativos.",
  },
  {
    title: { es: "Overland Conveyors", en: "Overland Conveyors" },
    images: [
      { file: "bulk-equipment/overland-conveyors-01.webp", caption: "RAHCO — Veladero" },
      { file: "bulk-equipment/overland-conveyors-02.webp", caption: "YCRT — Río Turbio" },
      { file: "bulk-equipment/overland-conveyors-03.webp", caption: "YCRT — Río Turbio" },
    ],
    en: "Long-distance conveying systems engineered to optimize energy efficiency, reduce operating costs and provide reliable bulk material transportation across challenging terrain.",
    es: "Sistemas de transporte de larga distancia diseñados para optimizar la eficiencia energética, reducir los costos operativos y garantizar un transporte confiable de materiales a granel sobre terrenos de alta complejidad.",
  },
  {
    title: { es: "Cinta tubular", en: "Pipe Conveyors" },
    images: [
      { file: "bulk-equipment/pipe-conveyors-01.webp", caption: "PVSA — Quintero, Chile" },
      { file: "bulk-equipment/pipe-conveyors-02.webp", caption: "PVSA — Quintero, Chile" },
      { file: "bulk-equipment/pipe-conveyors-03.webp", caption: "Renova — Timbúes" },
    ],
    en: "Engineered for complex routes, Pipe Conveyors allow continuous material transportation over challenging terrain while reducing transfer stations, optimizing energy efficiency and minimizing dust emissions, spillage and environmental impact.",
    es: "Diseñados para recorridos complejos, los Pipe Conveyors permiten el transporte continuo de materiales a través de terrenos desafiantes, reduciendo estaciones de transferencia, optimizando la eficiencia energética y minimizando las emisiones de polvo, los derrames de material y el impacto ambiental.",
  },
  {
    title: { es: "Tripper Cars", en: "Tripper Cars" },
    images: [
      { file: "bulk-equipment/tripper-cars-01.webp", caption: "Molinos Agro — San Lorenzo" },
      { file: "bulk-equipment/tripper-cars-02.webp", caption: "Tenova — San Pablo, Brasil" },
      { file: "bulk-equipment/tripper-cars-03.webp", caption: "Terminal 6 — Puerto San Martín" },
    ],
    en: "Engineered tripper cars providing accurate and flexible material distribution, maximizing storage capacity and improving the operational efficiency of stockpiles, silos and bulk material storage facilities.",
    es: "Diseñados para proporcionar una distribución precisa y flexible de materiales, maximizando la capacidad de almacenamiento y mejorando la eficiencia operativa de acopios, silos e instalaciones de almacenamiento de materiales a granel.",
  },
];

export default function Page() {
  return <ServiceDetail
    title={{ es: "Equipos para manejo de materiales a granel", en: "Bulk material handling equipment" }}
    image="PORTADA-006.jpg"
    introTitle={{ es: "Ingeniería para el movimiento", en: "Engineering for continuous" }}
    introAccent={{ es: "continuo de materiales.", en: "material movement." }}
    en="Engineered conveying equipment for reliable, efficient and continuous bulk material handling across demanding industrial operations."
    es="Equipos de transporte diseñados para el manejo confiable, eficiente y continuo de materiales a granel en operaciones industriales exigentes."
    items={items}
  />;
}
