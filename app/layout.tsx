import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KRK Latinoamericana | Ingeniería en movimiento",
  description: "Ingeniería, fabricación y ejecución de sistemas para transporte de materiales a granel en minería, puertos, agroindustria, energía e industria.",
  metadataBase: new URL("https://krk-latinoamericana.oai.site"),
  openGraph: {
    title: "KRK Latinoamericana | Moving What Matters",
    description: "Ingeniería, fabricación y ejecución de sistemas para transporte de materiales a granel.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "KRK — Moving What Matters" }],
    locale: "es_AR",
    type: "website",
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
