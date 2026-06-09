import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Servicos from "../../components/Servicos";
import Sobre from "../../components/Sobre";
import Contato from "../../components/Contato";
import Footer from "../../components/Footer";
import SiteShell from "../../components/SiteShell";

function buildJsonLd(config) {
  const parts = config.endereco?.split(" — ") ?? [];
  const streetAddress = parts[0]?.trim() ?? config.endereco ?? "";
  const [city = "Bauru", state = "SP"] = (parts[1]?.trim() ?? "Bauru, SP").split(", ").map(s => s.trim());

  const telephone = config.whatsapp
    ? `+55${config.whatsapp}`
    : config.telefone
      ? `+55${config.telefone}`
      : undefined;

  const sameAs = [config.instagram, config.facebook, config.linkedin, config.site]
    .filter(Boolean);

  const ld = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": config.nome,
    "description": config.hero?.subtitulo ?? config.slogan ?? "",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": streetAddress,
      "addressLocality": city,
      "addressRegion": state,
      "addressCountry": "BR",
    },
  };

  if (telephone) ld.telephone = telephone;
  if (sameAs.length) ld.sameAs = sameAs;

  return ld;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  try {
    const { CONFIG } = await import(`../../lib/clients/${slug}.js`);
    return {
      title: CONFIG.nome,
      description: CONFIG.hero.subtitulo,
      openGraph: { title: CONFIG.nome, description: CONFIG.hero.subtitulo, type: "website" },
    };
  } catch {
    return { title: "Não encontrado" };
  }
}

export default async function ClientePage({ params }) {
  const { slug } = await params;
  let CONFIG;
  try {
    ({ CONFIG } = await import(`../../lib/clients/${slug}.js`));
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