export default {
  entity: {
    id: 'b7e193b1-6ced-4d2a-ad81-52de70acb0dc',
    name: '总理、邓小平、张春桥副总理在国务院领导人见面会上的讲话（1975.2.1）',
    internal: false,
    official: true,
    type: 'pdf',
    author: '周恩来、邓小平、张春桥，哈尔滨市小汽车公司传达',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/b7e193b1-6ced-4d2a-ad81-52de70acb0dc.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '总理、邓小平、张春桥副总理在国务院领导人见面会上的讲话',
        authors: ['周恩来', '邓小平', '张春桥'],
        page_start: 1,
        page_end: 7,
        dates: [{ year: 1975, month: 2, day: 1 }],
      },
    ],
    ocr: {
      standard_paragraph_merge_strategy_threshold: 0.169,
      differential_paragraph_merge_strategy_threshold: 0,
      content_thresholds: [0, 0.12, 0, 0],
    },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/b7e193b1-6ced-4d2a-ad81-52de70acb0dc.pdf',
};
