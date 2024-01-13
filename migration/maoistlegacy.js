const { join } = require('path');
const pdfjsLib = require('./pdf.js');
const fs = require('fs-extra');

/*
资料类型与处理方案：

文稿（有文本，无照片或pdf） -> 导入文库
文稿（有文本，有照片或pdf） -> 导入文库
文稿（无文本，有照片或pdf） -> 触发OCR -> 导入文库
漫画/插画/照片 -> 导入图片库

这里只处理前3种情况。
*/
async function build_cfg() {
  const data_dir_path = join(__dirname, '../raw/archives11/data');
  const dir_list = fs.readdirSync(data_dir_path);
  for (const id of dir_list) {
    const meta = fs.readJSONSync(join(data_dir_path, `${id}/meta.json`));
    // if (!meta.parts.length) continue;
    if (meta.tags.indexOf('漫画') >= 0) continue;

    let size = 0;
    if (meta.pdf) {
      const doc = await pdfjsLib.getDocument(
        join(data_dir_path, `${id}/${id}.pdf`),
      ).promise;
      size = doc.numPages;
    } else {
      size = meta.imgs.length;
    }

    const new_id = `maoistlegacy.de-${id}`;
    const cfg = ({
      resource_type: 'book',
      entity: {
        id: new_id,
        name: meta.title,
        author: meta.creator[0] || '',
        internal: false,
        official: false,
        type: meta.pdf ? 'pdf' : meta.imgs.length ? 'img' : 'unknown',
        files: meta.pdf
          ? [`https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives11/main/data/${id}/${id}.pdf`]
          : meta.imgs
              .map(
                (i, idx) =>
                  `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives11/main/data/${id}/${
                    idx + 1
                  }.${i.split('.').pop()}`,
              )
      },
      parser_option: meta.pdf || meta.imgs.length ? {
        articles: [{
        "page_start": 1,
        "page_end": size,
        "title": meta.title,
        dates: meta.dates,
        origin: meta.source[0] || '',
        "is_range_date": false,
        tags: meta.tags.map((i) => ({
          name: i,
          type: '主题/事件',
        })),
        "authors": meta.creator || [],
        }]
      } : {
      },
      parser_id: meta.pdf || meta.imgs.length ? 'automation' : 'maoistlegacy-txt',
      version: 2,
      path: meta.pdf ? 'data/' + id + '/' + id + '.pdf':'data/' + id,
    });

    fs.writeFileSync(join(__dirname, '../config/archives11/', new_id + '.ts'), `export default ${JSON.stringify(cfg, null, 2)}`);
  }
}

build_cfg();
