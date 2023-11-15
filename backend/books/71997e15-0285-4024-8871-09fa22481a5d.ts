export default {
  entity: {
    id: '71997e15-0285-4024-8871-09fa22481a5d',
    name: '华林森的罪证材料',
    internal: false,
    official: false,
    type: 'img',
    author: '中共江苏省委材料组',
    files: new Array(146)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives15/main/71997e15-0285-4024-8871-09fa22481a5d/${
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
        title: '华林森的罪证材料',
        authors: ['中共江苏省委材料组'],
        page_start: 1,
        page_end: 146,
        dates: [{ year: 1978, month: 11 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives15/71997e15-0285-4024-8871-09fa22481a5d',
};
