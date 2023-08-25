export default {
  entity: {
    id: 'a4b34da2-312b-4b54-a5ba-79f369386796',
    name: '红旗一九六五年第三期',
    internal: false,
    official: false,
    type: 'pdf',
    author: '',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/a4b34da2-312b-4b54-a5ba-79f369386796.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '评莫斯科三月会议',
        authors: ['人民日报编辑部', '红旗杂志编辑部'],
        page_start: 3,
        page_end: 13,
        dates: [{ year: 1965 }],
      },
      {
        title: '《关于国际共产主义运动总路线的论战》一书的介绍',
        authors: [],
        page_start: 14,
        page_end: 17,
        dates: [{ year: 1965 }],
      },
      {
        title: '每事问',
        authors: ['路力'],
        page_start: 18,
        page_end: 19,
        dates: [{ year: 1965 }],
      },
      {
        title: '殖民主义利用基督教侵略非洲史话',
        authors: ['杨真'],
        page_start: 20,
        page_end: 32,
        dates: [{ year: 1965 }],
      },
      {
        title: '革命歌曲选',
        authors: [],
        page_start: 33,
        page_end: 51,
        dates: [{ year: 1965 }],
      },
      {
        title: '某公三哭',
        authors: ['赵朴初'],
        page_start: 58,
        page_end: 59,
        dates: [
          { year: 1963, month: 11 },
          { year: 1964, month: 5 },
        ],
      },
    ],
    ocr: { content_thresholds: [0.07, 0.165, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/a4b34da2-312b-4b54-a5ba-79f369386796.pdf',
};
