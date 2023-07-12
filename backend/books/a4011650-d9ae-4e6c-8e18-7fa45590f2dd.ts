export default {
  entity: {
    id: 'a4011650-d9ae-4e6c-8e18-7fa45590f2dd',
    name: '红旗一九六三年第七、八期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/a4011650-d9ae-4e6c-8e18-7fa45590f2dd.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '价值规律和我们的价格政策',
        authors: ['薛暮桥'],
        page_start: 3,
        page_end: 11,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1963, month: 4, day: 16 }],
      },
      {
        title: '农业生产和农业科学',
        authors: ['陈华癸'],
        page_start: 12,
        page_end: 20,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1963, month: 4, day: 16 }],
      },
      {
        title: '深入生活，提高音乐创作质量',
        authors: ['马可'],
        page_start: 21,
        page_end: 26,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1963, month: 4, day: 16 }],
      },
      {
        title: '谈落实',
        authors: ['唐平铸'],
        page_start: 27,
        page_end: 29,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1963, month: 4, day: 16 }],
      },
      {
        title: '平凡工作与远大抱负',
        authors: ['苗作斌'],
        page_start: 30,
        page_end: 32,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1963, month: 4, day: 16 }],
      },
      {
        title: '列宁反对修正主义、机会主义的斗争（一）',
        authors: ['郑吉宾'],
        page_start: 33,
        page_end: 67,
        dates: [{ year: 1963, month: 4, day: 16 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.017, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/a4011650-d9ae-4e6c-8e18-7fa45590f2dd.pdf',
};
