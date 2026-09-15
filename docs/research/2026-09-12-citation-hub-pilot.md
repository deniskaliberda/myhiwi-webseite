# Pilot: Digitalisierung und KI – Statistikseite

## Ergebnis und Abgrenzung

Eine dauerhaft adressierbare Wissensseite unter `/wissen/digitalisierung-ki-statistiken`: 25 überprüfte Kennzahlen aus fünf Veröffentlichungen von vier Institutionen; Bezugsgruppen, Datenzeitraum, Veröffentlichungsdatum und Originalquelle getrennt. Zwei Grafiken (HTML plus SVG/PNG), CSV-Download aus denselben Daten, Article/Breadcrumb-Metadaten, Wissensübersicht und Sitemap. MyHiwi ist Redaktion, nicht Urheber der Erhebungen. Kein Backlink-, Ranking- oder KI-Zitatversprechen.

## Themenwahl und Suchstichprobe

Am 12.09.2026 recherchiert: „KI Statistiken kleine Unternehmen Deutschland Digitalisierung Zahlen 2026“ und „Digitalisierung KMU Statistik Deutschland 2026“. Sichtbare Ergebnisse umfassten Destatis, KfW, Bitkom, ifo, Bundesnetzagentur und weitere Primärpublikationen. Das belegt Konkurrenz und vorhandene Quellen; keine Rangmessung und kein Suchvolumen. Keine kostenpflichtigen Keyword-Abfragen ausgeführt. Die genaue Nachfrage bleibt eine zu messende Pilothypothese.

Die Differenzierung ist die Erklärung der Unternehmensgrößen und unvereinbaren Erhebungen. Die Seite konkurriert nicht mit vorhandenen kaufnahen MyHiwi-Ratgebern. Breite „KI-Statistiken 2026“ ohne Einordnung wäre angesichts starker Originalquellen austauschbar. Keine regionale Untersuchung durchgeführt und keine Bundeszahl als Barnim-Statistik ausgegeben.

## Quellenprüfung

Datenquelle für Seite und CSV: `content/research/digitalisierung-ki.json`. Jeder Datensatz enthält eine Fundstelle. Alle fünf Original-URLs und das ergänzende KfW-Dossier waren über direkte HTTP-GETs abrufbar; Status und Inhaltsfingerprints in `2026-09-12-statistics-source-check.json`. HTTP-Erreichbarkeit allein bescheinigt keine inhaltliche Richtigkeit.

- **Destatis:** Tabellenzeile KI-Nutzung 2025 gelesen, vier Werte einschließlich Größenklassen. Unter 10 Beschäftigte nicht erfasst. Oberste Gruppe steht auf dieser Seite tatsächlich als „mehr als 250“; diese Beschriftung bleibt ausdrücklich erhalten. EU-Unternehmensbegriff ab 2025 vermerkt, keine ungeprüfte Zeitreihe.
- **KfW KI:** Sechs Werte direkt in der Pressemitteilung vom 11.02.2026 geprüft. Datenzeitraum 2022–2024, inklusive Untergruppe unter fünf Beschäftigten. Branchen und FuE-Gruppe nicht addiert.
- **ifo:** Sechs Werte aus den ersten beiden Absätzen vom 05.06.2026 geprüft, Befragung Mai 2026. Planung und Diskussion nicht als tatsächliche Nutzung gezählt. Keine Stichprobengröße aus der kurzen Mitteilung erfunden; Größenklassenwerte ohne dortige genaue Definition bewusst ausgelassen.
- **Bitkom:** Drei Strategiekategorien für 20–99 Beschäftigte direkt aus Absatz 1. Methodik nennt KW 2–6/2026, telefonisch 604 Unternehmen ab 20 Beschäftigten insgesamt. Gesamt-N nicht als Untergruppen-N ausgegeben.
- **KfW Digitalisierung:** Bericht lokal als PDF gelesen. Gedruckte S. 5/Grafik 1: Projektquoten 2021–2023 und 2022–2024. S. 17/Grafiken 13–14 auch visuell geprüft: Gesamt- und größenbezogene Ausgaben 2024. S. 27/Grafik 20: unter fünf Beschäftigte als Anteil der Unternehmen mit abgeschlossenen Projekten. Methodik S. 28: privater Mittelstand bis 500 Mio. EUR Umsatz, Ausnahmen, Beschäftigtenumrechnung. Keine Kennzahl mit neuer Rechnung abgeleitet.

