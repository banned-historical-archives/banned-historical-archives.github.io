export default {
  entity: {
    id: 'c33b3d02-2238-45b3-bd4a-5b01e20b1100',
    name: '红旗一九六五年第十期',
    internal: false,
    official: false,
    type: 'pdf',
    author: '',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/c33b3d02-2238-45b3-bd4a-5b01e20b1100.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '人民战争胜利万岁——纪念中国人民抗日战争胜利二十周年',
        authors: ['林彪'],
        page_start: 3,
        page_end: 30,
        dates: [{ year: 1965 }],
      },
      {
        title: '在技术革新中学习运用唯物辩证法',
        authors: ['程朝有'],
        page_start: 31,
        page_end: 36,
        dates: [{ year: 1965 }],
        ocr: { auto_vsplit: false, vsplit: 0.385 },
      },
      {
        title: '天体是不断发展的',
        authors: ['戴文赛'],
        page_start: 37,
        page_end: 44,
        dates: [{ year: 1965 }],
        ocr: { auto_vsplit: false, vsplit: 0.385 },
      },
      {
        title: '回忆武装宣传队的一次演出',
        authors: ['刘一雁'],
        page_start: 45,
        page_end: 47,
        dates: [{ year: 1965 }],
        ocr: { auto_vsplit: false, vsplit: 0.385 },
      },
    ],
    ocr: { content_thresholds: [0.07, 0.165, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/c33b3d02-2238-45b3-bd4a-5b01e20b1100.pdf',
};
