import type { Metadata } from "next";
import { Host_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";

const hostGrotesk = Host_Grotesk({
  variable: "--font-host-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Liguria | Servicios de aseo profesional",
  description:
    "Liguria Servicios de Aseo SpA. Limpieza profesional para hogares, condominios, edificios y oficinas en Santiago, Chile. Tel. +56 9 4256 3693 · contacto@limpiezasliguria.cl",
  openGraph: {
    title: "Liguria | Servicios de aseo profesional",
    description:
      "Limpieza profesional para hogares, condominios, edificios y oficinas en Santiago, Chile.",
    images: ["/liguria-long.png"],
    locale: "es_CL",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Liguria Servicios de Aseo SpA",
  image: "/liguria-long.png",
  logo: "/liguria-long.png",
  telephone: "+56942563693",
  email: "contacto@limpiezasliguria.cl",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Santiago",
    addressCountry: "CL",
  },
  areaServed: "Santiago, Chile",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "18:00",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${hostGrotesk.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
