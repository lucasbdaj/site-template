export default function Contato({ config }) {
  const wppUrl = `https://wa.me/55${config.whatsapp}?text=${encodeURIComponent(config.mensagemWhatsapp)}`;
  const temMapa = !!config.googleMapsEmbed;

  return (
    <section
      id="contato"
      style={{
        background: "linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%)",
        padding: "96px 24px",
        color: "white",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Cabeçalho */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{
            display: "inline-block",
            background: "rgba(255,255,255,0.2)",
            color: "white",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "4px 14px",
            borderRadius: 20,
            marginBottom: 16,
          }}>
            Fale conosco
          </span>
          <h2 style={{
            fontSize: "clamp(26px, 3.5vw, 38px)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
          }}>
            Entre em Contato
          </h2>
          <p style={{ fontSize: 16, opacity: 0.8, marginTop: 12 }}>
            Estamos prontos para atender você
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: temMapa ? "1fr 1fr" : "1fr",
            gap: 48,
            alignItems: "start",
          }}
          className={temMapa ? "contato-grid" : ""}
        >
          {/* Informações de contato */}
          <div style={{
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(10px)",
            borderRadius: 20,
            padding: "40px 36px",
            border: "1px solid rgba(255,255,255,0.2)",
          }}>
            {/* Endereço */}
            <div style={{ display: "flex", gap: 16, marginBottom: 28, alignItems: "flex-start" }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: "rgba(255,255,255,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <p style={{ fontSize: 12, opacity: 0.7, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4 }}>Endereço</p>
                <p style={{ fontSize: 15, lineHeight: 1.5 }}>{config.endereco}</p>
              </div>
            </div>

            {/* Horário */}
            <div style={{ display: "flex", gap: 16, marginBottom: 28, alignItems: "flex-start" }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: "rgba(255,255,255,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div>
                <p style={{ fontSize: 12, opacity: 0.7, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4 }}>Horário</p>
                {config.horario.map((h, i) => (
                  <p key={i} style={{ fontSize: 15, lineHeight: 1.6 }}>{h}</p>
                ))}
              </div>
            </div>

            {/* WhatsApp */}
            {config.whatsapp && (
              <div style={{ display: "flex", gap: 16, marginBottom: 28, alignItems: "flex-start" }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: "#25D366",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p style={{ fontSize: 12, opacity: 0.7, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4 }}>WhatsApp</p>
                  <a href={wppUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: 15, color: "white", textDecoration: "none" }}>
                    {config.whatsapp}
                  </a>
                </div>
              </div>
            )}

            {/* Email */}
            {config.email && (
              <div style={{ display: "flex", gap: 16, marginBottom: 28, alignItems: "flex-start" }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: "rgba(255,255,255,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <p style={{ fontSize: 12, opacity: 0.7, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4 }}>E-mail</p>
                  <a href={`mailto:${config.email}`} style={{ fontSize: 15, color: "white", textDecoration: "none" }}>
                    {config.email}
                  </a>
                </div>
              </div>
            )}

            {/* Botão CTA */}
            <a
              href={wppUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                background: "white",
                color: "var(--primary)",
                padding: "16px",
                borderRadius: 12,
                textDecoration: "none",
                fontSize: 16,
                fontWeight: 700,
                marginTop: 8,
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Enviar mensagem
            </a>
          </div>

          {/* Mapa (opcional) */}
          {temMapa && (
            <div style={{
              borderRadius: 20,
              overflow: "hidden",
              boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
              border: "1px solid rgba(255,255,255,0.2)",
              aspectRatio: "1 / 1",
            }}>
              <iframe
                src={config.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização no mapa"
              />
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contato-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}