# MyHiwi Redesign · Pre-Live-Check

Stand: 2026-05-20

## Ziel

Den neuen MyHiwi-Redesign-Stand kontrolliert live schalten, ohne den Relaunch künstlich aufzublähen. Fokus: neue Positionierung, saubere Conversion, ein starker Proof-Case, rechtliche Basis und Indexierbarkeit.

## Live-MVP: Diese Seiten sollten vor Go-Live sauber sein

### 1. Homepage `/`

Status: weitgehend fertig.

Muss vor Go-Live:
- Desktop + Mobile visuell prüfen.
- Hero-H1 auf mittleren Desktop-Breiten kontrollieren.
- CTAs prüfen: primär aktuell `/kontakt`, textlich als kostenloser Digital-Check.
- Keine Fake-Zahlen oder nicht belegten Testimonials.

### 2. Kontakt / Digital-Check `/kontakt`

Status: Design angepasst, aktuell primäre Conversion-Seite.

Muss vor Go-Live:
- Formular praktisch testen.
- Vercel-Env prüfen: `RESEND_API_KEY`, `CONTACT_EMAIL`.
- Erfolgs-/Fehlerzustand prüfen.
- `/digital-check` leitet kurzfristig auf `/kontakt`, damit der Begriff nicht als 404 endet.

### 3. Sonnenhof Case `/case-studies/sonnenhof-herrsching`

Status: erweitert und als Haupt-Proof geeignet.

Muss vor Go-Live:
- Zahlen und Formulierungen vorsichtig halten.
- Stand/Disclaimer sichtbar lassen.
- Keine Logos/Fotos verwenden, wenn Freigabe unsicher ist.

### 4. Case-Übersicht `/case-studies`

Status: livefähig als Übersicht, aber nicht zentraler Blocker.

Muss vor Go-Live:
- Keine unfertigen Case-Claims.
- Links zu bestehenden Case-Seiten prüfen.

### 5. Über mich `/ueber-mich`

Status: ältere Seite, aber nutzbar.

Vorbereitet:
- UG-Status aktualisiert: nicht mehr „i. G.“ / „HRB-Eintragung läuft“, sondern `MyHiwi UG (haftungsbeschränkt)` und `HRB 22263 FF · gegründet 2026`.

Muss vor Go-Live:
- Optional später auf neues Designsystem angleichen.
- Für MVP nicht zwingend komplett redesignen, solange Inhalt korrekt ist.

### 6. Rechtliches `/impressum`, `/datenschutz`

Status: vorhanden.

Muss vor Go-Live:
- Impressum mit UG-Daten, HRB, Anschrift, E-Mail prüfen.
- Datenschutz gegen tatsächliche Anbieter prüfen: Vercel, Resend, ggf. Fonts/Analytics/Cookies.
- Wenn kein Tracking/Cookies aktiv: kein unnötiges Cookie-Banner erzwingen.

## Nicht blockierend für ersten Go-Live

Diese Seiten können nach Live-Schaltung nachgezogen werden:

- `/leistungen` als eigene Systemlandkarte — aktuell Redirect auf `/`.
- `/digital-check` als echte eigene Multi-Step-Seite — kurzfristig Redirect auf `/kontakt` reicht.
- `/fewo` als Vertical-Landingpage.
- neue `/cases` Route statt alter `/case-studies` Route.
- Blog-Redesign.
- vollständige Über-mich-Designangleichung.
- weitere Vertical-Pages: Auto-Werkstatt, Fahrschule, FeWo/Hotel, Sport/Kurse.

## Indexierung / SEO-Basis

Live geprüft am 2026-05-20:

- `https://myhiwi.de/robots.txt` erlaubt Crawling: `Allow: /`, nur `/api/` ist disallowed.
- `https://myhiwi.de/sitemap.xml` existiert und enthält die wichtigsten aktuellen Routen.
- Startseite, Kontakt, Case-Übersicht, Sonnenhof, Impressum, Datenschutz liefern kein `noindex`-Meta und keinen `X-Robots-Tag: noindex`.

Wichtig: Wenn Google die Seite aktuell nicht indexiert oder schlecht sichtbar hat, liegt es nach dieser Prüfung nicht an einem offensichtlichen `robots.txt`-Block oder `noindex` auf den geprüften Live-Seiten. Nach Relaunch sollte die Sitemap in Google Search Console erneut eingereicht und die Startseite zur Indexierung angestoßen werden.

## Technischer Stand

- Lokales Repo ist mehrere Commits vor `origin/main`.
- Neuer Redesign-Stand ist lokal gebaut, aber noch nicht live.
- `npm run build` läuft grün.
- `DESIGN.md` lintet grün.
- `npm run lint` ist aktuell nicht nutzbar, weil Next.js interaktiv ESLint-Konfiguration anlegen möchte.

## Go-Live Ablauf

1. Letzte Sichtprüfung lokal:
   - `/`
   - `/kontakt`
   - `/case-studies`
   - `/case-studies/sonnenhof-herrsching`
   - `/ueber-mich`
   - `/impressum`
   - `/datenschutz`

2. Build nochmal ausführen:

```bash
npm run build
node node_modules/@google/design.md/dist/index.js lint DESIGN.md
```

3. Git prüfen:

```bash
git status --short
git log --oneline --decorate -5
```

4. Commit für Pre-Live-Fixes erstellen, falls noch uncommitted:

```bash
git add app/ueber-mich/page.tsx next.config.js docs/pre-live-check-myhiwi-redesign-2026-05-20.md
git commit -m "chore: prepare MyHiwi redesign go-live"
```

5. Push auf GitHub:

```bash
git push origin main
```

6. Vercel Deployment abwarten oder manuell triggern.

7. Nach Live-Schaltung prüfen:

```bash
python3 - <<'PY'
import requests, re
for url in [
  'https://myhiwi.de/',
  'https://myhiwi.de/kontakt',
  'https://myhiwi.de/digital-check',
  'https://myhiwi.de/case-studies',
  'https://myhiwi.de/case-studies/sonnenhof-herrsching',
  'https://myhiwi.de/ueber-mich',
  'https://myhiwi.de/impressum',
  'https://myhiwi.de/datenschutz',
  'https://myhiwi.de/robots.txt',
  'https://myhiwi.de/sitemap.xml',
]:
    r=requests.get(url, timeout=15, allow_redirects=True)
    title=re.search(r'<title>(.*?)</title>', r.text, re.S)
    print(r.status_code, r.url, title.group(1)[:90] if title else '')
PY
```

8. Google Search Console:
   - Sitemap erneut einreichen.
   - URL-Prüfung für `/` starten.
   - Indexierung beantragen.

## Empfehlung

Go-live als `Redesign MVP v1` machen, nicht warten bis alle geplanten Unterseiten fertig sind. Danach in dieser Reihenfolge nachziehen:

1. echte `/leistungen` Systemlandkarte,
2. echte `/digital-check` Flow-Seite,
3. `/fewo` Vertical-Landingpage,
4. Auto-Werkstatt/Fahrschule Use-Case-Seiten,
5. Blog/alte Legacy-Seiten aufräumen.
