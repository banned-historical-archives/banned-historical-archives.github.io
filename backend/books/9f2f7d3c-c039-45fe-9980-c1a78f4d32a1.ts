export default {
  entity: {
    id: '9f2f7d3c-c039-45fe-9980-c1a78f4d32a1',
    name: '红旗一九六四年第十四期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/9f2f7d3c-c039-45fe-9980-c1a78f4d32a1.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title:
          '中国共产党中央委员会对于苏联共产党中央委员会六月十五日来信的复信',
        authors: ['中国共产党中央委员会'],
        page_start: 3,
        page_end: 12,
        dates: [{ year: 1964, month: 7, day: 28 }],
      },
      {
        title: '苏共中央一九六四年六月十五日致中共中央的信',
        authors: ['苏联共产党中央委员会'],
        page_start: 13,
        page_end: 19,
        dates: [{ year: 1964, month: 6, day: 15 }],
      },
      {
        title: '在京剧现代戏观摩演出大会上的讲话',
        authors: ['彭真'],
        page_start: 20,
        page_end: 26,
        dates: [{ year: 1964, month: 7, day: 1 }],
      },
      {
        title: '越南社会主义革命和社会主义建设的伟大十年',
        authors: ['朱其文'],
        page_start: 27,
        page_end: 35,
        dates: [{ year: 1964 }],
        ocr: { auto_vsplit: false, vsplit: 0.385 },
      },
      {
        title: '培养接班人是革命事业的千年万年大计',
        authors: ['红旗杂志编辑部'],
        page_start: 36,
        page_end: 41,
        dates: [{ year: 1964 }],
      },
      {
        title: '农业向集约化方向发展的原因是什么？',
        authors: ['红旗杂志编辑部'],
        page_start: 42,
        page_end: 43,
        dates: [{ year: 1964 }],
      },
    ],
    ocr: { content_thresholds: [0.07, 0.165, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/9f2f7d3c-c039-45fe-9980-c1a78f4d32a1.pdf',
};
