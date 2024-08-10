// 上传整本书籍或图片集
const fs = require('fs-extra');
const path = require('path');
const {v4 } = require('uuid');
const {execSync } = require('child_process');

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
        if (!fs.existsSync(path.join(dir, i + ext))) {
            console.log('检查文件名后缀是否一致且按顺序命名，标准输入：1.jpg, 2.jpg, 3.jpg ...');
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
    const archive_id = await cmd_question('仓库id(0-20，默认17)：', '16');
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
          "ocr": {
            "use_onnx": true,
            "det_model_dir": "./paddle/onnx/ch_PP-OCRv4_det_infer.onnx",
            "rec_model_dir": "./paddle/onnx/ch_PP-OCRv4_rec_infer.onnx"
          }
        },
        "parser_id": "automation",
        "path": is_pdf ? id + '.pdf' : id,
        "resource_type": "book",
        "version": 2
    };
    let i = 1;
    while (true) {
        let title = await cmd_question(`文章${i}标题(默认为书籍标题)：`, bookname);
        let authors = await cmd_question(`文章${i}作者(多作者使用空格分割,默认为书籍作者）：`, bookauthor);
        let date = await cmd_question(`文章${i}日期(年月日使用空格分割）：`);
        let page = await cmd_question(`文章${i}页码范围（使用空格分割，默认为第一页到最后一页）：`);
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


        console.log("-----------------------------------------------------");
        console.log(`当前文章标题：${ title }`);
        console.log(`当前文章作者：${ authors }`);
        console.log(`当前文章日期：${ date }`)
        console.log(`当前文章起始页码：${ page_start }~${ page_end }`);
        console.log("-----------------------------------------------------");
        const more = await cmd_question(`请核对当前信息是否正确(1:修改标题/2:修改作者/3:修改日期/4:修改页码/任意字符:无需修改)：`);
        if (more == '1') {
            title = await cmd_question(`文章${i}标题(默认为书籍标题)：`, bookname);
        } else if (more == '2') {
            authors = await cmd_question(`文章${i}作者(多作者使用空格分割,默认为书籍作者）：`, bookauthor);
        } else if (more == '3') {
            date = await cmd_question(`文章${i}日期(年月日使用空格分割）：`);
        } else if (more == '4') {
            page = await cmd_question(`文章${i}页码范围（使用空格分割，默认为第一页到最后一页）：`);
        }


        res.parser_option.articles.push({
            "title": title,
            "authors": authors ? authors.split(' ') : [],
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


        more = await cmd_question(`是否继续录入文章(y/N)：`);
        if (more != 'y') break;
        ++i;
    }
//    const check = await cmd_question(`
//${JSON.stringify(res, null ,2)}
//确认(Y/n)：`);
//        if (check == 'n') return;

    const raw_dir = path.join(js_path, `../../raw/archives${archive_id}`);
    const config_dir = path.join(js_path, `../../config/archives${archive_id}`);
    fs.writeFileSync(path.join(config_dir, `${id}.ts`), 'export default ' + JSON.stringify(res, null, 2));
    if (is_pdf) {
        const f = path.join(process.cwd(), relativePath);
        const target_path = path.join(raw_dir, `${id}.pdf`);
        fs.cpSync(f, target_path);
    } else {
        const dir = path.join(process.cwd(), relativePath);
        const files = fs.readdirSync(dir);
        n_files = files.length;
        fs.ensureDirSync(path.join(raw_dir, id))
        for (let i = 1; i <= n_files;++i) {
            const target_path = path.join(raw_dir, `${id}/${i}${ext}`);
            const src = path.join(process.cwd(), relativePath, i + ext);
            fs.cpSync(src, target_path);
        }
    }

    execSync('git add . && git commit -m 1 && git push', {cwd: raw_dir});
    execSync('git add . && git commit -m 1 && git push', {cwd: config_dir});
    const del = (await cmd_question(`是否删除原始文件(y/N):`)) == 'y';
    if (del) {
        if (is_pdf) {
            fs.unlinkSync(path.join(process.cwd(), relativePath))
        } else {
            const dir = path.join(process.cwd(), relativePath);
            const files = fs.readdirSync(dir);
            for (const x of files) {
                fs.unlinkSync(path.join(dir, x));
            }
            fs.rmdirSync(dir);
        }
    }
})();
