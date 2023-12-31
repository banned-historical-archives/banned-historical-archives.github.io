export default {
  entity: {
    id: 'b9821618-502f-4536-89ef-08e0ec938b0a',
    name: '红旗一九六二年第二十二期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/b9821618-502f-4536-89ef-08e0ec938b0a.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title:
          '保卫马克思列宁主义的纯洁性——纪念莫斯科宣言五周年和莫斯科声明二周年',
        authors: ['《红旗》杂志编辑部'],
        page_start: 3,
        page_end: 8,
        dates: [{ year: 1962, month: 11, day: 16 }],
      },
      {
        title: '尼赫鲁政府为什么到现在还拒绝和平谈判？',
        authors: ['《红旗》杂志编辑部'],
        page_start: 9,
        page_end: 13,
        dates: [{ year: 1962, month: 11, day: 16 }],
      },
      {
        title: '阶级斗争规律是不能忘记的',
        authors: ['施东向'],
        page_start: 14,
        page_end: 23,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.46,
          content_thresholds: [0, 0.17, 0, 0],
        },
        dates: [{ year: 1962, month: 11, day: 16 }],
      },
      {
        title: '从文艺上看现代修正主义者的阶级调和思想',
        authors: ['黎庶之'],
        page_start: 24,
        page_end: 29,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.46,
          content_thresholds: [0, 0.17, 0, 0],
        },
        dates: [{ year: 1962, month: 11, day: 16 }],
      },
      {
        title: '庄稼人',
        authors: ['张庆田'],
        page_start: 30,
        page_end: 34,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.46,
          content_thresholds: [0, 0.17, 0, 0],
        },
        dates: [{ year: 1962, month: 11, day: 16 }],
      },
      {
        title: '植物保护对保证农业增产的作用',
        authors: ['沈其益'],
        page_start: 35,
        page_end: 43,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.46,
          content_thresholds: [0, 0.17, 0, 0],
        },
        dates: [{ year: 1962, month: 11, day: 16 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/b9821618-502f-4536-89ef-08e0ec938b0a.pdf',
};
