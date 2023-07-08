export default {
  entity: {
    id: 'a5e3d70d-ce74-4088-b399-d38932fa7fd3',
    name: '红旗一九六二年第十五、十六期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/a5e3d70d-ce74-4088-b399-d38932fa7fd3.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '论共产党员的修养',
        authors: ['刘少奇'],
        page_start: 3,
        page_end: 40,
        dates: [{ year: 1962, month: 8, day: 1 }],
      },
      {
        title: '中国革命和武装斗争——纪念中国人民解放军建军三十五周年',
        authors: ['肖华'],
        page_start: 41,
        page_end: 48,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 8, day: 1 }],
      },
      {
        title: '我国北方盐碱地改良和防止盐碱化问题',
        authors: ['张子林', '黄荣翰'],
        page_start: 49,
        page_end: 58,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 8, day: 1 }],
      },
      {
        title: '关于节约利用木材问题',
        authors: ['朱介子'],
        page_start: 59,
        page_end: 64,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 8, day: 1 }],
      },
      {
        title: '言之无文，行而不远',
        authors: ['郭预衡'],
        page_start: 65,
        page_end: 67,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 8, day: 1 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.017, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/a5e3d70d-ce74-4088-b399-d38932fa7fd3.pdf',
};
