export default {
  entity: {
    id: 'c02feeb6-58b4-44b9-9965-47de5504e4b7',
    name: '毛远新在批邓、反击右倾翻案风斗争中的一些言论（摘编）',
    internal: true,
    official: true,
    type: 'img',
    author: '',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/c02feeb6-58b4-44b9-9965-47de5504e4b7/1.png,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/c02feeb6-58b4-44b9-9965-47de5504e4b7/2.png,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/c02feeb6-58b4-44b9-9965-47de5504e4b7/3.png,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/c02feeb6-58b4-44b9-9965-47de5504e4b7/4.png,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/c02feeb6-58b4-44b9-9965-47de5504e4b7/5.png,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/c02feeb6-58b4-44b9-9965-47de5504e4b7/6.png,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/c02feeb6-58b4-44b9-9965-47de5504e4b7/7.png,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/c02feeb6-58b4-44b9-9965-47de5504e4b7/8.png,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/c02feeb6-58b4-44b9-9965-47de5504e4b7/9.png,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/c02feeb6-58b4-44b9-9965-47de5504e4b7/10.png',
  },
  parser_option: {
    page_limits: [],
    ext: 'png',
    articles: [
      {
        title: '（一）毛远新在反击右倾翻案风开始时的讲话（摘录）',
        authors: ['毛远新'],
        page_start: 2,
        page_end: 5,
        ocr_exceptions: {
          '2': { content_thresholds: [0, 0, 0.5, 0] },
          '5': { content_thresholds: [0, 0, 0, 0.5] },
        },
        dates: [
          { year: 1975, month: 11, day: 29 },
          { year: 1975, month: 12, day: 1 },
          { year: 1975, month: 12, day: 2 },
        ],
      },
      {
        title: '毛远新的谈话记录',
        alias: '（二）毛远新一九七六年一月一日的谈话（摘录）',
        authors: ['毛远新'],
        page_start: 5,
        page_end: 7,
        ocr_exceptions: { '7': { content_thresholds: [0, 0, 0, 0.5] } },
        dates: [{ year: 1976, month: 1, day: 1 }],
      },
      {
        title: '（三）毛远新一九七六年二月八日的谈话（摘录）',
        authors: ['毛远新'],
        page_start: 7,
        page_end: 7,
        dates: [{ year: 1976, month: 2, day: 8 }],
      },
      {
        title: '毛远新对当前工作的意见',
        alias: '（四）毛远新一九七六年四月十九日谈对当前工作的意见',
        authors: ['毛远新'],
        page_start: 7,
        page_end: 8,
        ocr_exceptions: {
          '7': { content_thresholds: [0, 0, 0.5, 0] },
          '8': { content_thresholds: [0, 0, 0, 0.5] },
        },
        dates: [{ year: 1976, month: 4, day: 19 }],
      },
      {
        title: '毛远新谈话记录',
        alias: '（五）毛远新一九七六年四月二十二日的谈话（摘录）',
        authors: ['毛远新'],
        page_start: 8,
        page_end: 9,
        ocr_exceptions: {
          '8': { content_thresholds: [0, 0, 0.5, 0] },
          '9': { content_thresholds: [0, 0, 0, 0.5] },
        },
        dates: [{ year: 1976, month: 4, day: 22 }],
      },
      {
        title: '毛远新的两次谈话记录',
        alias: '（六）毛远新一九七六年六月二日、五日的两次谈话（摘录）',
        authors: ['毛远新'],
        page_start: 9,
        page_end: 10,
        dates: [
          { year: 1976, month: 6, day: 2 },
          { year: 1976, month: 6, day: 5 },
        ],
      },
    ],
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/c02feeb6-58b4-44b9-9965-47de5504e4b7',
};
