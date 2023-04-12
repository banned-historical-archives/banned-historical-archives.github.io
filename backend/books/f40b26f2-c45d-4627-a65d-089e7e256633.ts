export default {
  entity: {
    id: 'f40b26f2-c45d-4627-a65d-089e7e256633',
    name: '红旗一九六〇年第八期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/f40b26f2-c45d-4627-a65d-089e7e256633.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '列宁主义万岁——纪念列宁诞生九十周年',
        authors: ['《红旗》杂志编辑部'],
        page_start: 3,
        page_end: 31,
        dates: [{ year: 1960, month: 4 }],
      },
      {
        title: '列宁论中国革命',
        authors: ['范若愚'],
        page_start: 32,
        page_end: 36,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1960, month: 4 }],
      },
      {
        title: '工厂技术革命的新气象',
        authors: ['聂荣瑧'],
        page_start: 37,
        page_end: 43,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1960, month: 4 }],
      },
      {
        title: '大办公共食堂 办好公共食堂',
        authors: ['林一舟'],
        page_start: 44,
        page_end: 46,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1960, month: 4 }],
      },
      {
        title: '越南社会主义改造和社会主义建设的巨大成就',
        authors: ['何伟'],
        page_start: 47,
        page_end: 51,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1960, month: 4 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.017, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/f40b26f2-c45d-4627-a65d-089e7e256633.pdf',
};
