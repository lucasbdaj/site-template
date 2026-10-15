// Seção "Sobre" específica da home da Basis Datum Services — não é o Sobre.js
// genérico usado pelos clientes do template (ver regra em CLAUDE.md).
// Tipografia/paleta seguem o mesmo sistema do HeroBasisDatum.js / ServicosBasisDatum.js.

import ImagemLightbox from "./ImagemLightbox";
import type { ClientConfig } from "../../lib/types";

export default function SobreBasisDatum({ config }: { config: ClientConfig }) {
  const { titulo, texto, foto, numeros } = config.sobre;

  return (
    <section id="sobre" style={{ background: "#ffffff", padding: "104px 24px" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        <div className="sobre-bd-grid" style={{ display: "grid", gridTemplateColumns: "1.25fr 1fr", gap: 56, alignItems: "center" }}>

          {/* Texto de Apresentação */}
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "4px 12px",
                borderRadius: 100,
                background: "rgba(0,170,221,0.08)",
                marginBottom: 16,
              }}
            >
              <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 12, fontWeight: 700, textTransform: "uppercase", color: "var(--primary)" }}>
                // quem somos
              </span>
            </div>

            <h2
              style={{
                fontSize: "clamp(28px, 3.5vw, 38px)",
                fontWeight: 800,
                color: "var(--primary-dark)",
                letterSpacing: "-0.02em",
                marginBottom: 20,
                lineHeight: 1.2,
              }}
            >
              {titulo}
            </h2>

            <p
              style={{
                fontSize: 15.5,
                color: "#475569",
                lineHeight: 1.8,
                whiteSpace: "pre-line",
                marginBottom: 24,
              }}
            >
              {texto}
            </p>

            {/* Selo de autoridade local */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "14px 18px",
                background: "#f8fafc",
                borderRadius: 12,
                border: "1px solid #e2e8f0",
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: "var(--primary-dark)",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: 16,
                  flexShrink: 0,
                }}
              >
                LB
              </div>
              <div style={{ fontSize: 13.5, color: "#334155" }}>
                <strong>Lucas Borges</strong> — Desenvolvedor e fundador do ecossistema Basis Datum (Bauru Empregos, Bauru Serviços e Posto Certo).
              </div>
            </div>
          </div>

          {/* Painel Moderno de Métricas */}
          {foto ? (
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", inset: -10, background: "var(--primary)", borderRadius: 20, opacity: 0.1 }} />
              <ImagemLightbox src={foto} alt={`Foto ${titulo}`} />
            </div>
          ) : (
            <div
              style={{
                background: "linear-gradient(160deg, #102138 0%, var(--primary-dark) 100%)",
                borderRadius: 20,
                padding: "36px 32px",
                boxShadow: "0 24px 50px -15px rgba(26,46,74,0.3)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <p style={{ fontFamily: "ui-monospace, monospace", fontSize: 11.5, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--primary)", marginBottom: 20, fontWeight: 700 }}>
                Compromisso com o comércio de Bauru
              </p>

              {numeros && numeros.length > 0 ? (
                numeros.map((n, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "20px 0",
                      borderTop: i > 0 ? "1px solid rgba(255,255,255,0.08)" : "none",
                    }}
                  >
                    <span style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", fontWeight: 500 }}>
                      {n.label}
                    </span>
                    <span
                      style={{
                        fontSize: 28,
                        fontWeight: 800,
                        color: "var(--primary)",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {n.valor}
                    </span>
                  </div>
                ))
              ) : (
                <>
                  <div style={{ display: "flex", justifyContent: "space-between", padding: "18px 0" }}>
                    <span style={{ color: "rgba(255,255,255,0.8)" }}>Foco geográfico</span>
                    <span style={{ color: "var(--primary)", fontWeight: 800, fontSize: 24 }}>100% Bauru</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", padding: "18px 0", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                    <span style={{ color: "rgba(255,255,255,0.8)" }}>Plataformas criadas</span>
                    <span style={{ color: "var(--primary)", fontWeight: 800, fontSize: 24 }}>3 no ar</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", padding: "18px 0", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                    <span style={{ color: "rgba(255,255,255,0.8)" }}>Suporte</span>
                    <span style={{ color: "var(--primary)", fontWeight: 800, fontSize: 24 }}>Direto</span>
                  </div>
                </>
              )}

              <div style={{ marginTop: 12, paddingTop: 18, borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e" }} />
                <span style={{ fontSize: 12.5, color: "rgba(255,255,255,0.65)" }}>Disponível para novos projetos em Bauru</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .sobre-bd-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}