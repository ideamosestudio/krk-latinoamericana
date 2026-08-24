import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios de ingeniería y proyectos",
  description: "Ingeniería conceptual, básica y de detalle, diseño mecánico y estructural, soporte a compras, fabricación, QA/QC y asistencia en obra.",
  alternates: { canonical: "/servicios/engineering-and-project-services/" },
  openGraph: { title: "Servicios de ingeniería y proyectos | KRK", description: "Ingeniería y gestión integral para reducir riesgos y optimizar la ejecución.", url: "/servicios/engineering-and-project-services/" },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
