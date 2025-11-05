import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import type { ReactNode } from 'react';
import { baseOptions } from '@/lib/layout.shared';
import { source } from '@/lib/source';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      sidebar={{
        banner: <div className="text-fd-muted-foreground">version 2.x</div>,
        tabs: [{ title: 'Umami v2', url: 'https://v2.umami.is/docs' }],
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
