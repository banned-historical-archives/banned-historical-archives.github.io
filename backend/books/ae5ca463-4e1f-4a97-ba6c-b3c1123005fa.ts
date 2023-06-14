export default {
  entity: {
    id: 'ae5ca463-4e1f-4a97-ba6c-b3c1123005fa',
    name: '红旗一九六一年第六期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/ae5ca463-4e1f-4a97-ba6c-b3c1123005fa.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '坚持政治挂帅 抓紧具体措施',
        authors: ['《红旗》杂志编辑部'],
        page_start: 3,
        page_end: 6,
        dates: [{ year: 1961, month: 3 }],
      },
      {
        title: '纪念巴黎公社',
        authors: ['施东向'],
        page_start: 7,
        page_end: 10,
        dates: [{ year: 1961, month: 3 }],
      },
      {
        title: '解决轻工业原料供应问题的途径',
        authors: ['孔祥祯'],
        page_start: 11,
        page_end: 19,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 3 }],
      },
      {
        title: '文化遗产的学习和批判问题',
        authors: ['吴江'],
        page_start: 20,
        page_end: 25,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 3 }],
      },
      {
        title: '做支援农业的尖兵',
        authors: ['张维城'],
        page_start: 26,
        page_end: 29,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 3 }],
      },
      {
        title: '社会主义革命中的农民问题',
        authors: ['肖述'],
        page_start: 30,
        page_end: 43,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 3 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.017, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/ae5ca463-4e1f-4a97-ba6c-b3c1123005fa.pdf',
};
