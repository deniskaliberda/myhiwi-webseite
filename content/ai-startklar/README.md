# MyHiwi AI-Startklar

**Version:** 1.0
**Stand:** 22. Juli 2026
**Dokumenttyp:** Paketindex und Pflegehinweise

## Verbindliche Quellen

`product-facts.json` ist die kanonische Quelle für alle Produktfakten von MyHiwi AI-Startklar. Verkaufsquellen und exportierte Vertriebsunterlagen müssen mit diesen Fakten übereinstimmen.

## Änderungsregel

Produktfakten werden zuerst in `product-facts.json` geändert, danach in den Quellen und Exporten nachvollzogen. Anschließend wird `node scripts/ai-startklar/verify-sales-kit.mjs` ausgeführt.

## Versionierung

Jedes Asset trägt Version, Datum und Dokumenttyp. Die kanonische Quelle führt diese Angaben unter `metadata`; Quellen und Exporte übernehmen die jeweils gültigen Metadaten aus dieser Quelle.

## Dateiindex

- `product-facts.json`: Kanonische Produktfakten.
- `README.md`: Pflege- und Versionierungsregeln für dieses Paket.
- `sales/`: Vertriebsquellen.
- `../../scripts/ai-startklar/verify-sales-kit.mjs`: Konsistenzprüfung für das Vertriebspaket.

## Paketindex

| Nr. | Quelle | Ausgaben | Zielgruppe | Editierbarkeit | Customer Journey |
| --- | --- | --- | --- | --- | --- |
| 01 | `01-produkt-one-pager.md` | `01-produkt-one-pager.docx`, `01-produkt-one-pager.pdf` | Geschäftsführung und Entscheider/innen | Markdown und DOCX editierbar; PDF nicht zur Bearbeitung vorgesehen | Orientierung und Bedarfserkennung |
| 02 | `02-erstgespraechsleitfaden.md` | `02-erstgespraechsleitfaden.docx`, `02-erstgespraechsleitfaden.pdf` | MyHiwi Vertrieb | Markdown und DOCX editierbar; PDF nicht zur Bearbeitung vorgesehen | Erstgespräch und Qualifizierung |
| 03 | `03-fit-risikocheck.md` | `03-fit-risikocheck.docx`, `03-fit-risikocheck.pdf` | MyHiwi Vertrieb und Delivery | Markdown und DOCX editierbar; PDF nicht zur Bearbeitung vorgesehen | Fit- und Risikoprüfung |
| 04 | `04-angebotsvorlage.md` | `04-angebotsvorlage.docx`, `04-angebotsvorlage.pdf` | Kundenentscheidende und Einkauf | Markdown und DOCX editierbar; PDF nicht zur Bearbeitung vorgesehen | Angebot und Beauftragung |
| 05 | `05-vorbereitungsfragebogen.md` | `05-vorbereitungsfragebogen.docx`, `05-vorbereitungsfragebogen.pdf` | Kundenansprechperson und Management | Markdown und DOCX editierbar; PDF nicht zur Bearbeitung vorgesehen | Sichere Vorbereitung |
| 13 | `13-teilnahmeliste.md` | `13-teilnahmeliste.xlsx`, `13-teilnahmeliste.docx`, `13-teilnahmeliste.pdf` | Trainer/in und Teilnehmende | Markdown, XLSX und DOCX editierbar; PDF nicht zur Bearbeitung vorgesehen | Durchführung und Anwesenheitsdokumentation |
| 14 | `14-teilnahmebestaetigung.md` | `14-teilnahmebestaetigung.docx`, `14-teilnahmebestaetigung.pdf` | Teilnehmende und Kundenorganisation | Markdown und DOCX editierbar; PDF nicht zur Bearbeitung vorgesehen | Nachbereitung und Teilnahmenachweis |
| 15 | `15-ki-nutzungsregel.md` | `15-ki-nutzungsregel.docx`, `15-ki-nutzungsregel.pdf` | Management und Mitarbeitende | Markdown und DOCX editierbar; PDF nicht zur Bearbeitung vorgesehen | Betriebliche Einführung und Regelsetzung |
| 16 | `16-management-massnahmenblatt.md` | `16-management-massnahmenblatt.docx`, `16-management-massnahmenblatt.pdf` | Management | Markdown und DOCX editierbar; PDF nicht zur Bearbeitung vorgesehen | 30-Tage-Umsetzung |
| 17 | `17-nachbesprechungsprotokoll.md` | `17-nachbesprechungsprotokoll.docx`, `17-nachbesprechungsprotokoll.pdf` | Management und MyHiwi | Markdown und DOCX editierbar; PDF nicht zur Bearbeitung vorgesehen | Management-Follow-up |
| 19 | `19-anfragebestaetigung.md` | `19-anfragebestaetigung.docx`, `19-anfragebestaetigung.pdf` | Interessentinnen und Interessenten | Markdown und DOCX editierbar; PDF nicht zur Bearbeitung vorgesehen | Anfrageeingang und Bestätigung |

## Trainings- und Delivery-Index

Diese separate Übersicht ergänzt den unveränderten Vertriebs-Paketindex um Schulungsquellen, Praxisfälle und Delivery-Pfade.

### Schulungsquellen und Ausgaben

- `training/06-folienmanuskript.md` → `../../deliverables/ai-startklar/schulung/06-trainerfolien.pptx` und `06-trainerfolien.pdf`
- `training/07-trainerleitfaden.md` → `../../deliverables/ai-startklar/schulung/07-trainerleitfaden.docx` und `07-trainerleitfaden.pdf`
- `training/08-teilnehmerheft.md` → `../../deliverables/ai-startklar/schulung/08-teilnehmerheft.docx` und `08-teilnehmerheft.pdf`
- `training/09-promptvorlage.md` → `../../deliverables/ai-startklar/schulung/09-promptvorlage.docx` und `09-promptvorlage.pdf`
- `training/10-datenampel.md` → `../../deliverables/ai-startklar/schulung/10-datenampel.docx` und `10-datenampel.pdf`
- `training/11-pruefcheckliste.md` → `../../deliverables/ai-startklar/schulung/11-pruefcheckliste.docx` und `11-pruefcheckliste.pdf`
- `training/12-lerncheck.md` → `../../deliverables/ai-startklar/schulung/12-lerncheck.docx` und `12-lerncheck.pdf`
- `training/12-loesungsschluessel.md` → `../../deliverables/ai-startklar/schulung/12-loesungsschluessel.docx` und `12-loesungsschluessel.pdf` (nur Trainer)

### Sichere Praxisfälle

- `training/praxisfaelle/01-buero-verwaltung.md`
- `training/praxisfaelle/02-vertrieb-kundenkommunikation.md`
- `training/praxisfaelle/03-marketing-content.md`
- `training/praxisfaelle/04-fuehrung-entscheidungsvorbereitung.md`
- `training/praxisfaelle/05-handwerk-dokumentation.md`
- `training/praxisfaelle/06-dienstleistung-kundenanfragen.md`

### Delivery und Prüfung

- Delivery-Verzeichnis: `../../deliverables/ai-startklar/schulung/`
- Trainings-Verifier: `../../scripts/ai-startklar/verify-training-kit.mjs`
- Vertriebs-Verifier: `../../scripts/ai-startklar/verify-sales-kit.mjs`
- Landingpage Nr. 18: `/ki-schulung`
