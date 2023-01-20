export default {
  entity: {
    id: '8da1b3f4-a862-487f-9c7a-af20178846c8',
    name: '资料摘编（内部参考）第七期',
    internal: true,
    official: true,
    type: 'img',
    author: '张春桥，工总司办公室资料组编',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/8da1b3f4-a862-487f-9c7a-af20178846c8/1.jpg,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/8da1b3f4-a862-487f-9c7a-af20178846c8/2.jpg,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/8da1b3f4-a862-487f-9c7a-af20178846c8/3.jpg,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/8da1b3f4-a862-487f-9c7a-af20178846c8/4.jpg,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/8da1b3f4-a862-487f-9c7a-af20178846c8/5.jpg',
  },
  parser_option: {
    page_limits: [],
    ext: 'jpg',
    articles: [
      {
        title:
          '张春桥同志在“热烈欢迎中国人民解放军毛泽东思想宣传队进驻市公安局大会”上讲话（摘录）',
        authors: ['张春桥'],
        page_start: 1,
        page_end: 5,
        ocr_exceptions: { '1': { content_thresholds: [0.3, 0.1, 0, 0] } },
        dates: [{ year: 1967, month: 12, day: 19 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.1, 0, 0] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/8da1b3f4-a862-487f-9c7a-af20178846c8',
};
