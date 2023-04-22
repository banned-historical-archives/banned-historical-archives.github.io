export default {
  entity: {
    id: '9b8c23c7-dcb2-4851-aadd-6f203ecba496',
    name: '红旗一九六〇年第十九期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/9b8c23c7-dcb2-4851-aadd-6f203ecba496.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '中国人民革命战争的胜利是毛泽东思想的胜利',
        authors: ['林彪'],
        page_start: 3,
        page_end: 14,
        dates: [{ year: 1960, month: 10 }],
      },
      {
        title: '在战略上藐视敌人，在战术上重视敌人',
        authors: ['《红旗》杂志编辑部'],
        page_start: 15,
        page_end: 19,
        dates: [{ year: 1960, month: 10 }],
      },
      {
        title: '“毛泽东选集”第四卷介绍',
        authors: ['《红旗》杂志编辑部'],
        page_start: 20,
        page_end: 26,
        dates: [{ year: 1960, month: 10 }],
      },
      {
        title: '推行农业机械化的几个问题',
        authors: ['冯纪新'],
        page_start: 27,
        page_end: 32,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1960, month: 10 }],
      },
      {
        title: '教育工作必须更好地为农业生产服务',
        authors: ['张承先'],
        page_start: 33,
        page_end: 37,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1960, month: 10 }],
      },
      {
        title: '大搞综合利用 发展多种经营',
        authors: ['中共第一汽车制造厂委员会'],
        page_start: 38,
        page_end: 43,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1960, month: 10 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.017, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/9b8c23c7-dcb2-4851-aadd-6f203ecba496.pdf',
};
