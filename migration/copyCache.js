const { join, basename, parse } = require('path');
const { execSync } =require('child_process');

const fs = require('fs-extra')

const target_dir = process.argv[2];
execSync('git checkout main', {
    cwd: target_dir
})
const files = fs.readdirSync(target_dir).filter(i => i!== 'README.md' && !i.startsWith('.')).map(i => parse(i).name);

const res = execSync('((git checkout --orphan ocr_cache || git checkout ocr_cache) && git reset --hard && git pull) || true', {
    cwd: target_dir
}).toString()
files.forEach(i => 
    {

        const src= join(__dirname, '../backend/ocr_cache', i);
        if (!fs.pathExistsSync(src)) {
            console.log('not exists', src)
            return;
        }
    fs.cpSync(src,
    join(target_dir, i), {recursive: true}
    )
    }
    )