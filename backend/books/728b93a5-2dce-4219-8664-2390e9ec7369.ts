export default {
  entity: {
    id: '728b93a5-2dce-4219-8664-2390e9ec7369',
    name: 'test',
    internal: false,
    official: false,
    type: 'pdf',
    author: '',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/728b93a5-2dce-4219-8664-2390e9ec7369.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '目录',
        authors: ['毛泽东', '江青'],
        page_start: 1,
        page_end: 5,
        dates: [{ year: 1949, month: 10, day: 1 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/728b93a5-2dce-4219-8664-2390e9ec7369.pdf',
};
