export default {
  entity: {
    id: '89e1627b-5c19-4b37-bcad-67852bf3164a',
    name: '蒋科大罪证材料（1979.2江苏）',
    internal: false,
    official: false,
    type: 'img',
    author: '中共江苏省委材料组，1978.11整理，1979.2印发',
    files: new Array(63)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives15/main/89e1627b-5c19-4b37-bcad-67852bf3164a/${
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
        title: '蒋科大罪证材料',
        authors: ['中共江苏省委材料组'],
        page_start: 1,
        page_end: 63,
        dates: [{ year: 1978, month: 11 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives15/89e1627b-5c19-4b37-bcad-67852bf3164a',
};
