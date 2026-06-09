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
    cor: "#0A2647",
    icone: "🏅",
  },
];

export default function Portfolio() {
  if (clientes.length === 0) return null;

  return (
    <section style={{ background: "#f9fafb", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{
            display: "inline-block",
            background: "var(--primary)",
            color: "white",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "4px 14px",
            borderRadius: 20,
            marginBottom: 16,
          }}>
            Nossos clientes
          </span>
          <h2 style={{
            fontSize: "clamp(26px, 3.5vw, 38px)",
            fontWeight: 800,
            color: "#111827",
            letterSpacing: "-0.02em",
          }}>
            Sites que criamos
          </h2>
          <p style={{ fontSize: 16, color: "#6b7280", marginTop: 12 }}>
            Veja exemplos reais de sites que desenvolvemos para negócios de Bauru
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 24,
        }}>
          {clientes.map((c) => (
            <a
              key={c.slug}
              href={`/${c.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                background: "white",
                borderRadius: 16,
                padding: "36px 28px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)",
                borderTop: `4px solid ${c.cor}`,
                textDecoration: "none",
                transition: "transform 0.15s, box-shadow 0.15s",
              }}
            >
              <div style={{ fontSize: 44, marginBottom: 16, lineHeight: 1 }}>
                {c.icone}
              </div>
              <h3 style={{
                fontSize: 19,
                fontWeight: 700,
                color: "#111827",
                marginBottom: 8,
              }}>
                {c.nome}
              </h3>
              <p style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.6, marginBottom: 20 }}>
                {c.descricao}
              </p>
              <span style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontSize: 14,
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
    </section>
  );
}