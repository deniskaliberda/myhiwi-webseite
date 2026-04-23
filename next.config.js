/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
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
    ];
  },
};

module.exports = nextConfig;
