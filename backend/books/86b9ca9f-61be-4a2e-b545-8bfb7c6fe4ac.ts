export default {
  entity: {
    id: '86b9ca9f-61be-4a2e-b545-8bfb7c6fe4ac',
    name: '政治经济学（帝国主义部分）（南开大学1976年版）',
    internal: true,
    official: true,
    type: 'pdf',
    author: '南开大学1976年版',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/86b9ca9f-61be-4a2e-b545-8bfb7c6fe4ac.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '序言',
        authors: ['南开大学政治经济学系', '南开大学经济研究所'],
        page_start: 6,
        page_end: 10,
        dates: [{ year: 1976, month: 3 }],
      },
      {
        title: '第一章 帝国主义是垄断的资本主义',
        authors: ['南开大学政治经济学系', '南开大学经济研究所'],
        page_start: 11,
        page_end: 80,
        dates: [{ year: 1976, month: 3 }],
      },
      {
        title: '第二章 帝国主义是寄生的或腐朽的资本主义',
        authors: ['南开大学政治经济学系', '南开大学经济研究所'],
        page_start: 81,
        page_end: 104,
        dates: [{ year: 1976, month: 3 }],
      },
      {
        title: '第三章 帝国主义是垂死的资本主义',
        authors: ['南开大学政治经济学系', '南开大学经济研究所'],
        page_start: 105,
        page_end: 172,
        dates: [{ year: 1976, month: 3 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.132, 0, 0] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives3/86b9ca9f-61be-4a2e-b545-8bfb7c6fe4ac.pdf',
};
