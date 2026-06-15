import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle,
  Star,
  MessageCircle,
  Smartphone,
  Search,
  MapPin,
  Image as ImageIcon,
} from "lucide-react";
import { BlogArticleShell } from "@/components/myhiwi/blog/BlogArticleShell";

export const metadata: Metadata = {
  title: "Google Business Profil: Warum es für lokale Unternehmen unverzichtbar ist | MyHiwi Blog",
  description:
    "Warum Ihr Google Business Profil das wichtigste Werkzeug für lokale Sichtbarkeit ist — mit konkreten Schritten, wie Sie über Google Maps mehr Kunden gewinnen.",
  keywords: [
    "Google Business Profil",
    "Google Maps SEO",
    "lokale Sichtbarkeit",
    "GBP Optimierung",
    "Local SEO",
  ],
  alternates: {
    canonical: "https://myhiwi.de/blog/google-business-profil",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Google Business Profil: Warum es für lokale Unternehmen unverzichtbar ist",
  datePublished: "2026-02-11",
  author: { "@type": "Person", name: "Denis Kaliberda" },
  publisher: {
    "@type": "Organization",
    name: "Kaliberda Digital Intelligence UG (haftungsbeschränkt)",
    logo: { "@type": "ImageObject", url: "https://myhiwi.de/brand/myhiwi-h-logo.svg" },
  },
  mainEntityOfPage: "https://myhiwi.de/blog/google-business-profil",
};

const profileFactors = [
  {
    icon: CheckCircle,
    title: "Vollständige Informationen",
    desc: "Name, Adresse, Telefonnummer, Öffnungszeiten, Website, Beschreibung, Kategorien — alles korrekt und vollständig. Google bevorzugt vollständige Profile.",
  },
  {
    icon: Star,
    title: "Bewertungen aktiv managen",
    desc: "Bitten Sie zufriedene Kunden um eine Bewertung und antworten Sie auf jede — ob positiv oder negativ. Google sieht aktive Interaktion als positives Signal.",
  },
  {
    icon: ImageIcon,
    title: "Regelmäßig Fotos hochladen",
    desc: "Profile mit aktuellen Fotos bekommen spürbar mehr Anfragen für Wegbeschreibungen und Klicks auf die Website als Profile ohne Bildmaterial.",
  },
  {
    icon: MessageCircle,
    title: "Posts und Updates nutzen",
    desc: "Teilen Sie über die Post-Funktion Angebote, Neuigkeiten oder Tipps — das zeigt Google, dass Ihr Profil aktiv gepflegt wird.",
  },
  {
    icon: Smartphone,
    title: "Korrekte Kategorien wählen",
    desc: "Haupt- und Nebenkategorien bestimmen, bei welchen Suchanfragen Sie erscheinen. Wählen Sie so spezifisch wie möglich.",
  },
];

export default function GoogleBusinessProfilPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <BlogArticleShell
        category="Local SEO"
        date="11. Februar 2026"
        readTime="6 Min."
        title={
          <>
            Google Business Profil: warum es für lokale Betriebe{" "}
            <em className="mh-italic-accent">unverzichtbar</em> ist.
          </>
        }
        lead={
          <>
            Wenn Menschen in Ihrer Nähe nach einer Dienstleistung suchen, ist Ihr Google
            Business Profil oft der <strong>erste Eindruck</strong> — noch bevor jemand
            Ihre Website sieht.
          </>
        }
        ctaTitle={
          <>
            Wie gut ist{" "}
            <em className="mh-italic-accent text-mh-glow">Ihr Profil</em>?
          </>
        }
        ctaLead="In 15 Minuten prüfe ich Ihr Google Business Profil und zeige konkret, wo Potenzial für mehr Sichtbarkeit liegt."
      >
        <section>
          <h2>Was ist das Google Business Profil?</h2>
          <p className="mt-3">
            Das Google Business Profil (früher „Google My Business“) ist ein{" "}
            <strong>kostenloser Eintrag</strong> bei Google, mit dem Unternehmen steuern,
            wie sie in der <strong>Google-Suche</strong> und auf <strong>Google Maps</strong>{" "}
            angezeigt werden.
          </p>
          <p className="mt-3">
            Wenn jemand „Friseur in meiner Nähe“ oder „Steuerberater [Stadt]“ googelt, zeigt
            Google zwei Dinge: die normalen Suchergebnisse <strong>und</strong> eine Karte
            mit lokalen Unternehmen — das sogenannte <strong>Map Pack</strong>. Genau hier
            entscheidet Ihr Profil, ob Kunden Sie finden oder Ihre Konkurrenz.
          </p>
        </section>

        <section>
          <div className="my-6 rounded-mh-lg border border-mh-divider bg-blue-50 p-6 md:p-7">
            <p className="mh-label-mono-sm text-blue-700">Der unsichtbare Hebel</p>
            <p className="mt-3">
              Manche Betriebe haben sogar bessere Bewertungen als die Top-3 im Map Pack —
              werden aber kaum gefunden. Der Grund sind fast immer dieselben drei Dinge:{" "}
              <strong>zu wenige Bewertungen, ein unvollständiges Profil und fehlende
              Pflege</strong>. Wer das löst, steigt.
            </p>
          </div>
        </section>

        <section>
          <h2>Warum das Profil so wichtig ist</h2>
          <p className="mt-3">
            Viele Unternehmer unterschätzen, wie viele Kunden über Google Maps suchen. Viele
            Menschen nutzen <strong>direkt Google Maps</strong>, um lokale Dienstleister zu
            finden — ohne Umweg über die Websuche. Und selbst bei einer normalen Google-Suche
            steht das <strong>Map Pack</strong> prominent ganz oben.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-mh-4 sm:grid-cols-2">
            <div className="rounded-mh-md border border-mh-divider bg-mh-subtle p-mh-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-mh-md bg-mh-accent-soft text-mh-accent">
                <Search className="h-5 w-5" strokeWidth={1.7} aria-hidden="true" />
              </span>
              <p className="mt-mh-3 mh-body-small font-semibold text-mh-text-primary">
                Google-Suche
              </p>
              <p className="mt-mh-1 mh-body-small text-mh-text-secondary">
                Bei lokalen Suchen wie „Friseur [Stadt]“ erscheint Ihr Profil direkt auf der
                Ergebnisseite — mit Bewertungen, Adresse und Fotos.
              </p>
            </div>
            <div className="rounded-mh-md border border-mh-divider bg-mh-subtle p-mh-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-mh-md bg-mh-accent-soft text-mh-accent">
                <MapPin className="h-5 w-5" strokeWidth={1.7} aria-hidden="true" />
              </span>
              <p className="mt-mh-3 mh-body-small font-semibold text-mh-text-primary">
                Google Maps
              </p>
              <p className="mt-mh-1 mh-body-small text-mh-text-secondary">
                In der Maps-App zählt fast ausschließlich Ihr Profil — Ihre Website spielt
                dort kaum eine Rolle.
              </p>
            </div>
          </div>
          <p className="mt-4">
            Ihr Google Business Profil ist damit die <strong>Zentrale</strong> Ihrer lokalen
            Sichtbarkeit. Ohne optimiertes Profil verpassen Sie laufend Anfragen.
          </p>
        </section>

        <section>
          <h2>Was ein gutes Profil ausmacht</h2>
          <p className="mt-3">
            Google bewertet Profile nach <strong>Relevanz</strong> (passt Ihr Angebot zur
            Suche?), <strong>Entfernung</strong> (wie nah ist der Suchende?) und{" "}
            <strong>Bekanntheit</strong> (wie präsent sind Sie online?). Auf den letzten
            Punkt haben Sie den größten Einfluss:
          </p>
          <div className="mt-mh-5 grid gap-mh-3">
            {profileFactors.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-mh-4 rounded-mh-md border border-mh-divider bg-mh-subtle p-mh-4"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-mh-md bg-mh-accent-soft text-mh-accent">
                  <item.icon className="h-[18px] w-[18px]" strokeWidth={1.7} aria-hidden="true" />
                </span>
                <div>
                  <p className="mh-body-small font-semibold text-mh-text-primary">
                    {item.title}
                  </p>
                  <p className="mt-mh-1 mh-body-small text-mh-text-secondary">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Der Einfluss auf Ihr SEO</h2>
          <p className="mt-3">
            Ihr Profil ist nicht nur ein Eintrag — es ist ein{" "}
            <strong>wichtiger Ranking-Faktor</strong> für lokale Suchergebnisse. Ein gut
            gepflegtes Profil verbessert Ihre Sichtbarkeit in der gesamten Google-Suche,
            nicht nur auf Maps.
          </p>
          <p className="mt-3">
            Zusammen mit einer Website, die schnell lädt und sauber strukturiert ist, und der
            Frage, wie ein{" "}
            <Link href="/wissen/lokaler-betrieb-bei-google-gefunden-werden">
              lokaler Betrieb bei Google gefunden wird
            </Link>
            , bildet Ihr Profil die Grundlage für nachhaltige lokale Sichtbarkeit.
          </p>
        </section>

        <section>
          <h2>Fazit: Ihr Profil ist Ihre digitale Visitenkarte</h2>
          <p className="mt-3">
            Ein optimiertes Google Business Profil ist kein „Nice-to-have“ —{" "}
            <strong>es ist die Grundlage</strong> lokaler Online-Sichtbarkeit. Es ist der
            erste Ort, an dem potenzielle Kunden auf Ihr Unternehmen treffen, und oft
            entscheidet es, ob jemand Sie kontaktiert oder zur Konkurrenz geht.
          </p>
          <p className="mt-3">
            Die Optimierung ist kein Hexenwerk — aber sie braucht Konsequenz. Genau das
            übernehme ich.
          </p>
        </section>
      </BlogArticleShell>
    </>
  );
}
