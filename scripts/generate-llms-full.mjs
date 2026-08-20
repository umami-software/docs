import fs from 'node:fs/promises';
import path from 'node:path';

const clientDir = path.resolve('dist/client');
const outputFile = path.join(clientDir, 'llms-full.txt');

async function findMarkdownFiles(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(entry => {
      const target = path.join(directory, entry.name);
      return entry.isDirectory()
        ? findMarkdownFiles(target)
        : Promise.resolve(entry.name.endsWith('.md') ? [target] : []);
    }),
  );

  return files.flat();
}

function pageUrl(file) {
  const relative = path.relative(clientDir, file).replaceAll(path.sep, '/');
  const slug = relative.replace(/\.md$/, '').replace(/\/index$/, '');
  return `/${slug}`;
}

function withoutFrontmatter(markdown) {
  return markdown.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '').trim();
}

const files = (await findMarkdownFiles(clientDir)).sort();
const pages = await Promise.all(
  files.map(async file => `${withoutFrontmatter(await fs.readFile(file, 'utf8'))}\n\nSource: ${pageUrl(file)}`),
);

await fs.writeFile(outputFile, `${pages.join('\n\n')}\n`);
