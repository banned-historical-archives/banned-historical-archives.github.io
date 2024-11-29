const fs = require('fs')
const {join, extname} = require('path');
const JSON = require('json5');

const archive_id = 6;
p = `../config/archives${archive_id}`;
for (const i of fs.readdirSync(p)) {
    if (i.endsWith('.ts')) {
        const content = fs.readFileSync(join(p,i)).toString();
        const cfg = JSON.parse(content.replace('export default', '').trim().replace(/;$/, ''));
        /*
       if ( cfg.entity.composer)
       {
        cfg.entity.composers=[cfg.entity.composer]
       }else
       cfg.entity.composers=[];
       delete cfg.entity.composer;
       */
        cfg.entity.lyrics.forEach(i => {
            /*
            if (i.lyricist)
            i.lyricists = [i.lyricist]
        else
        i.lyricists=[]
    delete i.lyricist
    */
   i.lyricists=i.lyricists.filter(i => i != '佚名');
   cfg.entity.composers=cfg.entity.composers.filter(i => i != '佚名');
            i.audios.map(j => {
                j.artists.forEach(k => {
                    /*
                    if (k.name.indexOf('词 ') >= 0 && k.name.indexOf('曲') >= 0) {
                        const a1 = k.name.split('词 ')[0].split(' ')
                        i.lyricists.push(a1[a1.length - 1]);
                        cfg.entity.composers.push(k.name.substring(k.name.lastIndexOf(' ') + 1).replace('曲', ''));
                        k.name = k.name.split('词 ')[0].split(' ').slice(0, -1).join(' ');
                    }
                        */
                       /*
                       if (k.name.indexOf(' ') >= 0) {
                        k.name.split(' ').slice(1).forEach(x =>
                        j.artists.push({
                            name: x,
                            type: '独唱'
                        })
                        );
                        k.name = k.name.split(' ')[0];
                       }
                        */
                });
                //j.artists = j.artists.filter(x => !x.name.endsWith('词曲'))
                /*
                if (j.art_forms) return;
                j.art_forms = [j.art_form];
                delete j.art_form;
                j.art_form = '独唱';
                if (j.source)
                    j.sources = [j.source];
                else
                    j.sources = [];
                delete j.source;
                if (j.artist)
                    j.artists = [{name: j.artist, type: '独唱'}]
                else
                    j.artists = [];
                delete j.artist
                */


            });
        });
        console.log(i)
        // console.log(cfg.entity.files)
        fs.writeFileSync(join(p,i), 'export default ' +JSON.stringify(cfg, null, 2) +';')
    }
}
