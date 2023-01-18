export default {
  entity: {
    id: 'b4980847-3787-4b09-b95f-d4bc32199051',
    name: '红旗一九六六年第五期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/b4980847-3787-4b09-b95f-d4bc32199051.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '一九六六年二月十二日在湖北省农村工作会议上的讲话',
        authors: ['王任重'],
        page_start: 3,
        page_end: 16,
        dates: [{ year: 1966, month: 2, day: 12 }],
      },
      {
        title: '《海瑞骂皇帝》和《海瑞罢官》是反党反社会主义的两株大毒草',
        authors: ['关峰', '林杰'],
        page_start: 17,
        page_end: 35,
        ocr: { vsplit: 0.35 },
        dates: [{ year: 1966 }],
      },
      {
        title: '文艺领域里必须坚持马克思主义的认识论——对形象思维论的批判',
        authors: ['郑季翘'],
        page_start: 36,
        page_end: 54,
        ocr: { vsplit: 0.35 },
        dates: [{ year: 1966 }],
      },
      {
        title: '工农兵诗选',
        authors: ['梅茂亭', '薛治本', '殷光兰', '郭国栋'],
        page_start: 55,
        page_end: 55,
        ocr: { vsplit: 0.35 },
        dates: [{ year: 1966 }],
      },
    ],
    ocr: {
      auto_vsplit: false,
      vsplit: 0,
      content_thresholds: [0, 0.1, 0, 0.1],
    },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/b4980847-3787-4b09-b95f-d4bc32199051.pdf',
};
