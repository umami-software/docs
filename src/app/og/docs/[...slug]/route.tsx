import fs from 'node:fs';
import path from 'node:path';
import { notFound } from 'next/navigation';
import { ImageResponse } from 'next/og';
import matter from 'gray-matter';

export const revalidate = false;

function findMdxFile(slugParts: string[]): string | null {
  const contentDir = path.join(process.cwd(), 'content');

  // Try different possible paths
  const possiblePaths = [
    path.join(contentDir, ...slugParts) + '.mdx',
    path.join(contentDir, ...slugParts) + '.md',
    path.join(contentDir, ...slugParts, 'index.mdx'),
    path.join(contentDir, ...slugParts, 'index.md'),
  ];

  for (const p of possiblePaths) {
    if (fs.existsSync(p)) {
      return p;
    }
  }

  return null;
}

function getPageMetadata(filePath: string): { title: string; description?: string } {
  const content = fs.readFileSync(filePath, 'utf-8');
  const { data } = matter(content);
  return {
    title: data.title || 'Umami Documentation',
    description: data.description,
  };
}

type RouteParams = {
  params: Promise<{ slug: string[] }>;
};

export async function GET(_req: Request, { params }: RouteParams) {
  const { slug } = await params;
  // Remove the .png extension from the last segment
  const slugParts = [...slug];
  if (slugParts.length > 0) {
    slugParts[slugParts.length - 1] = slugParts[slugParts.length - 1].replace(/\.png$/, '');
  }

  const filePath = findMdxFile(slugParts);
  if (!filePath) notFound();

  const { title, description } = getPageMetadata(filePath);

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          padding: '80px',
        }}
      >
        <div
          style={{
            fontSize: 32,
            color: '#888',
            marginBottom: 20,
          }}
        >
          Umami Documentation
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: '#fff',
            marginBottom: 20,
            lineHeight: 1.2,
          }}
        >
          {title}
        </div>
        {description && (
          <div
            style={{
              fontSize: 28,
              color: '#888',
              lineHeight: 1.4,
            }}
          >
            {description}
          </div>
        )}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
