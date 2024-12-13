const { execSync } = require("child_process");
const { readFileSync, writeFileSync } = require("fs");
const { join } = require("path");

for (let i = 0;i<=30;++i) {
    const dir = join(__dirname, '../ocr_patch', 'archives' + i);

        execSync('mkdir -p .github', {cwd: dir});
        execSync('mkdir -p .github/workflows', {cwd: dir});
        execSync('git pull', {cwd: dir});
            execSync('cp ../../migration/workflows/build_parsed.yml .github/workflows', {cwd: dir});
          //  execSync('cp ../../migration/workflows/build_ocr_cache.yml .github/workflows', {cwd: dir});
        execSync(`(git add . && git commit -m init) || true`,{cwd: dir});
        execSync(`(git push) || true`,{cwd: dir});
}