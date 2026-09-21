---
name: MyHiwi-Fahrschule-Shell
display-name: myhiwi.de/fahrschule — Seite für Inhaber nach dem Anruf der Telefon-Agentur (eigene Design-Shell)
version: 2.0.0
status: review
owner: Denis Kaliberda (Kaliberda Digital Intelligence UG)
last-updated: 2026-09-21
supersedes: Version 1.0.0 vom 2026-07-03 (Volle-Kurse-System, Amber-Shell, Offer v4 mit Garantie-Kurzfassung)
derived-from:
  - ../../DESIGN.md (Repo-Root, canonical — Tokens gelten, sofern hier nicht überschrieben)
  - Design-Canvas „Fahrschul-Landingpage Richtungen", Richtung B (claude.ai/artifact/Q7jck1ZWSCB5mK8ZTnYktV), von Denis am 2026-09-21 freigegeben
  - denis-workspace/dokumente/fahrschule/ABSCHLUSSPLAN_2026-09-18.md (Pakete v6.1)
  - denis-workspace/dokumente/fahrschule/agentur/09_Produkt-Profil_Niederlag_ENTWURF.md (Fakten, Sprache)
  - denis-workspace/dokumente/fahrschule/agentur/03_Reform-Faktenblatt_Caller.md (Reform: geplant, nicht beschlossen)
