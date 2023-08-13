export default {
  entity: {
    id: 'b6e37d9b-0d2d-4af4-9560-e56b0d67358f',
    name: '红旗一九六一年第十一期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/b6e37d9b-0d2d-4af4-9560-e56b0d67358f.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '统一战线是中国人民争取胜利的一个法宝',
        authors: ['李维汉'],
        page_start: 3,
        page_end: 13,
        dates: [{ year: 1961, month: 6 }],
      },
      {
        title: '实验、抽象和假说在科学研究中的作用',
        authors: ['何祚庥'],
        page_start: 14,
        page_end: 24,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 6 }],
      },
      {
        title: '关于百家争鸣的一个问题',
        authors: ['黎庶之'],
        page_start: 25,
        page_end: 28,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 6 }],
      },
      {
        title:
          '关于中国近代经济史中一个材料的调查——光绪九年商人祝大椿是否在上海创办了“源昌机器五金厂”？',
        authors: ['谢商'],
        page_start: 29,
        page_end: 32,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 6 }],
      },
      {
        title: '南斯拉夫“企业自治”的真相',
        authors: ['廖原'],
        page_start: 33,
        page_end: 39,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 6 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.017, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/b6e37d9b-0d2d-4af4-9560-e56b0d67358f.pdf',
};
