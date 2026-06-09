import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage({ params }) {
  const { slug } = await params;

  let nome = "Meu Negócio";
  let subtitulo = "";
  let corPrimaria = "#1a73e8";
  let corDark = "#1557b0";

  try {
    const { CONFIG } = await import(`../../lib/clients/${slug}.js`);
    nome = CONFIG.nome;
    subtitulo = CONFIG.slogan ?? CONFIG.hero?.subtitulo ?? "";
    corPrimaria = CONFIG.corPrimaria ?? corPrimaria;
    corDark = CONFIG.corPrimariaDark ?? corDark;
  } catch {}

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          background: `linear-gradient(135deg, ${corPrimaria} 0%, ${corDark} 100%)`,
          color: "white",
          padding: "80px 100px",
        }}
      >
        <div
          style={{
            fontSize: 68,
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: 28,
            maxWidth: 900,
          }}
        >
          {nome}
        </div>
        <div
          style={{
            fontSize: 30,
            opacity: 0.85,
            maxWidth: 860,
            lineHeight: 1.5,
          }}
        >
          {subtitulo}
        </div>
      </div>
    ),
    { ...size }
  );
}