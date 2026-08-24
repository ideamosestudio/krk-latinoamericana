import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Componentes para transportadores",
  description: "Rodillos, soportes, poleas, estructuras metálicas, limpieza de bandas, chutes y tolvas para sistemas transportadores.",
  alternates: { canonical: "/servicios/conveyor-components/" },
  openGraph: { title: "Componentes para transportadores | KRK", description: "Componentes diseñados para máxima confiabilidad y desempeño.", url: "/servicios/conveyor-components/" },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
