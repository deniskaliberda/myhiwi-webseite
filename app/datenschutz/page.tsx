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
    <main className="min-h-screen bg-white pt-32 pb-20 text-slate-900">
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
              MyHiwi UG (haftungsbeschränkt)<br />
              Denis Kaliberda<br />
              Dorfstraße 1a<br />
              16356 Ahrensfelde<br />
              Telefon: +49 1511 4093066<br />
              E-Mail: kontakt@myhiwi.de
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
              entfällt — spätestens 6 Monate nach Abschluss, sofern keine gesetzlichen
              Aufbewahrungspflichten (z.B. § 257 HGB, § 147 AO — bis zu 10 Jahre bei steuerlich
              relevanter Korrespondenz) entgegenstehen. Sie können Ihre Einwilligung jederzeit
              widerrufen.
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
              6. Ihre Rechte
            </h2>
            <p className="text-slate-700 mb-4">
              Sie haben jederzeit das Recht:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li>auf Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten</li>
              <li>auf Berichtigung unrichtiger personenbezogener Daten</li>
              <li>auf Löschung Ihrer bei uns gespeicherten Daten</li>
              <li>auf Einschränkung der Datenverarbeitung</li>
              <li>auf Datenübertragbarkeit</li>
              <li>auf Widerspruch gegen die Verarbeitung</li>
              <li>auf Beschwerde bei der zuständigen Aufsichtsbehörde</li>
            </ul>
          </div>

        </div>
      </div>
    </main>
  );
}
