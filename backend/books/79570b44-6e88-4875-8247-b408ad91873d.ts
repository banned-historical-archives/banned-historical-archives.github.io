export default {
  entity: {
    id: '79570b44-6e88-4875-8247-b408ad91873d',
    name: '红旗一九六六年第八期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/79570b44-6e88-4875-8247-b408ad91873d.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '毛泽东思想领先 干部层层带头',
        authors: [],
        page_start: 3,
        page_end: 5,
        dates: [{ year: 1966 }],
      },
      {
        title: '无产阶级文化大革命万岁',
        authors: [],
        page_start: 6,
        page_end: 13,
        dates: [{ year: 1966 }],
      },
      {
        title: '横扫一切牛鬼蛇神',
        authors: ['《人民日报》'],
        page_start: 14,
        page_end: 16,
        dates: [{ year: 1966, month: 6, day: 1 }],
      },
      {
        title: '毛泽东思想是我们革命事业的望远镜和显微镜',
        authors: ['《解放军报》'],
        page_start: 17,
        page_end: 19,
        dates: [{ year: 1966, month: 6, day: 7 }],
      },
      {
        title: '工农兵和学生痛斥“三家村”反革命集团',
        authors: [],
        page_start: 20,
        page_end: 35,
        dates: [{ year: 1966 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.15, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/79570b44-6e88-4875-8247-b408ad91873d.pdf',
};
