const fs = require('fs')
const {join, extname} = require('path');
const JSON = require('json5');

const archive_id = 1;
p = `../config/archives${archive_id}`;
for (const i of fs.readdirSync(p)) {
    if (i.endsWith('.ts')) {
        const content = fs.readFileSync(join(p,i)).toString();
        if (content.indexOf('main/1.')>=0) {
            const cfg = JSON.parse(content.replace('export default', '').trim().replace(/;$/, ''));
            const ext = extname(cfg.entity.files[0]);
            cfg.entity.files = new Array(cfg.entity.files.length).fill(0).map((_, j) => 
            `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives${archive_id}/main/${i.replace('.ts','')}/${j+1}${ext}`)
            console.log(i)
            // console.log(cfg.entity.files)
            fs.writeFileSync(join(p,i), 'export default ' +JSON.stringify(cfg, null, 2) +';')
        }
    }
}

for (let aid =0; aid <= 30;++aid) {
p = `../config/archives${aid}`;
for (const i of fs.readdirSync(p)) {
    if (i.endsWith('.ts')) {
        const content = fs.readFileSync(join(p,i)).toString();
            const cfg = JSON.parse(content.replace('export default', '').trim().replace(/;$/, ''));
            if (cfg.entity.type == 'imgs') {
                cfg.entity.type = 'img';
            console.log(i)
            // console.log(cfg.entity.files)
            fs.writeFileSync(join(p,i), 'export default ' +JSON.stringify(cfg, null, 2) +';')
            }
    }
}
}