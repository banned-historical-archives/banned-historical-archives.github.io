const { mkdirSync, existsSync, readFileSync, writeFileSync } = require('fs');
const { join } = require('path');

const dir = join(__dirname, 'articles');
if (!existsSync(dir)){
  mkdirSync(dir);
}

/*
const body = `{OCR补丁}
{
  "articleId": "123",
  "publicationId": "xuanji1",
  "ops": [["replace", 3, "x", "y"], ["delete", 3, "x"], ["insert", 2, 3, "r"]]
}`
*/
const body = process.env.BODY;
const lines = body.split('\n');

if (/{OCR补丁}/.test(lines[0])) {
  const final = {
    COMMIT_HASH: process.env.COMMIT_HASH,
  };
  try {
    const patch = JSON.parse(lines.slice(1).join(''));
    if (
      patch.articleId &&
      patch.publicationId &&
      patch.ops &&
      patch.ops instanceof Array
    ) {
      final.articleId = patch.articleId;
      final.publicationId = patch.publicationId;
      final.ops = [];
      for (const op of patch.ops) {
        if (
          op[0] === 'replace' &&
          op[1] >= 0 &&
          typeof op[2] === 'string' &&
          typeof op[3] === 'string'
        ) {
          final.ops.push([op[0], op[1], op[2], op[3]]);
        } else if (
          op[0] === 'delete' &&
          op[1] >= 0 &&
          typeof op[2] === 'string'
        ) {
          final.ops.push([op[0], op[1], op[2]]);
        } else if (
          op[0] === 'insert' &&
          op[1] >= 0 &&
          op[2] >= 0 &&
          typeof op[3] === 'string'
        ) {
          final.ops.push([op[0], op[1], op[2], op[3]]);
        }
      }
    }
    if (!final.ops.length) {
      return;
    }

    const filepath = join(__dirname, `./articles/[${final.articleId}][${final.publicationId}].ts`);
    let content = `export default function (parserResult: any) {
  const parts = parserResult.parts;
}`;
    if (existsSync(filepath)) {
      content = readFileSync(filepath).toString();
    }
    content = content.split('\n').slice(0, -1).join('\n');
    content +=
      '\n' +
      final.ops
        .map((i) => {
          if (i[0] === 'replace') {
            return `  parts[${i[1]}].text = parts[${i[1]}].text.replace(\`${i[2]}\`, \`${i[3]}\`);`;
          } else if (i[0] === 'delete') {
            return `  parts[${i[1]}].text = parts[${i[1]}].text.replace(\`${i[2]}\`, '');`;
          } else if (i[0] === 'insert') {
            return `  parts[${i[1]}].text = parts[${i[1]}].text.substr(0, ${i[2]}) + \`${i[3]}\` + parts[${i[1]}].text.substr(${i[2]});`;
          }
        })
        .join('\n') +
      '\n}';
    writeFileSync(filepath, content);
    console.log(`preview_url="https://banned-historical-archives.github.io/articles/${final.articleId}?patch=${encodeURIComponent(JSON.stringify(final))}"`);
  } catch (e) {
  }
}
