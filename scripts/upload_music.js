const fs = require('fs');
const {exec, execSync} = require('child_process')
const {join, resolve }= require('path');
const json5 = require('json5');
const all_cfg = [];
const uploaded = new Set();
const uploaded_song_name = new Set();

const raw_dir ='../raw/archives6/毛主席语录歌曲';
const cfg_dir ='../config/archives6';
for (const f of fs.readdirSync(cfg_dir)) {
    if (!f.endsWith('.ts')) {
        continue;
    }
    const content = fs.readFileSync(join(cfg_dir,f)).toString().trim().replace(/\;$/g, "");
    const cfg = json5.parse(content.slice(content.indexOf("{")))
    all_cfg.push(cfg);
    for (const l of cfg.entity.lyrics) {
    for (const a of l.audios) {
        uploaded.add(a.url.slice(a.url.lastIndexOf('/')+1))
    }   
    uploaded_song_name.add(cfg.entity.name);
    }

}
for (const f of fs.readdirSync(raw_dir)) {
    if (!f.endsWith('.mp3') &&!f.endsWith('.acc')) {
        console.log('ignore', f);
        continue
    }
    if (uploaded.has(f)) {
        continue;
    }

    const name = f.split('.')[0].split(' ')[0].replace(/[\d\w]*/ , '');
    let artist = f.split('.')[0].split(' ').slice(1).join(' ') || '';
    console.log(f, name, artist);

    let id = '';

    let new_cfg = {}
    if (uploaded_song_name.has(name)) {
        console.log('已存在同名', name)
        const old_cfg = all_cfg.find(i => i.entity.name == name);
        old_cfg.entity.lyrics[0].audios.push({
            url: "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives6/main/毛主席语录歌曲/" + f,
            artist,
            source: '',
        })
        new_cfg = old_cfg;
        id = new_cfg.entity.id;
    } else {
        id = require('uuid').v4();
    new_cfg = {

  "resource_type": "music",
  "version":2,
  "entity": {
    id,
    name,
    "composer":"",
    "description":"",
    "tags": ["语录歌"],
    "lyrics":[
        {
            content: '',
            version: '原版',
            lyrictist: '',
            audios: [{
                url: "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives6/main/毛主席语录歌曲/" + f,
                artist,
                source: '',
            }]
        }
    ],
    }
};
    }
    execSync(`touch -a -m -t 202012170133.52 ./${f.replace(/ /g, "\\ ")}`, {
        cwd: resolve(raw_dir)
    })
    execSync(`git add ./${f.replace(/ /g, "\\ ")}`, {
        cwd: resolve(raw_dir)
    })
    fs.writeFileSync(join(cfg_dir, id + '.ts'), `export default ${JSON.stringify(new_cfg, null, 2)};`);

}