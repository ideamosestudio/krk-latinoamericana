import { ServiceDetail, type ProductItem } from "../../_components/ServiceDetail";

const items: ProductItem[] = [
  {
    title: { es: "Ingeniería Conceptual", en: "Conceptual Engineering" },
    images: [
      { file: "PORTADA-003.jpg", caption: { es: "Planificación y definición del proceso", en: "Process planning and definition" } },
    ],
    es: "Definición del proceso, estudios de factibilidad, layouts y selección de equipos.",
    en: "Process definition, feasibility studies, layouts and equipment selection.",
  },
  {
    title: { es: "Ingeniería Básica", en: "Basic Engineering" },
    images: [
      { file: "IMG-009.jpg", caption: { es: "Criterios y especificaciones de proyecto", en: "Project criteria and specifications" } },
    ],
    es: "Criterios de diseño, planos generales y especificaciones técnicas.",
    en: "Design criteria, general arrangements, technical specifications.",
  },
  {
    title: { es: "Ingeniería de Detalle", en: "Detailed Engineering" },
    images: [
      { file: "conveyor-components/conveyor-structures-01.webp", caption: "Minera Exar — Salar de Cauchari" },
    ],
    es: "Planos de fabricación, sistemas transportadores, estructuras metálicas y estaciones de transferencia.",
    en: "Manufacturing drawings, conveyor systems, steel structures and transfer stations.",
  },
  {
    title: { es: "Diseño Mecánico", en: "Mechanical Design" },
    images: [
      { file: "conveyor-components/conveyor-pulleys-01.webp", caption: { es: "Cálculo e integración de equipos", en: "Equipment calculation and integration" } },
    ],
    es: "Cálculos de transportadores, dimensionamiento de equipos e integración del sistema.",
    en: "Conveyor calculations, equipment sizing and system integration.",
  },
  {
    title: { es: "Ingeniería Estructural", en: "Structural Engineering" },
    images: [
      { file: "conveyor-components/galleries-transfer-towers-01.webp", caption: "Pier Doce — Necochea" },
    ],
    es: "Diseño y cálculo de estructuras para sistemas transportadores.",
    en: "Structural design and calculations for conveyor steelwork.",
  },
  {
    title: { es: "Soporte a Compras", en: "Procurement Support" },
    images: [
      { file: "bulk-equipment/belt-conveyors-01.webp", caption: "Molinos Agro — San Lorenzo" },
    ],
    es: "Evaluación técnica de ofertas y soporte a proveedores.",
    en: "Technical bid evaluation and vendor support.",
  },
  {
    title: { es: "Soporte a Fabricación", en: "Manufacturing Support" },
    images: [
      { file: "conveyor-components/idlers-frames-02.webp", caption: { es: "Control de calidad y seguimiento", en: "Quality control and expediting" } },
    ],
    es: "QA/QC, inspecciones y seguimiento de fabricación.",
    en: "QA/QC, inspections and expediting.",
  },
  {
    title: { es: "Ingeniería en Campo", en: "Site Engineering" },
    images: [
      { file: "PORTADA-006.jpg", caption: { es: "Supervisión y puesta en marcha", en: "Site supervision and commissioning" } },
    ],
    es: "Supervisión de montaje, puesta en marcha y asistencia técnica.",
    en: "Installation supervision, commissioning and technical assistance.",
  },
];

export default function Page() {
  return <ServiceDetail
    title={{ es: "Servicios de ingeniería y proyectos", en: "Engineering and project services" }}
    image="PORTADA-003.jpg"
    introTitle={{ es: "Ingeniería y gestión para", en: "Engineering and management for" }}
    introAccent={{ es: "ejecución integral.", en: "end-to-end execution." }}
    en="We develop conceptual, basic and detailed engineering for bulk material handling systems, integrating mechanical and structural design, technical specifications, procurement support, manufacturing management, QA/QC and site assistance during installation and commissioning. Our approach combines engineering expertise, field experience and project integration to reduce risk and optimize execution."
    es="Desarrollamos ingeniería conceptual, básica y de detalle para sistemas de manejo de materiales a granel, integrando diseño mecánico y estructural, especificaciones técnicas, soporte a compras, gestión de fabricación, QA/QC y asistencia durante el montaje y la puesta en marcha. Nuestro enfoque combina capacidad técnica, experiencia en terreno y una visión integral del proyecto para reducir riesgos y optimizar la ejecución."
    catalogEyebrow={{ es: "CAPACIDADES DE INGENIERÍA", en: "ENGINEERING CAPABILITIES" }}
    catalogTitle={{ es: "Ingeniería para cada", en: "Engineering for every" }}
    catalogAccent={{ es: "etapa del proyecto.", en: "project stage." }}
    catalogItemLabel={{ es: "CAPACIDAD", en: "CAPABILITY" }}
    items={items}
  />;
}
