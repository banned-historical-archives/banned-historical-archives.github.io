export default {
  entity: {
    id: '0c621503-01d4-4b8f-9cf2-f405bbb14ad9',
    name: '纪念中国共产党成立一百周年（2021.7.1）',
    internal: false,
    official: false,
    type: 'pdf',
    author: '中国共产主义小组（毛主义），2021.7.1',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/0c621503-01d4-4b8f-9cf2-f405bbb14ad9.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '纪念中国共产党成立一百周年',
        alias: '共产主义小组（毛主义）：纪念中国共产党成立一百周年',
        authors: ['共产主义小组（毛主义）'],
        page_start: 1,
        page_end: 23,
        tags: [
          { name: '共产主义小组（毛主义）', type: 'issuer' }, // 发行方/出版方
          { name: '新民主主义革命', type: 'subject' }, // 事件
          { name: '世界形势', type: 'subject' }, // 事件
          { name: '人民战争', type: 'subject' }, // 事件
          { name: '革命的三联合', type: 'subject' }, // 事件
          { name: '革命大联合', type: 'subject' }, // 事件
          { name: '七二〇事件', type: 'subject' }, // 事件
          { name: '党内资产阶级', type: 'subject' }, // 事件
          { name: '资本主义复辟', type: 'subject' }, // 事件
          { name: '佳士运动', type: 'subject' }, // 事件
          { name: '毛主义', type: 'subject' }, // 事件
          { name: '三大工具的同心建设', type: 'subject' }, // 事件
          { name: '两条路线斗争', type: 'subject' }, // 事件
      ],
        dates: [{ year: 2021, month: 7, day: 1 }],
      },
    ],
    ocr: {
      standard_paragraph_merge_strategy_threshold: 0.186,
      differential_paragraph_merge_strategy_threshold: 0,
    },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives3/0c621503-01d4-4b8f-9cf2-f405bbb14ad9.pdf',
};
