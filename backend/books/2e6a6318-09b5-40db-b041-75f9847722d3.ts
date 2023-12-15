export default {
  entity: {
    id: '2e6a6318-09b5-40db-b041-75f9847722d3',
    name: '红旗一九六四年增刊第一号',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/2e6a6318-09b5-40db-b041-75f9847722d3.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '世界共产主义运动的分歧——新西兰共产党的坚定立场',
        authors: ['维·乔·威尔科克斯'],
        page_start: 3,
        page_end: 43,
        dates: [{ year: 1964 }],
      },
      {
        title:
          '马来亚人民的经历驳斥了修正主义者的谬论——几年马来亚人民武装斗争十六周年',
        authors: ['《马来亚箴言》月刊'],
        page_start: 44,
        page_end: 51,
        dates: [{ year: 1964, month: 6, day: 30 }],
      },
    ],
    ocr: { content_thresholds: [0.07, 0.165, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/2e6a6318-09b5-40db-b041-75f9847722d3.pdf',
};
