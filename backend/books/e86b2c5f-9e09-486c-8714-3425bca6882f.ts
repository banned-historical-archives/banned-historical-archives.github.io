export default {
  entity: {
    id: 'e86b2c5f-9e09-486c-8714-3425bca6882f',
    name: '马克思恩格斯列宁论无产阶级专政（人民出版社1975年2月）',
    internal: false,
    official: true,
    type: 'pdf',
    author: '马克思、恩格斯、列宁，张春桥、姚文元选编，人民出版社1975年2月',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives3/main/e86b2c5f-9e09-486c-8714-3425bca6882f.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '马克思恩格斯列宁论无产阶级专政',
        authors: ['马克思', '恩格斯', '列宁'],
        page_start: 3,
        page_end: 31,
        dates: [{ year: 1975, month: 2 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.082, 0, 0] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives3/e86b2c5f-9e09-486c-8714-3425bca6882f.pdf',
};