**Verworfene Angaben:** Das KfW-Dossier nennt gerundete Ausgabenanteile, die sich aus den sichtbaren gerundeten Milliardenwerten nicht exakt reproduzieren lassen. Statt daraus künstliche Präzision abzuleiten, verwendet der Pilot die direkt im PDF genannten absoluten Milliardenwerte. Die Projektquote ist eine Dreijahresquote, keine jährliche Nutzungsquote.

## Pflege

Bei neuen Veröffentlichungen und mindestens quartalsweise Quellen erneut prüfen. Alten Wert nicht bloß umdatieren: Datenzeitraum, Bezugsgruppe und Definition vergleichen. Bei neuem Wert CSV, HTML und Grafiken zusammen aktualisieren; Diagramme mit `scripts/render-statistics-charts.py` regenerieren (Python + matplotlib). Matplotlib nutzt eine lokale TTF über `MH_STATS_FONT` oder System-Arial; Farben aus dem MyHiwi-Design. Exporte sind eigene Grafiken, keine Reproduktionen der Studienlayouts.

## Messplan

Ausgangslage: neue URL; vor Veröffentlichung besteht keine belastbare seitenbezogene Traffic-/Backlink-Baseline. Nicht mit vorhandenen Gesamtwebsitewerten vermischen. Bei Veröffentlichung Datum, Produktionscommit und Liveprüfung ergänzen.

- Nach Veröffentlichung: Indexierbarkeit, Canonical, Sitemap, interne Links und Abruf der Downloads prüfen. Google-Indexaufnahme ist ein späteres Ergebnis und nicht durch den HTTP-Status bewiesen.
- Erste Diagnose nach etwa vier Wochen: GSC-Indexierung und tatsächliche Queries für exakt diese URL; Eigenprüfungen vermerken. Bei fehlender Sichtbarkeit erst Auffindbarkeit/Indexierung klären.
- Nach drei und sechs Monaten ab Livegang: je vergleichbare 28-Tage-Fenster auswerten. GSC-Klicks und Impressionen, relevante Suchbegriffe, neue unabhängige verlinkende Domains mit Ziel-URL und Datum, Referral-Besuche und qualifizierte Anfragen. Kundensite-Footerlinks und wiederholte Links einer Domain nicht als unabhängige Empfehlungen zählen.
- KI-Nennungen nur als beobachtete Stichprobe mit Frage, System, Datum und tatsächlich angezeigter Quelle dokumentieren. Fehlende Messdaten heißen unbekannt, nicht null.
- Vorhandene einwilligungsabhängige Website-Analytics verwenden; keine zusätzlichen Trackingdienste für den Pilot. CSV-Downloads sind aktuell kein eigenes Analytics-Ereignis. Anfragen lassen sich nicht automatisch einer vorherigen Statistiklektüre zuschreiben.
- Ausbau erst bei relevanten Suchanfragen, echten redaktionellen Verweisen oder fachlich passenden Rückmeldungen. Ein regionaler Website-Benchmark wäre ein eigener Folgeauftrag mit dokumentierter Auswahl und Methodik.

Keine automatische Wiedervorlage oder wiederkehrende Aufgabe eingerichtet. Keine Nachrichten an Dritte, Käufe oder Outreach.

## Lokale Abnahme

Produktions-Build einschließlich TypeScript und Lint erfolgreich. Bestehende zwei `no-img-element`-Warnungen und veraltete Browserslist-Daten unverändert. DESIGN.md-Lint ohne Befunde. Browserprüfung bei 390, 768 und 1440 Pixeln: kein Seitenüberlauf, eine H1, Canonical und Article-Datum korrekt, 25 adressierbare Datensätze, alle Sprungziele vorhanden, keine JavaScript-Seitenfehler, interne Zielseiten HTTP 200. Tatsächlich angeklickten CSV-Download mit CSV-Parser gegen alle 25 Werte, Bezugsgruppen und Zeiträume geprüft. Beide SVG-Downloads HTTP 200 und gültiger SVG-Inhalt. Ohne JavaScript bleiben alle 25 Datensätze sichtbar. Wissensübersicht und Sitemap verweisen auf die neue URL. Screenshots und beide Exportgrafiken visuell geprüft.

Die erste Hilfsprüfung hatte für SVG-Requests eine relative URL ohne Basis verwendet; das Prüfskript wurde korrigiert und der vollständige Lauf anschließend bestanden. Kein Produktfehler. Beleg: `2026-09-12-statistics-local-check.json`.
