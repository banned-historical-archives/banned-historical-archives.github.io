export default {
  entity: {
    id: '9d4bcbf0-c2bf-44ff-8245-dd8faa6910fd',
    name: '南京东方红大学战报',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(5)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/9d4bcbf0-c2bf-44ff-8245-dd8faa6910fd/${
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
        title: '毛主席视察了华北、中南和华东地区',
        authors: ['人民日报'],
        page_start: 1,
        page_end: 1,
        dates: [{ year: 1967, month: 9, day: 25 }],
      },
      {
        title: '毛主席最近视察华北、中南、华东地区时所作的最新指示',
        authors: ['毛泽东'],
        page_start: 2,
        page_end: 5,
        dates: [{ year: 1967, month: 9 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/9d4bcbf0-c2bf-44ff-8245-dd8faa6910fd',
};
