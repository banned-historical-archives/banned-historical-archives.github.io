// 更新所有子仓库
const { execSync } =require('child_process');
const {join} = require('path');
const {readdir, readFile, pathExists, move} = require('fs-extra');
const {get_article_id, new_get_article_id} = require('./utils')
const JSON5 = require('json5')

async function update_submodule(type, branch) {
    for(let i = 0;i<=20;++i) {
        const dest = join(__dirname, '../../'+type+'/archives' + i)
        console.log(i)
        execSync(`git reset --hard`,{cwd: dest});
        execSync(`git checkout ` + branch,{cwd: dest});
        execSync(`git pull`,{cwd: dest});
    }
    console.log('done')
}

(async () => {
    // await update_submodule('config', 'config');
    // await update_submodule('ocr_patch', 'ocr_patch');
    // await update_submodule('parsed', 'parsed');
    for (let i = 0; i <= 20; ++i) {
        console.log(i);
        const dest = join(__dirname, '../../config/archives' + i);
        const patch_dir = join(__dirname, '../../ocr_patch/archives' + i);
        const files = await readdir(dest);
        for (const j of files) {
            if (!j.endsWith('.ts')) continue;
            const s = JSON5.parse((await readFile(join(dest,j))).toString().replace('export default','').replace(/\;\t*/, ''));
            if (s.resource_type !== 'book') continue;
            if (!s.parser_option.articles) {
                // db 类型的无articles
                continue;
            }
            for (const k of s.parser_option.articles) {
                const patch_name = `[${get_article_id(k)}][${s.entity.id}].ts`;
                if (await pathExists(join(patch_dir, patch_name))) {
                    const new_id = new_get_article_id(k);
                    const new_name = `[${new_id}][${s.entity.id}].ts`;
                    console.log(patch_name, new_name);
                    await move(join(patch_dir, patch_name), join(patch_dir, new_name));
                    // console.log(get_article_id(k))
                }
            }
        }
    }
    console.log('done')

    // 提交变更
    for (let i = 0; i <= 20; ++i) {
        console.log(i);
        const dest = join(__dirname, '../../ocr_patch/archives' + i);
        execSync(`git add .`,{cwd: dest});
        execSync(`git commit -m 1 || true`,{cwd: dest});
        execSync(`git push || true`,{cwd: dest});
    }
    console.log('done')

})();