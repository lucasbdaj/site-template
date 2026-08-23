"use client";
import { useState } from "react";

interface ImagemLightboxProps {
  src: string;
  alt: string;
}

export default function ImagemLightbox({ src, alt }: ImagemLightboxProps) {
  const [aberto, setAberto] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        onClick={() => setAberto(true)}
        style={{
          width: "100%",
          borderRadius: 16,
          objectFit: "cover",
          aspectRatio: "4/3",
          position: "relative",
          boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
          cursor: "zoom-in",
        }}
      />

      {aberto && (
        <div
          onClick={() => setAberto(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.92)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
            cursor: "zoom-out",
          }}
        >
          <img
            src={src}
            alt={alt}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              borderRadius: 12,
              objectFit: "contain",
              boxShadow: "0 16px 64px rgba(0,0,0,0.5)",
            }}
          />
          <button
            onClick={() => setAberto(false)}
            aria-label="Fechar"
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              background: "rgba(255,255,255,0.15)",
              border: "none",
              borderRadius: "50%",
              width: 40,
              height: 40,
              color: "white",
              fontSize: 20,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}
