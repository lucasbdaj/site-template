export default function Hero({ config }) {
  const ctaHref = config.whatsapp
    ? `https://wa.me/55${config.whatsapp}?text=${encodeURIComponent(config.mensagemWhatsapp)}`
    : config.telefone
      ? `tel:${config.telefone}`
      : "#contato";
  const { titulo, subtitulo, cta, imagemFundo } = config.hero;

  const bgStyle = imagemFundo
    ? {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${imagemFundo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {
        background: `linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%)`,
      };

  return (
    <section
      style={{
        ...bgStyle,
        minHeight: "calc(100vh - 72px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 24px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 720 }}>
        <h1 style={{
          fontSize: "clamp(32px, 5vw, 56px)",
          fontWeight: 800,
          color: "white",
          lineHeight: 1.2,
          marginBottom: 20,
          letterSpacing: "-0.02em",
        }}>
          {titulo}
        </h1>

        <p style={{
          fontSize: "clamp(16px, 2vw, 20px)",
          color: "rgba(255,255,255,0.85)",
          marginBottom: 40,
          maxWidth: 560,
          margin: "0 auto 40px",
          lineHeight: 1.7,
        }}>
          {subtitulo}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
          <a
            href={ctaHref}
            target={config.whatsapp ? "_blank" : "_self"}
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "white",
              color: "var(--primary)",
              padding: "16px 32px",
              borderRadius: 12,
              textDecoration: "none",
              fontSize: 17,
              fontWeight: 700,
              boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {cta}
          </a>

          <a
            href="#servicos"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(255,255,255,0.15)",
              color: "white",
              padding: "16px 28px",
              borderRadius: 12,
              textDecoration: "none",
              fontSize: 17,
              fontWeight: 600,
              border: "2px solid rgba(255,255,255,0.4)",
              backdropFilter: "blur(4px)",
            }}
          >
            Ver serviços
          </a>
        </div>
      </div>
    </section>
  );
}