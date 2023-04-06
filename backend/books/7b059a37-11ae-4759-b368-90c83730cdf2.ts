export default {
  entity: {
    id: '7b059a37-11ae-4759-b368-90c83730cdf2',
    name: '红旗一九五九年第二十二期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/7b059a37-11ae-4759-b368-90c83730cdf2.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '充分发挥先进生产者在群众运动中的作用',
        authors: ['刘宁一'],
        page_start: 3,
        page_end: 6,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1959, month: 11 }],
      },
      {
        title: '更大规模地开展技术革新运动',
        authors: ['许辛学'],
        page_start: 7,
        page_end: 9,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1959, month: 11 }],
      },
      {
        title: '在新生事物面前',
        authors: ['施东向'],
        page_start: 9,
        page_end: 12,
        dates: [{ year: 1959, month: 11 }],
      },
      {
        title: '无产阶级世界观和资产阶级世界观的斗争',
        authors: ['陈伯达'],
        page_start: 13,
        page_end: 18,
        dates: [{ year: 1959, month: 11 }],
      },
      {
        title: '一九五九年安徽省工业生产继续跃进的形势',
        authors: ['李任之'],
        page_start: 19,
        page_end: 25,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1959, month: 11 }],
      },
      {
        title: '路是人走出来的——记大理白族自治州凤鸣人民公社',
        authors: ['欧根', '杨真慰', '陈渭庚', '张春虎', '李泽藩', '兰炳丞'],
        page_start: 26,
        page_end: 31,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1959, month: 11 }],
      },
      {
        title:
          '关于等价交换和按劳分配的若干问题——对胡钧同志的“关于全民所有制内部商品价值形式问题”一文的商讨',
        authors: ['关梦觉'],
        page_start: 32,
        page_end: 43,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1959, month: 11 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.017, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/7b059a37-11ae-4759-b368-90c83730cdf2.pdf',
};
