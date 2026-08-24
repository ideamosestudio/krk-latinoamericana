import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Productos y servicios",
  description: "Equipos, componentes, sistemas portuarios y mineros, e ingeniería integral para transporte y manejo de materiales a granel.",
  alternates: { canonical: "/servicios/" },
  openGraph: { title: "Productos y servicios | KRK Latinoamericana", description: "Soluciones integrales para el manejo de materiales a granel.", url: "/servicios/" },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
