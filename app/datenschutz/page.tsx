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
    <main className="min-h-screen pt-32 pb-20">
      <div className="container-custom max-w-4xl">
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
              erfasst werden, werden auf den Servern des Hosters gespeichert.
            </p>
            <p className="text-slate-700">
              <strong>Hosting-Provider:</strong> Vercel Inc.<br />
              340 S Lemon Ave #4133, Walnut, CA 91789, USA
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
            <p className="text-slate-700">
              MyHiwi UG (haftungsbeschränkt)<br />
              Denis Kaliberda<br />
              Dorfstraße 1a<br />
              16356 Ahrensfelde<br />
              E-Mail: kontakt@myhiwi.de
            </p>
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
          </div>

          <div className="card mb-8">
            <h2 className="text-2xl font-inter font-bold text-primary mb-4">
              5. Analyse-Tools und Tools von Drittanbietern
            </h2>
            
            <h3 className="text-xl font-inter font-bold text-primary mb-3 mt-6">
              Calendly (Terminbuchung)
            </h3>
            <p className="text-slate-700 mb-4">
              Diese Website nutzt Calendly für die Terminbuchung. Anbieter ist Calendly LLC, 
              271 17th St NW, Atlanta, GA 30363, USA.
            </p>
            <p className="text-slate-700">
              Wenn Sie einen Termin über Calendly buchen, werden Ihre eingegebenen Daten 
              (Name, E-Mail, etc.) auf den Servern von Calendly gespeichert. Weitere Informationen 
              finden Sie in der Datenschutzerklärung von Calendly: 
              <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline ml-1">
                https://calendly.com/privacy
              </a>
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
