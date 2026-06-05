import { CONFIG } from "../lib/config";

export default function Sobre() {
  const { titulo, texto, foto, numeros } = CONFIG.sobre;

  return (
    <section id="sobre" style={{ background: "white", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <div style={{
          display: "grid",
          gridTemplateColumns: foto ? "1fr 1fr" : "1fr",
          gap: 64,
          alignItems: "center",
        }}
          className={foto ? "sobre-grid" : ""}
        >
          {/* Texto */}
          <div>
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
              marginBottom: 20,
            }}>
              Nossa história
            </span>

            <h2 style={{
              fontSize: "clamp(26px, 3.5vw, 38px)",
              fontWeight: 800,
              color: "#111827",
              letterSpacing: "-0.02em",
              marginBottom: 24,
            }}>
              {titulo}
            </h2>

            <p style={{
              fontSize: 16,
              color: "#4b5563",
              lineHeight: 1.8,
              marginBottom: 40,
              whiteSpace: "pre-line",
            }}>
              {texto}
            </p>

            {/* Números em destaque */}
            {numeros?.length > 0 && (
              <div style={{
                display: "grid",
                gridTemplateColumns: `repeat(${numeros.length}, 1fr)`,
                gap: 16,
                borderTop: "1px solid #e5e7eb",
                paddingTop: 32,
              }}>
                {numeros.map((n, i) => (
                  <div key={i} style={{ textAlign: "center" }}>
                    <p style={{
                      fontSize: "clamp(28px, 3vw, 36px)",
                      fontWeight: 800,
                      color: "var(--primary)",
                      lineHeight: 1,
                      marginBottom: 6,
                    }}>
                      {n.valor}
                    </p>
                    <p style={{ fontSize: 13, color: "#6b7280", fontWeight: 500 }}>
                      {n.label}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Foto */}
          {foto && (
            <div style={{ position: "relative" }}>
              <div style={{
                position: "absolute",
                inset: -12,
                background: "var(--primary)",
                borderRadius: 20,
                opacity: 0.08,
              }} />
              <img
                src={foto}
                alt={`Foto ${titulo}`}
                style={{
                  width: "100%",
                  borderRadius: 16,
                  objectFit: "cover",
                  aspectRatio: "4/3",
                  position: "relative",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                }}
              />
            </div>
          )}
        </div>
      </div>

      {/* Responsividade da grid */}
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