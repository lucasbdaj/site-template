import type { ClientConfig } from "../../lib/types";

export default function Hero({ config }: { config: ClientConfig }) {
  const wppMsg = encodeURIComponent(config.mensagemWhatsapp ?? "");
  const ctaHref = config.whatsapp
    ? `https://wa.me/55${config.whatsapp}?text=${wppMsg}`
    : config.telefone
      ? `tel:${config.telefone}`
      : "#contato";

  const {
    badge,
    titulo,
    subtitulo,
    cta,
    ctaSecundario,
    ctaSecundarioHref = "#servicos",
    imagemFundo,
    pontosFortes,
  } = config.hero;

  const bgStyle = imagemFundo
    ? {
        backgroundImage: `linear-gradient(rgba(10, 10, 12, 0.78), rgba(10, 10, 12, 0.88)), url(${imagemFundo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {
        background: `linear-gradient(145deg, var(--primary-dark) 0%, var(--primary) 100%)`,
      };

  return (
    <section
      style={{
        ...bgStyle,
        position: "relative",
        minHeight: "calc(100vh - 72px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 24px 96px",
        color: "white",
      }}
    >
      <div style={{ maxWidth: 840, margin: "0 auto", textAlign: "center" }}>
        
        {/* Badge do Hero */}
        {badge && (
          <div style={{ marginBottom: 20 }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(255, 255, 255, 0.12)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "#f3f4f6",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                padding: "6px 16px",
                borderRadius: 999,
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e" }} />
              {badge}
            </span>
          </div>
        )}

        {/* Título Principal */}
        <h1
          style={{
            fontSize: "clamp(32px, 5.2vw, 54px)",
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
            marginBottom: 22,
            textShadow: "0 2px 20px rgba(0,0,0,0.35)",
          }}
        >
          {titulo}
        </h1>

        {/* Subtítulo */}
        <p
          style={{
            fontSize: "clamp(16px, 2.2vw, 20px)",
            color: "rgba(255, 255, 255, 0.88)",
            lineHeight: 1.65,
            maxWidth: 680,
            margin: "0 auto 36px",
          }}
        >
          {subtitulo}
        </p>

        {/* Botões de Ação */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 14,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 36,
          }}
        >
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "#25D366",
              color: "white",
              padding: "16px 32px",
              borderRadius: 12,
              textDecoration: "none",
              fontSize: 16,
              fontWeight: 700,
              boxShadow: "0 10px 25px rgba(37, 211, 102, 0.35)",
              transition: "transform 0.15s ease",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {cta}
          </a>

          {ctaSecundario && (
            <a
              href={ctaSecundarioHref}
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "rgba(255, 255, 255, 0.1)",
                color: "white",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                backdropFilter: "blur(8px)",
                padding: "16px 28px",
                borderRadius: 12,
                textDecoration: "none",
                fontSize: 16,
                fontWeight: 600,
              }}
            >
              {ctaSecundario}
            </a>
          )}
        </div>

        {/* Pontos fortes em destaque */}
        {pontosFortes && pontosFortes.length > 0 && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              justifyContent: "center",
              marginTop: 16,
              borderTop: "1px solid rgba(255, 255, 255, 0.12)",
              paddingTop: 24,
            }}
          >
            {pontosFortes.map((ponto, i) => (
              <div
                key={i}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 14,
                  color: "rgba(255, 255, 255, 0.82)",
                }}
              >
                <span style={{ color: "#22c55e", fontWeight: 800 }}>✓</span>
                {ponto}
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}