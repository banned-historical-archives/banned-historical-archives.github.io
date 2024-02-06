const { join, basename, parse } = require('path');
const { execSync } =require('child_process');

const fs = require('fs-extra')

function fixWorkflow(dest, branch) {
    execSync(`git pull || true`,{cwd: dest});
    fs.ensureDirSync(
        join(dest, '.github', 'workflows'),
    );
    fs.cpSync(
        join(__dirname, 'workflows', 'build_parsed.yml'),
        join(dest, '.github/workflows', 'build_parsed.yml')
    )
    execSync('(git add . && git commit -m fix_workflow) || true',{cwd: dest});
    execSync(`(git push --set-upstream origin ${branch}) || true`,{cwd: dest});
}

for (const dir_name of ['parsed']) {
const archives_dir = join(__dirname, '../' + dir_name);
fs.readdirSync(archives_dir).filter(i => i.startsWith('archives')).forEach(i => {
    const dest = join(archives_dir, i);
    console.log(dest)
    execSync('git clean -f && git reset --hard',{cwd: dest});
    // execSync('git config pull.rebase true && git checkout parsed && git pull',{cwd: dest});
    execSync('git reset --hard origin/parsed',{cwd: dest});
    // fixWorkflow(dest, dir_name);
    return;
    })
}