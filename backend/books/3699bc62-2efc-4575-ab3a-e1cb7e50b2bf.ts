export default {
  entity: {
    id: '3699bc62-2efc-4575-ab3a-e1cb7e50b2bf',
    name: '张春桥同志接见全国教育工作会议领导小组时的讲话',
    internal: true,
    official: true,
    type: 'pdf',
    author: '',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/3699bc62-2efc-4575-ab3a-e1cb7e50b2bf.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '张春桥同志接见全国教育工作会议领导小组时的讲话',
        authors: ['张春桥'],
        page_start: 1,
        page_end: 5,
        dates: [{ year: 1971, month: 7, day: 11 }],
      },
    ],
    ocr: {
      standard_paragraph_merge_strategy_threshold: 0.16,
      differential_paragraph_merge_strategy_threshold: 0,
      content_thresholds: [0, 0.12, 0, 0],
    },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/3699bc62-2efc-4575-ab3a-e1cb7e50b2bf.pdf',
};
