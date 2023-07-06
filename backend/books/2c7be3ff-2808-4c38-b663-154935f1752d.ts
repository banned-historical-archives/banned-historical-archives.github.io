export default {
  entity: {
    id: '2c7be3ff-2808-4c38-b663-154935f1752d',
    name: '红旗一九六二年第十期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/2c7be3ff-2808-4c38-b663-154935f1752d.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title:
          '知识分子前进的道路——纪念《在延安文艺座谈会上的讲话》发表二十周年',
        authors: ['《红旗》杂志编辑部'],
        page_start: 3,
        page_end: 8,
        dates: [{ year: 1962, month: 5, day: 16 }],
      },
      {
        title: '无产阶级政党的革命传统——论列宁的《怎么办？》',
        authors: ['卞忠因'],
        page_start: 9,
        page_end: 18,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 5, day: 16 }],
      },
      {
        title: '严格要求和耐心说服相结合',
        authors: ['唐平铸'],
        page_start: 19,
        page_end: 23,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 5, day: 16 }],
      },
      {
        title: '数学方法在认识客观世界中的作用',
        authors: ['何祚麻'],
        page_start: 24,
        page_end: 32,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 5, day: 16 }],
      },
      {
        title: '麦克米伦的碰壁和“自由国家”之间的“合作纽带”',
        authors: ['张振亚'],
        page_start: 33,
        page_end: 37,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 5, day: 16 }],
      },
      {
        title: '如此“就业机会均等”',
        authors: ['胡思升'],
        page_start: 37,
        page_end: 39,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 5, day: 16 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.017, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/2c7be3ff-2808-4c38-b663-154935f1752d.pdf',
};
