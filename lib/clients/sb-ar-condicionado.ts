import { BASE_PATH } from "../basePath";
import type { ClientConfig } from "../types";

export const CONFIG: ClientConfig = {

  // ── Identidade ─────────────────────────────────────────────────────────────
  nome: "SB Ar Condicionado e Direção Hidráulica",
  slogan: "Especialistas em ar condicionado e direção hidráulica para veículos em Bauru",
  logo: `${BASE_PATH}/sb-logo.png`,

  // ── Marca ──────────────────────────────────────────────────────────────────
  corPrimaria:     "#4D1817",   // marrom escuro da sombra das letras
  corPrimariaDark: "#2D0A09",   // variação mais escura para hover/dark

  // ── Contato ────────────────────────────────────────────────────────────────
  whatsapp: "14997386609",
  mensagemWhatsapp: "Olá! Vim pelo site e gostaria de solicitar um orçamento para meu veículo.",
  instagram: "",
  facebook:  "",
  email:     "",
  endereco:  "Av. Nuno de Assis, 18-30 — Bauru, SP",
  horario: [
    { dia: "Segunda a Sexta", horario: "8h às 18h" },
    { dia: "Sábado",          horario: "8h às 12h" },
    { dia: "Domingo",         horario: "Fechado"   },
  ],
  googleMapsEmbed: "https://www.google.com/maps?q=SB%20Ar%20Condicionado%20e%20Dire%C3%A7%C3%A3o%20Hidr%C3%A1ulica%2C%20Av.%20Nuno%20de%20Assis%2C%2018-30%2C%20Bauru%2C%20SP&output=embed",

  // ── Hero ───────────────────────────────────────────────────────────────────
  hero: {
    titulo:    "Seu Carro Mais Confortável e Seguro",
    subtitulo: "Especialistas em ar condicionado automotivo e direção hidráulica. Diagnóstico preciso, serviço rápido e preço justo em Bauru.",
    cta:       "Falar pelo WhatsApp",
    imagemFundo: "",
  },

  // ── Serviços ───────────────────────────────────────────────────────────────
  servicos: {
    titulo: "Nossos Serviços",
    itens: [
      {
        icone:    "❄️",
        titulo:   "Ar Condicionado Automotivo",
        descricao: "Instalação, manutenção e recarga de gás. Diagnóstico completo do sistema de climatização do seu veículo.",
      },
      {
        icone:    "🔧",
        titulo:   "Direção Hidráulica",
        descricao: "Reparo e substituição de bomba, rack e mangueiras. Seu volante leve e preciso como deve ser.",
      },
      {
        icone:    "🚗",
        titulo:   "Manutenção Preventiva",
        descricao: "Revisão completa dos sistemas de ar e direção para evitar problemas maiores e garantir sua segurança na estrada.",
      },
    ],
  },

  // ── Sobre ──────────────────────────────────────────────────────────────────
  sobre: {
    titulo: "Sobre a SB",
    texto:  "A SB é referência em Bauru para serviços de ar condicionado automotivo e direção hidráulica.\n\nCom uma equipe experiente, realizamos diagnósticos precisos e serviços de qualidade para todo tipo de veículo — garantindo seu conforto e segurança na direção.\n\nEstamos localizados na Av. Nuno de Assis, prontos para atender você com agilidade e transparência. Venha fazer um orçamento sem compromisso!",
    foto:   `${BASE_PATH}/sb-gmb-mockup.png`,
    numeros: [
      { valor: "2",    label: "Especialidades: AC e Direção"  },
      { valor: "100%", label: "Diagnóstico transparente"       },
      { valor: "Bauru", label: "Atendimento local e rápido"   },
    ],
  },

};
