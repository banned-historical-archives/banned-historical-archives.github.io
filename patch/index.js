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
  "patch": {
    "parts": {"a": "..."},
    "comments": {"a": "..."},
    "description": ""
  }
}`
*/
let body = process.env.BODY.trim();

if (/^\{OCR补丁\}/.test(body)) {
  body = body.replace(/^\{OCR补丁\}/, '');
  body = body.substr(0, body.lastIndexOf('}') + 1);
  const final = {
    COMMIT_HASH: process.env.COMMIT_HASH,
  };
  let decoded = '';
  try {
    const patch = JSON.parse(body);
    if (patch.articleId && patch.publicationId && patch.patch) {
      final.articleId = patch.articleId;
      final.publicationId = patch.publicationId;
      final.patch = patch.patch;
      decoded = decodeURIComponent(JSON.stringify(final.patch)).replace('\n', '');
    } else {
      return;
    }

    const filepath = join(
      __dirname,
      `./articles/[${final.articleId}][${final.publicationId}].ts`,
    );

    let content = `
export default [
];`;
    if (existsSync(filepath)) {
      content = readFileSync(filepath).toString();
    }
    content = content.split('\n').slice(0, -1).join('\n');
    content += '\n' + `// ${decoded}\n  ${JSON.stringify(final.patch)},\n];`;
    writeFileSync(filepath, content);
    console.log(
      `preview_url="https://banned-historical-archives.github.io/articles/${
        final.articleId
      }?patch=${encodeURIComponent(JSON.stringify(final))}"`,
    );
  } catch (e) {}
}
