export default {
  entity: {
    id: '759cd121-155f-4fcc-84ef-01aef9a5ed92',
    name: '红旗一九六三年第十八期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/759cd121-155f-4fcc-84ef-01aef9a5ed92.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '关于斯大林问题——二评苏共中央的公开信',
        authors: ['《人民日报》编辑部', '《红旗》杂志编辑部'],
        page_start: 3,
        page_end: 14,
        dates: [{ year: 1963, month: 9, day: 13 }],
      },
      {
        title: '在尼赫鲁反华政策的背后',
        authors: ['徐景琳'],
        page_start: 15,
        page_end: 26,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1963, month: 9, day: 13 }],
      },
      {
        title: '“不发达经济学”是新殖民主义的“理论”',
        authors: ['黄展鹏'],
        page_start: 27,
        page_end: 31,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1963, month: 9, day: 13 }],
      },
      {
        title: '提高农村基层党组织的战斗力',
        authors: ['魏文伯'],
        page_start: 32,
        page_end: 43,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1963, month: 9, day: 13 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.017, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/759cd121-155f-4fcc-84ef-01aef9a5ed92.pdf',
};
