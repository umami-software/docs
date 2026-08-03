import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  assetPrefix: '/docs',
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
    return [
      { source: '/', destination: '/docs', permanent: true },
      // Guide migration: educational guides moved to umami.is/guides (one-hop, permanent).
      {
        source: '/docs/guides/measure-campaigns',
        destination: 'https://umami.is/guides/marketing-campaign-tracking',
        permanent: true,
      },
      {
        source: '/docs/guides/setup-conversion-goals',
        destination: 'https://umami.is/guides/conversion-tracking',
        permanent: true,
      },
      {
        source: '/docs/guides/analyze-traffic-sources',
        destination: 'https://umami.is/guides/marketing-attribution',
        permanent: true,
      },
      {
        source: '/docs/guides/compare-traffic-periods',
        destination: 'https://umami.is/guides/website-traffic-analysis',
        permanent: true,
      },
      {
        source: '/docs/guides/build-a-funnel',
        destination: 'https://umami.is/guides/conversion-funnels',
        permanent: true,
      },
      {
        source: '/docs/guides/monitor-web-vitals',
        destination: 'https://umami.is/guides/core-web-vitals',
        permanent: true,
      },
    ];
  },
};

export default withMDX(config);
