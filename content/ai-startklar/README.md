# MyHiwi AI-Startklar

## Verbindliche Quellen

`product-facts.json` ist die kanonische Quelle für alle Produktfakten von MyHiwi AI-Startklar. Verkaufsquellen und exportierte Vertriebsunterlagen müssen mit diesen Fakten übereinstimmen.

## Änderungsregel

Produktfakten werden zuerst in `product-facts.json` geändert, danach in den Quellen und Exporten nachvollzogen. Anschließend wird `node scripts/ai-startklar/verify-sales-kit.mjs` ausgeführt.

## Versionierung

Jedes Asset trägt Version, Datum und Dokumenttyp.

## Dateiindex

- `product-facts.json`: Kanonische Produktfakten.
- `README.md`: Pflege- und Versionierungsregeln für dieses Paket.
- `sales/`: Vertriebsquellen.
- `../../scripts/ai-startklar/verify-sales-kit.mjs`: Konsistenzprüfung für das Vertriebspaket.
