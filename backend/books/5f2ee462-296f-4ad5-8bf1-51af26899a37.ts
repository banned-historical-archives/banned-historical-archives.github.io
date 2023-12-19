export default {
  entity: {
    id: '5f2ee462-296f-4ad5-8bf1-51af26899a37',
    name: '红旗一九六五年第八期',
    internal: false,
    official: true,
    type: 'pdf',
    author: '《红旗》杂志编辑部',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives2/main/5f2ee462-296f-4ad5-8bf1-51af26899a37.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '中国人民解放军的民主传统',
        authors: ['贺龙'],
        page_start: 3,
        page_end: 17,
        dates: [{ year: 1965 }],
      },
      {
        title:
          '五亿农民沿着社会主义道路前进的南针——纪念毛泽东同志《关于农业合作化问题》发表十周年',
        authors: ['陶铸'],
        page_start: 18,
        page_end: 32,
        dates: [{ year: 1965 }],
      },
      {
        title: '访瑞金',
        authors: ['郭沫若'],
        page_start: 33,
        page_end: 33,
        dates: [{ year: 1965 }],
      },
      {
        title: '访井冈山',
        authors: ['郭沫若'],
        page_start: 34,
        page_end: 35,
        dates: [{ year: 1965 }],
      },
      {
        title: '访南昌',
        authors: ['郭沫若'],
        page_start: 35,
        page_end: 35,
        dates: [{ year: 1965 }],
      },
      {
        title: '赫鲁晓夫修正主义者的矛盾恐惧症',
        authors: ['毛况生'],
        page_start: 36,
        page_end: 43,
        dates: [{ year: 1965 }],
        ocr: { auto_vsplit: false, vsplit: 0.385 },
      },
      {
        title: '教练工作杂记',
        authors: ['傅其芳'],
        page_start: 44,
        page_end: 51,
        dates: [{ year: 1965 }],
        ocr: { auto_vsplit: false, vsplit: 0.385 },
      },
    ],
    ocr: { content_thresholds: [0.07, 0.165, 0, 0.2] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives2/5f2ee462-296f-4ad5-8bf1-51af26899a37.pdf',
};
