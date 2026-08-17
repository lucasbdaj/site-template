// Seção "Sobre" específica da home da Basis Datum Services — não é o Sobre.js
// genérico usado pelos clientes do template (ver regra em CLAUDE.md).
// Tipografia/paleta seguem o mesmo sistema do HeroBasisDatum.js / ServicosBasisDatum.js.

import ImagemLightbox from "./ImagemLightbox";

export default function SobreBasisDatum({ config }) {
  const { titulo, texto, foto, numeros } = config.sobre;

  return (
    <section id="sobre" style={{ background: "white", padding: "104px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="sobre-bd-grid" style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 64, alignItems: "center" }}>

          {/* Texto */}
          <div>
            <p
              style={{
                fontFamily: "ui-monospace, 'Cascadia Code', 'SF Mono', Consolas, monospace",
                fontSize: 13,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--primary)",
                marginBottom: 14,
              }}
            >
              // quem somos
            </p>

            <h2
              style={{
                fontFamily: "ui-serif, 'Iowan Old Style', 'Palatino Linotype', Georgia, serif",
                fontSize: "clamp(26px, 3.5vw, 38px)",
                fontWeight: 600,
                color: "var(--primary-dark)",
                letterSpacing: "-0.01em",
                marginBottom: 22,
              }}
            >
              {titulo}
            </h2>

            <p
              style={{
                fontSize: 15.5,
                color: "#5b6b7c",
                lineHeight: 1.8,
                whiteSpace: "pre-line",
              }}
            >
              {texto}
            </p>

            {/* Com foto, os números ficam embaixo do texto (a direita já está ocupada) */}
            {foto && numeros?.length > 0 && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: `repeat(${numeros.length}, 1fr)`,
                  gap: 16,
                  borderTop: "1px solid rgba(26,46,74,0.1)",
                  marginTop: 40,
                  paddingTop: 32,
                }}
              >
                {numeros.map((n, i) => (
                  <div key={i}>
                    <p style={{ fontFamily: "ui-serif, Georgia, serif", fontSize: "clamp(24px, 3vw, 30px)", fontWeight: 600, color: "var(--primary)", lineHeight: 1, marginBottom: 6 }}>
                      {n.valor}
                    </p>
                    <p style={{ fontSize: 12.5, color: "#7a8b9a" }}>{n.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Foto, se existir — senão, painel de números */}
          {foto ? (
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", inset: -12, background: "var(--primary)", borderRadius: 20, opacity: 0.08 }} />
              <ImagemLightbox src={foto} alt={`Foto ${titulo}`} />
            </div>
          ) : (
            numeros?.length > 0 && (
              <div
                style={{
                  background: "var(--primary-dark)",
                  borderRadius: 16,
                  padding: "8px 32px",
                }}
              >
                {numeros.map((n, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      justifyContent: "space-between",
                      gap: 16,
                      padding: "24px 0",
                      borderTop: i > 0 ? "1px solid rgba(255,255,255,0.12)" : "none",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "ui-monospace, 'Cascadia Code', 'SF Mono', Consolas, monospace",
                        fontSize: 12.5,
                        letterSpacing: "0.03em",
                        color: "rgba(255,255,255,0.65)",
                      }}
                    >
                      {n.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "ui-serif, 'Iowan Old Style', Georgia, serif",
                        fontSize: 30,
                        fontWeight: 600,
                        color: "var(--primary)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {n.valor}
                    </span>
                  </div>
                ))}
              </div>
            )
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .sobre-bd-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
