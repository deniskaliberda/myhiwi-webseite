import { ImageResponse } from "next/og";
export const runtime = "edge";
export const alt =
  "MyHiwi — Webseiten, Google und KI-Sichtbarkeit für lokale Betriebe";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "60px 72px",
          background: "#FFFFFF",
          color: "#0F172A",
          fontFamily: "sans-serif",
          borderBottom: "14px solid #2563EB",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
          }}
        >
          <span style={{ fontWeight: 700 }}>MyHiwi</span>
          <span style={{ color: "#475569", fontSize: 20 }}>
            Ahrensfelde · Berlin-Ost · Barnim
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 87,
            fontWeight: 700,
            letterSpacing: "-5px",
            lineHeight: 1.05,
          }}
        >
          <span>Gute Arbeit.</span>
          <span style={{ color: "#2563EB" }}>Endlich gefunden.</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 26,
          }}
        >
          <span>Webseiten. Google. KI-Sichtbarkeit.</span>
          <span>myhiwi.de ↗</span>
        </div>
      </div>
    ),
    size,
  );
}
