export default {
  entity: {
    id: 'a1a4c085-337c-4d83-8d2b-35b672e12a34',
    name: '彻底清算冯国柱紧跟“四人帮”篡党夺权的罪行',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(7)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/a1a4c085-337c-4d83-8d2b-35b672e12a34/${
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
        title: '彻底清算冯国柱紧跟“四人帮”篡党夺权的罪行',
        authors: ['国际组革命群众'],
        page_start: 1,
        page_end: 7,
        dates: [{ year: 1976, month: 11, day: 1 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/a1a4c085-337c-4d83-8d2b-35b672e12a34',
};
