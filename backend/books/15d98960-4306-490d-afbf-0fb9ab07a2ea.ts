export default {
  entity: {
    id: '15d98960-4306-490d-afbf-0fb9ab07a2ea',
    name: '红旗一九六〇年第十六期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/15d98960-4306-490d-afbf-0fb9ab07a2ea.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '高举总路线的红旗继续前进',
        authors: ['李富春'],
        page_start: 3,
        page_end: 17,
        dates: [{ year: 1960, month: 8 }],
      },
      {
        title: '我国银行的非现金结算',
        authors: ['黄亚光'],
        page_start: 18,
        page_end: 25,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1960, month: 8 }],
      },
      {
        title: '高速度发展我国农业科学的基本经验',
        authors: ['程照轩'],
        page_start: 26,
        page_end: 32,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1960, month: 8 }],
      },
      {
        title: '上海市职工业余教育的新形势',
        authors: ['马飞海'],
        page_start: 33,
        page_end: 38,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1960, month: 8 }],
      },
      {
        title: '十年如一日——北京市第一机床厂的职工业余教育',
        authors: ['陈迹'],
        page_start: 39,
        page_end: 43,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1960, month: 8 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.017, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/15d98960-4306-490d-afbf-0fb9ab07a2ea.pdf',
};