scope: NUR app/fahrschule/** (+ /fs/<rep>-Redirects). Kein Token dieser Shell darf auf andere Seiten leaken.

tokens:
  color:
    paper: "#EDE7DA"      # = root calm.subtle
    sheet: "#FFFDF8"
    ink: "#1F2A2A"        # = root calm.ink
    text: "#3F4A45"
    muted: "#5A5E55"      # = root calm.muted
    pen: "#1E40AF"        # = root blue.600, Randnotizen und Links
    onDark: "#FFFDF8"
    onDarkSoft: "#D8D3C6"
  typography:
    display: "Bricolage Grotesque (Root-Token display)"
    mono: "JetBrains Mono (Root-Token mono)"
    note: "Caveat 600 — EINZIGE shell-eigene Schrift, nur für Randnotizen, via next/font im Shell-Layout"
    h1: "40px mobil / 64px Desktop"
    h2: "30px / 44px"
    body: "16–18px mobil / 18–21px Desktop"
  dimension:
    touchTargetMin: "44px, Haupt-Buttons 58px"
    breakpoint: "900px"
---

# /fahrschule — Design-Shell v2 (Status: review)

> **Besucher:** Fahrschul-Inhaber, der gerade von der Telefon-Agentur angerufen wurde und nachschaut,
> wer MyHiwi ist. Oft am Handy. Misstraut Marketing-Sprech, kennt viele solcher Anrufe.
> **Job der Seite:** Er nimmt das Gespräch wahr oder meldet sich selbst. Nicht Traffic, nicht Funnel.
> **Kriterien (Denis):** besonders · ehrlich · nahbar. Keine Standard-Agenturform.

## 0. Gate und Herkunft

- Richtung in einer Konzept-Phase gewählt: drei Formen als Canvas (A Fall Manni, B Papier, C Brief),
  Denis wählt B, danach Ausarbeitung für Handy und Desktop im Canvas, Freigabe „passt, bau das" am 21.09.2026.
- Pflicht-Schritt LP-Brain-Brief (`denis-workspace/scripts/lp-brain-brief.py`): nicht ausführbar, das Skript
  verlangt einen Kunden-Slug aus `clients.map.json`, MyHiwis eigene Seite hat keinen. Inhaltliche Grundlage
  sind stattdessen Produkt-Profil und Abschlussplan (oben verlinkt).
- Die abgelehnte Fassung vom 18.09. (Branch `fix/fahrschule-v6-wording`) wird nicht weiterverwendet.
  Lehre daraus: gleiche Fakten wie das Telefonskript, nie dessen Sätze als sichtbarer Seitentext.

## 1. Verhältnis zum Root-Design-System

Die Shell erbt Fonts (Bricolage Grotesque, JetBrains Mono), Motion-Regeln und Anti-Slop-Verbote.
Sie überschreibt gezielt:

1. **Palette:** das Calm-Schema des Root-Systems als Papier-Look. Grund `#EDE7DA`, Blätter `#FFFDF8` mit
   weichem Schatten, Tinte `#1F2A2A`. Kein Amber mehr, kein Blau als Fläche. Blau `#1E40AF` nur als „Stift"
   für Randnotizen und Links.
2. **Eine zusätzliche Schrift:** Caveat für handschriftliche Randnotizen. Sparsam: höchstens eine Notiz je
   Abschnitt, nie für tragende Information, nie in Buttons. Abweichung von der Root-Regel „keine neuen
   Fonts", shell-scoped und nur im Shell-Layout geladen.
3. **Eckige Flächen:** Blätter und Buttons ohne Radius (Papier, Formular), Handy-Rahmen mit Radius.
4. **Eigene Layout-Shell:** ohne Site-Navigation. Kopf = Logo + Anruf-Knopf. Fuß = Absender + Impressum,
   Datenschutz, myhiwi.de.

## 2. Seiten und Sektionsreihenfolge (verbindlich)

**`/fahrschule` (Landingpage):**

| # | Sektion | Kern |
|---|---------|------|
| 1 | Einstieg | „Ihre Fahrschule ist gut. Im Internet sieht man das noch nicht." · Anruf + WhatsApp · Aufmacher = echter Screenshot von Mannis Seite |
| 2 | Reform | „Keine Angst vor der Führerscheinreform." · Infografik beschlossen/geplant (Zeitleiste) · „Was wir Ihnen dabei abnehmen" · Link auf den Reform-Artikel bei Manni |
| 3 | Pain Points | vier Sätze in Inhaber-Sprache, je ein Erklärsatz |
| 4 | Beispiel Manni | Vorher/Heute, was gemacht wurde, 21 Anfragen, Sichtbarkeit, Klicks über Ratgeber, Weiterbildungs-Seite |
| 5 | Handy + Anfrage-Assistent | echte Handy-Screenshots, Chatbot in drei Stichpunkten |
| 6 | Partner | laufende Leistungen + „Was wir nicht versprechen" |
| 7 | Zwei Pakete | Basis 349, Großes Paket 599, jede Leistung in einem Satz, Website-Start-Tabelle |
| 8 | Schluss | Ansprechpartner + 30 Minuten online + Anruf/WhatsApp |

**`/fahrschule/termin` (Vorbereitung für Leute mit Termin):** noindex, nicht in der Sitemap, nirgends
verlinkt, Link nur in der Mail nach der Terminbuchung. Kein „Gespräch vereinbaren". Reihenfolge: Einstieg
mit Eckdaten · „Was ich vor dem Gespräch mache" + fünf Fragen · Ablauf der 30 Minuten (Zeitleiste) ·
Beispiel Manni · Reform-Infografik · Preise kurz · „Was ich nicht verspreche" · Ansprechpartner ·
Termin verschieben (Anruf, Mail).

## 3. CTA-System (unverändert aus v1, shell-scoped)

Primär = Anruf (`tel:+4915114993066`), gleichrangig = WhatsApp (`wa.me/4915114993066`, vorbefüllter Text).
Kein Formular, kein Kalender-Tool. Buttons jetzt Tinte auf Papier, auf dunklem Grund Papier auf Tinte.
Tracking der Klicks wie in §6.

## 4. Fakten-Kanon (nur das darf auf der Seite stehen)

- **Pakete v6.1:** Basis 349 € netto im Monat, 6 Monate, danach monatlich. Anfrage-Assistent optional + 50 €.
  Großes Paket 599 € netto, 12 Monate, Website-Start bis 1.490 € enthalten, anteilige Nachberechnung bei
  Ausstieg vor Monat 12. Website-Start einzeln: 490 / 1.490 / ab 2.990.
- **Denis-Entscheid 21.09.2026 (in Offer v6, Register, Abschlussplan und Produkt-Profil nachgezogen):**
  Im großen Paket ist die Flyer-Begleitung immer enthalten, ohne Aufpreis je Motiv (die 190 € je weiterem
  Motiv entfallen dort), den Druck zahlt der Kunde. Dazu „Unterstützung bei Veranstaltungen und besonderen
  Anlässen".
- **Manni (mit Zustimmung):** 21 Anfragen im ersten Monat · Einblendungen rund 4.900 auf rund 18.100 ·
  Search Console 28.07. bis 19.09.2026: 531 Klicks über Ratgeber-Artikel, 297 über den Reform-Artikel,
  1.357 Klicks gesamt · seit 2006 · 4,8 Sterne bei über 300 Bewertungen.
- **Reform:** alles Deutsche ist geplant, nicht beschlossen. Beschlossen ist nur die EU-Richtlinie
  (26.11.2029). Konstante `REFORM_STAND` in `sections.tsx`. **Pflicht-Update nach der Bundesratssitzung
  am 25.09.2026.**
- Höchstens drei neue Fahrschulen pro Monat. Die Website gehört nach Bezahlung dem Kunden.

## 5. Bildwelt und Verbote

Nur echte Aufnahmen: Screenshots von mannis-fahrschule.com (Desktop und Handy), dazu das Porträt von
Denis (`public/ueber-mich/portrait.jpg`, von Denis am 21.09.2026 bestätigt). Mannis Fahrschule hat der Nennung,
den Zahlen und den Screenshots zugestimmt (Denis, 21.09.2026). **Verboten:** generierte Fotos, Stockfotos, L-Schild-Kitsch, Emoji,
Tailwind-Indigo, Trust-Gradients, erfundene Zahlen oder Stimmen, das Wort Garantie, Zusagen zu Plätzen bei
Google, Anfragen oder Anmeldungen, Fachwörter (SEO, Ranking, Leads, Conversion), Sätze aus dem
Telefonskript. Ton: SIE, kurze Sätze, keine Gedankenstriche.

## 6. Tracking (unverändert)

Server-seitig, ohne Cookies, ohne Client-IDs. Events `call_click`, `whatsapp_click` per
`navigator.sendBeacon` an den eigenen Endpoint, payload ohne Identifier, UTM-Kontext nur zum Klickzeitpunkt.
