/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, //добавил
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'frontend-test-api.yoldi.agency',
        port: '',
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/accounts',
        permanent: true,
      },
    ];
  },

};

export default nextConfig;
