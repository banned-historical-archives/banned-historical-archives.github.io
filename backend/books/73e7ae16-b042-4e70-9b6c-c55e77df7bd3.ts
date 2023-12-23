export default {
  entity: {
    id: '73e7ae16-b042-4e70-9b6c-c55e77df7bd3',
    name: '红旗一九六四年第十三期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/73e7ae16-b042-4e70-9b6c-c55e77df7bd3.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title:
          '关于赫鲁晓夫的假共产主义及其在世界历史上的教训——九评苏共中央的公开信',
        authors: ['《红旗》杂志编辑部', '《人民日报》编辑部'],
        page_start: 3,
        page_end: 35,
        dates: [{ year: 1964 }],
      },
    ],
    ocr: { content_thresholds: [0.07, 0.165, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/73e7ae16-b042-4e70-9b6c-c55e77df7bd3.pdf',
};
