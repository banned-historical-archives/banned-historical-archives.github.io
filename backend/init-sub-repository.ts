import { execSync } from 'child_process';
import { join } from 'path';
import * as dotenv from 'dotenv';
dotenv.config();
const prefix =
  process.env['REPO_PREFIX'] || 'https://github.com/banned-historical-archives';

let branch = process.argv[process.argv.length - 1];
const dir = branch;
branch = branch == 'raw' ? 'main' : branch;

for (let i = 0; i <= 31; ++i) {
  const command = `(git clone --depth 1 --branch ${branch} ${prefix}/banned-historical-archives${i}.git ${dir}/archives${i}) || true`;
  console.log(command);
  execSync(command, { cwd: join(__dirname, '..') });
  try {
    execSync('(git reset --hard) || true', {
      cwd: join(__dirname, '../', dir, 'archives' + i),
    });
    execSync('(git pull) || true', {
      cwd: join(__dirname, '../', dir, 'archives' + i),
    });
    execSync(`(git checkout ${branch}) || true`, {
      cwd: join(__dirname, '../', dir, 'archives' + i),
    });
  } catch (e) {
    console.log(e);
  }
}
