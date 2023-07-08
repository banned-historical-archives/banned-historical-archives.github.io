export default {
  entity: {
    id: 'b11d4334-af56-4ffb-a3ec-113332ca11a6',
    name: '红旗一九六二年第二十期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/b11d4334-af56-4ffb-a3ec-113332ca11a6.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '农业科学技术战线的光荣任务',
        authors: ['《红旗》杂志编辑部'],
        page_start: 3,
        page_end: 10,
        dates: [{ year: 1962, month: 10, day: 16 }],
      },
      {
        title: '农业科学为农业生产服务',
        authors: ['丁颖'],
        page_start: 11,
        page_end: 14,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1962, month: 10, day: 16 }],
      },
      {
        title: '合理安排农业科学研究工作',
        authors: ['顾复生'],
        page_start: 15,
        page_end: 20,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1962, month: 10, day: 16 }],
      },
      {
        title: '日本人民的斗争和日本共产党',
        authors: ['张香山'],
        page_start: 21,
        page_end: 31,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1962, month: 10, day: 16 }],
      },
      {
        title: '交通运输业的综合平衡问题',
        authors: ['雷汀'],
        page_start: 32,
        page_end: 36,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1962, month: 10, day: 16 }],
      },
      {
        title: '方法和效果',
        authors: ['范丕忠'],
        page_start: 37,
        page_end: 39,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1962, month: 10, day: 16 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.017, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/b11d4334-af56-4ffb-a3ec-113332ca11a6.pdf',
};
