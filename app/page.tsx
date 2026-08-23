import type { Metadata } from "next";
import { CONFIG } from "../lib/clients/basis-datum";
import Navbar from "./components/Navbar";
import HeroBasisDatum from "./components/HeroBasisDatum";
import ServicosBasisDatum from "./components/ServicosBasisDatum";
import SobreBasisDatum from "./components/SobreBasisDatum";
import ContatoBasisDatum from "./components/ContatoBasisDatum";
import Footer from "./components/Footer";
import SiteShell from "./components/SiteShell";
import Portfolio from "./components/Portfolio";
import CTAOrcamento from "./components/CTAOrcamento";
import CTABauruServicos from "./components/CTABauruServicos";

export function generateMetadata(): Metadata {
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
        <HeroBasisDatum config={CONFIG} />
        <ServicosBasisDatum config={CONFIG} />
        <CTABauruServicos />
        <SobreBasisDatum config={CONFIG} />
        <Portfolio />
        <CTAOrcamento />
        <ContatoBasisDatum config={CONFIG} />
      </main>
      <Footer config={CONFIG} />
    </SiteShell>
  );
}
