"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Ist das wirklich ohne Risiko?",
    a: "Ja. Wenn die Website Ihnen nach 3 Monaten nicht gefällt, bekommen Sie Ihr Geld zurück. Sie können nach den 3 Monaten jederzeit aufhören — ohne Kündigung, ohne Frist.",
  },
  {
    q: "Was muss ich dafür tun?",
    a: "Nicht viel. Ein kurzes Gespräch am Anfang, ein paar Infos zu Ihrem Unternehmen (wir schicken Ihnen einen einfachen Fragebogen), und Feedback zum Website-Entwurf. Texte erstellen wir für Sie.",
  },
  {
    q: "Wie schnell ist die Website fertig?",
    a: "In der Regel ist der Entwurf nach 2–3 Wochen fertig. Nach Ihrem Feedback geht die Seite im zweiten Monat online.",
  },
  {
    q: "Brauche ich SEO überhaupt?",
    a: 'Wie finden Ihre Kunden Sie gerade? Wenn die Antwort nicht \u201E\u00FCber Google\u201C ist, lassen Sie wahrscheinlich Auftr\u00E4ge liegen. Wir zeigen Ihnen in 3 Monaten, was m\u00F6glich ist.',
  },
  {
    q: "Ich habe schon eine Website. Lohnt sich das?",
    a: "Oft lohnt sich ein Neustart mehr als Flickwerk an einer veralteten Seite. Wir schauen uns Ihre aktuelle Website an und beraten Sie ehrlich, ob ein Relaunch sinnvoll ist.",
  },
  {
    q: "Was passiert mit meiner Website nach den 3 Monaten?",
    a: "Die Website gehört Ihnen. Sie können sie mitnehmen, bei uns weiter hosten lassen, oder in eines unserer SEO-Pakete übergehen. Die Entscheidung liegt zu 100\u00A0% bei Ihnen.",
  },
  {
    q: "Gibt es versteckte Kosten?",
    a: "Nein. 399\u00A0EUR/Monat, 3 Monate, fertig. Domain-Kosten (ca. 15\u00A0EUR/Jahr) fallen nur an, wenn Sie eine neue Domain brauchen. Alles andere ist inklusive.",
  },
  {
    q: "Für wen ist das Starter-Paket gedacht?",
    a: "Für kleine lokale Unternehmen, die entweder keine Website haben oder deren aktuelle Seite veraltet ist. Handwerker, Restaurants, Praxen, Fahrschulen, Pensionen — wenn Sie lokal gefunden werden wollen, ist das Ihr Einstieg.",
  },
];

export default function StarterFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-shadow hover:shadow-md"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="font-semibold text-primary">{faq.q}</span>
              <ChevronDown
                className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-60" : "max-h-0"
              }`}
            >
              <p className="px-5 pb-4 text-slate-600 leading-relaxed">
                {faq.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
