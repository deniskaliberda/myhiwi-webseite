# Praxisfall 06 – Dienstleistung und Kundenanfragen

**Version:** 1.0
**Stand:** 22. Juli 2026

**Einsatz:** Austauschbarer 30-Minuten-Praxisblock für Dienstleistung und Kundenservice. Alle Angaben sind ausschließlich synthetisch.

## 1. Sichere synthetische Ausgangslage

Eine unklare synthetische Anfrage soll in hilfreiche Rückfragen übersetzt werden:

> Wir brauchen demnächst einen Workshop. Wahrscheinlich 12, vielleicht aber 18 Personen. Online wäre möglich, vielleicht auch gemischt. Können Sie uns kurzfristig etwas anbieten und eine Rechnung schicken?

Freigegebene Informationen des erfundenen Dienstleistungsbetriebs:

- Standardtermine sind entweder vollständig online oder vollständig vor Ort.
- Das Standardformat ist für höchstens 15 Personen vorgesehen.
- Termin, Leistungsumfang und Preis werden erst nach einer kurzen Bedarfsprüfung bestätigt.
- Rechnungen entstehen erst nach bestätigtem Auftrag.
- Sonderformate werden an die zuständige Angebotsrolle eskaliert.

## 2. Rolle und gewünschtes Ergebnis

**Teilnehmerrolle:** Kundenservice oder Anfragekoordination.

**Gewünschtes Ergebnis:** Ein klarer Antwortentwurf mit gezielten Rückfragen, transparenten Standardgrenzen und einem sichtbaren Eskalationsfall, ohne Termin oder Auftrag vorwegzunehmen.

## 3. Datenampel

### Grün

- die synthetische Anfrage und die fünf freigegebenen Leistungsinformationen,
- allgemeine Rückfragen zu Ziel, Teilnehmerzahl, Format und Zeitraum,
- Rollenbezeichnungen statt realer Kontaktdaten.

### Gelb

- reale Kalenderstände, individuelle Preislogik, interne Kapazitäten oder noch nicht veröffentlichte Angebotsdetails,
- konkrete Projekt- oder Vertragsinformationen.

Gelbe Inhalte werden vor Eingabe und Zusage intern geklärt; in der Übung bleiben sie offen.

### Rot

- reale Kunden- oder Beschäftigtendaten,
- Zugangsdaten, Geschäftsgeheimnisse, Zahlungsinformationen, sensible Personenangaben oder vertrauliche Rechtsfälle.

Rote Inhalte werden im Basistraining niemals eingegeben.

## 4. Absichtlich schwacher Startprompt

> Antworte freundlich, bestätige den Termin und schick alles Nötige für die Rechnung.

Der Prompt verlangt Zusagen und Datenerhebung, obwohl Teilnehmerzahl, Format, Termin, Preis und Auftrag ungeklärt sind.

## 5. Verbesserter Prompt mit sechs Bausteinen

**Aufgabe:** Übersetze die unklare Anfrage in einen hilfreichen Antwortentwurf und konkrete Rückfragen.

**Kontext:** Der Kundenservice bereitet die Bedarfsklärung vor; es entsteht weder Terminbestätigung noch Auftrag oder Rechnung.

**Material:** Nutze ausschließlich die synthetische Anfrage und fünf freigegebenen Informationen aus Abschnitt 1.

**Anforderungen:** Erfinde keine Verfügbarkeit, Preise, Fristen oder Zusagen. Nenne Standardgrenzen ruhig und markiere das mögliche Sonderformat.

**Ausgabeformat:** Kurze Antwort, anschließend höchstens fünf nummerierte Rückfragen und ein interner Eskalationshinweis.

**Prüfkriterien:** Kennzeichne offene Fakten, unnötige Datenerhebung, mögliche Fehlversprechen sowie die Rollen für Angebots- und Versandfreigabe.

**Vollständiger Prompt:**

> Erstelle eine kurze Antwort auf die synthetische Workshopanfrage. Nutze ausschließlich die freigegebenen Informationen. Bestätige keinen Termin, Auftrag, Preis oder Rechnungsversand. Erkläre die Standardgrenze von höchstens 15 Personen und die beiden Standardformate neutral. Formuliere höchstens fünf Rückfragen zu Ziel, finaler Teilnehmerzahl, bevorzugtem Format und Zeitraum. Ergänze einen internen Eskalationshinweis für ein gemischtes Format oder mehr als 15 Personen und nenne, was vor Versand menschlich geprüft werden muss.

