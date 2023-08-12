export default {
  entity: {
    id: 'c420a630-29b2-49fe-8d15-949443e92585',
    name: '红旗一九六四年增刊第二号',
    internal: false,
    official: false,
    type: 'pdf',
    author: '',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/c420a630-29b2-49fe-8d15-949443e92585.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '斯大林反对托洛茨基主义和布哈林主义的斗争',
        authors: ['郑言实'],
        page_start: 7,
        page_end: 85,
        dates: [{ year: 1964 }],
      },
    ],
    ocr: { content_thresholds: [0.07, 0.165, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/c420a630-29b2-49fe-8d15-949443e92585.pdf',
};
