export default {
  entity: {
    id: '596b9ea2-224b-498b-a777-3990f20b5a3b',
    name: '魏秉奎同志在省委城市民兵工作会议上的总结发言',
    internal: false,
    official: false,
    type: 'img',
    author: '',
    files: new Array(11)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/596b9ea2-224b-498b-a777-3990f20b5a3b/${
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
        title: '魏秉奎同志在省委城市民兵工作会议上的总结发言',
        authors: ['魏秉奎'],
        page_start: 1,
        page_end: 5,
        dates: [{ year: 1973, month: 12, day: 20 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/596b9ea2-224b-498b-a777-3990f20b5a3b',
};
