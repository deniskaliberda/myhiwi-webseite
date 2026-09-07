# Formazin: vollständige Projektgeschichte

## Anlass und Einordnung

Die am 7. September veröffentlichte Aktualisierung in PR #7 korrigierte Bilder und Leistungsstand. Denis ergänzte anschließend die zentrale Projektgeschichte: MyHiwi hat zuerst den kompletten Webauftritt aufgebaut und gelauncht. Danach wurde die Energieberatung als zusätzlicher, gezielter Ausbau auf dieser Grundlage ausgewählt und um ein konkretes Angebot mit Anfrageprozess erweitert.

Diese Revision setzt diese Folge in Titel, Einleitung, Umfang, Chronologie, Bildern und Website-Teaser um. Die wirtschaftliche Eignung der Energieberatung ist die Motivation für den Ausbau, kein behaupteter Nachweis von Nachfrage oder Umsatz. Die öffentliche Fassung beschreibt das Ziel, vorhandenes Fachwissen gezielt anfragbar zu machen.

## Öffentlich geprüfte Funktionen

- [Startseite](https://www.formazin-partner.de): Büroauftritt mit Projektfotos, Leistungen, Projektverweisen und allgemeinem Kontaktbereich.
- [Portfolio](https://www.formazin-partner.de/projekte): Filter Alle, Neubau, Sanierung, Öffentlich und Privat. Im direkten Browserwechsel reduziert Neubau die Liste auf fünf passende Projekte. Das ist ein Funktionstest, keine Erfolgskennzahl.
- [Grundschule Lindenberg](https://www.formazin-partner.de/projekte/grundschule-lindenberg): eigene Projektadresse, Beschreibung, Eckdaten und Bilder. Projektmetadaten und Breadcrumb-Schema im öffentlichen HTML bestätigt.
- [Architektur](https://www.formazin-partner.de/leistungen/architektur): eigener Titel und Canonical, strukturierte Service-/FAQ-/Breadcrumb-Angaben öffentlich vorhanden.
- [Sitemap](https://www.formazin-partner.de/sitemap.xml): HTTP 200. Keine Behauptung über erreichte Rankings.
- Mobile Navigation bei 390 px: Menü öffnet und zeigt die fünf Hauptziele.
- [Energieanfrage](https://www.formazin-partner.de/leistungen/energieberatung/anfrage): Auswahl Privat führt zur Auswahl des Anliegens. Weitere schrittweise Fragen nach Gebäude, Kontext und Kontaktdaten im Projektcode belegt. Keine personenbezogenen Angaben eingegeben, kein Formular versendet.
- Responsive Bildauslieferung durch Größenvarianten im öffentlichen HTML und Bildkomponenten bestätigt. Keine Lighthouse-, Ladezeit- oder pauschalen Performancebehauptungen.

## Bild- und Vergleichskonzept

Zwei neue echte Browseraufnahmen der öffentlichen Startseite: Desktop 1440 × 1000 und Mobil 390 × 844, PNG nach WebP mit Qualität 88 konvertiert. Ablage `public/case-studies/formazin/2026-09-07-gesamtprojekt/`. Keine KI-Erzeugung und keine Bildmontage.

Das Cover zeigt den gesamten Büroauftritt. Die bestehende Vergleichskomponente stellt „Grundlage: der komplette Webauftritt“ und „Ausbau: Energieberatung anfragbar machen“ nebeneinander. Beide zeigen ausdrücklich den aktuellen Stand vom 7. September, keine historische Launch-Fassung. Die Energie- und Leistungsaufnahmen aus der vorigen Revision werden weiterhin verwendet.

Dafür erhalten Vergleiche optionale Titel, Abschnitts- und Bildlabels. Andere Fallstudien behalten die bisherigen Vorher-/Heute-Texte. Keine Änderung an globalem Design, Navigation, Blog oder Kundenwebsite.

## Ergebnisgrenze

Vorhandene Website und Anfrageprozess sind belegte Umsetzungen. Tatsächlich eingegangene Anfragen, passende Aufträge, Umsatz und Suchwirkung bleiben offen. Es werden weder Nullwerte noch geschätzte Steigerungen eingetragen.

## Veröffentlichungsstand

Neue Revision als Vorschau vorbereitet. Produktion bleibt vorerst PR #7 / Main `9a33b3c`. Die frühere Freigabe bezog sich auf die bereits veröffentlichte Fassung.

## Validierung der Revision

Produktionsbuild mit 52 Routen, TypeScript und eingebundenem ESLint bestanden. Zwei bekannte `no-img-element`-Warnungen außerhalb der Änderung bleiben bestehen. Vier Playwright-Prüfungen bestanden: Formazin ohne JavaScript mit Kontaktweg/Metadaten/Bild, Startseite/Leistungen/Sitemap bei 360 px, Quellenangaben der Übersicht sowie die neue Entwicklungsdarstellung mit Regression der bisherigen Vergleichslabels bei Sonnenhof. Desktop 1440 und Mobil 390 visuell geprüft, alle fünf Bilder geladen und keine horizontale Überbreite oder Browser-Laufzeitfehler.
