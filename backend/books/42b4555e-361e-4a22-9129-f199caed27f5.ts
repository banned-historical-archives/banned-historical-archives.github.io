export default {
  entity: {
    id: '42b4555e-361e-4a22-9129-f199caed27f5',
    name: '红旗一九六〇年第十三期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/42b4555e-361e-4a22-9129-f199caed27f5.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '厂社挂钩是加强工农联盟的一种新形式',
        authors: ['黄东青'],
        page_start: 3,
        page_end: 9,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1960, month: 7 }],
      },
      {
        title: '实现农业电气化的道路',
        authors: ['刘澜波'],
        page_start: 10,
        page_end: 16,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1960, month: 7 }],
      },
      {
        title: '发展以人造板为中心的木材综合利用',
        authors: ['雍文涛'],
        page_start: 17,
        page_end: 21,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1960, month: 7 }],
      },
      {
        title: '大搞木材综合利用 大办林产化学工业',
        authors: ['许亚'],
        page_start: 22,
        page_end: 26,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1960, month: 7 }],
      },
      {
        title: '黄口农业中学的两年',
        authors: ['李坚'],
        page_start: 27,
        page_end: 32,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1960, month: 7 }],
      },
      {
        title: '我国工业化有最广阔的国内市场',
        authors: ['苏星'],
        page_start: 33,
        page_end: 43,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1960, month: 7 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.017, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/42b4555e-361e-4a22-9129-f199caed27f5.pdf',
};
