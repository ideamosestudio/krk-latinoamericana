import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Equipos para manejo de materiales a granel",
  description: "Cintas transportadoras, overland y pipe conveyors, elevadores, alimentadores, tripper cars y equipos para transporte continuo de materiales.",
  alternates: { canonical: "/servicios/bulk-material-handling-equipment/" },
  openGraph: { title: "Equipos para manejo de materiales a granel | KRK", description: "Equipos de transporte diseñados para operaciones industriales exigentes.", url: "/servicios/bulk-material-handling-equipment/" },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
