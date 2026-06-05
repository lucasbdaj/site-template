// ─────────────────────────────────────────────────────────────────────────────
//  CONFIG.JS  —  edite apenas este arquivo para personalizar o site do cliente
// ─────────────────────────────────────────────────────────────────────────────

export const CONFIG = {

  // ── Identidade ─────────────────────────────────────────────────────────────
  nome: "Nome do Negócio",
  slogan: "Seu slogan aqui",
  logo: "/logo.png",            // coloque o arquivo em /public/logo.png
                                // deixe "" para exibir o nome como texto

  // ── Marca ──────────────────────────────────────────────────────────────────
  corPrimaria:     "#1a73e8",   // cor principal (botões, destaques)
  corPrimariaDark: "#1557b0",   // versão escura (hover de botões)

  // ── Contato ────────────────────────────────────────────────────────────────
  whatsapp: "14999999999",      // só dígitos — DDD + número (ex: 14999887766)
  mensagemWhatsapp: "Olá! Gostaria de mais informações.",
  instagram: "",                // nome de usuário sem @ (ex: seunegocio)
  facebook:  "",                // URL completa ou deixe ""
  email:     "",                // endereço de email ou deixe ""
  endereco:  "Rua Exemplo, 123 - Bairro - Cidade/UF",
  horario: [
    "Segunda a Sexta: 8h às 18h",
    "Sábado: 8h às 12h",
    "Domingo: Fechado",
  ],
  // URL do iframe do Google Maps:
  //   Abra o Maps → botão Compartilhar → aba "Incorporar um mapa" → copie só a URL do src=""
  googleMapsEmbed: "",

  // ── Hero (primeira seção) ──────────────────────────────────────────────────
  hero: {
    titulo:      "Bem-vindo ao Nome do Negócio",
    subtitulo:   "Uma descrição curta e impactante. Foque no benefício principal para o cliente.",
    cta:         "Falar pelo WhatsApp",
    imagemFundo: "",            // ex: /hero.jpg (coloque em /public) ou deixe "" para gradiente
  },

  // ── Serviços ───────────────────────────────────────────────────────────────
  servicos: {
    titulo: "Nossos Serviços",
    itens: [
      {
        icone:    "🔧",
        titulo:   "Serviço Um",
        descricao: "Descreva o que está incluído e o benefício para o cliente.",
      },
      {
        icone:    "⚡",
        titulo:   "Serviço Dois",
        descricao: "Descreva o que está incluído e o benefício para o cliente.",
      },
      {
        icone:    "✨",
        titulo:   "Serviço Três",
        descricao: "Descreva o que está incluído e o benefício para o cliente.",
      },
    ],
  },

  // ── Sobre ──────────────────────────────────────────────────────────────────
  sobre: {
    titulo: "Sobre Nós",
    texto:  "Conte a história do negócio. Há quantos anos atua, o diferencial, o que guia a equipe. Seja autêntico e humano. Dois ou três parágrafos são suficientes.",
    foto:   "/sobre.jpg",       // coloque em /public/sobre.jpg ou deixe "" para ocultar
    numeros: [
      { valor: "10+",  label: "Anos de experiência"  },
      { valor: "500+", label: "Clientes atendidos"   },
      { valor: "100%", label: "Satisfação garantida" },
    ],
  },

};