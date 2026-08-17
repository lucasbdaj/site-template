export default function CTABauruServicos() {
  return (
    <section style={{ background: "#f6f9fb", padding: "0 24px 96px" }}>
      <div
        className="cta-bauru-card"
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 20,
          background: "white",
          border: "1px solid rgba(26,46,74,0.08)",
          borderRadius: 14,
          padding: "28px 32px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{
            width: 44,
            height: 44,
            borderRadius: 10,
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,170,221,0.12)",
            color: "var(--primary-dark)",
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M8.5 14.5A5 5 0 1 0 5 8" /><path d="M15.5 9.5A5 5 0 1 1 19 16" /><path d="M8 15l8-8" />
            </svg>
          </div>
          <p style={{ fontSize: 14.5, color: "#5b6b7c", lineHeight: 1.6, maxWidth: 420 }}>
            Presta serviços em Bauru? Apareça gratuitamente no{" "}
            <strong style={{ color: "var(--primary-dark)" }}>Bauru Serviços</strong>, outra plataforma do nosso ecossistema.
          </p>
        </div>

        <a
          href="https://bauruservicos.com.br/cadastro"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontWeight: 700,
            color: "var(--primary)",
            textDecoration: "none",
            fontSize: 14.5,
            whiteSpace: "nowrap",
          }}
        >
          Cadastrar grátis
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
    </section>
  );
}
