export default {
  entity: {
    id: '8800caac-f5a2-417f-aab5-1d6959527fd3',
    name: '首长讲话',
    internal: true,
    official: true,
    type: 'img',
    author: '张春桥',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/8800caac-f5a2-417f-aab5-1d6959527fd3/1.jpg,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/8800caac-f5a2-417f-aab5-1d6959527fd3/2.jpg',
  },
  parser_option: {
    page_limits: [],
    ext: 'jpg',
    articles: [
      {
        title: '张春桥同志在上海市革命委员会常委会上的讲话',
        authors: ['张春桥'],
        page_start: 1,
        page_end: 2,
        dates: [{ year: 1967, month: 7, day: 11 }],
      },
    ],
    ocr: {
      standard_paragraph_merge_strategy_threshold: 0.5,
      differential_paragraph_merge_strategy_threshold: 0,
    },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/8800caac-f5a2-417f-aab5-1d6959527fd3',
};
