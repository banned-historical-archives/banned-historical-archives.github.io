export default {
  entity: {
    id: '6dd12d61-0852-49c9-9cb5-8e7e4b84db84',
    name: '别赋（1975.9）',
    internal: false,
    official: false,
    type: 'img',
    author: '北京大学、清华大学大批判组注释组，1975.9',
    files: new Array(9)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives17/main/6dd12d61-0852-49c9-9cb5-8e7e4b84db84/${
            idx + 1
          }.`,
      )
      .join(','),
  },
  parser_option: {
    page_limits: [],
    ext: '',
    articles: [
      {
        title: '别赋',
        authors: ['北京大学大批判组注释组', '清华大学大批判组注释组'],
        page_start: 1,
        page_end: 9,
        dates: [{ year: 1975, month: 9 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives17/6dd12d61-0852-49c9-9cb5-8e7e4b84db84',
};
