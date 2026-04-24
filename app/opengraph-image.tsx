import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "MyHiwi — Dein digitaler Hiwi für KMU";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          padding: "80px",
          background:
            "linear-gradient(135deg, #0a0f1a 0%, #0f172a 45%, #1e3a8a 100%)",
          position: "relative",
        }}
      >
        {/* Top glow */}
        <div
          style={{
            position: "absolute",
            top: "-200px",
            right: "-200px",
            width: "700px",
            height: "700px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(6, 182, 212, 0.35) 0%, transparent 60%)",
            filter: "blur(60px)",
          }}
        />

        {/* Bottom glow */}
        <div
          style={{
            position: "absolute",
            bottom: "-180px",
            left: "-180px",
            width: "520px",
            height: "520px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.45) 0%, transparent 60%)",
            filter: "blur(60px)",
          }}
        />

        {/* Top row — logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            position: "relative",
          }}
        >
          {/* H Monogramm */}
          <svg
            width="72"
            height="72"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="og-h" x1="0.4" y1="0" x2="0.1" y2="1">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="40%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#ffffff" />
              </linearGradient>
            </defs>
            <rect x="4" y="4" width="16" height="56" rx="2" fill="url(#og-h)" />
            <rect x="44" y="4" width="16" height="56" rx="2" fill="url(#og-h)" />
            <polygon
              points="20,32 31,22 44,22 44,36 20,44"
              fill="url(#og-h)"
            />
            <polygon
              points="20,32 31,22 31,32"
              fill="rgba(15, 23, 42, 0.35)"
            />
          </svg>
          <div
            style={{
              display: "flex",
              fontSize: 36,
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.02em",
            }}
          >
            <span style={{ fontWeight: 300, opacity: 0.7 }}>My</span>
            <span>Hiwi</span>
          </div>
        </div>

        {/* Middle — main headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "28px",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 84,
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-0.03em",
              lineHeight: 1.02,
            }}
          >
            Dein digitaler Hiwi.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 42,
              fontWeight: 400,
              color: "#94a3b8",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              maxWidth: "960px",
            }}
          >
            Erkennt Probleme, baut Lösungen — Website, SEO, Automation und KI
            für lokale KMU.
          </div>
        </div>

        {/* Bottom — meta row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
            fontSize: 22,
            color: "#64748b",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          <div style={{ display: "flex" }}>myhiwi.de</div>
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#10b981",
              }}
            />
            <div style={{ display: "flex" }}>Berlin · Bayern</div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
