export default {
  entity: {
    id: '3e92e8b9-fae2-404d-b697-2c3501030527',
    name: '杨广立的罪证材料（1978.11江苏）',
    internal: false,
    official: true,
    type: 'img',
    author: '中共江苏省委材料组，1978.11整理，1979.2印发',
    files: new Array(94)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives15/main/3e92e8b9-fae2-404d-b697-2c3501030527/${
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
        dates: [{ year: 1978, month: 11 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives15/3e92e8b9-fae2-404d-b697-2c3501030527',
};
