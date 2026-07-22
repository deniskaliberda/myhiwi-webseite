import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "MyHiwi AI-Startklar – KI sinnvoll nutzen. Risiken erkennen. Sicherer entscheiden.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0F172A",
          color: "#FFFFFF",
          padding: "72px 80px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: 28, fontWeight: 800 }}>MyHiwi</span>
          <span
            style={{
              fontSize: 20,
              letterSpacing: "0.16em",
              color: "#A7F3D0",
            }}
          >
            AI-STARTKLAR
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            maxWidth: 980,
          }}
        >
          <span
            style={{
              fontSize: 70,
              lineHeight: 1.04,
              fontWeight: 800,
              letterSpacing: "-0.04em",
            }}
          >
            KI sinnvoll nutzen. Risiken erkennen. Sicherer entscheiden.
          </span>
          <span style={{ fontSize: 30, lineHeight: 1.3, color: "#CBD5E1" }}>
            Die praxisnahe KI-Grundlagenschulung für Unternehmen.
          </span>
        </div>
        <span style={{ fontSize: 24, color: "#E2E8F0" }}>
          3 Stunden live · bis 15 Personen
        </span>
      </div>
    ),
    size,
  );
}
