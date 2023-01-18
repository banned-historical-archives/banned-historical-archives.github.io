export default {
  entity: {
    id: 'aaa61d45-fb7f-40d1-8012-54defb857880',
    name: '马克思主义的三个来源和三个组成部分（人民出版社1974年版）',
    internal: false,
    official: true,
    type: 'pdf',
    author: '列宁，人民出版社1974年版',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives5/main/aaa61d45-fb7f-40d1-8012-54defb857880.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '马克思主义的三个来源和三个组成部分',
        authors: ['列宁'],
        page_start: 4,
        page_end: 11,
        dates: [{ year: 1913, month: 3 }],
      },
    ],
    ocr: {
      content_thresholds: [0, 0.1, 0, 0],
      standard_paragraph_merge_strategy_threshold: 0.19,
      differential_paragraph_merge_strategy_threshold: 0,
    },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives5/aaa61d45-fb7f-40d1-8012-54defb857880.pdf',
};
