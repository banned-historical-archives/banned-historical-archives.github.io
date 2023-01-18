export default {
  entity: {
    id: '7e5f7d6d-d63e-4257-9381-f4b600c27340',
    name: '红旗一九六七年第十五期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/7e5f7d6d-d63e-4257-9381-f4b600c27340.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '在中华人民共和国成立十八周年庆祝大会上林彪同志的讲话',
        authors: ['林彪'],
        page_start: 6,
        page_end: 8,
        dates: [{ year: 1967 }],
      },
      {
        title:
          '无产阶级专政下的文化大革命胜利万岁——庆祝中华人民共和国成立十八周年',
        authors: [
          '《人民日报》编辑部',
          '《红旗》杂志编辑部',
          '《解放军报》编辑部',
        ],
        page_start: 9,
        page_end: 15,
        dates: [{ year: 1967, month: 9, day: 30 }],
      },
      {
        title: '大立毛泽东思想的伟大革命',
        authors: [],
        page_start: 16,
        page_end: 20,
        dates: [],
      },
      {
        title: '“斗私，批修”，做好各学校各单位的斗批改',
        authors: [],
        page_start: 21,
        page_end: 22,
        dates: [{ year: 1967 }],
      },
      {
        title: '工人阶级联合起来',
        authors: ['《红旗》杂志编辑部'],
        page_start: 23,
        page_end: 24,
        dates: [{ year: 1967 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.15, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/7e5f7d6d-d63e-4257-9381-f4b600c27340.pdf',
};
