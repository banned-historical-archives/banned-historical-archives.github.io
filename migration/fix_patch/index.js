const fs = require('fs-extra');
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
                cfgs[get_article_id(x)]=i;
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

    console.log(old_aid, ids[old_aid], cfgs[old_aid]);
    const json = JSON5.parse(fs.readFileSync('./v1/' + i ).toString().replace('export default', '').trim().replace(/;$/, ''));
    let content = JSON.stringify(json);
    content = content.substring(1);
    content = content.substring(0, content.length - 1);
    fs.writeFileSync(`../../ocr_patch/archives${cfgs[old_aid]}/[${ids[old_aid]}]${i.split(']')[1]}].ts`,
        'export default [\n' + content +',\n];'
    );
    //console.log(json);
  });
})();
