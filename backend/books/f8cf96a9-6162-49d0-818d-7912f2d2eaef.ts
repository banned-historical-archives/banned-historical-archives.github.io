export default {
  entity: {
    id: 'f8cf96a9-6162-49d0-818d-7912f2d2eaef',
    name: '堪萨斯城红卫兵新路线',
    internal: false,
    official: true,
    type: 'pdf',
    author: '美国堪萨斯红卫兵',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/f8cf96a9-6162-49d0-818d-7912f2d2eaef.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '堪萨斯城红卫兵新路线',
        authors: ['堪萨斯城红卫兵'],
        page_start: 1,
        page_end: 7,
        dates: [{ year: 2019 }],
      },
    ],
    ocr: {
      standard_paragraph_merge_strategy_threshold: 0.178,
      differential_paragraph_merge_strategy_threshold: 0,
    },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives3/f8cf96a9-6162-49d0-818d-7912f2d2eaef.pdf',
};
