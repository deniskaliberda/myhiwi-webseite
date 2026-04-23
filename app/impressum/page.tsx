import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | MyHiwi",
  description: "Impressum und Angaben gemäß § 5 TMG für MyHiwi - Local SEO & Webdesign für KMU.",
  alternates: {
    canonical: "https://myhiwi.de/impressum",
  },
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-20 text-slate-900">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        <h1 className="mb-8">Impressum</h1>
        
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-inter font-bold text-primary mb-4">
            Angaben gemäß § 5 TMG
          </h2>
          
          <div className="card mb-8">
            <p className="text-lg text-slate-700 mb-2">
              <strong>MyHiwi UG (haftungsbeschränkt)</strong><br />
              Denis Kaliberda
            </p>
            <p className="text-slate-700 mb-4">
              Dorfstraße 1a<br />
              16356 Ahrensfelde<br />
              Deutschland
            </p>
          </div>

          <div className="card mb-8">
            <h3 className="text-xl font-inter font-bold text-primary mb-4">Kontakt</h3>
            <p className="text-slate-700">
              <strong>E-Mail:</strong> <a href="mailto:kontakt@myhiwi.de" className="text-accent hover:underline">kontakt@myhiwi.de</a>
            </p>
          </div>

          <div className="card mb-8">
            <h3 className="text-xl font-inter font-bold text-primary mb-4">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h3>
            <p className="text-slate-700">
              Denis Kaliberda<br />
              Dorfstraße 1a<br />
              16356 Ahrensfelde
            </p>
          </div>

          <div className="card mb-8">
            <h3 className="text-xl font-inter font-bold text-primary mb-4">
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
            <h3 className="text-xl font-inter font-bold text-primary mb-4">
              Verbraucherstreitbeilegung / Universalschlichtungsstelle
            </h3>
            <p className="text-slate-700">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
