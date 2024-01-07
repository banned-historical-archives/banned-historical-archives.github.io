import fs from 'fs-extra';
import { join, parse } from 'path';
import { ArticleIndexes, Catelog, CatelogTemp } from '../types';

const catelog: CatelogTemp = {};
const article_indexes: ArticleIndexes = {};

function catelog_temp_to_catelog(c: CatelogTemp): Catelog {
   return Object.keys(c).map((i) => {
        const a = c[i];
        const tags: {type: string, name: string}[] = [];
        Object.keys(a.tags).forEach(type => {
            Object.keys(a.tags[type]).forEach(name => {
                tags.push({type, name});
            });
        })
        return {
            id: i,
            ...a,
            tags,
            books: Object.values(a.books),
        }
    });
}
(async () => {
    for (const i of [0, 1, 2,3,4,5,8,9,14,15,16,17,18]) {
        const p = join(__dirname, '../public/archives' + i);
        console.log(p);
        for (const prefix of (await fs.readdir(p)).filter(i => !i.startsWith('.') && !i.endsWith('.md'))) {
            for (const book of await fs.readdir(join(p, prefix))) {
                console.log('book', book);
                const flist = (await fs.readdir(join(p, prefix, book)));
                const prefix2_list = flist.filter(x => !x.endsWith('.bookinfo'));
                const bookinfo = JSON.parse((await fs.readFile(join(p, prefix, book, book + '.bookinfo'))).toString())
                for (const prefix2 of prefix2_list) {
                    for (const article_file of (await fs.readdir(join(p, prefix, book, prefix2))).filter(x => x.endsWith('.json'))) {
                        const article_id = parse(article_file).name;
                        const article = JSON.parse((await fs.readFile(join(p, prefix, book, prefix2, article_file))).toString())
                        const tags = JSON.parse((await fs.readFile(join(p, prefix, book, prefix2, `${article_id}.tag`))).toString()) as {type: string, name: string}[]
                        if (!catelog[article_id])
                            catelog[article_id] = {
                        title: article.title,
                        dates: article.dates,
                        authors: article.authors,
                        is_range_date: article.is_range_date,
                        tags: {}, books: {}};
                        tags.forEach(tag => {
                            if (!catelog[article_id].tags[tag.type])
                                catelog[article_id].tags[tag.type] = {}
                            catelog[article_id].tags[tag.type][tag.name] = true;
                        })
                        catelog[article_id].books[bookinfo.id] = bookinfo.name;

                        if (!article_indexes[article_id]) {
                            article_indexes[article_id] = {};
                        }
                        article_indexes[article_id][bookinfo.id] = i.toString();
                    }
                }
            }
        }
    }
    fs.writeFileSync(join(__dirname, '../catelog.json'), JSON.stringify(catelog_temp_to_catelog(catelog)))
    fs.writeFileSync(join(__dirname, '../article_indexes.json'), JSON.stringify(
        article_indexes
    ));
})();