export default {
  entity: {
    id: '6d4f4ba7-f5b0-481a-bd19-81d004fb9a54',
    name: '“四人帮”反党集团在文艺方面的反革命修正主义言论摘编（1976.12）',
    internal: false,
    official: false,
    type: 'img',
    author: '1976.12',
    files: new Array(16)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/6d4f4ba7-f5b0-481a-bd19-81d004fb9a54/${
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
        title: '“四人帮”反党集团在文艺方面的反革命修正主义言论摘编',
        authors: ['江青', '姚文元', '张春桥', '王洪文'],
        page_start: 1,
        page_end: 16,
        dates: [{ year: 1976, month: 12 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/6d4f4ba7-f5b0-481a-bd19-81d004fb9a54',
};
