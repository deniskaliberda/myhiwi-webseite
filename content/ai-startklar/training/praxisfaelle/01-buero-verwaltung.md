# Praxisfall 01 – Büro und Verwaltung

**Version:** 1.0
**Stand:** 22. Juli 2026

**Einsatz:** Austauschbarer 30-Minuten-Praxisblock für Büro- und Verwaltungsteams. Alle Angaben sind ausschließlich synthetisch.

## 1. Sichere synthetische Ausgangslage

Ein erfundener Beispielbetrieb möchte aus unsortierten Notizen eine prüfbare Aufgabenliste für die nächste interne Organisationsrunde erstellen. Die Notizen enthalten keine Namen, Kontaktdaten oder echten Vorgänge:

- Besprechungsraum für die Monatsrunde noch nicht bestätigt.
- Entwurf der neutralen Agenda soll vor der Runde verteilt werden.
- Liste der Büromaterialien auf fehlende Mengen prüfen.
- Ablaufbeschreibung für eingehende allgemeine Post überarbeiten.
- Rückfrage zur Lieferzeit von Standardordnern ist offen.
- Für zwei Punkte fehlen Zuständigkeit und konkretes Datum.

Die Übung dient nur dem Strukturieren. Keine Aufgabe gilt allein durch die KI-Ausgabe als beauftragt.

## 2. Rolle und gewünschtes Ergebnis

**Teilnehmerrolle:** Sachbearbeitung oder Bürokoordination.

**Gewünschtes Ergebnis:** Eine Aufgabenliste mit Aufgabe, Status, vorgeschlagener Reihenfolge, offener Zuständigkeit und offenem Termin sowie eine kurze neutrale Besprechungsagenda.

## 3. Datenampel

### Grün

- die vollständig erfundenen Notizen dieser Fallmappe,
- allgemeine Begriffe wie Besprechungsraum, Büromaterial und Ablaufbeschreibung,
- die gewünschte Tabellenstruktur.

### Gelb

- echte interne Ablaufbeschreibungen, konkrete Lieferkonditionen oder reale Projekttermine,
- pseudonymisierte Vorgänge, wenn eine Rückführung im Betrieb möglich bleibt.

Gelbe Inhalte werden in der Übung nicht eingegeben, sondern durch die obigen synthetischen Angaben ersetzt und vor einer späteren Nutzung intern geklärt.

### Rot

- reale Beschäftigten- oder Kundendaten,
- Zugangsdaten, interne Schlüssel, Geheimnisse oder nicht veröffentlichte Finanzangaben.

Rote Inhalte werden im Basistraining niemals eingegeben.

## 4. Absichtlich schwacher Startprompt

> Mach aus den Notizen eine fertige To-do-Liste und verteile alles sinnvoll.

Der Auftrag nennt weder Materialgrenze noch Format, Prüfkriterien oder den Umgang mit fehlenden Angaben. Er lädt dazu ein, Zuständigkeiten und Termine zu erfinden.

## 5. Verbesserter Prompt mit sechs Bausteinen

**Aufgabe:** Strukturiere die bereitgestellten synthetischen Notizen als Aufgabenliste und ergänze eine kurze Besprechungsagenda.

**Kontext:** Die Unterlagen dienen einer internen Organisationsrunde eines erfundenen Beispielbetriebs.

**Material:** Nutze ausschließlich die sechs synthetischen Notizen aus Abschnitt 1.

**Anforderungen:** Erfinde keine Personen, Zuständigkeiten, Termine, Prioritäten oder Sachstände. Kennzeichne fehlende Angaben mit „offen“ und formuliere neutral.

**Ausgabeformat:** Zuerst eine Tabelle mit Aufgabe, bekannter Status, vorgeschlagener Reihenfolge, Zuständigkeit und Termin; danach eine Agenda mit höchstens vier Punkten.

**Prüfkriterien:** Markiere Annahmen und nenne alle Punkte, die vor einer internen Verwendung fachlich geklärt werden müssen.

**Vollständiger Prompt:**

> Erstelle eine prüfbare Aufgabenliste und eine kurze Agenda für die interne Organisationsrunde. Nutze ausschließlich die sechs synthetischen Notizen. Erfinde keine Personen, Zuständigkeiten, Termine, Prioritäten oder Sachstände; kennzeichne Fehlendes mit „offen“. Gib zuerst eine Tabelle mit Aufgabe, bekanntem Status, vorgeschlagener Reihenfolge, Zuständigkeit und Termin und danach höchstens vier Agendapunkte aus. Markiere Annahmen und nenne, was vor der Verwendung geklärt werden muss.

