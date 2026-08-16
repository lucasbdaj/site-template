export default function CTAOrcamento() {
  return (
    <section style={{ background: "#f5f7fa", padding: "72px 24px", textAlign: "center" }}>
      <div style={{ maxWidth: 620, margin: "0 auto" }}>
        <h2 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 800, color: "#1a2e4a", marginBottom: 12, letterSpacing: "-0.02em" }}>
          Pronto para colocar seu negócio no Google e ter um site profissional?
        </h2>
        <p style={{ fontSize: 15, color: "#6b7280", marginBottom: 28, lineHeight: 1.7 }}>
          Preencha um briefing rápido sobre o seu negócio e te enviamos uma proposta sob medida.
        </p>
        <a
          href="/orcamento"
          style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            background: "var(--primary)", color: "white", padding: "14px 32px",
            borderRadius: 12, textDecoration: "none", fontSize: 16, fontWeight: 700,
            boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
          }}
        >
          Quero meu orçamento
        </a>
      </div>
    </section>
  );
}
