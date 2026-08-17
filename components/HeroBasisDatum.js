// Hero específico da home da Basis Datum Services — não é o Hero.js genérico
// usado pelos clientes do template (ver regra em CLAUDE.md).
export default function HeroBasisDatum({ config }) {
  const ctaHref = config.whatsapp
    ? `https://wa.me/55${config.whatsapp}?text=${encodeURIComponent(config.mensagemWhatsapp)}`
    : config.telefone
      ? `tel:${config.telefone}`
      : "#contato";
  const { titulo, subtitulo, cta } = config.hero;

  return (
    <section
      style={{
        background: "var(--primary-dark)",
        position: "relative",
        overflow: "hidden",
        padding: "88px 24px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -160,
          right: -100,
          width: 480,
          height: 480,
          borderRadius: "50%",
          background: "radial-gradient(circle, color-mix(in srgb, var(--primary) 45%, transparent), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="hero-bd-grid" style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
        <div>
          <p
            style={{
              fontFamily: "ui-monospace, 'Cascadia Code', 'SF Mono', Consolas, monospace",
              fontSize: 13,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--primary)",
              marginBottom: 18,
              opacity: 0.9,
            }}
          >
            // presença digital para negócios locais
          </p>

          <h1
            style={{
              fontSize: "clamp(30px, 4vw, 46px)",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.2,
              marginBottom: 20,
              letterSpacing: "-0.02em",
            }}
          >
            {titulo}
          </h1>

          <p
            style={{
              fontSize: "clamp(16px, 1.6vw, 18px)",
              color: "rgba(255,255,255,0.82)",
              marginBottom: 34,
              maxWidth: 460,
              lineHeight: 1.7,
            }}
          >
            {subtitulo}
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 18 }}>
            <a
              href="/orcamento"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "white",
                color: "var(--primary-dark)",
                padding: "16px 32px",
                borderRadius: 12,
                textDecoration: "none",
                fontSize: 17,
                fontWeight: 700,
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              }}
            >
              Quero meu orçamento
            </a>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 18, fontSize: 14 }}>
            <a
              href={ctaHref}
              target="_self"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                color: "rgba(255,255,255,0.75)",
                textDecoration: "none",
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {cta}
            </a>
            <span style={{ color: "rgba(255,255,255,0.35)" }}>·</span>
            <a href="#servicos" style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none" }}>
              Ver serviços
            </a>
          </div>
        </div>

        {/* Mockup ilustrativo de um site de cliente — não representa nenhum cliente real */}
        <div
          className="hero-bd-mock"
          style={{
            background: "#ffffff",
            borderRadius: 12,
            padding: 6,
            boxShadow: "0 24px 60px -20px rgba(0,0,0,0.5)",
            transform: "rotate(1.2deg)",
          }}
        >
          <div style={{ display: "flex", gap: 5, padding: "8px 10px" }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#e5e7eb" }} />
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#e5e7eb" }} />
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#e5e7eb" }} />
          </div>
          <div style={{ background: "#f5f7fa", borderRadius: 8, padding: "22px 18px" }}>
            <div style={{ width: "40%", height: 8, borderRadius: 4, background: "#cbd5df", marginBottom: 10 }} />
            <div style={{ width: "70%", height: 14, borderRadius: 4, background: "var(--primary-dark)", marginBottom: 8 }} />
            <div style={{ width: "55%", height: 14, borderRadius: 4, background: "var(--primary-dark)", marginBottom: 16 }} />
            <div style={{ width: "30%", height: 10, borderRadius: 4, background: "var(--primary)", marginBottom: 18 }} />
            <div style={{ display: "flex", gap: 8 }}>
              <div style={{ flex: 1, height: 46, borderRadius: 6, background: "#e8edf2" }} />
              <div style={{ flex: 1, height: 46, borderRadius: 6, background: "#e8edf2" }} />
              <div style={{ flex: 1, height: 46, borderRadius: 6, background: "#e8edf2" }} />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-bd-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 56px;
          align-items: center;
        }
        @media (max-width: 860px) {
          .hero-bd-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .hero-bd-mock {
            max-width: 420px;
            margin: 0 auto;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