## 6. Plausible, aber unvollkommene Modellausgabe

| Aufgabe | Zuständigkeit | Termin | Status |
| --- | --- | --- | --- |
| Raum verbindlich buchen | Bürokoordination | Mittwoch | dringend |
| Agenda versenden | Teamleitung | Donnerstag | vorbereitet |
| Material nachbestellen | Einkauf | Freitag | freigegeben |
| Postablauf aktualisieren | Verwaltung | Monatsende | begonnen |

Agenda: Raumstatus, Agendafreigabe, Materialbestellung und neuer Postablauf.

Die Ausgabe wirkt ordentlich, erfindet aber Rollen, Termine, Priorität und mehrere Sachstände. Außerdem fehlt die offene Lieferzeitrückfrage.

## 7. Siebenstufige Prüfung

1. **Fakten:** Die Aufgaben stammen überwiegend aus dem Material; „vorbereitet“, „freigegeben“ und „begonnen“ sind erfunden.
2. **Quellen:** Es gibt nur die sechs synthetischen Notizen; keine weitere Quelle belegt Rollen oder Termine.
3. **Vollständigkeit:** Die Lieferzeitrückfrage und der Hinweis auf zwei ungeklärte Zuständigkeiten fehlen.
4. **Verzerrung:** Die Ausgabe stellt vorgeschlagene Rollen so dar, als seien sie organisatorisch beschlossen.
5. **Rechte und Daten:** Die Fallmappe ist synthetisch; vor realer Nutzung müsste geprüft werden, ob interne Inhalte im freigegebenen Werkzeug zulässig sind.
6. **Ton und Wirkung:** Der Ton ist neutral, die scheinbare Verbindlichkeit kann aber falsche Aufträge erzeugen.
7. **Verantwortung:** Eine benannte koordinierende Rolle muss Fakten ergänzen; die zuständige Führungskraft bestätigt Aufgaben, Rollen und Termine.

**Entscheidung:** Nicht unverändert verwenden; erst verbessern und menschlich freigeben.

## 8. Verbesserte Ausgabe

| Aufgabe | Bekannter Status | Vorgeschlagene Reihenfolge | Zuständigkeit | Termin |
| --- | --- | --- | --- | --- |
| Besprechungsraum bestätigen | noch nicht bestätigt | 1 | offen | offen |
| Neutrale Agenda prüfen und verteilen | Entwurf erforderlich | 2 | offen | vor der Runde; Datum offen |
| Fehlende Büromaterialmengen prüfen | Prüfung erforderlich | 3 | offen | offen |
| Lieferzeit der Standardordner klären | Rückfrage offen | 4 | offen | offen |
| Ablaufbeschreibung für allgemeine Post überarbeiten | Überarbeitung gewünscht | 5 | offen | offen |

**Agendaentwurf**

1. Raum und Terminrahmen bestätigen.
2. Aufgaben, Zuständigkeiten und Fälligkeiten festlegen.
3. Büromaterial und offene Lieferzeitrückfrage klären.
4. Nächsten Schritt für die Ablaufbeschreibung bestimmen.

**Vor Verwendung zu klären:** konkrete Rundentermine, freigebende Rolle, Zuständigkeiten, Fälligkeiten und tatsächliche Materialmengen.

## 9. Menschlicher Prüf- und Freigabeweg

1. Bürokoordination gleicht jede Tabellenzeile mit den Originalnotizen ab.
2. Zuständige Fachrollen ergänzen reale Sachstände außerhalb der Übung.
3. Die verantwortliche Führungskraft bestätigt Prioritäten, Zuständigkeiten und Termine.
4. Erst danach wird die Liste intern verteilt; Unklarheiten werden zurückgegeben, nicht von der KI geschlossen.

## 10. Basis- und Fortgeschrittenenvariante

### Basis

Nur die Aufgabenliste erstellen. Fehlende Angaben sichtbar mit „offen“ markieren und zwei Klärungsfragen formulieren.

### Fortgeschritten

Zusätzlich eine interne Ablaufbeschreibung für allgemeine Post strukturieren und danach die eigene Ausgabe kritisieren lassen. Die Gruppe entscheidet selbst, welche Kritik zutrifft, und erstellt eine zweite Fassung.

## 11. Trainerwarnung

Dieser Fall genehmigt weder ein konkretes Werkzeug noch reale interne Daten. Aus der Aufgabenliste dürfen keine verbindlichen Arbeitsaufträge, Leistungsbewertungen oder Zuständigkeiten abgeleitet werden. Die KI strukturiert; verantwortliche Menschen prüfen, entscheiden und geben frei.
