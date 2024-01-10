const fs = require('fs')
const path = require('path')
const join = path.join

const dir = path.join(__dirname, '../raw/archives14/maoistlibrary');
for (const f of fs.readdirSync(dir)) {
    const str = fs.readFileSync(join(dir, f)).toString().replace('const res = ', '').replace('export default res;', '');
    const cfg = eval('tmp=' + str);
    console.log(cfg);
    fs.writeFileSync(join(dir, f.replace('.ts', '') + '.json'), JSON.stringify(cfg, null, 2));
}