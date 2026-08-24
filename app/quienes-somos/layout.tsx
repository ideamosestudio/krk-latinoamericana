import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiénes somos",
  description: "Conocé la trayectoria, capacidad técnica y experiencia de KRK Latinoamericana en ingeniería y ejecución de sistemas para manejo de materiales a granel.",
  alternates: { canonical: "/quienes-somos/" },
  openGraph: { title: "Quiénes somos | KRK Latinoamericana", description: "Más de 25 años de ingeniería y ejecución integral para el manejo de materiales a granel.", url: "/quienes-somos/" },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
