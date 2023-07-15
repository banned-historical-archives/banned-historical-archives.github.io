export default {
  entity: {
    id: '5c6b67d9-f3a6-4597-89a6-7c3541c5a4c1',
    name: '红旗一九六三年第二十一期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/5c6b67d9-f3a6-4597-89a6-7c3541c5a4c1.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '列宁斯大林论十月革命的道路',
        authors: ['施东向'],
        page_start: 3,
        page_end: 14,
        dates: [{ year: 1963, month: 11, day: 7 }],
      },
      {
        title: '美国帝国主义是最大的国际剥削者',
        authors: ['万光'],
        page_start: 15,
        page_end: 24,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1963, month: 11, day: 7 }],
      },
      {
        title: '“八一”公社五年间',
        authors: ['万绍鹤'],
        page_start: 25,
        page_end: 29,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1963, month: 11, day: 7 }],
      },
      {
        title: '在生产斗争、科学实验中认识和运用自然规律',
        authors: ['甘子玉'],
        page_start: 30,
        page_end: 35,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1963, month: 11, day: 7 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.017, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/5c6b67d9-f3a6-4597-89a6-7c3541c5a4c1.pdf',
};
