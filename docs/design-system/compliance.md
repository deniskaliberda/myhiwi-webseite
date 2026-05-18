# MyHiwi · Compliance & Claim-Regeln

> Vor Go-Live verbindlich. Kein Coding-Agent darf gegen diese Regeln schreiben.

---

## 1. Grundsatzregeln

1. **Keine Fake-Zahlen.** Wenn nicht belegbar, dann nicht als Zahl auf der Seite.
2. **Keine erfundenen Testimonials.** Stellvertretende Sätze klar als „typische Sätze aus Erstgesprächen" kennzeichnen.
3. **Keine pauschalen DSGVO-Garantien.** Standardformulierung: *„DSGVO-bewusst, mit AVV und Anbieterübersicht projektbezogen."*
4. **Lokale KMU-Sprache statt SaaS-/Growth-Hype.** Wir verkaufen keine isolierten Tools, sondern verbundene Systeme.
5. **„MyHiwi" verbindet:** Sichtbarkeit, Nachfrage, Anfrage, Buchung, Zahlung, AI/Automation. Keine isolierten Dienstleistungen als Hauptprodukt darstellen.

---

## 2. Vorsichtige Ergebnis-Formulierungen

Wenn etwas **belegt** ist (mit Tool-Export, Screenshot, Vertrag):
- Zahl + konkreter Zeitraum + Quelle.
- Beispiel: „108 Anfragen in 100 Tagen · Sonnenhof Herrsching · belegter Case 2026"

Wenn etwas **beobachtet** ist (im Projekt sichtbar, aber nicht öffentlich):
- Satz, keine Zahl.
- Beispiele:
  - „beobachteter Effekt: weniger Telefon-Rückfragen"
  - „im Projekt sichtbar"
  - „erste Verbesserung sichtbar"
  - „Ziel des Systems: Provisionsanteil senken"
  - „erstes Quartal beobachtet"

Wenn etwas **noch nicht messbar** ist (Pilot, Saison läuft):
- offen formulieren.
- Beispiele:
  - „Pilot-Launch · beobachteter Effekt im Projekt, nicht öffentlich belegt"
  - „vorsichtig, Saison läuft noch"
  - „Pilot-Phase"

---

## 3. DSGVO-Sprache

### Erlaubt
- „DSGVO-bewusst, mit AVV und Anbieterübersicht projektbezogen."
- „Hosting bevorzugt in der EU."
- „Auftragsverarbeitungs-Vertrag auf Anfrage."
- „Keine pauschalen Versprechen — nur das, was wir wirklich abdecken."
- „Sie können jederzeit per Mail Löschung verlangen."

### Verboten
- ❌ „100% DSGVO-konform" (kein einzelner Anbieter kann das pauschal sagen)
- ❌ „DSGVO · Made in Deutschland" (zu pauschal)
- ❌ „Garantiert datenschutzkonform"
- ❌ „Alle Daten in Deutschland" (unhaltbar wenn Vercel/Stripe/Resend genutzt wird)

### Kontext-spezifisch
- **Digital-Check Form:** zwingend Trust-Note vor Submit: „Ihre Daten landen in einem EU-gehosteten Postfach, AVV auf Anfrage. Wir geben nichts an Dritte weiter."
- **FAQ-Antwort:** ausführlicher: „Wir arbeiten DSGVO-bewusst und hosten bevorzugt in der EU. Sie bekommen einen Auftragsverarbeitungs-Vertrag (AVV) und projektbezogen eine Übersicht der eingesetzten Anbieter, bevor Daten fließen. Keine pauschalen Versprechen — nur das, was wir wirklich abdecken."
- **Footer:** Link auf Datenschutz-Seite (separates Dokument).

---

## 4. Testimonials & Zitate

### Echte Quotes
Erlaubt **nur** wenn:
- schriftliche Erlaubnis des Kunden vorliegt
- voller Name und Firma genannt werden dürfen
- Wortlaut unverändert wiedergegeben wird

Falls verfügbar:
- Klaus Lukoschek, Sonnenhof Herrsching
- (weitere mit Erlaubnis)

### Stellvertretende Sätze (QuoteCarousel)
Verwendet auf FeWo-LP. Verbindliche Note über den Quotes:

