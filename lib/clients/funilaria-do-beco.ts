import { BASE_PATH } from "../basePath";
import type { ClientConfig } from "../types";

export const CONFIG: ClientConfig = {
  // ── Identidade ─────────────────────────────────────────────────────────────
  nome: "Funilaria do Beco",
  slogan: "Funilaria e pintura automotiva de precisão em Bauru",
  logo: `${BASE_PATH}/funilaria-do-beco-logo.png`,

  // ── Marca ──────────────────────────────────────────────────────────────────
  corPrimaria:     "#18181B",   // dark premium / grafite profundo
  corPrimariaDark: "#09090B",   // preto de contraste
  corAcento:       "#F59E0B",   // âmbar/amarelo industrial para badges e destaques

  // ── Contato ────────────────────────────────────────────────────────────────
  whatsapp: "14996457061",
  mensagemWhatsapp: "Olá! Vim pelo site da Funilaria do Beco e gostaria de solicitar um orçamento para meu veículo.",
  instagram: "",
  facebook:  "",
  email:     "",
  endereco:  "Alameda Plutão, 2-35 — Parque Santa Edwiges, Bauru, SP",
  horario: [
    { dia: "Segunda a Sexta", horario: "8h às 18h" },
    { dia: "Sábado",          horario: "8h às 12h" },
    { dia: "Domingo",         horario: "Fechado"   },
  ],
  googleMapsEmbed: "https://www.google.com/maps?q=Funilaria%20do%20Beco%2C%20Alameda%20Plut%C3%A3o%2C%202-35%2C%20Parque%20Santa%20Edwiges%2C%20Bauru%2C%20SP&output=embed",

  // ── Hero ───────────────────────────────────────────────────────────────────
  hero: {
    badge: "Oficina Especializada em Bauru e Região",
    titulo: "Seu carro recuperado com perfeição, alinhamento exato e pintura de fábrica",
    subtitulo: "Reparação rápida de colisões, riscos e amassados. Traga seu carro ou envie fotos pelo WhatsApp para uma avaliação sem compromisso.",
    cta: "Solicitar Orçamento no WhatsApp",
    ctaSecundario: "Ver Serviços e Preços",
    ctaSecundarioHref: "#servicos",
    imagemFundo: "",
    pontosFortes: [
      "Orçamento rápido por foto",
      "Garantia de tonalidade na pintura",
      "Atendimento transparente",
    ],
  },

  // ── Serviços ───────────────────────────────────────────────────────────────
  servicos: {
    badge: "Especialidades",
    titulo: "Soluções completas para a lataria do seu carro",
    subtitulo: "Da pequena mossa de estacionamento à restauração completa pós-colisão.",
    itens: [
      {
        icone: "🔨",
        titulo: "Funilaria & Martelinho",
        descricao: "Correção de batidas, vincos e amassados com alinhamento rigoroso da lataria, devolvendo a forma original do veículo.",
        mensagemWhatsapp: "Olá! Gostaria de pedir um orçamento para serviço de funilaria/recuperação de lataria.",
      },
      {
        icone: "🎨",
        titulo: "Pintura Automotiva e Repintura",
        descricao: "Pintura em cabine com acerto computadorizado de cor, verniz de alta resistência e acabamento sem manchas ou diferenças de tom.",
        mensagemWhatsapp: "Olá! Gostaria de avaliar um serviço de pintura automotiva no meu carro.",
        destaque: true,
      },
      {
        icone: "✨",
        titulo: "Polimento e Cristalização",
        descricao: "Remoção de micro-riscos, manchas e restauração do brilho profundo da pintura com proteção extra contra desgaste do tempo.",
        mensagemWhatsapp: "Olá! Gostaria de saber mais sobre polimento e revitalização de pintura.",
      },
      {
        icone: "🛡️",
        titulo: "Recuperação de Parachoques",
        descricao: "Soldagem plástica e pintura de parachoques trincados, raspados ou desalinhados sem necessidade de troca imediata da peça.",
        mensagemWhatsapp: "Olá! Preciso de um orçamento para conserto de parachoque.",
      },
    ],
  },

  // ── Sobre ──────────────────────────────────────────────────────────────────
  sobre: {
    badge: "Nossa Oficina",
    titulo: "Trabalho artesanal com padrão profissional em Bauru",
    texto: "A Funilaria do Beco nasceu para oferecer um serviço transparente e de qualidade no Parque Santa Edwiges em Bauru.\n\nSabemos o quanto seu carro é importante no dia a dia. Por isso, tratamos cada detalhe com rigor técnico: desde a preparação e isolamento da lataria até a entrega final com limpeza e alinhamento impecáveis.\n\nNosso foco é devolver a estética original do veículo sem enrolação e com prazo combinado de verdade.",
    foto: "",
    numeros: [
      { valor: "100%", label: "Foco no Acabamento" },
      { valor: "Agilidade", label: "Orçamento rápido por WhatsApp" },
      { valor: "Bauru - SP", label: "Localização de fácil acesso" },
    ],
  },
};