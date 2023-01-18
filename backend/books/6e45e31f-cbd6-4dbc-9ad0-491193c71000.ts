export default {
  entity: {
    id: '6e45e31f-cbd6-4dbc-9ad0-491193c71000',
    name: '城市工作手册',
    internal: false,
    official: true,
    type: 'pdf',
    author: '印度共产党（毛主义）',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/6e45e31f-cbd6-4dbc-9ad0-491193c71000.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '1.简介',
        authors: ['印度共产党（毛主义）'],
        page_start: 5,
        page_end: 7,
        dates: [{ year: 2004 }],
      },
      {
        title: '2.印度城市',
        authors: ['印度共产党（毛主义）'],
        page_start: 7,
        page_end: 19,
        dates: [{ year: 2004 }],
      },
      {
        title: '3.政策和指导方针',
        authors: ['印度共产党（毛主义）'],
        page_start: 19,
        page_end: 89,
        dates: [{ year: 2004 }],
      },
      {
        title: '4.回顾我们的理解和实践',
        authors: ['印度共产党（毛主义）'],
        page_start: 89,
        page_end: 103,
        dates: [{ year: 2004 }],
      },
      {
        title: '5.目前的任务',
        authors: ['印度共产党（毛主义）'],
        page_start: 103,
        page_end: 112,
        dates: [{ year: 2004 }],
      },
    ],
    ocr: {
      standard_paragraph_merge_strategy_threshold: 0.186,
      differential_paragraph_merge_strategy_threshold: 0,
      content_thresholds: [0, 0, 0, 0],
    },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives3/6e45e31f-cbd6-4dbc-9ad0-491193c71000.pdf',
};
