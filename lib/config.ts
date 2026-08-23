// ─────────────────────────────────────────────────────────────────────────────
//  CONFIG.TS  —  edite apenas este arquivo para personalizar o site do cliente
//  (este arquivo é o "molde" comentado — copie para lib/clients/<slug>.ts para
//  criar um cliente novo; não é importado diretamente por nenhuma rota)
// ─────────────────────────────────────────────────────────────────────────────

import type { ClientConfig } from "./types";

export const CONFIG: ClientConfig = {

  // ── Identidade ─────────────────────────────────────────────────────────────
  nome: "Basis Datum",
  slogan: "Conectando negócios e pessoas em Bauru",
  logo: "",                     // coloque o arquivo em /public/logo.png
                                // deixe "" para exibir o nome como texto

  // ── Marca ──────────────────────────────────────────────────────────────────
  corPrimaria:     "#00aadd",   // cor principal (botões, destaques)
  corPrimariaDark: "#1a2e4a",   // versão escura (hover de botões)

  // ── Contato ────────────────────────────────────────────────────────────────
  whatsapp: "14988076360",
  mensagemWhatsapp: "Olá! Gostaria de saber mais sobre as soluções da Basis Datum.",
  instagram: "",
  facebook:  "",
  email:     "lucasborges@outlook.com",
  endereco:  "Bauru, SP",
  horario: [
    "Segunda a Sexta: 9h às 18h",
    "Atendimento também via WhatsApp",
  ],
  googleMapsEmbed: "",

  // ── Hero (primeira seção) ──────────────────────────────────────────────────
  hero: {
    titulo:    "Soluções digitais para o comércio local de Bauru",
    subtitulo: "Criamos sites profissionais, gerenciamos seu Google Meu Negócio e desenvolvemos plataformas que conectam negócios e clientes na cidade.",
    cta:       "Falar pelo WhatsApp",
    imagemFundo: "",
  },

  // ── Serviços ───────────────────────────────────────────────────────────────
  servicos: {
    titulo: "O que oferecemos",
    itens: [
      {
        icone:    "📍",
        titulo:   "Google Meu Negócio",
        descricao: "Criamos e otimizamos seu perfil no Google Maps para que clientes encontrem sua empresa nas buscas locais.",
      },
      {
        icone:    "🌐",
        titulo:   "Site Profissional",
        descricao: "Site rápido, responsivo e focado em conversão — com botão de WhatsApp, redes sociais e informações do negócio.",
      },
      {
        icone:    "📱",
        titulo:   "Plataformas Digitais",
        descricao: "Ecossistema de apps para Bauru: Bauru Empregos, Bauru Serviços e Posto Certo, todos integrados.",
      },
    ],
  },

  // ── Sobre ──────────────────────────────────────────────────────────────────
  sobre: {
    titulo: "Sobre a Basis Datum",
    texto:  "A Basis Datum nasceu com um propósito simples: fortalecer o comércio local de Bauru com tecnologia acessível e de qualidade.\n\nAcreditamos que todo negócio — da padaria ao escritório de advocacia — merece ter uma presença digital profissional. Por isso desenvolvemos soluções práticas, sem complicação e com suporte próximo ao cliente.\n\nNosso ecossistema conecta pessoas e empresas da cidade através de plataformas pensadas para o dia a dia do bauruense.",
    foto:   "",
    numeros: [
      { valor: "3",    label: "Plataformas ativas"    },
      { valor: "100%", label: "Foco em Bauru"          },
      { valor: "24h",  label: "Suporte via WhatsApp"   },
    ],
  },

};
