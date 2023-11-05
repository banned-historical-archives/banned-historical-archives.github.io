export default {
  entity: {
    id: 'fdb9a78a-8243-498b-afd0-8e0e918c1a0c',
    name: '江西通讯第四期',
    internal: false,
    official: false,
    type: 'img',
    author: '中共江西省委办公厅',
    files: new Array(20)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives14/main/fdb9a78a-8243-498b-afd0-8e0e918c1a0c/${
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
        title:
          '江渭清同志在江西军民揭批“四人帮”及其亲信涂、于、李反革命罪行大会上的讲话',
        authors: ['江渭清'],
        page_start: 2,
        page_end: 4,
        dates: [{ year: 1977 }],
      },
      {
        title:
          '白栋材同志在江西军民揭批“四人帮”及其亲信涂、于、李反革命罪行大会上的讲话',
        authors: ['白栋材'],
        page_start: 4,
        page_end: 11,
        dates: [{ year: 1977 }],
      },
      {
        title:
          '张志勇同志在江西军民揭批“四人帮”及其亲信涂、于、李反革命罪行大会上的发言',
        authors: ['张志勇'],
        page_start: 12,
        page_end: 15,
        dates: [{ year: 1977 }],
      },
      {
        title:
          '王昭平同志在江西军民揭批“四人帮”及其亲信涂、于、李反革命罪行大会上的发言',
        authors: ['王昭平'],
        page_start: 15,
        page_end: 20,
        dates: [{ year: 1977 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives14/fdb9a78a-8243-498b-afd0-8e0e918c1a0c',
};
