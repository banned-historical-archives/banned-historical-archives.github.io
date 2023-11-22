export default {
  entity: {
    id: 'de469517-9dd1-4c0d-b8ce-416f2f94f14a',
    name: '揭发交代“四人帮”和我控制舆论工具进行篡党夺权的严重罪行',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(20)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/de469517-9dd1-4c0d-b8ce-416f2f94f14a/${
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
        title: '揭发交代“四人帮”和我控制舆论工具进行篡党夺权的严重罪行',
        authors: ['徐景贤'],
        page_start: 1,
        page_end: 20,
        dates: [{ year: 1976, month: 12, day: 18 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/de469517-9dd1-4c0d-b8ce-416f2f94f14a',
};
