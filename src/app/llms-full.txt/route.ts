import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

export const revalidate = false;

function getAllMdxFiles(dir: string): string[] {
  const files: string[] = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      files.push(...getAllMdxFiles(fullPath));
    } else if (item.name.endsWith('.mdx') || item.name.endsWith('.md')) {
      files.push(fullPath);
    }
  }

  return files;
}

function getLLMText(filePath: string): string {
  const content = fs.readFileSync(filePath, 'utf-8');
  const { data, content: body } = matter(content);
  const title = data.title || path.basename(filePath, path.extname(filePath));

  return `# ${title}\n\n${body.trim()}`;
}

export async function GET() {
  const contentDir = path.join(process.cwd(), 'content');
  const mdxFiles = getAllMdxFiles(contentDir);
  const texts = mdxFiles.map(getLLMText);

  return new Response(texts.join('\n\n---\n\n'));
}
