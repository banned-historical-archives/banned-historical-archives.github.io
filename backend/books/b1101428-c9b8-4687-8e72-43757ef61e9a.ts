export default {
  entity: {
    id: 'b1101428-c9b8-4687-8e72-43757ef61e9a',
    name: '关于赛福鼎同志严重路线错误的材料汇集',
    internal: false,
    official: false,
    type: 'img',
    author: '新疆维吾尔自治区党委办公厅',
    files: new Array(48)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives14/main/b1101428-c9b8-4687-8e72-43757ef61e9a/${
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
        title: '关于赛福鼎同志严重路线错误的材料汇集',
        authors: ['新疆维吾尔自治区党委办公厅'],
        page_start: 1,
        page_end: 48,
        dates: [{ year: 1978, month: 2, day: 22 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives14/b1101428-c9b8-4687-8e72-43757ef61e9a',
};
