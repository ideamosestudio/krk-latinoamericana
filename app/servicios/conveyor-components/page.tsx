import { ServiceDetail } from "../../_components/ServiceDetail";

const gallery = [
  { file: "conveyor-components-01.png", alt: "Estructura y pasarela industrial para sistema transportador" },
  { file: "conveyor-components-02.png", alt: "Montaje de estructuras de transportadores en terminal portuaria" },
  { file: "conveyor-components-03.png", alt: "Componentes estructurales prefabricados para transportadores" },
  { file: "conveyor-components-04.png", alt: "Estaciones de rodillos y estructuras fabricadas por KRK" },
];

export default function Page() { return <ServiceDetail title="Conveyor components" image="IMG-009.jpg" introTitle="Componentes diseñados para" introAccent="máxima confiabilidad." en="Engineered conveyor components focused on maximizing conveyor reliability and performance. Our core product line includes idlers and idler frames, complemented by pulleys, take-up systems, chutes and other essential conveyor components." es="Componentes para cintas transportadoras diseñados para maximizar la confiabilidad y el desempeño de los sistemas de transporte. Nuestra principal línea de productos comprende rodillos y estaciones de rodillos, complementada con poleas, sistemas tensores, chutes y otros componentes esenciales para transportadores." gallery={gallery} />; }
