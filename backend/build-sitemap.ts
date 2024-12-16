import { readFileSync } from 'fs';
import {writeFileSync} from'fs-extra';
import { join } from 'path';
import { ArticleIndexes } from '../types';

const article_indexes = JSON.parse(
  readFileSync(join(process.cwd(), 'article_indexes.json')).toString(),
) as ArticleIndexes;

const ids = Object.keys(article_indexes);

const dir = 'out';
writeFileSync(join(dir, `robot.txt`), `# *
User-agent: *
Allow: /

# Host
Host: https://banned-historical-archives.github.io

# Sitemaps
Sitemap: https://banned-historical-archives.github.io/sitemap.xml`);

const chunk_size = 4000;
const n = Math.ceil(ids.length / chunk_size);
const now = (new Date()).toISOString();
for (let i = 0; i < n; i++) {
  const x = ids.slice(i * chunk_size, (i + 1) * chunk_size);
  writeFileSync(
    join(dir, `sitemap-${i}.xml`),
    `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${
  i == 0
    ? `<url><loc>https://banned-historical-archives.github.io</loc><lastmod>${now}</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
<url><loc>https://banned-historical-archives.github.io/articles</loc><lastmod>${now}</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
<url><loc>https://banned-historical-archives.github.io/gallery</loc><lastmod>${now}</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
<url><loc>https://banned-historical-archives.github.io/music</loc><lastmod>${now}</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
<url><loc>https://banned-historical-archives.github.io/search</loc><lastmod>${now}</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
<url><loc>https://banned-historical-archives.github.io/articles/1001069083</loc><lastmod>${now}</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>`
    : ''
}
${x
  .map(
    (t) =>
      `<url><loc>https://banned-historical-archives.github.io/article?id=${t}</loc><lastmod>${now}</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>`,
  )
  .join('\n')}
</urlset>`,
  );
}
writeFileSync(join(dir, 'sitemap-index.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   ${(new Array(n)).fill(0).map((_,i)=>`<sitemap>
      <loc>https://banned-historical-archives.github.io/sitemap-${i}.xml</loc>
      <lastmod>${now}</lastmod>
   </sitemap>`).join('\n')}
</sitemapindex>`)