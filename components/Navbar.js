export default function Navbar({ config }) {
  const wppUrl = `https://wa.me/55${config.whatsapp}?text=${encodeURIComponent(config.mensagemWhatsapp)}`;

  return (
    <header style={{
      position: "sticky",
      top: 0,
      zIndex: 100,
      background: "white",
      borderBottom: "1px solid #e5e7eb",
    }}>
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "0 24px",
        height: 72,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
      }}>

        {/* Logo ou nome */}
        <a href="#" style={{ textDecoration: "none", flexShrink: 0 }}>
          {config.logo ? (
            <img src={config.logo} alt={config.nome} style={{ height: 40, objectFit: "contain" }} />
          ) : (
            <span style={{ fontSize: 20, fontWeight: 700, color: "var(--primary)" }}>
              {config.nome}
            </span>
          )}
        </a>

        {/* Links de navegação — visíveis só em desktop */}
        <nav style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <a href="#servicos" className="hidden md:inline-block" style={{
            padding: "8px 16px",
            textDecoration: "none",
            fontSize: 15,
            fontWeight: 500,
            color: "#4b5563",
            borderRadius: 8,
          }}>
            Serviços
          </a>
          <a href="#sobre" className="hidden md:inline-block" style={{
            padding: "8px 16px",
            textDecoration: "none",
            fontSize: 15,
            fontWeight: 500,
            color: "#4b5563",
            borderRadius: 8,
          }}>
            Sobre
          </a>
          <a href="#contato" className="hidden md:inline-block" style={{
            padding: "8px 16px",
            textDecoration: "none",
            fontSize: 15,
            fontWeight: 500,
            color: "#4b5563",
            borderRadius: 8,
          }}>
            Contato
          </a>

          {/* Botão WhatsApp */}
          <a
            href={wppUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "#25D366",
              color: "white",
              padding: "10px 18px",
              borderRadius: 8,
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 600,
              flexShrink: 0,
            }}
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="white" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </nav>
      </div>
    </header>
  );
}