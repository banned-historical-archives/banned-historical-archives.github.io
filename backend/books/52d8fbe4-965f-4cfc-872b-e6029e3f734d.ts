export default {
  entity: {
    id: '52d8fbe4-965f-4cfc-872b-e6029e3f734d',
    name: '在北京接见辽革站赴京代表团时毛远新同志的讲话（1968.3.4）',
    internal: false,
    official: false,
    type: 'img',
    author:
      '毛远新，1968.3.4，辽革站《迎曙光》战斗兵团、阜联筹《红色风雷》编辑部翻印',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/52d8fbe4-965f-4cfc-872b-e6029e3f734d/1.jpg,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/52d8fbe4-965f-4cfc-872b-e6029e3f734d/2.jpg',
  },
  parser_option: {
    page_limits: [],
    ext: 'jpg',
    articles: [
      {
        title: '毛远新同志在北京会见辽革站赴京代表团时的讲话',
        alias: '在北京接见辽革站赴京代表团时毛远新同志的讲话',
        authors: ['毛远新'],
        page_start: 1,
        page_end: 2,
        dates: [{ year: 1968, month: 3, day: 4 }],
        tags: [
          { name: '辽革站《迎曙光》战斗兵团', type: 'reprint' }, // 翻印/传抄
          { name: '阜联筹《红色风雷》编辑部', type: 'reprint' }, // 翻印/传抄
        ],
      },
    ],
    ocr: { auto_vsplit: true, vsplit: 0.5 },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/52d8fbe4-965f-4cfc-872b-e6029e3f734d',
};
