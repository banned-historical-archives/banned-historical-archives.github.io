export default {
  entity: {
    id: '902188ea-6b5e-461f-aa76-ef2f80cb949a',
    name: '彻底揭发批判“四人帮”及其伸向湖北的黑手夏、朱、胡等人阴谋篡党夺权的反革命罪行',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(6)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/902188ea-6b5e-461f-aa76-ef2f80cb949a/${
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
        title:
          '彻底揭发批判“四人帮”及其伸向湖北的黑手夏、朱、胡等人阴谋篡党夺权的反革命罪行',
        authors: ['古博'],
        page_start: 1,
        page_end: 6,
        dates: [{ year: 1977 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/902188ea-6b5e-461f-aa76-ef2f80cb949a',
};
