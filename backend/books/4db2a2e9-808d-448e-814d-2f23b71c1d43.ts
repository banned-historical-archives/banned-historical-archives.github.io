export default {
  entity: {
    id: '4db2a2e9-808d-448e-814d-2f23b71c1d43',
    name: '红旗一九六三年第十五期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/4db2a2e9-808d-448e-814d-2f23b71c1d43.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '中国共产党中央委员会声明',
        authors: ['中国共产党中央委员会'],
        page_start: 3,
        page_end: 4,
        dates: [{ year: 1963, month: 7, day: 1 }],
      },
      {
        title: '中国共产党中央委员会声明',
        authors: ['中国共产党中央委员会'],
        page_start: 5,
        page_end: 5,
        dates: [{ year: 1963, month: 7, day: 5 }],
      },
      {
        title: '中国共产党中央委员会声明',
        authors: ['中国共产党中央委员会'],
        page_start: 6,
        page_end: 7,
        dates: [{ year: 1963, month: 7, day: 10 }],
      },
      {
        title: '中国共产党中央委员会发言人声明',
        authors: ['中国共产党中央委员会发言人'],
        page_start: 8,
        page_end: 9,
        dates: [{ year: 1963, month: 7, day: 19 }],
      },
      {
        title:
          '《人民日报》编者关于苏共中央给苏联各级党组织和全体党员的公开信的按语',
        authors: ['《人民日报》编辑部'],
        page_start: 10,
        page_end: 11,
        dates: [{ year: 1963, month: 8, day: 1 }],
      },
      {
        title:
          '中国政府主张全面、彻底、干净、坚决地禁止和销毁核武器、倡议召开世界各国政府首脑会议的声明',
        authors: [],
        page_start: 12,
        page_end: 15,
        dates: [{ year: 1963, month: 7, day: 31 }],
      },
      {
        title: '以毛泽东思想为指针，进行活的思想教育',
        authors: ['肖华'],
        page_start: 16,
        page_end: 25,
        dates: [{ year: 1963, month: 8, day: 1 }],
      },
      {
        title: '学习马克思关于再生产的理论',
        authors: ['高征绳'],
        page_start: 26,
        page_end: 34,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1963, month: 8, day: 1 }],
      },
      {
        title: '论演员的矛盾',
        authors: ['舒强'],
        page_start: 35,
        page_end: 43,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1963, month: 8, day: 1 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.017, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/4db2a2e9-808d-448e-814d-2f23b71c1d43.pdf',
};
