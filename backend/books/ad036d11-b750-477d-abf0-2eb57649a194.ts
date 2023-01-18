export default {
  entity: {
    id: 'ad036d11-b750-477d-abf0-2eb57649a194',
    name: '帝国主义是资本主义的最高阶段（人民出版社1964年版）',
    internal: false,
    official: true,
    type: 'pdf',
    author: '列宁，人民出版社1964年版',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives5/main/ad036d11-b750-477d-abf0-2eb57649a194.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '序言',
        authors: ['列宁'],
        page_start: 7,
        page_end: 8,
        dates: [{ year: 1917, month: 4, day: 26 }],
      },
      {
        title: '法文版和德文版序言',
        authors: ['列宁'],
        page_start: 9,
        page_end: 14,
        dates: [{ year: 1920, month: 7, day: 6 }],
      },
      {
        title: '序言',
        authors: ['列宁'],
        page_start: 15,
        page_end: 121,
        dates: [
          { year: 1916, month: 1 },
          { year: 1916, month: 6 },
        ],
      },
      { title: '注释', authors: [], page_start: 122, page_end: 123, dates: [] },
    ],
    ocr: {
      content_thresholds: [0, 0.094, 0, 0],
      standard_paragraph_merge_strategy_threshold: 0.158,
      differential_paragraph_merge_strategy_threshold: 0,
    },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives5/ad036d11-b750-477d-abf0-2eb57649a194.pdf',
};
