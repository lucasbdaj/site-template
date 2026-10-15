import type { ClientConfig } from "../../lib/types";

export default function Contato({ config }: { config: ClientConfig }) {
  const ctaHref = config.whatsapp
    ? `https://wa.me/55${config.whatsapp}?text=${encodeURIComponent(config.mensagemWhatsapp ?? "")}`
    : config.telefone
      ? `tel:${config.telefone}`
      : "#contato";

  const temMapa = Boolean(config.googleMapsEmbed);
  const horario = config.horario ?? [];
  const horariosEstruturados = horario.length > 0 && typeof horario[0] === "object";

  return (
    <section
      id="contato"
      style={{
        background: "#090d16",
        padding: "96px 24px",
        color: "white",
      }}
    >
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        {/* Cabeçalho */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span
            style={{
              display: "inline-block",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "#cbd5e1",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "5px 16px",
              borderRadius: 999,
              marginBottom: 16,
            }}
          >
            Fale Conosco
          </span>
          <h2
            style={{
              fontSize: "clamp(26px, 3.6vw, 40px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              marginBottom: 10,
            }}
          >
            Entre em Contato
          </h2>
          <p style={{ fontSize: 16, color: "#94a3b8", maxWidth: 540, margin: "0 auto" }}>
            Tire suas dúvidas ou solicite um orçamento rápido pelo WhatsApp ou visitando nossa oficina.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: temMapa ? "1.1fr 1fr" : "1fr",
            gap: 32,
            alignItems: "stretch",
          }}
          className={temMapa ? "contato-grid" : ""}
        >
          {/* Card de Informações */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.04)",
              backdropFilter: "blur(12px)",
              borderRadius: 20,
              padding: "36px 32px",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {/* Endereço */}
              {config.endereco && (
                <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: "rgba(255, 255, 255, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 20,
                      flexShrink: 0,
                    }}
                  >
                    📍
                  </div>
                  <div>
                    <p style={{ fontSize: 13, textTransform: "uppercase", color: "#94a3b8", fontWeight: 700, marginBottom: 4 }}>
                      Endereço
                    </p>
                    <p style={{ fontSize: 15, color: "#f8fafc", lineHeight: 1.5 }}>
                      {config.endereco}
                    </p>
                  </div>
                </div>
              )}

              {/* WhatsApp / Telefone */}
              {config.whatsapp && (
                <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: "rgba(37, 211, 102, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 20,
                      flexShrink: 0,
                    }}
                  >
                    📲
                  </div>
                  <div>
                    <p style={{ fontSize: 13, textTransform: "uppercase", color: "#94a3b8", fontWeight: 700, marginBottom: 4 }}>
                      WhatsApp Oficial
                    </p>
                    <p style={{ fontSize: 16, color: "#f8fafc", fontWeight: 600 }}>
                      {config.whatsapp}
                    </p>
                  </div>
                </div>
              )}

              {/* Horário */}
              {horario.length > 0 && (
                <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: "rgba(255, 255, 255, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 20,
                      flexShrink: 0,
                    }}
                  >
                    🕒
                  </div>
                  <div style={{ width: "100%" }}>
                    <p style={{ fontSize: 13, textTransform: "uppercase", color: "#94a3b8", fontWeight: 700, marginBottom: 8 }}>
                      Horário de Funcionamento
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      {horariosEstruturados
                        ? horario.map((h, i) => {
                            const item = h as { dia: string; horario: string };
                            return (
                              <div
                                key={i}
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  fontSize: 14,
                                  color: "#cbd5e1",
                                  borderBottom: i < horario.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                                  paddingBottom: 4,
                                }}
                              >
                                <span>{item.dia}</span>
                                <span style={{ fontWeight: 600, color: item.horario === "Fechado" ? "#94a3b8" : "#22c55e" }}>
                                  {item.horario}
                                </span>
                              </div>
                            );
                          })
                        : horario.map((h, i) => (
                            <p key={i} style={{ fontSize: 14, color: "#cbd5e1", margin: 0 }}>
                              {h as string}
                            </p>
                          ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* CTA WhatsApp */}
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                background: "#25D366",
                color: "white",
                padding: "16px",
                borderRadius: 12,
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 700,
                marginTop: 32,
                boxShadow: "0 6px 20px rgba(37, 211, 102, 0.3)",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Iniciar conversa no WhatsApp
            </a>
          </div>

          {/* Mapa Incorporado */}
          {temMapa && (
            <div
              style={{
                borderRadius: 20,
                overflow: "hidden",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                minHeight: 380,
                background: "#1e293b",
              }}
            >
              <iframe
                src={config.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 380, display: "block" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Localização de ${config.nome}`}
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