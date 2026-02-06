import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | MyHiwi",
  description: "Impressum und Angaben gemäß § 5 TMG für MyHiwi - Local SEO & Webdesign für KMU.",
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container-custom max-w-4xl">
        <h1 className="mb-8">Impressum</h1>
        
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-poppins font-bold text-primary mb-4">
            Angaben gemäß § 5 TMG
          </h2>
          
          <div className="card mb-8">
            <p className="text-lg text-slate-700 mb-2">
              <strong>MyHiwi</strong><br />
              Denis Kaliberda
            </p>
            <p className="text-slate-700 mb-4">
              [Ihre vollständige Adresse]<br />
              [PLZ] [Stadt]<br />
              Deutschland
            </p>
          </div>

          <div className="card mb-8">
            <h3 className="text-xl font-poppins font-bold text-primary mb-4">Kontakt</h3>
            <p className="text-slate-700">
              <strong>E-Mail:</strong> <a href="mailto:kontakt@myhiwe.de" className="text-accent hover:underline">kontakt@myhiwe.de</a><br />
              <strong>Telefon:</strong> +49 (0) XXX XXXXXXX
            </p>
          </div>

          <div className="card mb-8">
            <h3 className="text-xl font-poppins font-bold text-primary mb-4">Umsatzsteuer-ID</h3>
            <p className="text-slate-700">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              [Ihre USt-IdNr.]
            </p>
          </div>

          <div className="card mb-8">
            <h3 className="text-xl font-poppins font-bold text-primary mb-4">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h3>
            <p className="text-slate-700">
              Denis Kaliberda<br />
              [Ihre Adresse]<br />
              [PLZ] [Stadt]
            </p>
          </div>

          <div className="card mb-8">
            <h3 className="text-xl font-poppins font-bold text-primary mb-4">
              EU-Streitschlichtung
            </h3>
            <p className="text-slate-700">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline ml-1">
                https://ec.europa.eu/consumers/odr/
              </a>.<br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </div>

          <div className="card">
            <h3 className="text-xl font-poppins font-bold text-primary mb-4">
              Verbraucherstreitbeilegung / Universalschlichtungsstelle
            </h3>
            <p className="text-slate-700">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <div className="mt-12 p-6 bg-slate-50 rounded-lg">
            <p className="text-sm text-slate-600">
              <strong>Hinweis:</strong> Bitte ersetzen Sie die Platzhalter-Informationen mit Ihren tatsächlichen Daten, 
              bevor Sie die Website veröffentlichen. Dies ist eine rechtlich vorgeschriebene Seite.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
