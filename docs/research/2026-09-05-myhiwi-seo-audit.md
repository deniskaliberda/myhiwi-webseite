# MyHiwi: SEO- und KI-Sichtbarkeitscheck

Stand: 5. September 2026. Ziel laut Denis: lokale Betriebe als Kunden gewinnen; Angebotsschwerpunkt Webseiten sowie Google- und LLM-Sichtbarkeit. Untersucht: öffentliche Live-Website, alle 34 Sitemap-URLs, SE Ranking, verfügbarer Search-Console-Serviceaccount und frühere Projektnotizen. Keine Produktionsänderungen.

## Einschätzung

MyHiwi hat Kunden, sichtbare Referenzen, Inhalte und Backlinks. Die öffentliche technische Prüfung zeigt keinen pauschalen Indexierungsblocker. Die Daten sprechen für sehr geringe bislang erfasste relevante Suchsichtbarkeit. Warum tatsächlich wenige Google-Klicks oder Anfragen entstehen, lässt sich ohne zugängliche Search Console und Conversiondaten noch nicht zuverlässig aufteilen.

Die stärkste inhaltliche Hypothese: Das gewünschte Angebot wird nicht klar genug präsentiert. Die Website bündelt Buchung, Zahlung, Automatisierung und viele Branchen; Google- und KI-Sichtbarkeit als kaufbare Leistung für lokale Betriebe bleibt unscharf. Ein gezielter Relaunch mit klarer Positionierung, starken Angebotsseiten und eigener Messung ist sinnvoller als ein vollständiger technischer Neustart.

## Aktuelle Belege

| Prüfung | Ergebnis | Bedeutung |
|---|---|---|
| Öffentliche Suche | Startseite und weitere MyHiwi-Seiten erscheinen in der genutzten Websuche | Keine vollständige Unsichtbarkeit; kein vollständiger Google-Indexbericht |
| Sitemap | 34 URLs, alle im heutigen HTML-Abruf HTTP 200 | Seiten erreichbar; Google-Indexierung damit nicht nachgewiesen |
| Indexierungssteuerung | Auf diesen Seiten kein noindex im geprüften Meta-/HTTP-Header; selbstbezogene Canonicals | Kein offensichtlicher globaler Blocker |
| www | Stichprobe `/kontakt`: 301 auf denselben Pfad ohne www | Früherer Host-Konflikt in dieser Prüfung behoben |
| Nicht vorhandene URL | Stichprobe liefert HTTP 404 | Kein pauschales Ausliefern der Startseite für unbekannte Pfade |
| robots.txt | Öffentliche Seiten erlaubt; `/api/` gesperrt; OAI-SearchBot, PerplexityBot und Bingbot erlaubt | Grundlegende Bot-Freigabe vorhanden; kein Test sämtlicher WAF-/Bot-Zugriffe |
| Interne Links | Jede Sitemap-Seite hat einen eingehenden Link innerhalb des geprüften Satzes | Keine offensichtliche verwaiste Sitemap-Seite; Linkqualität/-prominenz noch separat bewerten |
| Backlinks | Anbieter meldet 195 Links, 7 Refdomains, ein Linkziel: Startseite | Keine Null-Backlink-Situation |
| Verweisende Websites | Liste enthält Formazin mit und ohne www | Bereinigt sind es 6 unterschiedliche Stammdomains, nicht 7 unabhängige Unternehmen |
| Organische Keywords | Deutsche SE-Ranking-Datenbank liefert einen Treffer: „niwi haarstyling“, Position 26, Regional-Seite; geschätzter Traffic 0 | Kein sinnvoller Neukunden-Suchbegriff; Datenbankabdeckung, keine vollständigen Google-Daten |
| Rank Tracking | MyHiwi-Projekt 12211679: 0 konfigurierte Keywords | Fehlendes Monitoring; nicht mit 0 tatsächlichen Rankings verwechseln |
| Vorhandener SEO-Audit | Letzter gespeicherter Audit 01.06.2026, Score 89 | Historischer Wert, kein aktueller Qualitätsnachweis |
| Search Console über SE Ranking | „Your site is not connected with Google Search Console“ | Dort keine Google-Leistungsdaten verfügbar |
| Search Console direkt | Verfügbarer Serviceaccount kann Properties lesen, aber keine myhiwi.de-Property sehen | Zugang mit passendem Google-Konto/Property erforderlich; nicht gleichbedeutend mit fehlender GSC-Verifizierung insgesamt |
| KI-Sichtbarkeit | SE Ranking DE/all engines: Link presence 0; Brand presence und Position nicht verfügbar | Kein Nachweis von KI-Zitaten in dieser Stichprobe; kein Beweis, dass MyHiwi nirgends erwähnt wird |

