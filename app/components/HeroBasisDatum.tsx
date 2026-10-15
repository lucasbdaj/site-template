// Hero específico da home da Basis Datum Services — não é o Hero.js genérico
// usado pelos clientes do template (ver regra em CLAUDE.md).
import { BASE_PATH } from "../../lib/basePath";
import type { ClientConfig } from "../../lib/types";

export default function HeroBasisDatum({ config }: { config: ClientConfig }) {
  const ctaHref = config.whatsapp
    ? `https://wa.me/55${config.whatsapp}?text=${encodeURIComponent(config.mensagemWhatsapp ?? "")}`
    : config.telefone
      ? `tel:${config.telefone}`
      : "#contato";
  const { titulo, subtitulo, cta } = config.hero;

  return (
    <section
      style={{
        background: "linear-gradient(145deg, #0f1c2e 0%, var(--primary-dark) 60%, #152438 100%)",
        position: "relative",
        overflow: "hidden",
        padding: "96px 24px 110px",
      }}
    >
      {/* Luzes de ambiência modernas (Glow) */}
      <div
        style={{
          position: "absolute",
          top: -120,
          right: -80,
          width: 520,
          height: 520,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,170,221,0.22) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -150,
          left: -100,
          width: 450,
          height: 450,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,170,221,0.12) 0%, transparent 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />

      <div className="hero-bd-grid" style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div>
          {/* Badge Chamativo */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 14px",
              borderRadius: 100,
              background: "rgba(0,170,221,0.12)",
              border: "1px solid rgba(0,170,221,0.3)",
              marginBottom: 22,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "var(--primary)",
                boxShadow: "0 0 10px var(--primary)",
              }}
            />
            <span
              style={{
                fontFamily: "ui-monospace, monospace",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#e0f6fc",
              }}
            >
              Presença Digital & SEO Local em Bauru
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(32px, 4.2vw, 48px)",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.15,
              marginBottom: 20,
              letterSpacing: "-0.03em",
            }}
          >
            {titulo}
          </h1>

          <p
            style={{
              fontSize: "clamp(16px, 1.5vw, 18px)",
              color: "rgba(255,255,255,0.85)",
              marginBottom: 36,
              maxWidth: 500,
              lineHeight: 1.75,
            }}
          >
            {subtitulo}
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 28 }}>
            <a
              href={`${BASE_PATH}/orcamento`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "linear-gradient(135deg, var(--primary) 0%, #0088b3 100%)",
                color: "white",
                padding: "16px 32px",
                borderRadius: 12,
                textDecoration: "none",
                fontSize: 16,
                fontWeight: 700,
                boxShadow: "0 8px 24px -4px rgba(0,170,221,0.45)",
                transition: "all 0.2s ease",
              }}
            >
              Quero meu orçamento
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            <a
              href={ctaHref}
              target="_self"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.15)",
                backdropFilter: "blur(10px)",
                color: "white",
                padding: "15px 24px",
                borderRadius: 12,
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 600,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {cta}
            </a>
          </div>

          {/* Micro-prova social */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, color: "rgba(255,255,255,0.7)", fontSize: 13 }}>
            <div style={{ display: "flex", color: "#fbbf24" }}>{"★★★★★"}</div>
            <span>Foco em negócios de Bauru · Suporte direto via WhatsApp</span>
          </div>
        </div>

        {/* Mockup Visual Moderno — Demonstração do Resultado */}
        <div style={{ position: "relative" }}>
          <div
            className="hero-bd-mock"
            style={{
              background: "#0c1726",
              borderRadius: 18,
              padding: "16px",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "0 30px 70px -15px rgba(0,0,0,0.7), 0 0 35px rgba(0,170,221,0.15)",
            }}
          >
            {/* Header da Janela */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14, paddingBottom: 10, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <div style={{ display: "flex", gap: 6 }}>
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ef4444" }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#f59e0b" }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#10b981" }} />
              </div>
              <span style={{ color: "rgba(255,255,255,0.45)", fontSize: 11, fontFamily: "monospace" }}>
                sua-empresa.com.br
              </span>
              <span style={{ width: 30 }} />
            </div>

            {/* Conteúdo Simulado de Alta Conversão */}
            <div style={{ background: "#132338", borderRadius: 12, padding: "18px 20px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700 }}>
                    📍
                  </div>
                  <div>
                    <div style={{ color: "white", fontWeight: 700, fontSize: 15 }}>Sua Empresa no Topo</div>
                    <div style={{ color: "#34d399", fontSize: 11, fontWeight: 500 }}>✓ Perfil Verificado no Google</div>
                  </div>
                </div>
                <div style={{ background: "rgba(251,191,36,0.15)", color: "#fbbf24", padding: "4px 8px", borderRadius: 6, fontSize: 12, fontWeight: 700 }}>
                  5.0 ★ (120+ avaliações)
                </div>
              </div>

              {/* Estatísticas de Impacto */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 14 }}>
                <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 10, padding: 12 }}>
                  <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 11 }}>Buscas no Google Maps</div>
                  <div style={{ color: "white", fontSize: 18, fontWeight: 700, marginTop: 4 }}>+2.400 /mês</div>
                </div>
                <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 10, padding: 12 }}>
                  <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 11 }}>Cliques p/ WhatsApp</div>
                  <div style={{ color: "var(--primary)", fontSize: 18, fontWeight: 700, marginTop: 4 }}>+310 novos</div>
                </div>
              </div>
            </div>
          </div>

          {/* Notificação Flutuante de WhatsApp */}
          <div
            style={{
              position: "absolute",
              bottom: -22,
              left: -15,
              background: "#ffffff",
              color: "#1e293b",
              padding: "12px 18px",
              borderRadius: 14,
              boxShadow: "0 18px 35px -8px rgba(0,0,0,0.35)",
              display: "flex",
              alignItems: "center",
              gap: 12,
              border: "1px solid #e2e8f0",
            }}
          >
            <div style={{ width: 34, height: 34, borderRadius: "50%", background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>
              💬
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700 }}>Novo lead recebido!</div>
              <div style={{ fontSize: 11, color: "#64748b" }}>"Vi sua empresa no Google e quero um orçamento"</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-bd-grid {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 56px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .hero-bd-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .hero-bd-mock {
            max-width: 440px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}