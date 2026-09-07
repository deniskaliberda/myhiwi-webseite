# Task

## Objective
Autorisiertes Go zum organischen 90-Tage-Plan: Messgrundlage, wichtige Inhaltskorrekturen und interne Links umsetzen; Google-Indexierungsauffälligkeiten live untersuchen.

## Constraints
Eigener Worktree ab origin/main 418009b. Fremde Änderungen erhalten. Keine Kontakt-E-Mails als Live-Test, kein Outreach. Optionale Messung nur nach Einwilligung, keine Formulardaten in Analytics. Keine erfundenen Rankings oder Kundenergebnisse.

## Decisions
Vercel Web Analytics zählt nur Produktion auf myhiwi.de nach Zustimmung. Bestätigte Formularsendungen und Telefon-/E-Mail-Klicks getrennt auswerten. Query-Parameter und Fragmente entfernen; interne QA kann Messung abschalten. Vorhandene Leistungsseiten stärken statt doppelte Inhalte bauen.

## Failed approaches
Baseline-Build erfolgreich, aber ESLint kollidiert im verschachtelten Worktree mit der übergeordneten Konfiguration. root:true isoliert die Repository-Konfiguration. Headless-Live-Messung wird vom Vercel-Script ausgeschlossen; regulärer Chrome bestätigt die Datenaufnahme.

## Next
Erste Prioritäten abgeschlossen und live: PR #11, Produktionsdeployment bereit, drei dokumentierte QA-Seitenaufrufe in Vercel bestätigt. Fünf GSC-Indexierungsanträge bestätigt; Sitemap am 07.09. erfolgreich neu gelesen mit 40 URLs. Eigene Tabs und Testserver geschlossen. Spätere Indexaufnahme und 28-Tage-Vergleich bleiben Folgearbeit im 90-Tage-Plan.

## accepted_commit
1e1233497da0261026a4b65a0e51382d02714cff (verifizierte Produktion)
