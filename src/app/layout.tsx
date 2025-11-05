import Script from 'next/script';
import '@/app/global.css';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
      {process.env.NODE_ENV === 'production' && (
        <Script
          defer
          data-website-id="fba6be18-1e62-4f4c-9e6a-c0b75cccb7ce"
          data-domains="v2.umami.is"
          src="/a/script.js"
        />
      )}
    </html>
  );
}
