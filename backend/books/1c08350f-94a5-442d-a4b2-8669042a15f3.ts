export default {
  entity: {
    id: '1c08350f-94a5-442d-a4b2-8669042a15f3',
    name: '社会改良还是社会革命（生活·读书·新知三联书店1958年版）',
    internal: false,
    official: true,
    type: 'pdf',
    author: '罗莎·卢森堡，生活·读书·新知三联书店1958年版',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives5/main/1c08350f-94a5-442d-a4b2-8669042a15f3.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '出版者说明',
        authors: [],
        page_start: 4,
        page_end: 4,
        dates: [{ year: 1958 }],
      },
      {
        title: '社会改良还是社会革命',
        authors: ['罗莎·卢森堡'],
        page_start: 6,
        page_end: 75,
        dates: [{ year: 1899 }],
      },
      {
        title: '民军和军国主义',
        authors: ['罗莎·卢森堡'],
        page_start: 76,
        page_end: 92,
        dates: [{ year: 1899, month: 2 }],
      },
      {
        title: '站在工人背后的“德意志科学”',
        authors: ['罗莎·卢森堡'],
        page_start: 93,
        page_end: 119,
        is_range_date: true,
        dates: [{ year: 1899 }, { year: 1900 }],
      },
    ],
    ocr: { content_thresholds: [0.139, 0, 0, 0] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives5/1c08350f-94a5-442d-a4b2-8669042a15f3.pdf',
};