## 6. Plausible, aber unvollkommene Modellausgabe

Vielen Dank, der Workshop ist für den nächsten freien Termin vorgemerkt. Ein hybrides Format mit 18 Personen ist problemlos möglich. Bitte senden Sie uns sofort vollständige Rechnungs- und Teilnehmendendaten; anschließend erhalten Sie die Rechnung und verbindliche Bestätigung.

Die Ausgabe erfindet Verfügbarkeit und Sonderformatfreigabe, nimmt einen Auftrag an und fordert unnötig früh reale Daten an.

## 7. Siebenstufige Prüfung

1. **Fakten:** Weder Termin noch hybrides Format, 18 Personen, Auftrag oder Rechnung sind bestätigt.
2. **Quellen:** Die freigegebenen Informationen belegen nur Standardformate, Höchstzahl und Bedarfsprüfung.
3. **Vollständigkeit:** Ziel, finale Teilnehmerzahl, Format und Zeitraum bleiben ungeklärt; die Sonderformat-Eskalation fehlt.
4. **Verzerrung:** Schnelle Zusage wird über die Prüfung von Passung und Machbarkeit gestellt.
5. **Rechte und Daten:** Die Aufforderung zu vollständigen Teilnehmerdaten ist für die frühe Klärung unnötig und widerspricht dem sicheren Übungsrahmen.
6. **Ton und Wirkung:** Freundlich, aber irreführend verbindlich; kann falsche Erwartungen und unnötige Datenübermittlung auslösen.
7. **Verantwortung:** Kundenservice klärt Bedarf; Angebots- und Kapazitätsrollen bestätigen Sonderformat, Termin, Preis und Auftrag.

**Entscheidung:** Verwerfen und durch einen klärenden, datensparsamen Entwurf ersetzen.

## 8. Verbesserte Ausgabe

Vielen Dank für Ihre Anfrage. Unser Standardformat findet vollständig online oder vollständig vor Ort mit höchstens 15 Personen statt. Ob ein kurzfristiger Termin oder ein abweichendes Format für Ihren Bedarf passt, klären wir vor einer Zusage.

Bitte helfen Sie uns mit vier Angaben:

1. Welches konkrete Ergebnis soll der Workshop für die Gruppe erreichen?
2. Wie hoch ist die endgültige Teilnehmerzahl?
3. Bevorzugen Sie vollständig online oder vollständig vor Ort?
4. Welcher Zeitraum kommt grundsätzlich infrage?

Bei mehr als 15 Personen oder einem gemischten Format prüfen wir ein individuelles Angebot. Eine Termin-, Preis- oder Auftragsbestätigung erfolgt erst nach der Bedarfsprüfung. Für diese erste Klärung werden keine Teilnehmer- oder Zahlungsdaten benötigt.

**Interner Hinweis:** Sonderformat, Kapazität, Preis und nächster verbindlicher Schritt durch die zuständigen Rollen bestätigen lassen.

## 9. Menschlicher Prüf- und Freigabeweg

1. Anfragekoordination prüft, ob die Rückfragen für die Bedarfsentscheidung erforderlich und datensparsam sind.
2. Kapazitätsverantwortliche prüfen einen Termin, ohne vorab zuzusagen.
3. Angebotsverantwortliche beurteilen Sonderformat und Preis.
4. Eine versandberechtigte Rolle gibt die Antwort frei; Rechnungsdaten werden erst im bestätigten Prozess erhoben.

## 10. Basis- und Fortgeschrittenenvariante

### Basis

Die unklare Anfrage ausschließlich in vier priorisierte Rückfragen übersetzen und jede vorzeitige Zusage vermeiden.

### Fortgeschritten

Zusätzlich aus freigegebenen Informationen eine kompakte FAQ-Struktur und klare Eskalationsfälle formulieren. Die Gruppe prüft, ob Antworten unzulässig Einzelfälle, Termine oder Konditionen versprechen.

## 11. Trainerwarnung

Der Fall genehmigt keine automatische Anfrageentscheidung, Terminbuchung, Preiszusage, Rechnung oder Erhebung realer Personen- und Zahlungsdaten. Ein Entwurf ist keine Zusage. Passung, Sonderformat, Vertrag und Versand werden von den zuständigen Menschen geprüft und freigegeben.
