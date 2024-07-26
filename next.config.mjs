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
  }

};

export default nextConfig;
