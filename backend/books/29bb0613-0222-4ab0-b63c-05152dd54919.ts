export default {
  entity: {
    id: '29bb0613-0222-4ab0-b63c-05152dd54919',
    name: '词曲音乐（2）《江梅引·访寒梅》',
    internal: false,
    official: false,
    type: 'img',
    author: '北京大学、清华大学大批判组文化部注释组',
    files: new Array(37)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives17/main/29bb0613-0222-4ab0-b63c-05152dd54919/${
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
        title: '词曲音乐（2）《江梅引·访寒梅》',
        authors: [
          '北京大学大批判组文化部注释组',
          '清华大学大批判组文化部注释组',
        ],
        page_start: 1,
        page_end: 37,
        dates: [{ year: 1975, month: 8 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives17/29bb0613-0222-4ab0-b63c-05152dd54919',
};
