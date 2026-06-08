export default function Footer({ config }) {
  const wppUrl = `https://wa.me/55${config.whatsapp}?text=${encodeURIComponent(config.mensagemWhatsapp)}`;
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#111827", color: "white" }}>
      <div style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "48px 24px 32px",
      }}>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 40,
          marginBottom: 48,
        }}>

          {/* Identidade */}
          <div>
            {config.logo ? (
              <img
                src={config.logo}
                alt={config.nome}
                style={{ height: 36, objectFit: "contain", marginBottom: 16, filter: "brightness(0) invert(1)" }}
              />
            ) : (
              <p style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>{config.nome}</p>
            )}
            <p style={{ fontSize: 14, color: "#9ca3af", lineHeight: 1.7 }}>
              {config.slogan}
            </p>
          </div>

          {/* Links */}
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#6b7280", marginBottom: 16 }}>
              Navegação
            </p>
            {[
              { label: "Início",   href: "#"        },
              { label: "Serviços", href: "#servicos" },
              { label: "Sobre",    href: "#sobre"    },
              { label: "Contato",  href: "#contato"  },
            ].map(({ label, href }) => (
              <a key={href} href={href} style={{
                display: "block",
                fontSize: 14,
                color: "#9ca3af",
                textDecoration: "none",
                marginBottom: 10,
                lineHeight: 1,
              }}>
                {label}
              </a>
            ))}
          </div>

          {/* Contato */}
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#6b7280", marginBottom: 16 }}>
              Contato
            </p>
            <p style={{ fontSize: 14, color: "#9ca3af", marginBottom: 10 }}>{config.endereco}</p>
            {config.email && (
              <a href={`mailto:${config.email}`} style={{ display: "block", fontSize: 14, color: "#9ca3af", textDecoration: "none", marginBottom: 10 }}>
                {config.email}
              </a>
            )}
            {config.whatsapp && (
              <a href={wppUrl} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 14, color: "#25D366", textDecoration: "none" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {config.whatsapp}
              </a>
            )}
          </div>

          {/* Redes sociais */}
          {(config.instagram || config.facebook) && (
            <div>
              <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#6b7280", marginBottom: 16 }}>
                Redes sociais
              </p>
              {config.instagram && (
                <a
                  href={`https://instagram.com/${config.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    fontSize: 14, color: "#9ca3af", textDecoration: "none",
                    marginBottom: 12,
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                  @{config.instagram}
                </a>
              )}
              {config.facebook && (
                <a
                  href={config.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", gap: 8,
                    fontSize: 14, color: "#9ca3af", textDecoration: "none",
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                  Facebook
                </a>
              )}
            </div>
          )}
        </div>

        {/* Rodapé inferior */}
        <div style={{
          borderTop: "1px solid #1f2937",
          paddingTop: 24,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 8,
        }}>
          <p style={{ fontSize: 13, color: "#4b5563" }}>
            © {year} {config.nome}. Todos os direitos reservados.
          </p>
          <p style={{ fontSize: 12, color: "#374151" }}>
            by{" "}
            <a
              href="https://basisdatum.com.br"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#4b5563", textDecoration: "none" }}
            >
              Basis Datum
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}