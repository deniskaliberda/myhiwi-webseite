/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/digital-check",
        destination: "/kontakt",
        permanent: false,
      },
      {
        source: "/leistungen",
        destination: "/",
        permanent: true,
      },
      {
        source: "/seo",
        destination: "/",
        permanent: true,
      },
      {
        source: "/webdesign",
        destination: "/",
        permanent: true,
      },
      {
        source: "/starter",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/sonnenhof-case-study",
        destination: "/case-studies/sonnenhof-herrsching",
        permanent: true,
      },
      {
        // /fahrschule ist seit 2026-07 die kanonische Fahrschul-LP
        // (Web-Konzept 2026-07-03) — die alte Lösungsseite leitet um,
        // damit keine zwei Seiten um dieselbe Suche konkurrieren.
        source: "/loesungen/fahrschule",
        destination: "/fahrschule",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
