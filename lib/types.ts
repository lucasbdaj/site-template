// ─────────────────────────────────────────────────────────────────────────────
// TYPES.TS — tipos compartilhados do template multi-tenant
// (lib/clients/*.ts) e componentes visuais.
// ─────────────────────────────────────────────────────────────────────────────

export interface HorarioEstruturado {
  dia: string;
  horario: string;
}

export type HorarioItem = string | HorarioEstruturado;

export interface ServicoItem {
  icone: string;
  titulo: string;
  descricao: string;
  /** Mensagem pré-formatada para o botão de WhatsApp deste serviço */
  mensagemWhatsapp?: string;
  destaque?: boolean;
}

export interface NumeroDestaque {
  valor: string;
  label: string;
}

export interface DepoimentoItem {
  autor: string;
  texto: string;
  avaliacao?: number; // ex: 5 estrelas
  veiculoOuOrigem?: string;
}

export interface GaleriaItem {
  imagem: string;
  titulo?: string;
  categoria?: string;
}

export interface ClientConfig {
  // Identidade
  nome: string;
  slogan?: string;
  logo?: string;
  logoHeight?: number;

  // Marca
  corPrimaria: string;
  corPrimariaDark: string;
  corAcento?: string; // cor secundária para botões ou selos

  // Contato
  whatsapp?: string;
  telefone?: string;
  mensagemWhatsapp?: string;
  instagram?: string;
  facebook?: string;
  linkedin?: string;
  tiktok?: string;
  youtube?: string;
  site?: string;
  email?: string;
  endereco?: string;
  horario?: HorarioItem[];
  googleMapsEmbed?: string;

  // Hero
  hero: {
    badge?: string; // ex: "Oficina especializada em Bauru"
    titulo: string;
    subtitulo: string;
    cta: string;
    ctaSecundario?: string;
    ctaSecundarioHref?: string;
    imagemFundo?: string;
    pontosFortes?: string[]; // tags rápidas abaixo dos botões
  };

  // Serviços
  servicos: {
    badge?: string;
    titulo: string;
    subtitulo?: string;
    itens: ServicoItem[];
  };

  // Sobre
  sobre: {
    badge?: string;
    titulo: string;
    texto: string;
    foto?: string;
    numeros?: NumeroDestaque[];
  };

  // Depoimentos / Avaliações (opcional)
  depoimentos?: {
    titulo?: string;
    subtitulo?: string;
    itens: DepoimentoItem[];
  };

  // Galeria de fotos (opcional)
  galeria?: {
    titulo?: string;
    subtitulo?: string;
    itens: GaleriaItem[];
  };
}