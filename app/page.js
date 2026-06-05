import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Servicos from "../components/Servicos";
import Sobre from "../components/Sobre";
import Contato from "../components/Contato";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Servicos />
        <Sobre />
        <Contato />
      </main>
      <Footer />
    </>
  );
}