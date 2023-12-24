export default {
  entity: {
    id: '42cdc3c3-bd66-48d9-8298-c608c2b9e8e7',
    name: '王知常的反革命修正主义言论（1976.12）',
    internal: false,
    official: true,
    type: 'img',
    author: '1976.12',
    files: new Array(10)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/42cdc3c3-bd66-48d9-8298-c608c2b9e8e7/${
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
        title: '王知常的反革命修正主义言论',
        authors: ['王知常'],
        page_start: 1,
        page_end: 10,
        dates: [{ year: 1976, month: 12 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/42cdc3c3-bd66-48d9-8298-c608c2b9e8e7',
};
