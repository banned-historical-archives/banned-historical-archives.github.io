// 上传整本书籍或图片集
const fs = require('fs-extra');
const path = require('path');
const {v4 } = require('uuid');

const readline = require('node:readline');

let [node_path, js_path, relativePath] = process.argv;

const is_pdf = relativePath.endsWith('.pdf');
let n_files = 0;
let ext = '';
if (is_pdf) {
    const f = path.join(process.cwd(), relativePath);
} else {
    const dir = path.join(process.cwd(), relativePath);
    const files = fs.readdirSync(dir);
    n_files = files.length;
    ext = path.extname(files[0]);
    for (let i = 1; i <= n_files;++i) {
        if (!fs.existsSync(join(dir, i + ext))) {
            console.log('检查文件名后缀是否一致且按顺序命名');
            process.exit(1);
        }
    }
}

async function cmd_question(q, default_v = '') {
    return await new Promise((resolve) => {
        const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout,
        });
        rl.question(q, (s) => {
            resolve(s || default_v);
            rl.close();
        });
    });
}

(async () => {
    const archive_id = await cmd_question('仓库id(0-20，默认19)：', '19');
    const bookname = await cmd_question('书籍名称：')
    const bookauthor = await cmd_question('书籍作者：')
    const id = v4();
    const res = {
        entity: {
            id,
            "name": bookname,
            "internal": false,
            "type": is_pdf ? "pdf" : "imgs",
            "official": false,
            "author": bookauthor,
            files: is_pdf ? 
                `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives${archive_id}/main/${id}.pdf`:
            (new Array(n_files)).fill(0).map((x, i) =>
                `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives${archive_id}/main/${id}/${i + 1}${ext}`
            ),
        },
        "parser_option": {
          "articles": [
          ],
        },
        "parser_id": "automation",
        "path": is_pdf ? id + '.pdf' : id,
        "resource_type": "book",
        "version": 2
    };
    let i = 1;
    while (true) {
        const title = await cmd_question(`文章${i}标题(默认为书籍标题)：`, bookname);
        const authors = await cmd_question(`文章${i}作者(多作者使用空格分割,默认为书籍作者）：`, bookauthor);
        const date = await cmd_question(`文章${i}日期(年月日使用空格分割）：`);
        const page = await cmd_question(`文章${i}页码范围（使用空格分割，默认为第一页到最后一页）：`);
        let page_start = 0;
        let page_end = 0;
        if (page) {
            page_start = parseInt(page.split(' ')[0]);
            page_end = parseInt(page.split(' ')[1]);
        } else {
            page_start = 1;
            if (is_pdf) {
                const pdf = require('pdf-parse');
                const pdfBuffer = fs.readFileSync(path.join(process.cwd(), relativePath));
                const {numpages} = await pdf(pdfBuffer)
                page_end = numpages;
            } else {
                page_end = n_files;
            }
        }
        res.parser_option.articles.push({
          "title": title,
          "authors": authors.split(' '),
          page_start,
          page_end,
          "dates": date ? [
            {
              "year": parseInt(date.split(' ')[0]) || undefined,
              "month": parseInt(date.split(' ')[1]) || undefined,
              "day": parseInt(date.split(' ')[2]) || undefined
            }
          ] : []
        });
        const more = await cmd_question(`是否继续录入文章(Y/n)：`);
        if (more == 'n') break;
    }
    const check = await cmd_question(`
${JSON.stringify(res, null ,2)}
确认(Y/n)：`);
        if (check == 'n') return;

    fs.writeFileSync(path.join(js_path, `../config/archives${archive_id}/${id}.ts`), 'export default ' + JSON.stringify(res, null, 2));
    if (is_pdf) {
        const f = path.join(process.cwd(), relativePath);
        const target_path = path.join(js_path, `../raw/archives${archive_id}/${id}.pdf`);
        fs.cpSync(f, target_path);
    } else {
        const files = fs.readdirSync(dir);
        n_files = files.length;
        fs.ensureDirSync(path.join(js_path, `../raw/archives${archive_id}/${id}`))
        for (let i = 1; i <= n_files;++i) {
            const target_path = path.join(js_path, `../raw/archives${archive_id}/${id}/${i}${ext}`);
            const src = path.join(process.cwd(), relativePath, i + ext);
            fs.cpSync(src, target_path);
        }
    }
})();