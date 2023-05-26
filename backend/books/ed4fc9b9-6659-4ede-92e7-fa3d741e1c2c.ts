export default {
  entity: {
    id: 'ed4fc9b9-6659-4ede-92e7-fa3d741e1c2c',
    name: '红旗一九六一年第一期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/ed4fc9b9-6659-4ede-92e7-fa3d741e1c2c.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '在总路线的伟大旗帜下前进',
        authors: ['许辛学'],
        page_start: 3,
        page_end: 7,
        dates: [{ year: 1961, month: 1 }],
      },
      {
        title: '世界人民斗争的新形势',
        authors: ['于兆力'],
        page_start: 8,
        page_end: 18,
        dates: [{ year: 1961, month: 1 }],
      },
      {
        title: '领导农业生产的几点经验',
        authors: ['王任重'],
        page_start: 19,
        page_end: 23,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 1 }],
      },
      {
        title: '在胜利发展中的内蒙古文化教育事业',
        authors: ['胡昭衡'],
        page_start: 24,
        page_end: 30,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 1 }],
      },
      {
        title: '中国革命两个阶段的区别和衔接',
        authors: ['施东向'],
        page_start: 31,
        page_end: 43,
        dates: [{ year: 1961, month: 1 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.017, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/ed4fc9b9-6659-4ede-92e7-fa3d741e1c2c.pdf',
};
