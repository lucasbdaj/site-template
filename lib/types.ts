// ─────────────────────────────────────────────────────────────────────────────
//  TYPES.TS — tipos compartilhados do config de cliente multi-tenant
//  (lib/clients/*.ts) e das props dos componentes que o consomem.
// ─────────────────────────────────────────────────────────────────────────────

/** Uma linha de horário já estruturada (dia + horário separados). */
export interface HorarioEstruturado {
  dia: string;
  horario: string;
}

/** `horario` aceita tanto strings livres (config.js "molde") quanto linhas estruturadas. */
export type HorarioItem = string | HorarioEstruturado;

export interface ServicoItem {
  icone: string;
  titulo: string;
  descricao: string;
}

export interface NumeroDestaque {
  valor: string;
  label: string;
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

  // Hero (primeira seção)
  hero: {
    titulo: string;
    subtitulo: string;
    cta: string;
    imagemFundo?: string;
  };

  // Serviços
  servicos: {
    titulo: string;
    itens: ServicoItem[];
  };

  // Sobre
  sobre: {
    titulo: string;
    texto: string;
    foto?: string;
    numeros?: NumeroDestaque[];
  };
}
