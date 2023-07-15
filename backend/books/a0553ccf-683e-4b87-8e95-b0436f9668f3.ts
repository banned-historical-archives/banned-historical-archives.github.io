export default {
  entity: {
    id: 'a0553ccf-683e-4b87-8e95-b0436f9668f3',
    name: '红旗一九六三年第二十二期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/a0553ccf-683e-4b87-8e95-b0436f9668f3.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '在战争与和平问题上的两条路线——五评苏共中央的公开信',
        authors: ['《人民日报》编辑部', '《红旗》杂志编辑部'],
        page_start: 3,
        page_end: 20,
        dates: [{ year: 1963, month: 11, day: 19 }],
      },
      {
        title: '科学技术的组织管理工作',
        authors: ['钱学森'],
        page_start: 21,
        page_end: 29,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1963, month: 11, day: 19 }],
      },
      {
        title: '对农业科学工作者和群众结合进行研究的一些体会',
        authors: ['俞启葆'],
        page_start: 30,
        page_end: 35,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1963, month: 11, day: 19 }],
      },
      {
        title: '在所谓“生而自由”的国度里',
        authors: ['陈原'],
        page_start: 36,
        page_end: 40,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1963, month: 11, day: 19 }],
      },
      {
        title: '美帝国主义的对外文化侵略',
        authors: ['王方'],
        page_start: 41,
        page_end: 47,
        ocr: {
          auto_vsplit: false,
          vsplit: 0.38,
          content_thresholds: [0, 0.17, 0, 0.2],
        },
        dates: [{ year: 1963, month: 11, day: 19 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.017, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/a0553ccf-683e-4b87-8e95-b0436f9668f3.pdf',
};