> „Stellvertretend für Gespräche mit echten Gastgebern. Wir arbeiten mit Original-Stimmen erst, wenn wir auch die ausdrückliche Erlaubnis dafür haben."

Attribution-Format:
- ✅ „sinngemäß · Pension am Ammersee"
- ✅ „sinngemäß · Ferienwohnungen, Voralpenland"
- ❌ „Familie L., Pension am Ammersee" (klingt nach Realnamen)
- ❌ „Frau S., Allgäu" (klingt nach Realnamen)

---

## 5. Branchen-Zahlen (FeWo-Leak-Beispielrechnung)

Die Leak-Beispielrechnung auf `/fewo` zeigt Beispielwerte:
- 80.000 € Jahresumsatz (Beispiel)
- 70 % über Plattformen
- 15 % Provision
- 30 % Verlagerung als Annahme

**Verbindlich:**
- Klar als „Beispielrechnung" gekennzeichnet (Eyebrow + Disclaimer-Zeile)
- Disclaimer: „Beispielwerte. Provisionen variieren je nach Plattform und Tarif. Wir rechnen das im Kurzcheck mit Ihren Zahlen sauber durch."
- Kein interaktiver Slider, keine „Ihre Ersparnis"-Berechnung.
- Keine konkreten OTA-Namen mit Prozentsätzen, nur die Kategorie.

---

## 6. AI / Automation-Sprache

### Erlaubt
- „AI da, wo sie wirklich hilft."
- „Digitaler Anfrage-Assistent" (das konkrete Produkt)
- „AI als Verstärker, nicht als Hauptprodukt"
- „mit menschlicher Kontrolle, statt Blackbox-Automatisierung"
- „strukturierte Anfragen" (für Fahrschul-Flow)

### Verboten
- ❌ „AI Employee"
- ❌ „revolutionäre KI"
- ❌ „GPT-Power"
- ❌ „ChatGPT macht Ihren Job"
- ❌ „autonome Agents"

---

## 7. CTA-Kontroll-Liste

Vor jedem Commit prüfen:

- [ ] Maximal 1 Primary-CTA pro Sektion?
- [ ] Primary-CTA-Text wortgleich aus der CTA-Hierarchie (`Kostenlosen Digital-Check anfragen` für Hauptseiten)?
- [ ] Branchen-CTA nur auf Branchen-LP, nicht auf Hauptseiten?
- [ ] Final-CTA-Sektion am Ende jeder öffentlichen Seite?
- [ ] Microcopy unter Primary-CTA korrekt? (`kostenlos · unverbindlich · 20 Minuten · …`)

---

## 8. Personennamen

- **Gründer:** Denis Kaliberda · denis@myhiwi.de
- **Standort-Caption:** „Ahrensfelde + Ammersee" oder „Ahrensfelde bei Berlin · Ammersee, Bayern"
- **Telefonnummer:** Keine Platzhalter. Wenn keine echte Nummer da ist, dann nur E-Mail.

---

## 9. Compliance-Pre-Launch-Checkliste

| Punkt | Status (bei Go-Live) |
|---|---|
| Sonnenhof-Zahl (108) belegt mit Tool-Export | [ ] |
| +304 % Keywords belegt mit SE Ranking | [ ] |
| Sherman-Aussage nicht-numerisch | [ ] |
| Mannis-Aussage nicht-numerisch | [ ] |
| Villa Gloria / FeWo Taubenhaus vorsichtig formuliert | [ ] |
| Formazin als „Pilot" gekennzeichnet | [ ] |
| DSGVO-Wortlaut überall korrekt | [ ] |
| AVV-Vorlage als PDF greifbar | [ ] |
| Telefonnummer entweder echt oder weg | [ ] |
| Telefonnummer-Platzhalter „030 / 23-XX-XX" geprüft (entfernt) | [ ] |
| Keine Stockfotos | [ ] |
| Trust-Strip-Wordmarks vs. echte Logos entschieden | [ ] |
| QuoteCarousel-Note über Stellvertreter-Quotes vorhanden | [ ] |
| Cookie-Banner / Consent-Lösung implementiert | [ ] |
| Datenschutzerklärung aktualisiert (mit Resend, Vercel, etc. genannt) | [ ] |
| Impressum mit Kaliberda Digital Intelligence UG | [ ] |
| Lighthouse > 95 alle Kategorien | [ ] |

---

**Ende compliance.md.**
