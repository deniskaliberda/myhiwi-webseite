import type { CaseStudy } from "./types";

const asset = (slug: string, file: string) => `/case-studies/${slug}/${file}`;

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "sonnenhof-herrsching",
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
    updated: "2026-09-05",
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
    ],
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
    name: "Mannis Fahrschule",
    industry: "Fahrschule",
    location: "Herrsching & Tutzing",
    title: "Neue Website, klarer Anmeldeweg und 21 Web-Anfragen im August",
    summary:
      "Ein mobiler Webauftritt mit verständlichen Führerscheinklassen, Anfrage-Assistent und digitaler Anmeldung für eine bereits etablierte Fahrschule.",
    standfirst:
      "Mannis Fahrschule war bereits sichtbar. Unsere Aufgabe war, den Weg vom Interesse zur Anfrage einfacher zu machen: mit einer neuen Website, lokalen und fachlichen Einstiegen, einem Anfrage-Assistenten und einer digitalen Anmeldung.",
    website: "https://mannis-fahrschule.com",
    updated: "2026-09-05",
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
    industry: "Ingenieurbüro & Energieberatung",
    location: "Berlin & Brandenburg",
    title:
      "Energieberatung verständlich machen – vom passenden Angebot zur konkreten Anfrage",
    summary:
      "Ein fachlich tiefes Energie-Angebot wird mit Leistungsseiten, regionalen Einstiegen und getrennten Anfragewegen für private und gewerbliche Vorhaben erschlossen.",
    standfirst:
      "Für Formazin entstand zunächst ein neuer Webauftritt. Danach haben wir die Energieberatung als eigenen Themenbereich ausgebaut und im September 2026 neu gestaltet: mit fachlichen Einstiegen, regionalen Seiten und passenden Wegen für private und gewerbliche Anfragen.",
    website: "https://formazin-partner.de",
    updated: "2026-09-05",
    cover: {
      src: asset("formazin", "cover.webp"),
      alt: "Neu gestalteter Energieberatungsbereich von Formazin und Partner",
      caption:
        "Energieberatungs-Hub nach dem Redesign, aufgenommen am 5. September 2026.",
    },
    services: [
      { label: "Webseiten", href: "/leistungen/webseiten" },
      { label: "Google-Sichtbarkeit", href: "/leistungen/google-sichtbarkeit" },
    ],
    metrics: [
      {
        value: "16",
        label: "Energie-Seiten neu gestaltet",
        period: "Redesign live seit 04.09.2026",
        source: "Dokumentierter Projekt- und Veröffentlichungsstand",
      },
      {
        value: "3",
        label: "zielgruppenspezifische Anfragewege",
        period: "live seit 26.08.2026",
        source: "Dokumentierter Funktionsstand",
        note: "Privat- und Gewerbevorhaben erhalten passende Einstiege und Fragen.",
      },
      {
        value: "17",
        label: "Google-Klicks der Domain",
        period: "01.–31.08.2026 · vor dem Redesign",
        source: "Google Search Console · finaler Property-Abruf am 05.09.2026",
        note: "Domainweiter Ausgangswert, nicht nur Energie-Seiten und kein Wirkungsnachweis des September-Redesigns.",
      },
    ],
    challenge: {
      title:
        "Ein komplexes Beratungsangebot nach Vorhaben und Region erschließen",
      body: "Energieberatung umfasst unterschiedliche Gebäude, Förderfragen und Zielgruppen. Ein allgemeiner Kontaktknopf erklärt noch nicht, welche Leistung passt oder welche Angaben das Ingenieurbüro benötigt. Der neue Bereich sollte Fachlichkeit zeigen und zugleich einen klaren Einstieg für private und gewerbliche Vorhaben bieten.",
    },
    improvements: [
      {
        title: "Fachliche und lokale Einstiege",
        body: "Leistungs- und regionale Seiten verbinden konkrete Fragen mit passenden Angeboten und echten, verlinkten Projektbeispielen.",
      },
      {
        title: "Privat oder Gewerbe: passende Fragen",
        body: "Eine sichtbare Weiche führt in zielgruppenspezifische Anfragewege. Das Vorhaben wird strukturiert übermittelt, ohne beide Zielgruppen durch denselben Fragenkatalog zu schicken.",
      },
      {
        title: "Redesign des Energie-Clusters",
        body: "Split-Hero, direkte Funnel-Einstiege, Infografiken, hellere Bildwelten und Projekte auf der Startseite machen das Angebot seit dem 4. September klarer zugänglich.",
      },
    ],
    comparison: {
      before: {
        src: asset("formazin", "before.webp"),
        alt: "Energieberatungs-Hub von Formazin vor dem September-Redesign",
        caption: "Energie-Hub am 28. August 2026, vor dem Redesign.",
      },
      after: {
        src: asset("formazin", "cover.webp"),
        alt: "Energieberatungs-Hub von Formazin nach dem September-Redesign",
        caption: "Live-Ansicht am 5. September 2026 nach dem Redesign.",
      },
      note: "Der Vergleich zeigt zwei Website-Stände. Er ist kein Vorher-Nachher-Beleg für Energieeinsparungen an einem Gebäude.",
    },
    gallery: [
      {
        src: asset("formazin", "mobile.webp"),
        alt: "Energieberatungs-Hub von Formazin in der mobilen Ansicht",
        caption:
          "Energieberatungs-Hub im Smartphone-Format, aufgenommen am 5. September 2026.",
      },
      {
        src: asset("formazin", "detail.webp"),
        alt: "Auswahl zwischen privater und gewerblicher Energieberatungs-Anfrage",
        caption:
          "Anfrage-Einstieg für private und gewerbliche Vorhaben, aufgenommen am 5. September 2026.",
      },
    ],
    timeline: [
      {
        date: "2026",
        title: "Erster Webauftritt",
        body: "Formazin erhält einen neu aufgebauten Webauftritt; es handelt sich nicht um den Relaunch einer früheren vollständigen Website.",
      },
      {
        date: "26.08.2026",
        title: "Anfragewege gehen live",
        body: "Drei zielgruppenspezifische Funnels strukturieren private und gewerbliche Vorhaben.",
      },
      {
        date: "28.08.2026",
        title: "Ausgangsansicht archiviert",
        body: "Der damalige Energie-Hub wird vor der nächsten Gestaltungsstufe dokumentiert.",
      },
      {
        date: "04.09.2026",
        title: "16 Energie-Seiten im neuen Design",
        body: "Der überarbeitete Energie-Auftritt wird veröffentlicht.",
      },
    ],
    methodology: [
      "Die 16 Seiten und drei Anfragewege beschreiben den dokumentierten Liefer- und Live-Stand, keine gemessene Geschäftswirkung.",
      "Die Augustwerte von 17 Klicks und 182 Impressionen betreffen die gesamte Domain und liegen vor dem Redesign vom 4. September.",
      "Suchwirkung, qualifizierte Anfragen und Abschlüsse werden erst nach einem ausreichend langen Beobachtungszeitraum bewertet.",
    ],
    outlook:
      "Nach dem September-Relaunch folgen Indexierungs- und Suchmesspunkte. Erst dann lässt sich beurteilen, welche Leistungsseiten gefunden werden und welche Anfragewege tatsächlich genutzt werden.",
  },
  {
    slug: "mr-sherman",
    name: "Mr. Sherman",
    industry: "Tanzstudio & Plattform",
    location: "Berlin",
    title: "Website und eigene Plattform für den Studioalltag",
    summary:
      "Öffentlicher Webauftritt und vier rollenbezogene Arbeitsbereiche verbinden Interesse, Rückruf, Termin, Buchung und Verwaltung.",
    standfirst:
      "Für Mr. Sherman greifen Website und Plattform ineinander. Mitglieder, Trainer, Leadcaller und Verwaltung erhalten jeweils die Werkzeuge für ihre tägliche Aufgabe – von der ersten Anfrage bis zur Buchungs- und Zahlungsstrecke.",
    website: "https://mr-sherman.de",
    updated: "2026-09-05",
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
