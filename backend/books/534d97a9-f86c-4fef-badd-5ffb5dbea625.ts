export default {
  entity: {
    id: '534d97a9-f86c-4fef-badd-5ffb5dbea625',
    name: '彻底揭发批判王张江姚反党集团发言材料汇编（六）',
    internal: false,
    official: false,
    type: 'img',
    author: '中共山东省委宣传部',
    files: new Array(11)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives14/main/534d97a9-f86c-4fef-badd-5ffb5dbea625/${
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
          '彻底揭发批判“四人帮”插手昌潍，阴谋篡党夺权，复辟资本主义的滔天罪行——中国昌潍地委书记魏坚毅同志在全区深入揭发批判“四人帮”有线广播大会上的发言',
        authors: ['魏坚毅'],
        page_start: 2,
        page_end: 7,
        dates: [{ year: 1977, month: 3 }],
      },
      {
        title:
          '彻底揭发批判王张江姚“四人帮”插手我区，制造混乱，大搞反革命夺权的滔天罪行——中共临沂地委副书记李洪成同志在全区揭发批判“四人帮”有线广播大会上的发言',
        authors: ['李洪成'],
        page_start: 8,
        page_end: 11,
        dates: [{ year: 1977, month: 3 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives14/534d97a9-f86c-4fef-badd-5ffb5dbea625',
};
