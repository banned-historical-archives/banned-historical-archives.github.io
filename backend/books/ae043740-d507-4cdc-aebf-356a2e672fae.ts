export default {
  entity: {
    id: 'ae043740-d507-4cdc-aebf-356a2e672fae',
    name: '红旗一九六八年第三期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/ae043740-d507-4cdc-aebf-356a2e672fae.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '关于知识分子再教育问题',
        authors: ['《人民日报》编辑部', '《红旗》杂志编辑部'],
        page_start: 6,
        page_end: 8,
        dates: [{ year: 1968 }],
      },
      {
        title: '从上海机械学院两条路线的斗争看理工科大学的教育革命',
        authors: ['《红旗》杂志编辑部'],
        page_start: 11,
        page_end: 17,
        dates: [{ year: 1968, month: 9, day: 4 }],
      },
      {
        title: '在北京市革命群众庆祝大会上周恩来总理的讲话',
        authors: ['周恩来'],
        page_start: 18,
        page_end: 21,
        dates: [{ year: 1968, month: 9, day: 7 }],
      },
      {
        title: '在北京市革命群众庆祝大会上江青同志的讲话',
        authors: ['江青'],
        page_start: 22,
        page_end: 23,
        dates: [{ year: 1968, month: 9, day: 7 }],
      },
      {
        title: '从“赤脚医生”的成长看医学教育革命的方向——上海市的调查报告',
        authors: ['《红旗》杂志编辑部'],
        page_start: 24,
        page_end: 30,
        dates: [{ year: 1968 }],
      },
      {
        title:
          '农村的教育革命必须依靠贫下中农——调查报告，记营口县水源公社开展教育革命的经验',
        authors: ['《人民日报》调查员', '《红旗》杂志调查员'],
        page_start: 31,
        page_end: 35,
        dates: [{ year: 1968 }],
      },
      {
        title: '听毛主席的话，为无产阶级革命开车',
        authors: ['赵树增', '李景霞'],
        page_start: 36,
        page_end: 37,
        dates: [{ year: 1968 }],
      },
      {
        title: '技术大权我们工人掌定了',
        authors: ['黎新功'],
        page_start: 38,
        page_end: 39,
        dates: [{ year: 1968 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.15, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/ae043740-d507-4cdc-aebf-356a2e672fae.pdf',
};
