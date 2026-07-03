---
name: MyHiwi-Fahrschule-Shell
display-name: myhiwi.de/fahrschule — Beweis-Schicht für den Fahrschul-Vertrieb (eigene Design-Shell)
version: 1.0.0
status: review
owner: Denis Kaliberda (Kaliberda Digital Intelligence UG)
last-updated: 2026-07-03
derived-from:
  - ../../DESIGN.md (Repo-Root, canonical — Tokens gelten, sofern hier nicht überschrieben)
  - denis-workspace/dokumente/MyHiwi_Fahrschule_Web_Konzept_2026-07-03.md (§8 Design-Direction, Denis-gelockt)
  - denis-workspace/dokumente/MyHiwi_Fahrschul_Offer_v4_2026-07-03.md (Kanon-Wording)
scope: NUR app/fahrschule/** (+ /fs/<rep>-Redirects). Kein Token dieser Shell darf auf andere Seiten leaken.

tokens:
  color:
    amber:
      "700": "#B45309"
      "800": "#92400E"
      soft: "rgba(180,83,9,0.10)"
      border: "rgba(180,83,9,0.35)"
  typography:
    lpBodyMobile: "19px"
    lpBodyDesktop: "20px"
    lpLineHeight: 1.6
    lpH1Mobile: "38px"
    lpH1Desktop: "56px"
    lpH2Mobile: "32px"
    lpH2Desktop: "40px"
  dimension:
    touchTargetMin: "56px"
---

# /fahrschule — Design-Shell (Status: review)

> **Zweck der Seite (Haupt-Job):** Beweis-Schicht für Tür/Telefon — der Fahrschul-Inhaber googelt
> nach dem Besuch „MyHiwi" und muss einen Fahrschul-Spezialisten finden. Nicht Traffic, nicht Funnel.
> **Avatar:** Inhaber Berlin/Brandenburg, 45–60, Telefon/WhatsApp-first, Lesebrillen-Realität,
> misstraut Marketing-Sprech. Vokabeln: „Anfragen", „auf der Karte", „gefunden werden" —
> nie „Leads/SEO/Conversion" (SEO nur im FAQ, wo er selbst danach fragt).

## 1. Verhältnis zum Root-Design-System

Die Shell **erbt** vom Repo-Root-`DESIGN.md`: Fonts (Bricolage Grotesque / Inter Tight /
JetBrains Mono — keine neuen Fonts), Ink-Skala, Spacing-Logik, SectionMark-Pattern, Radius,
Motion-Regeln, Anti-Slop-Verbote. Sie **überschreibt** gezielt drei Dinge (Konzept §8, Denis-gelockt):

1. **Akzentfarbe:** gedecktes **Signal-Amber `#B45309`** (Hover `#92400E`) — **exklusiv** für
   CTAs (Anruf/WhatsApp-Buttons) und den Garantie-Block. Betrieb/Handwerk statt Tech-Startup.
   Blau `#2563EB` wird auf dieser Seite NICHT als CTA-Farbe verwendet; Cyan `#06B6D4` nur
   funktional für Messwerte/Daten (Zettel-Mock, Mess-Grafik). **Finale Amber-Entscheidung: `#B45309`**
   (dunkles Ende des Konzept-Richtwerts — höherer Kontrast auf Weiß, weniger „Werbe-Orange";
   Weiß auf `#B45309` ≈ 4,6:1, mit Bold ≥18px AA-tauglich).
2. **Typo-Grade:** Grundschrift **19px mobil / 20px Desktop**, Zeilenhöhe 1,6. H1 38/56px,
   H2 32/40px. Sehr hoher Kontrast: Navy `#0F172A` auf Weiß — **kein Grau-auf-Grau** für
   tragenden Text (Muted `#475569` nur für Fußnoten/Quellen-Zeilen).
3. **Touch-Ziele ≥ 56px.** `tel:` und `wa.me` als große, volle Buttons — mobil full-width.

**Eigene Layout-Shell:** `/fahrschule` läuft OHNE die Site-Navigation (kein Header-Menü, kein
Footer-Sitemap-Block). Kopf = MyHiwi-Logo + Zeile „Lokale Wachstumssysteme · Berlin-Ost" +
Anruf-Knopf. Fuß = Absender (Kaliberda Digital Intelligence UG, haftungsbeschränkt) + Impressum/
Datenschutz-Links. Begründung: Beweis-Schicht, ein Job, keine Ausstiege in die Agentur-Site.

## 2. Sektionsreihenfolge (Phase 0 — verbindlich, aus Konzept §4)

| # | Sektion | Kern |
|---|---------|------|
| 1 | **Hero** | „Wenn in Ihrem Kiez jemand eine Fahrschule sucht — landet er bei Ihnen oder drüben?" · CTAs = Anruf + WhatsApp (KEIN Formular) · Microcopy „Sie reden direkt mit Denis" |
| 2 | **Problem-Spiegel** | 3 Inhaber-Sätze aus dem v4-Stack (weniger Anmeldungen · „drüben 200 Bewertungen" · Portale ab 2027) — spiegeln, nicht belehren; KEINE Marktprozente |
| 3 | **Das System in 3 Schritten** | 14-Tage-Start-Sprint → wir zählen jede Anfrage ab Tag 0 → monatlicher Anfragen-Zettel per WhatsApp. Der **Zettel als Bild** (gebauter Muster-Mock, klar als „Muster" beschriftet — das Artefakt verkauft) |
| 4 | **Anfragen-Garantie (Held-Block, Amber)** | NUR Kurzfassung bis Anwalts-Freigabe: „Wir zählen jede Anfrage ab Tag 0 — die genaue Zusage legen wir gemeinsam schriftlich fest." **Floor-12 NIE öffentlich.** |
| 5 | **Beweis-Schicht „So messen wir"** | Anonymisiertes Punkt-A-Dossier (Struktur-Mock) + Erklärung der Zählung + Einsichtsrecht. Solange keine Case Study: Transparenz statt erfundener Ergebnisse |
| 6 | **Preis-Block** | Kanon-Preisblock offen (s. §4 unten). KEINE Tier-Tabelle, keine Website-Range, kein 699-Upsell |
| 7 | **Wer dahinter steht** | Denis, echtes Foto (`public/ueber-mich/portrait.jpg`), Ahrensfelde/Berlin-Ost, „Lokale Wachstumssysteme" — nie „AI-/KI-Agentur" |
| 8 | **FAQ** | Computer · Was wenn's nicht klappt · Wem gehört die Website · Laufzeit · SEO/Werbung — ausgeschriebene Sätze, FAQ-Schema |
| 9 | **Schluss-CTA** | Anruf/WhatsApp, Amber, Pill erlaubt (Final-CTA-Ritual des Root-Systems) |

**Ausgelassen in Phase 0 (bewusst):** Sichtbarkeits-Check (Phase 1) · Kiez-Knappheit (erst nach
Anwalts-Klausel). Keine Platzhalter dafür einbauen.

## 3. Abweichungen vom Root-CTA-System (dokumentiert, Shell-scoped)

Root-`DESIGN.md` §7 verlangt für Branchen-LPs „Anfrageflow-Check anfragen" als Primär-CTA.
**Diese Shell weicht ab (Konzept-Entscheidung 2026-07-03, neuer als Root-Spec 2026-05-17):**
Primär-CTA = **Anruf-Button** (`tel:+4915114993066`, Text: „Jetzt anrufen: 01511 4993066"),
Sekundär gleichrangig = **WhatsApp-Button** (`wa.me/4915114993066` mit vorbefülltem Text).
Kein Formular, kein Kalender-Tool, kein „Check anfragen" — der Avatar telefoniert.
Beide Buttons Amber; WhatsApp als Outline-Variante (Amber-Border, Amber-Text) zur Hierarchie.
**Ausnahme dunkler Grund (Schluss-CTA):** dort trägt die WhatsApp-Outline Weiß
(`border-white/45`, weißer Text) — der Amber-Outline-Kontrast reicht auf Navy nicht
(§1 Punkt 2: sehr hoher Kontrast schlägt Akzent-Konsequenz).

## 4. Wortgleichheits-Kanon (UWG — identisch auf Blatt, Seite, Tür-Skript)

- **Produktname:** „Das Volle-Kurse-System"
- **Preis:** „349 € im Monat zzgl. MwSt. · 12 Monate · ab dem ersten Monat" +
  „Dazu einmalig Ihre neue Website — Preis nach Zustand Ihrer heutigen Seite, auf Wunsch in
  drei Raten. Einmal bezahlt, gehört sie Ihnen für immer."
- **Garantie (öffentlich, bis Anwalts-Freigabe):** „Wir zählen jede Anfrage ab Tag 0 —
  die genaue Zusage legen wir gemeinsam schriftlich fest."
- **Null-Computer:** „Sie müssen nichts am Computer machen — alles läuft über WhatsApp."

## 5. Bildwelt & Verbote

Die Welt des INHABERS, dokumentarisch: echtes Denis-Foto; später echter Berliner Betrieb/Flotte.
**Verboten:** L-Schild-Kitsch, Pylonen, Cartoon-Autos, AI-Stockfotos, Emoji in Buttons/Headers,
Tailwind-Indigo, Trust-Gradients, erfundene Metriken/Testimonials, Floor-Zahl „12" (Zielzahl),
„auf unsere Kosten", Marktprozente/LTV-Zahlen, Ads/LSA-Versprechen, KI-/Ranking-Vokabular
im Fließtext. Ton: SIE, kurze Sätze, Anmutung wie der Anfragen-Zettel — schwarz auf weiß, zählbar.

## 6. Tracking (Phase 0)

Server-seitig, EDPB-2/2023-konform: keine Cookies, keine Client-IDs, kein Fingerprinting.
Events: `pageview` (nur /fs/<rep>-Hits, im Redirect-Handler geloggt, mit `rep` + Charge `c`),
`call_click`, `whatsapp_click` (via `navigator.sendBeacon` an eigenen Endpoint, payload ohne
Identifier). UTM-Schema: `utm_source=leavebehind, utm_medium=print, utm_campaign=fahrschule-tuer,
utm_content=<charge>, utm_term=<rep-gebiet>`.
