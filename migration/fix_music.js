const fs = require('fs')
const {join, extname} = require('path');
const JSON = require('json5');

const archive_id = 6;
p = `../config/archives${archive_id}`;
for (const i of fs.readdirSync(p)) {
    if (i.endsWith('.ts')) {
        const content = fs.readFileSync(join(p,i)).toString();
        const cfg = JSON.parse(content.replace('export default', '').trim().replace(/;$/, ''));
        cfg.entity.lyrics.forEach(i => {
            i.audios.map(j => {
                j.art_form = '独唱';
                if (j.source)
                j.sources = [j.source];
                delete j.source;
                if (j.artist)
                    j.artists = [{name: j.artist, type: '独唱'}]
                delete j.artist
            });
        });
        console.log(i)
        // console.log(cfg.entity.files)
        fs.writeFileSync(join(p,i), 'export default ' +JSON.stringify(cfg, null, 2) +';')
    }
}
