export default {
  entity: {
    id: '62a3209f-3286-4a2d-8133-9d62ed7ea1ae',
    name: '王、张、江、姚“四人帮”篡党夺权的反革命罪行在我省的流毒和影响（1977.3四川）',
    internal: false,
    official: false,
    type: 'img',
    author: '中共四川省委政策研究室编，1977.4四川',
    files: new Array(24)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/62a3209f-3286-4a2d-8133-9d62ed7ea1ae/${
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
        title: '王、张、江、姚“四人帮”篡党夺权的反革命罪行在我省的流毒和影响',
        authors: ['中共四川省委政策研究室'],
        page_start: 1,
        page_end: 24,
        dates: [{ year: 1977, month: 3 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/62a3209f-3286-4a2d-8133-9d62ed7ea1ae',
};
