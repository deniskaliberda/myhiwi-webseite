import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | MyHiwi",
  description: "Datenschutzerklärung gemäß DSGVO für MyHiwi - Local SEO & Webdesign für KMU.",
  alternates: {
    canonical: "https://myhiwi.de/datenschutz",
  },
};

export default function DatenschutzPage() {
  return (
    <main className="legal-doc min-h-screen bg-mh-paper pt-32 pb-24 text-mh-text-secondary">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        <h1 className="mb-8">Datenschutzerklärung</h1>
        
        <div className="prose prose-lg max-w-none">
          <div className="card mb-8">
            <h2 className="text-2xl font-inter font-bold text-primary mb-4">
              1. Datenschutz auf einen Blick
            </h2>
            
            <h3 className="text-xl font-inter font-bold text-primary mb-3 mt-6">
              Allgemeine Hinweise
            </h3>
            <p className="text-slate-700 mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen 
              Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, 
              mit denen Sie persönlich identifiziert werden können.
            </p>

            <h3 className="text-xl font-inter font-bold text-primary mb-3 mt-6">
              Datenerfassung auf dieser Website
            </h3>
            <p className="text-slate-700 mb-4">
              <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
              Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-inter font-bold text-primary mb-4">
              2. Hosting
            </h2>
            <p className="text-slate-700 mb-4">
              Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website
              erfasst werden, werden auf den Servern des Hosters gespeichert. Hierzu zählen technisch
              notwendige Daten zur Auslieferung der Inhalte (z.B. IP-Adresse, Zeitpunkt des Aufrufs,
              Browser-Informationen).
            </p>
            <p className="text-slate-700 mb-4">
              <strong>Hosting-Provider:</strong> Vercel Inc.<br />
              340 S Lemon Ave #4133, Walnut, CA 91789, USA
            </p>
            <p className="text-slate-700 mb-4">
              <strong>Rechtsgrundlage:</strong> Die Verarbeitung erfolgt auf Grundlage unseres
              berechtigten Interesses an einem zuverlässigen, sicheren und performanten Auftritt
              unserer Website (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
            <p className="text-slate-700">
              <strong>Datenübermittlung in die USA:</strong> Vercel Inc. ist unter dem EU-US Data Privacy
              Framework zertifiziert (Angemessenheitsbeschluss der EU-Kommission vom 10. Juli 2023,
              Beschluss C(2023) 4745). Soweit der Angemessenheitsbeschluss nicht greift, haben wir mit
              Vercel Standardvertragsklauseln (Standard Contractual Clauses, SCCs) gemäß Art. 46 Abs. 2
              lit. c DSGVO abgeschlossen. Datenschutzerklärung von Vercel:&nbsp;
              <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                vercel.com/legal/privacy-policy
              </a>
            </p>
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-inter font-bold text-primary mb-4">
              3. Allgemeine Hinweise und Pflichtinformationen
            </h2>
            
            <h3 className="text-xl font-inter font-bold text-primary mb-3 mt-6">
              Datenschutz
            </h3>
            <p className="text-slate-700 mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
              Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen 
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>

            <h3 className="text-xl font-inter font-bold text-primary mb-3 mt-6">
              Hinweis zur verantwortlichen Stelle
            </h3>
            <p className="text-slate-700 mb-4">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="text-slate-700 mb-4">
              Kaliberda Digital Intelligence UG (haftungsbeschränkt)<br />
              <span className="text-sm text-slate-600">– handelnd unter der Marke „MyHiwi" –</span><br />
              Geschäftsführer: Denis Kaliberda<br />
              Dorfstraße 1a<br />
              16356 Ahrensfelde<br />
              Telefon: +49 1511 4093066<br />
              E-Mail: kontakt@myhiwi.de
            </p>

            <h3 className="text-xl font-inter font-bold text-primary mb-3 mt-6">
              Datenschutzbeauftragter
            </h3>
            <p className="text-slate-700 mb-4">
              Bei MyHiwi ist aufgrund der Unternehmensgröße (unter 20 Personen mit
              regelmäßigem Umgang mit personenbezogenen Daten gemäß § 38 Abs. 1 BDSG)
              kein Datenschutzbeauftragter gesetzlich vorgeschrieben und keiner bestellt.
              Anfragen zu datenschutzrechtlichen Themen können direkt an die im
              Impressum genannten Kontaktdaten gerichtet werden — bevorzugt per E-Mail
              an kontakt@myhiwi.de mit Betreff &bdquo;Datenschutz&ldquo;.
            </p>

            <h3 className="text-xl font-inter font-bold text-primary mb-3 mt-6">
              Rechtsgrundlagen der Verarbeitung
            </h3>
            <p className="text-slate-700 mb-2">
              Sofern wir personenbezogene Daten verarbeiten, geschieht dies auf folgenden
              Rechtsgrundlagen der DSGVO:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-1 mb-4">
              <li>
                <strong>Art. 6 Abs. 1 lit. a DSGVO</strong> (Einwilligung) — z.B. bei optionalen
                Cookies oder bei Anmeldung zu einem Newsletter
              </li>
              <li>
                <strong>Art. 6 Abs. 1 lit. b DSGVO</strong> (Vertragserfüllung / vorvertragliche
                Maßnahmen) — z.B. bei Bearbeitung von Anfragen über das Kontaktformular oder
                Terminbuchungen
              </li>
              <li>
                <strong>Art. 6 Abs. 1 lit. c DSGVO</strong> (rechtliche Verpflichtung) — z.B. bei
                steuerlichen Aufbewahrungspflichten
              </li>
              <li>
                <strong>Art. 6 Abs. 1 lit. f DSGVO</strong> (berechtigtes Interesse) — z.B. bei
                Server-Logfiles zur Sicherheit und Stabilität des Hostings
              </li>
            </ul>
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-inter font-bold text-primary mb-4">
              4. Datenerfassung auf dieser Website
            </h2>
            
            <h3 className="text-xl font-inter font-bold text-primary mb-3 mt-6">
              Kontaktformular
            </h3>
            <p className="text-slate-700 mb-4">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
              Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
              der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
            </p>
            <p className="text-slate-700 mb-4">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen
              auf Anfrage) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an effizienter
              Bearbeitung von Kontaktanfragen).
            </p>
            <p className="text-slate-700 mb-4">
              <strong>Speicherdauer:</strong> Ihre Daten werden bei uns gelöscht, sobald die
              Bearbeitung Ihrer Anfrage endgültig abgeschlossen ist und der Zweck der Speicherung
              entfällt — in der Regel spätestens 36 Monate nach dem letzten Kontakt, sofern keine
              gesetzlichen Aufbewahrungspflichten (z.B. § 257 HGB, § 147 AO — bis zu 10 Jahre bei
              steuerlich relevanter Korrespondenz) entgegenstehen. Sie können Ihre Einwilligung
              jederzeit widerrufen und Löschung verlangen.
            </p>
            <p className="text-slate-700 mb-4">
              <strong>E-Mail-Versand:</strong> Bei Versand über das Kontaktformular wird Ihre
              Anfrage technisch über den E-Mail-Dienstleister Resend (Resend Inc.) an unsere
              Empfangsadresse weitergeleitet. Die Verarbeitung der Formulardaten erfolgt in
              einem Rechenzentrum in der Europäischen Union (Region eu-west-1, Irland). Mit
              Resend besteht ein Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO; soweit im
              Einzelfall eine Übermittlung in die USA erfolgt, geschieht dies auf Grundlage von
              Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO).
              Datenschutzerklärung von Resend:&nbsp;
              <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                resend.com/legal/privacy-policy
              </a>
            </p>

            <h3 className="text-xl font-inter font-bold text-primary mb-3 mt-6">
              Server-Log-Dateien
            </h3>
            <p className="text-slate-700 mb-4">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
              Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc list-inside text-slate-700 mb-4 space-y-1">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="text-slate-700 mb-4">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes
              Interesse besteht in der technisch fehlerfreien Auslieferung der Website sowie der
              Erkennung und Abwehr von Angriffen.
            </p>
            <p className="text-slate-700">
              <strong>Speicherdauer:</strong> Server-Log-Dateien werden in der Regel nach maximal
              30 Tagen anonymisiert oder gelöscht, sofern keine sicherheitsrelevanten Vorfälle eine
              längere Speicherung rechtfertigen.
            </p>
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-inter font-bold text-primary mb-4">
              5. Allgemeine Speicherdauer
            </h2>
            <p className="text-slate-700 mb-4">
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer
              genannt ist, gilt: personenbezogene Daten werden gelöscht, sobald der Zweck der
              Verarbeitung entfällt. Eine längere Speicherung kann dann erfolgen, wenn dies durch
              den Gesetzgeber vorgesehen wurde — insbesondere durch handelsrechtliche
              Aufbewahrungspflichten (§ 257 HGB, in der Regel 6 Jahre) und steuerrechtliche
              Aufbewahrungspflichten (§ 147 AO, in der Regel bis zu 10 Jahre).
            </p>
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-inter font-bold text-primary mb-4">
              6. Cookies und Tracking
            </h2>
            <p className="text-slate-700 mb-4">
              Diese Website setzt <strong>keine optionalen Tracking- oder Werbe-Cookies</strong>
              ein. Es werden weder Google Analytics, Meta-Pixel, LinkedIn-Insight noch
              vergleichbare Tracking-Tools auf myhiwi.de geladen. Lediglich technisch
              notwendige Cookies (z.B. zur Session-Verwaltung) können temporär gesetzt werden;
              diese erfordern keine Einwilligung gemäß § 25 Abs. 2 Nr. 2 TDDDG.
            </p>
            <p className="text-slate-700">
              Sollte sich dies in Zukunft ändern, wird vor dem Einsatz optionaler Cookies
              ein Consent-Banner mit aktiver Einwilligungsmöglichkeit angezeigt und diese
              Datenschutzerklärung entsprechend aktualisiert.
            </p>

            <h3 className="text-xl font-inter font-bold text-primary mb-3 mt-6">
              Schriftarten (lokal eingebunden)
            </h3>
            <p className="text-slate-700">
              Diese Website bindet alle Schriftarten lokal ein (self-hosted über next/font).
              Es werden <strong>keine</strong> Schriften von externen Servern wie Google
              Fonts geladen — Ihre IP-Adresse wird dabei nicht an Dritte übertragen.
            </p>
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-inter font-bold text-primary mb-4">
              7. Eingesetzte Dienstleister (Subunternehmer)
            </h2>
            <p className="text-slate-700 mb-4">
              Für den Betrieb dieser Website setzen wir folgende technische Dienstleister ein,
              die im Rahmen einer Auftragsverarbeitung gemäß Art. 28 DSGVO tätig sind:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 mb-4">
              <li>
                <strong>Vercel Inc.</strong> (USA) — Hosting der Website (siehe Abschnitt 2)
              </li>
              <li>
                <strong>Resend</strong> (Resend Inc.; Verarbeitung in der EU, Region
                Irland) — Versand von Formular-Anfragen (siehe Abschnitt 4)
              </li>
            </ul>
            <p className="text-slate-700">
              Alle Dienstleister wurden auf ihre Datenschutzkonformität geprüft. Mit Anbietern
              außerhalb der EU/EWR bestehen Auftragsverarbeitungsverträge mit
              Standardvertragsklauseln (SCCs) gemäß Art. 46 Abs. 2 lit. c DSGVO, soweit kein
              Angemessenheitsbeschluss (EU-US Data Privacy Framework) anwendbar ist.
            </p>
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-inter font-bold text-primary mb-4">
              8. Ihre Rechte
            </h2>
            <p className="text-slate-700 mb-4">
              Sie haben jederzeit das Recht:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 mb-4">
              <li>auf Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten (Art. 15 DSGVO)</li>
              <li>auf Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO)</li>
              <li>auf Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO)</li>
              <li>auf Einschränkung der Datenverarbeitung (Art. 18 DSGVO)</li>
              <li>auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              <li>auf Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)</li>
              <li>auf Beschwerde bei der zuständigen Aufsichtsbehörde (Art. 77 DSGVO)</li>
            </ul>
            <p className="text-slate-700 mb-2">
              <strong>Zuständige Aufsichtsbehörde:</strong>
            </p>
            <p className="text-slate-700">
              Landesbeauftragte für den Datenschutz und für das Recht auf Akteneinsicht Brandenburg<br />
              Stahnsdorfer Damm 77<br />
              14532 Kleinmachnow<br />
              Telefon: 033203 356-0<br />
              E-Mail: poststelle@lda.brandenburg.de<br />
              Web:&nbsp;
              <a href="https://www.lda.brandenburg.de" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                www.lda.brandenburg.de
              </a>
            </p>
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-inter font-bold text-primary mb-4">
              9. Aktualität und Änderungen dieser Datenschutzerklärung
            </h2>
            <p className="text-slate-700">
              Diese Datenschutzerklärung hat den Stand <strong>Mai 2026</strong>. Durch die
              Weiterentwicklung unserer Website und Angebote oder aufgrund geänderter
              gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden,
              diese Datenschutzerklärung zu ändern. Die jeweils aktuelle Datenschutzerklärung
              kann jederzeit auf dieser Seite abgerufen werden.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
