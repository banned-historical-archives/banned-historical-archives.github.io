import get_books from './books';
import { join } from 'path';
import { init } from './data-source';
import { get_article_id, sleep } from '../utils';
import fs from 'fs';
import { ensureDirSync } from 'fs-extra';

class Article {
    [x: string]: any;
    constructor(title: any, author: any, internal: any, official: any) {
        this.title = title;
        this.author = author;
        this.internal = internal;
        this.official = official;
    }
}

(async () => {
    const dirPath = join(__dirname, '../README.md');
    const data = fs.readFileSync(dirPath, { encoding: 'utf-8' });
    const mid1 = '| ----- | --------------- | -------------- | -------------- | --------- |\n';
    const mid2 = '\n\n以及许多未知来源的笔记/讲话记录/文稿/手稿/翻印稿正在录入。';
    let first = data.split(mid1)[0];
    let last = data.split(mid2)[1];

    console.log('init');
    const ds = await init();
    console.log('get books');
    const books = await get_books();
    console.log('books length', books.length);

    const arr = [];
    for (const book of books) {
        arr.push(new Article(book.entity.name, book.entity.author, book.entity.internal, book.entity.official));
    }

    arr.sort((a, b) => {
        if (a.title.length < b.title.length) return -1;
        else if (a.title.length === b.title.length) return a.title.localeCompare(b.title);
        else return 1;
    });

    arr.forEach((item, i) => {
        arr[i] = `${ item.title }|${ item.author }|${ item.internal ? 'Y' : 'N' }|${ item.official ? 'Y' : 'N' }`;
    });

    const result = first + mid1 + arr.join('\n') + mid2 + last;
    fs.writeFileSync(dirPath, result);
    console.log('done');
    process.exit();
})();
