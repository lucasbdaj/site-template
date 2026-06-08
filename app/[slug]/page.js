import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Servicos from "../../components/Servicos";
import Sobre from "../../components/Sobre";
import Contato from "../../components/Contato";
import Footer from "../../components/Footer";
import SiteShell from "../../components/SiteShell";

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

  return (
    <SiteShell config={CONFIG}>
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