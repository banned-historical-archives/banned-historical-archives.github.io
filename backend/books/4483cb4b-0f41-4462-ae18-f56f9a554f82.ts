export default {
  entity: {
    id: '4483cb4b-0f41-4462-ae18-f56f9a554f82',
    name: '红旗一九六三年第二十期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/4483cb4b-0f41-4462-ae18-f56f9a554f82.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '新殖民主义的辩护士——四评苏共中央的公开信',
        authors: ['《人民日报》编辑部', '《红旗》杂志编辑部'],
        page_start: 3,
        page_end: 18,
        dates: [{ year: 1963, month: 10, day: 22 }],
      },
      {
        title: '“灵活反应”战略——一条紧勒着美帝国主义脖子的绞索',
        authors: ['范地'],
        page_start: 19,
        page_end: 29,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1963, month: 10, day: 22 }],
      },
      {
        title: '一股革命的火焰在燃烧——读反映美国黑人生活与斗争的文学作品',
        authors: ['施央千'],
        page_start: 30,
        page_end: 35,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1963, month: 10, day: 22 }],
      },
      {
        title: '中国的社会主义工业化（为《社会主义古巴》而作）',
        authors: ['薄一波'],
        page_start: 36,
        page_end: 43,
        dates: [{ year: 1963, month: 10, day: 22 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.017, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/4483cb4b-0f41-4462-ae18-f56f9a554f82.pdf',
};
