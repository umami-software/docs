import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import type { ReactNode } from 'react';
import { baseOptions } from '@/lib/layout.shared';
import { source } from '@/lib/source';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      sidebar={{
        tabs: [{ title: 'v2', url: 'https://v2.umami.is/docs' }],
      }}
      themeSwitch={{
        mode: 'light-dark',
      }}
      {...baseOptions()}
    >
      {children}
    </DocsLayout>
  );
}
