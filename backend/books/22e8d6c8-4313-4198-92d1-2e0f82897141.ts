export default {
  entity: {
    id: '22e8d6c8-4313-4198-92d1-2e0f82897141',
    name: '红旗一九六〇年第七期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/22e8d6c8-4313-4198-92d1-2e0f82897141.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title:
          '论帝国主义是现代战争的根源并论各国人民争取和平的道路——为纪念列宁诞生九十周年而作',
        authors: ['于兆力'],
        page_start: 3,
        page_end: 14,
        dates: [{ year: 1960, month: 4 }],
      },
      {
        title: '机械工业技术革新运动的新高潮',
        authors: ['赵尔陆'],
        page_start: 15,
        page_end: 23,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1960, month: 4 }],
      },
      {
        title: '推行农业机械化必须全面规划、两条腿走路',
        authors: ['欧阳钦'],
        page_start: 24,
        page_end: 34,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1960, month: 4 }],
      },
      {
        title: '我们的人民一定要过康健的文明的生活',
        authors: ['闻师润'],
        page_start: 35,
        page_end: 37,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1960, month: 4 }],
      },
      {
        title:
          '一个售货员理论学习小组——哈尔滨市第七百货商店毛泽东著作青年学习小组介绍',
        authors: ['于庆和', '陆振东', '毕可安'],
        page_start: 38,
        page_end: 42,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1960, month: 4 }],
      },
      {
        title: '匈牙利人民的伟大胜利',
        authors: ['郝德青'],
        page_start: 43,
        page_end: 47,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1960, month: 4 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.017, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/22e8d6c8-4313-4198-92d1-2e0f82897141.pdf',
};
