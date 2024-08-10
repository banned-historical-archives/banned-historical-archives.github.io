const { execSync } = require("child_process");
const { join } = require("path");

for (const i of [21,22,23,24,25,26,27,28,29,30]) {
    const dir = join(__dirname, '../raw', 'archives' + i);
    for (const j of ['config', 'ocr_patch', 'ocr_cache', 'parsed']) {
        execSync(`(git pull origin ${j} && git checkout ${j}) || true`,{cwd: dir});
        execSync(`(git checkout --orphan ${j} && git reset --hard && git clean -f) || true`,{cwd: dir});
        execSync('touch README.md',{cwd: dir});
        execSync('mkdir -p .github', {cwd: dir});
        execSync('mkdir -p .github/workflows', {cwd: dir});
        if (j !== 'parsed') {
            execSync('cp ../../migration/workflows/build_parsed.yml .github/workflows', {cwd: dir});
        }
        if (j == 'config') {
            execSync('cp ../../migration/workflows/build_ocr_cache.yml .github/workflows', {cwd: dir});
        }
        execSync(`(git add . && git commit -m init) || true`,{cwd: dir});
        execSync(`(git push -f --set-upstream origin ${j}) || true`,{cwd: dir});
    }
}