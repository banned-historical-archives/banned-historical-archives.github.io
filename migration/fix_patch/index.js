const fs = require('fs-extra');
const {exec} = require('child_process')
const {get_article_id, new_get_article_id} = require('../fixmd5/utils');
const {join} = require('path')
const JSON5 = require('json5')
const v2 = fs.readdirSync('./v2');
const v1 = fs.readdirSync('./v1');
// console.log(v2);
const ids = {};
const cfgs = {};

(async () => {
  for (let i = 0; i <= 20; ++i) {
    const p = join(__dirname, '../../parsed/archives' + i);
    console.log(p);
    if (!(await fs.pathExists(p))) continue;
    for (const prefix of (await fs.readdir(p)).filter(
      (i) => !i.startsWith('.') && !i.endsWith('.md'),
    )) {
      for (const resource of await fs.readdir(join(p, prefix))) {
        // console.log('resource', resource);
        const flist = await fs.readdir(join(p, prefix, resource));
      
        const metadata_path = join(p, prefix, resource, resource + '.metadata');
        const metadata = JSON.parse(
          (await fs.readFile(metadata_path)).toString(),
        );
    
        const cfg = JSON5.parse(
          (
            await fs.readFile(
              join(__dirname, `../../config/archives${i}/${metadata.id}.ts`),
            )
          )
            .toString()
            .replace('export default', '')
            .replace(/\;\s*$/, ''),
        );
    
        if (cfg.resource_type === 'book') {
            if (['CCRD', 'chuanxinlu', 'jimi', 'jqjianghua', 'jinghuo', 'qibenyu', 'rmrb', 'wanghongwen', 'wengeqianqixinianlu1', 'wenji', 'xuanji', 'yaowenyuan', 'zhangchunqiao', 'zzj1', 'maoistlegacy-txt', 'result-json', 'whb'].includes(cfg.parser_id)) continue;
            try {
            cfg.parser_option.articles.forEach(x=> {
                ids[get_article_id(x)] = new_get_article_id(x);
                cfgs[get_article_id(x)]=[i,x, cfg];
            });
        }catch(e){
            console.log(cfg)
            return;
        }
        }
      }
    }
  }


  v1.forEach(i => {
    const old_aid = i.split('[')[1].split(']')[0];
    const book_id = i.split(']')[1].split('[')[1];
    if (!ids[old_aid]) {
  // 忽略2个patch
  // maoistlibrary, wanghongwen
  // c4d7f58156,265e7d288a
  return;
    }

    if (['de0382f6ce', '029413489b'].includes(ids[old_aid])) {
        //忽略
        return;
    }

    // 注意：一部分文稿使用cnocr2.2,一部分使用cnocr2.1??。其ocr结果有差异，会影响ocr patch的运行。
    // 目前没有记录使用的cnocr版本，需要重新运行ocr才能判断版本

    // 因为文章页码可能重叠，ocr cache只能选择一种模型，运行下面的代码后需要特殊处理重叠的文章

    // console.log(old_aid, ids[old_aid], cfgs[old_aid]);
    const json = JSON5.parse(fs.readFileSync('./v1/' + i ).toString().replace('export default', '').trim().replace(/;$/, ''));
    let content = JSON.stringify(json);
    content = content.substring(1);
    content = content.substring(0, content.length - 1);

    // if (ids[old_aid] != 'bada7c4d88') return;

    const [archives_id,cfg,book_cfg] = cfgs[old_aid];

    // 先删除旧的ocr结果
    for (let a = cfg.page_start; a <= cfg.page_end; ++a) {
      try {
      fs.unlinkSync(`../../ocr_cache/archives${archives_id}/${book_id}/${a}.json`);
      }catch(e) {}
    }

    console.log(archives_id)
    // 更新config, 设置side len 为1496
    const target = book_cfg.parser_option.articles.find(i => new_get_article_id(i) == ids[old_aid]);
    target.ocr = {
      ...target.ocr,
      det_limit_side_len: 1496,
      det_db_box_thresh: 0.3,
      rec_model_dir: './paddle/ch_ppocr_mobile_v2.0_rec_infer',
      det_model_dir: './paddle/ch_PP-OCRv3_det_infer',
      drop_score: 0.3
    };
    fs.writeFileSync(`../../config/archives${archives_id}/${book_id}.ts`, 'export default ' + JSON.stringify(book_cfg, null, 2) + ';');

    // 更新patch

    fs.writeFileSync(`../../ocr_patch/archives${archives_id}/[${ids[old_aid]}][${book_id}].ts`,
        'export default [\n' + content +',\n];'
    );

  });

  // 手动运行
  // 重新运行ocr
  // const {stdout, stderr} = exec(`npm run build_ocr_cache -- ../banned-historical-archives.github.io/config/archives2 ../banned-historical-archives.github.io/raw/archives2 ../banned-historical-archives.github.io/ocr_cache/archives2`, {cwd: '../../ocr_helper'})

  // 更新parsed
  // const {stdout, stderr} = exec(`npm run build_parsed -- ../banned-historical-archives.github.io/config/archives2 ../banned-historical-archives.github.io/ocr_cache/archives2 ../banned-historical-archives.github.io/ocr_patch/archives2 ../banned-historical-archives.github.io/parsed/archives2 ../banned-historical-archives.github.io/raw/archives2`, {cwd: '../../ocr_helper'})
  //console.log(json);
 // console.log(stdout)
})();
