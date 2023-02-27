export default {
  entity: {
    id: '0c621503-01d4-4b8f-9cf2-f405bbb14ad9',
    name: '纪念中国共产党成立一百周年（2021.7.1）',
    internal: false,
    official: false,
    type: 'pdf',
    author: '中国共产主义小组（毛主义），2021.7.1',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/0c621503-01d4-4b8f-9cf2-f405bbb14ad9.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '纪念中国共产党成立一百周年',
        alias: '共产主义小组（毛主义）：纪念中国共产党成立一百周年',
        authors: ['共产主义小组（毛主义）'],
        page_start: 1,
        page_end: 23,
        tags: [
          { name: '共产主义小组（毛主义）', type: 'issuer' }, // 发行方/出版方
        ],
        dates: [{ year: 2021, month: 7, day: 1 }],
      },
    ],
    ocr: {
      standard_paragraph_merge_strategy_threshold: 0.186,
      differential_paragraph_merge_strategy_threshold: 0,
    },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives3/0c621503-01d4-4b8f-9cf2-f405bbb14ad9.pdf',
};
