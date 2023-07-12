export default {
  entity: {
    id: '7e38d0b6-2fc5-45e9-934e-10202d1892df',
    name: '红旗一九六三年第十二期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/7e38d0b6-2fc5-45e9-934e-10202d1892df.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title:
          '关于国际共产主义运动总路线的建议——中国共产党中央委员会对苏联共产党中央委员会一九六三年三月三十日来信的复信',
        authors: ['中国共产党中央委员会'],
        page_start: 3,
        page_end: 39,
        dates: [{ year: 1963, month: 6, day: 14 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.017, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/7e38d0b6-2fc5-45e9-934e-10202d1892df.pdf',
};
