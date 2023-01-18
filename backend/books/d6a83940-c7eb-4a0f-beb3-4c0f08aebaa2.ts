export default {
  entity: {
    id: 'd6a83940-c7eb-4a0f-beb3-4c0f08aebaa2',
    name: '人民战争与革命',
    internal: false,
    official: true,
    type: 'pdf',
    author: '巴西共产党（红色派）',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/d6a83940-c7eb-4a0f-beb3-4c0f08aebaa2.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '人民战争与革命',
        authors: ['巴西共产党（红色派）'],
        page_start: 1,
        page_end: 23,
        dates: [{ year: 2014, month: 5 }],
      },
    ],
    ocr: {
      standard_paragraph_merge_strategy_threshold: 0.178,
      differential_paragraph_merge_strategy_threshold: 0,
    },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives3/d6a83940-c7eb-4a0f-beb3-4c0f08aebaa2.pdf',
};
