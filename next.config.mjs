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
        source: '/',
        destination: '/docs',
      },
      {
        source: '/:path((?!docs|api|guides|cloud|_next|favicon|og|llms).*)',
        destination: '/docs/:path*',
      },
    ];
  },
};

export default withNextra(config);
