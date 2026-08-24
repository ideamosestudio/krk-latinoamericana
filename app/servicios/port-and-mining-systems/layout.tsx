import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sistemas portuarios y mineros",
  description: "Sistemas integrados para manejo de granos, litio, minerales y carbón, acopio, recepción y transferencia de materiales a granel.",
  alternates: { canonical: "/servicios/port-and-mining-systems/" },
  openGraph: { title: "Sistemas portuarios y mineros | KRK", description: "Sistemas integrados para minería, puertos e instalaciones industriales.", url: "/servicios/port-and-mining-systems/" },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
