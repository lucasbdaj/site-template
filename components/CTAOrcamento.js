import { BASE_PATH } from "../lib/basePath";

export default function CTAOrcamento() {
  return (
    <section style={{ background: "white", padding: "96px 24px", textAlign: "center" }}>
      <div style={{ maxWidth: 620, margin: "0 auto" }}>
        <p style={{
          fontFamily: "ui-monospace, 'Cascadia Code', 'SF Mono', Consolas, monospace",
          fontSize: 13,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--primary)",
          marginBottom: 16,
        }}>
          // vamos começar
        </p>
        <h2 style={{
          fontFamily: "ui-serif, 'Iowan Old Style', 'Palatino Linotype', Georgia, serif",
          fontSize: "clamp(24px, 3.2vw, 32px)",
          fontWeight: 600,
          color: "var(--primary-dark)",
          marginBottom: 14,
          letterSpacing: "-0.01em",
          textWrap: "balance",
        }}>
          Pronto para colocar seu negócio no Google e ter um site profissional?
        </h2>
        <p style={{ fontSize: 15.5, color: "#5b6b7c", marginBottom: 32, lineHeight: 1.7 }}>
          Preencha um briefing rápido sobre o seu negócio e te enviamos uma proposta sob medida.
        </p>
        <a
          href={`${BASE_PATH}/orcamento`}
          style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            background: "var(--primary)", color: "white", padding: "16px 34px",
            borderRadius: 12, textDecoration: "none", fontSize: 16, fontWeight: 700,
            boxShadow: "0 8px 24px -8px color-mix(in srgb, var(--primary) 60%, transparent)",
          }}
        >
          Quero meu orçamento
        </a>
      </div>
    </section>
  );
}
