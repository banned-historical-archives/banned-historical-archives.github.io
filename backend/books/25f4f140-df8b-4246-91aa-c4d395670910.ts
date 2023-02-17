export default {
  entity: {
    id: '25f4f140-df8b-4246-91aa-c4d395670910',
    name: 'test4',
    internal: false,
    official: false,
    type: 'pdf',
    author: '',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/25f4f140-df8b-4246-91aa-c4d395670910.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '目录',
        authors: ['毛泽东', '江青'],
        page_start: 1,
        page_end: 7,
        dates: [{ year: 1949, month: 10, day: 1 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/25f4f140-df8b-4246-91aa-c4d395670910.pdf',
};
