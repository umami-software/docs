import { Inter } from 'next/font/google';
import { Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import type { ReactNode } from 'react';
import 'nextra-theme-docs/style.css';
import './global.css';
import type { Metadata } from 'next';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    default: 'Umami Documentation',
    template: '%s - Umami',
  },
  description: 'Documentation for Umami Analytics',
};

const navbar = (
  <Navbar
    logo={<span style={{ fontWeight: 700, fontSize: '1.2rem' }}>Umami</span>}
    projectLink="https://github.com/umami-software/umami"
  />
);

const footer = <Footer>MIT {new Date().getFullYear()} © Umami Software, Inc.</Footer>;

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
      <body className={`${inter.className} ${inter.variable}`}>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/umami-software/umami-docs/tree/master/content"
          footer={footer}
        >
          {children}
        </Layout>
        {process.env.trackerId && (
          <Script defer data-website-id={process.env.trackerId} src="https://umami.is/u.js" />
        )}
      </body>
    </html>
  );
}
