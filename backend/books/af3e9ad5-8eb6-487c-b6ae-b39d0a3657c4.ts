export default {
  entity: {
    id: 'af3e9ad5-8eb6-487c-b6ae-b39d0a3657c4',
    name: '毛远新反动言论摘录（1977.1）',
    internal: true,
    official: true,
    type: 'img',
    author: '毛远新，沈阳军区选编，1977.1印',
    files: new Array(7)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/af3e9ad5-8eb6-487c-b6ae-b39d0a3657c4/${
            idx + 1
          }.`,
      )
      .join(','),
  },
  parser_option: {
    page_limits: [],
    ext: '',
    articles: [
      {
        title: '一、毛远新反对毛主席，反对周总理，反对华主席和中央其他领导同志',
        authors: ['毛远新'],
        page_start: 1,
        page_end: 3,
        ocr_exceptions: { '1': { auto_vsplit: false } },
        dates: [
          { year: 1973 },
          { year: 1968, month: 8 },
          { year: 1971, month: 12 },
          { year: 1972 },
          { year: 1976 },
          { year: 1975, month: 2 },
          { year: 1976, month: 9 },
          { year: 1970 },
        ],
      },
      {
        title: '二、紧密配合“四人帮”破坏批林批孔，破坏学习无产阶级专政理论',
        authors: ['毛远新'],
        page_start: 3,
        page_end: 3,
        dates: [
          { year: 1974, month: 2, day: 3 },
          { year: 1974, month: 2, day: 13 },
          { year: 1975, month: 3, day: 5 },
        ],
      },
      {
        title: '三、贬低诬蔑人民解放军，破坏军队建设，妄图毁我长城',
        authors: ['毛远新'],
        page_start: 3,
        page_end: 5,
        dates: [
          { year: 1974, month: 2, day: 3 },
          { year: 1974, month: 10, day: 16 },
          { year: 1974, month: 10, day: 25 },
          { year: 1974, month: 11, day: 19 },
          { year: 1974, month: 11, day: 20 },
          { year: 1975, month: 2, day: 13 },
          { year: 1975, month: 3, day: 5 },
          { year: 1975, month: 5, day: 30 },
        ],
      },
      {
        title: '四、伙同“四人帮”破坏民兵建设，妄图建立“第二武装”',
        authors: ['毛远新'],
        page_start: 5,
        page_end: 7,
        dates: [
          { year: 1973, month: 12, day: 8 },
          { year: 1973, month: 12, day: 13 },
          { year: 1974, month: 1, day: 14 },
          { year: 1974, month: 3, day: 11 },
          { year: 1974, month: 10, day: 12 },
          { year: 1974, month: 12, day: 3 },
          { year: 1974, month: 11, day: 20 },
          { year: 1975, month: 3, day: 9 },
        ],
      },
    ],
    ocr: { auto_vsplit: true, vsplit: 0.5 },
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives1/af3e9ad5-8eb6-487c-b6ae-b39d0a3657c4',
};
