import { BASE_PATH } from "../basePath";
import type { ClientConfig } from "../types";

export const CONFIG: ClientConfig = {

  // ── Identidade ─────────────────────────────────────────────────────────────
  nome: "Funilaria do Beco",
  slogan: "Funilaria e pintura automotiva profissional em Bauru",
  logo: `${BASE_PATH}/funilaria-do-beco-logo.png`,

  // ── Marca ──────────────────────────────────────────────────────────────────
  corPrimaria:     "#1C1C1C",   // preto
  corPrimariaDark: "#000000",   // preto puro

  // ── Contato ────────────────────────────────────────────────────────────────
  whatsapp: "14996457061",
  mensagemWhatsapp: "Olá! Vim pelo site e gostaria de solicitar um orçamento para funilaria e pintura.",
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
    titulo:    "Seu Carro Recuperado com Qualidade e Precisão",
    subtitulo: "Especialistas em funilaria e pintura automotiva em Bauru. Consertamos amassados, riscos e danos com acabamento perfeito.",
    cta:       "Solicitar Orçamento",
    imagemFundo: "",
  },

  // ── Serviços ───────────────────────────────────────────────────────────────
  servicos: {
    titulo: "Nossos Serviços",
    itens: [
      {
        icone:    "🔨",
        titulo:   "Funilaria",
        descricao: "Reparo de amassados, mossas e danos causados por colisões. Lataria restaurada como se nunca tivesse batido.",
      },
      {
        icone:    "🎨",
        titulo:   "Pintura Automotiva",
        descricao: "Pintura profissional com preparação completa e acabamento perfeito. Combinamos a cor original do seu veículo.",
      },
      {
        icone:    "✅",
        titulo:   "Orçamento sem Compromisso",
        descricao: "Atendemos pelo WhatsApp para facilitar seu orçamento. Transparência e agilidade do início ao fim do serviço.",
      },
    ],
  },

  // ── Sobre ──────────────────────────────────────────────────────────────────
  sobre: {
    titulo: "Sobre a Funilaria do Beco",
    texto:  "A Funilaria do Beco é uma oficina especializada em funilaria e pintura automotiva, localizada no Parque Santa Edwiges em Bauru.\n\nAtendemos todo tipo de veículo com atenção aos detalhes, do conserto de pequenas mossas à restauração completa da lataria após colisões.\n\nNosso compromisso é devolver seu carro com qualidade e acabamento impecável, no prazo combinado e com total transparência no orçamento.",
    foto:   "",
    numeros: [
      { valor: "2",    label: "Especialidades: funilaria e pintura" },
      { valor: "100%", label: "Acabamento garantido"                },
      { valor: "📲",   label: "Orçamento pelo WhatsApp"             },
    ],
  },

};
