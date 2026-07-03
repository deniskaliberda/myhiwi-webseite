import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Das Volle-Kurse-System — mehr Anfragen für Ihre Fahrschule in Berlin";

/**
 * OG-Bild für /fahrschule — der Link wird vor allem per WhatsApp geteilt,
 * die Vorschau ist Teil der Beweis-Schicht. Navy + Amber der Shell.
 */
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#0F172A",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 26,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#CBD5E1",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              backgroundColor: "#B45309",
              borderRadius: 3,
            }}
          />
          MyHiwi · Für Fahrschulen in Berlin
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div style={{ fontSize: 74, fontWeight: 800, lineHeight: 1.05 }}>
            Das Volle-Kurse-System
          </div>
          <div style={{ fontSize: 34, color: "#E2E8F0", lineHeight: 1.3 }}>
            Wir zählen jede Anfrage ab Tag 0 — schwarz auf weiß per WhatsApp.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 26,
            color: "#CBD5E1",
          }}
        >
          <span>myhiwi.de/fahrschule</span>
          <span style={{ color: "#D97706", fontWeight: 700 }}>
            349 € im Monat zzgl. MwSt.
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
