// ─────────────────────────────────────────────────────────────────────────────
//  CONFIG.JS  —  edite apenas este arquivo para personalizar o site do cliente
// ─────────────────────────────────────────────────────────────────────────────

import { BASE_PATH } from "../basePath";

export const CONFIG = {

  // ── Identidade ─────────────────────────────────────────────────────────────
  nome: "Basis Datum Services",
  slogan: "Presença digital para o comércio local de Bauru",
  logo: `${BASE_PATH}/logo.png`,

  // ── Marca ──────────────────────────────────────────────────────────────────
  corPrimaria:     "#00aadd",   // cor principal (botões, destaques)
  corPrimariaDark: "#1a2e4a",   // versão escura (hover de botões)

  // ── Contato ────────────────────────────────────────────────────────────────
  whatsapp: "14988076360",
  mensagemWhatsapp: "Olá! Gostaria de saber mais sobre as soluções da Basis Datum Services.",
  instagram: "https://www.instagram.com/basisdatum/",
  facebook:  "https://www.facebook.com/basisdatum",
  linkedin:  "https://www.linkedin.com/company/basisdatum",
  site:      "https://basisdatum.com.br/",
  email:     "lucasborges@outlook.com",
  endereco:  "Bauru, SP",
  horario: [
    { dia: "Segunda a Sexta", horario: "9h às 18h" },
    { dia: "Sábado",          horario: "Sob agendamento" },
    { dia: "Domingo",         horario: "Fechado" },
  ],
  googleMapsEmbed: "",

  // ── Hero (primeira seção) ──────────────────────────────────────────────────
  hero: {
    titulo:    "Soluções digitais para o comércio local de Bauru",
    subtitulo: "Criamos sites profissionais e cuidamos do seu Perfil da Empresa no Google para o comércio local de Bauru aparecer para mais clientes.",
    cta:       "Falar pelo WhatsApp",
    imagemFundo: "",
  },

  // ── Serviços ───────────────────────────────────────────────────────────────
  servicos: {
    titulo: "O que oferecemos",
    itens: [
      {
        icone:    "📍",
        titulo:   "Perfil da Empresa no Google",
        descricao: "Criamos e otimizamos seu perfil no Google Maps para que clientes encontrem sua empresa nas buscas locais.",
      },
      {
        icone:    "🌐",
        titulo:   "Site Essencial",
        descricao: "Site rápido, responsivo e focado em conversão — com botão de WhatsApp, redes sociais e informações do negócio.",
      },
      {
        icone:    "🧩",
        titulo:   "Pacote Presença Digital",
        descricao: "Perfil no Google e site essencial combinados, com condições especiais — a forma mais completa de colocar seu negócio online.",
      },
    ],
  },

  // ── Sobre ──────────────────────────────────────────────────────────────────
  sobre: {
    titulo: "Sobre a Basis Datum Services",
    texto:  "A Basis Datum Services nasceu dentro do ecossistema Basis Datum com uma missão específica: dar ao pequeno comércio de Bauru uma presença digital profissional, sem complicação e a um preço justo.\n\nCuidamos do que a maioria dos negócios locais não tem tempo — nem equipe — para fazer sozinhos: um perfil bem configurado no Google, um site que converte visita em cliente, e o suporte de quem entende o dia a dia de quem empreende na cidade.\n\nSomos a mesma equipe por trás do Bauru Empregos, do Bauru Serviços e do Posto Certo — plataformas que já conectam milhares de pessoas e negócios em Bauru. A Basis Datum Services é onde colocamos esse conhecimento a serviço de cada empresa, individualmente.",
    foto:   "",
    numeros: [
      { valor: "3",    label: "Plataformas do ecossistema" },
      { valor: "100%", label: "Foco em Bauru"              },
      { valor: "24h",  label: "Suporte via WhatsApp"       },
    ],
  },

};