export default {
  entity: {
    id: '5fdeafb7-1551-491a-bf9c-5d1a3a9f0b8b',
    name: '毛远新在沈阳市学习《关于正确处理人民内部矛盾的问题》落实政策学习班总结大会上的讲话（1969.7.31辽宁）',
    internal: false,
    official: false,
    type: 'img',
    author: '吉林省革命委员会毛泽东思想学习班翻印，1969.7.31',
    files: new Array(11)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives14/main/5fdeafb7-1551-491a-bf9c-5d1a3a9f0b8b/${
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
          '毛远新在沈阳市学习《关于正确处理人民内部矛盾的问题》落实政策学习班总结大会上的讲话',
        alias:
          '毛远新同志七月六日在沈阳市学习《关于正确处理人民内部矛盾的问题》落实政策学习班总结大会上的讲话',
        authors: ['毛远新'],
        page_start: 1,
        page_end: 11,
        dates: [{ year: 1969, month: 7, day: 31 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives14/5fdeafb7-1551-491a-bf9c-5d1a3a9f0b8b',
};
