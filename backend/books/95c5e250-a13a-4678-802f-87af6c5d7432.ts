export default {
  entity: {
    id: '95c5e250-a13a-4678-802f-87af6c5d7432',
    name: '红旗一九六三年第二期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/95c5e250-a13a-4678-802f-87af6c5d7432.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '古巴卡斯特罗总理在美洲妇女代表大会上的演说',
        authors: ['卡斯特罗'],
        page_start: 3,
        page_end: 14,
        dates: [{ year: 1963, month: 1, day: 23 }],
      },
      {
        title: '把工业支援农业的工作提到更高的水平',
        authors: ['许辛学'],
        page_start: 15,
        page_end: 26,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1963, month: 1, day: 23 }],
      },
      {
        title: '充分发挥作物良种的增产作用',
        authors: ['戴松恩'],
        page_start: 27,
        page_end: 36,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1963, month: 1, day: 23 }],
      },
      {
        title: '惩前毖后，治病救人',
        authors: ['李践为'],
        page_start: 37,
        page_end: 43,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1963, month: 1, day: 23 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.017, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/95c5e250-a13a-4678-802f-87af6c5d7432.pdf',
};
