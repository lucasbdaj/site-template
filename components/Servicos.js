import { CONFIG } from "../lib/config";

export default function Servicos() {
  const { titulo, itens } = CONFIG.servicos;

  return (
    <section id="servicos" style={{ background: "#f9fafb", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Cabeçalho da seção */}
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
            O que fazemos
          </span>
          <h2 style={{
            fontSize: "clamp(26px, 3.5vw, 38px)",
            fontWeight: 800,
            color: "#111827",
            letterSpacing: "-0.02em",
          }}>
            {titulo}
          </h2>
        </div>

        {/* Grid de cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
        }}>
          {itens.map((item, i) => (
            <div
              key={i}
              style={{
                background: "white",
                borderRadius: 16,
                padding: "36px 28px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)",
                borderTop: "4px solid var(--primary)",
              }}
            >
              <div style={{ fontSize: 44, marginBottom: 20, lineHeight: 1 }}>
                {item.icone}
              </div>
              <h3 style={{
                fontSize: 19,
                fontWeight: 700,
                color: "#111827",
                marginBottom: 10,
              }}>
                {item.titulo}
              </h3>
              <p style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.7 }}>
                {item.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}