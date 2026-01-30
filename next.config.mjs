import nextra from 'nextra';

const withNextra = nextra({});

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  env: {
    trackerId: process.env.TRACKER_ID || '',
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/docs/:path((?!api|guides|cloud|changelog).*)',
        destination: '/docs/:path*',
      },
    ];
  },
  async redirects() {
    return [{ source: '/', destination: '/docs', permanent: true }];
  },
};

export default withNextra(config);
