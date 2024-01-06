const { join, basename, parse } = require('path');
const { execSync } =require('child_process');

const fs = require('fs-extra')

const archives_dir = join(__dirname, '../public');
function ensureTags(dest) {
    execSync('((git checkout --orphan tags || git checkout tags) && git reset --hard origin/tags && git pull) || true',{cwd: dest});
    execSync('(git add . && git commit -m fix) || true',{cwd: dest});
    execSync('(git push --set-upstream origin tags) || true',{cwd: dest});
}
function ensureFixExt(dest) {
    execSync('git checkout main && git reset --hard origin/main',{cwd: dest});
    execSync(`node ${join(__dirname, 'fixExtension.js')} ${dest}`);
    execSync('(git add . && git commit -m fix) || true',{cwd: dest});
    execSync('(git push --set-upstream origin main) || true',{cwd: dest});
}
function fixWorkflow(dest) {
    ['ocr_patch', 'ocr_cache', 'ocr_config'].forEach(i => {
    execSync(`((git checkout --orphan ${i} || git checkout ${i}) && git reset --hard && git pull) || true`,{cwd: dest});
    fs.ensureDirSync(
        join(dest, '.github', 'workflows'),
    );
    fs.cpSync(
        join(__dirname, 'workflows', 'build_parsed_article.yml'),
        join(dest, '.github/workflows', 'build_parsed_article.yml')
    )
    execSync('(git add . && git commit -m fix_workflow) || true',{cwd: dest});
    execSync(`(git push --set-upstream origin ${i}) || true`,{cwd: dest});
});
}
function ensureParsedArticle(dest) {
    execSync('((git checkout --orphan parsed_article || git checkout parsed_article) && git reset --hard && git pull) || true',{cwd: dest});
    fs.ensureDirSync(
        join(dest, '.github', 'workflows'),
    );
    fs.cpSync(
        join(__dirname, 'workflows', 'build_tags.yml'),
        join(dest, '.github/workflows', 'build_tags.yml')
    )
    execSync('(git add . && git commit -m init) || true',{cwd: dest});
    execSync('(git push --set-upstream origin parsed_article) || true',{cwd: dest});
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
    // if (i !== 'archives9') return;
    const dest = join(archives_dir, i);
    console.log(dest)
    execSync('git clean -f && git reset --hard',{cwd: dest});

    // fixWorkflow(dest);

    ensureFixExt(dest);
    ensureParsedArticle(dest);
    ensureTags(dest);

    execSync(`node ${join(__dirname, 'copyConfig')} ${dest}`);
    fs.ensureDirSync(
        join(dest, '.github', 'workflows'),
    );
    fs.cpSync(
        join(__dirname, 'workflows', 'build_parsed_article.yml'),
        join(dest, '.github/workflows', 'build_parsed_article.yml')
    )
    fs.cpSync(
        join(__dirname, 'workflows', 'build_ocr_cache.yml'),
        join(dest, '.github/workflows', 'build_ocr_cache.yml')
    )
    execSync(`(git add . && git commit -m wip) || true`, {cwd: dest});
    execSync(`(git push --set-upstream origin ocr_config) || true`, {cwd: dest});

    execSync(`node ${join(__dirname, 'copyCache')} ${dest}`);
    fs.ensureDirSync(
        join(dest, '.github', 'workflows'),
    );
    fs.cpSync(
        join(__dirname, 'workflows', 'build_parsed_article.yml'),
        join(dest, '.github/workflows', 'build_parsed_article.yml')
    )
    execSync(`(git add . && git commit -m wip) || true`, {cwd: dest});
    execSync(`(git push --set-upstream origin ocr_cache) || true`, {cwd: dest});

    execSync(`node ${join(__dirname, 'copyPatch')} ${dest}`);
    fs.ensureDirSync(
        join(dest, '.github', 'workflows'),
    );
    fs.cpSync(
        join(__dirname, 'workflows', 'build_parsed_article.yml'),
        join(dest, '.github/workflows', 'build_parsed_article.yml')
    )
    execSync(`(git add . && git commit -m wip) || true`, {cwd: dest});
    execSync(`(git push --set-upstream origin ocr_patch) || true`, {cwd: dest});
    }
    )