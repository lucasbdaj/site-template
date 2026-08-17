// Seção "Contato" específica da home da Basis Datum Services — não é o Contato.js
// genérico usado pelos clientes do template (ver regra em CLAUDE.md).
// Tipografia/paleta seguem o mesmo sistema das demais seções da home.

export default function ContatoBasisDatum({ config }) {
  const ctaHref = config.whatsapp
    ? `https://wa.me/55${config.whatsapp}?text=${encodeURIComponent(config.mensagemWhatsapp)}`
    : config.telefone
      ? `tel:${config.telefone}`
      : "#contato";

  const temMapa = !!config.googleMapsEmbed;
  const horariosEstruturados = config.horario?.length > 0 && typeof config.horario[0] === "object";

  const iconChip = (bg, children) => (
    <div style={{
      width: 44, height: 44, borderRadius: 10, background: bg,
      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
    }}>
      {children}
    </div>
  );

  const label = (text) => (
    <p style={{ fontSize: 11, opacity: 0.65, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 3 }}>
      {text}
    </p>
  );

  return (
    <section
      id="contato"
      style={{
        background: "var(--primary-dark)",
        position: "relative",
        overflow: "hidden",
        padding: "104px 24px",
        color: "white",
      }}
    >
      <div style={{
        position: "absolute", bottom: -180, left: -120, width: 460, height: 460,
        borderRadius: "50%",
        background: "radial-gradient(circle, color-mix(in srgb, var(--primary) 40%, transparent), transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>

        {/* Cabeçalho */}
        <div style={{ maxWidth: 560, marginBottom: 56 }}>
          <p style={{
            fontFamily: "ui-monospace, 'Cascadia Code', 'SF Mono', Consolas, monospace",
            fontSize: 13,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--primary)",
            marginBottom: 14,
          }}>
            // contato
          </p>
          <h2 style={{
            fontFamily: "ui-serif, 'Iowan Old Style', 'Palatino Linotype', Georgia, serif",
            fontSize: "clamp(26px, 3.5vw, 38px)",
            fontWeight: 600,
            letterSpacing: "-0.01em",
            marginBottom: 12,
          }}>
            Entre em contato
          </h2>
          <p style={{ fontSize: 15.5, color: "rgba(255,255,255,0.75)", lineHeight: 1.7 }}>
            Estamos prontos para atender você.
          </p>
        </div>

        <div
          className={temMapa ? "contato-bd-grid" : ""}
          style={{
            display: "grid",
            gridTemplateColumns: temMapa ? "1fr 1fr" : "1fr",
            gap: 24,
            alignItems: "stretch",
          }}
        >
          {/* Card de informações */}
          <div style={{
            background: "rgba(255,255,255,0.06)",
            borderRadius: 16,
            padding: "32px 28px",
            border: "1px solid rgba(255,255,255,0.14)",
          }}>

            {/* Endereço */}
            <div style={{ display: "flex", gap: 14, marginBottom: 22, alignItems: "flex-start" }}>
              {iconChip("rgba(255,255,255,0.1)", (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
              ))}
              <div>
                {label("Endereço")}
                <p style={{ fontSize: 14, lineHeight: 1.5 }}>{config.endereco}</p>
              </div>
            </div>

            {/* WhatsApp */}
            {config.whatsapp && (
              <div style={{ display: "flex", gap: 14, marginBottom: 22, alignItems: "flex-start" }}>
                {iconChip("#25D366", (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                ))}
                <div>
                  {label("WhatsApp")}
                  <a href={ctaHref} style={{ fontSize: 14, color: "white", textDecoration: "none" }}>
                    {config.whatsapp}
                  </a>
                </div>
              </div>
            )}

            {/* Telefone fixo (sem WhatsApp) */}
            {!config.whatsapp && config.telefone && (
              <div style={{ display: "flex", gap: 14, marginBottom: 22, alignItems: "flex-start" }}>
                {iconChip("rgba(255,255,255,0.1)", (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.14 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.05 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
                  </svg>
                ))}
                <div>
                  {label("Telefone")}
                  <a href={ctaHref} style={{ fontSize: 14, color: "white", textDecoration: "none" }}>
                    {config.telefone.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3")}
                  </a>
                </div>
              </div>
            )}

            {/* Email */}
            {config.email && (
              <div style={{ display: "flex", gap: 14, marginBottom: 22, alignItems: "flex-start" }}>
                {iconChip("rgba(255,255,255,0.1)", (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                  </svg>
                ))}
                <div>
                  {label("E-mail")}
                  <a href={`mailto:${config.email}`} style={{ fontSize: 14, color: "white", textDecoration: "none" }}>{config.email}</a>
                </div>
              </div>
            )}

            {/* Horários */}
            {config.horario?.length > 0 && (
              <div style={{ marginTop: 6, borderTop: "1px solid rgba(255,255,255,0.14)", paddingTop: 20 }}>
                {label("Horário de atendimento")}
                {horariosEstruturados ? (
                  config.horario.map((h, i) => (
                    <div key={i} style={{
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                      padding: "7px 0",
                      borderBottom: i < config.horario.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                    }}>
                      <span style={{ fontSize: 13, opacity: 0.8 }}>{h.dia}</span>
                      <span style={{ fontSize: 13, fontWeight: 600, color: h.horario === "Fechado" ? "rgba(255,255,255,0.4)" : "white" }}>
                        {h.horario}
                      </span>
                    </div>
                  ))
                ) : (
                  config.horario.map((h, i) => (
                    <p key={i} style={{ fontSize: 13, opacity: 0.8, marginBottom: 6 }}>{h}</p>
                  ))
                )}
              </div>
            )}

            {/* CTA */}
            <a
              href={ctaHref}
              target="_self"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                background: "white", color: "var(--primary-dark)", padding: "14px",
                borderRadius: 12, textDecoration: "none", fontSize: 15, fontWeight: 700,
                marginTop: 24,
              }}
            >
              {config.whatsapp ? (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Enviar mensagem
                </>
              ) : "Entrar em contato"}
            </a>
          </div>

          {/* Mapa */}
          {temMapa && (
            <div style={{
              borderRadius: 16, overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.14)",
              minHeight: 400,
            }}>
              <iframe
                src={config.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, display: "block", minHeight: 400 }}
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
          .contato-bd-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
