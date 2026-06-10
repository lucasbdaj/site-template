"use client";
import { useState } from "react";

const NAV_LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre",    label: "Sobre"    },
  { href: "#contato",  label: "Contato"  },
];

const WPP_ICON = (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="white" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Navbar({ config }) {
  const [aberto, setAberto] = useState(false);

  const ctaHref = config.whatsapp
    ? `https://wa.me/55${config.whatsapp}?text=${encodeURIComponent(config.mensagemWhatsapp ?? "")}`
    : config.telefone
      ? `tel:${config.telefone}`
      : "#contato";
  const ctaTarget = "_self";
  const ctaLabel = config.whatsapp ? "WhatsApp" : config.telefone ? "Ligar" : "Contato";

  const ctaBase = {
    display: "flex",
    alignItems: "center",
    gap: 8,
    background: "#25D366",
    color: "white",
    borderRadius: 8,
    textDecoration: "none",
    fontWeight: 600,
    flexShrink: 0,
  };

  return (
    <header style={{
      position: "sticky",
      top: 0,
      zIndex: 100,
      background: "white",
      borderBottom: "1px solid #e5e7eb",
    }}>
      {/* Barra principal */}
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

        {/* Logo */}
        <a href="#" style={{ textDecoration: "none", flexShrink: 0 }}>
          {config.logo ? (
            <img
              src={config.logo}
              alt={config.nome}
              style={{ height: config.logoHeight || 56, objectFit: "contain" }}
            />
          ) : (
            <span style={{ fontSize: 20, fontWeight: 700, color: "var(--primary)" }}>
              {config.nome}
            </span>
          )}
        </a>

        {/* Desktop: links + CTA */}
        <nav className="hidden md:flex" style={{ alignItems: "center", gap: 8 }}>
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} style={{
              padding: "8px 16px",
              textDecoration: "none",
              fontSize: 15,
              fontWeight: 500,
              color: "#4b5563",
              borderRadius: 8,
            }}>
              {label}
            </a>
          ))}
          <a href={ctaHref} target={ctaTarget} rel="noopener noreferrer"
            style={{ ...ctaBase, padding: "10px 18px", fontSize: 14 }}>
            {config.whatsapp && WPP_ICON}
            {ctaLabel}
          </a>
        </nav>

        {/* Mobile: CTA compacto + hambúrguer */}
        <div className="flex md:hidden" style={{ alignItems: "center", gap: 10 }}>
          <a href={ctaHref} target={ctaTarget} rel="noopener noreferrer"
            style={{ ...ctaBase, padding: "8px 14px", fontSize: 13 }}>
            {config.whatsapp && WPP_ICON}
            {ctaLabel}
          </a>
          <button
            onClick={() => setAberto(v => !v)}
            aria-label={aberto ? "Fechar menu" : "Abrir menu"}
            aria-expanded={aberto}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 6,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 5,
            }}
          >
            <span style={{
              display: "block",
              width: 22,
              height: 2,
              background: "#1f2937",
              borderRadius: 2,
              transformOrigin: "center",
              transform: aberto ? "translateY(7px) rotate(45deg)" : "none",
              transition: "transform 0.2s",
            }} />
            <span style={{
              display: "block",
              width: 22,
              height: 2,
              background: "#1f2937",
              borderRadius: 2,
              opacity: aberto ? 0 : 1,
              transition: "opacity 0.2s",
            }} />
            <span style={{
              display: "block",
              width: 22,
              height: 2,
              background: "#1f2937",
              borderRadius: 2,
              transformOrigin: "center",
              transform: aberto ? "translateY(-7px) rotate(-45deg)" : "none",
              transition: "transform 0.2s",
            }} />
          </button>
        </div>
      </div>

      {/* Menu mobile expandido */}
      {aberto && (
        <nav
          className="md:hidden"
          style={{
            background: "white",
            borderTop: "1px solid #e5e7eb",
            padding: "4px 24px 16px",
          }}
        >
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setAberto(false)}
              style={{
                display: "block",
                padding: "13px 0",
                textDecoration: "none",
                fontSize: 16,
                fontWeight: 500,
                color: "#1f2937",
                borderBottom: "1px solid #f3f4f6",
              }}
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}