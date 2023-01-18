export default {
  entity: {
    id: '6f37606f-a3d5-47bb-b957-b2fa6bcf72fe',
    name: '张春桥同志二月二十五日与华东局革命造反派座谈纪要',
    internal: true,
    official: true,
    type: 'img',
    author: '',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/6f37606f-a3d5-47bb-b957-b2fa6bcf72fe/1.jpg,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/6f37606f-a3d5-47bb-b957-b2fa6bcf72fe/2.jpg,https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/6f37606f-a3d5-47bb-b957-b2fa6bcf72fe/3.jpg',
  },
  parser_option: {
    page_limits: [],
    ext: 'jpg',
    articles: [
      {
        title: '张春桥同志与华东局革命造反派座谈纪要',
        authors: ['张春桥'],
        page_start: 1,
        page_end: 3,
        ocr_exceptions: { '3': { content_thresholds: [0, 0.07, 0, 0.5] } },
        dates: [{ year: 1967, month: 2, day: 25 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.07, 0, 0] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/6f37606f-a3d5-47bb-b957-b2fa6bcf72fe',
};
