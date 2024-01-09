const { join, basename, parse } = require('path');
const { execSync } =require('child_process');

const fs = require('fs-extra')

const archives_dir = join(__dirname, '../archives');
function ensureFixExt(dest) {
    execSync('git checkout main && git reset --hard origin/main',{cwd: dest});
    execSync(`node ${join(__dirname, 'fixExtension.js')} ${dest}`);
    execSync('(git add . && git commit -m fix) || true',{cwd: dest});
    execSync('(git push --set-upstream origin main) || true',{cwd: dest});
}
function fixWorkflow(dest) {
    ['ocr_patch', 'ocr_cache', 'config'].forEach(i => {
    execSync(`((git checkout --orphan ${i} || git checkout ${i}) && git reset --hard && git pull) || true`,{cwd: dest});
    fs.ensureDirSync(
        join(dest, '.github', 'workflows'),
    );
    fs.cpSync(
        join(__dirname, 'workflows', 'build_parsed.yml'),
        join(dest, '.github/workflows', 'build_parsed.yml')
    )
    if (fs.pathExistsSync(join(dest, '.github/workflows', 'build_parsed_article.yml')))
        fs.unlinkSync(join(dest, '.github/workflows', 'build_parsed_article.yml'))

    execSync('(git add . && git commit -m fix_workflow) || true',{cwd: dest});
    execSync(`(git push --set-upstream origin ${i}) || true`,{cwd: dest});
});
}
function fixConfig(dest) {
    execSync('((git checkout --orphan config || git checkout config) && git reset --hard && git pull) || true',{cwd: dest});

    fs.readdirSync(join(dest)).filter(i => i.endsWith('.ts')).forEach(j => {
        const str = fs.readFileSync(join(dest, j)).toString().replace('export default ', '');
        const cfg = eval('tmp='+str);
        cfg.resource_type = 'book';
        cfg.version = 2;
        fs.writeFileSync(join(dest, j), 'export default ' + JSON.stringify(cfg, null, 2));

        //if (fs.pathExistsSync(join(dest, parse(j).name))) {
        //    fs.unlinkSync(join(dest, parse(j).name))
        //    console.log('rm ', join(dest, parse(j).name))
        //}
    });

    execSync('(git add . && git commit -m add_resource_type) || true',{cwd: dest});
    execSync('(git push --set-upstream origin config) || true',{cwd: dest});
}
function findNonJpg(dest) {
    execSync('((git checkout --orphan main || git checkout main) && git reset --hard && git pull) || true',{cwd: dest});
    const candidates_png = new Set();
    const candidates_jpeg = new Set();
    function f(x) {
    for (const i of fs.readdirSync(x)) {
        const t = fs.statSync(join(x, i))
        if (t.isDirectory()) {
            f(join(x, i));
        } else {
            const ext = parse(i).ext;
            if (ext == '.png') {
                candidates_png.add(basename(x));
            } else if (ext == '.jpeg') {
                candidates_jpeg.add(basename(x));
            } else if (ext == '.pdf' || ext == '.jpg') {
            } else {
                console.log('unknown',join(x, i), ext)
            }
        }
    }
    }
    f(dest)
    execSync('((git checkout --orphan config || git checkout config) && git reset --hard && git pull) || true',{cwd: dest});

    Array.from(candidates_png.values()).forEach(j => {
        const str = fs.readFileSync(join(dest, j + '.ts')).toString();
        fs.writeFileSync(join(dest, j + '.ts'), str.replace('.jpg`,', '.png`,'));
    });
    console.log(Array.from(candidates_png.values()))
    console.log(Array.from(candidates_jpeg.values()))
    Array.from(candidates_jpeg.values()).forEach(j => {
        const str = fs.readFileSync(join(dest, j + '.ts')).toString();
        fs.writeFileSync(join(dest, j + '.ts'), str.replace('.jpg`,', '.jpeg`,'));
    });

    execSync('(git add . && git commit -m fix_img_ext) || true',{cwd: dest});
    execSync('(git push --set-upstream origin config) || true',{cwd: dest});
}
function ensureParsed(dest) {
    execSync('((git checkout --orphan parsed || git checkout parsed) && git reset --hard && git pull) || true',{cwd: dest});
    execSync('touch README.md',{cwd: dest});
    execSync('(git add . && git commit -m init) || true',{cwd: dest});
    execSync('(git push --set-upstream origin parsed) || true',{cwd: dest});
}
function updateBranch(dest) {
    execSync('((git checkout --orphan parsed || git checkout parsed) && git reset --hard && git pull) || true',{cwd: dest});
}
fs.readdirSync(archives_dir).filter(i => i.startsWith('archives')).forEach(i => {
    if (
        i == 'archives6' ||
        i == 'archives7' ||
        i == 'archives10' ||
        // i == 'archives9' ||
        i == 'archives11' ||
        i == 'archives12'
    ) return;
    // if (i !== 'archives1') return;
    const dest = join(archives_dir, i);
    console.log(dest)
    execSync('git clean -f && git reset --hard',{cwd: dest});

    // execSync('git checkout ocr_config',{cwd: dest});
    // execSync('git push origin ocr_config:config',{cwd: dest});
    
    // fixConfig(dest);
    // findNonJpg(dest);
    // updateBranch(dest);
    fixWorkflow(dest);

    // execSync('git checkout ocr_config',{cwd: dest});
    // execSync('(git push origin ocr_config:config)||true',{cwd: dest});
    // fs.cpSync(
    //     join(__dirname, 'workflows', 'build_parsed.yml'),
    //     join(dest, '.github/workflows', 'build_parsed.yml')
    // )
    // execSync('(git add . && git commit -m fix_workflow) || true',{cwd: dest});
    // execSync(`(git push --set-upstream origin config) || true`,{cwd: dest});
    return;

    // ensureFixExt(dest);
    ensureParsed(dest);

    // execSync(`node ${join(__dirname, 'copyConfig')} ${dest}`);
    fs.ensureDirSync(
        join(dest, '.github', 'workflows'),
    );
    fs.cpSync(
        join(__dirname, 'workflows', 'build_parsed.yml'),
        join(dest, '.github/workflows', 'build_parsed.yml')
    )
    fs.cpSync(
        join(__dirname, 'workflows', 'build_ocr_cache.yml'),
        join(dest, '.github/workflows', 'build_ocr_cache.yml')
    )
    execSync(`(git add . && git commit -m wip) || true`, {cwd: dest});
    execSync(`(git push --set-upstream origin config) || true`, {cwd: dest});

    execSync(`node ${join(__dirname, 'copyCache')} ${dest}`);
    fs.ensureDirSync(
        join(dest, '.github', 'workflows'),
    );
    fs.cpSync(
        join(__dirname, 'workflows', 'build_parsed.yml'),
        join(dest, '.github/workflows', 'build_parsed.yml')
    )
    execSync(`(git add . && git commit -m wip) || true`, {cwd: dest});
    execSync(`(git push --set-upstream origin ocr_cache) || true`, {cwd: dest});

    execSync(`node ${join(__dirname, 'copyPatch')} ${dest}`);
    fs.ensureDirSync(
        join(dest, '.github', 'workflows'),
    );
    fs.cpSync(
        join(__dirname, 'workflows', 'build_parsed.yml'),
        join(dest, '.github/workflows', 'build_parsed.yml')
    )
    execSync(`(git add . && git commit -m wip) || true`, {cwd: dest});
    execSync(`(git push --set-upstream origin ocr_patch) || true`, {cwd: dest});
    }
    )