export default {
  entity: {
    id: '497f6837-acfe-4e54-9954-e72f41e3554b',
    name: '关于“四人帮”提倡所谓“大写与走资派作斗争的作品”的有关材料（1976年11月）',
    internal: true,
    official: true,
    type: 'img',
    author: '上海电影制片厂办公室印',
    files: new Array(23)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/497f6837-acfe-4e54-9954-e72f41e3554b/${
            idx + 1
          }.jpg`,
      )
      .join(','),
  },
  parser_option: {
    page_limits: [],
    ext: 'jpg',
    articles: [
      {
        title: '按',
        authors: ['上海电影制片厂办公室'],
        page_start: 2,
        page_end: 2,
        dates: [{ year: 1976, month: 11 }],
      },
      {
        title: '重点题材创作会议',
        authors: ['刘庆棠'],
        page_start: 2,
        page_end: 3,
        dates: [{ year: 1976, month: 2, day: 5 }],
      },
      {
        title: '重点题材创作会议结束时刘庆棠讲话',
        authors: ['刘庆棠'],
        page_start: 3,
        page_end: 6,
        dates: [{ year: 1976, month: 2, day: 9 }],
      },
      {
        title: '重点题材创作会议文化部领导讲话',
        authors: ['刘庆棠', '张维民', '浩亮'],
        page_start: 7,
        page_end: 12,
        dates: [{ year: 1976, month: 2, day: 7 }],
      },
      {
        title: '于会泳在重点题材创作座谈会上的讲话',
        authors: ['于会泳'],
        page_start: 12,
        page_end: 15,
        dates: [{ year: 1976, month: 3, day: 18 }],
      },
      {
        title: '文化部电影局召开《序曲》改编落实汇报会上亚马、钱国栋的讲话',
        authors: ['亚马', '钱国栋'],
        page_start: 16,
        page_end: 20,
        dates: [{ year: 1976, month: 3, day: 22 }],
      },
      {
        title: '刘庆棠在落实改编《序曲》汇报会议上的讲话',
        authors: ['刘庆棠'],
        page_start: 20,
        page_end: 23,
        dates: [{ year: 1976, month: 3, day: 29 }],
      },
    ],
    ocr: { auto_vsplit: true, vsplit: 0.5 },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/497f6837-acfe-4e54-9954-e72f41e3554b',
};
