export default {
  entity: {
    id: '96cf538b-06b1-4ae6-b135-e7c0750c736c',
    name: '红旗一九六〇年第二十二期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/96cf538b-06b1-4ae6-b135-e7c0750c736c.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '工农业并举是我国社会主义经济的一个重要规律',
        authors: ['《红旗》杂志编辑部'],
        page_start: 3,
        page_end: 8,
        dates: [{ year: 1960, month: 11 }],
      },
      {
        title: '科学的论断和预见——学习“毛泽东选集”第四卷关于国际问题的论点',
        authors: ['闻师润'],
        page_start: 9,
        page_end: 23,
        dates: [{ year: 1960, month: 11 }],
      },
      {
        title: '党的政策是革命胜利的保证',
        authors: ['肖述', '杨甫'],
        page_start: 24,
        page_end: 36,
        dates: [{ year: 1960, month: 11 }],
      },
      {
        title: '人民公社财务工作如何为分配服务',
        authors: ['金明'],
        page_start: 37,
        page_end: 42,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1960, month: 11 }],
      },
      {
        title: '不断提高设备质量 挖掘铁路运输潜力',
        authors: ['中共锦州铁路局委员会'],
        page_start: 43,
        page_end: 47,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1960, month: 11 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.017, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/96cf538b-06b1-4ae6-b135-e7c0750c736c.pdf',
};
