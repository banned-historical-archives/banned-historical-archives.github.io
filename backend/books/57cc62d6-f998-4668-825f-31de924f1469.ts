export default {
  entity: {
    id: '57cc62d6-f998-4668-825f-31de924f1469',
    name: '杨广立的罪证材料',
    internal: false,
    official: false,
    type: 'img',
    author: '中共江苏省委材料组',
    files: new Array(94)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives15/main/57cc62d6-f998-4668-825f-31de924f1469/${
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
        title: '杨广立的罪证材料',
        authors: ['中共江苏省委材料组'],
        page_start: 1,
        page_end: 94,
        dates: [{ year: 1978, month: 1 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives15/57cc62d6-f998-4668-825f-31de924f1469',
};
