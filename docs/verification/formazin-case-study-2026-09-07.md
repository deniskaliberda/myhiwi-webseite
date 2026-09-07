# Formazin-Fallstudie: Aktualisierung am 7. September 2026

## Zuordnung und Quellen

Die öffentliche MyHiwi-Referenz heißt „Formazin & Partner“ und verweist auf www.formazin-partner.de. Das ist die belegte Zuordnung der im Auftrag genannten Sprachvarianten.

Direkt im Browser am 7. September geprüft:

- [Energieberatung](https://www.formazin-partner.de/leistungen/energieberatung): kompakter Einstieg mit verlinkter Infografik, fünf Energie-Leistungen, zwei hervorgehobene Anfrage-Einstiege, zusätzlich allgemeine Anfrage, echte Ansprechpartner und Projektfoto Strausberger Straße.
- [Leistungen](https://www.formazin-partner.de/leistungen): Architektur, Brandschutz, Tragwerksplanung, Generalplanung und Energieberatung. Architektur mit echtem Foto der Grundschule Lindenberg.
- [Über uns](https://www.formazin-partner.de/ueber-uns): vier verlinkte Original-Logos öffentlich sichtbar.
- [MyHiwi-Fallstudie vor der Aktualisierung](https://myhiwi.de/case-studies/formazin): noch Aufnahmen vom 5. September, Vergleich mit Auguststand und Lieferumfang des früheren Redesigns.

Der Suchmaschinenabruf lieferte noch eine längere, ältere Energieübersicht mit Fotos. Entscheidend war deshalb der direkte Browserabruf. Die oben genannten Änderungen sind auf der Kundendomain bereits live. Zurückgestellte Ratgeber und frühere Vorschauvarianten werden nicht als veröffentlichtes Ergebnis übernommen.

## Ersetzte Inhalte

- Alte Desktop-, Mobil- und Detailansichten sowie den Vorher-Nachher-Vergleich entfernt. Die fünf bisher ausgelieferten Formazin-Bilddateien werden nicht weiter veröffentlicht; die Git-Historie bleibt erhalten.
- Drei aktuelle Browseraufnahmen unter `public/case-studies/formazin/2026-09-07/`. Neue URLs vermeiden die Wiederverwendung alter Bild-Caches.
- Cover und Mobilmotiv stammen von der Energieübersicht. Das Detailmotiv zeigt die öffentliche Leistungsübersicht mit Architektur und Grundschule Lindenberg.
- Die Aufnahmen sind unveränderte Browseransichten, nur von PNG nach WebP konvertiert. Desktop 1440 × 1000, Mobil 390 × 844, WebP-Qualität 88. Keine neu generierten Bilder.
- Texte, Chronologie, Aufnahmedatum, Alt-Texte, Leistungsseiten-Teaser und verbliebene Footer-Bezeichnung auf den aktuellen Website-Stand gebracht.
- Die frühere Gesamtzahl „16 neu gestaltete Seiten“ und die Zuordnung „3 zielgruppenspezifische Wege“ durch direkt überprüfbare Angaben ersetzt: fünf Energie-Leistungen und zwei hervorgehobene Einstiege, allgemeine Anfrage zusätzlich.
- Frühere August-Suchwerte nicht fortgeschrieben. Sie werden damit nicht als falsch bewertet; für die aktuelle Überarbeitung fehlt ein belastbarer Wirkungsnachweis. Anfragen, Abschlüsse und Suchwirkung bleiben ausdrücklich offen, nicht null.
- Startseite, Referenzübersicht, Leistungsteaser, Detailseite, Open Graph, Twitter und Article-Schema nutzen den gemeinsamen aktualisierten Datensatz. Kein Eingriff in die Blogdateien oder Kundenwebsite.

## Prüfung

- Produktionsbuild mit 52 Routen einschließlich TypeScript-Prüfung erfolgreich.
- ESLint erfolgreich; zwei bestehende `no-img-element`-Warnungen in MyHiwiMark und ProofCard.
- Drei bestehende Playwright-Prüfungen erfolgreich: Formazin ohne JavaScript einschließlich Kontaktweg, Canonical, Datum, Article-Schema und OG-Bild; Startseite/Leistungsseiten/Sitemap/Bilder bei 360 px; Referenzübersicht mit Quellenangaben.
- Visuelle Kontrolle der Fallstudie bei Desktop 1440 und Mobil 390: alle drei Bilder geladen, keine horizontale Überbreite, keine Browser-Laufzeitfehler.
- 17 interne öffentliche Formazin-Linkziele einschließlich aller fünf Energie-Leistungen und drei Anfrageziele liefern HTTP 200. Kein Formular abgesendet.
- Keine Design-, Abhängigkeits-, Tracking- oder Blogänderungen.

## Veröffentlichungsgrenze

Diese Änderung ist für die Vorschau und Prüfung vorbereitet. Sie veröffentlicht die MyHiwi-Fallstudie nicht auf Produktion. Die in den Bildern gezeigte Formazin-Kundenwebsite ist bereits öffentlich.

## Geprüfte Vorschau

- Code-Commit: `e30ebad`.
- [Entwurfs-PR #7](https://github.com/deniskaliberda/myhiwi-webseite/pull/7), offen und mergebar.
- [Vercel-Vorschau](https://myhiwi-webseite-bzsbaguqn-denis24.vercel.app/case-studies/formazin), Target Preview, Ready, Deployment `dpl_8PKX9fdo3kyQV27thBG6s85gWNKC`.
- Bestehender Vercel-Login-Schutz aktiv. Authentifizierter CLI-Abruf: Fallstudie und Cover HTTP 200. Titel, Datum, Canonical, datierter Bildpfad, offene Ergebnisse und entfernter Altvergleich bestätigt. Geliefertes Cover bytegleich mit geprüftem lokalem Asset.
- Visuelle Desktop-/Mobilprüfung erfolgte lokal mit dem Produktionsbuild desselben Code-Commits. Die gehostete Vorschau wurde per authentifiziertem Abruf geprüft, nicht als eingeloggter Browsernutzer.
- MyHiwi-Produktion zeigt weiterhin die frühere Fallstudie. Kein Merge und keine Veröffentlichung durchgeführt.

## Freigabe zur Veröffentlichung

Denis hat die geprüfte Änderung am 7. September 2026 mit „go“ zur Veröffentlichung freigegeben. Die oben dokumentierte Vorschauprüfung bleibt gültig; die Produktionsprüfung folgt nach dem Merge.
