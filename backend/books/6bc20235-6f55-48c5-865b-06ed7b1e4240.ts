export default {
  entity: {
    id: '6bc20235-6f55-48c5-865b-06ed7b1e4240',
    name: '红旗一九六〇年第十一期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/6bc20235-6f55-48c5-865b-06ed7b1e4240.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title:
          '支持苏联正义立场 反对美国破坏首脑会议——五月二十日在首都各界人民群众大会上的讲话',
        authors: ['邓小平'],
        page_start: 3,
        page_end: 5,
        dates: [{ year: 1960, month: 5, day: 20 }],
      },
      {
        title: '最后胜利一定属于日本人民',
        authors: ['《红旗》杂志评论员'],
        page_start: 6,
        page_end: 9,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1960, month: 6 }],
      },
      {
        title: '威胁世界和平的两个战争策源地',
        authors: ['钟心青'],
        page_start: 10,
        page_end: 17,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1960, month: 6 }],
      },
      {
        title: '关于思维和存在的同一性问题',
        authors: ['王若水'],
        page_start: 18,
        page_end: 31,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1960, month: 6 }],
      },
      {
        title: '让体育更好地为社会主义建设服务',
        authors: ['荣高棠'],
        page_start: 32,
        page_end: 38,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1960, month: 6 }],
      },
      {
        title: '青年群众学习理论的新高潮',
        authors: ['胡克实'],
        page_start: 39,
        page_end: 43,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1960, month: 6 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.017, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/6bc20235-6f55-48c5-865b-06ed7b1e4240.pdf',
};
