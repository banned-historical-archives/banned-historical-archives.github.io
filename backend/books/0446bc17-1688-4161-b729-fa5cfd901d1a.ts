export default {
  entity: {
    id: '0446bc17-1688-4161-b729-fa5cfd901d1a',
    name: '红旗一九六一年第二期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/0446bc17-1688-4161-b729-fa5cfd901d1a.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '把党的政策交给群众',
        authors: ['施东向'],
        page_start: 3,
        page_end: 6,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 1 }],
      },
      {
        title: '进一步加强生产队的建设',
        authors: ['林一舟'],
        page_start: 7,
        page_end: 10,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 1 }],
      },
      {
        title: '伟大的战略决战',
        authors: ['叶剑英'],
        page_start: 11,
        page_end: 22,
        dates: [{ year: 1961, month: 1 }],
      },
      {
        title: '大抓原料材料，增产更多更好的轻工业品',
        authors: ['宋孟邻'],
        page_start: 23,
        page_end: 28,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 1 }],
      },
      {
        title: '江洲人民公社大办粮食的胜利',
        authors: ['刘光辉', '梅国宝'],
        page_start: 29,
        page_end: 35,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 1 }],
      },
      {
        title: '美国帝国主义侵略政策和战争政策的经济根源',
        authors: ['严耀群'],
        page_start: 36,
        page_end: 43,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1961, month: 1 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.017, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/0446bc17-1688-4161-b729-fa5cfd901d1a.pdf',
};
