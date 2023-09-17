export default {
  entity: {
    id: '66d4526c-0990-4a39-a263-b305c71c0f7f',
    name: 'Taiwan Journal Publishes Secret Speech by Wang Hung-Wen',
    internal: false,
    official: false,
    type: 'pdf',
    author: '',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/66d4526c-0990-4a39-a263-b305c71c0f7f.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '洪文在中央读书班的报告',
        authors: ['王洪文'],
        page_start: 2,
        page_end: 18,
        dates: [{ year: 1974, month: 1, day: 14 }],
      },
    ],
    ocr: { content_thresholds: [0.07, 0.07, 0, 0] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives3/66d4526c-0990-4a39-a263-b305c71c0f7f.pdf',
};
