// Seção "Contato" específica da home da Basis Datum Services — não é o Contato.js
// genérico usado pelos clientes do template (ver regra em CLAUDE.md).
// Tipografia/paleta seguem o mesmo sistema das demais seções da home.

import type { ReactNode } from "react";
import type { ClientConfig } from "../../lib/types";

export default function ContatoBasisDatum({ config }: { config: ClientConfig }) {
  const ctaHref = config.whatsapp
    ? `https://wa.me/55${config.whatsapp}?text=${encodeURIComponent(config.mensagemWhatsapp ?? "")}`
    : config.telefone
      ? `tel:${config.telefone}`
      : "#contato";

  const temMapa = !!config.googleMapsEmbed;

  const iconChip = (bg: string, children: ReactNode) => (
    <div
      style={{
        width: 44,
        height: 44,
        borderRadius: 10,
        background: bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      {children}
    </div>
  );

  return (
    <section
      id="contato"
      style={{
        background: "#0c1726",
        position: "relative",
        overflow: "hidden",
        padding: "100px 24px",
        color: "white",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
        
        {/* Cabeçalho */}
        <div style={{ maxWidth: 560, marginBottom: 50 }}>
          <span
            style={{
              fontFamily: "ui-monospace, monospace",
              fontSize: 12,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--primary)",
              background: "rgba(0,170,221,0.1)",
              padding: "4px 12px",
              borderRadius: 100,
              fontWeight: 700,
            }}
          >
            Fale conosco
          </span>
          <h2
            style={{
              fontSize: "clamp(28px, 3.5vw, 38px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              marginTop: 14,
              marginBottom: 10,
            }}
          >
            Vamos conversar sobre o seu negócio?
          </h2>
          <p style={{ fontSize: 15.5, color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>
            Tire suas dúvidas ou solicite um orçamento diretamente pelo WhatsApp ou e-mail.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: temMapa ? "1fr 1fr" : "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
            alignItems: "stretch",
          }}
        >
          {/* Card WhatsApp & Mensagem */}
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              borderRadius: 16,
              padding: "32px 28px",
              border: "1px solid rgba(255,255,255,0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ display: "flex", gap: 14, marginBottom: 24, alignItems: "flex-start" }}>
                {iconChip("#25D366", (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                ))}
                <div>
                  <p style={{ fontSize: 11, opacity: 0.65, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 3 }}>
                    WhatsApp Oficial
                  </p>
                  <a href={ctaHref} style={{ fontSize: 16, color: "white", textDecoration: "none", fontWeight: 700 }}>
                    (14) 98807-6360
                  </a>
                  <p style={{ fontSize: 12, color: "#4ade80", marginTop: 2 }}>● Resposta rápida durante o dia</p>
                </div>
              </div>

              <div style={{ display: "flex", gap: 14, marginBottom: 24, alignItems: "flex-start" }}>
                {iconChip("rgba(255,255,255,0.08)", (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                ))}
                <div>
                  <p style={{ fontSize: 11, opacity: 0.65, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 3 }}>
                    E-mail
                  </p>
                  <a href={`mailto:${config.email}`} style={{ fontSize: 14, color: "white", textDecoration: "none" }}>
                    {config.email}
                  </a>
                </div>
              </div>

              <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                {iconChip("rgba(255,255,255,0.08)", (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                ))}
                <div>
                  <p style={{ fontSize: 11, opacity: 0.65, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 3 }}>
                    Local de Atendimento
                  </p>
                  <p style={{ fontSize: 14, color: "white" }}>Bauru, SP · Atendimento remoto e presencial</p>
                </div>
              </div>
            </div>

            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                background: "#25D366",
                color: "white",
                padding: "14px 20px",
                borderRadius: 12,
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 700,
                marginTop: 28,
                boxShadow: "0 6px 20px rgba(37,211,102,0.3)",
              }}
            >
              Falar agora no WhatsApp
            </a>
          </div>

          {/* Card Horários e Informações */}
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              borderRadius: 16,
              padding: "32px 28px",
              border: "1px solid rgba(255,255,255,0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--primary)", marginBottom: 16 }}>
                Horário de Atendimento
              </p>

              <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <span style={{ fontSize: 14, color: "rgba(255,255,255,0.8)" }}>Segunda a Sexta</span>
                <span style={{ fontSize: 14, fontWeight: 700, color: "white" }}>09:00 às 18:00</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <span style={{ fontSize: 14, color: "rgba(255,255,255,0.8)" }}>Sábados</span>
                <span style={{ fontSize: 14, fontWeight: 700, color: "white" }}>Sob agendamento</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 0" }}>
                <span style={{ fontSize: 14, color: "rgba(255,255,255,0.8)" }}>Domingos</span>
                <span style={{ fontSize: 14, color: "rgba(255,255,255,0.4)" }}>Fechado</span>
              </div>
            </div>

            <div style={{ background: "rgba(0,170,221,0.08)", padding: "16px", borderRadius: 10, border: "1px solid rgba(0,170,221,0.2)", marginTop: 24 }}>
              <p style={{ fontSize: 13, color: "#e0f2fe", margin: 0, lineHeight: 1.5 }}>
                💡 <strong>Dica:</strong> Para orçamentos mais detalhados, use nossa ferramenta de briefing online que já organiza as necessidades da sua empresa.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}