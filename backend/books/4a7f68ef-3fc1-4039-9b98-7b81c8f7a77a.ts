export default {
  entity: {
    id: '4a7f68ef-3fc1-4039-9b98-7b81c8f7a77a',
    name: '马天水、徐景贤、王秀珍反革命修正主义言论摘编（1976.10上海）',
    internal: false,
    official: false,
    type: 'img',
    author: '1976.10',
    files: new Array(26)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/4a7f68ef-3fc1-4039-9b98-7b81c8f7a77a/${
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
        title: '马天水、徐景贤、王秀珍反革命修正主义言论摘编',
        authors: ['马天水', '徐景贤', '王秀珍'],
        page_start: 1,
        page_end: 26,
        dates: [{ year: 1976, month: 12 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/4a7f68ef-3fc1-4039-9b98-7b81c8f7a77a',
};
