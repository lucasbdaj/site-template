import { BASE_PATH } from "../../lib/basePath";

export default function CTAOrcamento() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #0e1e33 0%, var(--primary-dark) 100%)",
        padding: "80px 24px",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto", position: "relative", zIndex: 1, textAlign: "center" }}>
        
        <span
          style={{
            fontFamily: "ui-monospace, monospace",
            fontSize: 12,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--primary)",
            background: "rgba(0,170,221,0.15)",
            padding: "5px 14px",
            borderRadius: 100,
            fontWeight: 700,
          }}
        >
          Sem enrolação e sem burocracia
        </span>

        <h2
          style={{
            fontSize: "clamp(26px, 3.5vw, 38px)",
            fontWeight: 800,
            marginTop: 18,
            marginBottom: 14,
            letterSpacing: "-0.02em",
            lineHeight: 1.25,
          }}
        >
          Pronto para destacar sua empresa no Google em Bauru?
        </h2>

        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.8)", maxWidth: 580, margin: "0 auto 40px", lineHeight: 1.6 }}>
          Preencha um formulário rápido de 2 minutos sobre o seu segmento e receba uma proposta personalizada no WhatsApp.
        </p>

        {/* 3 Passos Rápidos */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 20,
            maxWidth: 780,
            margin: "0 auto 40px",
            textAlign: "left",
          }}
        >
          <div style={{ background: "rgba(255,255,255,0.05)", padding: "18px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.1)" }}>
            <div style={{ color: "var(--primary)", fontWeight: 800, fontSize: 14, marginBottom: 4 }}>Passo 1</div>
            <div style={{ fontWeight: 600, fontSize: 14 }}>Briefing Online</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", marginTop: 2 }}>Você informa seus serviços e necessidades</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.05)", padding: "18px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.1)" }}>
            <div style={{ color: "var(--primary)", fontWeight: 800, fontSize: 14, marginBottom: 4 }}>Passo 2</div>
            <div style={{ fontWeight: 600, fontSize: 14 }}>Proposta Sob Medida</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", marginTop: 2 }}>Enviamos o escopo e prazos direto no Zap</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.05)", padding: "18px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.1)" }}>
            <div style={{ color: "var(--primary)", fontWeight: 800, fontSize: 14, marginBottom: 4 }}>Passo 3</div>
            <div style={{ fontWeight: 600, fontSize: 14 }}>No Ar & Otimizado</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", marginTop: 2 }}>Site e Google Maps operando para atrair clientes</div>
          </div>
        </div>

        <a
          href={`${BASE_PATH}/orcamento`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            background: "linear-gradient(135deg, var(--primary) 0%, #0284c7 100%)",
            color: "white",
            padding: "16px 36px",
            borderRadius: 12,
            textDecoration: "none",
            fontSize: 16,
            fontWeight: 700,
            boxShadow: "0 10px 30px -5px rgba(0,170,221,0.5)",
          }}
        >
          Iniciar orçamento online agora
          <span>→</span>
        </a>

      </div>
    </section>
  );
}