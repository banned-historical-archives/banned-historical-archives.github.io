export default {
  entity: {
    id: '006412bf-a8dd-4db3-9ad4-97e9581cf69d',
    name: '彻底揭发批判王张江姚反党集团发言材料汇编（十）',
    internal: false,
    official: false,
    type: 'img',
    author: '中共山东省委宣传部',
    files: new Array(16)
      .fill(0)
      .map(
        (i, idx) =>
          `https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives15/main/006412bf-a8dd-4db3-9ad4-97e9581cf69d/${
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
          '揭发批判“四人帮”的亲信张延成插手济南，制造大乱，篡党夺权的罪行——中共济南市委副书记张骏同志在济南市揭批“四人帮”亲信张延成罪行大会上的发言',
        authors: ['张骏'],
        page_start: 2,
        page_end: 6,
        dates: [{ year: 1977, month: 11, day: 15 }],
      },
      {
        title:
          '揭发批判“四人帮”的亲信张延成插手昌潍，制造大乱，篡党夺权的罪行——中共昌潍地委常委远东同志在昌潍地区揭批“四人帮”亲信张延成罪行大会上的发言',
        authors: ['远东'],
        page_start: 7,
        page_end: 11,
        dates: [{ year: 1977, month: 11, day: 15 }],
      },
      {
        title:
          '揭发批判“四人帮”的亲信张延成插手枣庄，制造大乱，篡党夺权的罪行——中共枣庄市委常委周子明同志在枣庄市揭批“四人帮”亲信张延成罪行大会上的发言',
        authors: ['周子明'],
        page_start: 12,
        page_end: 16,
        dates: [{ year: 1977, month: 11, day: 15 }],
      },
    ],
    ocr: undefined,
    ocr_exceptions: {},
  },
  parser_id: 'automation',
  path: '/archives15/006412bf-a8dd-4db3-9ad4-97e9581cf69d',
};
