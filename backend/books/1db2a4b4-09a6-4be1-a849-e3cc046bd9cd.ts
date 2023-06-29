export default {
  entity: {
    id: '1db2a4b4-09a6-4be1-a849-e3cc046bd9cd',
    name: '红旗一九六一年第十九期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/1db2a4b4-09a6-4be1-a849-e3cc046bd9cd.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title:
          '我国社会主义建设总路线万岁——庆祝伟大的中华人民共和国成立二十周年',
        authors: ['《红旗》杂志编辑部'],
        page_start: 3,
        page_end: 6,
        dates: [{ year: 1961, month: 10 }],
      },
      {
        title: '把我国电影艺术提高到一个更新的水平',
        authors: ['夏衍'],
        page_start: 7,
        page_end: 19,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 10 }],
      },
      {
        title: '关于社会主义企业经济核算的几个问题',
        authors: ['李成瑞', '左春台'],
        page_start: 20,
        page_end: 27,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 10 }],
      },
      {
        title: '加强农村基层干部学习的领导',
        authors: ['黄志刚'],
        page_start: 28,
        page_end: 32,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 10 }],
      },
      {
        title: '在严格要求下从科学研究工作',
        authors: ['侯外庐'],
        page_start: 33,
        page_end: 37,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 10 }],
      },
      {
        title: '科学的批判精神',
        authors: ['郑英年'],
        page_start: 37,
        page_end: 41,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 10 }],
      },
      {
        title: '“微粒”热与备战狂',
        authors: ['陈原'],
        page_start: 42,
        page_end: 43,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 10 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.017, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/1db2a4b4-09a6-4be1-a849-e3cc046bd9cd.pdf',
};
