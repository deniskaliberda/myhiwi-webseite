import { MetadataRoute } from "next";
import { CASE_STUDIES } from "@/content/case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://myhiwi.de";

  return [
    ...["webseiten", "google-sichtbarkeit", "ki-sichtbarkeit"].map((slug) => ({
      url: `${baseUrl}/leistungen/${slug}`,
      lastModified: new Date("2026-09-05"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/ueber-mich`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/festpreis`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/fewo-direktbuchung`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...CASE_STUDIES.map((project) => ({
      url: `${baseUrl}/case-studies/${project.slug}`,
      lastModified: new Date(project.updated),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    {
      url: `${baseUrl}/case-studies/villa-gloria`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/google-business-profil`,
      lastModified: new Date("2026-02-11"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/keyword-kannibalisierung`,
      lastModified: new Date("2026-04-24"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/next-js-fuer-lokale-websites`,
      lastModified: new Date("2026-04-24"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/schema-org-fuer-hotels-und-kmu`,
      lastModified: new Date("2026-04-24"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/google-ads-pmax-fuer-kmu`,
      lastModified: new Date("2026-04-24"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/ota-provision-vs-direktbuchung`,
      lastModified: new Date("2026-04-24"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/sichtbarkeitsindex-lesen`,
      lastModified: new Date("2026-04-24"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/wissen`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/wissen/was-kostet-website-handwerker`,
      lastModified: new Date("2026-06-02"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/wissen/lohnt-sich-google-ads-kleine-unternehmen`,
      lastModified: new Date("2026-06-02"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/wissen/brauche-ich-website-oder-google-profil`,
      lastModified: new Date("2026-06-02"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/wissen/was-kostet-booking-com`,
      lastModified: new Date("2026-06-02"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/wissen/was-kostet-seo-monatlich`,
      lastModified: new Date("2026-06-02"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/wissen/lokaler-betrieb-bei-google-gefunden-werden`,
      lastModified: new Date("2026-06-02"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/wissen/eigenes-buchungssystem-vs-booking-com`,
      lastModified: new Date("2026-06-02"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/region/berlin-ost-barnim`,
      lastModified: new Date("2026-06-02"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/loesungen/handwerk`,
      lastModified: new Date("2026-06-02"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/fahrschule`,
      lastModified: new Date("2026-07-03"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/ki-schulung`,
      lastModified: new Date("2026-07-22"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/loesungen/friseur`,
      lastModified: new Date("2026-06-02"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/loesungen/praxis-physio`,
      lastModified: new Date("2026-06-02"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/impressum`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
