import { readFileSync } from 'fs';
import { writeFileSync } from 'fs-extra';
import { join } from 'path';
import { ArticleIndexes } from '../types';
import { get_article_indexes } from './get_article_indexes';

const article_indexes = get_article_indexes();

const ids = Object.keys(article_indexes);

const dir = 'out';
const host = 'https://banned-historical-archives.github.io';
writeFileSync(
  join(dir, `robot.txt`),
  `# *
User-agent: *
Allow: /

# Host
Host: ${host}

# Sitemaps
Sitemap: ${host}/sitemap-index.xml`,
);

const chunk_size = 4000;
const n = Math.ceil(ids.length / chunk_size);
const now = new Date().toISOString();
for (let i = 0; i < n; i++) {
  const x = ids.slice(i * chunk_size, (i + 1) * chunk_size);
  writeFileSync(
    join(dir, `sitemap-${i}.xml`),
    `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${
  i == 0
    ? `<url><loc>${host}</loc><lastmod>${now}</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
<url><loc>${host}/gallery</loc><lastmod>${now}</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
<url><loc>${host}/music</loc><lastmod>${now}</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
<url><loc>${host}/articles</loc><lastmod>${now}</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>`
    : ''
}
${x
  .map(
    (t) =>
      `<url><loc>${host}/article?id=${t}</loc><lastmod>${now}</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>`,
  )
  .join('\n')}
</urlset>`,
  );
}
writeFileSync(
  join(dir, 'sitemap-index.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   ${new Array(n)
     .fill(0)
     .map(
       (_, i) => `<sitemap>
      <loc>${host}/sitemap-${i}.xml</loc>
      <lastmod>${now}</lastmod>
   </sitemap>`,
     )
     .join('\n')}
</sitemapindex>`,
);
