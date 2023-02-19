export default {
  entity: {
    id: '77a422f8-fc82-4e56-87e4-a6fbd48de6b8',
    name: '“四人帮”罪行材料（三）（1976.12）',
    internal: true,
    official: true,
    type: 'img',
    author: '总参谋部政治部，1976.12',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/77a422f8-fc82-4e56-87e4-a6fbd48de6b8/1.png,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/77a422f8-fc82-4e56-87e4-a6fbd48de6b8/2.png,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/77a422f8-fc82-4e56-87e4-a6fbd48de6b8/3.png,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/77a422f8-fc82-4e56-87e4-a6fbd48de6b8/4.png,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/77a422f8-fc82-4e56-87e4-a6fbd48de6b8/5.png,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/77a422f8-fc82-4e56-87e4-a6fbd48de6b8/6.png,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/77a422f8-fc82-4e56-87e4-a6fbd48de6b8/7.png,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/77a422f8-fc82-4e56-87e4-a6fbd48de6b8/8.png,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/77a422f8-fc82-4e56-87e4-a6fbd48de6b8/9.png',
  },
  parser_option: {
    page_limits: [],
    ext: 'png',
    articles: [
      {
        title: '王洪文在总参民兵组训工作座谈会议上的讲话',
        authors: ['王洪文'],
        page_start: 2,
        page_end: 5,
        ocr_exceptions: { '5': { content_thresholds: [0, 0.09, 0, 0.5] } },
        dates: [{ year: 1974, month: 9, day: 22 }],
      },
      {
        title: '王洪文、张春桥在总参民兵组训工作座谈会议汇报会上的插话',
        authors: ['王洪文', '张春桥'],
        page_start: 5,
        page_end: 9,
        ocr_exceptions: { '5': { content_thresholds: [0, 0.09, 0.5, 0] } },
        dates: [{ year: 1974, month: 9, day: 22 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.09, 0, 0] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/77a422f8-fc82-4e56-87e4-a6fbd48de6b8',
};
