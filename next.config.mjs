import nextra from 'nextra';

const withNextra = nextra({
  defaultShowCopyCode: true,
});

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  env: {
    trackerId: process.env.TRACKER_ID || '',
  },
  images: {
    unoptimized: true,
  },
};

export default withNextra(config);
