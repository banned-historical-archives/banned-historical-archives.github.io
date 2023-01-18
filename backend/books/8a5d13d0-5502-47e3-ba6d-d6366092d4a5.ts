export default {
  entity: {
    id: '8a5d13d0-5502-47e3-ba6d-d6366092d4a5',
    name: '革命国际主义运动宣言',
    internal: false,
    official: true,
    type: 'pdf',
    author: '革命国际主义运动',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/8a5d13d0-5502-47e3-ba6d-d6366092d4a5.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '革命国际主义运动宣言',
        authors: ['革命国际主义运动'],
        page_start: 1,
        page_end: 19,
        dates: [{ year: 1984, month: 3 }],
      },
    ],
    ocr: {
      standard_paragraph_merge_strategy_threshold: 0.161,
      differential_paragraph_merge_strategy_threshold: 0,
    },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives3/8a5d13d0-5502-47e3-ba6d-d6366092d4a5.pdf',
};
