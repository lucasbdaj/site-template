import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Servicos from "../components/Servicos";
import Sobre from "../components/Sobre";
import Contato from "../components/Contato";
import Footer from "../components/Footer";
import SiteShell from "../components/SiteShell";
import type { ClientConfig } from "../../lib/types";

interface PageParams {
  params: Promise<{ slug: string }>;
}

function buildJsonLd(config: ClientConfig) {
  const parts = config.endereco?.split(" — ") ?? [];
  const streetAddress = parts[0]?.trim() ?? config.endereco ?? "";
  const [city = "Bauru", state = "SP"] = (parts[1]?.trim() ?? "Bauru, SP").split(", ").map(s => s.trim());

  const telephone = config.whatsapp
    ? `+55${config.whatsapp}`
    : config.telefone
      ? `+55${config.telefone}`
      : undefined;

  const sameAs = [config.instagram, config.facebook, config.linkedin, config.site].filter(Boolean);

  const ld: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "AutoRepair", // Tipagem mais específica que LocalBusiness para oficinas
    name: config.nome,
    description: config.hero?.subtitulo ?? config.slogan ?? "",
    address: {
      "@type": "PostalAddress",
      streetAddress: streetAddress,
      addressLocality: city,
      addressRegion: state,
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      addressCountry: "BR",
    },
  };

  if (telephone) ld.telephone = telephone;
  if (sameAs.length) ld.sameAs = sameAs;

  return ld;
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { CONFIG } = (await import(`../../lib/clients/${slug}`)) as { CONFIG: ClientConfig };
    const title = `${CONFIG.nome} | ${CONFIG.slogan ?? "Oficina Especializada"}`;
    const description = CONFIG.hero.subtitulo;

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        type: "website",
      },
    };
  } catch {
    return { title: "Página não encontrada" };
  }
}

export default async function ClientePage({ params }: PageParams) {
  const { slug } = await params;
  let CONFIG: ClientConfig;
  try {
    ({ CONFIG } = (await import(`../../lib/clients/${slug}`)) as { CONFIG: ClientConfig });
  } catch {
    notFound();
  }

  const jsonLd = buildJsonLd(CONFIG);

  return (
    <SiteShell config={CONFIG}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar config={CONFIG} />
      <main>
        <Hero config={CONFIG} />
        <Servicos config={CONFIG} />
        <Sobre config={CONFIG} />
        <Contato config={CONFIG} />
      </main>
      <Footer config={CONFIG} />
    </SiteShell>
  );
} 