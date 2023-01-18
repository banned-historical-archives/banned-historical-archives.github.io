export default {
  entity: {
    id: '356200c1-f3bd-460d-b160-e9b1d6c20060',
    name: '论个人在历史上的作用问题（生活·读书·新知三联书店1964年版）',
    internal: false,
    official: true,
    type: 'pdf',
    author: '普列汉诺夫，生活·读书·新知三联书店1964年版',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives5/main/356200c1-f3bd-460d-b160-e9b1d6c20060.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '论个人在历史上的作用问题',
        authors: ['普列汉诺夫'],
        page_start: 4,
        page_end: 55,
        dates: [{ year: 1898 }],
      },
      { title: '注释', authors: [], page_start: 56, page_end: 61, dates: [] },
      {
        title: '人名索引',
        authors: [],
        page_start: 62,
        page_end: 69,
        ocr: { auto_vsplit: false, vsplit: 0.495 },
        dates: [],
      },
    ],
    ocr: { content_thresholds: [0, 0.128, 0, 0] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives5/356200c1-f3bd-460d-b160-e9b1d6c20060.pdf',
};
