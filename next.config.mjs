/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dev-cleardigital.pantheonsite.io',
        port: '', // No need to define port if it's the default (80 for http or 443 for https)
        pathname: '/app/uploads/**', // Adjust the path to match your image structure
      },
    ],
  },
};

export default nextConfig;
