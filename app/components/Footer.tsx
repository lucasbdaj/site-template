import type { ClientConfig } from "../../lib/types";

export default function Footer({ config }: { config: ClientConfig }) {
  const wppUrl = `https://wa.me/55${config.whatsapp}?text=${encodeURIComponent(config.mensagemWhatsapp ?? "")}`;
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#080e18", color: "white", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "54px 24px 32px" }}>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 36, marginBottom: 44 }}>
          
          {/* Identidade */}
          <div>
            {config.logo ? (
              <img
                src={config.logo}
                alt={config.nome}
                style={{ height: 38, objectFit: "contain", marginBottom: 14, filter: "brightness(0) invert(1)" }}
              />
            ) : (
              <p style={{ fontSize: 20, fontWeight: 800, marginBottom: 12, letterSpacing: "-0.02em" }}>{config.nome}</p>
            )}
            <p style={{ fontSize: 13.5, color: "#94a3b8", lineHeight: 1.7 }}>
              Soluções digitais e presença no Google Maps para fortalecer o comércio local de Bauru e região.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#64748b", marginBottom: 14 }}>
              Navegação
            </p>
            {[
              { label: "Início", href: "#" },
              { label: "Serviços & Pacotes", href: "#servicos" },
              { label: "Sobre a Empresa", href: "#sobre" },
              { label: "Portfólio de Clientes", href: "#portfolio" },
              { label: "Falar Conosco", href: "#contato" },
            ].map(({ label, href }) => (
              <a key={href} href={href} style={{ display: "block", fontSize: 13.5, color: "#cbd5e1", textDecoration: "none", marginBottom: 9 }}>
                {label}
              </a>
            ))}
          </div>

          {/* Contato Direto */}
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#64748b", marginBottom: 14 }}>
              Atendimento
            </p>
            <p style={{ fontSize: 13.5, color: "#cbd5e1", marginBottom: 8 }}>Bauru, SP</p>
            {config.email && (
              <a href={`mailto:${config.email}`} style={{ display: "block", fontSize: 13.5, color: "#cbd5e1", textDecoration: "none", marginBottom: 8 }}>
                {config.email}
              </a>
            )}
            {config.whatsapp && (
              <a href={wppUrl} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13.5, color: "#25D366", textDecoration: "none", fontWeight: 600 }}>
                (14) 98807-6360
              </a>
            )}
          </div>

          {/* Ecossistema Basis Datum */}
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#64748b", marginBottom: 14 }}>
              Ecossistema Bauru
            </p>
            <a href="https://basisdatum.com.br" target="_blank" rel="noopener noreferrer" style={{ display: "block", fontSize: 13.5, color: "#38bdf8", textDecoration: "none", marginBottom: 8 }}>
              Basis Datum Principal →
            </a>
            <a href="https://basisdatum.com.br/sobre" target="_blank" rel="noopener noreferrer" style={{ display: "block", fontSize: 13.5, color: "#94a3b8", textDecoration: "none", marginBottom: 8 }}>
              Bauru Empregos & Serviços
            </a>
          </div>

        </div>

        {/* Linha final */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24, display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
          <p style={{ fontSize: 12.5, color: "#64748b", margin: 0 }}>
            © {year} Basis Datum Services. Todos os direitos reservados.
          </p>
          <p style={{ fontSize: 12, color: "#64748b", margin: 0 }}>
            Desenvolvido em Bauru por <strong style={{ color: "#94a3b8" }}>Basis Datum</strong>
          </p>
        </div>

      </div>
    </footer>
  );
}