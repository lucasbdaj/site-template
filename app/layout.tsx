import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://basisdatum.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Basis Datum Services | Criação de Sites e Google Meu Negócio em Bauru",
    template: "%s | Basis Datum Services",
  },
  description:
    "Criação de sites profissionais rápidos, responsivos e gestão de Perfil no Google Maps para comércio e empresas em Bauru e região. Atraia mais clientes pelo WhatsApp.",
  keywords: [
    "Criação de sites Bauru",
    "Desenvolvimento de sites Bauru",
    "Google Meu Negócio Bauru",
    "SEO Local Bauru",
    "Presença digital Bauru",
    "Sites para empresas Bauru",
  ],
  authors: [{ name: "Lucas Borges - Basis Datum", url: "https://basisdatum.com.br" }],
  creator: "Basis Datum",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: `${baseUrl}/services`,
    title: "Basis Datum Services | Presença Digital para Negócios em Bauru",
    description:
      "Sites modernos de alta conversão e posicionamento no topo do Google Maps para o comércio e prestadores de Bauru.",
    siteName: "Basis Datum Services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Basis Datum Services | Criação de Sites e SEO em Bauru",
    description:
      "Coloque sua empresa no Google e receba mais orçamentos diretamente no WhatsApp.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  // Schema estruturado para o Google Maps / SEO Local
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Basis Datum Services",
    image: `${baseUrl}/services/logo.png`,
    description:
      "Desenvolvimento de sites profissionais, SEO Local e gestão de Perfil de Empresas no Google Maps em Bauru e região.",
    url: `${baseUrl}/services`,
    telephone: "+5514988076360",
    email: "lucasborges@outlook.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bauru",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    areaServed: [
      { "@type": "City", name: "Bauru" },
      { "@type": "State", name: "São Paulo" },
    ],
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
  };

  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="antialiased bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}