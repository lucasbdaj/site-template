import { CONFIG } from "../lib/clients/basis-datum";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Servicos from "../components/Servicos";
import Sobre from "../components/Sobre";
import Contato from "../components/Contato";
import Footer from "../components/Footer";
import SiteShell from "../components/SiteShell";
import Portfolio from "../components/Portfolio";

export function generateMetadata() {
  return {
    title: CONFIG.nome,
    description: CONFIG.hero.subtitulo,
    openGraph: { title: CONFIG.nome, description: CONFIG.hero.subtitulo, type: "website" },
  };
}

export default function Home() {
  return (
    <SiteShell config={CONFIG}>
      <Navbar config={CONFIG} />
      <main>
        <Hero config={CONFIG} />
        <Servicos config={CONFIG} />
        <Sobre config={CONFIG} />
        <Portfolio />
        <Contato config={CONFIG} />
      </main>
      <Footer config={CONFIG} />
    </SiteShell>
  );
}