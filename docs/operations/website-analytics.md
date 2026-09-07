# Website-Messung ab September 2026

Vercel Web Analytics wird nur bei einem Produktions-Build (`VERCEL_ENV=production`), auf `myhiwi.de` und nach Zustimmung geladen. Die Version `mh-consent-v2` fragt die Zustimmung für die neu hinzugekommene Vercel-Messung erneut ab. Unter `/datenschutz` kann sie widerrufen werden. Vorschau-Deployments und localhost zählen nicht.

## Was die Zahlen bedeuten

- Seitenaufrufe und Besucher: nur der messbare Anteil mit Zustimmung, kein vollständiger Traffic-Zähler. Adblocker, technische Ausfälle und Ablehnung erzeugen Lücken. Keine rückwirkenden Zahlen vor dem Einbau.
- `contact_submitted`, Eigenschaft `form=kontakt|fewo`: `/api/contact` hat `success: true` bestätigt. Noch kein qualifiziertes Gespräch, Auftrag oder Buchung. Das Backend bestätigt erst nach Annahme der E-Mail durch den Versanddienst.
- `contact_link_clicked`, Eigenschaft `channel=phone|email`: Klick auf einen Kontaktlink. Kein Nachweis eines abgeschlossenen Anrufs oder einer gesendeten E-Mail.
- Namen, E-Mail-Adressen, Telefonnummern, Nachrichtentext und Firmenname gehören nicht in Event-Eigenschaften. Query-Parameter und Fragmente werden aus der Seitenadresse entfernt; dadurch fehlen auch URL-Kampagnenparameter. Referrer bleibt eine eigene Herkunftsinformation.

## Eigene Prüfungen ausschließen

Für einen einzelnen Seitenaufruf `?analytics=off` anfügen. Für dauerhaft ausgeschlossene eigene Browser in deren Konsole `localStorage.setItem("mh-analytics-off", "1")` setzen und neu laden; zum Aufheben `localStorage.removeItem("mh-analytics-off")`. Die Markierung gilt für diese Origin und diesen Browser. Produktions-Funktionstests mit aktivierter Messung gesondert mit Zeitpunkt und aufgerufenen Seiten dokumentieren.

## Lokal prüfen

Ohne Produktionszugang oder echte Formularsendung:

```sh
VERCEL_ENV=production npm run build
VERCEL_ENV=production PLAYWRIGHT_PORT=3129 npx playwright test tests/website-analytics.spec.ts tests/contact-form.spec.ts tests/contact-api.spec.ts tests/services-seo.spec.ts
```

Vorher sicherstellen, dass der Port frei ist und keine echten Versand-Zugangsdaten in der Testumgebung liegen. Die Analytics-Integrationstests liefern den lokalen Build im isolierten Testbrowser unter der Produktions-Origin aus; sämtliche Requests dieser Origin sind abgefangen. Analytics-Script und Kontakt-API sind gemockt. Die Live-Einbindung muss nach dem Deployment zusätzlich geprüft werden.

## Monatliche Auswertung

Gleiche vollständige 28-Tage-Zeiträume vergleichen. Produktions-Host, bekannte Tests und Messbeginn angeben. GSC-Klicks separat von Website-Besuchern ausweisen. Kontaktaktionen, bestätigte Formularsendungen und von Denis qualifizierte Anfragen separat berichten; keine Conversionrate über unvereinbare Nenner bilden.

Quellen: [Vercel Analytics-Paket](https://vercel.com/docs/analytics/package), [Vercel Datenschutz](https://vercel.com/docs/analytics/privacy-policy). Stand: 07.09.2026.
