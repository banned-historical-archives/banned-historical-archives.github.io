export default {
  entity: {
    id: '7492dacf-eac4-45d3-aecb-6184761f1139',
    name: '毛远新和江青两篇讲话（1968.3）',
    internal: false,
    official: false,
    type: 'img',
    author: '毛远新、江青，1968.3.19、1968.3.20，',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/7492dacf-eac4-45d3-aecb-6184761f1139/1.jpg,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/7492dacf-eac4-45d3-aecb-6184761f1139/2.jpg',
  },
  parser_option: {
    page_limits: [],
    ext: 'jpg',
    articles: [
      {
        title: '毛远新同志在辽联赴京代表团座谈会上的讲话纪要',
        authors: ['毛远新'],
        page_start: 1,
        page_end: 2,
        tags: [{
          name: '北京',
          type: 'issuer' // 发行方/出版方
        }, {
          name: '辽宁文革',
          type: 'subject' // 事件
        }, {
          name: '二月逆流',
          type: 'subject' // 事件
        }, {
          name: '批斗宋任穷',
          type: 'subject' // 事件
        }, {
          name: '辽联',
          type: 'character' // 人物
        }, {
          name: '辽革站',
          type: 'character' // 人物
        }, {
          name: '八三一',
          type: 'character' // 人物
        }],
        ocr_exceptions: {
          '2': {
            auto_vsplit: true,
            vsplit: 0.5,
            content_thresholds: [0, 0.41, 0, 0],
          },
        },
        dates: [{ year: 1968, month: 3, day: 20 }],
      },
      {
        title: '江青同志接见江苏代表团的讲话',
        alias: '江青同志昨天接见江苏代表团的一段讲话',
        authors: ['江青'],
        page_start: 2,
        page_end: 2,
        tags: [{
          name: '二月逆流',
          type: 'subject' // 事件
        }],
        ocr_exceptions: {
          '2': {
            auto_vsplit: true,
            vsplit: 0.5,
            content_thresholds: [0.59, 0.2, 0, 0],
          },
        },
        dates: [{ year: 1968, month: 3, day: 19 }],
      },
    ],
    ocr: { auto_vsplit: true, vsplit: 0.5 },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/7492dacf-eac4-45d3-aecb-6184761f1139',
};
