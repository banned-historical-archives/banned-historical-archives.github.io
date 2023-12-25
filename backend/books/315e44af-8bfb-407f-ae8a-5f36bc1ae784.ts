export default {
  entity: {
    id: '315e44af-8bfb-407f-ae8a-5f36bc1ae784',
    name: '朱永嘉的反革命修正主义言论（1976.12）',
    internal: false,
    official: false,
    type: 'img',
    author: '朱永嘉，1976.12',
    files: new Array(19)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/315e44af-8bfb-407f-ae8a-5f36bc1ae784/${
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
        title: '朱永嘉的反革命修正主义言论',
        authors: ['朱永嘉'],
        page_start: 1,
        page_end: 19,
        dates: [{ year: 1976, month: 12 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/315e44af-8bfb-407f-ae8a-5f36bc1ae784',
};
