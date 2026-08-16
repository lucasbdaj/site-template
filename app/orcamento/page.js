import { CONFIG } from "../../lib/clients/basis-datum";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SiteShell from "../../components/SiteShell";
import FormOrcamento from "../../components/FormOrcamento";

export const metadata = {
  title: `Peça seu orçamento — ${CONFIG.nome}`,
  description: "Conte sobre o seu negócio e receba uma proposta para colocar sua empresa no Google e ter um site profissional.",
};

export default function OrcamentoPage() {
  return (
    <SiteShell config={CONFIG}>
      <Navbar config={CONFIG} />
      <main>
        <FormOrcamento />
      </main>
      <Footer config={CONFIG} />
    </SiteShell>
  );
}
