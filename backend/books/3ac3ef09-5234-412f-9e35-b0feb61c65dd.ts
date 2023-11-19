export default {
  entity: {
    id: '3ac3ef09-5234-412f-9e35-b0feb61c65dd',
    name: '浙江文革大事记（1966.11.10-1966.12.30）',
    internal: false,
    official: false,
    type: 'pdf',
    author: '中共浙江省委党校',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/3ac3ef09-5234-412f-9e35-b0feb61c65dd.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '浙江文革大事记（1966.11.10-1966.12.30）',
        authors: ['中共浙江省委党校'],
        page_start: 1,
        page_end: 51,
        is_range_date: true,
        dates: [
          { year: 1966, month: 11, day: 10 },
          { year: 1966, month: 12, day: 30 },
        ],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives16/3ac3ef09-5234-412f-9e35-b0feb61c65dd.pdf',
};
