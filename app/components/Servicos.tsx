import type { ClientConfig } from "../../lib/types";

export default function Servicos({ config }: { config: ClientConfig }) {
  const { badge, titulo, subtitulo, itens } = config.servicos;

  return (
    <section id="servicos" style={{ background: "#f8fafc", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        
        {/* Cabeçalho */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <span
            style={{
              display: "inline-block",
              background: "var(--primary)",
              color: "white",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "5px 16px",
              borderRadius: 999,
              marginBottom: 16,
            }}
          >
            {badge ?? "O que fazemos"}
          </span>

          <h2
            style={{
              fontSize: "clamp(26px, 3.6vw, 40px)",
              fontWeight: 800,
              color: "#0f172a",
              letterSpacing: "-0.02em",
              marginBottom: 12,
            }}
          >
            {titulo}
          </h2>

          {subtitulo && (
            <p style={{ fontSize: 16, color: "#64748b", maxWidth: 640, margin: "0 auto" }}>
              {subtitulo}
            </p>
          )}
        </div>

        {/* Grid de Serviços */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {itens.map((item, i) => {
            const msgItem = item.mensagemWhatsapp ?? `Olá! Gostaria de um orçamento para ${item.titulo}.`;
            const wppUrl = config.whatsapp
              ? `https://wa.me/55${config.whatsapp}?text=${encodeURIComponent(msgItem)}`
              : "#contato";

            return (
              <div
                key={i}
                style={{
                  background: "white",
                  borderRadius: 18,
                  padding: "36px 30px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04), 0 10px 24px rgba(0,0,0,0.03)",
                  border: item.destaque ? "2px solid var(--primary)" : "1px solid #e2e8f0",
                  position: "relative",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                {item.destaque && (
                  <span
                    style={{
                      position: "absolute",
                      top: 14,
                      right: 18,
                      background: "var(--primary)",
                      color: "white",
                      fontSize: 11,
                      fontWeight: 700,
                      padding: "3px 10px",
                      borderRadius: 999,
                      textTransform: "uppercase",
                    }}
                  >
                    Mais procurado
                  </span>
                )}

                <div>
                  <div
                    style={{
                      width: 58,
                      height: 58,
                      borderRadius: 14,
                      background: "#f1f5f9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 28,
                      marginBottom: 20,
                    }}
                  >
                    {item.icone}
                  </div>

                  <h3
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      color: "#0f172a",
                      marginBottom: 10,
                      lineHeight: 1.3,
                    }}
                  >
                    {item.titulo}
                  </h3>

                  <p style={{ fontSize: 15, color: "#64748b", lineHeight: 1.65, marginBottom: 24 }}>
                    {item.descricao}
                  </p>
                </div>

                {config.whatsapp && (
                  <a
                    href={wppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      padding: "12px 18px",
                      borderRadius: 10,
                      background: item.destaque ? "var(--primary)" : "#f8fafc",
                      color: item.destaque ? "white" : "#0f172a",
                      border: item.destaque ? "none" : "1px solid #e2e8f0",
                      fontSize: 14,
                      fontWeight: 600,
                      textDecoration: "none",
                      marginTop: "auto",
                    }}
                  >
                    <span>Pedir orçamento</span>
                    <span style={{ fontSize: 16 }}>→</span>
                  </a>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}