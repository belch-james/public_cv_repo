/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/mote/me",
        destination: "/cv",
      },
    ];
  },
};

module.exports = nextConfig;
