export default {
  entity: {
    id: '58160986-6729-431e-b547-279b37ed4c32',
    name: '苏联社会主义经济问题（人民出版社1961年版）',
    internal: true,
    official: true,
    type: 'pdf',
    author: '',
    files:
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives5/main/58160986-6729-431e-b547-279b37ed4c32.pdf',
  },
  parser_option: {
    page_limits: [],
    ext: 'pdf',
    articles: [
      {
        title: '对于和一九五一年十一月讨论会有关的经济问题的意见',
        authors: ['斯大林'],
        page_start: 6,
        page_end: 42,
        dates: [{ year: 1952, month: 2, day: 1 }],
      },
      {
        title: '答亚历山大·伊里奇·诺特京同志',
        authors: ['斯大林'],
        page_start: 43,
        page_end: 50,
        dates: [{ year: 1952, month: 4, day: 21 }],
      },
      {
        title: '关于尔·德·雅罗申柯同志的错误',
        authors: ['斯大林'],
        page_start: 52,
        page_end: 72,
        dates: [{ year: 1952, month: 5, day: 22 }],
      },
      {
        title: '答阿·符·萨宁娜和符·格·温什尔两同志',
        authors: ['斯大林'],
        page_start: 73,
        page_end: 81,
        dates: [{ year: 1952, month: 9, day: 28 }],
      },
    ],
    ocr: { content_thresholds: [0, 0.078, 0, 0] },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives5/58160986-6729-431e-b547-279b37ed4c32.pdf',
};
