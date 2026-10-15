import type { Metadata } from "next";
import { CONFIG } from "../lib/clients/basis-datum";
import Navbar from "./components/Navbar";
import HeroBasisDatum from "./components/HeroBasisDatum";
import ServicosBasisDatum from "./components/ServicosBasisDatum";
import CTABauruServicos from "./components/CTABauruServicos";
import SobreBasisDatum from "./components/SobreBasisDatum";
import Portfolio from "./components/Portfolio";
import CTAOrcamento from "./components/CTAOrcamento";
import ContatoBasisDatum from "./components/ContatoBasisDatum";
import Footer from "./components/Footer";
import SiteShell from "./components/SiteShell";

export function generateMetadata(): Metadata {
  return {
    title: "Criação de Sites e Google Meu Negócio em Bauru | Basis Datum Services",
    description:
      "Desenvolvimento de sites rápidos, responsivos e otimização de perfil no Google Maps para comércio e empresas em Bauru e região. Atraia mais clientes pelo WhatsApp.",
    openGraph: {
      title: "Basis Datum Services | Criação de Sites e SEO Local em Bauru",
      description:
        "Sites modernos de alta conversão e presença no topo do Google Maps para o comércio bauruense.",
      type: "website",
      locale: "pt_BR",
    },
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