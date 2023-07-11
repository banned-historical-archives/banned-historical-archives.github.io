export default {
  entity: {
    id: 'b5267db9-6b8b-41d6-99ce-2c84e62b38af',
    name: '红旗一九六三年第三、四期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/b5267db9-6b8b-41d6-99ce-2c84e62b38af.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '再论陶里亚蒂同志同我们的分歧——关于列宁主义在当代的若干重大问题',
        authors: ['《红旗》杂志编辑部'],
        page_start: 5,
        page_end: 87,
        dates: [{ year: 1963, month: 3, day: 4 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.017, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/b5267db9-6b8b-41d6-99ce-2c84e62b38af.pdf',
};
