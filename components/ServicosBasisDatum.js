// Seção "O que oferecemos" específica da home da Basis Datum Services — não é o
// Servicos.js genérico usado pelos clientes do template (ver regra em CLAUDE.md).
// Tipografia/paleta seguem o mesmo sistema do HeroBasisDatum.js (mono + serif).

const ICONS = [
  // Perfil da Empresa no Google — pin
  <svg key="pin" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2C7.58 2 4 5.58 4 10c0 5.25 7 12 7.3 12.28a1 1 0 0 0 1.4 0C13 22 20 15.25 20 10c0-4.42-3.58-8-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" fill="currentColor" />
  </svg>,
  // Site Essencial — globe
  <svg key="globe" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
    <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" stroke="currentColor" strokeWidth="1.7" />
  </svg>,
  // Pacote Presença Digital — combinação
  <svg key="combo" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="3" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.7" />
    <rect x="13" y="13" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.7" />
    <path d="M11 7h4a2 2 0 0 1 2 2v4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>,
];

export default function ServicosBasisDatum({ config }) {
  const { titulo, itens } = config.servicos;

  return (
    <section id="servicos" style={{ background: "#f6f9fb", padding: "104px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <div style={{ maxWidth: 560, marginBottom: 56 }}>
          <p
            style={{
              fontFamily: "ui-monospace, 'Cascadia Code', 'SF Mono', Consolas, monospace",
              fontSize: 13,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--primary)",
              marginBottom: 14,
            }}
          >
            // serviços
          </p>
          <h2
            style={{
              fontFamily: "ui-serif, 'Iowan Old Style', 'Palatino Linotype', Georgia, serif",
              fontSize: "clamp(26px, 3.5vw, 38px)",
              fontWeight: 600,
              color: "var(--primary-dark)",
              letterSpacing: "-0.01em",
            }}
          >
            {titulo}
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {itens.map((item, i) => {
            const destaque = i === itens.length - 1;
            return (
              <div
                key={i}
                className="servicos-bd-card"
                style={{
                  position: "relative",
                  background: destaque ? "var(--primary-dark)" : "white",
                  borderRadius: 14,
                  padding: "32px 28px",
                  border: destaque ? "none" : "1px solid rgba(26,46,74,0.08)",
                }}
              >
                {destaque && (
                  <span
                    style={{
                      position: "absolute",
                      top: 20,
                      right: 20,
                      fontFamily: "ui-monospace, 'Cascadia Code', 'SF Mono', Consolas, monospace",
                      fontSize: 11,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      color: "var(--primary)",
                      background: "rgba(255,255,255,0.1)",
                      padding: "4px 9px",
                      borderRadius: 100,
                    }}
                  >
                    Mais completo
                  </span>
                )}

                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 22,
                    background: destaque ? "var(--primary)" : "rgba(0,170,221,0.1)",
                    color: destaque ? "white" : "var(--primary-dark)",
                  }}
                >
                  {ICONS[i] ?? <span style={{ fontSize: 20 }}>{item.icone}</span>}
                </div>

                <h3
                  style={{
                    fontFamily: "ui-serif, 'Iowan Old Style', 'Palatino Linotype', Georgia, serif",
                    fontSize: 19,
                    fontWeight: 600,
                    color: destaque ? "white" : "var(--primary-dark)",
                    marginBottom: 10,
                  }}
                >
                  {item.titulo}
                </h3>
                <p
                  style={{
                    fontSize: 14.5,
                    lineHeight: 1.7,
                    color: destaque ? "rgba(255,255,255,0.75)" : "#5b6b7c",
                  }}
                >
                  {item.descricao}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .servicos-bd-card {
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .servicos-bd-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 28px -16px rgba(26,46,74,0.25);
        }
        @media (prefers-reduced-motion: reduce) {
          .servicos-bd-card { transition: none; }
          .servicos-bd-card:hover { transform: none; }
        }
      `}</style>
    </section>
  );
}
