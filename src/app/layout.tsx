import Script from 'next/script';
import '@/app/global.css';
import { Banner, Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import { Inter } from 'next/font/google';
import 'nextra-theme-docs/style.css';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata = {
  title: {
    default: 'Umami Documentation',
    template: '%s - Umami',
  },
  description: 'Documentation for Umami Analytics',
};

const navbar = (
  <Navbar
    logo={
      <span style={{ fontWeight: 700, fontSize: '1.2rem' }}>
        Umami
      </span>
    }
    projectLink="https://github.com/umami-software/umami"
  />
);

const footer = <Footer>MIT {new Date().getFullYear()} Umami Software, Inc.</Footer>;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
      <body>
        <Layout
          navbar={navbar}
          footer={footer}
          editLink="Edit this page on GitHub"
          docsRepositoryBase="https://github.com/umami-software/docs/tree/master/content"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={await getPageMap()}
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
