export default {
  entity: {
    id: '7bad84cf-bf80-4e51-9638-bc219b7eee2c',
    name: '路德维希·费尔巴哈和德国古典哲学的终结（人民出版社1972年版）',
    internal: false,
    official: true,
    type: 'pdf',
    author: '恩格斯，人民出版社1972年版',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/7bad84cf-bf80-4e51-9638-bc219b7eee2c.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '1888年单行本序言',
        authors: ['恩格斯'],
        page_start: 8,
        page_end: 9,
        dates: [{ year: 1888, month: 1, day: 21 }],
      },
      {
        title: '路德维希·费尔巴哈和德国古典哲学的终结',
        authors: ['恩格斯'],
        page_start: 10,
        page_end: 54,
        dates: [{ year: 1886 }],
      },
      {
        title: '关于费尔巴哈的提纲',
        authors: ['马克思'],
        page_start: 55,
        page_end: 58,
        dates: [{ year: 1845 }],
      },
      {
        title: '俄译第一版译者的话',
        authors: ['普列汉诺夫'],
        page_start: 66,
        page_end: 67,
        dates: [{ year: 1892, month: 6 }],
      },
      {
        title: '俄译本注释',
        authors: ['普列汉诺夫'],
        page_start: 68,
        page_end: 120,
        dates: [{ year: 1892 }, { year: 1905 }],
      },
      {
        title: '俄译本注释被删去的部分',
        authors: ['普列汉诺夫'],
        page_start: 121,
        page_end: 126,
        dates: [{ year: 1905 }],
      },
      {
        title: '俄译本第二版译者序言',
        authors: ['普列汉诺夫'],
        page_start: 127,
        page_end: 126,
        dates: [{ year: 1905, month: 7, day: 4 }],
      },
      {
        title:
          '《普列汉诺夫哲学著作选集》俄文版编者为普列汉诺夫的序言和注释所加的注释',
        authors: [],
        page_start: 150,
        page_end: 156,
        dates: [],
      },
    ],
    ocr: { content_thresholds: [0, 0.1, 0, 0] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives4/7bad84cf-bf80-4e51-9638-bc219b7eee2c.pdf',
};
