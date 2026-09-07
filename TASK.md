# Task

## Objective
Autorisiertes Go zum organischen 90-Tage-Plan: Messgrundlage, wichtige Inhaltskorrekturen und interne Links umsetzen; Google-Indexierungsauffälligkeiten live untersuchen.

## Constraints
Eigener Worktree ab origin/main 418009b. Fremde Änderungen erhalten. Keine Kontakt-E-Mails als Live-Test, kein Outreach. Optionale Messung nur nach Einwilligung, keine Formulardaten in Analytics. Keine erfundenen Rankings oder Kundenergebnisse.

## Decisions
Vercel Web Analytics zählt nur Produktion auf myhiwi.de nach Zustimmung. Bestätigte Formularsendungen und Telefon-/E-Mail-Klicks getrennt auswerten. Query-Parameter und Fragmente entfernen; interne QA kann Messung abschalten. Vorhandene Leistungsseiten stärken statt doppelte Inhalte bauen.

## Failed approaches
Baseline-Build erfolgreich, aber ESLint kollidiert im verschachtelten Worktree mit der übergeordneten Konfiguration. root:true isoliert die Repository-Konfiguration.

## Next
Build inkl. TypeScript/Lint und 26 relevante Prüfungen grün. Mobile Einwilligungseinstellungen und drei Inhaltsseiten geprüft; ungültige alte Banner-Hintergrundklasse korrigiert. Beide auffälligen URLs sind im GSC-Live-Test abrufbar und selbstkanonisch; erneute Indexierung beantragt. Änderungen veröffentlichen, Produktion messen und aktuelle Sitemap einreichen.

## accepted_commit
418009b8d7eb9b43afcc90e49cd047fba1842dd9 (Ausgangsbasis)
