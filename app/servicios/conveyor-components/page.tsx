import { ServiceDetail, type GalleryItem } from "../../_components/ServiceDetail";

const gallery: GalleryItem[] = [
  { file: "conveyor-components-01.png", alt: { es: "Estructura y pasarela industrial para sistema transportador", en: "Industrial structure and walkway for a conveyor system" } },
  { file: "conveyor-components-02.png", alt: { es: "Montaje de estructuras de transportadores en terminal portuaria", en: "Assembly of conveyor structures at a port terminal" } },
  { file: "conveyor-components-03.png", alt: { es: "Componentes estructurales prefabricados para transportadores", en: "Prefabricated structural components for conveyors" } },
  { file: "conveyor-components-04.png", alt: { es: "Estaciones de rodillos y estructuras fabricadas por KRK", en: "Idler stations and structures manufactured by KRK" } },
];

export default function Page() { return <ServiceDetail title={{ es: "Componentes para transportadores", en: "Conveyor components" }} image="IMG-009.jpg" introTitle={{ es: "Componentes diseñados para", en: "Components engineered for" }} introAccent={{ es: "máxima confiabilidad.", en: "maximum reliability." }} en="Engineered conveyor components focused on maximizing conveyor reliability and performance. Our core product line includes idlers and idler frames, complemented by pulleys, take-up systems, chutes and other essential conveyor components." es="Componentes para cintas transportadoras diseñados para maximizar la confiabilidad y el desempeño de los sistemas de transporte. Nuestra principal línea de productos comprende rodillos y estaciones de rodillos, complementada con poleas, sistemas tensores, chutes y otros componentes esenciales para transportadores." gallery={gallery} />; }