Belege: [Live-Crawl](2026-09-05-myhiwi-live-crawl.json), [gespeicherte SEO-Metriken](2026-09-05-myhiwi-seo-metrics.json), [Startseite](https://myhiwi.de/), [Sitemap](https://myhiwi.de/sitemap.xml), [robots.txt](https://myhiwi.de/robots.txt). Die H1-Felder im Rohcrawl enthalten wegen verschachtelter Spans nur Textfragmente; sie wurden nicht als Fehlernachweis benutzt. H1 auf Startseite und Formazin wurde separat vollständig überprüft.

## Was konkret an der Website schwach ist

1. **Angebot und gewünschte Suchabsicht passen nur teilweise zusammen.** Startseite und Titel betonen Direktanfragen und Buchungen. „KI“ erklärt überwiegend Prozesse im Hintergrund. Wer einen Partner für Google Maps, lokale SEO oder Auffindbarkeit in ChatGPT sucht, findet keinen gleichermaßen klaren Leistungseinstieg. [Startseite](https://myhiwi.de/)
2. **Interne Arbeitsanweisungen erscheinen als Verkaufstext.** Auf der Startseite steht sinngemäß, dass Zahlen nur gezeigt werden, wenn sie im Repo geführt sind. Kunden brauchen verständliche Ergebnisse und Messzeiträume. Interne Dokumentationssprache erschwert das Verständnis und wirkt unfertig. [Startseite](https://myhiwi.de/)
3. **Vorhandene Branchen- und Ortsseiten brauchen eigene Substanz.** Sie existieren bereits. Die nächste Arbeit ist mehr echte Projekterfahrung, konkrete Abläufe, Verantwortlichkeiten und nachvollziehbare Ergebnisse. Die unbelegte Aussage „über 90 %“ auf der Handwerksseite belegen oder entfernen. [Handwerk](https://myhiwi.de/loesungen/handwerk), [Region](https://myhiwi.de/region/berlin-ost-barnim)
4. **Ein Teil der Texte richtet sich eher an Fachleute.** Next.js, Schema.org und Keyword-Kannibalisierung sind Themen im Blog. Für den gewünschten Kundenstamm zuerst Entscheidungsfragen beantworten: Warum findet man meinen Betrieb nicht? Was wird verbessert? Wie messe ich Anfragen? Was kostet die Zusammenarbeit? Bestehende Artikel anhand echter Nachfrage prüfen, nicht pauschal löschen. [Blog](https://myhiwi.de/blog), [Wissen](https://myhiwi.de/wissen)
5. **Metadaten enthalten weiterhin wiederholte Markenbestandteile.** Mehrere Case-/Blogtitel enden etwa mit „MyHiwi Case Study | MyHiwi“. Leicht zu bereinigen, aber allein keine plausible Erklärung für die gesamte schwache Sichtbarkeit. [Sonnenhof-Case](https://myhiwi.de/case-studies/sonnenhof-herrsching)
6. **Belege sauber auslegen.** Die 199 Sonnenhof-Anfragen sind nicht automatisch 199 Google-SEO-Anfragen oder Buchungen. Quellen, Zeiträume und Kanäle getrennt lassen; Formazin-Pilotstatus und Ergebnisdarstellung abgleichen. [Sonnenhof](https://myhiwi.de/case-studies/sonnenhof-herrsching), [Formazin](https://myhiwi.de/case-studies/formazin)

## Empfehlung für den Relaunch

Drei mögliche Umfänge: reine Text-/Metadatenkorrektur wäre schnell, würde das Angebot aber nur teilweise klären. Ein kompletter Neubau hätte zusätzlichen Migrationsaufwand ohne bislang belegten technischen Bedarf. Empfohlen ist eine neue inhaltliche und visuelle Führung auf der vorhandenen technischen Basis, mit erhaltenen bewährten URLs.

**Arbeitsentwurf für die Positionierung:**

> Webseiten und Sichtbarkeit bei Google und in der KI-Suche für lokale Betriebe.
>
> MyHiwi aus Ahrensfelde hilft Ihnen, online gefunden zu werden und aus Besuchen passende Anfragen zu machen. Mit einer verständlichen Website, einem gepflegten Google-Unternehmensprofil und Inhalten, die Ihre Leistungen nachvollziehbar erklären.
>
> **Sichtbarkeit prüfen lassen**

Das ist eine Richtung für die neue Website, kein Versprechen auf feste Google-Plätze oder Empfehlungen durch KI-Systeme.

| Seite | Rolle im neuen Auftritt |
|---|---|
| `/` | Region, Zielkunden und Kernangebot sofort erklären; echte Kundenarbeiten früh zeigen; klarer Kontaktweg |
| Neue Leistungsseite „Webseiten für lokale Betriebe“ | Umfang, Ablauf, Pflege, typische Anforderungen, Projektbeispiel und Kostenmodell erklären |
| Neue Leistungsseite „Google-Sichtbarkeit / Local SEO“ | Website, Unternehmensprofil, lokale Suchanfragen, Bewertungen und Messung zusammen erklären |
| Neue Leistungsseite „KI-Sichtbarkeit“ | Auffindbarkeit in ChatGPT/Google-KI/Perplexity verständlich erklären; Leistungen, Grenzen und Testverfahren offenlegen |
| `/region/berlin-ost-barnim` | Bestehende URL vertiefen: Ahrensfelde und Umgebung, echte lokale Bezüge und Referenzen |
| `/case-studies` und Detailseiten | Kuratierte Projekte mit Ausgangslage, Arbeit, Ergebnis und Messmethode; weitere tatsächliche Kundenarbeiten ergänzen |
| `/loesungen/handwerk`, `/fahrschule` usw. | Passende Branchen behalten und mit Referenzen vertiefen; keine Serien austauschbarer Ortsseiten |
| `/wissen` | Bestehende Fragen bündeln, Überschneidungen prüfen, originale Beispiele und klare Antworten ergänzen |
| `/kontakt` | Einfacher Sichtbarkeitscheck: Firma/URL, Ort, Ziel und Rückkontakt; tatsächliche Bearbeitungszeit einheitlich angeben |

Unterkunftsleistungen können bestehen bleiben. Sie sollten die allgemeine lokale Positionierung nicht dominieren. KI-Schulungen und Automatisierung als ergänzende Leistungen einsortieren, damit Auffindbarkeit in KI-Suchen nicht mit interner KI-Nutzung verwechselt wird. Endgültige Keywordwahl und zusätzliche URL-Namen nach Suchnachfrage-/Wettbewerbsprüfung festlegen.

## Google und LLMs: gemeinsam aufbauen, getrennt messen

Google verlangt für AI Overviews/AI Mode keine besondere KI-Datei und kein spezielles Schema. Normale SEO, zugängliche Inhalte und Indexierung bleiben Voraussetzung; Ausspielung ist nicht garantiert. [Google-Dokumentation](https://developers.google.com/search/docs/appearance/ai-features)

Für ChatGPT Search ist OAI-SearchBot relevant; die Trainingsfreigabe für GPTBot ist davon getrennt. Die Suchbot-Freigabe ist auf MyHiwi bereits vorhanden. Zusätzlicher Wert muss nun aus klaren Leistungsinformationen, nachprüfbaren Projekten und konsistenten Unternehmensangaben entstehen. Daraus folgt keine garantierte Empfehlung. [OpenAI-Crawler](https://developers.openai.com/api/docs/bots)

**Messung:**

- Google: 90 Tage und zwei vergleichbare 28-Tage-Zeiträume; Impressionen, Klicks, CTR, Seiten und Suchanfragen; Marke getrennt von Neukundensuchen. GSC Web beinhaltet auch Googles KI-Suchfeatures und ist kein isolierter KI-Bericht.
- Lokale Sichtbarkeit: Unternehmensprofil-Zustand, Interaktionen und relevante lokale Suchbegriffe nach Ort prüfen. Ob ein MyHiwi-Profil vorhanden/verifiziert ist, wurde hier nicht festgestellt.
- LLMs: feste markenfreie Fragen, etwa „Wer hilft Handwerksbetrieben in Ahrensfelde bei Google-Sichtbarkeit?“ oder „Welche Agentur im Barnim erstellt Webseiten und betreut Local SEO?“. Mehrfach in frischen Sitzungen mit dokumentierter Websuche, Datum und Modell testen. Erwähnung, Quellenlink und ausdrückliche Empfehlung getrennt zählen. Kein Marktanteil aus einer kleinen Promptstichprobe ableiten.
- Geschäftsergebnis: erfolgreiche Kontaktanfragen und qualifizierte Gespräche mit Herkunft erfassen; Klick auf einen Button nicht als abgeschlossene Anfrage zählen.

**Backlinks:** Die 195 Links verteilen sich überwiegend auf wenige Kundenwebsites und deren wiederholte Footerhinweise. Das sind keine 195 unabhängigen Empfehlungen. Sinnvolle Projektberichte, regionale Verzeichniseinträge und echte Erwähnungen ausbauen. Keine pauschale Entfernung oder Abstrafung ableiten. Google nennt manipulative, breit gestreute Template-/Footerlinks als mögliches Linkspam-Muster. [Google-Linkspam-Richtlinie](https://developers.google.com/search/docs/essentials/spam-policies#link-spam)

## Reihenfolge und offene Grenzen

1. **Datenzugang herstellen:** zuständiges Search-Console-Konto ermitteln; MyHiwi-Property für den vorhandenen Reportingzugang freigeben bzw. mit SE Ranking verbinden. Indexierung der Startseite, Regional- und Angebotsseiten sowie manuelle Maßnahmen prüfen. Google-Unternehmensprofil ebenfalls prüfen.
2. **Neue Startseitenführung und drei Leistungsseiten ausarbeiten:** klare Google-/KI-Positionierung, regionale Glaubwürdigkeit, reale Referenzen und einfacher Sichtbarkeitscheck. Interne Texte und unbelegte Behauptungen bereinigen.
3. **Messung und Relaunch vorbereiten:** Kontaktabschluss verifizieren, mobile Darstellung/Ladezeit prüfen, vorhandene URLs erhalten oder einzeln dauerhaft zum passenden Ziel weiterleiten. Sitemap, Canonicals und interne Links abgleichen. [Google: URL-Umzüge](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes)
4. **Nach Veröffentlichung bewerten:** Indexierung und Kontaktweg zuerst; anschließend relevante Nicht-Marken-Suchen, lokale Sichtbarkeit, wiederholte KI-Testfragen und qualifizierte Anfragen beobachten. Keine pauschale Ranking- oder Zeitgarantie.

Nicht durchgeführt: Lighthouse/Core Web Vitals, vollständiger Browser-/Formular-End-to-End-Test, Search-Console-Leistungsanalyse, vollständiger Backlinkcrawl, belastbare Keywordvolumenanalyse oder direkte ChatGPT-/Perplexity-Promptreihe. Fehlende gängige Trackingmarker im HTML beweisen nicht, dass keinerlei Tracking existiert. Der aktuelle Website-Checkout enthält bereits uncommittete Arbeit; er wurde für diesen Audit nur lesend geprüft. Ein Relaunch wurde noch nicht implementiert.

Weitere Primärquellen und Einzelbefunde: [SEO-Inhaltsprüfung](2026-09-05-myhiwi-seo-content-sources.md).
