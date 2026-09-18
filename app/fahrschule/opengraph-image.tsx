import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Das Volle-Kurse-System: mehr Anfragen für Ihre Fahrschule";

/**
 * Preissatz wortgleich aus MyHiwi_Fahrschul_Offer_v6_2026-09.md §13 (T1_PREIS, v6.1 vom 2026-09-18).
 * tests/fahrschule-wording.spec.ts prüft diese Datei auf genau diesen Satz,
 * weil der Bildtext nicht per OCR geprüft wird.
 */
const PRICE_SENTENCE =
  "Reform-Start kostet 349 Euro im Monat zuzüglich Mehrwertsteuer.";

/** Einsatzgebiet laut Plan Kaltakquise D4, als Kurzform für die Fußzeile. */
const REGION_SHORT = "Berlin · Brandenburg · München · Oberbayern";

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
          MyHiwi · Für Fahrschul-Inhaber
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
            Jeden Monat schwarz auf weiß, wo Ihre Fahrschule steht.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <div style={{ fontSize: 28, fontWeight: 700, color: "#D97706" }}>
            {PRICE_SENTENCE}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 24,
              color: "#CBD5E1",
            }}
          >
            <span>myhiwi.de/fahrschule</span>
            <span>{REGION_SHORT}</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
