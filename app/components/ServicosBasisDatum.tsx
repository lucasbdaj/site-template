// Seção "O que oferecemos" específica da home da Basis Datum Services — não é o
// Servicos.js genérico usado pelos clientes do template (ver regra em CLAUDE.md).
// Tipografia/paleta seguem o mesmo sistema do HeroBasisDatum.js (mono + serif).
import { BASE_PATH } from "../../lib/basePath";
import type { ClientConfig } from "../../lib/types";

const BENEFICIOS = [
  // Google Meu Negócio
  [
    "Criação e verificação do perfil",
    "Otimização para busca local no Maps",
    "Categorias, fotos e horários certos",
    "Mais ligações e rotas traçadas",
  ],
  // Site Profissional
  [
    "Design rápido e adaptado para celular",
    "Botão direto para seu WhatsApp",
    "Otimizado para o Google (SEO)",
    "Hospedagem rápida e domínio próprio",
  ],
  // Pacote Completo
  [
    "Site Essencial + Google Meu Negócio",
    "Posicionamento local integrado",
    "Suporte prioritário via WhatsApp",
    "Melhor custo-benefício para empresas de Bauru",
  ],
];

export default function ServicosBasisDatum({ config }: { config: ClientConfig }) {
  const { titulo, itens } = config.servicos;

  return (
    <section id="servicos" style={{ background: "#f8fafc", padding: "100px 24px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <div style={{ maxWidth: 640, marginBottom: 54, textAlign: "center", marginInline: "auto" }}>
          <span
            style={{
              fontFamily: "ui-monospace, monospace",
              fontSize: 12,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--primary)",
              background: "rgba(0,170,221,0.08)",
              padding: "4px 12px",
              borderRadius: 100,
              fontWeight: 700,
            }}
          >
            Serviços & Soluções
          </span>
          <h2
            style={{
              fontSize: "clamp(28px, 3.5vw, 40px)",
              fontWeight: 800,
              color: "var(--primary-dark)",
              letterSpacing: "-0.02em",
              marginTop: 14,
              marginBottom: 12,
            }}
          >
            {titulo}
          </h2>
          <p style={{ color: "#64748b", fontSize: 16, lineHeight: 1.6 }}>
            Soluções diretas ao ponto para aumentar o faturamento do seu negócio e atrair clientes em Bauru.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
            gap: 24,
            alignItems: "stretch",
          }}
        >
          {itens.map((item, i) => {
            const destaque = i === itens.length - 1;
            const beneficios = BENEFICIOS[i] ?? [];

            return (
              <div
                key={i}
                className="servicos-bd-card"
                style={{
                  position: "relative",
                  background: destaque
                    ? "linear-gradient(160deg, #102138 0%, var(--primary-dark) 100%)"
                    : "#ffffff",
                  borderRadius: 18,
                  padding: "36px 30px",
                  border: destaque ? "1px solid rgba(0,170,221,0.4)" : "1px solid #e2e8f0",
                  boxShadow: destaque
                    ? "0 20px 40px -15px rgba(0,170,221,0.25)"
                    : "0 4px 20px rgba(0,0,0,0.04)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  {destaque && (
                    <span
                      style={{
                        position: "absolute",
                        top: -12,
                        right: 24,
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: "white",
                        background: "var(--primary)",
                        padding: "5px 12px",
                        borderRadius: 100,
                        boxShadow: "0 4px 12px rgba(0,170,221,0.4)",
                      }}
                    >
                      Mais Escolhido
                    </span>
                  )}

                  <div
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 12,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 20,
                      background: destaque ? "rgba(0,170,221,0.2)" : "rgba(0,170,221,0.1)",
                      color: destaque ? "#38bdf8" : "var(--primary)",
                      fontSize: 22,
                    }}
                  >
                    {item.icone ?? "✦"}
                  </div>

                  <h3
                    style={{
                      fontSize: 21,
                      fontWeight: 700,
                      color: destaque ? "#ffffff" : "var(--primary-dark)",
                      marginBottom: 10,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item.titulo}
                  </h3>

                  <p
                    style={{
                      fontSize: 14.5,
                      lineHeight: 1.65,
                      color: destaque ? "rgba(255,255,255,0.8)" : "#64748b",
                      marginBottom: 24,
                    }}
                  >
                    {item.descricao}
                  </p>

                  {/* Checklist de Entrega */}
                  <div style={{ borderTop: destaque ? "1px solid rgba(255,255,255,0.1)" : "1px solid #f1f5f9", paddingTop: 18, marginBottom: 26 }}>
                    <p style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: destaque ? "var(--primary)" : "#94a3b8", marginBottom: 12 }}>
                      O que está incluso:
                    </p>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                      {beneficios.map((b, idx) => (
                        <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: 9, fontSize: 13.5, color: destaque ? "#e2e8f0" : "#334155" }}>
                          <span style={{ color: destaque ? "#38bdf8" : "#0284c7", fontWeight: 800 }}>✓</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href={`${BASE_PATH}/orcamento`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    padding: "13px 20px",
                    borderRadius: 10,
                    textDecoration: "none",
                    fontWeight: 700,
                    fontSize: 14,
                    background: destaque ? "white" : "rgba(0,170,221,0.08)",
                    color: destaque ? "var(--primary-dark)" : "var(--primary)",
                    border: destaque ? "none" : "1px solid rgba(0,170,221,0.2)",
                    transition: "all 0.2s ease",
                  }}
                >
                  Solicitar este serviço
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .servicos-bd-card {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .servicos-bd-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px -10px rgba(15, 28, 46, 0.15);
        }
      `}</style>
    </section>
  );
}
