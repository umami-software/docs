// Shiso prerenders the root redirect with a trailing slash ("/docs/").
// Strip it so the site is served without trailing slashes everywhere.
import { readFileSync, writeFileSync } from 'node:fs';

const file = 'dist/client/index.html';
const html = readFileSync(file, 'utf8');
// Remove a trailing slash from any quoted path or url= value, e.g. "/docs/" -> "/docs"
const fixed = html.replace(/(\/[^"'\s]+)\/(?=["'])/g, '$1');

if (fixed !== html) {
  writeFileSync(file, fixed);
  console.log('Fixed trailing slash in root redirect.');
}
