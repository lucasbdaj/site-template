import { BASE_PATH } from "../lib/basePath";

const clientes = [
  {
    slug: "saldao-dos-moveis",
    nome: "Saldão dos Móveis",
    descricao: "Loja de móveis e eletrodomésticos novos e semi novos em Bauru.",
    cor: "#1E4ED8",
    icone: "🪑",
  },
  {
    slug: "sb-ar-condicionado",
    nome: "SB Ar Condicionado",
    descricao: "Especialistas em ar condicionado automotivo e direção hidráulica em Bauru.",
    cor: "#4D1817",
    icone: "❄️",
  },
  {
    slug: "rs-detail",
    nome: "RS Detail",
    descricao: "Estética automotiva profissional em Bauru. Polimento, higienização e proteção.",
    cor: "#A32121",
    icone: "✨",
  },
  {
    slug: "f2-premium",
    nome: "F2 Premium Autopeças",
    descricao: "Especialistas em autopeças para nacionais e importados. Mais de 10 anos em Bauru.",
    cor: "#F31621",
    icone: "🏅",
  },
  {
    slug: "funilaria-do-beco",
    nome: "Funilaria do Beco",
    descricao: "Funilaria e pintura automotiva profissional no Parque Santa Edwiges, Bauru.",
    cor: "#1C1C1C",
    icone: "🔨",
  },
];

function hexToRgba(hex, alpha) {
  const n = parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function Portfolio() {
  if (clientes.length === 0) return null;

  return (
    <section style={{ background: "#f6f9fb", padding: "104px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <div style={{ maxWidth: 560, marginBottom: 56 }}>
          <p style={{
            fontFamily: "ui-monospace, 'Cascadia Code', 'SF Mono', Consolas, monospace",
            fontSize: 13,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--primary)",
            marginBottom: 14,
          }}>
            // nossos clientes
          </p>
          <h2 style={{
            fontFamily: "ui-serif, 'Iowan Old Style', 'Palatino Linotype', Georgia, serif",
            fontSize: "clamp(26px, 3.5vw, 38px)",
            fontWeight: 600,
            color: "var(--primary-dark)",
            letterSpacing: "-0.01em",
            marginBottom: 12,
          }}>
            Sites que criamos
          </h2>
          <p style={{ fontSize: 15.5, color: "#5b6b7c", lineHeight: 1.7 }}>
            Exemplos reais de sites que desenvolvemos para negócios de Bauru.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 20,
        }}>
          {clientes.map((c) => (
            <a
              key={c.slug}
              href={`${BASE_PATH}/${c.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-bd-card"
              style={{
                display: "block",
                background: "white",
                borderRadius: 14,
                padding: "32px 28px",
                border: "1px solid rgba(26,46,74,0.08)",
                textDecoration: "none",
              }}
            >
              <div style={{
                width: 44,
                height: 44,
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 22,
                fontSize: 20,
                background: hexToRgba(c.cor, 0.12),
              }}>
                {c.icone}
              </div>
              <h3 style={{
                fontFamily: "ui-serif, 'Iowan Old Style', 'Palatino Linotype', Georgia, serif",
                fontSize: 19,
                fontWeight: 600,
                color: "var(--primary-dark)",
                marginBottom: 10,
              }}>
                {c.nome}
              </h3>
              <p style={{ fontSize: 14.5, color: "#5b6b7c", lineHeight: 1.7, marginBottom: 22 }}>
                {c.descricao}
              </p>
              <span style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontSize: 13.5,
                fontWeight: 600,
                color: c.cor,
              }}>
                Ver site
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .portfolio-bd-card {
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .portfolio-bd-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 28px -16px rgba(26,46,74,0.25);
        }
        @media (prefers-reduced-motion: reduce) {
          .portfolio-bd-card { transition: none; }
          .portfolio-bd-card:hover { transform: none; }
        }
      `}</style>
    </section>
  );
}