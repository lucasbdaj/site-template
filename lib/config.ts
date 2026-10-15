// ─────────────────────────────────────────────────────────────────────────────
//  CONFIG.TS  —  edite apenas este arquivo para personalizar o site do cliente
//  (este arquivo é o "molde" comentado — copie para lib/clients/<slug>.ts para
//  criar um cliente novo; não é importado diretamente por nenhuma rota)
// ─────────────────────────────────────────────────────────────────────────────

import type { ClientConfig } from "./types";

export const CONFIG: ClientConfig = {
  nome: "Basis Datum Services",
  slogan: "Criação de Sites e Google Meu Negócio em Bauru",
  logo: "/services/logo.png",

  corPrimaria: "#00aadd",
  corPrimariaDark: "#1a2e4a",

  whatsapp: "14988076360",
  mensagemWhatsapp: "Olá! Vi o site da Basis Datum Services e gostaria de um orçamento para minha empresa em Bauru.",
  instagram: "",
  facebook: "",
  email: "lucasborges@outlook.com",
  endereco: "Bauru, SP",
  horario: [
    "Segunda a Sexta: 9h às 18h",
    "Atendimento rápido via WhatsApp",
  ],
  googleMapsEmbed: "",

  hero: {
    titulo: "Coloque sua empresa no topo do Google e conquiste mais clientes em Bauru",
    subtitulo: "Criamos sites profissionais ultrarrápidos e configuramos seu Perfil no Google Maps para o seu comércio ou serviço ser a primeira escolha na cidade.",
    cta: "Falar com especialista",
    imagemFundo: "",
  },

  servicos: {
    titulo: "Soluções completas para a presença digital da sua empresa",
    itens: [
      {
        icone: "📍",
        titulo: "Google Meu Negócio & Maps",
        descricao: "Criamos e otimizamos seu perfil comercial no Google Maps para que clientes da sua região encontrem sua loja ou serviço nas primeiras posições de busca.",
      },
      {
        icone: "⚡",
        titulo: "Site Profissional de Alta Conversão",
        descricao: "Site veloz, moderno, adaptado para qualquer celular e com foco total em fazer o visitante clicar no botão de WhatsApp da sua empresa.",
      },
      {
        icone: "🚀",
        titulo: "Pacote Presença Digital Completa",
        descricao: "A união do site profissional com a otimização no Google Maps. A estratégia definitiva para negócios locais que querem dominar as buscas em Bauru.",
      },
    ],
  },

  sobre: {
    titulo: "Sobre a Basis Datum Services",
    texto: "A Basis Datum Services nasceu dentro do ecossistema Basis Datum com uma missão clara: dar ao comércio e às empresas de Bauru uma presença digital profissional, sem complicação e com suporte próximo.\n\nCuidamos de tudo o que a maioria dos negócios não tem tempo ou equipe para fazer: sites que convertem visitas em contatos reais, perfis otimizados no Google Maps e suporte direto de quem entende o mercado local bauruense.\n\nSomos os mesmos criadores do Bauru Empregos e Bauru Serviços — plataformas que conectam milhares de moradores e empresas todos os dias.",
    foto: "",
    numeros: [
      { valor: "100%", label: "Foco no Comércio de Bauru" },
      { valor: "10x", label: "Mais Visibilidade Local" },
      { valor: "Direto", label: "Suporte via WhatsApp com o Fundador" },
    ],
  },
};