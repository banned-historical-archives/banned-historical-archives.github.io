const fs = require('fs')
const path = require('path')
const join = path.join

const dir = path.join(__dirname, '../backend/books');
for (const f of fs.readdirSync(dir)) {
    const id = f.replace('.ts', '');
    for (let i =0; i < 20;++i) {
        if (fs.existsSync(join(__dirname, '../config/archives' + i + '/' + id + '.ts'))) {
            fs.unlinkSync(join(dir, f));
            console.log('unlink', id)
        }
    }
}