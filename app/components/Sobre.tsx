import type { ClientConfig } from "../../lib/types";

export default function Sobre({ config }: { config: ClientConfig }) {
  const { badge, titulo, texto, foto, numeros } = config.sobre;
  const temFoto = Boolean(foto && foto.trim().length > 0);

  return (
    <section id="sobre" style={{ background: "#ffffff", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: temFoto ? "1.1fr 0.9fr" : "1fr",
            gap: 56,
            alignItems: "center",
          }}
          className={temFoto ? "sobre-grid" : ""}
        >
          {/* Conteúdo textual */}
          <div>
            <span
              style={{
                display: "inline-block",
                background: "var(--primary)",
                color: "white",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "5px 16px",
                borderRadius: 999,
                marginBottom: 20,
              }}
            >
              {badge ?? "Quem somos"}
            </span>

            <h2
              style={{
                fontSize: "clamp(26px, 3.6vw, 38px)",
                fontWeight: 800,
                color: "#0f172a",
                letterSpacing: "-0.02em",
                marginBottom: 20,
                lineHeight: 1.25,
              }}
            >
              {titulo}
            </h2>

            <p
              style={{
                fontSize: 16,
                color: "#475569",
                lineHeight: 1.8,
                marginBottom: 36,
                whiteSpace: "pre-line",
              }}
            >
              {texto}
            </p>

            {/* Números e Destaques */}
            {numeros && numeros.length > 0 && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: `repeat(auto-fit, minmax(130px, 1fr))`,
                  gap: 16,
                  borderTop: "1px solid #e2e8f0",
                  paddingTop: 28,
                }}
              >
                {numeros.map((n, i) => (
                  <div
                    key={i}
                    style={{
                      background: "#f8fafc",
                      padding: "16px 14px",
                      borderRadius: 12,
                      border: "1px solid #f1f5f9",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "clamp(22px, 2.5vw, 28px)",
                        fontWeight: 800,
                        color: "var(--primary)",
                        lineHeight: 1,
                        marginBottom: 6,
                      }}
                    >
                      {n.valor}
                    </p>
                    <p style={{ fontSize: 13, color: "#64748b", fontWeight: 500, lineHeight: 1.4 }}>
                      {n.label}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Coluna Visual (Foto real ou Card de Compromisso) */}
          {temFoto ? (
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  inset: -10,
                  background: "var(--primary)",
                  borderRadius: 24,
                  opacity: 0.1,
                  transform: "rotate(-1deg)",
                }}
              />
              <img
                src={foto}
                alt={titulo}
                style={{
                  position: "relative",
                  width: "100%",
                  height: "auto",
                  maxHeight: 460,
                  objectFit: "cover",
                  borderRadius: 20,
                  boxShadow: "0 16px 36px rgba(0,0,0,0.1)",
                }}
              />
            </div>
          ) : (
            <div
              style={{
                background: "linear-gradient(145deg, #0f172a, #1e293b)",
                borderRadius: 24,
                padding: "40px 32px",
                color: "white",
                boxShadow: "0 20px 40px rgba(15, 23, 42, 0.12)",
              }}
            >
              <div style={{ fontSize: 32, marginBottom: 16 }}>🤝</div>
              <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, letterSpacing: "-0.01em" }}>
                Nosso compromisso com você
              </h3>
              <p style={{ fontSize: 15, color: "#94a3b8", lineHeight: 1.7, marginBottom: 24 }}>
                Trabalhamos com transparência total de orçamento, prazos reais e sem surpresas na entrega do seu veículo.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "Diagnóstico honesto e objetivo",
                  "Uso de materiais de primeira linha",
                  "Atualizações do serviço durante a execução",
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#e2e8f0" }}>
                    <span style={{ color: "#22c55e", fontWeight: 700 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .sobre-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}