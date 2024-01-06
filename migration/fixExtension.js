const { join, basename, parse } = require('path');
const { execSync } =require('child_process');

const fs = require('fs-extra')

const target_dir = process.argv[2];
const files = fs.readdirSync(target_dir).filter(i => i!== 'README.md' && i!== '.git')

function getFileType(filePath) {
    const buffer = Buffer.alloc(8); // 读取前8个字节足以判断
    const fd = fs.openSync(filePath, 'r');
    fs.readSync(fd, buffer, 0, 8, 0);
    fs.closeSync(fd);

    if (buffer.toString('hex', 0, 3) === 'ffd8ff') {
        return 'jpg';
    } else if (buffer.toString('ascii', 1, 4) === 'PNG') {
        return 'png';
    } else {
        return 'unknown';
    }
}

for (const i of files) {
    if (fs.statSync(join(target_dir, i)).isDirectory()) {
        const imgs_dir = join(target_dir, i);
        const imgs = fs.readdirSync(imgs_dir);
        let x = 0;
        for (const j of imgs) {
            if (j.endsWith('.')) {
                // 需要修复
                const full_path = join(imgs_dir, j)
                const ext = getFileType(full_path)
                if (ext == 'unknown') {
                    console.log('detect unknown', full_path);
                } else {
                    fs.moveSync(full_path, join(imgs_dir,j + ext));
                    console.log('fix', full_path, ext)
                }
            }
        }
    }
}