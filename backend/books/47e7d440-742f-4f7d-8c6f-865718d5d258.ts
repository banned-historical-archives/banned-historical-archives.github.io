export default {
  entity: {
    id: '47e7d440-742f-4f7d-8c6f-865718d5d258',
    name: '情况交流（11）（1969.8.6浙江）',
    internal: false,
    official: false,
    type: 'img',
    author: '浙江省联总《情况交流》编辑组',
    files: new Array(3)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/47e7d440-742f-4f7d-8c6f-865718d5d258/${
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
        title: '中共中央文件中发[69]48号',
        authors: ['中共中央'],
        page_start: 1,
        page_end: 3,
        dates: [{ year: 1969, month: 8, day: 4 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/47e7d440-742f-4f7d-8c6f-865718d5d258',
};
