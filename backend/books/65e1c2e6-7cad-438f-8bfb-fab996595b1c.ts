export default {
  entity: {
    id: '65e1c2e6-7cad-438f-8bfb-fab996595b1c',
    name: '关于正确处理人民内部矛盾的问题（毛泽东著作选读）',
    internal: false,
    official: false,
    type: 'pdf',
    author: '毛泽东',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/65e1c2e6-7cad-438f-8bfb-fab996595b1c.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '关于正确处理人民内部矛盾的问题',
        authors: ['毛泽东'],
        page_start: 1,
        page_end: 54,
        dates: [{ year: 1957, month: 2, day: 27 }],
      },
    ],
    ocr: {
      content_thresholds: [0.139, 0, 0, 0],
      standard_paragraph_merge_strategy_threshold: 0.178,
      differential_paragraph_merge_strategy_threshold: 0,
    },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives3/65e1c2e6-7cad-438f-8bfb-fab996595b1c.pdf',
};
