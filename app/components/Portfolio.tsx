import { BASE_PATH } from "../../lib/basePath";

export default function Portfolio() {
  return (
    <section id="portfolio" style={{ background: "#f8fafc", padding: "100px 24px" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        
        {/* Cabeçalho */}
        <div style={{ maxWidth: 560, marginBottom: 50 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "4px 12px",
              borderRadius: 100,
              background: "rgba(0,170,221,0.08)",
              marginBottom: 14,
            }}
          >
            <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 12, fontWeight: 700, textTransform: "uppercase", color: "var(--primary)" }}>
              // portfólio & cases
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(28px, 3.5vw, 38px)",
              fontWeight: 800,
              color: "var(--primary-dark)",
              letterSpacing: "-0.02em",
              marginBottom: 10,
            }}
          >
            Projetos entregues em Bauru
          </h2>
          <p style={{ fontSize: 15.5, color: "#64748b", lineHeight: 1.6 }}>
            Exemplos de sites rápidos, responsivos e projetados para gerar contatos locais.
          </p>
        </div>

        {/* Grade de Cases */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
          
          {/* Card Funilaria do Beco */}
          <div
            className="portfolio-card"
            style={{
              background: "#ffffff",
              borderRadius: 16,
              border: "1px solid #e2e8f0",
              overflow: "hidden",
              boxShadow: "0 8px 24px -10px rgba(15, 28, 46, 0.08)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {/* Topo simulando aba do navegador */}
            <div style={{ background: "#0f172a", padding: "12px 18px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", gap: 6 }}>
                <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#ef4444" }} />
                <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#f59e0b" }} />
                <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#10b981" }} />
              </div>
              <span style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", fontFamily: "monospace" }}>
                basisdatum.com.br/services/funilaria-do-beco
              </span>
              <span style={{ fontSize: 10, color: "#38bdf8", fontWeight: 700 }}>ONLINE</span>
            </div>

            {/* Conteúdo do Card */}
            <div style={{ padding: "28px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <span style={{ fontSize: 24 }}>🚗</span>
                <div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: "var(--primary-dark)", margin: 0 }}>
                    Funilaria do Beco
                  </h3>
                  <span style={{ fontSize: 12.5, color: "#64748b" }}>Parque Santa Edwiges · Bauru, SP</span>
                </div>
              </div>

              <p style={{ fontSize: 14.5, color: "#475569", lineHeight: 1.6, marginBottom: 20 }}>
                Landing page sob medida para funilaria e pintura automotiva, com galeria de trabalhos realizados, mapa de localização e botão de orçamento no WhatsApp.
              </p>

              {/* Tags de tecnologias e recursos */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
                <span style={{ fontSize: 11.5, background: "#f1f5f9", color: "#334155", padding: "4px 10px", borderRadius: 6, fontWeight: 600 }}>⚡ Carregamento Ultrarrápido</span>
                <span style={{ fontSize: 11.5, background: "#f1f5f9", color: "#334155", padding: "4px 10px", borderRadius: 6, fontWeight: 600 }}>📱 100% Mobile</span>
                <span style={{ fontSize: 11.5, background: "#f1f5f9", color: "#334155", padding: "4px 10px", borderRadius: 6, fontWeight: 600 }}>💬 WhatsApp Direto</span>
              </div>

              <a
                href={`${BASE_PATH}/funilaria-do-beco`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  width: "100%",
                  padding: "12px 18px",
                  borderRadius: 10,
                  background: "var(--primary-dark)",
                  color: "white",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: 14,
                  transition: "background 0.2s ease",
                }}
              >
                Abrir demonstração do site
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>
          </div>

          {/* Card Teaser: Seu Próximo Projeto */}
          <div
            style={{
              background: "linear-gradient(145deg, #ffffff 0%, #f1f5f9 100%)",
              borderRadius: 16,
              border: "2px dashed #cbd5e1",
              padding: "36px 30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                background: "rgba(0,170,221,0.1)",
                color: "var(--primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 26,
                marginBottom: 16,
              }}
            >
              🚀
            </div>
            <h3 style={{ fontSize: 20, fontWeight: 700, color: "var(--primary-dark)", marginBottom: 8 }}>
              O próximo site pode ser o seu
            </h3>
            <p style={{ fontSize: 14, color: "#64748b", maxWidth: 320, lineHeight: 1.6, marginBottom: 20 }}>
              Coloque seu negócio em destaque no Google e comece a receber pedidos com uma página moderna e profissional.
            </p>
            <a
              href={`${BASE_PATH}/orcamento`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 20px",
                borderRadius: 8,
                background: "var(--primary)",
                color: "white",
                textDecoration: "none",
                fontSize: 13.5,
                fontWeight: 700,
              }}
            >
              Criar meu site agora →
            </a>
          </div>

        </div>
      </div>

      <style>{`
        .portfolio-card {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .portfolio-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px -10px rgba(15, 28, 46, 0.15);
        }
      `}</style>
    </section>
  );
}