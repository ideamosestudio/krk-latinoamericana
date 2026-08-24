import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "./_components/LanguageProvider";
import { BackToTopButton } from "./_components/BackToTopButton";
import "./globals.css";
import "./language.css";
import "./experience-visuals.css";
import "./engineering-capabilities.css";
import "./product-carousel.css";
import "./back-to-top.css";
import "./premium-navigation.css";
import "./mobile-ux.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://krk.com.ar";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#02080c",
  colorScheme: "dark light",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "KRK Latinoamericana | Ingeniería en movimiento",
    template: "%s | KRK Latinoamericana",
  },
  description: "Ingeniería, fabricación y ejecución de sistemas para transporte de materiales a granel en minería, puertos, agroindustria, energía e industria.",
  applicationName: "KRK Latinoamericana",
  authors: [{ name: "KRK Latinoamericana S.A.", url: siteUrl }],
  creator: "KRK Latinoamericana S.A.",
  publisher: "KRK Latinoamericana S.A.",
  keywords: [
    "manejo de materiales a granel",
    "cintas transportadoras",
    "ingeniería mecánica",
    "sistemas portuarios",
    "sistemas mineros",
    "bulk material handling",
    "conveyor systems",
    "Argentina",
    "Latinoamérica",
  ],
  alternates: { canonical: "/" },
  category: "Engineering",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "KRK Latinoamericana | Moving What Matters",
    description: "Ingeniería, fabricación y ejecución de sistemas para transporte de materiales a granel.",
    url: siteUrl,
    siteName: "KRK Latinoamericana",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "KRK — Moving What Matters" }],
    locale: "es_AR",
    alternateLocale: ["en_US"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KRK Latinoamericana | Moving What Matters",
    description: "Engineering, manufacturing and execution of bulk material handling systems.",
    images: ["/og.jpg"],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "KRK Latinoamericana S.A.",
        url: siteUrl,
        logo: `${siteUrl}/images/KRK-LOGO-BLANCO-3.png`,
        foundingDate: "2001",
        description: "Ingeniería, fabricación y ejecución de sistemas para transporte y manejo de materiales a granel.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Monroe 5088, Piso 3",
          addressLocality: "Ciudad Autónoma de Buenos Aires",
          postalCode: "1431",
          addressCountry: "AR",
        },
        areaServed: ["Argentina", "Chile", "Brazil", "Paraguay", "Uruguay"],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "KRK Latinoamericana",
        inLanguage: ["es", "en"],
        publisher: { "@id": `${siteUrl}/#organization` },
      },
    ],
  };

  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
        <LanguageProvider>
          {children}
          <BackToTopButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
