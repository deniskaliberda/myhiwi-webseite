# MyHiwi Design System

**Stand: 2026-05-17 · Final · bereit für Claude Code**

Dieses Verzeichnis ist die abschließende, umsetzungsreife Spezifikation für die MyHiwi-Website. Es ersetzt frühere Notizen und Drafts und ist die einzige verbindliche Quelle für Coding-Agents (Claude Code / Codex).

## Einstieg

**Coding-Agents lesen zuerst:** [`HANDOVER.md`](./HANDOVER.md)

## Dateien

| Datei | Zweck |
|---|---|
| [`HANDOVER.md`](./HANDOVER.md) | Einstiegspunkt für Claude Code · Was tun, was nicht, in welcher Reihenfolge |
| [`SUMMARY.md`](./SUMMARY.md) | Was ist fix, was ist kritisch, was kommt zuerst |
| [`DESIGN.md`](./DESIGN.md) | Brand, Prinzipien, Farben, Typografie, Spacing, Motion, CTA-System, Do's & Don'ts |
| [`tokens.json`](./tokens.json) | Design-Tokens — direkt in Tailwind/CSS-Variablen übersetzbar |
| [`components.md`](./components.md) | Komponenten-Inventar mit Varianten, Tokens, Mobile-Verhalten, Verwendungsmatrix |
| [`page-archetypes.md`](./page-archetypes.md) | Sieben Seitentypen mit Section-Reihenfolge und Content-Regeln |
| [`implementation.md`](./implementation.md) | Handoff-Notiz · Stack, Reihenfolge, Konventionen |
| [`compliance.md`](./compliance.md) | Claim-, DSGVO-, Sprachregeln |

## Wichtig

- Dieses System ist **maßgeblich**. Keine alternativen Stilrichtungen erfinden.
- Keine neuen Komponenten anlegen, ohne sie hier zuerst zu spezifizieren.
- Keine harten Claims ohne Beleg — siehe `compliance.md`.
- Tokens sind die einzige Quelle für Farben, Spacing, Radius. Keine Magic Numbers im Code.

## Referenz: Design-Vorlage

Die HTML-Designvorlage liegt in `../MyHiwi Redesign.html` (Variant B als Hauptrichtung). Wenn Token-Werte oder Pattern-Details fehlen, ist die Vorlage die Bezugsquelle — die Code-Implementierung soll der Vorlage visuell entsprechen, aber die Tokens und Komponenten aus diesem Verzeichnis nutzen.
