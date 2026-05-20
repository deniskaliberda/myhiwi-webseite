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
    ];
  },
};

module.exports = nextConfig;
