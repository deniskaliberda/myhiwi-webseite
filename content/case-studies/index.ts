import type { CaseStudy } from "./types";

const asset = (slug: string, file: string) => `/case-studies/${slug}/${file}`;

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "sonnenhof-herrsching",
    overviewMetricIndexes: [0, 1, 2, 4],
    name: "Sonnenhof Herrsching",
    industry: "Ferienwohnungen & Gastgewerbe",
    location: "Herrsching am Ammersee",
    title: "Ein neuer Auftritt und ein direkter Weg zur Gäste-Anfrage",
    summary:
      "Website, Google-Sichtbarkeit und ein klarer Anfrageweg für einen Gastgeber am Ammersee – mit einem zweiten Relaunch für den gewachsenen Landhaus-Auftritt.",
    standfirst:
      "Für den Sonnenhof haben wir den Webauftritt neu geordnet, Unterkünfte und Preise verständlich erschlossen und die direkte Anfrage messbar gemacht. Im August 2026 folgte die nächste Ausbaustufe: ein neuer Landhaus-Auftritt mit digitalen Gastgeber-Inhalten, zusätzlichen Zimmerseiten und engerer interner Verlinkung.",
    website: "https://www.sonnenhof-herrsching.de",
    updated: "2026-09-06",
    cover: {
      src: asset("sonnenhof-herrsching", "cover.webp"),
      alt: "Aktuelle Website des Sonnenhofs Herrsching im Landhaus-Stil",
      caption:
        "Aktuelle Landhaus-Startseite, aufgenommen am 5. September 2026.",
    },
    services: [
      { label: "Webseiten", href: "/leistungen/webseiten" },
      { label: "Google-Sichtbarkeit", href: "/leistungen/google-sichtbarkeit" },
      { label: "KI-Sichtbarkeit", href: "/leistungen/ki-sichtbarkeit" },
    ],
    metrics: [
      {
        value: "607",
        label: "Website-Anfragen",
        period: "30.01.–30.08.2026 · Export 31.08.2026",
        source: "Formular-Export des Sonnenhofs",
        note: "Formularanfragen sind noch keine bestätigten Buchungen und umfassen mehrere Zugriffsquellen.",
      },
      {
        value: "1.844",
        label: "Google-Klicks",
        period: "01.–31.08.2026",
        source: "Google Search Console · finaler Property-Abruf am 05.09.2026",
        note: "Klicks aus der Websuche sind keine eindeutigen Besucher oder Buchungen.",
      },
      {
        value: "20",
        label: "Anfragen mit ChatGPT-Kennung",
        period: "August bis 30.08.2026 · Export 31.08.2026",
        source: "Formular-Export · _utm_source=chatgpt.com",
        note: "Die UTM-Kennung dokumentiert die übermittelte Quelle, nicht den auslösenden Prompt oder eine bestätigte Buchung.",
      },
      {
        value: "51.868",
        label: "Google-Impressionen",
        period: "01.–31.08.2026",
        source: "Google Search Console · finaler Property-Abruf am 05.09.2026",
        note: "Einblendungen in der Websuche, keine einzelnen Personen.",
      },
      {
        value: "+30,1 %",
        label: "mehr Google-Klicks",
        period: "Juli → August 2026",
        source: "Google Search Console · finaler Property-Abruf am 05.09.2026",
        note: "1.417 → 1.844 Klicks; vollständige Kalendermonate, kein isolierter Relaunch-Effekt.",
      },
      {
        value: "43",
        label: "Anfragen mit ChatGPT-Kennung insgesamt",
        period: "30.01.–30.08.2026 · Export 31.08.2026",
        source: "Formular-Export des Sonnenhofs · 31.08.2026",
        note: "Übermittelte UTM-Kennung; die 20 August-Anfragen sind darin enthalten.",
      },
    ],
    inquiryHistory: {
      period: "30.01.–30.08.2026 · Export 31.08.2026",
      source: "Formular-Export des Sonnenhofs · 31.08.2026",
      note: "607 Anfragen insgesamt. Januar beginnt am 30.01., August endet am 30.08. Die Monatswerte enthalten alle erfassten Quellen; sie zählen keine bestätigten Buchungen. Der Rückgang von Juli auf August bleibt sichtbar.",
      rows: [
        { label: "30.–31. Januar", value: 1 },
        { label: "Februar", value: 11 },
        { label: "März", value: 45 },
        { label: "April", value: 57 },
        { label: "Mai", value: 96 },
        { label: "Juni", value: 125 },
        { label: "Juli", value: 158 },
        { label: "1.–30. August", value: 114 },
      ],
    },
    metricGroups: [
      {
        title: "Was Gäste konkret angefragt haben",
        description:
          "Der Formular-Export enthält die gewünschte Unterkunft. Deutsch- und englischsprachige Bezeichnungen sind hier zusammengefasst.",
        metrics: [
          {
            value: "319",
            label: "Anfragen für Ferienwohnungen",
            period: "30.01.–30.08.2026 · Export 31.08.2026",
            source: "Formular-Export des Sonnenhofs · 31.08.2026",
            note: "316 „Ferienwohnung“ + 3 „Holiday Apartment“.",
          },
          {
            value: "288",
            label: "Anfragen für Gästezimmer",
            period: "30.01.–30.08.2026 · Export 31.08.2026",
            source: "Formular-Export des Sonnenhofs · 31.08.2026",
            note: "280 „Gästezimmer“ + 8 „Guest Room“.",
          },
          {
            value: "568",
            label: "angefragte Nächte im August",
            period: "01.–30.08.2026 · Export 31.08.2026",
            source: "Formular-Export des Sonnenhofs · 31.08.2026",
            note: "Summe der gewünschten Aufenthaltsnächte aus 114 Anfragen. Keine gebuchten Nächte und keine Personenübernachtungen.",
          },
        ],
      },
      {
        title: "Welche Zugriffe im Formular markiert sind",
        description:
          "Kennungen geben Hinweise auf die Quelle. Sie sind keine vollständige Attribution; GCLID und UTM können sich überschneiden und werden nicht zu einer Gesamtzahl addiert.",
        metrics: [
          {
            value: "211",
            label: "Anfragen mit Google-Anzeigenkennung",
            period: "30.01.–30.08.2026 · Export 31.08.2026",
            source: "Formular-Export des Sonnenhofs · 31.08.2026",
            note: "GCLID im Formular vorhanden. Ohne GCLID bedeutet nicht automatisch organischer Zugriff.",
          },
          {
            value: "38",
            label: "davon im August",
            period: "01.–30.08.2026 · Export 31.08.2026",
            source: "Formular-Export des Sonnenhofs · 31.08.2026",
            note: "Teilmenge der 211 Anfragen mit GCLID, keine zusätzliche Anfragezahl.",
          },
          {
            value: "20",
            label: "mit ChatGPT-Kennung im August",
            period: "01.–30.08.2026 · Export 31.08.2026",
            source: "Formular-Export des Sonnenhofs · 31.08.2026",
            note: "Teilmenge der insgesamt 43 Anfragen mit _utm_source=chatgpt.com.",
          },
        ],
      },
    ],
    challenge: {
      title: "Unterkünfte erklären und direkte Anfragen erleichtern",
      body: "Der Sonnenhof brauchte mehr als eine neue Startseite: Gäste sollten Zimmer, Ferienwohnungen, Preise und die Lage am Ammersee schnell einordnen und direkt anfragen können. Gleichzeitig musste die Website für Suchmaschinen technisch verständlich werden und mit dem Betrieb weiterwachsen.",
    },
    improvements: [
      {
        title: "Unterkünfte mit klaren Wegen",
        body: "Eigene Seiten für Unterkünfte, Preise und häufige Fragen führen Gäste von der ersten Orientierung zur passenden Anfrage. Blogbeiträge verweisen gezielt auf Unterkunfts- und Preisinhalte.",
      },
      {
        title: "Messbarer Anfragekanal",
        body: "Das Formular erfasst Anfragen sowie vorhandene Verweis- und Anzeigenkennungen. So bleiben gekennzeichnete Quellen und nicht zugeordnete Zugriffe in der Auswertung unterscheidbar.",
      },
      {
        title: "Landhaus-Relaunch im laufenden Betrieb",
        body: "Am 15. August 2026 ging die nächste Designstufe live. Dazu kamen unter anderem eine Doppelzimmer-plus-Seite und ein digitales Gästebuch als blätterbares Buch.",
      },
    ],
    comparison: {
      before: {
        src: asset("sonnenhof", "sonnenhof-alt.jpg"),
        alt: "Ursprüngliche gelbe Sonnenhof-Website vor der Zusammenarbeit mit MyHiwi",
        caption:
          "Ursprüngliche Website vor der Zusammenarbeit mit MyHiwi. Archivaufnahme; das genaue Aufnahmedatum ist nicht dokumentiert.",
      },
      after: {
        src: asset("sonnenhof-herrsching", "cover.webp"),
        alt: "Sonnenhof-Website nach dem Landhaus-Relaunch",
        caption:
          "Aktuelle Landhaus-Startseite, aufgenommen am 5. September 2026.",
      },
      note: "Von der ursprünglichen gelben Website zum heutigen Landhaus-Auftritt: Der Vergleich zeigt die Ausgangslage vor unserer Zusammenarbeit und den aktuellen Stand nach zwei MyHiwi-Relaunches.",
    },
    gallery: [
      {
        src: asset("sonnenhof-herrsching", "mobile.webp"),
        alt: "Aktuelle Sonnenhof-Startseite in der mobilen Ansicht",
        caption:
          "Aktuelle Startseite im Smartphone-Format, aufgenommen am 5. September 2026.",
      },
      {
        src: asset("sonnenhof-herrsching", "detail.webp"),
        alt: "Einstieg in das digitale Gästebuch des Sonnenhofs",
        caption:
          "Digitales Gästebuch ohne sichtbare Gästeinträge, aufgenommen am 5. September 2026.",
      },
    ],
    timeline: [
      {
        date: "30.01.2026",
        title: "Messbarer Anfrageweg startet",
        body: "Website-Anfragen werden für die laufende Auswertung strukturiert erfasst.",
      },
      {
        date: "15.08.2026",
        title: "Landhaus-Relaunch geht live",
        body: "Design, Unterkünfte, interne Wege und digitale Gastgeber-Inhalte werden weiterentwickelt.",
      },
      {
        date: "31.08.2026",
        title: "Aktueller Anfrage-Export",
        body: "Der Export zählt 607 Formularanfragen bis einschließlich 30. August.",
      },
      {
        date: "05.09.2026",
        title: "Google-Monat final geprüft",
        body: "Der finale August-Abruf bestätigt 1.844 Klicks und 51.868 Impressionen aus der Google-Websuche.",
      },
    ],
    searchHistory: [
      { month: "Juli 2026", clicks: 1417, impressions: 44531 },
      { month: "August 2026", clicks: 1844, impressions: 51868 },
    ],
    methodology: [
      "Google-Werte stammen aus der Search Console, Suchtyp Web, auf Property-Ebene und ohne Query- oder Seitenfilter.",
      "Der Anfrageexport endet am 30. August; die Augustwerte sind deshalb als Exportstand und nicht als nachträglich geschlossener Kalendermonat bezeichnet.",
      "Anfragen, Google-Klicks, Werbezugriffe und bestätigte Buchungen sind verschiedene Größen. Aus ihrer zeitlichen Entwicklung wird keine Kausalität abgeleitet.",
    ],
    outlook:
      "Die nächsten Auswertungen sollen vollständige Monatsstände und den Weg von der Anfrage zur bestätigten Buchung getrennt betrachten. Die Website wird parallel mit neuen Unterkunfts- und Gastgeber-Inhalten weitergeführt.",
    video: {
      src: "/case-studies/sonnenhof/conny-statement.mp4",
      poster: "/case-studies/sonnenhof/conny-poster.jpg",
      caption:
        "Historisches Kundenstatement nach den ersten vier Monaten der Zusammenarbeit.",
    },
  },
  {
    slug: "physio-antje-foerster",
    name: "Physiotherapie Antje Förster",
    industry: "Physiotherapie",
    location: "Berlin-Karlshorst",
    title:
      "Eine neue Praxiswebsite mit klaren Leistungen und kurzen Kontaktwegen",
    summary:
      "Von einer Jimdo-Unterseite zur eigenen, schnellen Praxiswebsite – mit verständlicher Leistungsstruktur und einem für Mobilgeräte gedachten Kontaktweg.",
    standfirst:
      "Die bisherige eigene Domain leitete auf eine Jimdo-Free-Subdomain. Wir haben den Auftritt auf die eigene Domain geholt, Leistungen neu strukturiert und die mobile Nutzung verbessert. Der erste vollständige Messmonat liefert eine belastbare Ausgangslage für die weitere Begleitung.",
    website: "https://www.physio-antjefoerster.de",
    updated: "2026-09-06",
    cover: {
      src: asset("physio-antje-foerster", "cover.webp"),
      alt: "Neue Website der Physiotherapie Antje Förster in Berlin-Karlshorst",
      caption:
        "Aktuelle Startseite mit Praxis- und Leistungsprofil, aufgenommen am 5. September 2026.",
    },
    services: [
      { label: "Webseiten", href: "/leistungen/webseiten" },
      { label: "Google-Sichtbarkeit", href: "/leistungen/google-sichtbarkeit" },
    ],
    metrics: [
      {
        value: "133",
        label: "Google-Klicks",
        period: "01.–31.08.2026 · erster vollständiger Monat",
        source: "Google Search Console · finaler Property-Abruf am 05.09.2026",
      },
      {
        value: "1.522",
        label: "Google-Impressionen",
        period: "01.–31.08.2026",
        source: "Google Search Console · finaler Property-Abruf am 05.09.2026",
      },
      {
        value: "72 → 96",
        label: "Mobile Performance",
        period: "Labormessungen 21.07. und 28.08.2026",
        source: "Google PageSpeed Insights · Performance-Score",
        note: "Punktuelle Labormessungen, keine Felddaten und kein ausgewiesener Wachstumsprozentsatz.",
      },
      {
        value: "4,9 → 2,6 s",
        label: "Mobiler Seitenaufbau (LCP)",
        period: "21.07. → 28.08.2026",
        source: "Google PageSpeed Insights · dokumentierte Labormessungen",
        note: "Zeit bis zum größten sichtbaren Inhalt; punktuelle Labormessung.",
      },
      {
        value: "92 → 100",
        label: "Technischer SEO-Score",
        period: "21.07. → 28.08.2026",
        source: "Google PageSpeed Insights · dokumentierte Labormessungen",
        note: "Lighthouse-Prüfung technischer Grundlagen, kein Google-Ranking.",
      },
      {
        value: "8,74 %",
        label: "Klickrate in der Google-Suche",
        period: "01.–31.08.2026",
        source: "Google Search Console · finaler Property-Abruf am 05.09.2026",
        note: "133 Klicks bei 1.522 Impressionen, erster vollständiger Monat.",
      },
    ],
    technicalComparison: {
      period: "21.07. → 28.08.2026",
      source: "Google PageSpeed Insights · dokumentierte Labormessungen",
      note: "Alt: Jimdo-Auftritt, neu: eigene Praxisdomain. Labormessungen können schwanken; sie sind keine Felddaten. Ein SEO-Score misst technische Grundlagen, keine Platzierung. Der mobile LCP liegt mit 2,6 s noch über dem Ziel von 2,5 s.",
      rows: [
        {
          label: "Performance mobil · Punkte / 100",
          before: "72",
          after: "96",
        },
        {
          label: "Größter sichtbarer Inhalt mobil · LCP",
          before: "4,9 s",
          after: "2,6 s",
        },
        {
          label: "Performance Desktop · Punkte / 100",
          before: "99",
          after: "100",
        },
        {
          label: "Technischer SEO-Score · Punkte / 100",
          before: "92",
          after: "100",
        },
      ],
    },
    searchHistory: [{ month: "August 2026", clicks: 133, impressions: 1522 }],
    challenge: {
      title: "Die eigene Domain endlich als eigene Praxiswebsite nutzen",
      body: "Vor Projektstart führte die Praxisdomain auf eine Jimdo-Free-Seite. Viele Leistungen waren schwer zu erfassen, Meta-Beschreibungen fehlten auf 18 von 19 geprüften Seiten und die mobile Startseite lud in der Labormessung langsam. Die Aufgabe war ein eigenständiger, ruhiger Auftritt, der Patientinnen und Patienten schnell zur richtigen Information führt.",
    },
    improvements: [
      {
        title: "Leistungen neu geordnet",
        body: "Therapieangebote und Privatleistungen erhielten klare, eigenständige Einstiege. Besucher können ihr Anliegen besser einordnen, bevor sie Kontakt aufnehmen.",
      },
      {
        title: "Mobile Kontaktführung",
        body: "Navigation, Leseführung und Kontaktmöglichkeiten wurden für kleine Bildschirme neu aufgebaut. Wichtige Praxisinformationen sind ohne Umwege erreichbar.",
      },
      {
        title: "Technische Grundlage auf eigener Domain",
        body: "Die neue Website läuft seit dem 29. Juli auf der Praxisdomain. Struktur, Metadaten und technische Auslieferung bilden eine saubere Grundlage für die weitere Google-Auswertung.",
      },
    ],
    comparison: {
      before: {
        src: asset("physio-antje-foerster", "before.webp"),
        alt: "Früherer Jimdo-Auftritt der Physiotherapiepraxis mit Hinweis auf die umgezogene Website",
        caption:
          "Früheres Jimdo-Design, aufgenommen am 5. September 2026; der sichtbare Umzugshinweis gehört zur Seite.",
      },
      after: {
        src: asset("physio-antje-foerster", "cover.webp"),
        alt: "Neue Website der Physiotherapiepraxis auf eigener Domain",
        caption: "Aktuelle Praxiswebsite, aufgenommen am 5. September 2026.",
      },
      note: "Der frühere Jimdo-Auftritt und die aktuelle Praxiswebsite wurden am 5. September 2026 mit geschlossenem Cookie-Hinweis aufgenommen.",
    },
    gallery: [
      {
        src: asset("physio-antje-foerster", "mobile.webp"),
        alt: "Mobile Startseite der Physiotherapie Antje Förster mit Kontaktmöglichkeiten",
        caption:
          "Mobile Startseite mit den wichtigsten Kontaktaktionen, aufgenommen am 5. September 2026.",
      },
      {
        src: asset("physio-antje-foerster", "detail.webp"),
        alt: "Kontaktseite der Physiotherapie Antje Förster mit leerem Formular",
        caption:
          "Kontaktseite mit leerem Formular, aufgenommen am 5. September 2026.",
      },
    ],
    timeline: [
      {
        date: "21.07.2026",
        title: "Ausgangslage dokumentiert",
        body: "Die Jimdo-Seite, ihre Inhalte und die mobile Labormessung werden als Nullpunkt archiviert.",
      },
      {
        date: "29.07.2026",
        title: "Neue Praxiswebsite geht live",
        body: "Der neue Auftritt ist auf der eigenen Domain erreichbar.",
      },
      {
        date: "28.08.2026",
        title: "Technischer Messpunkt",
        body: "Der mobile PageSpeed-Performance-Score liegt in der Labormessung bei 96; der gemessene LCP verbessert sich von 4,9 auf 2,6 Sekunden.",
      },
      {
        date: "05.09.2026",
        title: "Erster voller Suchmonat geprüft",
        body: "Für August liegen 133 Klicks und 1.522 Impressionen in der Google Search Console vor.",
      },
    ],
    methodology: [
      "August ist der erste vollständige GSC-Monat. Der Juli enthält nur Daten vom 28. bis 31. Juli und wird deshalb nicht als prozentualer Wachstumsvergleich verwendet.",
      "PageSpeed-Werte sind datierte Labormessungen. Sie beschreiben den jeweiligen Testlauf und keine reale Ladezeit jedes Besuchs.",
      "Aus Suchklicks und Technikwerten lassen sich keine zusätzlichen Patiententermine oder Umsätze ableiten.",
    ],
    outlook:
      "Die weitere Begleitung beobachtet Suchanfragen, relevante Leistungsseiten und die mobile Nutzung über längere Zeiträume. Wirkung auf konkrete Terminvereinbarungen wird erst genannt, wenn sie getrennt und belastbar erfasst ist.",
  },
  {
    slug: "mannis-fahrschule",
    overviewMetricIndexes: [0, 1, 2, 5],
    name: "Mannis Fahrschule",
    industry: "Fahrschule",
    location: "Herrsching & Tutzing",
    title: "Neue Website, klarer Anmeldeweg und 21 Web-Anfragen im August",
    summary:
      "Ein mobiler Webauftritt mit verständlichen Führerscheinklassen, Anfrage-Assistent und digitaler Anmeldung für eine bereits etablierte Fahrschule.",
    standfirst:
      "Mannis Fahrschule war bereits sichtbar. Unsere Aufgabe war, den Weg vom Interesse zur Anfrage einfacher zu machen: mit einer neuen Website, lokalen und fachlichen Einstiegen, einem Anfrage-Assistenten und einer digitalen Anmeldung.",
    website: "https://mannis-fahrschule.com",
    updated: "2026-09-06",
    cover: {
      src: asset("mannis-fahrschule", "cover.webp"),
      alt: "Neue Website von Mannis Fahrschule",
      caption:
        "Aktuelle Startseite mit direktem Anmeldeweg, aufgenommen am 5. September 2026.",
    },
    services: [
      { label: "Webseiten", href: "/leistungen/webseiten" },
      { label: "Google-Sichtbarkeit", href: "/leistungen/google-sichtbarkeit" },
    ],
    metrics: [
      {
        value: "21",
        label: "Web-Anfragen",
        period: "August 2026 · Berichtstand 31.08.2026",
        source: "Monatsbericht · Versandprotokoll, bereinigt um Tests und Spam",
        note: "17 Anmeldeformulare und 4 Kontaktanfragen; keine bestätigten Vertragsabschlüsse.",
      },
      {
        value: "542",
        label: "Google-Klicks",
        period: "01.–31.08.2026",
        source: "Google Search Console · finaler Property-Abruf am 05.09.2026",
      },
      {
        value: "22.149",
        label: "Google-Impressionen",
        period: "01.–31.08.2026",
        source: "Google Search Console · finaler Property-Abruf am 05.09.2026",
      },
      {
        value: "17",
        label: "ausgefüllte Anmeldeformulare",
        period: "August 2026 · Berichtstand 31.08.2026",
        source: "Monatsbericht Mannis Fahrschule",
        note: "Teilmenge der 21 Web-Anfragen, keine bestätigten Fahrschulverträge.",
      },
      {
        value: "4",
        label: "Kontaktanfragen",
        period: "August 2026 · Berichtstand 31.08.2026",
        source: "Monatsbericht Mannis Fahrschule",
        note: "17 Anmeldeformulare + 4 Kontaktanfragen = 21 Web-Anfragen.",
      },
      {
        value: "+348,0 %",
        label: "mehr Google-Impressionen",
        period: "Juli → August 2026",
        source: "Google Search Console · finaler Property-Abruf am 05.09.2026",
        note: "4.944 → 22.149 Einblendungen; beide Monate vollständig. Die Fahrschule hatte vorher bereits Sichtbarkeit.",
      },
    ],
    challenge: {
      title:
        "Aus vorhandener Sichtbarkeit einen verständlichen Anmeldeweg machen",
      body: "Die Fahrschule startete nicht bei null: Sie wurde bereits gesucht und gefunden. Der bisherige Auftritt führte mobile Interessenten jedoch nicht klar durch Führerscheinklassen, Voraussetzungen und nächste Schritte. Die neue Website sollte Informationen ordnen und Anfragen einfacher erfassbar machen.",
    },
    improvements: [
      {
        title: "Führerscheinklassen verständlich erklärt",
        body: "Eigene Angebotsseiten beantworten die wichtigsten Fragen je Führerscheinklasse und verbinden fachliche Information mit einem klaren nächsten Schritt.",
      },
      {
        title: "Assistent und digitale Anmeldung",
        body: "Ein geführter Einstieg hilft bei der Auswahl des passenden Angebots. Das Anmeldeformular übermittelt die nötigen Angaben strukturiert an die Fahrschule.",
      },
      {
        title: "Lokale Suche mit belastbarer Messung",
        body: "Die Website ist technisch auf lokale Suchintentionen ausgerichtet. Search Console und ein getrenntes Versandprotokoll messen Suchkontakte und Web-Anfragen als verschiedene Größen.",
      },
    ],
    comparison: {
      before: {
        src: asset("mannis-fahrschule", "before.webp"),
        alt: "Frühere Website von Mannis Fahrschule",
        caption:
          "Archivierte Startseite vom 23. Juni 2026; der damalige Cookie-Zustand ist erhalten.",
      },
      after: {
        src: asset("mannis-fahrschule", "cover.webp"),
        alt: "Neue Website von Mannis Fahrschule nach dem Relaunch",
        caption: "Aktuelle Startseite, aufgenommen am 5. September 2026.",
      },
      note: "Der Vergleich zeigt den dokumentierten Webauftritt vor und nach dem Relaunch; die Fahrschule hatte bereits zuvor Google-Sichtbarkeit.",
    },
    gallery: [
      {
        src: asset("mannis-fahrschule", "mobile.webp"),
        alt: "Mobile Startseite von Mannis Fahrschule mit Kontaktmöglichkeiten",
        caption:
          "Aktuelle mobile Startseite mit Kontaktwegen, aufgenommen am 5. September 2026.",
      },
      {
        src: asset("mannis-fahrschule", "detail.webp"),
        alt: "Erster Schritt des Anmelde-Assistenten von Mannis Fahrschule mit leeren Feldern",
        caption:
          "Erster Schritt der digitalen Anmeldung mit leeren Feldern, aufgenommen am 5. September 2026.",
      },
    ],
    timeline: [
      {
        date: "Juni 2026",
        title: "Früheren Auftritt archiviert",
        body: "Website und mobile Nutzerwege werden als Ausgangslage dokumentiert.",
      },
      {
        date: "28.07.2026",
        title: "Relaunch geht live",
        body: "Neue Website, Führerscheinklassen, Assistent und digitaler Anmeldeweg sind erreichbar.",
      },
      {
        date: "31.08.2026",
        title: "Erster Monatsbericht",
        body: "Der Bericht zählt 21 Web-Anfragen im August, bereinigt um Tests und Spam.",
      },
      {
        date: "04.09.2026",
        title: "Event-Messung erweitert",
        body: "Zusätzliche Interaktionsereignisse sind seit diesem Datum aktiv und bilden eine Grundlage für spätere Auswertungen.",
      },
    ],
    searchHistory: [
      { month: "Juli 2026", clicks: 491, impressions: 4944 },
      { month: "August 2026", clicks: 542, impressions: 22149 },
    ],
    methodology: [
      "Die 21 Web-Anfragen stammen aus dem Augustbericht: 17 Anmeldeformulare plus 4 Kontaktanfragen. Telefon und WhatsApp sind nicht vollständig enthalten.",
      "Die 542 Klicks und 22.149 Impressionen sind finale, vollständige Augustwerte auf GSC-Property-Ebene.",
      "Web-Anfragen werden nicht pauschal Google zugerechnet; Formulare sind außerdem keine bestätigten Fahrschüler oder Verträge.",
    ],
    outlook:
      "Ab September lässt sich der Weg durch die Website differenzierter beobachten. Eine gewünschte Schnittstelle zum Fahrschulmanager bleibt ein eigener Ausbauschritt und ist im hier beschriebenen Stand noch nicht umgesetzt.",
  },
  {
    slug: "formazin",
    name: "Formazin & Partner",
    industry: "Architektur, Ingenieurwesen & Energieberatung",
    location: "Berlin & Brandenburg",
    title: "Vom neuen Webauftritt zum gezielten Ausbau der Energieberatung",
    summary:
      "Zuerst hat MyHiwi die komplette Website für Dr.-Ing. Formazin & Partner aufgebaut und veröffentlicht. Danach wurde die Energieberatung als eigenes Angebot mit passenden Anfragewegen ausgebaut.",
    standfirst:
      "Am Anfang stand die komplette Website: MyHiwi hat den neuen Webauftritt für Dr.-Ing. Formazin & Partner aufgebaut und gelauncht. Er stellt das Büro, seine Leistungen und realisierten Projekte vor und macht den Kontakt erreichbar. Auf dieser Grundlage folgte der nächste Schritt: die Energieberatung als gezielt ausgebautes Angebot mit eigenen Leistungsseiten und einem konkreten Weg zur Anfrage.",
    website: "https://www.formazin-partner.de",
    updated: "2026-09-07",
    cover: {
      src: asset("formazin", "2026-09-07-gesamtprojekt/cover.webp"),
      alt: "Startseite der von MyHiwi aufgebauten Formazin-Website mit Projektfoto, Büronavigation und Leistungsbereichen",
      caption:
        "Der gesamte Büroauftritt als Grundlage: öffentliche Startseite von Formazin & Partner, aufgenommen am 7. September 2026.",
    },
    services: [
      { label: "Webseiten", href: "/leistungen/webseiten" },
      { label: "Google-Sichtbarkeit", href: "/leistungen/google-sichtbarkeit" },
    ],
    metrics: [
      {
        value: "Live",
        label: "vollständig neu aufgebaute Website",
        period: "Projektstand · 07.09.2026",
        source: "Öffentliche Website auf www.formazin-partner.de",
        note: "Startseite, Bürovorstellung, Leistungen, Projektportfolio und Kontakt bilden den gemeinsamen Webauftritt.",
      },
      {
        value: "Filterbar",
        label: "Projektportfolio mit Detailseiten",
        period: "Öffentlicher Stand · 07.09.2026",
        source: "formazin-partner.de/projekte",
        note: "Referenzen lassen sich nach Neubau, Sanierung sowie öffentlichen und privaten Projekten auswählen.",
      },
      {
        value: "Erweitert",
        label: "Energieberatung mit eigenem Anfrageweg",
        period: "Ausbau der bestehenden Website · 2026",
        source: "Öffentliche Energieübersicht und Anfrage-Einstiege",
        note: "Fünf Energie-Leistungen sowie eigene Einstiege für private Wohnhäuser und größere Vorhaben.",
      },
      {
        value: "Offen",
        label: "gemessene Anfragen und Geschäftswirkung",
        period: "Einordnung · 07.09.2026",
        source: "Für diese Darstellung kein belastbarer Wirkungsnachweis",
        note: "Der gebaute Anfrageprozess belegt keine Anzahl von Anfragen, Aufträgen oder Umsätzen.",
      },
    ],
    comparison: {
      eyebrow: "Projektentwicklung",
      title: "Erst die Website. Dann das konkrete Angebot.",
      beforeLabel: "Grundlage: der komplette Webauftritt",
      afterLabel: "Ausbau: Energieberatung anfragbar machen",
      before: {
        src: asset("formazin", "2026-09-07-gesamtprojekt/cover.webp"),
        alt: "Gesamtwebsite von Formazin & Partner mit Startseite und Zugang zu Leistungen, Projekten, Büro und Kontakt",
        caption: "Die Startseite steht für den vollständigen Büroauftritt. Aufnahme des heutigen Stands vom 7. September 2026.",
      },
      after: {
        src: asset("formazin", "2026-09-07/cover.webp"),
        alt: "Später ergänzter Energieberatungsbereich mit erklärender Infografik und Einstiegen für private und größere Vorhaben",
        caption: "Die Energieberatung wurde auf der bestehenden Website ausgebaut. Aufnahme des heutigen Stands vom 7. September 2026.",
      },
      note: "Die Entwicklung verlief vom vollständigen Website-Neubau zum gezielten Ausbau einer Leistung. Beide Bilder zeigen die heute veröffentlichte Website. Sie sind keine historischen Vorher-Nachher-Aufnahmen und kein Nachweis zusätzlicher Anfragen.",
    },
    challenge: {
      title: "Zuerst brauchte das Büro einen vollständigen Webauftritt",
      body: "Die erste Aufgabe war, das Architektur- und Ingenieurbüro als Ganzes online darzustellen: seine Arbeitsweise, Leistungen, Ansprechpartner und realisierten Bauvorhaben. MyHiwi hat dafür die komplette Website neu aufgebaut und veröffentlicht. Erst auf dieser Grundlage wurde die Energieberatung als weiterer Ansatzpunkt ausgewählt. Ziel des zusätzlichen Ausbaus war, das vorhandene Fachangebot für konkrete Vorhaben verständlich und direkt anfragbar zu machen.",
    },
    improvements: [
      {
        title: "Ein zusammenhängender Büroauftritt",
        body: "Startseite, Über uns, Leistungen, Projekte und Kontakt bilden eine gemeinsame Website. Große echte Projektfotos geben einen Einblick in die Arbeit. Leistungsseiten erläutern Aufgaben und Abläufe und verweisen auf passende Referenzen. Telefon, E-Mail und ein allgemeines Kontaktformular sind erreichbar.",
      },
      {
        title: "Referenzen, die sich gezielt erkunden lassen",
        body: "Im Portfolio filtern Besucher nach Neubau, Sanierung sowie öffentlichen oder privaten Projekten. Eigene Projektseiten zeigen Fotos, Beschreibungen und Eckdaten wie Ort, Zeitraum und Leistungen. Verwandte Projekte führen weiter durch die Arbeit des Büros.",
      },
      {
        title: "Eine technische Grundlage für den weiteren Ausbau",
        body: "Die Website passt Navigation und Darstellung an Desktop und Smartphone an. Projekt- und Leistungsseiten haben eigene Adressen, Seitentitel und kanonische URLs. Strukturierte Angaben zu Büro, Leistungen und Seitenhierarchie sowie eine Sitemap helfen Suchmaschinen, die Inhalte einzuordnen. Bilder werden in zur Darstellung passenden Größen ausgeliefert.",
      },
      {
        title: "Energieberatung als nächster Entwicklungsschritt",
        body: "Nach dem Website-Launch wurde die Energieberatung gezielt ausgebaut. Eine kompakte Übersicht, fünf Leistungsbereiche und regionale Einstiege erklären das Angebot. Eine verlinkte Infografik führt von der Planung über Förderfragen bis zur Begleitung der Umsetzung. Die Inhalte nutzen die bereits vorhandenen Projekte und Kontaktmöglichkeiten des Büros.",
      },
      {
        title: "Vom Leistungsinteresse zur strukturierten Anfrage",
        body: "Private Wohnhäuser und größere Vorhaben erhalten passende Einstiege. Der Anfrageprozess fragt schrittweise nach Anliegen, Gebäude, Rahmenbedingungen und Kontaktdaten. Auswahl und bereits bekannte Angaben bestimmen die folgenden Fragen. Damit ist ein konkreter Prozess gebaut. Wie oft daraus passende Anfragen oder Aufträge entstehen, ist hier noch nicht belegt.",
      },
      {
        title: "Inhalte und Bilder gemeinsam weiterentwickelt",
        body: "Im September wurden Leistungen, Kontaktführung und Energieübersicht weiter überarbeitet. Die Energieberatung zeigt sachliche Erklärgrafiken, echte Ansprechpartner und Bilder aus dem Projektportfolio. Die aktuellen Aufnahmen dokumentieren diesen veröffentlichten Stand.",
      },
    ],
    gallery: [
      {
        src: asset("formazin", "2026-09-07-gesamtprojekt/mobile.webp"),
        alt: "Mobile Startseite der vollständigen Formazin-Website mit Projektfoto und Zugängen zu den Leistungen",
        caption: "Der Büroauftritt auf dem Smartphone. Öffentliche Startseite vom 7. September 2026.",
      },
      {
        src: asset("formazin", "2026-09-07/detail.webp"),
        alt: "Leistungsübersicht der Formazin-Website mit Architekturtext und echtem Projektfoto der Grundschule Lindenberg",
        caption: "Leistungen und echte Referenzen sind miteinander verbunden. Öffentliche Leistungsübersicht vom 7. September 2026.",
      },
    ],
    timeline: [
      {
        date: "Zuerst · 2026",
        title: "Komplette Website aufgebaut und gelauncht",
        body: "MyHiwi baut den neuen Webauftritt für das gesamte Büro: mit Leistungen, Projekten, Bürovorstellung und Kontakt. Damit steht die Grundlage für die weitere Entwicklung.",
      },
      {
        date: "Danach · 2026",
        title: "Energieberatung als gezielten Ausbau ausgewählt",
        body: "Ein vorhandenes Fachangebot wird als nächster Ansatzpunkt aufgegriffen. Ziel ist eine klare Darstellung für passende Zielgruppen und ein konkreter Weg vom Interesse zur Anfrage.",
      },
      {
        date: "Ausbau · 2026",
        title: "Leistungsinhalte und Anfrageprozess ergänzt",
        body: "Auf der bestehenden Website entstehen der Energieberatungsbereich, vertiefende Leistungs- und Ortsseiten sowie passende Anfrage-Einstiege für private und größere Vorhaben.",
      },
      {
        date: "September 2026",
        title: "Den veröffentlichten Auftritt weiter verfeinert",
        body: "Leistungsinhalte, Erklärgrafiken, Projektbilder und Kontaktführung werden überarbeitet. Die Aufnahmen vom 7. September zeigen diesen aktuellen Stand des Gesamtprojekts.",
      },
    ],
    methodology: [
      "Die Projektfolge beschreibt den vollständigen Website-Neubau mit Launch und den anschließenden Ausbau der Energieberatung. Alle Screenshots stammen von der öffentlichen Website am 7. September 2026. Sie zeigen heutige Ansichten, keine nachgestellten früheren Website-Stände.",
      "Portfoliofilter, Projektseiten, mobile Navigation, Leistungsdarstellung und Anfrage-Einstiege sind öffentlich prüfbare Funktionen. Technische Angaben beziehen sich auf vorhandene Seitenadressen, Metadaten, strukturierte Daten, Sitemap und Bildauslieferung. Daraus wird kein pauschaler Performance- oder Rankingvorteil abgeleitet.",
      "Die fünf Energie-Leistungen und die unterschiedlichen Anfrage-Einstiege beschreiben den gebauten Umfang. Der Anfrageprozess ist kein Nachweis tatsächlich eingegangener Anfragen. Bei der Prüfung wurden keine Formulare versendet.",
      "Für qualifizierte Anfragen, Aufträge, Umsatz und Suchwirkung liegt hier kein belastbarer Wirkungsnachweis vor. Diese Ergebnisse bleiben offen. Frühere Suchwerte werden nicht als aktuelle Wirkung des Ausbaus dargestellt.",
    ],
    outlook:
      "Der nächste Maßstab ist die Nutzung: Welche Leistungen werden gefunden, welche Anfragewege werden abgeschlossen und welche Vorhaben passen zum Büro? Erst belastbare Beobachtungen und Rückmeldungen können zeigen, ob der gezielte Ausbau der Energieberatung auch wirtschaftlich trägt.",
  },
  {
    slug: "mr-sherman",
    overviewMetricIndexes: [5, 2, 3, 0],
    name: "Mr. Sherman",
    industry: "Tanzstudio & Plattform",
    location: "Berlin",
    title: "Website und eigene Plattform für den Studioalltag",
    summary:
      "Öffentlicher Webauftritt und vier rollenbezogene Arbeitsbereiche verbinden Interesse, Rückruf, Termin, Buchung und Verwaltung.",
    standfirst:
      "Für Mr. Sherman greifen Website und Plattform ineinander. Mitglieder, Trainer, Leadcaller und Verwaltung erhalten jeweils die Werkzeuge für ihre tägliche Aufgabe – von der ersten Anfrage bis zur Buchungs- und Zahlungsstrecke.",
    website: "https://mr-sherman.de",
    updated: "2026-09-06",
    cover: {
      src: asset("mr-sherman", "cover.webp"),
      alt: "Aktuelle öffentliche Startseite von Mr. Sherman",
      caption: "Öffentliche Startseite, aufgenommen am 5. September 2026.",
    },
    services: [
      { label: "Webseiten", href: "/leistungen/webseiten" },
      { label: "Google-Sichtbarkeit", href: "/leistungen/google-sichtbarkeit" },
    ],
    metrics: [
      {
        value: "4",
        label: "Arbeitsbereiche",
        period: "Stand 05.09.2026",
        source: "Portal, Trainer, Leadcaller und Admin im aktuellen System",
      },
      {
        value: "22",
        label: "Sichtbarkeitsseiten neu gestaltet",
        period: "Juli 2026",
        source: "Dokumentierter Veröffentlichungsstand der Website",
      },
      {
        value: "232",
        label: "Google-Klicks",
        period: "01.–31.08.2026",
        source: "Google Search Console · finaler Property-Abruf am 05.09.2026",
        note: "Website-Wert; keine Aussage zu Plattformbuchungen oder Zahlungen.",
      },
      {
        value: "25.715",
        label: "Google-Impressionen",
        period: "01.–31.08.2026",
        source: "Google Search Console · finaler Property-Abruf am 05.09.2026",
        note: "Einblendungen der Website in der Websuche.",
      },
      {
        value: "+17,2 %",
        label: "mehr Google-Klicks",
        period: "Juli → August 2026",
        source: "Google Search Console · finaler Property-Abruf am 05.09.2026",
        note: "198 → 232 Klicks, vollständige Kalendermonate.",
      },
      {
        value: "38",
        label: "Meta-Leads im Kampagnenreport",
        period: "30.07.–30.08.2026 · Abruf 05.09.2026",
        source: "Meta Marketing API · Kampagnenexport",
        note: "Meta-attribuierte Leads, keine bestätigten Mitglieder, Zahlungen oder Google-Anfragen.",
      },
    ],
    metricGroups: [
      {
        title: "Meta-Kampagne: Reichweite und Anfragen",
        description:
          "Separater Werbe-Datensatz vom 30.07.–30.08.2026, abgerufen am 05.09. Die Auslieferung in diesem Zeitraum lag am 30.07.–10.08. Meta-Attribution: 7 Tage Klick / 1 Tag Ansicht; nachträgliche Zuordnungen sind möglich. Diese Werte werden nicht mit Google-Klicks oder Plattformbuchungen addiert.",
        metrics: [
          {
            value: "38",
            label: "Meta-attribuierte Leads",
            period: "30.07.–30.08.2026",
            source: "Meta Marketing API · Kampagnenexport",
            note: "Gemeldete Lead-Aktionen, keine abgeschlossenen Mitgliedschaften.",
          },
          {
            value: "447",
            label: "Link-Klicks auf Anzeigen",
            period: "30.07.–30.08.2026",
            source: "Meta Marketing API · Kampagnenexport",
            note: "Link-Klicks sind nicht gleich Landingpage-Aufrufe oder einzelne Personen.",
          },
          {
            value: "24.839",
            label: "Anzeigen-Impressionen",
            period: "30.07.–30.08.2026",
            source: "Meta Marketing API · Kampagnenexport",
          },
          {
            value: "11.871",
            label: "erreichte Personen laut Meta",
            period: "30.07.–30.08.2026",
            source: "Meta Marketing API · Kampagnenexport",
            note: "Reichweite innerhalb dieses Berichtsfensters; nicht mit Google-Impressionen addieren.",
          },
          {
            value: "1,80 %",
            label: "Link-Klickrate",
            period: "30.07.–30.08.2026",
            source: "Meta Marketing API · Kampagnenexport",
            note: "447 Link-Klicks / 24.839 Impressionen.",
          },
          {
            value: "11,77 €",
            label: "Werbekosten je Meta-Lead",
            period: "30.07.–30.08.2026",
            source: "Meta Marketing API · Kampagnenexport",
            note: "447,31 € Anzeigenkosten / 38 Leads. Reine Werbekosten, keine Kosten pro Neukunde.",
          },
        ],
      },
    ],
    challenge: {
      title: "Viele Rollen in einen nachvollziehbaren Ablauf bringen",
      body: "Ein Tanzstudio bearbeitet öffentliche Angebote, Interessenten, Probetrainings, Termine, Stundenkonten und Zahlungen. Die Aufgabe war, diese Arbeit nicht in einer einzigen überladenen Ansicht abzubilden, sondern jedem Teammitglied einen klaren Bereich im gemeinsamen System zu geben.",
    },
    improvements: [
      {
        title: "Portal für Mitglieder",
        body: "Das Portal bündelt die für Kundinnen und Kunden relevanten Schritte und verbindet Buchung und Mitgliedschaft mit dem Studioangebot.",
      },
      {
        title: "Trainerbereich für den Terminalltag",
        body: "Trainer können Check-in, Quick-Book, Kundenanlage und Stundenkonto in einem Ablauf bearbeiten. Buchungsbestätigungen stehen auf Deutsch und Englisch bereit und enthalten eine Kalenderdatei.",
      },
      {
        title: "Leadcaller und Admin für die Bearbeitung",
        body: "Rückrufzeit-Filter, Termin- und Zahlungslink-Vorschau unterstützen die Bearbeitung neuer Interessenten. Die Verwaltung behält Vorgänge und Systemzustände in einer eigenen Ansicht im Blick.",
      },
      {
        title: "Buchungs- und Zahlungsstrecke",
        body: "Ein öffentlicher Demo-Weg zeigt, wie Interessenten einen Termin auswählen, ihre Angaben eintragen und den nächsten Schritt zur Zahlung erreichen.",
      },
    ],
    gallery: [
      {
        src: asset("mr-sherman", "mobile.webp"),
        alt: "Öffentliche Startseite von Mr. Sherman in der mobilen Ansicht",
        caption:
          "Öffentliche Startseite im Smartphone-Format, aufgenommen am 5. September 2026.",
      },
      {
        src: asset("mr-sherman", "detail.webp"),
        alt: "Öffentliche Demo für den Buchungs- und Zahlungslink von Mr. Sherman",
        caption:
          "Öffentliche Buchungsdemo mit leeren Feldern, aufgenommen am 5. September 2026.",
      },
    ],
    roleViews: [
      {
        src: asset("mr-sherman", "role-member.webp"),
        alt: "Demoansicht des Mitgliederbereichs der Sherman-Plattform",
        caption: "Mitgliederbereich · Demo vom 16. Juli 2026.",
      },
      {
        src: asset("mr-sherman", "role-trainer.webp"),
        alt: "Demoansicht des Trainerbereichs der Sherman-Plattform",
        caption: "Trainerbereich · Demo vom 13. Juli 2026.",
      },
      {
        src: asset("mr-sherman", "role-leadcaller.webp"),
        alt: "Demoansicht der Rückrufbearbeitung in der Sherman-Plattform",
        caption: "Rückrufbearbeitung · Demo vom 13. Juli 2026.",
      },
      {
        src: asset("mr-sherman", "role-admin.webp"),
        alt: "Demoansicht des Verwaltungsbereichs der Sherman-Plattform",
        caption: "Verwaltung · Demo vom 12. Juli 2026.",
      },
    ],
    timeline: [
      {
        date: "Juli 2026",
        title: "Website und Trainerablauf ausgebaut",
        body: "22 Sichtbarkeitsseiten erhalten ein neues Design; im Trainerbereich stehen zweisprachige Buchungsbestätigungen bereit.",
      },
      {
        date: "04.09.2026",
        title: "Rückruf- und Zahlungsweg aktualisiert",
        body: "Rückrufzeit-Filter sowie Vorschauen für Termin und Zahlungslink erleichtern den nächsten Schritt vom Kontakt zur Buchung.",
      },
      {
        date: "05.09.2026",
        title: "Begrüßungsmail aktiviert",
        body: "Neue Meta-Leads erhalten eine automatisierte transaktionale Bestätigung mit nächsten Schritten.",
      },
      {
        date: "Stand 05.09.2026",
        title: "Vier Bereiche im gemeinsamen System",
        body: "Portal, Trainer, Leadcaller und Admin sind im aktuellen Projektstand vorhanden; größere weitere Ablaufverbesserungen bleiben in Arbeit.",
      },
    ],
    searchHistory: [
      { month: "Juli 2026", clicks: 198, impressions: 25025 },
      { month: "August 2026", clicks: 232, impressions: 25715 },
    ],
    methodology: [
      "Vier Arbeitsbereiche, Website-Seiten und datierte Funktionen sind als vorhandener Liefer- beziehungsweise Live-Stand belegt.",
      "Der Klicktest der Zahlungsstrecke belegt Erreichbarkeit und Funktion im geprüften Ablauf, keine bezahlten Transaktionen oder Umsatzsteigerung.",
      "Google-Klicks betreffen die öffentliche Website. Plattformnutzung, Leads, Buchungen und Zahlungen werden daraus nicht abgeleitet.",
    ],
    outlook:
      "Als Nächstes sollen die tatsächlichen Übergänge von Anfrage, Rückruf und Probetraining bis zur Buchung getrennt messbar werden. Laufende Erweiterungen werden erst nach ihrem eigenen Live- und Nutzungsnachweis ergänzt.",
  },
];

export function getCaseStudy(slug: string): CaseStudy {
  const caseStudy = CASE_STUDIES.find((entry) => entry.slug === slug);

  if (!caseStudy) {
    throw new Error(`Unknown case study: ${slug}`);
  }

  return caseStudy;
}
